param(
  [switch]$ListOnly,
  [switch]$Upload,
  [string]$UploadFile,
  [string]$RemoteDirectory
)

$ErrorActionPreference = "Stop"

$workspaceRoot = Split-Path -Parent $PSScriptRoot
$profilePath = Join-Path $workspaceRoot ".codex\ftp-profile.json"
$profile = Get-Content -Raw -LiteralPath $profilePath | ConvertFrom-Json

if (-not ("CredentialReader" -as [type])) {
  Add-Type @"
using System;
using System.ComponentModel;
using System.Runtime.InteropServices;

public static class CredentialReader
{
    [StructLayout(LayoutKind.Sequential, CharSet = CharSet.Unicode)]
    private struct CREDENTIAL
    {
        public uint Flags;
        public uint Type;
        public IntPtr TargetName;
        public IntPtr Comment;
        public System.Runtime.InteropServices.ComTypes.FILETIME LastWritten;
        public uint CredentialBlobSize;
        public IntPtr CredentialBlob;
        public uint Persist;
        public uint AttributeCount;
        public IntPtr Attributes;
        public IntPtr TargetAlias;
        public IntPtr UserName;
    }

    [DllImport("advapi32.dll", EntryPoint = "CredReadW", CharSet = CharSet.Unicode, SetLastError = true)]
    private static extern bool CredRead(string target, uint type, uint reservedFlag, out IntPtr credentialPtr);

    [DllImport("advapi32.dll", SetLastError = true)]
    private static extern void CredFree(IntPtr credentialPtr);

    public static string ReadPassword(string target)
    {
        IntPtr credentialPtr;
        if (!CredRead(target, 1, 0, out credentialPtr))
        {
            throw new Win32Exception(Marshal.GetLastWin32Error(), "Unable to read the saved FTP credential.");
        }

        try
        {
            CREDENTIAL credential = (CREDENTIAL)Marshal.PtrToStructure(credentialPtr, typeof(CREDENTIAL));
            return Marshal.PtrToStringUni(credential.CredentialBlob, (int)credential.CredentialBlobSize / 2);
        }
        finally
        {
            CredFree(credentialPtr);
        }
    }
}
"@
}

$password = [CredentialReader]::ReadPassword($profile.credentialTarget)
$credential = [System.Net.NetworkCredential]::new($profile.username, $password)
$baseUri = "ftp://$($profile.host):$($profile.port)"
if (-not $RemoteDirectory) { $RemoteDirectory = $profile.remoteDirectory }

function New-FtpRequest {
  param(
    [Parameter(Mandatory)] [string]$Uri,
    [Parameter(Mandatory)] [string]$Method
  )

  $request = [System.Net.FtpWebRequest]::Create($Uri)
  $request.Method = $Method
  $request.Credentials = $credential
  $request.EnableSsl = $true
  $request.UseBinary = $true
  $request.UsePassive = $true
  $request.KeepAlive = $false
  return $request
}

function Get-FtpDirectoryListing {
  param([string]$Directory = "")

  $path = $Directory.Trim("/")
  $uri = if ($path) { "$baseUri/$path/" } else { "$baseUri/" }
  $request = New-FtpRequest -Uri $uri -Method ([System.Net.WebRequestMethods+Ftp]::ListDirectoryDetails)
  $response = $request.GetResponse()
  try {
    $reader = [System.IO.StreamReader]::new($response.GetResponseStream())
    try { return $reader.ReadToEnd() } finally { $reader.Dispose() }
  }
  finally {
    $response.Dispose()
  }
}

function Ensure-FtpDirectory {
  param([Parameter(Mandatory)] [string]$Directory)

  $segments = $Directory.Trim("/").Split("/", [System.StringSplitOptions]::RemoveEmptyEntries)
  $current = ""
  foreach ($segment in $segments) {
    $current = if ($current) { "$current/$segment" } else { $segment }
    $request = New-FtpRequest -Uri "$baseUri/$current/" -Method ([System.Net.WebRequestMethods+Ftp]::MakeDirectory)
    try {
      $response = $request.GetResponse()
      $response.Dispose()
    }
    catch [System.Net.WebException] {
      $ftpResponse = $_.Exception.Response -as [System.Net.FtpWebResponse]
      if (-not $ftpResponse -or $ftpResponse.StatusCode -ne [System.Net.FtpStatusCode]::ActionNotTakenFileUnavailable) {
        throw
      }
      $ftpResponse.Dispose()
    }
  }
}

function Send-FtpFile {
  param(
    [Parameter(Mandatory)] [string]$LocalPath,
    [Parameter(Mandatory)] [string]$RemotePath
  )

  $uploadUri = "$baseUri/$RemotePath"
  $startInfo = [System.Diagnostics.ProcessStartInfo]::new()
  $startInfo.FileName = "curl.exe"
  $startInfo.Arguments = "--config - --ssl-reqd --ftp-create-dirs --silent --show-error --fail --upload-file `"$LocalPath`" `"$uploadUri`""
  $startInfo.UseShellExecute = $false
  $startInfo.CreateNoWindow = $true
  $startInfo.RedirectStandardInput = $true
  $startInfo.RedirectStandardOutput = $true
  $startInfo.RedirectStandardError = $true
  $startInfo.StandardInputEncoding = [System.Text.UTF8Encoding]::new($false)

  $process = [System.Diagnostics.Process]::Start($startInfo)
  $process.StandardInput.WriteLine("user = `"$($profile.username):$password`"")
  $process.StandardInput.Close()
  $standardOutput = $process.StandardOutput.ReadToEnd()
  $standardError = $process.StandardError.ReadToEnd()
  $process.WaitForExit()

  if ($process.ExitCode -ne 0) {
    throw "curl upload failed for $RemotePath (exit $($process.ExitCode)): $standardError"
  }
  if ($standardOutput) { Write-Verbose $standardOutput }
  Write-Output "Uploaded $RemotePath"
}

if ($ListOnly) {
  Get-FtpDirectoryListing -Directory $RemoteDirectory
  exit 0
}

if ($UploadFile) {
  if (-not $RemoteDirectory) {
    throw "RemoteDirectory is required for uploads."
  }

  $distPath = Join-Path $workspaceRoot $profile.uploadSource
  $relativePath = ($UploadFile -replace '^[\\/]+', '').Replace("\", "/")
  $localPath = Join-Path $distPath $relativePath
  if (-not (Test-Path -LiteralPath $localPath -PathType Leaf)) {
    throw "The requested dist file does not exist: $relativePath"
  }

  Send-FtpFile -LocalPath $localPath -RemotePath "$($RemoteDirectory.Trim('/'))/$relativePath"
  exit 0
}

if ($Upload) {
  if (-not $RemoteDirectory) {
    throw "RemoteDirectory is required for uploads."
  }

  $distPath = Join-Path $workspaceRoot $profile.uploadSource
  if (-not (Test-Path -LiteralPath (Join-Path $distPath "index.html"))) {
    throw "The dist directory is missing index.html. Run the production build first."
  }

  $entryFile = Get-Item -LiteralPath (Join-Path $distPath "index.html")
  $distFullPath = (Resolve-Path -LiteralPath $distPath).Path.TrimEnd("\")
  $files = @(
    Get-ChildItem -LiteralPath $distPath -Recurse -File |
      Where-Object { $_.FullName -ne $entryFile.FullName }
  ) + @($entryFile)
  foreach ($file in $files) {
    $relativePath = $file.FullName.Substring($distFullPath.Length).TrimStart("\").Replace("\", "/")
    $remotePath = "$($RemoteDirectory.Trim('/'))/$relativePath"
    Send-FtpFile -LocalPath $file.FullName -RemotePath $remotePath
  }
  Write-Output "Upload complete: $($files.Count) files."
  exit 0
}

throw "Specify -ListOnly or -Upload."

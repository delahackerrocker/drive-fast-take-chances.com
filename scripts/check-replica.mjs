import fs from "node:fs";

const requiredFiles = [
  "src/data/referenceContent.js",
  "src/components/SiteLink.jsx",
  "src/components/ReplicaHeader.jsx",
  "src/components/ReplicaFooter.jsx",
  "src/components/ReplicaPrimitives.jsx",
  "src/pages/ReferenceHome.jsx",
  "src/pages/ReferenceWork.jsx",
  "src/pages/ReferenceAbout.jsx",
  "src/pages/ReferenceServices.jsx",
  "src/pages/ReferenceCaseStudy.jsx",
  "src/styles/replica.css",
];

const missing = requiredFiles.filter((file) => !fs.existsSync(file));
if (missing.length) {
  throw new Error(`Missing replica files: ${missing.join(", ")}`);
}

const checked = requiredFiles
  .map((file) => fs.readFileSync(file, "utf8"))
  .join("\n");

if (/Awwwards/i.test(checked)) {
  throw new Error("The award widget is forbidden in replica source.");
}

if (/label:\s*["']Writing["']/i.test(checked)) {
  throw new Error("Writing navigation is forbidden in replica source.");
}

const app = fs.readFileSync("src/App.jsx", "utf8");
for (const route of [
  "/work",
  "/about",
  "/services",
  "/work/call-of-duty",
  "/work/gr1m01re",
]) {
  if (!app.includes(route)) {
    throw new Error(`Missing route: ${route}`);
  }
}

const header = fs.readFileSync("src/components/ReplicaHeader.jsx", "utf8");
for (const behavior of ["aria-expanded", "Escape", "is-open"]) {
  if (!header.includes(behavior)) {
    throw new Error(`Missing mobile navigation behavior: ${behavior}`);
  }
}

for (const socialLink of ["LinkedIn", "GitHub"]) {
  if (!header.includes(`"${socialLink}"`)) {
    throw new Error(`Missing top navigation link: ${socialLink}`);
  }
}

const siteLink = fs.readFileSync("src/components/SiteLink.jsx", "utf8");
if (!siteLink.includes('target={href.startsWith("http") ? "_blank"')) {
  throw new Error("External navigation links must open in a new tab.");
}

const css = fs.readFileSync("src/styles/replica.css", "utf8");
for (const rule of ["@media (max-width: 960px)", "@media (max-width: 720px)", "prefers-reduced-motion", ":focus-visible"]) {
  if (!css.includes(rule)) {
    throw new Error(`Missing responsive or accessibility rule: ${rule}`);
  }
}

console.log("Replica structure and exclusions verified.");

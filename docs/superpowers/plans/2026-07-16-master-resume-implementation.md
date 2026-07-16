# Steven de la Torre Master Resume Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce a visually polished, ATS-readable, approximately two-page master resume in matching DOCX and PDF formats with an editable Markdown source.

**Architecture:** A Markdown file will hold the final approved copy. A focused Python builder will transform that content into a styled DOCX using explicit page, typography, list, hyperlink, and section-heading definitions. The bundled DOCX renderer will create the matching PDF and page images, after which structural extraction and visual inspection will verify both formats.

**Tech Stack:** Bundled Python runtime, `python-docx`, OOXML helpers, LibreOffice DOCX renderer, Poppler, `pdfplumber`, `pypdf`

## Global Constraints

- Preserve `src/styles/replica.css` exactly as-is.
- Use `https://practitioner.digital` as the portfolio URL.
- Use the supplied master resume brief as the factual source of truth.
- Keep the deliverable approximately two US Letter pages with 0.65-inch margins.
- Use a single-column ATS-readable content flow.
- Use Practitioner.Digital cyan `#12B5CD` behind major section titles.
- Keep all important content as selectable text in normal document flow.
- Do not perform Git staging, commits, branch changes, merges, or pushes.
- Deliver only `Steven_de_la_Torre_Master_Resume.md`, `Steven_de_la_Torre_Master_Resume.docx`, and `Steven_de_la_Torre_Master_Resume.pdf` from `output/resume/`.

---

### Task 1: Resolve the Document Runtime and Authoring Rules

**Files:**
- Read: bundled document runtime metadata
- Read: bundled document creation, design-preset, header-template, and verification guidance
- Create: `tmp/resume/`
- Create: `output/resume/`

**Interfaces:**
- Consumes: approved design specification and supplied master resume brief
- Produces: authoritative Python executable path, library path, renderer path, and resolved numeric design tokens

- [ ] **Step 1: Load the bundled workspace dependencies**

Call the workspace dependency loader and record the returned Python executable, package directory, LibreOffice renderer, and Poppler paths.

- [ ] **Step 2: Read the required creation references completely**

Read `tasks/create_edit.md`, `references/design_presets.md`, `references/header_templates.md`, and `tasks/verify_render.md` from the bundled documents skill directory. Select the closest compact professional preset and override only the approved branding tokens.

- [ ] **Step 3: Resolve the resume token map**

Use US Letter portrait, 0.65-inch margins, Aptos/Arial-compatible typography, near-black body text, cyan `#12B5CD` section fills, real list numbering, explicit paragraph spacing, and no floating text boxes or essential header/footer content.

- [ ] **Step 4: Create task-local working and output directories**

Create `tmp/resume/` for builders and QA renders and `output/resume/` for the three final deliverables.

### Task 2: Finalize the Editable Resume Copy

**Files:**
- Create: `output/resume/Steven_de_la_Torre_Master_Resume.md`

**Interfaces:**
- Consumes: `pasted-text.txt`, approved design specification, `https://practitioner.digital`
- Produces: complete ordered resume content used by the DOCX builder

- [ ] **Step 1: Normalize the supplied copy**

Correct broken character encoding and required terminology: `Principal Gameplay Designer`, `Lua`, `Jira`, `3ds Max`, `UI`, `UX`, `AR`, `VR`, and `MR`.

- [ ] **Step 2: Edit the content to the approved page budget**

Preserve the strongest detail for Imprezario Entertainment, Activision Blizzard / Raven Software, freelance Unity work, and PRACT1T10N3R / GR1M01RE. Condense older roles without deleting entire roles, awards, or credentials.

- [ ] **Step 3: Apply the final section order**

Write name and contact information, professional title, summary, core capabilities, experience, selected independent work, skills, awards and recognition, and education and certifications in one unambiguous reading sequence.

- [ ] **Step 4: Run a factual and consistency review**

Search for unsupported metrics, invented technologies, old portfolio URLs, inconsistent date dashes, inconsistent company names, and placeholder text. The expected result is no placeholder and no occurrence of `drive-fast-take-chances.com`.

### Task 3: Build the Branded DOCX

**Files:**
- Create: `tmp/resume/build_resume.py`
- Create: `output/resume/Steven_de_la_Torre_Master_Resume.docx`

**Interfaces:**
- Consumes: `output/resume/Steven_de_la_Torre_Master_Resume.md`
- Produces: ATS-readable DOCX with stable styles, real bullets, and clickable links

- [ ] **Step 1: Implement reusable style helpers**

Define focused helpers for page setup, style creation, cyan section bars, role headings, real bullet numbering, hyperlinks, keep-with-next behavior, and widow/orphan control. Use inline paragraphs and paragraph shading rather than shapes or floating text boxes.

- [ ] **Step 2: Implement the document assembly**

Build the opening identity block, summary, capabilities, role groups, independent work, skills, awards, and education from the Markdown content. Keep every role heading with its metadata and first bullet.

- [ ] **Step 3: Add accessible hyperlinks**

Create clickable relationships for `https://practitioner.digital`, the LinkedIn profile, and the email address while retaining visible text that remains meaningful when printed.

- [ ] **Step 4: Generate and structurally inspect the DOCX**

Run the builder with the bundled Python runtime. Reopen the DOCX with `python-docx`, confirm it has paragraphs, real list numbering, hyperlink relationships, exactly one section, US Letter dimensions, and no essential text in headers, footers, drawings, or text boxes.

### Task 4: Render, Inspect, and Tune the DOCX

**Files:**
- Modify: `tmp/resume/build_resume.py`
- Regenerate: `output/resume/Steven_de_la_Torre_Master_Resume.docx`
- Create: `tmp/resume/docx-render/page-1.png`
- Create: `tmp/resume/docx-render/page-2.png`

**Interfaces:**
- Consumes: generated DOCX and bundled `render_docx.py`
- Produces: visually approved two-page DOCX and renderer-produced PDF

- [ ] **Step 1: Render the DOCX with PDF emission**

Run the bundled renderer against the final DOCX with `--emit_pdf`, writing page PNGs and the PDF into `tmp/resume/docx-render/`.

- [ ] **Step 2: Inspect every rendered page at full detail**

Open both page images and check margins, cyan section bars, heading hierarchy, bullet indentation, link presentation, clipping, overlap, blank areas, role continuity, and final-page balance.

- [ ] **Step 3: Tune and re-render until the document is approximately two pages**

Adjust copy density first, then paragraph spacing, heading spacing, and font size within the approved readable range. Repeat render and inspection after every meaningful revision until there are two clean pages with no orphaned final lines.

- [ ] **Step 4: Copy the renderer-produced PDF to the output directory**

Copy the visually approved PDF to `output/resume/Steven_de_la_Torre_Master_Resume.pdf` so DOCX and PDF layouts originate from the same source.

### Task 5: Verify ATS Reading Order and PDF Integrity

**Files:**
- Create: `tmp/resume/docx-text.txt`
- Create: `tmp/resume/pdf-text.txt`
- Inspect: all three final deliverables

**Interfaces:**
- Consumes: final Markdown, DOCX, and PDF
- Produces: evidence that content, links, fonts, and reading order survived export

- [ ] **Step 1: Extract DOCX text in document order**

Use `python-docx` plus direct OOXML hyperlink traversal so linked text appears in extraction. Confirm the extracted order begins with Steven de la Torre and proceeds through education and certifications.

- [ ] **Step 2: Extract PDF text**

Use `pdfplumber` or Poppler text extraction. Compare normalized section headings, company names, dates, contact details, bullet content, awards, and credentials against the Markdown and DOCX extraction.

- [ ] **Step 3: Inspect PDF metadata, fonts, links, and page count**

Use `pdfinfo`, `pdffonts`, and `pypdf` to confirm the PDF opens, contains two nonblank US Letter pages, includes safe embedded or substituted fonts, and retains link annotations.

- [ ] **Step 4: Render and visually inspect the final PDF**

Render the output PDF to PNG with Poppler and inspect both pages at full detail. Confirm the PDF matches the latest DOCX render and has no missing glyphs, clipping, overlap, blank pages, or broken cyan bars.

### Task 6: Final Deliverable Audit

**Files:**
- Verify: `output/resume/Steven_de_la_Torre_Master_Resume.md`
- Verify: `output/resume/Steven_de_la_Torre_Master_Resume.docx`
- Verify: `output/resume/Steven_de_la_Torre_Master_Resume.pdf`

**Interfaces:**
- Consumes: completed outputs and QA evidence
- Produces: final user-ready resume package

- [ ] **Step 1: Confirm stable filenames and successful opening**

Check that all three files exist, are nonempty, and can be parsed by their corresponding Markdown, DOCX, and PDF tools.

- [ ] **Step 2: Confirm repository safety**

Run `git status --short` and verify `src/styles/replica.css` remains the pre-existing user modification and that only the approved specification, plan, output files, and task-local intermediates were added.

- [ ] **Step 3: Deliver only the final artifacts**

Return direct links to the DOCX, PDF, and Markdown files. Do not include internal scripts, extracted text, page PNGs, or other QA intermediates.

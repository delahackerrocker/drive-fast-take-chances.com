# Steven de la Torre Three-Page Master Resume Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce a second, expanded three-page master resume in matching DOCX and PDF formats without changing the approved two-page edition.

**Architecture:** A task-local Markdown source will hold expanded copy derived from the supplied master resume brief. Dedicated Python builders will reuse the approved visual tokens to create a three-page DOCX and PDF with explicit page breaks, followed by Word inspection, Poppler rendering, and structural ATS validation.

**Tech Stack:** Bundled Python runtime, `python-docx`, OOXML helpers, ReportLab, Microsoft Word, Poppler, `pypdf`, `pdfplumber`

## Global Constraints

- Preserve all existing `Steven_de_la_Torre_Master_Resume.*` files exactly as committed.
- Create only `Steven_de_la_Torre_Master_Resume_3_Page.docx` and `Steven_de_la_Torre_Master_Resume_3_Page.pdf` as new final deliverables.
- Use `https://practitioner.digital` as the portfolio URL.
- Use the supplied master resume brief as the factual source of truth.
- Produce exactly three nonblank US Letter pages in each final format.
- Reuse cyan `#12B5CD`, near-black text, a single-column reading order, real bullets, and clickable links.
- Keep all essential content as selectable text in normal reading order.
- Commit the verified three-page deliverables after generation.

---

### Task 1: Expand the Recruiter-Focused Resume Copy

**Files:**
- Create: `tmp/resume/Steven_de_la_Torre_Master_Resume_3_Page.md`
- Read: `C:/Users/steve/.codex/attachments/8a49e6b3-df92-4477-b52c-da943508d300/pasted-text.txt`
- Read: `output/resume/Steven_de_la_Torre_Master_Resume.md`

**Interfaces:**
- Consumes: supplied factual brief and approved two-page copy
- Produces: expanded ordered content for both builders

- [ ] **Step 1: Restore recent-role detail**

Expand Imprezario Entertainment and Activision Blizzard / Raven Software to approximately five or six concise bullets each, preserving current tense for the active role and past tense for completed work.

- [ ] **Step 2: Restore immersive and older-role detail**

Expand both freelance roles and Sabertooth with supported project, client, production, and leadership context. Keep Yahoo! and Warner Bros. Online concise but more detailed than the two-page edition.

- [ ] **Step 3: Expand independent work and skills**

Restore systems, tooling, accessibility, validation, and human-in-the-loop AI detail for PRACT1T10N3R / GR1M01RE. Separate the skills taxonomy into Systems and Design, Programming, Engines and Technology, Art and Visual Production, Production and Collaboration, and AI-Assisted Work.

- [ ] **Step 4: Audit factual consistency**

Search the expanded source for placeholder text, the retired domain, unsupported technologies, invented metrics, and inconsistent capitalization. Expected result: no matches for placeholder language, `drive-fast-take-chances.com`, `LUA`, `JIRA`, `3DS Max`, or `Principle Gameplay Designer`.

### Task 2: Build the Three-Page DOCX

**Files:**
- Create: `tmp/resume/build_resume_3_page.py`
- Create: `output/resume/Steven_de_la_Torre_Master_Resume_3_Page.docx`

**Interfaces:**
- Consumes: task-local expanded Markdown source
- Produces: three-page ATS-readable DOCX

- [ ] **Step 1: Reuse the approved style system**

Copy the stable page, typography, hyperlink, shading, numbering, keep-with-next, and metadata helpers from `tmp/resume/build_resume.py`. Increase body and bullet typography modestly while retaining 0.65-inch side margins and cyan section bars.

- [ ] **Step 2: Apply deterministic page ownership**

Insert a manual page break and `Professional Experience — Continued` band before the first freelance Unity role. Insert a second manual break before `Selected Independent Work` so that pages 1, 2, and 3 match the approved specification.

- [ ] **Step 3: Generate and structurally inspect the DOCX**

Run the builder with the bundled Python executable. Reopen the file with `python-docx` and verify one section, US Letter geometry, two manual page-break markers, real bullet numbering, all three hyperlinks, no drawings or text boxes, and no essential header/footer content.

### Task 3: Build the Matching Three-Page PDF

**Files:**
- Create: `tmp/resume/build_pdf_3_page.py`
- Create: `output/resume/Steven_de_la_Torre_Master_Resume_3_Page.pdf`

**Interfaces:**
- Consumes: task-local expanded Markdown source
- Produces: three-page branded PDF using the same content and design tokens

- [ ] **Step 1: Reuse the approved PDF styles**

Copy the stable Arial embedding, section bar, body, role, metadata, technology, bullet, link, and page-number definitions from `tmp/resume/build_pdf.py`, with modestly larger type and spacing.

- [ ] **Step 2: Mirror DOCX page breaks**

Break before the first freelance Unity role and before `Selected Independent Work`, adding `Professional Experience — Continued` at the top of page 2.

- [ ] **Step 3: Generate the PDF**

Run the builder with the bundled Python executable and confirm the output is nonempty and parseable by `pypdf`.

### Task 4: Render and Visually Tune Both Formats

**Files:**
- Modify: `tmp/resume/build_resume_3_page.py`
- Modify: `tmp/resume/build_pdf_3_page.py`
- Regenerate: both final deliverables
- Create: `tmp/resume/pdf-render-3-page/page-1.png`
- Create: `tmp/resume/pdf-render-3-page/page-2.png`
- Create: `tmp/resume/pdf-render-3-page/page-3.png`

**Interfaces:**
- Consumes: generated DOCX and PDF
- Produces: visually approved three-page layouts

- [ ] **Step 1: Render the PDF with Poppler**

Render all pages at 144 DPI and verify that exactly three PNG files are produced.

- [ ] **Step 2: Inspect all PDF pages**

Review page balance, section transitions, cyan bars, margins, hierarchy, bullet indentation, wrapping, clipping, overlap, blank areas, and final-page completeness.

- [ ] **Step 3: Open and inspect the DOCX in Microsoft Word**

Inspect pages 1, 2, and 3 at normal zoom, including both manual page transitions and the final education line. Confirm Word reports three pages and no role heading is orphaned.

- [ ] **Step 4: Tune and repeat**

Adjust copy length first, then paragraph spacing and font size. Regenerate and repeat both visual checks after every meaningful change until both formats contain three clean, balanced pages.

### Task 5: Run ATS and Integrity Validation

**Files:**
- Create: `tmp/resume/validate_resume_3_page.py`
- Create: `tmp/resume/docx-text-3-page.txt`
- Create: `tmp/resume/pdf-text-3-page.txt`

**Interfaces:**
- Consumes: final three-page DOCX and PDF
- Produces: machine-readable evidence that all delivery requirements pass

- [ ] **Step 1: Validate DOCX structure**

Check file integrity, Letter geometry, margins, real bullet count, hyperlink relationships, page-break markers, absence of drawings/text boxes, empty nonessential headers/footers, essential section text, and current portfolio URL.

- [ ] **Step 2: Validate PDF structure**

Check three nonblank Letter pages, three or more link annotations, embedded or safe fonts, selectable contact information, and complete essential section text.

- [ ] **Step 3: Compare reading order and preserve originals**

Extract both formats in reading order and compare company names, dates, major section headings, awards, and credentials. Run `git diff --exit-code` on all original two-page files to prove they remain unchanged.

### Task 6: Commit and Deliver the Three-Page Edition

**Files:**
- Commit: `output/resume/Steven_de_la_Torre_Master_Resume_3_Page.docx`
- Commit: `output/resume/Steven_de_la_Torre_Master_Resume_3_Page.pdf`
- Commit: `docs/superpowers/plans/2026-07-16-master-resume-3-page-implementation.md`

**Interfaces:**
- Consumes: verified final artifacts
- Produces: committed three-page resume package

- [ ] **Step 1: Run final fresh verification**

Execute the complete validation script, PDF metadata inspection, and final page-image inspection. Expected result: every automated check passes and all three pages are visually clean.

- [ ] **Step 2: Stage only approved files**

Stage the new DOCX, PDF, and this implementation plan. Do not stage `tmp/` or change the original two-page files.

- [ ] **Step 3: Commit the edition**

Create a descriptive commit for the new three-page resume package and report the resulting commit hash with direct links to both final files.

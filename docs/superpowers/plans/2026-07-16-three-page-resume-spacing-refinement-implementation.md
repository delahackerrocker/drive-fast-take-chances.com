# Three-Page Resume Spacing Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebalance the existing three-page resume so page 1 is larger and fuller while pages 2 and 3 share the maximum safe increase in inter-section spacing.

**Architecture:** Add logical-page-aware formatting hooks to the task-local DOCX and PDF builders. The three-page wrappers will define a page-1 typography profile and one shared pages-2-and-3 spacing profile, while the base builders retain their current default behavior for the two-page edition.

**Tech Stack:** Python, python-docx, ReportLab, OOXML, Poppler, Microsoft Word visual inspection

## Global Constraints

- Keep the DOCX and PDF at exactly three US Letter pages.
- Do not add, remove, reorder, or move resume content between pages.
- Preserve the existing manual page breaks, margins, links, native bullets, selectable text, and cyan `#12B5CD` visual system.
- Leave the original two-page resume unchanged.
- Keep page-2 and page-3 font sizes unchanged.
- Apply exactly the same inter-section spacing increment to pages 2 and 3.

---

### Task 1: Add Logical-Page Formatting Hooks

**Files:**
- Modify: `tmp/resume/build_resume.py`
- Modify: `tmp/resume/build_pdf.py`

**Interfaces:**
- Consumes: Existing manual role and section page-break sets.
- Produces: A logical page number available to DOCX font/geometry hooks and a `resolve_style(styles, name, logical_page)` hook for PDF flowables.

- [ ] **Step 1: Record the baseline page allocation**

Run the existing three-page builders and validator. Expected: page count is 3, page-break count is 2, and all structural checks pass.

- [ ] **Step 2: Add logical page tracking to the DOCX builder**

Initialize `CURRENT_PAGE = 1` at build start and increment it immediately before formatting each manually page-broken continuation or section paragraph. Keep the default `set_font` and paragraph geometry behavior unchanged.

- [ ] **Step 3: Add page-aware style resolution to the PDF builder**

Define `resolve_style(styles, name, logical_page)` to return `styles[name]` by default. Track `logical_page` while parsing and use the resolver for every Paragraph style lookup; increment before adding each manual `PageBreak`.

- [ ] **Step 4: Rebuild and verify no baseline regression**

Run both builders and the validator. Expected: the files remain three pages and all existing validation checks pass.

### Task 2: Tune Page 1 Typography and Spacing

**Files:**
- Modify: `tmp/resume/build_resume_3_page.py`
- Modify: `tmp/resume/build_pdf_3_page.py`
- Modify: `output/resume/Steven_de_la_Torre_Master_Resume_3_Page.docx`
- Modify: `output/resume/Steven_de_la_Torre_Master_Resume_3_Page.pdf`

**Interfaces:**
- Consumes: Logical page hooks from Task 1.
- Produces: Page-1-only font and spacing profiles; pages 2 and 3 retain their current font sizes.

- [ ] **Step 1: Add the page-1 DOCX profile**

Scale page-1 text at or below 12 pt by a starting factor of `1.055`, scale page-1 display text above 12 pt by `1.035`, and increase page-1 paragraph before/after spacing with a starting factor of `1.28`. Leave later-page font sizes unchanged.

- [ ] **Step 2: Add the page-1 PDF profile**

Clone each base style by logical page. On page 1, apply the same `1.055` small-type and `1.035` display-type factors and a starting `1.28` inter-block spacing factor; leave page-2 and page-3 font sizes unchanged.

- [ ] **Step 3: Render and adjust page 1**

Rebuild both formats, render all pages, and tune the page-1 factors within the approved ranges until Activision ends comfortably above the bottom margin without spilling to page 2.

### Task 3: Maximize Shared Pages-2-and-3 Spacing

**Files:**
- Modify: `tmp/resume/build_resume_3_page.py`
- Modify: `tmp/resume/build_pdf_3_page.py`
- Modify: `output/resume/Steven_de_la_Torre_Master_Resume_3_Page.docx`
- Modify: `output/resume/Steven_de_la_Torre_Master_Resume_3_Page.pdf`

**Interfaces:**
- Consumes: Logical page hooks and stable page-1 profile.
- Produces: One numeric shared spacing increment used identically on logical pages 2 and 3.

- [ ] **Step 1: Establish the shared spacing increment**

Increase section-bar and role-block before/after spacing on logical page 2 in small increments. Rebuild after each change and stop at the largest value that keeps Warner Bros. Online fully above the bottom margin.

- [ ] **Step 2: Apply the identical increment to page 3**

Use the same numeric multiplier or point increment for equivalent section and role spacing on logical page 3. Do not enlarge page-3 type or stretch body paragraphs.

- [ ] **Step 3: Render all pages of both formats**

Render DOCX and PDF pages to PNG. Inspect every page at full resolution for clipping, overlap, broken hierarchy, awkward gaps, and page-boundary drift.

### Task 4: Validate and Commit the Revised Deliverables

**Files:**
- Test: `tmp/resume/validate_resume_3_page.py`
- Modify: `output/resume/Steven_de_la_Torre_Master_Resume_3_Page.docx`
- Modify: `output/resume/Steven_de_la_Torre_Master_Resume_3_Page.pdf`

**Interfaces:**
- Consumes: Final revised DOCX and PDF.
- Produces: Verified three-page artifacts and one local Git commit.

- [ ] **Step 1: Run structural validation**

Run `validate_resume_3_page.py`. Expected: all checks true, 3 PDF pages, 2 DOCX manual breaks, 43 native DOCX bullets, 3 PDF link annotations, selectable text, and safe fonts.

- [ ] **Step 2: Confirm repository scope**

Run Git diff/status checks. Expected: only the two three-page deliverables are tracked modifications; the original two-page resume has no diff.

- [ ] **Step 3: Commit the revision**

Stage only the revised three-page DOCX and PDF and commit with `docs: refine three-page resume spacing`.

- [ ] **Step 4: Re-run validation after commit**

Run the validator again and confirm an exit code of 0 before reporting completion.

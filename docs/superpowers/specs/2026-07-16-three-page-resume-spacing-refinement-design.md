# Three-Page Resume Spacing Refinement Design

## Objective

Refine the existing three-page master resume so page 1 uses its available space more confidently and pages 2 and 3 have a more generous, consistent rhythm. Do not add, remove, or move resume content between pages.

## Page 1 Treatment

Page 1 is the primary recruiter-facing page and will receive a local typography and spacing treatment:

- Increase page-1 body text, bullets, role titles, metadata, technology lines, and contact text by approximately 5–7%.
- Increase the name and professional title by approximately 3–4%.
- Increase vertical spacing between the header, Professional Summary, Core Capabilities, Imprezario Entertainment, and Activision Blizzard / Raven Software blocks by approximately 25–35%.
- Preserve the existing margins, cyan title bars, content, single-column reading order, and manual page break after Activision.
- Tune the exact values by rendering until the page feels intentionally full without clipping, crowding, or pushing content onto page 2.

## Pages 2 and 3 Treatment

Page 2 is the limiting page for the shared spacing adjustment:

- Increase spacing between major sections and role blocks on page 2 until the final Warner Bros. Online content remains comfortably above the bottom margin.
- Use the largest visually useful increment that preserves the full page-2 content and avoids clipping or spillover.
- Apply that exact same spacing increment to the equivalent section and role-block spacing on page 3.
- Accept the remaining open space at the bottom of page 3; do not stretch individual paragraphs or add filler content solely to occupy it.
- Keep all page-2 and page-3 font sizes unchanged so those pages remain compact and information-dense.

## Invariants

- The DOCX and PDF remain exactly three US Letter pages.
- Page ownership and manual page breaks remain unchanged.
- No resume wording, claims, dates, links, bullets, or section ordering changes.
- The original two-page resume remains unchanged.
- ATS-safe structure, selectable text, native DOCX bullets, hyperlinks, and the Practitioner.Digital cyan visual system remain intact.

## Validation

- Render the revised DOCX to page PNGs and inspect all three pages at full resolution.
- Render the revised PDF and inspect all three pages at full resolution.
- Confirm page 1 fills the usable page naturally without crowding.
- Confirm page 2 uses the shared spacing increment without crossing the bottom margin.
- Confirm page 3 uses the same increment as page 2.
- Re-run structural checks for exact page count, page size, margins, manual breaks, bullets, hyperlinks, selectable text, and font safety.

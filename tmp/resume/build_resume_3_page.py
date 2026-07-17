from pathlib import Path

import build_resume as base
from docx import Document
from docx.oxml.ns import qn
from docx.shared import Pt


_original_set_font = base.set_font
_original_geometry = base.set_cell_free_paragraph_geometry

PAGE_ONE_SMALL_TYPE_SCALE = 1.05
PAGE_ONE_DISPLAY_TYPE_SCALE = 1.03
PAGE_ONE_SPACING_SCALE = 1.25
PAGE_ONE_SECTION_SPACE_BEFORE = 6.0
PAGE_ONE_SECTION_SPACE_AFTER = 3.0
PAGE_ONE_ROLE_SPACE_BEFORE = 4.0
PAGE_ONE_ROLE_SPACE_AFTER = 1.5
SHARED_BLOCK_SPACE_BEFORE = 2.0
SHARED_BLOCK_SPACE_AFTER = 0.75


def scaled_set_font(run, name=base.FONT, size=8.55, color=base.BLACK, bold=None, italic=None):
    scaled_size = size * 1.10 if size <= 12 else size
    return _original_set_font(run, name=name, size=scaled_size, color=color, bold=bold, italic=italic)


def scaled_geometry(paragraph, before=0, after=0, line=1.0):
    return _original_geometry(paragraph, before=before * 1.10, after=after * 1.18, line=line * 1.04)


base.set_font = scaled_set_font
base.set_cell_free_paragraph_geometry = scaled_geometry
base.SOURCE = Path(__file__).with_name("Steven_de_la_Torre_Master_Resume_3_Page.md")
base.OUTPUT = base.ROOT / "output" / "resume" / "Steven_de_la_Torre_Master_Resume_3_Page.docx"
base.ROLE_PAGE_BREAKS = {
    "FREELANCE — Unity UX Developer": "PROFESSIONAL EXPERIENCE — CONTINUED",
}
base.SECTION_PAGE_BREAKS = {"Selected Independent Work"}


def _effective_spacing(paragraph, attribute):
    direct = getattr(paragraph.paragraph_format, attribute)
    if direct is not None:
        return direct.pt
    inherited = getattr(paragraph.style.paragraph_format, attribute)
    return inherited.pt if inherited is not None else 0.0


def _set_spacing(paragraph, before, after):
    paragraph.paragraph_format.space_before = Pt(before)
    paragraph.paragraph_format.space_after = Pt(after)


def _scale_paragraph_runs(paragraph):
    for run_element in paragraph._p.xpath(".//w:r"):
        run_properties = run_element.find(qn("w:rPr"))
        if run_properties is None:
            continue
        for size_name in ("w:sz", "w:szCs"):
            size_element = run_properties.find(qn(size_name))
            if size_element is None:
                continue
            half_points = int(size_element.get(qn("w:val")))
            scale = PAGE_ONE_DISPLAY_TYPE_SCALE if half_points > 48 else PAGE_ONE_SMALL_TYPE_SCALE
            size_element.set(qn("w:val"), str(round(half_points * scale)))


def refine_document():
    document = Document(base.OUTPUT)
    logical_page = 1
    for paragraph in document.paragraphs:
        if paragraph.paragraph_format.page_break_before:
            logical_page += 1

        before = _effective_spacing(paragraph, "space_before")
        after = _effective_spacing(paragraph, "space_after")
        style_name = paragraph.style.name

        if logical_page == 1:
            _scale_paragraph_runs(paragraph)
            before *= PAGE_ONE_SPACING_SCALE
            after *= PAGE_ONE_SPACING_SCALE
            if style_name == "Resume Section":
                before += PAGE_ONE_SECTION_SPACE_BEFORE
                after += PAGE_ONE_SECTION_SPACE_AFTER
            elif style_name == "Resume Role":
                before += PAGE_ONE_ROLE_SPACE_BEFORE
                after += PAGE_ONE_ROLE_SPACE_AFTER
            _set_spacing(paragraph, before, after)
        elif style_name in {"Resume Section", "Resume Role"}:
            _set_spacing(
                paragraph,
                before + SHARED_BLOCK_SPACE_BEFORE,
                after + SHARED_BLOCK_SPACE_AFTER,
            )

    document.save(base.OUTPUT)


if __name__ == "__main__":
    base.build()
    refine_document()

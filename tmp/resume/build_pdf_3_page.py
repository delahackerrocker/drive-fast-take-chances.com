from pathlib import Path

import build_pdf as base


_original_make_styles = base.make_styles
_page_style_cache = {}

PAGE_ONE_SMALL_TYPE_SCALE = 1.10
PAGE_ONE_DISPLAY_TYPE_SCALE = 1.04
PAGE_ONE_SPACING_SCALE = 1.80
PAGE_ONE_SECTION_SPACE_BEFORE = 8.0
PAGE_ONE_SECTION_SPACE_AFTER = 4.0
PAGE_ONE_ROLE_SPACE_BEFORE = 6.0
PAGE_ONE_ROLE_SPACE_AFTER = 2.0
SHARED_BLOCK_SPACE_BEFORE = 12.0
SHARED_BLOCK_SPACE_AFTER = 4.0


def expanded_make_styles():
    styles = _original_make_styles()
    for name, style in styles.items():
        if style.fontSize <= 12:
            style.fontSize *= 1.10
            style.leading *= 1.10
        if name not in {"name", "title", "contact", "links"}:
            style.spaceBefore *= 1.12
            style.spaceAfter *= 1.18
    return styles


def page_aware_style(styles, name, logical_page):
    key = (logical_page, name)
    if key in _page_style_cache:
        return _page_style_cache[key]

    style = styles[name].clone(f"{styles[name].name}-Page-{logical_page}")
    if logical_page == 1:
        type_scale = PAGE_ONE_SMALL_TYPE_SCALE if style.fontSize <= 12 else PAGE_ONE_DISPLAY_TYPE_SCALE
        style.fontSize *= type_scale
        style.leading *= type_scale
        if name not in {"name", "title", "contact", "links"}:
            style.spaceBefore *= PAGE_ONE_SPACING_SCALE
            style.spaceAfter *= PAGE_ONE_SPACING_SCALE
        if name == "section":
            style.spaceBefore += PAGE_ONE_SECTION_SPACE_BEFORE
            style.spaceAfter += PAGE_ONE_SECTION_SPACE_AFTER
        elif name == "role":
            style.spaceBefore += PAGE_ONE_ROLE_SPACE_BEFORE
            style.spaceAfter += PAGE_ONE_ROLE_SPACE_AFTER
    elif name in {"section", "role"}:
        style.spaceBefore += SHARED_BLOCK_SPACE_BEFORE
        style.spaceAfter += SHARED_BLOCK_SPACE_AFTER

    _page_style_cache[key] = style
    return style


base.make_styles = expanded_make_styles
base.resolve_style = page_aware_style
base.SOURCE = Path(__file__).with_name("Steven_de_la_Torre_Master_Resume_3_Page.md")
base.OUTPUT = base.ROOT / "output" / "resume" / "Steven_de_la_Torre_Master_Resume_3_Page.pdf"
base.ROLE_PAGE_BREAKS = {
    "ACTIVISION BLIZZARD / RAVEN SOFTWARE": "Professional Experience — Continued",
    "YAHOO!": "Professional Experience — Continued",
}
base.SECTION_PAGE_BREAKS = set()


if __name__ == "__main__":
    base.build()

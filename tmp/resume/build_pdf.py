from pathlib import Path
import re

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
)


ROOT = Path(__file__).resolve().parents[2]
SOURCE = ROOT / "output" / "resume" / "Steven_de_la_Torre_Master_Resume.md"
OUTPUT = ROOT / "output" / "resume" / "Steven_de_la_Torre_Master_Resume.pdf"
ROLE_PAGE_BREAKS = {
    "FREELANCE — Mixed Reality Developer": "Professional Experience — Continued",
}
SECTION_PAGE_BREAKS = set()

CYAN = colors.HexColor("#12B5CD")
CYAN_DARK = colors.HexColor("#007888")
BLACK = colors.HexColor("#050505")
GRAY = colors.HexColor("#4F4F4F")
LIGHT_GRAY = colors.HexColor("#676767")


pdfmetrics.registerFont(TTFont("Arial", r"C:\Windows\Fonts\arial.ttf"))
pdfmetrics.registerFont(TTFont("Arial-Bold", r"C:\Windows\Fonts\arialbd.ttf"))
pdfmetrics.registerFont(TTFont("Arial-Italic", r"C:\Windows\Fonts\ariali.ttf"))


def escape(text):
    return text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def markdown_inline(text):
    text = escape(text.replace("  ", ""))
    text = re.sub(r"\*\*(.*?)\*\*", r"<b>\1</b>", text)
    text = re.sub(r"\[(.*?)\]\((.*?)\)", r'<link href="\2" color="#007888">\1</link>', text)
    return text


def resolve_style(styles, name, logical_page):
    return styles[name]


def section_bar(text, styles, logical_page):
    return Paragraph(escape(text.upper()), resolve_style(styles, "section", logical_page))


def draw_page_number(canvas, doc):
    canvas.saveState()
    canvas.setFont("Arial", 6.8)
    canvas.setFillColor(colors.HexColor("#777777"))
    canvas.drawRightString(letter[0] - 0.65 * inch, 0.30 * inch, str(doc.page))
    canvas.restoreState()


def make_styles():
    return {
        "name": ParagraphStyle(
            "Name",
            fontName="Arial-Bold",
            fontSize=23,
            leading=23,
            textColor=BLACK,
            spaceAfter=1.5,
            keepWithNext=True,
        ),
        "title": ParagraphStyle(
            "Title",
            fontName="Arial-Bold",
            fontSize=10.1,
            leading=10.8,
            textColor=CYAN_DARK,
            spaceAfter=2.0,
            keepWithNext=True,
        ),
        "contact": ParagraphStyle(
            "Contact",
            fontName="Arial",
            fontSize=8.2,
            leading=9.0,
            textColor=GRAY,
            spaceAfter=0,
            keepWithNext=True,
        ),
        "links": ParagraphStyle(
            "Links",
            fontName="Arial",
            fontSize=8.2,
            leading=9.0,
            textColor=CYAN_DARK,
            spaceAfter=4.0,
        ),
        "section": ParagraphStyle(
            "Section",
            fontName="Arial-Bold",
            fontSize=9.0,
            leading=12.4,
            textColor=BLACK,
            backColor=CYAN,
            borderPadding=(1.7, 4.0, 1.5, 4.0),
            spaceBefore=4.2,
            spaceAfter=3.2,
            keepWithNext=True,
        ),
        "body": ParagraphStyle(
            "Body",
            fontName="Arial",
            fontSize=8.35,
            leading=9.25,
            textColor=BLACK,
            spaceAfter=2.2,
            alignment=TA_LEFT,
            allowWidows=0,
            allowOrphans=0,
        ),
        "compact": ParagraphStyle(
            "Compact",
            fontName="Arial",
            fontSize=7.65,
            leading=8.5,
            textColor=BLACK,
            spaceAfter=1.3,
            allowWidows=0,
            allowOrphans=0,
        ),
        "role": ParagraphStyle(
            "Role",
            fontName="Arial-Bold",
            fontSize=9.1,
            leading=9.8,
            textColor=BLACK,
            spaceBefore=3.5,
            spaceAfter=0.5,
            keepWithNext=True,
        ),
        "meta": ParagraphStyle(
            "Meta",
            fontName="Arial-Bold",
            fontSize=7.75,
            leading=8.2,
            textColor=GRAY,
            spaceAfter=0.3,
            keepWithNext=True,
        ),
        "tech": ParagraphStyle(
            "Tech",
            fontName="Arial",
            fontSize=7.4,
            leading=8.0,
            textColor=CYAN_DARK,
            spaceAfter=1.6,
            keepWithNext=True,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            fontName="Arial",
            fontSize=8.05,
            leading=8.95,
            textColor=BLACK,
            leftIndent=14,
            firstLineIndent=-7,
            bulletIndent=0,
            spaceAfter=1.2,
            allowWidows=0,
            allowOrphans=0,
        ),
    }


def build():
    styles = make_styles()
    width, height = letter
    frame = Frame(
        0.65 * inch,
        0.52 * inch,
        width - 1.30 * inch,
        height - 1.08 * inch,
        leftPadding=0,
        rightPadding=0,
        topPadding=0,
        bottomPadding=0,
    )
    document = BaseDocTemplate(
        str(OUTPUT),
        pagesize=letter,
        leftMargin=0.65 * inch,
        rightMargin=0.65 * inch,
        topMargin=0.56 * inch,
        bottomMargin=0.52 * inch,
        title="Steven de la Torre Master Resume",
        author="Steven de la Torre",
        subject="Systems Design, Software Development, UX, and Interactive Design",
    )
    document.addPageTemplates([PageTemplate(id="resume", frames=[frame], onPage=draw_page_number)])

    story = []
    lines = SOURCE.read_text(encoding="utf-8").splitlines()
    current_section = ""
    after_role = False
    pending_role = []
    logical_page = 1

    def flush_pending():
        nonlocal pending_role
        if pending_role:
            story.append(KeepTogether(pending_role))
            pending_role = []

    for raw in lines:
        line = raw.strip()
        if not line:
            continue
        if line.startswith("# "):
            story.append(Paragraph(escape(line[2:]), resolve_style(styles, "name", logical_page)))
            continue
        if line.startswith("**Systems Designer"):
            story.append(Paragraph(markdown_inline(line), resolve_style(styles, "title", logical_page)))
            continue
        if line.startswith("Columbus, OH"):
            story.append(
                Paragraph(
                    'Columbus, OH&nbsp;&nbsp;·&nbsp;&nbsp;(614) 802-7774&nbsp;&nbsp;·&nbsp;&nbsp;'
                    '<link href="mailto:SteveDeLaTorre@gmail.com" color="#007888">SteveDeLaTorre@gmail.com</link>',
                    resolve_style(styles, "contact", logical_page),
                )
            )
            continue
        if line.startswith("[Portfolio]"):
            story.append(
                Paragraph(
                    '<link href="https://practitioner.digital" color="#007888"><b>practitioner.digital</b></link>'
                    '&nbsp;&nbsp;·&nbsp;&nbsp;'
                    '<link href="https://www.linkedin.com/in/delahackerrocker/" color="#007888">linkedin.com/in/delahackerrocker</link>',
                    resolve_style(styles, "links", logical_page),
                )
            )
            continue
        if line.startswith("## "):
            flush_pending()
            current_section = line[3:]
            if current_section in SECTION_PAGE_BREAKS:
                story.append(PageBreak())
                logical_page += 1
            story.append(section_bar(current_section, styles, logical_page))
            after_role = False
            continue
        if line.startswith("### "):
            flush_pending()
            heading = line[4:]
            continuation_label = next(
                (label for prefix, label in ROLE_PAGE_BREAKS.items() if heading.startswith(prefix)),
                None,
            )
            if continuation_label:
                story.append(PageBreak())
                logical_page += 1
                story.append(section_bar(continuation_label, styles, logical_page))
            pending_role.append(Paragraph(escape(heading), resolve_style(styles, "role", logical_page)))
            after_role = True
            continue
        if after_role and line.startswith("**"):
            pending_role.append(Paragraph(markdown_inline(line), resolve_style(styles, "meta", logical_page)))
            after_role = "tech"
            continue
        if after_role == "tech":
            pending_role.append(Paragraph(escape(line), resolve_style(styles, "tech", logical_page)))
            after_role = False
            continue
        if line.startswith("- "):
            bullet = Paragraph(
                markdown_inline(line[2:]),
                resolve_style(styles, "bullet", logical_page),
                bulletText="•",
            )
            if pending_role:
                pending_role.append(bullet)
                flush_pending()
            else:
                story.append(bullet)
            continue

        flush_pending()
        compact = current_section in {
            "Core Capabilities",
            "Skills",
            "Awards and Recognition",
            "Education and Certifications",
        }
        style_name = "compact" if compact else "body"
        story.append(Paragraph(markdown_inline(line), resolve_style(styles, style_name, logical_page)))

    flush_pending()
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    document.build(story)
    print(OUTPUT)


if __name__ == "__main__":
    build()

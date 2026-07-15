# Reference Site Replica Design

## Objective

Rebuild `practitioner.digital` as a high-fidelity React/Vite portfolio reproduction. The replica is the first milestone and establishes a visually exact baseline before the site is progressively rewritten with Dela's identity, experience, and project content.

The rebuilt site must omit the Writing page, all Writing navigation links, and the fixed Awwwards widget. It must preserve the current portfolio material in the repository while the new presentation system is introduced.

## Scope

The replica includes:

- Home
- Work
- About
- Mentoring
- Contact actions and footer content
- Individual work and case-study pages represented by the reference
- Desktop, tablet, and mobile layouts
- Shared navigation and mobile navigation
- Reference-style cards, tables, buttons, marquees, labels, calls to action, and footer modules
- Restrained entrance, hover, press, and navigation motion

The replica excludes:

- Writing navigation and content
- The Awwwards widget
- CMS, authentication, admin tooling, or backend features
- Heavy UI frameworks or large animation dependencies
- Invented claims, metrics, or project outcomes

## Implementation Architecture

The work remains in the existing Vite, React, and JavaScript application. Lightweight routing will support the major pages and case studies. Existing project routes and source material remain available during the replica stage and will later be adapted to the new case-study presentation.

Shared interface units will include:

- Site header and desktop navigation
- Mobile navigation
- Brand mark
- Primary and secondary buttons
- Section labels and headings
- Engineer or practitioner specification table
- Proof and metric cards
- Service or engagement cards
- Featured case-study cards
- Work-index rows and cards
- Process steps
- Testimonial treatment
- CTA sections
- Site footer

Page content will be stored separately from presentation components. This boundary allows the visual replica to remain stable while reference-equivalent content is replaced section by section.

## Visual System

The presentation closely follows the reference site's neo-brutalist visual language:

- White background and black foreground
- Bright cyan as the dominant accent
- Oversized, tightly spaced sans-serif display typography
- Condensed monospaced typography for labels, navigation, metadata, and tables
- Square geometry with no decorative border radius
- Thin black rules and structured grid divisions
- Hard offset black shadows on buttons, panels, and interactive cards
- Large areas of whitespace paired with dense tables and modular grids
- Asymmetric desktop compositions
- Horizontal capability marquees
- Strong visible focus treatments

The implementation will use a small set of CSS custom properties for color, typography, spacing, border width, hard shadows, and motion timing. Responsive rules will preserve the reference character without causing horizontal overflow or unreadably compressed content.

## Interaction and Motion

Motion remains brief and functional:

- Short page and section entrance reveals
- Continuous capability marquees
- Button press offsets that collapse the hard shadow
- Card hover and focus responses
- Accessible mobile navigation transitions
- Clear keyboard focus behavior

All nonessential movement will be disabled or simplified when `prefers-reduced-motion` is enabled. Core content and navigation must remain usable without animation.

## Content Migration Workflow

The reference-equivalent first milestone will match the source site's section order, content density, and page structure. Content will then be replaced in controlled passes:

1. Brand, navigation, hero, availability panel, and primary CTA
2. Proof points and career credibility
3. Services and working model
4. Featured case studies
5. Full work index and project-detail pages
6. About and professional history
7. Mentoring, adapted to Dela's relevant offering or removed in a later approved pass
8. Contact and footer

The existing Call of Duty hub, case studies, project data, and media remain in the repository throughout the replica milestone. They will later be mapped into the new case-study components rather than discarded.

## New Project Research

Four new projects will be added during the Dela-content replacement stage:

- Peptide Portal
- Optimize Hub
- Beats Brewery
- Storm Commander

Each case study will be based on evidence gathered from its local repository and relevant Codex task history. The research will establish:

- Project purpose and audience
- Dela's role and ownership
- Product or design problem
- Important workflow and implementation decisions
- Technology used
- Demonstrable outcomes
- Suitable screenshots, video, or interface artifacts

The case studies will not include unsupported performance claims, fabricated metrics, or work that cannot be verified from available material.

## Responsive Behavior

Desktop layouts will retain the reference site's asymmetric grids, large headlines, hard-shadow panels, and wide content rhythm. Tablet layouts will reduce grid density while preserving hierarchy. Mobile layouts will stack major modules, provide an accessible menu, resize display typography deliberately, and keep touch targets comfortable.

Marquees, tables, and project metadata must remain readable at narrow widths. No page should require unintended horizontal scrolling.

## Accessibility and Resilience

The replica will include:

- Semantic landmarks and page structure
- One primary heading per page
- Logical heading order
- Keyboard-operable navigation and controls
- Visible focus states
- Descriptive image alternatives where images communicate content
- Sufficient foreground and accent contrast
- Reduced-motion behavior
- Stable layouts when an image or external resource is unavailable

Reference assets that cannot be reused reliably will be represented with temporary substitutes matching their intended aspect ratio and composition. These substitutes must be clearly identifiable in the content data and straightforward to replace.

## Validation

Validation will compare rendered pages against the live reference at representative desktop, tablet, and mobile viewport sizes. Review will cover:

- Page and section structure
- Typography and line wrapping
- Spacing and alignment
- Borders, shadows, and color
- Navigation and routing
- Responsive reflow
- Hover, focus, press, and reduced-motion states
- Image loading and layout stability
- Internal links and case-study routes
- Complete removal of Writing and the Awwwards widget

Visual screenshot comparison is the primary acceptance method. Lightweight source inspection and available linting will be used first. A Vite build will not be run by default unless runtime verification clearly warrants it; if the environment blocks a warranted attempt with the known `spawn EPERM` limitation, that limitation will be reported separately from code correctness.

## Acceptance Criteria

The replica milestone is complete when:

- All in-scope reference pages and shared interface patterns have matching React implementations.
- Desktop, tablet, and mobile renders closely match the reference's composition and visual system.
- Writing is absent from navigation, pages, and footer resources.
- The Awwwards widget is absent.
- Navigation, responsive behavior, and interactive states work correctly.
- Existing portfolio content and media remain preserved in the repository.
- Content and presentation are separated well enough for the planned Dela-content replacement passes.
- Validation results and any environment limitations are reported accurately.

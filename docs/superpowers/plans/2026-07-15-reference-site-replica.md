# Reference Site Replica Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the existing portfolio as a responsive, high-fidelity React/Vite reproduction of `https://karolbinkow.ski`, excluding Writing and the Awwwards widget while preserving all existing Dela portfolio source material.

**Architecture:** Keep the existing custom client-side router and add page-level routes backed by one reference-content module. Build a small neo-brutalist component system shared by Home, Work, About, Mentoring, and two reference case-study routes, then replace the current dark presentation CSS with a dedicated white/black/cyan responsive system. Keep the current project data, Call of Duty pages, assets, and tuning code in the repository so later content-migration passes can reuse them.

**Tech Stack:** Vite 5, React 18, JavaScript, semantic HTML, CSS Grid/Flexbox, CSS custom properties, Node-based static verification, browser screenshot comparison.

## Global Constraints

- Use JavaScript, not TypeScript.
- Do not add a UI framework, CMS, state-management framework, or large animation dependency.
- Remove Writing from navigation, pages, and footer resources.
- Do not reproduce the fixed Awwwards widget.
- Preserve existing project data and media files.
- Match the reference's white, black, and cyan neo-brutalist visual system across desktop, tablet, and mobile.
- Use standard Title Case for user-facing display headings while preserving official product styling.
- Respect `prefers-reduced-motion` and keyboard navigation.
- Do not run `npm run build` by default; use source checks and rendered browser verification first.
- Do not stage, commit, merge, or perform other repository operations; the user owns those actions.

---

## File Map

**Create**

- `src/data/referenceContent.js` — temporary reference-site content and page metadata.
- `src/components/SiteLink.jsx` — internal/external link handling for the custom router.
- `src/components/ReplicaHeader.jsx` — desktop and mobile navigation without Writing.
- `src/components/ReplicaFooter.jsx` — shared footer without Writing or the award widget.
- `src/components/ReplicaPrimitives.jsx` — buttons, section labels, spec tables, card grids, process lists, and marquees.
- `src/pages/ReferenceHome.jsx` — full homepage composition.
- `src/pages/ReferenceWork.jsx` — work index and product/case-study listing.
- `src/pages/ReferenceAbout.jsx` — biography, principles, testimonials, and stack.
- `src/pages/ReferenceMentoring.jsx` — mentoring page composition.
- `src/pages/ReferenceCaseStudy.jsx` — data-driven case-study template for both reference studies.
- `src/styles/replica.css` — the complete replica visual and responsive system.
- `scripts/check-replica.mjs` — static route/content/exclusion checks.

**Modify**

- `src/App.jsx` — route resolution, page metadata, shared shell, and missing-route handling.
- `src/main.jsx` — load the replica stylesheet and remove the tuning/editor mount from the rendered replica.
- `package.json` — add `check:replica`.
- `index.html` — reference-appropriate metadata and font preconnects if a hosted font is selected during visual inspection.

**Preserve Unmodified During This Milestone**

- `src/data/projects.js`
- `src/data/callOfDuty.js`
- `src/pages/CallOfDutyHubPage.jsx`
- `src/pages/CallOfDutyCaseStudyPage.jsx`
- `src/pages/ProjectDetail.jsx`
- `public/assets/**`
- `src/tuning/**`
- `src/editor/**`

---

### Task 1: Establish the Route and Content Contract

**Files:**

- Create: `src/data/referenceContent.js`
- Create: `scripts/check-replica.mjs`
- Modify: `package.json`

**Interfaces:**

- Produces: `referenceSite`, `homePage`, `workPage`, `aboutPage`, `mentoringPage`, `referenceCaseStudies`, and `getReferenceCaseStudy(slug)`.
- Produces: `npm run check:replica`, returning exit code 0 only when required routes/content exist and forbidden features are absent.

- [ ] **Step 1: Add the failing verification script**

```js
// scripts/check-replica.mjs
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
  "src/pages/ReferenceMentoring.jsx",
  "src/pages/ReferenceCaseStudy.jsx",
  "src/styles/replica.css",
];

const missing = requiredFiles.filter((path) => !fs.existsSync(path));
if (missing.length) throw new Error(`Missing replica files: ${missing.join(", ")}`);

const checkedFiles = requiredFiles.map((path) => fs.readFileSync(path, "utf8")).join("\n");
if (/Awwwards/i.test(checkedFiles)) throw new Error("Awwwards widget text is forbidden");
if (/label:\s*["']Writing["']/i.test(checkedFiles)) throw new Error("Writing navigation is forbidden");

const app = fs.readFileSync("src/App.jsx", "utf8");
for (const route of ["/work", "/about", "/mentoring", "/work/quick-base64", "/work/clapping-api"]) {
  if (!app.includes(route)) throw new Error(`Missing route: ${route}`);
}

console.log("Replica structure and exclusions verified.");
```

- [ ] **Step 2: Register and run the check to confirm it fails**

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "check:replica": "node scripts/check-replica.mjs"
}
```

Run: `npm run check:replica`

Expected: FAIL with `Missing replica files`.

- [ ] **Step 3: Create the temporary reference-content model**

```js
// src/data/referenceContent.js
export const referenceSite = {
  brand: { initials: "KB", name: "Karol Binkowski" },
  navigation: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Mentoring", href: "/mentoring" },
  ],
  primaryCta: { label: "Book a Call →", href: "https://cal.eu/karol-binkowski/30min" },
};

export const homePage = {
  eyebrow: "Software Engineer · Builder",
  headline: ["You Have Something.", "I Ship It."],
  intro: "You have an AI idea, a prototype, or a product that's stuck. I find what's blocking it and ship the fix — then explain every decision to your team and your investors.",
  spec: [
    ["Based", "Kraków, PL"],
    ["Mode", "Remote · Intl"],
    ["Engage", "Contract / B2B"],
    ["Stack", "RN · Next · Python"],
    ["Status", "Available"],
  ],
};

export const workPage = {
  eyebrow: "Work",
  title: "Case Studies & Shipped Products.",
  intro: "Client work written up as case studies — trade-offs included, not just the outcome. Plus the products I build under my own name.",
};

export const aboutPage = {
  eyebrow: "About",
  title: "I'm the Engineer You Call When the Brief Is a Slack Thread.",
};

export const mentoringPage = {
  eyebrow: "Mentoring",
  title: "Mentoring for the First Half of Your Career.",
};

export const referenceCaseStudies = [
  { slug: "quick-base64", index: "01", title: "Making Base64 Fast Enough to Disappear", metric: "~150×" },
  { slug: "clapping-api", index: "02", title: "A Full Event-Sourced Backend in Ten Days", metric: "10 days" },
];

export function getReferenceCaseStudy(slug) {
  return referenceCaseStudies.find((study) => study.slug === slug) ?? null;
}
```

- [ ] **Step 4: Extend the content module with every section transcribed from the public reference**

Add structured arrays for the homepage proof grid, engagements, featured studies, selected work, products, biography, process, about principles, testimonials, stack groups, mentoring audiences, mentoring topics, mentoring process, and both case-study narratives. Keep every item concrete and source-equivalent; do not add Writing, newsletter signup behavior, cookies, or the award widget.

- [ ] **Step 5: Run syntax verification**

Run: `node --check src/data/referenceContent.js`

Expected: no output and exit code 0.

---

### Task 2: Build Shared Navigation, Links, and Footer

**Files:**

- Create: `src/components/SiteLink.jsx`
- Create: `src/components/ReplicaHeader.jsx`
- Create: `src/components/ReplicaFooter.jsx`

**Interfaces:**

- Consumes: `referenceSite` from `src/data/referenceContent.js` and `navigate(to)` from `App.jsx`.
- Produces: `<SiteLink href navigate className>`, `<ReplicaHeader navigate pathname>`, and `<ReplicaFooter navigate>`.

- [ ] **Step 1: Implement internal/external link behavior**

```jsx
export default function SiteLink({ href, navigate, children, ...props }) {
  const external = /^(https?:|mailto:)/.test(href);

  if (external) {
    return <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" {...props}>{children}</a>;
  }

  return <a href={href} onClick={(event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    navigate(href);
  }} {...props}>{children}</a>;
}
```

- [ ] **Step 2: Implement the reference-style header**

Build the square `KB` mark, brand name, Work/About/Mentoring links, hard-shadow CTA, and an accessible mobile menu. Use `aria-expanded`, `aria-controls`, Escape-to-close, route-change close, and focus-visible behavior. Writing must not appear.

- [ ] **Step 3: Implement the shared footer**

Build the reference footer's brand/CTA area, company block, Pages, Resources, Contact, copyright row, and back-to-top control. Omit Writing, Medium, newsletter submission behavior, cookie settings, privacy banner, and the Awwwards widget.

- [ ] **Step 4: Verify forbidden UI text**

Run: `rg -n -i "awwwards|>Writing<|label:.*Writing" src/components src/data/referenceContent.js`

Expected: no matches.

---

### Task 3: Build the Reusable Replica Primitives

**Files:**

- Create: `src/components/ReplicaPrimitives.jsx`

**Interfaces:**

- Produces: `SectionIntro`, `HardButton`, `SpecTable`, `Marquee`, `MetricGrid`, `EngagementGrid`, `CaseStudyCard`, `WorkRow`, `ProductCard`, `ProfileBlock`, `ProcessGrid`, `QuoteCard`, `StackGrid`, and `PageCta`.
- Consumes: plain content objects and optional `navigate` callbacks; primitives do not import page data directly.

- [ ] **Step 1: Implement the section and action primitives**

```jsx
export function SectionIntro({ eyebrow, title, intro, id }) {
  return <header className="section-intro" id={id}>
    {eyebrow && <p className="kicker"><span aria-hidden="true" />{eyebrow}</p>}
    {title && <h2>{title}</h2>}
    {intro && <p className="lede">{intro}</p>}
  </header>;
}

export function HardButton({ href, navigate, tone = "cyan", children }) {
  return <SiteLink className={`hard-button hard-button--${tone}`} href={href} navigate={navigate}>{children}</SiteLink>;
}
```

- [ ] **Step 2: Implement data-driven grids and tables**

Use semantic lists for cards, `<dl>` for metrics, `<table>` for the spec panel, and ordered lists for process steps. All interactive cards must remain reachable and understandable with a keyboard.

- [ ] **Step 3: Implement the capability marquee**

Duplicate the list only for visual continuity, hide the duplicate from assistive technology, and freeze motion under reduced-motion preferences.

- [ ] **Step 4: Run JSX import inspection**

Run: `rg -n "from .*SiteLink|export function" src/components/ReplicaPrimitives.jsx`

Expected: one `SiteLink` import and all named primitive exports.

---

### Task 4: Assemble the Complete Homepage

**Files:**

- Create: `src/pages/ReferenceHome.jsx`

**Interfaces:**

- Consumes: homepage sections from `referenceContent.js`, all replica primitives, and `navigate`.
- Produces: `<ReferenceHome navigate />` with one `<h1>` and reference-equivalent section order.

- [ ] **Step 1: Build the hero and practitioner specification panel**

```jsx
export default function ReferenceHome({ navigate }) {
  return <>
    <section className="hero shell" aria-labelledby="home-title">
      <div className="hero__copy">
        <p className="kicker"><span aria-hidden="true" />{homePage.eyebrow}</p>
        <h1 id="home-title"><span>You Have Something.</span><mark>I Ship It.</mark></h1>
        <p className="hero__lede">{homePage.intro}</p>
        <div className="button-row"><HardButton href={referenceSite.primaryCta.href} navigate={navigate}>Book a 30-Min Call →</HardButton><HardButton href="#work" navigate={navigate} tone="plain">See the Work ↓</HardButton></div>
      </div>
      <SpecTable title="Engineer Spec" rows={homePage.spec} />
    </section>
    <Marquee items={homePage.capabilities} />
    <section className="section shell" id="proof"><MetricGrid items={homePage.proof} /></section>
    <section className="section shell"><EngagementGrid items={homePage.engagements} /></section>
    <section className="section shell" id="work">{homePage.featuredStudies.map((study) => <CaseStudyCard key={study.slug} study={study} navigate={navigate} />)}</section>
    <section className="section shell">{homePage.selectedWork.map((item) => <WorkRow key={item.title} item={item} />)}</section>
    <section className="section shell">{homePage.products.map((product) => <ProductCard key={product.title} product={product} />)}</section>
    <section className="section shell"><ProfileBlock profile={homePage.profile} /><QuoteCard quote={homePage.quote} /></section>
    <section className="section shell"><ProcessGrid items={homePage.process} /></section>
    <PageCta title="Have Something That Needs to Ship?" cta={referenceSite.primaryCta} navigate={navigate} />
  </>;
}
```

- [ ] **Step 2: Add the capability marquee and proof grid**

Render the reference technology list, "Proof, Not Adjectives" label, demo proof, ten-day proof, cloud-cost proof, test-suite proof, open-source release proof, and the credential strip.

- [ ] **Step 3: Add engagements and featured case studies**

Render the four engagement cards, primary CTA, and the two selected case-study cards in the same hierarchy as the reference.

- [ ] **Step 4: Add selected work and products**

Render the "What I Actually Do" statement, five selected-work rows, LinkedIn action, and the two live-product cards.

- [ ] **Step 5: Add biography, quote, process, and final CTA**

Render the profile module, testimonial, four-step working process, "Let's Talk" section, and shared footer entry point.

- [ ] **Step 6: Verify homepage semantics**

Run: `rg -n "<h1|<section|SpecTable|MetricGrid|EngagementGrid|ProcessGrid" src/pages/ReferenceHome.jsx`

Expected: exactly one `<h1` match and all major composition primitives present.

---

### Task 5: Build Work, About, and Mentoring Pages

**Files:**

- Create: `src/pages/ReferenceWork.jsx`
- Create: `src/pages/ReferenceAbout.jsx`
- Create: `src/pages/ReferenceMentoring.jsx`

**Interfaces:**

- Consumes: page-specific objects from `referenceContent.js`, shared primitives, and `navigate`.
- Produces: one accessible `<h1>` per route and a shared `<PageCta>` before the footer.

- [ ] **Step 1: Assemble Work**

Render its page intro, two product cards, two case-study cards linking to `/work/quick-base64` and `/work/clapping-api`, and the final booking CTA.

- [ ] **Step 2: Assemble About**

Render the image-led hero, short version, three principles, two testimonials, five stack groups, credential strip, and final CTA.

- [ ] **Step 3: Assemble Mentoring**

Render the hero and dual CTA, two audience blocks, seven mentoring-topic cards, technical/human split, four-step process, free-session panel, and final contact action.

- [ ] **Step 4: Verify page headings and Writing removal**

Run: `rg -n "<h1" src/pages/ReferenceWork.jsx src/pages/ReferenceAbout.jsx src/pages/ReferenceMentoring.jsx`

Expected: one match per file.

Run: `rg -n -i "writing|awwwards" src/pages/Reference*.jsx`

Expected: no matches.

---

### Task 6: Build Both Data-Driven Case-Study Pages

**Files:**

- Create: `src/pages/ReferenceCaseStudy.jsx`
- Modify: `src/data/referenceContent.js`

**Interfaces:**

- Consumes: a complete case-study object from `getReferenceCaseStudy(slug)` and `navigate`.
- Produces: `<ReferenceCaseStudy study navigate />` supporting metrics, prose sections, quotes, ordered process steps, stack, links, CTA, and footer.

- [ ] **Step 1: Complete both case-study records**

For `quick-base64`, include metadata, three headline metrics, Problem, Decision, What I Did, Proof, One Honest Moment, three implementation steps, stack, and links. For `clapping-api`, include metadata, three metrics, Problem, Decision, What I Built, One Honest Moment, six implementation steps, stack, and links.

- [ ] **Step 2: Implement the shared template**

```jsx
export default function ReferenceCaseStudy({ study, navigate }) {
  return <article className="case-study-page">
    <header className="case-study-hero shell">
      <SiteLink href="/work" navigate={navigate} className="back-link">← All Work</SiteLink>
      <p className="kicker">{study.meta}</p>
      <h1>{study.title}</h1>
      <p className="lede">{study.summary}</p>
      <MetricGrid items={study.metrics} />
    </header>
    <div className="case-study-body shell">
      {study.sections.map((section) => <section key={section.title}><h2>{section.title}</h2>{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
      <ProcessGrid items={study.process} />
      <StackGrid groups={[{ title: "Stack", items: study.stack }]} />
    </div>
    <PageCta title="Working on Something Similar?" cta={referenceSite.primaryCta} navigate={navigate} />
  </article>;
}
```

- [ ] **Step 3: Verify both slugs resolve**

Run: `node -e "import('./src/data/referenceContent.js').then(m => console.log(m.getReferenceCaseStudy('quick-base64').title, m.getReferenceCaseStudy('clapping-api').title))"`

Expected: both case-study titles print without an exception.

---

### Task 7: Replace the App Shell and Route Resolution

**Files:**

- Modify: `src/App.jsx`
- Modify: `src/main.jsx`
- Modify: `index.html`

**Interfaces:**

- Consumes: all new pages, `getReferenceCaseStudy`, `ReplicaHeader`, and `ReplicaFooter`.
- Produces routes `/`, `/work`, `/about`, `/mentoring`, `/work/quick-base64`, and `/work/clapping-api`.
- Preserves the existing `pushState`/`popstate` navigation contract.

- [ ] **Step 1: Replace route resolution with explicit paths**

```jsx
const pages = {
  "/": ReferenceHome,
  "/work": ReferenceWork,
  "/about": ReferenceAbout,
  "/mentoring": ReferenceMentoring,
};

const Page = pages[normalizedPath];
const caseStudy = normalizedPath.startsWith("/work/")
  ? getReferenceCaseStudy(normalizedPath.slice("/work/".length))
  : null;
```

Render `ReplicaHeader`, the resolved page or case study, a clear not-found view, then `ReplicaFooter`. Continue syncing `popstate`, resetting scroll after route changes, and handling same-page hash navigation.

- [ ] **Step 2: Update titles per route**

Set concrete titles for Home, Work, About, Mentoring, and both case studies. Do not use the existing project resolver for the replica milestone.

- [ ] **Step 3: Load only replica presentation at runtime**

In `main.jsx`, keep React StrictMode but remove `TuningProvider` and `EditorApp` from the mounted tree. Import `./styles/replica.css`; leave tuning and editor source files intact.

- [ ] **Step 4: Update document metadata**

Set the description to the public reference equivalent for this temporary replica milestone, keep the viewport declaration, and add no analytics, cookies, or external widget scripts.

- [ ] **Step 5: Run the replica structure check**

Run: `npm run check:replica`

Expected: `Replica structure and exclusions verified.`

---

### Task 8: Implement the Exact Visual and Responsive System

**Files:**

- Create: `src/styles/replica.css`

**Interfaces:**

- Consumes: class names from all replica components/pages.
- Produces: desktop, tablet, and mobile visual parity plus reduced-motion and focus states.

- [ ] **Step 1: Define tokens and global resets**

```css
:root {
  color-scheme: light;
  --paper: #fff;
  --ink: #050505;
  --cyan: #10b4cc;
  --muted: #5c5c5c;
  --rule: 2px solid var(--ink);
  --shadow-hard: 4px 4px 0 var(--ink);
  --shell: 1160px;
  --gutter: clamp(1rem, 4vw, 3.5rem);
  --display: Arial, Helvetica, sans-serif;
  --mono: "Courier New", Courier, monospace;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; min-width: 320px; background: var(--paper); color: var(--ink); font-family: var(--display); }
.shell { width: min(var(--shell), calc(100% - (2 * var(--gutter)))); margin-inline: auto; }
```

Tune the exact font families, weights, cyan, shell width, and spacing from browser inspection of the live reference before final comparison.

- [ ] **Step 2: Style the header, buttons, cards, and tables**

Match square geometry, thin rules, cyan fills, hard shadows, compressed mono labels, active states, button press offsets, and the reference header height.

- [ ] **Step 3: Style every homepage and page composition**

Implement the asymmetric hero, highlighted second headline line, spec table, marquees, proof grid, engagements, work rows, product cards, profile block, process grids, page intros, stack grids, case-study typography, and footer.

- [ ] **Step 4: Add responsive rules**

At approximately 960px collapse major split layouts; at approximately 720px switch to the mobile navigation, stack card grids, reduce headline sizes, and ensure all tables/cards fit without page-level overflow.

- [ ] **Step 5: Add accessibility and motion rules**

```css
:focus-visible { outline: 3px solid var(--cyan); outline-offset: 3px; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 6: Check for legacy visual leakage**

Run: `rg -n "styles/(globals|layout|components)\.css|TuningProvider|EditorApp" src/main.jsx src/App.jsx`

Expected: no matches.

---

### Task 9: Render, Compare, and Polish the Replica

**Files:**

- Modify: `src/styles/replica.css`
- Modify: `src/components/ReplicaHeader.jsx`
- Modify: `src/components/ReplicaFooter.jsx`
- Modify: `src/components/ReplicaPrimitives.jsx`
- Modify: `src/pages/ReferenceHome.jsx`
- Modify: `src/pages/ReferenceWork.jsx`
- Modify: `src/pages/ReferenceAbout.jsx`
- Modify: `src/pages/ReferenceMentoring.jsx`
- Modify: `src/pages/ReferenceCaseStudy.jsx`

**Interfaces:**

- Consumes: complete replica routes.
- Produces: verified desktop, tablet, and mobile renders with no Writing or Awwwards UI.

- [ ] **Step 1: Run static verification**

Run: `npm run check:replica`

Expected: `Replica structure and exclusions verified.`

- [ ] **Step 2: Start Vite once for browser verification**

Run: `npm run dev -- --host 127.0.0.1`

Expected: Vite reports a local URL without a compile error.

- [ ] **Step 3: Capture reference and local screenshots**

Capture `/`, `/work`, `/about`, `/mentoring`, `/work/quick-base64`, and `/work/clapping-api` at 1280×800, 768×1024, and 390×844. Compare header geometry, line wraps, section rhythm, grid behavior, borders, hard shadows, footer density, and mobile navigation.

- [ ] **Step 4: Fix the largest visual mismatches first**

Adjust tokens and shared layout rules before page-specific exceptions. Re-capture only affected pages and viewport sizes after each correction pass.

- [ ] **Step 5: Verify interaction and accessibility behavior**

Keyboard-test header links, mobile-menu open/close, Escape handling, card links, back links, CTA links, and back-to-top. Emulate reduced motion and confirm marquees/reveals stop. Confirm each page has one `<h1>` and no unintended horizontal scroll.

- [ ] **Step 6: Verify requested exclusions in the rendered app**

Search rendered text and DOM for `Writing` and `Awwwards` on every route.

Expected: neither string appears.

- [ ] **Step 7: Report validation accurately**

Report static-check results, routes visually inspected, viewport sizes checked, interaction checks completed, and any remaining reference-asset substitutions. Do not claim a production build unless one was explicitly run and succeeded.

---

## Completion Gate

Implementation is complete only when all six routes render, the shared visual system closely matches the reference at all three viewport classes, all navigation and interaction checks pass, Writing and the Awwwards widget are absent, and the existing Dela project content/assets remain available for the next replacement phase.

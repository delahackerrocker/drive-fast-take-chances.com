export const referenceSite = {
  brand: { initials: "SD", name: "Steven de la Torre" },
  navigation: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
  ],
  primaryCta: {
    label: "Book a 30-Min Project Call →",
    href: "mailto:stevedelatorre@gmail.com?subject=30-minute%20Project%20Fit%20Call",
  },
  email: "stevedelatorre@gmail.com",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/delahackerrocker/" },
    { label: "GitHub", href: "https://github.com/delahackerrocker" },
    { label: "Ko-fi", href: "https://ko-fi.com/pract1t10ner" },
  ],
};

const capabilities = [
  "UX Design", "Game UX", "Interaction Design", "Technical Design", "Unity", "C#", "React",
  "TypeScript", "Three.js", "Prototyping", "Design Systems", "Gameplay Systems",
  "AI Workflows", "Product Strategy", "Accessibility",
];

const products = [
  {
    title: "GR1M01RE",
    status: "In Development",
    summary: "A tactical cyberpunk-fantasy RPG about runners, factions, off-leash AI, hacking, magic, guns, and survival in a broken future.",
    tags: ["Game", "Unity", "Systems", "Worldbuilding"],
    href: "https://ko-fi.com/pract1t10ner",
    cta: "Follow the Build →",
    tone: "yellow",
  },
  {
    title: "TalentGarden",
    status: "In Development",
    summary: "An agentic career system that treats job hunting as a research, matching, portfolio, and relationship problem rather than an endless stream of low-signal applications.",
    tags: ["AI", "Automation", "Career Tools", "Web"],
    href: null,
    cta: "Public Project Coming Soon",
    tone: "cyan",
  },
];

const featuredStudies = [
  {
    slug: "call-of-duty",
    index: "01",
    meta: "Five Releases · AAA / Live Service",
    title: "Player-Facing Systems for Call of Duty",
    summary: "Weapon icons, onboarding and first-time-user experience, post-match communication, interface flows, and technical design inside one of the largest live game ecosystems in the world.",
    metric: "UX + Systems",
  },
  {
    slug: "gr1m01re",
    index: "02",
    meta: "GR1M01RE · Unity 6.5",
    title: "Building a Tactical RPG From Intent to Playable Systems",
    summary: "A city-scale indie RPG combining overhead tactics, over-the-shoulder action, guns, magic, melee, hacking, procedural spaces, and custom development tools.",
    metric: "Design → Build",
  },
];

const engagements = [
  { title: "Build Your AI App", bullets: ["Turn an idea into a working product prototype", "Define the UX, interaction model, and technical path", "Build the highest-risk user journey first", "Leave your team a system it can understand and continue"] },
  { title: "Unblock Your AI App", bullets: ["Audit the product, workflow, and implementation", "Find the UX, architecture, or execution bottleneck", "Separate the real problem from workaround debt", "Deliver a recovery plan and, when useful, build the fix"] },
  { title: "Game Development & Interactive Systems", bullets: ["Gameplay systems, controls, cameras, combat, UI, and tools", "Unity prototypes and production-ready C#", "Player-centered design from feel through behavior", "Technical design that connects creative intent to maintainable systems"] },
  { title: "Web Design & Development", bullets: ["Product strategy, information architecture, UX, and responsive UI", "Marketing sites, web apps, internal tools, and custom platforms", "React or a pragmatic CMS when it is the better answer", "AI-enabled workflows only where they belong"] },
];

const process = [
  { title: "I Start With the Experience", body: "Before choosing a framework or drawing a polished screen, I identify what the player, user, or customer should understand, feel, and be able to do." },
  { title: "I Prototype the Dangerous Part", body: "Every project has one assumption that can quietly ruin the rest. I build it early enough to learn before the project becomes expensive to change." },
  { title: "Design and Implementation Stay in the Same Loop", body: "I move from interaction design to technical design to working code without throwing the idea over a wall and hoping it survives." },
  { title: "No Theater, No Unnecessary Architecture", body: "I build the smallest honest version that proves the experience, document the decisions that matter, and leave the system understandable." },
];

export const homePage = {
  eyebrow: "UX Designer · Game Developer · Agentic Builder",
  headline: ["You Have Something in Your Head.", "I Make It Real."],
  intro: "I design and build interactive products where UX, games, software, and AI meet — from player-facing systems on Call of Duty to indie game worlds, custom tools, and working web products.",
  spec: [["Based", "Columbus, Ohio"], ["Mode", "Remote · US / Intl"], ["Engage", "Contract · Fractional · Full-time"], ["Stack", "Unity · C# · React · AI"], ["Status", "Available"]],
  capabilities,
  proof: [
    { label: "5 Shipped Releases", value: "Call of Duty", body: "Credits across the Modern Warfare and Warzone era.", note: "AAA · Live Service · Player-Facing UX" },
    { label: "UX + Code", value: "One Loop", body: "One person from interaction model through working implementation.", note: "Design · Prototype · Build" },
    { label: "Major Organizations", value: "Google · NBA · USAF", body: "Immersive and interactive work delivered before Call of Duty.", note: "VR · AR · Experiential" },
    { label: "AAA → Indie", value: "End to End", body: "Large-team production judgment applied to complete products and systems.", note: "Systems · Tools · Worldbuilding" },
    { label: "Current Build", value: "GR1M01RE", body: "A city-scale tactical RPG with combat, magic, hacking, procedural spaces, and developer tooling.", note: "Unity 6.5 · Active Development" },
  ],
  credentials: "Accessible Player Experience Trained · Cross-Disciplinary by Default · Building Since Age 14",
  engagements,
  featuredStudies,
  selectedWork: [
    { title: "Call of Duty Player Systems", tags: ["Game UX", "Technical Design", "Live Service"], summary: "Designed and implemented player-facing systems within the Modern Warfare and Warzone ecosystem, working across UX, UI, engineering, production, and game design.", outcome: "Five shipped releases · Millions of players · Cross-studio development" },
    { title: "GR1M01RE / PRACT1T10N3R", tags: ["Unity", "C#", "Systems Design", "Worldbuilding"], summary: "Building an original tactical RPG that shifts between overhead command and direct action, with guns, magic, melee, hacking, a living city, and deeply connected systemic design.", outcome: "Playable combat foundation · Procedural-world pipeline · Active development" },
    { title: "TalentGarden", tags: ["Agentic Development", "Product Design", "Automation"], summary: "A personal AI recruiter, application CRM, research-signal index, and portfolio-intelligence system that evaluates fit and prepares tailored materials with human approval before anything is sent.", outcome: "Research → Fit → Tailored application · Human in the loop" },
    { title: "Client and Partner Web Platforms", tags: ["UX", "Product Strategy", "Web Development"], summary: "Designing and building practical web products across healthcare commerce, performance benchmarking, and music licensing.", outcome: "Strategy · UX · Systems · Production" },
    { title: "Interactive System Experiments", tags: ["Prototype Design", "Unity", "Web"], summary: "Focused experiments in cameras, controls, tactical interfaces, hacking interactions, procedural generation, and player feedback.", outcome: "Playable interaction research · Web / executable path" },
  ],
  products,
  profile: {
    eyebrow: "Who You’d Be Working With",
    title: "I’m Steven de la Torre — UX Designer, Game Developer, and Agentic Builder.",
    body: "Based in Columbus, Ohio, I spent years designing player-facing systems for Call of Duty and previously shipped immersive work for Google, the NBA, and the U.S. Air Force. Today I build an indie tactical RPG in Unity, web products with clients and partners, and AI-assisted workflows. I’m at my best when the brief is messy, disciplines overlap, and the experience needs to make sense — not merely function.",
  },
  process,
};

export const workPage = {
  eyebrow: "Work",
  title: "Selected Work and Experiments.",
  intro: "Player-facing game systems, original worlds, agentic tools, web platforms, and focused interaction experiments.",
  products,
  studies: featuredStudies,
};

export const aboutPage = {
  eyebrow: "About",
  title: "I Turn Ambiguous Interactive Ideas Into Working Experiences.",
  intro: "I’m Steven de la Torre — a UX designer, game developer, and agentic builder based in Columbus, Ohio.",
  shortVersion: [
    "I spent years designing player-facing systems for Call of Duty and previously shipped immersive work for organizations including Google, the NBA, and the U.S. Air Force.",
    "Today I work across design and engineering: building an indie tactical RPG in Unity, developing web products, and creating AI-assisted workflows that preserve the reason behind the work.",
  ],
  principles: process.slice(0, 3),
  quotes: [],
  stack: [
    { title: "Experience", items: ["UX Design", "Game UX", "Interaction Design", "Accessibility"] },
    { title: "Games", items: ["Unity", "C#", "Gameplay Systems", "Technical Design"] },
    { title: "Web", items: ["React", "JavaScript", "TypeScript", "Three.js"] },
    { title: "Building", items: ["Prototyping", "Design Systems", "Product Strategy", "AI Workflows"] },
  ],
};

export const servicesPage = {
  eyebrow: "Services",
  title: "How You Can Hire Me.",
  intro: "I help teams turn ambiguous interactive ideas into useful, playable, understandable systems.",
  engagements,
  process,
};

export const referenceCaseStudies = [
  {
    slug: "call-of-duty",
    index: "01",
    meta: "Five Releases · AAA / Live Service",
    title: "Player-Facing Systems for Call of Duty",
    summary: "Designing player-facing systems across the Modern Warfare and Warzone era, from onboarding and interface flows to technical design and post-match communication.",
    metrics: [
      { value: "5", label: "Shipped releases" },
      { value: "Millions", label: "Players in the live ecosystem" },
      { value: "Cross-Studio", label: "UX, UI, engineering, production, and game design" },
    ],
    sections: [
      { title: "The Work", body: ["My work included weapon icon systems, onboarding and first-time-user experience, post-match communication, interface flows, and technical design inside one of the largest live game ecosystems in the world."] },
      { title: "The Challenge", body: ["Player-facing systems had to remain understandable under pressure while serving new players, experienced players, multiple modes, evolving content, and the realities of cross-studio production."] },
      { title: "My Role", body: ["I worked across UX, UI, engineering, production, and game design to turn experience intent into specifications and behavior that could survive implementation and live-service change."] },
      { title: "The Through Line", body: ["The strongest work was never merely a polished screen. It connected what the player needed to understand with the rules, data, feedback, and collaboration required to make that understanding real."] },
    ],
    process: [
      { title: "Understand the Player State", meta: "Step 01", body: "Define what the player knows, needs, and can do at that moment." },
      { title: "Model the Interaction", meta: "Step 02", body: "Connect interface behavior to game state and production constraints." },
      { title: "Align the Disciplines", meta: "Step 03", body: "Make decisions legible across design, UI, engineering, and production." },
      { title: "Validate in Context", meta: "Step 04", body: "Judge the experience where it matters: under a player’s thumbs." },
    ],
    stack: ["Game UX", "Technical Design", "Live Service", "Interaction Design", "Cross-Studio Development"],
  },
  {
    slug: "gr1m01re",
    index: "02",
    meta: "GR1M01RE · Unity 6.5",
    title: "Building a Tactical RPG From Intent to Playable Systems",
    summary: "A city-scale indie RPG combining overhead tactics and direct action with guns, magic, melee, hacking, procedural spaces, and custom development tools.",
    metrics: [
      { value: "2 Modes", label: "Tactical and over-the-shoulder play" },
      { value: "Unity 6.5", label: "Playable systems and developer tooling" },
      { value: "City Scale", label: "Procedural spaces with authored meaning" },
    ],
    sections: [
      { title: "The Intent", body: ["GR1M01RE is a tactical cyberpunk-fantasy RPG about runners, factions, off-leash AI, hacking, magic, guns, and survival in a broken future."] },
      { title: "From Feel to System", body: ["The work spans tactical and over-the-shoulder cameras, lock-on, strafing, true aiming, weapon handling, projectiles, spellcasting, healing, melee, hit feedback, and hacking interactions."] },
      { title: "A World With Semantics", body: ["Procedural city and interior work begins with intent and placement meaning. CityParts cataloging, construction rules, and visual validation tools turn worldbuilding decisions into reusable production systems."] },
      { title: "The Design Philosophy", body: ["The pipeline is intent → semantics → geometry → presentation. The goal is not procedural novelty; it is a world whose structure supports readable, human-scale, playable decisions."] },
    ],
    process: [
      { title: "Intent", meta: "Step 01", body: "Define the experience and the player decision the system must support." },
      { title: "Semantics", meta: "Step 02", body: "Give spaces, objects, and behaviors explicit meaning before generating them." },
      { title: "Geometry", meta: "Step 03", body: "Build the playable form and tools that express those rules." },
      { title: "Presentation", meta: "Step 04", body: "Use camera, feedback, sound, and UI to make system state understandable." },
    ],
    stack: ["Unity 6.5", "C#", "Gameplay Systems", "Technical Design", "Procedural Worldbuilding"],
  },
];

export function getReferenceCaseStudy(slug) {
  return referenceCaseStudies.find((study) => study.slug === slug) ?? null;
}

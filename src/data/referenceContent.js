export const referenceSite = {
  brand: { initials: "KB", name: "Karol Binkowski" },
  navigation: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Mentoring", href: "/mentoring" },
  ],
  primaryCta: {
    label: "Book a Call →",
    href: "https://cal.eu/karol-binkowski/30min",
  },
  email: "karolbinkowski3@proton.me",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/karol-binkowski/" },
    { label: "GitHub", href: "https://github.com/KarolBinkowski" },
    { label: "X", href: "https://x.com/karolbinkowski" },
  ],
};

const capabilities = [
  "React",
  "React Native",
  "Next.js",
  "TypeScript",
  "Python",
  "Node.js",
  "C++ / JSI",
  "Astro",
  "Vercel AI SDK",
  "Docker",
  "AWS",
  "Playwright",
];

const products = [
  {
    title: "Wyszczaj.to",
    status: "Live",
    summary: "A nationwide, community-driven map of public toilets and useful nearby places in Poland.",
    tags: ["Web", "Maps", "Geolocation"],
    href: "https://wyszczaj.to",
    tone: "yellow",
  },
  {
    title: "FramePicker",
    status: "Live",
    summary: "The perfect still from any video, selected with AI instead of manual timeline scrubbing.",
    tags: ["AI", "Video", "Web"],
    href: "https://framepicker.app",
    tone: "cyan",
  },
];

const featuredStudies = [
  {
    slug: "quick-base64",
    index: "01",
    meta: "Open Source · C++ / JSI / SIMD",
    title: "Making Base64 Fast Enough to Disappear",
    summary: "Three focused changes removed base64 from the flamegraph of a production React Native image pipeline.",
    metric: "~150×",
  },
  {
    slug: "clapping-api",
    index: "02",
    meta: "Full-Stack · Event Sourcing",
    title: "A Full Event-Sourced Backend in Ten Days",
    summary: "A self-hosted applause system, remark plugin, and durable browser delivery path shipped end to end.",
    metric: "10 days",
  },
];

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
  capabilities,
  proof: [
    { label: "Demo", value: "Medical AI", body: "A live medical AI app shipped for an international conference.", note: "Next.js · FHIR · GPT-4" },
    { label: "10 Days", value: "Zero to Production", body: "A complete event-sourced system delivered end to end.", note: "Backend · AST · Delivery" },
    { label: "−70%", value: "Cloud Cost", body: "A client's monthly cloud bill cut with zero downtime.", note: "Cloud · Storage Migration" },
    { label: "−95%", value: "Test Runtime", body: "A ten-minute test suite brought down to thirty seconds.", note: "CI · Static Analysis" },
    { label: "v3.0.0", value: "Open Source", body: "Performance work shipped in a library other teams build on.", note: "C++ · JSI · SIMD" },
  ],
  credentials: "3+ Years · AWS Certified · CS50 (Harvard) · Open-Source Contributor",
  engagements: [
    { title: "AI MVP Rescue", bullets: ["Production-readiness review", "Bottleneck identification", "Architecture and implementation"] },
    { title: "Fractional Founding Engineer", bullets: ["One to three days per week", "Technical ownership", "Product and execution support"] },
    { title: "Architecture & Performance Audit", bullets: ["Scalability and cloud cost", "CI/CD and developer workflow", "Written recommendations"] },
    { title: "Agent Readiness Audit", bullets: ["APIs, workflows, and permissions", "Data quality and blockers", "Actionable implementation roadmap"] },
  ],
  featuredStudies,
  selectedWork: [
    { title: "Clinical-Decision-Support AI Chatbot", tags: ["Next.js", "Vercel AI SDK", "GPT-4", "FHIR"], summary: "Built a production-ready medical AI frontend with voice input and tool calling." },
    { title: "AR Spatial-Intelligence Platform", tags: ["Laravel", "PHP", "Azure", "CI"], summary: "Owned backend reliability, cloud migration, static analysis, and test performance." },
    { title: "AI Travel-Booking Concierge", tags: ["Vue", "Nuxt", "AI SDK", "Gemini"], summary: "Added conversational booking help and real-time validation to the purchase flow." },
    { title: "WordPress to Nuxt Migration", tags: ["Vue", "Nuxt", "Feature Flags"], summary: "Migrated incrementally behind flags with no data loss or service interruption." },
    { title: "AI Services Marketing Platform", tags: ["Next.js", "Playwright", "Atomic Design"], summary: "Established the project architecture and accessibility-aware visual regression suite." },
  ],
  products,
  profile: {
    eyebrow: "Who You'd Be Working With",
    title: "I'm Karol — Engineer and Builder.",
    body: "I take projects that are stuck or have no clear brief and ship them end to end. I document the reasoning because that context is what makes the work maintainable.",
  },
  quote: {
    text: "I can confidently recommend Karol as a solid and dependable engineer.",
    byline: "Marcin Ostrowski · Agile Leader & Coach",
  },
  process: [
    { title: "I Own the Outcome", body: "Give me the problem. I find the path, flag risks early, and ship." },
    { title: "Remote, Async, International", body: "Decisions live in writing with overlap reserved for calls that matter." },
    { title: "Two Versions of Every Decision", body: "Engineers get the technical detail; stakeholders get the business case." },
    { title: "Judgment Over Billable Hours", body: "The right decision made once beats a fast mistake that must be unwound." },
  ],
};

export const workPage = {
  eyebrow: "Work",
  title: "Case Studies & Shipped Products.",
  intro: "Client work written as case studies with trade-offs included, alongside products built and shipped independently.",
  products,
  studies: featuredStudies,
};

export const aboutPage = {
  eyebrow: "About",
  title: "I'm the Engineer You Call When the Brief Is a Slack Thread.",
  intro: "Engineer and builder, based in Kraków, working remote-first and international. I take projects that are stuck, vague, or moving too slowly — and ship them.",
  shortVersion: [
    "The work I'm proudest of usually starts without a clean brief: a real deadline and a problem that turns out to be different from the ticket.",
    "I care about why a decision was made, not only that the code runs. Trade-offs stay visible and the reasoning remains useful months later.",
  ],
  principles: [
    { title: "Context Before Code", body: "Read the repository, tickets, and conversations until the real requirement is clear." },
    { title: "Options and Trade-Offs", body: "Map credible approaches, their costs, and a recommendation with reasons." },
    { title: "Own the Outcome", body: "Shipping includes the unglamorous parts nobody remembered to scope." },
  ],
  quotes: [
    { text: "He consistently delivered high-quality code, was reliable, and eager to take on challenging tasks.", byline: "Marcin Ostrowski · Agile Leader & Coach" },
    { text: "Karol stands out for openness to dialogue, sharing knowledge, and asking the brave questions.", byline: "Anna Wilk · Scrum Master" },
  ],
  stack: [
    { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Vue", "Nuxt", "Astro"] },
    { title: "Mobile / Native", items: ["React Native", "Expo", "Native Modules"] },
    { title: "Backend", items: ["Node.js", "Laravel / PHP", "Python", "REST", "Event Sourcing"] },
    { title: "AI", items: ["Claude Code", "AI SDK", "GPT-4", "Gemini"] },
    { title: "Infra & Tooling", items: ["AWS", "Azure", "Docker", "GitHub Actions", "Playwright", "CI/CD"] },
  ],
};

export const mentoringPage = {
  eyebrow: "Mentoring",
  title: "Mentoring for the First Half of Your Career.",
  intro: "I help juniors land their first job and developers break through to Senior. Technical and human, grounded in production work.",
  audiences: [
    { title: "Land Your First Developer Job", body: "Build the commercial-grade profile, proof, and skills that hiring teams can evaluate." },
    { title: "Break Through to Senior", body: "Move from implementing features to owning systems, decisions, and outcomes." },
  ],
  topics: [
    { title: "High-Performance Work Habits", body: "Turn effort into shipped output through better decisions and focus." },
    { title: "Master the Why Behind the Code", body: "Work on real code and learn the reasoning that survives beyond tutorials." },
    { title: "Finish and Ship Your Project", body: "Cut scope, remove blockers, and finish the last twenty percent." },
    { title: "Code and Scalability Audits", body: "Review correctness, security, maintainability, and real-user pressure." },
    { title: "Break the No-Experience Wall", body: "Create credible professional evidence instead of collecting more exercises." },
    { title: "LinkedIn and the First Job", body: "Improve positioning, applications, and the story your profile tells." },
    { title: "Bring Something Specific", body: "Use a concrete bug, decision, or deadline as the working material." },
  ],
  process: [
    { title: "Intro Call", meta: "Step 01 · Free", body: "A short conversation to understand where you're stuck." },
    { title: "One Goal", meta: "Step 02", body: "Define one outcome clearly: a job, a shipped project, or a plateau broken." },
    { title: "We Do the Work", meta: "Step 03", body: "Sessions, pairing, or async review using real work and honest feedback." },
    { title: "Leave With Something Concrete", meta: "Step 04", body: "A finished artifact, a better system, or a result you can point to." },
  ],
};

export const referenceCaseStudies = [
  {
    slug: "quick-base64",
    index: "01",
    meta: "Case Study 01 · Open Source · C++ / JSI / SIMD",
    title: "Making Base64 Fast Enough to Disappear",
    summary: "Three pull requests removed avoidable copying, introduced a SIMD codec, and eliminated a conversion round-trip in a production React Native image pipeline.",
    metrics: [
      { value: "~150×", label: "Large-payload decode speedup in the SIMD micro-benchmark" },
      { value: "2–3×", label: "End-to-end improvement in the production image pipeline" },
      { value: "v3.0.0", label: "Shipped in a maintainer-validated major release" },
    ],
    sections: [
      { title: "The Problem", body: ["Base64 became the slowest line in a React Native image-processing flamegraph. The library was already the fastest JavaScript-reachable option, so the remaining cost lived between JavaScript and native code."] },
      { title: "The Decision", body: ["A rewrite would spread architecture-specific complexity across the public API. The safer strategy was a sequence of contained changes, each measurable on its own and compatible with existing behavior."] },
      { title: "What I Did", body: ["Stopped copying image-sized buffers at the JSI boundary, replaced the scalar codec with runtime-selected SIMD through simdutf, and removed a UTF-16 to UTF-8 conversion from decoding."] },
      { title: "The Proof", body: ["The isolated codec benchmark showed the headline gain, while the real pipeline produced the more useful two-to-three-times improvement. Both measurements were documented with their limits."] },
      { title: "One Honest Moment", body: ["An early SIMD path mishandled padding on specific payload lengths. The benchmark passed while the broader test suite caught the correctness regression, validating the decision to keep the optimized path behind strong tests."] },
    ],
    process: [
      { title: "Stop Copying Buffers", meta: "PR #49", body: "Operate on underlying buffers directly at the JSI boundary." },
      { title: "Swap in the SIMD Codec", meta: "PR #50", body: "Use simdutf with runtime architecture selection." },
      { title: "Drop the Encoding Round-Trip", meta: "PR #51", body: "Read JavaScript string data directly during decode." },
    ],
    stack: ["C++", "JSI", "simdutf", "React Native", "TypeScript", "Open Source"],
  },
  {
    slug: "clapping-api",
    index: "02",
    meta: "Case Study 02 · Full-Stack · Event Sourcing",
    title: "A Full Event-Sourced Backend in Ten Days",
    summary: "A per-section applause system for an engineering guide, including the backend, an AST plugin, and a durable browser delivery path.",
    metrics: [
      { value: "10 Days", label: "From contract to production" },
      { value: "~60", label: "Buttons injected automatically across seventeen articles" },
      { value: "−45%", label: "Docker image size after optimization" },
    ],
    sections: [
      { title: "The Problem", body: ["The product needed self-hosted, per-section applause without dragging in operational complexity. Events had to remain queryable, abuse-resistant, and reliable when a reader closed the tab."] },
      { title: "The Decision", body: ["An append-only event log preserved the ability to remove abusive events later. A contract-first API kept the client and server aligned, and sendBeacon was chosen for one durable request at the end of a session."] },
      { title: "What I Built", body: ["The API computes totals from immutable events, hashes network identifiers, and keeps limits on the server. A remark plugin derives stable slugs from headings and injects every applause control automatically."] },
      { title: "One Honest Moment", body: ["Using JSON triggered a CORS preflight that did not survive page teardown. Sending text/plain avoided the preflight and restored the delivery guarantee, though the invisible request remained harder to debug."] },
    ],
    process: [
      { title: "Contract First", meta: "Step 01", body: "Define the shared GET and POST behavior before implementation." },
      { title: "Append-Only Events", meta: "Step 02", body: "Preserve correction and audit options instead of mutating one counter." },
      { title: "Durable Delivery", meta: "Step 03", body: "Flush once per session using browser lifecycle events." },
      { title: "Automatic Injection", meta: "Step 04", body: "Generate stable per-heading controls through the Markdown AST." },
    ],
    stack: ["TypeScript", "Node.js", "PostgreSQL", "Remark", "sendBeacon", "Docker"],
  },
];

export function getReferenceCaseStudy(slug) {
  return referenceCaseStudies.find((study) => study.slug === slug) ?? null;
}

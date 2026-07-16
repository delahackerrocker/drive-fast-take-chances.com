// Site-level copy stays here so the presentation components stay mostly layout-only.
export const siteMeta = {
  title: "Practitioner.Digital",
  owner: "Steven de la Torre",
  brand: "Practitioner.Digital",
};

export const navigationItems = [
  { label: "Overview", target: "/#overview" },
  { label: "Call of Duty", target: "/#call-of-duty" },
  { label: "Experience", target: "/#experience" },
  { label: "Contact", target: "/#contact" },
];

export const heroContent = {
  title: "Shipped Game UI/UX, XR Product Work, and Interactive Systems.",
  intro:
    "Steven de la Torre designs and builds player-facing interfaces, product workflows, and prototypes across AAA games, immersive tools, and interactive experiences.",
  positioning:
    "The portfolio includes shipped Call of Duty work, XR product design, design systems, prototyping, and implementation support for teams including Google, the NBA, and the U.S. Air Force.",
  primaryAction: {
    label: "View Call of Duty Work",
    target: "/#call-of-duty",
  },
  secondaryAction: {
    label: "Open Call of Duty Hub",
    target: "/projects/call-of-duty",
  },
  highlights: [
    "Five shipped Call of Duty releases",
    "XR and product work for Google, the NBA, and the U.S. Air Force",
    "UI/UX systems, prototypes, documentation, and implementation support",
  ],
  spotlight: {
    eyebrow: "Featured Work",
    title: "Call of Duty",
    summary:
      "A focused set of case studies covering extraction UX, interaction feedback, visual systems, post-match flow, and combat communication.",
    target: "/projects/call-of-duty",
  },
};

export const actionLinks = [
  {
    label: "Call of Duty",
    note: "Franchise case studies and shipped artifacts",
    target: "/#call-of-duty",
  },
  {
    label: "Experience",
    note: "Game UI/UX, XR tools, and prototypes",
    target: "/#experience",
  },
  {
    label: "Contact",
    note: "Resume, email, LinkedIn, and GitHub",
    target: "/#contact",
  },
];

export const callOfDutyClusterContent = {
  eyebrow: "Flagship Franchise UI/UX",
  title: "Five Shipped Call of Duty Case Studies.",
  intro:
    "A focused route through player-facing systems from five releases: extraction rewards, keypad interaction feedback, franchise visual guidelines, post-match squad flow, and stealth-state communication.",
  action: {
    label: "Explore the Call of Duty Hub",
    target: "/projects/call-of-duty",
  },
};

export const experienceContent = {
  eyebrow: "Broader Practice",
  title: "Game UI/UX, XR Tools, and Production Prototypes.",
  intro:
    "Steven de la Torre designs interfaces for high-context systems: live game flows, immersive product surfaces, desktop tools, and prototypes where state, feedback, and task clarity matter.",
  pillars: [
    {
      title: "Franchise UI/UX Systems",
      body:
        "Shipped interface work across Black Ops 6, Vanguard, MW2, MW3, and Warzone, translating reward loops, combat signals, social flows, and progression states into readable player-facing screens.",
    },
    {
      title: "Immersive Product Work",
      body:
        "Designed and prototyped XR and tool interfaces for Google, the NBA, VRPatients, and U.S. Air Force projects across mobile, tablet, headset, and desktop contexts.",
    },
    {
      title: "Prototypes and Original IP",
      body:
        "Built original IP and working demos such as Rebel Future, Glave Gunner, and the Overwatch Companion Demo to test interaction models, information architecture, and playable systems.",
    },
  ],
};

export const caseStudyPrompt = {
  eyebrow: "Call of Duty Hub",
  title: "Explore Five Call of Duty Case Studies.",
  intro:
    "A quick entry point into the franchise work, organized around shipped artifacts rather than a single long overview.",
  action: {
    label: "Open the Call of Duty Hub",
    target: "/projects/call-of-duty",
  },
};

export const footerContent = {
  eyebrow: "Contact",
  title: "Contact, Resume, and Profile Links.",
  intro:
    "For roles that need game UI/UX, XR product design, prototyping, or implementation support.",
  contactCards: [
    {
      label: "Resume",
      value: "Resume and Work History",
      note: "A concise overview of shipped projects, roles, and production experience.",
      href:
        "https://docs.google.com/document/d/1NIDABEhEkJngSh0aLBNnVqEOnu_9T8hW/edit?usp=drive_link&ouid=103687195586732707079&rtpof=true&sd=true",
    },
    {
      label: "Email",
      value: "stevedelatorre@gmail.com",
      note: "Best route for opportunities, collaborations, and direct questions.",
      href: "mailto:stevedelatorre@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "LinkedIn Profile",
      note: "Professional background, shared connections, and work history.",
      href: "https://www.linkedin.com/in/delahackerrocker/",
    },
    {
      label: "GitHub",
      value: "Practitioner.Digital",
      note: "View the code that drives this site.",
      href: "https://github.com/delahackerrocker/practitioner.digital",
    },
  ],
};

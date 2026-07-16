// Builds predictable page-gallery items from exported slide images.
function createPageGallery(basePath, pageCount, titlePrefix, caption) {
  return Array.from({ length: pageCount }, (_, index) => {
    const pageNumber = index + 1;
    const padded = String(pageNumber).padStart(2, "0");

    return {
      type: "image",
      label: `Page ${padded}`,
      shortLabel: padded,
      title: `${titlePrefix} ${padded}`,
      src: `${basePath}/page-${padded}.png`,
      caption,
      fit: "contain",
    };
  });
}

export const callOfDutyCaseStudies = [
  {
    slug: "call-of-duty/mw3-exfil",
    pageType: "call-of-duty-case-study",
    accent: "#8fb7ff",
    cardImage: "/assets/projects/call-of-duty/images/Exfil_Success_After_Action_Report.png",
    title: "MW3 Exfil",
    tagline:
      "Post-extraction reward, inventory, and progression UX for Modern Warfare Zombies.",
    summary:
      "A post-exfil After Action Report flow for Modern Warfare Zombies, balancing reward drama with readable inventory, XP, loot, and progression breakdowns.",
    role: "UI/UX Technical Designer",
    projectType: "After Action Report Flow",
    timeframe: "Modern Warfare III",
    focusTags: [
      "AAR Flow Design",
      "Reward Reveal",
      "Sequencing and State Logic",
    ],
    context:
      "The Exfil flow sits at the end of a high-stakes run: it needs to reinforce success, summarize rewards, and keep inventory and progression states easy to parse.",
    challenge: [
      "Make a successful extraction feel rewarding and readable across multiple information-dense screens.",
      "Balance cinematic reveal with practical clarity for inventory, XP, loot, and progression breakdowns.",
    ],
    approach: [
      "Mapped the AAR from extraction confirmation to reward reveals, inventory review, and summary states.",
      "Used flow diagrams to make timing, hierarchy, and state transitions easier for teams to scan.",
      "Structured the deck for page-by-page review so the reward flow remains understandable outside the game client.",
    ],
    outcome: [
      "Shows post-match UX thinking through a dense but readable reward flow.",
      "Demonstrates how pacing, hierarchy, and system status can be communicated in a production-ready design deck.",
    ],
    mediaBlocks: [
      {
        eyebrow: "Primary Deck",
        title: "Exfil After Action Report Slideshow",
        intro:
          "The full deck is rendered page by page for a readable walkthrough of the post-exfil flow.",
        items: createPageGallery(
          "/assets/projects/call-of-duty/exfil/pages",
          49,
          "Exfil Deck Page",
          "Page from the Exfil After Action Report deck."
        ),
      },
      {
        eyebrow: "Supporting Flows",
        title: "Flow and Sequencing Support",
        intro:
          "Supporting diagrams clarify the logic from big-picture reward sequencing down to the individual user journey.",
        items: [
          {
            type: "image",
            label: "Flow Map 01",
            shortLabel: "01",
            title: "Jupiter Big-Picture Flow",
            src: "/assets/projects/call-of-duty/exfil/flows/Jupiter-AAR-BIG-PICTURE-FLOW.png",
            caption:
              "High-level sequencing map showing how the Exfil AAR moves across major beats and reward framing.",
            fit: "contain",
          },
          {
            type: "image",
            label: "Flow Map 02",
            shortLabel: "02",
            title: "Cerberus Individual User Flow",
            src: "/assets/projects/call-of-duty/exfil/flows/Cerberus-AAR-IndividualUserFlow.png",
            caption:
              "A closer look at the user journey and state progression inside the Exfil AAR experience.",
            fit: "contain",
          },
        ],
      },
    ],
  },
  {
    slug: "call-of-duty/bo6-keypad-mini-game",
    pageType: "call-of-duty-case-study",
    accent: "#f2b76a",
    cardImage: "/assets/projects/call-of-duty/keypad-mini-game/flows/KeypadFlowSmall.png",
    title: "BO6 Keypad Mini Game",
    tagline:
      "A compact BO6 interaction shaped around readable state, feedback, and pressure.",
    summary:
      "A tight Black Ops 6 interaction loop focused on visible state changes, success feedback, and fast comprehension under pressure.",
    role: "UI/UX Technical Designer",
    projectType: "Mini-Game Interaction Design",
    timeframe: "Black Ops 6",
    focusTags: [
      "Mini-Game UX",
      "Feedback and Progression",
      "Interaction Clarity",
    ],
    context:
      "The artifact set shows how even a short, high-tension interaction benefits from clear feedback, visible state, and disciplined pacing.",
    challenge: [
      "Make a puzzle interaction readable at a glance while still preserving tension and progression.",
      "Communicate state changes, success cues, and player feedback clearly inside a compact mini-game loop.",
    ],
    approach: [
      "Put the motion artifact first so the interaction can be understood through timing, feedback, and response.",
      "Used the flow diagram as supporting evidence for feedback logic, readability, and sequencing decisions.",
      "Kept the authored text short so the case study stays centered on interaction clarity.",
    ],
    outcome: [
      "Adds a concise interaction-design proof point to the Call of Duty cluster.",
      "Shows how compact mechanics can still benefit from thoughtful UX framing and state communication.",
    ],
    mediaBlocks: [
      {
        eyebrow: "Video Artifact",
        title: "Keypad Interaction in Motion",
        intro:
          "Motion leads because timing, feedback, and state change are central to the case study.",
        items: [
          {
            type: "video",
            label: "Video",
            shortLabel: "V1",
            title: "BO6 Keypad Mini Game Clip",
            src: "/assets/projects/call-of-duty/keypad-mini-game/video/BlackOps6-Keypads.mp4",
            poster: "/assets/projects/call-of-duty/keypad-mini-game/stills/BlackOps6-Keypads-first-frame.png",
            caption:
              "Local video capture showing interaction rhythm, puzzle pacing, and feedback states in sequence.",
          },
        ],
      },
      {
        variant: "flowchart",
        eyebrow: "Flow Chart Support",
        title: "Keypad Flow Chart",
        intro:
          "The supporting flow chart has an inspectable treatment so branching logic can be read at full scale.",
        items: [
          {
            type: "flowchart",
            label: "Flow Support",
            shortLabel: "F1",
            title: "Keypad Flow Chart",
            src: "/assets/projects/call-of-duty/keypad-mini-game/flows/KeypadFlowSmall.png",
            caption:
              "Supporting flow chart for interaction branches, readability, and state communication.",
          },
        ],
      },
    ],
  },
  {
    slug: "call-of-duty/warzone-cold-war-design-guide",
    pageType: "call-of-duty-case-study",
    accent: "#9fc2ff",
    cardImage: "/assets/projects/call-of-duty/images/WZ_StyleGuide.png",
    title: "Warzone / Cold War Design Guide",
    tagline:
      "A franchise visual-systems guide for shared content, brand balance, and UI consistency.",
    summary:
      "A Warzone / Black Ops Cold War guide framing typography, color, item branding, and UI tone for a shared ecosystem without flattening each product's identity.",
    role: "UI/UX Technical Designer",
    projectType: "Style Guide and Visual System Design",
    timeframe: "Warzone / Cold War",
    focusTags: [
      "Visual Systems",
      "Typography and Color",
      "Brand and UI Consistency",
    ],
    context:
      "As Warzone and Black Ops Cold War moved toward deeper integration, the visual system needed clearer guidance for consistency, readability, and premium presentation.",
    challenge: [
      "Create visual guidance that balances shared-content needs with premium product identity.",
      "Document typography, color, branding, and consistency targets in a form teams can actually use.",
    ],
    approach: [
      "Let the document itself remain central while giving it a cleaner, more readable in-site presentation.",
      "Focused the authored story on visual leadership, consistency targets, and brand-system balancing.",
      "Curated the surrounding stills so the deck remains the backbone of the case study.",
    ],
    outcome: [
      "Shows visual leadership around tone, consistency, and decision-making at scale.",
      "Demonstrates how a design guide can align teams around a shared visual target.",
    ],
    mediaBlocks: [
      {
        eyebrow: "Primary Deck",
        title: "In-Site Style Guide Slideshow",
        intro:
          "Every page of the guide is available in-site for a readable review of the artifact.",
        items: createPageGallery(
          "/assets/projects/call-of-duty/warzone-cold-war-design-guide/pages",
          40,
          "Style Guide Page",
          "Page from the Warzone / Cold War design guide."
        ),
      },
      {
        eyebrow: "Supporting Stills",
        title: "Visual Tone and Brand Targets",
        intro:
          "Supporting stills connect the guide to outcome-facing visual targets.",
        items: [
          {
            type: "image",
            label: "Still 01",
            shortLabel: "01",
            title: "Style Guide Cover Still",
            src: "/assets/projects/call-of-duty/images/WZ_StyleGuide.png",
            caption:
              "A direct still from the guide that works well as a quick visual summary of the artifact.",
            fit: "contain",
          },
          {
            type: "image",
            label: "Still 02",
            shortLabel: "02",
            title: "Warzone Promotional Target",
            src: "/assets/projects/call-of-duty/images/AGB_WZ_0309_TOUT.jpg",
            caption:
              "Supporting visual that helps frame the tone and premium-product balance discussed in the guide.",
          },
        ],
      },
    ],
  },
  {
    slug: "call-of-duty/play-again-with-team",
    pageType: "call-of-duty-case-study",
    accent: "#a2d0ff",
    cardImage: "/assets/projects/call-of-duty/images/WZ_UX__AAR_and_PlayAgainWithTeam.png",
    title: "Play Again With Team",
    tagline:
      "Exploring Information Flow and Decision Making",
    summary:
      "A Warzone post-match flow focused on the moment players review results, decide whether to stay together, and move into the next session.",
    role: "UI/UX Technical Designer",
    projectType: "Post-Match and Social UX Flow",
    timeframe: "Warzone",
    focusTags: [
      "Social UX",
      "Post-Match Decisions",
      "Progression Framing",
    ],
    context:
      "The artifact centers on a small but important social decision: preserving squad momentum without overloading the post-match screen.",
    challenge: [
      "Make the post-match handoff between rewards, decisions, and team continuity easy to understand.",
      "Support a socially meaningful choice without cluttering the AAR with too many competing messages.",
    ],
    approach: [
      "Centered the case study on decision flow, social continuity, and readability rather than treating the PDF like a generic attachment.",
      "Let the slideshow stay concise and easy to step through, which matches the scale of the artifact.",
      "Used one strong supporting still so the work is understandable before the user starts paging through the deck.",
    ],
    outcome: [
      "Adds a clear social UX case study to the Call of Duty cluster.",
      "Shows thinking around team continuity and post-match framing without overclaiming outcomes.",
    ],
    mediaBlocks: [
      {
        eyebrow: "Primary Deck",
        title: "Play Again With Team Slideshow",
        intro:
          "The smaller deck keeps the social decision flow compact and easy to move through.",
        items: createPageGallery(
          "/assets/projects/call-of-duty/play-again-with-team/pages",
          7,
          "Play Again Page",
          "Page from the Play Again With Team deck."
        ),
      },
    ],
  },
  {
    slug: "call-of-duty/bo6-stealth-system",
    pageType: "call-of-duty-case-study",
    accent: "#88d4c4",
    cardImage: "/assets/projects/call-of-duty/stealth-system/flows/Stealth_Meter-01.png",
    title: "BO6 Stealth System",
    tagline:
      "A BO6 awareness system for stealth states, escalation, and combat readability.",
    summary:
      "A focused exploration of how enemy awareness and escalation states can stay readable enough to support stealth play under pressure.",
    role: "UI/UX Technical Designer",
    projectType: "Awareness-State Communication System",
    timeframe: "Black Ops 6",
    focusTags: [
      "State Readability",
      "Icon Exploration",
      "Combat Communication",
    ],
    context:
      "Framed against Black Ops 6's spy-thriller campaign language, the artifact explores how stealth information can stay legible without flattening tension.",
    challenge: [
      "Communicate awareness escalation clearly enough for players to understand stealth status at a glance.",
      "Explore iconography and state treatment that can survive combat pressure without adding noise.",
    ],
    approach: [
      "Centered the case study on enemy awareness states and the communication problem they create for players.",
      "Kept the supporting copy concise so the artifact stays central.",
      "Positioned the exploration as a focused proof point within the broader Call of Duty work.",
    ],
    outcome: [
      "Adds a communication-design-focused case study to the Call of Duty cluster.",
      "Shows how a tightly scoped UI problem can still reveal strong systems and communication design.",
    ],
    mediaBlocks: [
      {
        eyebrow: "Primary Artifact",
        title: "Stealth Awareness Exploration",
        intro: [
          "Stealth in a Black Ops-style Call of Duty game is more than a pacing change; it changes the contract with the player. Instead of relying only on reaction and firepower, the experience asks for control, awareness, and intent. Every movement, line of sight, and sound becomes meaningful.",
          "Strong stealth UX turns invisible systems such as enemy awareness, suspicion, and escalation into readable feedback the player can trust. That visibility supports deliberate choices: avoid the fight, manipulate the encounter, or decide exactly when combat begins.",
        ],
        items: [
          {
            type: "image",
            label: "Artifact",
            shortLabel: "01",
            title: "Stealth Meter Exploration",
            src: "/assets/projects/call-of-duty/stealth-system/flows/Stealth_Meter-01.png",
            caption:
              "Exploration board focused on awareness states, escalation clarity, and player-readable status communication.",
            fit: "contain",
          },
        ],
      },
      {
        eyebrow: "Gameplay Feedback Video",
        title: "Stealth Meter Update Demo",
        intro:
          "A short interaction demo showing how the stealth meter communicates awareness changes, escalation, and player feedback during stealth-state transitions.",
        items: [
          {
            type: "video",
            label: "Video",
            shortLabel: "V1",
            title: "Stealth Meter Update Demo",
            src: "/assets/projects/call-of-duty/stealth-system/video/StealthMeterUpdateDemo.mp4",
            caption:
              "Stealth meter feedback and escalation behavior in motion.",
          },
        ],
      },
    ],
  },
];

export const callOfDutyHub = {
  slug: "call-of-duty",
  pageType: "call-of-duty-hub",
  accent: "#8fb7ff",
  cardImage: "/assets/projects/call-of-duty/images/header.jpg",
  eyebrow: "AAA Franchise UI/UX",
  title: "Call of Duty",
  tagline:
    "Five shipped case studies across extraction UX, interaction feedback, visual systems, social flow, and combat communication.",
  summary:
    "Across Black Ops 6, Vanguard, MW2, MW3, and Warzone, Steven de la Torre shipped UI/UX work spanning feature design, visual systems, documentation, and implementation support for franchise-scale teams.",
  role: "UI/UX Technical Designer",
  projectType: "AAA Franchise UI/UX",
  timeframe: "Black Ops 6, Vanguard, MW2, MW3, and Warzone",
  focusTags: [
    "5 Shipped Releases",
    "Franchise UI/UX",
    "Feature Flows, Systems, and Documentation",
  ],
  context:
    "The hub frames the Call of Duty work at a product level, then routes directly into the strongest artifact-led case studies.",
  challenge: [
    "Separate five different proof points: Exfil AAR, BO6 keypad, Warzone / Cold War guidance, Play Again With Team, and BO6 stealth readability.",
    "Help recruiters and hiring managers scan role, project type, timeframe, and media evidence before opening a deeper case study.",
  ],
  approach: [
    "Grouped the hub around shipped interaction problems: rewards, feedback, visual systems, squad continuity, and stealth-state communication.",
    "Kept the hub short, then moved detailed evidence into dedicated pages with slideshows, videos, and inspectable diagrams.",
    "Used consistent metadata and card structure so very different artifacts still feel comparable.",
  ],
  outcome: [
    "Makes a broad body of franchise work easier to scan and compare.",
    "Surfaces feature design, systems thinking, documentation, and communication design across shipped releases.",
  ],
};

import { callOfDutyCaseStudies, callOfDutyHub } from "./callOfDuty";

// Broader portfolio entries share the same project shape used by the cards and detail pages.
const portfolioProjects = [
  callOfDutyHub,
  ...callOfDutyCaseStudies,
  {
    slug: "snoopys-soapbox-racers",
    title: "Snoopy's Soapbox Racers",
    accent: "#ef9d67",
    tagline:
      "A racing game entry focused on visual tone, character presentation, and case-study clarity.",
    summary:
      "A compact visual case study that adds range beyond systems-heavy UX and is structured around media-led evidence.",
    role: "Visual Presentation and Game UI Framing",
    projectType: "Racing Game Project",
    timeframe: "Archived Game Work",
    focusTags: [
      "Media-Led Case Study",
      "Racing Project",
      "Game-Facing Presentation",
    ],
    context:
      "The public source material establishes the project and its tone, so the current page keeps scope factual and leaves room for final screenshots or gameplay captures.",
    challenge: [
      "Show visual range while keeping the role and project framing clear.",
      "Create a case study structure that can support media, flow notes, and role context as stronger assets are added.",
    ],
    approach: [
      "Kept the framing factual and media-led, with the text providing context for the visual evidence.",
      "Positioned the project as a visual counterpoint to the franchise UI/UX and XR product work.",
      "Gave the media area enough scale for final captures to carry the strongest evidence.",
    ],
    outcome: [
      "Keeps a visually distinctive racing project in the portfolio mix.",
      "Creates a clean foundation for a stronger media-led case study as additional assets are selected.",
    ],
    media: [
      {
        type: "image",
        label: "Visual Frame 01",
        title: "Featured Racing Visual",
        caption:
          "The strongest frame or hero crop should communicate the racing tone clearly on desktop and mobile.",
      },
      {
        type: "video",
        label: "Motion Artifact",
        title: "Gameplay or Presentation Clip",
        caption:
          "A short gameplay or presentation clip can show motion, pace, and game-facing polish.",
      },
    ],
  },
  {
    slug: "rebel-future",
    title: "Rebel Future",
    accent: "#ca8dff",
    tagline:
      "Original IP connecting world-building, game UI, player embodiment, and prototype direction.",
    summary:
      "An original game universe framed as a product ecosystem: character and world briefs, UI studies, embodiment demos, teaser material, and gameplay direction.",
    role: "Creative Direction, UI/UX, Gameplay Concepting, and Development",
    projectType: "Original IP and Game Universe",
    timeframe: "Ongoing Independent Project Family",
    focusTags: [
      "Original IP",
      "Game Direction",
      "UI and Embodiment",
    ],
    context:
      "The legacy material presents Rebel Future as Steven de la Torre's own game universe, with documentation spanning characters, world-building, gameplay direction, and supporting prototypes.",
    challenge: [
      "Give one original universe a coherent identity across gameplay concepts, interface language, motion, world-building, and teaser material.",
      "Use smaller artifacts and demos to test interaction models and embodiment without losing the larger project family.",
    ],
    approach: [
      "Used Rebel Future as the umbrella story, with Glave Gunner acting as a recurring vehicle for UI, gameplay, and embodiment prototypes.",
      "Connected supporting artifacts such as the player embodiment demo, StarFighter module, teaser, and character documentation into one clearer project narrative.",
      "Kept the structure broad so the project family reads clearly before individual prototypes become narrower case studies.",
    ],
    outcome: [
      "Shows original IP thinking alongside client and franchise work.",
      "Connects scattered legacy material into a clearer product and world-building narrative.",
      "Leaves room for narrower case studies as stronger assets and flow notes are selected.",
    ],
    media: [
      {
        type: "image",
        label: "Project Family 01",
        title: "Universe and Visual Identity",
        caption:
          "World-building art, character material, or visual identity frames define the Rebel Future tone.",
      },
      {
        type: "image",
        label: "Project Family 02",
        title: "Glave Gunner Player Embodiment",
        caption:
          "Embodiment demo media shows player presence, spatial feedback, and interaction inside the world.",
      },
      {
        type: "video",
        label: "Project Family 03",
        title: "Teaser or Intro Reel",
        caption:
          "A teaser, intro, or gameplay concept clip can show how the IP moves beyond static documentation.",
      },
    ],
  },
  {
    slug: "overwatch-companion-demo",
    title: "Overwatch Companion Demo",
    accent: "#f0b26e",
    tagline:
      "A service-minded companion app concept for browsing, account support, and quick reference.",
    summary:
      "A compact product concept that treats a companion app as a practical service layer, centered on browsing, account utility, and clear interface structure.",
    role: "UX Design, UI, and Demo Implementation",
    projectType: "Companion App Concept",
    timeframe: "Personal Demo Project",
    focusTags: [
      "Companion UX",
      "Utility Features",
      "Demo Implementation",
    ],
    context:
      "The project is represented publicly through a video demo, so the framing stays focused on product utility, information architecture, and implementation evidence.",
    challenge: [
      "Design a companion experience that supports useful tasks rather than acting as a decorative second screen.",
      "Create a service layer that makes browsing, account context, and quick reference easy to understand outside the main client.",
    ],
    approach: [
      "Framed the project as a compact product experience with clear utility rather than as a fan-art exercise.",
      "Emphasized product framing, information hierarchy, and task-oriented interface structure.",
      "Used the existing demo link so the work can show motion without extra UI overhead.",
    ],
    outcome: [
      "Adds a more product-shaped case study to the featured lineup.",
      "Shows range beyond franchise UI by pairing concept thinking with a working demo artifact.",
    ],
    media: [
      {
        type: "video",
        label: "Demo Video",
        title: "Overwatch Companion Demo",
        caption:
          "Embedded from the legacy portfolio's YouTube demo so the case study has a real interaction artifact.",
        embedUrl: "https://www.youtube.com/embed/PMTRt2csE1A",
      },
      {
        type: "image",
        label: "UI Capture Set",
        title: "Companion UI Captures",
        caption:
          "Mockups or video stills can show account views, utility features, and browsing flows.",
      },
    ],
  },
  {
    slug: "how-to-train-your-dragon-demo",
    title: "How to Train Your Dragon Demo",
    accent: "#cf8d98",
    tagline:
      "A character-led demo focused on visual tone, motion, and presentation craft.",
    summary:
      "A supporting visual piece that broadens the portfolio through character work, motion, and presentation rather than systems-heavy interface design.",
    role: "Demo Presentation and Visual Showcase",
    projectType: "Demo and Animation-Led Project",
    timeframe: "Archived Demo Work",
    focusTags: [
      "Visual Demo",
      "Character-Led Project",
      "Animation-Led Presentation",
    ],
    context:
      "This entry is intentionally concise and media-led, using available public material as the scope boundary.",
    challenge: [
      "Keep the project scoped to verifiable source material.",
      "Keep enough structure for animation and visual material to carry the case study.",
    ],
    approach: [
      "Framed the project as a restrained supporting entry instead of forcing it into the primary tier.",
      "Kept the structure image-first so the eventual case study can rely on media and concise context.",
    ],
    outcome: [
      "Preserves a recognizable visual project in the broader mix.",
      "Creates a clean secondary case study that can strengthen quickly as more visual evidence is selected.",
    ],
    media: [
      {
        type: "image",
        label: "Visual Frame 01",
        title: "Demo Still",
        caption:
          "The strongest still or marketing frame should communicate the project at a glance.",
      },
      {
        type: "video",
        label: "Visual Frame 02",
        title: "Animation Sequence",
        caption:
          "A short sequence or breakdown clip can connect the page to the legacy animation material.",
      },
    ],
  },
  {
    slug: "glave-gunner-ipad-ui",
    title: "Glave Gunner iPad UI",
    accent: "#b68eff",
    tagline: "Tablet game UI for one- and two-player flows inside the Rebel Future universe.",
    summary:
      "A concrete UI slice from Rebel Future, centered on menu flow, account handling, customization, and moment-to-moment play surfaces for tablet.",
    role: "Direction, Development, and UI/UX",
    projectType: "iPad Game UI",
    timeframe: "Independent Rebel Future Project",
    focusTags: [
      "Rebel Future",
      "Game UI",
      "Directed and Developed",
    ],
    context:
      "The legacy portfolio frames this as directed and developed by Steven de la Torre, making it a useful supporting case study beneath the broader Rebel Future umbrella.",
    challenge: [
      "Show a specific UI artifact from an original IP without losing the larger project family around it.",
      "Keep the entry concrete enough to show interface ownership while leaving room for fuller screenshots and flow notes.",
    ],
    approach: [
      "Positioned the project as a focused UI slice within the Rebel Future family.",
      "Focused the copy on direction, development, and interface ownership as stated in the legacy material.",
    ],
    outcome: [
      "Adds a more tangible Rebel Future UI entry.",
      "Creates a useful supporting case study for future screen captures, flow annotations, and interaction notes.",
    ],
    media: [
      {
        type: "image",
        label: "UI Frame 01",
        title: "iPad Interface",
        caption:
          "The strongest screen or menu view should show the Glave Gunner iPad UI at a glance.",
      },
      {
        type: "image",
        label: "UI Frame 02",
        title: "Flow Breakdown",
        caption:
          "Flow annotations can connect the interface to one- and two-player use cases.",
      },
    ],
  },
  {
    slug: "vr-intelligence-tool-usaf",
    title: "VR Intelligence Tool for the USAF",
    accent: "#9bd0c4",
    tagline:
      "A tablet and VR intelligence workflow for dense information review.",
    summary:
      "A security-conscious UX project pairing tablet and headset interfaces for reviewing and recording intelligence data across 3D globe views and network-style structures.",
    role: "UX Design, Unity Prototyping, and Development",
    projectType: "Tablet and VR Intelligence Workflow Tool",
    timeframe: "Client Product",
    focusTags: [
      "Simulation UX",
      "Tablet and VR Workflows",
      "Security-Conscious Prototype Data",
    ],
    context:
      "The public source material describes Steven de la Torre prototyping UI in Unity, then contributing on the broader shipping team for the product.",
    challenge: [
      "Make complex intelligence data readable across tablets, VR headsets, globe views, and network-like structures.",
      "Prototype enough interaction clarity to support expert workflows while using safe representative data.",
    ],
    approach: [
      "Used Unity-based UI prototyping to make the workflow tangible and test how dense information should behave across surfaces.",
      "Balanced tablet and VR interaction needs so the product felt like one connected system rather than two unrelated interfaces.",
      "Kept the writeup concise while preserving the project's expert-workflow credibility.",
    ],
    outcome: [
      "Retains one of the strongest product-credibility projects in the body of work.",
      "Shows that the work extends beyond games into immersive tools, expert workflows, and shipped client products.",
    ],
    media: [
      {
        type: "image",
        label: "Workflow Frame 01",
        title: "3D Globe and Network View",
        caption:
          "The clearest frame should show how dense intelligence information was organized and read.",
      },
      {
        type: "image",
        label: "Workflow Frame 02",
        title: "Tablet and VR Interface",
        caption:
          "Paired captures can show how the product moved between flat and immersive surfaces.",
      },
    ],
  },
  {
    slug: "authoring-tool-final-vr-panels",
    title: "Authoring Tool Final + VR Panels",
    accent: "#7cc8ff",
    tagline:
      "A desktop and VR interface system linking authoring workflows to immersive panels.",
    summary:
      "A systems-heavy project pairing backend authoring surfaces with the VR panels they drive, showing workflow design, tool thinking, and front-end alignment.",
    role: "UX Design and Interface Prototyping",
    projectType: "Authoring Tool and VR Interface System",
    timeframe: "Client-Side Product Workflow",
    focusTags: [
      "Workflow-Heavy UI",
      "Desktop and VR Pairing",
      "System Design Thinking",
    ],
    context:
      "The legacy portfolio presents this as close-to-final UI for both the authoring tool and VR frontend, making it a strong example of connected creator and user surfaces.",
    challenge: [
      "Keep authoring surfaces and VR-facing panels aligned so the overall product feels coherent.",
      "Present a workflow-heavy tool in a way that keeps structure, state, and output relationships readable.",
    ],
    approach: [
      "Framed the project as one connected interface system rather than splitting desktop and VR work into unrelated cards.",
      "Kept the writeup concise so screenshots and process notes can carry the detailed workflow story.",
    ],
    outcome: [
      "Adds a strong creator-tool-to-immersive-output systems example to the broader body of work.",
      "Supports future case-study expansion around process, authoring workflows, and immersive UI behavior.",
    ],
    media: [
      {
        type: "image",
        label: "System Frame 01",
        title: "Authoring Tool Interface",
        caption:
          "The clearest authoring frame should show workflow structure, state, and output control.",
      },
      {
        type: "image",
        label: "System Frame 02",
        title: "VR Panel Interface",
        caption:
          "A matching immersive panel view can make the desktop-to-VR system relationship readable.",
      },
    ],
  },
  {
    slug: "curious-george",
    title: "Curious George",
    accent: "#ffd36c",
    tagline:
      "A learning game app showing UI/UX and development ownership for a younger audience.",
    summary:
      "An educational game app where Steven de la Torre handled UI/UX and principal development, showing end-to-end ownership in a lighter product category.",
    role: "UI/UX and Principal Development",
    projectType: "Learning Game App for Kids",
    timeframe: "Educational Game Project",
    focusTags: [
      "Educational Game",
      "UI/UX plus Development",
      "Kid-Friendly Interaction",
    ],
    context:
      "The public writeup is short but explicit about Steven de la Torre's role across both experience design and development.",
    challenge: [
      "Create playful, readable interaction for younger users while keeping tasks clear.",
      "Build a product that works for a very different audience than the rest of the game and tool work.",
    ],
    approach: [
      "Positioned the project as a range-expanding supporting case study.",
      "Kept the copy specific to the source material: UI/UX ownership and principal development responsibility.",
    ],
    outcome: [
      "Broadens the body of work beyond shooter, VR, and original IP projects.",
      "Preserves a useful example of full-stack creative ownership in a lighter-weight format.",
    ],
    media: [
      {
        type: "image",
        label: "Project Frame 01",
        title: "Learning App Interface",
        caption:
          "The clearest screen or interaction still should communicate the app's audience and tone quickly.",
      },
    ],
  },
];

export const projects = portfolioProjects;

export { callOfDutyHub, callOfDutyCaseStudies };

// Keep routing cheap: slugs are the only lookup key used by the custom router.
export function getProjectBySlug(slug) {
  return portfolioProjects.find((project) => project.slug === slug) ?? null;
}

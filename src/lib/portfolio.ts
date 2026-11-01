export interface Project {
  slug: string;
  client: string;
  title: string;
  category: string;
  tier: 1 | 2 | 3;
  description: string;
  tags: string[];
  video?: boolean;
}

export const projects: Project[] = [
  // TIER 1, Fortune 500 + Cultural Icons
  {
    slug: "makers-mark-culturecon",
    client: "Maker's Mark",
    title: "Maker's Mark × CultureCon",
    category: "Brand Activation",
    tier: 1,
    description:
      "Brand activation at CultureCon, including experience design, on-site creative direction, and content capture.",
    tags: ["Brand Activation", "Event Creative", "Content"],
    video: true,
  },
  {
    slug: "remy-martin",
    client: "Rémy Martin × Meta",
    title: "Rémy Martin, Art Basel Miami",
    category: "Experiential",
    tier: 1,
    description:
      "A dinner activation for Rémy Martin and Instagram at Art Basel Miami, bringing the brand into an intimate hospitality setting.",
    tags: ["Experiential", "Luxury", "Content Creation"],
    video: true,
  },
  {
    slug: "redbull-daysnatchers",
    client: "Red Bull",
    title: "Red Bull × Daysnatchers",
    category: "Brand Activation",
    tier: 1,
    description:
      "Brand integration, event design, and content creation for the Red Bull and Daysnatchers activation.",
    tags: ["Brand Strategy", "Event Creative", "Content Creation"],
  },
  {
    slug: "bacardi",
    client: "Bacardi Brands",
    title: "Bacardi Brands",
    category: "Brand Campaign",
    tier: 1,
    description:
      "Campaign creative and brand activation work for Bacardi, connecting the brand with live experiences and supporting content.",
    tags: ["Brand Campaign", "Creative Direction"],
  },
  {
    slug: "popeyes",
    client: "Popeyes",
    title: "Popeyes",
    category: "Brand Creative",
    tier: 1,
    description:
      "Brand creative and campaign assets for Popeyes. Selected imagery shows the brand in a live activation setting.",
    tags: ["Brand Creative", "Campaign"],
  },

  {
    slug: "febreze",
    client: "Febreze",
    title: "Febreze",
    category: "Brand Activation",
    tier: 1,
    description:
      "An outdoor brand activation for Febreze, including booth buildout, a brand ambassador program, and product sampling.",
    tags: ["Brand Activation", "Experiential", "P&G"],
  },

  // TIER 2, Creative/Design Range
  {
    slug: "bean-locks",
    client: "Bean Locks",
    title: "Bean Locks",
    category: "Brand Identity",
    tier: 2,
    description:
      "Logo and brand identity for Bean Locks, with a bold mark and a consistent visual direction.",
    tags: ["Logo Design", "Brand Identity", "Sports"],
  },
  {
    slug: "kens-computer-solutions",
    client: "Ken's Computer Solutions",
    title: "Ken's Computer Solutions",
    category: "Brand Identity",
    tier: 2,
    description:
      "Logo and brand identity for Ken's Computer Solutions, designed to give the technology business a clear, approachable presence.",
    tags: ["Logo Design", "Brand Identity", "Tech"],
  },
  {
    slug: "db4d",
    client: "Db4D",
    title: 'Db4D, "Death B4 Dishonor"',
    category: "3D Typography",
    tier: 2,
    description:
      "Custom 3D typography and brand design for Death B4 Dishonor, using dimensional lettering as the central visual element.",
    tags: ["3D Typography", "Brand Design"],
  },
  {
    slug: "kannagruv",
    client: "KannaGruv",
    title: "KannaGruv",
    category: "Brand Identity",
    tier: 2,
    description:
      "A retro-inspired logo and visual identity for KannaGruv, developed into a consistent brand design system.",
    tags: ["Brand Identity", "Retro", "Lifestyle"],
  },
  // TIER 3, Industry Range
  {
    slug: "courvoisier-herstory",
    client: "Courvoisier",
    title: "Courvoisier Presents #HerStory",
    category: "Brand Activation",
    tier: 3,
    description:
      "Video production for Courvoisier's #HerStory campaign, documenting the event and its brand experience.",
    tags: ["Video Production", "Brand Activation", "Spirits"],
  },
  {
    slug: "skillosophy-effen-vodka",
    client: "Effen Vodka",
    title: "Skillosophy × Effen Vodka",
    category: "Brand Activation",
    tier: 3,
    description:
      "Video production for Skillosophy presented by Effen Vodka, capturing the event and its cultural programming.",
    tags: ["Video Production", "Brand Activation", "Spirits"],
  },

  {
    slug: "makers-mark-handcrafted",
    client: "Maker's Mark",
    title: "Maker's Mark, Handcrafted",
    category: "Video Production",
    tier: 3,
    description:
      "Video production for Maker's Mark, with a focus on the brand's craft and heritage.",
    tags: ["Video Production", "Brand Storytelling", "Spirits"],
  },
];

export const services = [
  {
    id: "brand-identity",
    title: "Brand Identity",
    headline: "A clear identity for the business you are building.",
    description:
      "We define how your brand looks and speaks, then create the logo, typography, color palette, and design guidelines that keep it consistent across your website, packaging, and marketing.",
    deliverables: [
      "Brand direction and messaging",
      "Logo and visual identity",
      "Brand guidelines",
      "Print, packaging, and launch assets",
    ],
    example: "Explore identity work",
    proofHref: "/work#brand-identity",
    inquiry: "brand",
  },
  {
    id: "websites",
    title: "Websites",
    headline: "Turn interest in your business into a clear next step.",
    description:
      "We plan, write, design, and build custom websites around what your customers need to know. Clear service pages, thoughtful inquiry flows, and responsive design make it easier to explore your offer and get in touch.",
    deliverables: [
      "Website strategy and copy",
      "Custom design and development",
      "Mobile layouts and on-page SEO",
      "Forms, booking, and CRM connections as scoped",
    ],
    example: "See the Fire & Ash websites",
    proofHref: "/work#websites",
    inquiry: "website",
  },
  {
    id: "content-experiences",
    title: "Content & Experiences",
    headline: "Bring your brand into the places people see and experience it.",
    description:
      "From campaign graphics and video to animation and live activations, we carry your identity into the work your audience encounters. Creative direction guides the idea, the production, and the finished assets.",
    deliverables: [
      "Campaign and social content",
      "Video production and photography",
      "Motion design and AI-assisted animation",
      "Event creative and brand activations",
    ],
    example: "Explore content and activations",
    proofHref: "/work#content-experiences",
    inquiry: "content",
  },
  {
    id: "business-automation",
    title: "Business Automation",
    headline: "Keep inquiries moving and give your team time back.",
    description:
      "We map tasks such as intake, lead follow-up, scheduling, and reporting, then build connected workflows with AI where it helps. Each project defines what runs automatically, what needs review, and when a person takes over.",
    deliverables: [
      "Workflow discovery and automation audits",
      "Intake and follow-up systems",
      "Scheduling and reporting connections",
      "Monitoring and ongoing support as scoped",
    ],
    example: "Explore business automation",
    proofHref: "/services/digital-employees",
    inquiry: "automation",
  },
];

export const projectSteps = [
  {
    title: "Tell us what you need.",
    description:
      "Share your business, goals, and timeline. We will discuss the project and recommend a scope that fits.",
  },
  {
    title: "Set the direction.",
    description:
      "We agree on the deliverables, budget, and schedule before work begins, then develop the creative direction together.",
  },
  {
    title: "Build, review, and launch.",
    description:
      "We create the work, review it with you, and prepare the final files or website for launch. Ongoing support is scoped separately.",
  },
];

export interface WebsiteProject {
  slug: string;
  client: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
  image: string;
  alt: string;
}

/** Live client sites, the proof behind the web design service. */
export const websites: WebsiteProject[] = [
  {
    slug: "jade-lilly",
    client: "Jade Lilly",
    title: "A digital world for an experiential artist",
    description:
      "We designed and built a website that brings Jade Lilly’s photography, textile installations, and experiences into one world. Visitors can explore the work, discover Strings Attached, and start a project with the artist.",
    tags: [
      "Website design & development",
      "Creative direction",
      "Artist portfolio",
    ],
    url: "https://jadelillystudio.com/",
    image: "/assets/images/jade-lilly-website.jpg",
    alt: "Hero artwork from the Jade Lilly website, showing an island of yarn-built creative spaces",
  },
  {
    slug: "fire-and-ash-cigar-carts",
    client: "Fire & Ash Cigar Carts",
    title: "A custom cart, configured before the first conversation",
    description:
      "An eight-page website that helps golf clubs and operators explore custom cigar humidor carts. A golf-inspired configurator collects their choices and sends the inquiry to HubSpot, giving the sales team context for the next conversation.",
    tags: [
      "Website design & development",
      "Product configurator",
      "CRM integration",
    ],
    url: "https://fireandashcigarcarts.com",
    image: "/assets/images/fire-ash-cigar-carts.jpg",
    alt: "Fire and Ash Cigar Carts website showing a custom cigar humidor golf cart at dusk on a Florida golf course with the headline A new era of the back nine",
  },
  {
    slug: "fire-and-ash-events",
    client: "Fire & Ash Events",
    title: "An event experience with a clear path to inquiry",
    description:
      "A five-page website for a Florida mobile cigar lounge. Visitors can explore the experience, see pricing, and browse event photography before completing a five-step survey that captures the details of their event.",
    tags: ["Website design & development", "Event inquiry flow", "Local SEO"],
    url: "https://fireandashevents.com",
    image: "/assets/images/fire-ash-events.jpg",
    alt: "Fire and Ash Events website home page showing a dark cinematic hero of a mobile cigar lounge with the headline The night slows down when the torch lights",
  },
];

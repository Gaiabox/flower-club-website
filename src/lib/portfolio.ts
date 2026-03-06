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
  // TIER 1 — Fortune 500 + Cultural Icons
  {
    slug: "makers-mark-culturecon",
    client: "Maker's Mark",
    title: "Maker's Mark × CultureCon",
    category: "Brand Activation",
    tier: 1,
    description:
      "Full-scale brand activation for Maker's Mark at CultureCon. Immersive experience design, on-site creative direction, and multi-platform content capture for one of culture's most important stages.",
    tags: ["Brand Activation", "Event Creative", "Content"],
    video: true,
  },
  {
    slug: "remy-martin",
    client: "Rémy Martin × Meta",
    title: "Rémy Martin — Art Basel Miami",
    category: "Experiential",
    tier: 1,
    description:
      "Intimate Instagram dinner activation for Rémy Martin at Art Basel Miami. Premium brand storytelling at the intersection of art, culture, and luxury hospitality.",
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
      "Collaborative activation bringing Red Bull's energy to Daysnatchers' cultural platform. Strategic brand integration, event design, and content creation that felt native, not sponsored.",
    tags: ["Brand Strategy", "Event Creative", "Content Creation"],
  },
  {
    slug: "bacardi",
    client: "Bacardi Brands",
    title: "Bacardi Brands",
    category: "Brand Campaign",
    tier: 1,
    description:
      "Campaign creative and brand activations for Bacardi. Premium spirits positioning meets culture-forward execution across multiple touchpoints.",
    tags: ["Brand Campaign", "Creative Direction"],
  },
  {
    slug: "popeyes",
    client: "Popeyes",
    title: "Popeyes",
    category: "Brand Creative",
    tier: 1,
    description:
      "Brand creative work for Popeyes — bringing bold flavor energy to visual identity and campaign assets that resonate with the culture.",
    tags: ["Brand Creative", "Campaign"],
  },

  {
    slug: "febreze",
    client: "Febreze",
    title: "Febreze",
    category: "Brand Activation",
    tier: 1,
    description:
      "Full experiential brand activation for Febreze at a major outdoor event. Custom booth buildout, brand ambassador program, and product sampling designed to drive authentic consumer engagement.",
    tags: ["Brand Activation", "Experiential", "P&G"],
  },

  // TIER 2 — Creative/Design Range
  {
    slug: "jase-candy-land",
    client: "Bean Locks",
    title: "Bean Locks",
    category: "Brand Identity",
    tier: 2,
    description:
      "Brand identity and logo design for Bean Locks. Athletic energy meets clean, bold visual architecture — a mark built to move.",
    tags: ["Logo Design", "Brand Identity", "Sports"],
  },
  {
    slug: "cash-junkies",
    client: "Ken's Computer Solutions",
    title: "Ken's Computer Solutions",
    category: "Brand Identity",
    tier: 2,
    description:
      "Logo and brand identity for Ken's Computer Solutions. Professional, approachable design language that builds trust on first impression.",
    tags: ["Logo Design", "Brand Identity", "Tech"],
  },
  {
    slug: "db4d",
    client: "Db4D",
    title: 'Db4D — "Death B4 Dishonor"',
    category: "3D Typography",
    tier: 2,
    description:
      "Custom 3D typography and brand design for Death B4 Dishonor. Dimensional lettering that hits with weight and intention.",
    tags: ["3D Typography", "Brand Design"],
  },
  {
    slug: "kannagruv",
    client: "KannaGruv",
    title: "KannaGruv",
    category: "Brand Identity",
    tier: 2,
    description:
      "Full brand identity for KannaGruv — a retro lifestyle brand. From logo to visual system, every element channels nostalgia with modern execution.",
    tags: ["Brand Identity", "Retro", "Lifestyle"],
  },
  // TIER 3 — Industry Range
  {
    slug: "courvoisier-herstory",
    client: "Courvoisier",
    title: "Courvoisier Presents #HerStory",
    category: "Brand Activation",
    tier: 3,
    description:
      "Video production for Courvoisier's #HerStory campaign. Premium spirits brand storytelling at the intersection of culture and celebration.",
    tags: ["Video Production", "Brand Activation", "Spirits"],
  },
  {
    slug: "skillosophy-effen-vodka",
    client: "Effen Vodka",
    title: "Skillosophy × Effen Vodka",
    category: "Brand Activation",
    tier: 3,
    description:
      "Video production for Skillosophy presented by Effen Vodka. Premium spirits brand meets cultural programming — clean execution, authentic storytelling.",
    tags: ["Video Production", "Brand Activation", "Spirits"],
  },


  {
    slug: "makers-mark-handcrafted",
    client: "Maker's Mark",
    title: "Maker's Mark — Handcrafted",
    category: "Video Production",
    tier: 3,
    description:
      "A hand-crafted video for Maker's Mark that captures the brand's heritage and artisan spirit. Intimate storytelling, premium execution — the craft in the bottle reflected in every frame.",
    tags: ["Video Production", "Brand Storytelling", "Spirits"],
  },
];

export const services = [
  {
    title: "Brand Identity",
    headline: "Your brand is your first impression. Make it count.",
    description:
      "From logo design to full visual systems — we build identities that carry weight. Strategy-driven, design-forward, built to last longer than a trend cycle.",
    example: "Cash Junkies — pen-and-ink logo with raw intention",
  },
  {
    title: "Web Design + Development",
    headline: "Sites that perform as good as they look.",
    description:
      "Modern, responsive, fast. We design and build websites that convert visitors into clients. No templates, no shortcuts — custom code, every time.",
    example: "Custom builds for brands across industries",
  },
  {
    title: "Content Creation",
    headline: "Content that earns attention, not just fills feeds.",
    description:
      "Photo, video, graphics — whatever the medium, we create content with purpose. Every asset is built to work within a larger brand strategy.",
    example: "Red Bull × Daysnatchers — multi-platform content capture",
  },
  {
    title: "AI Animation + Video",
    headline: "Next-gen visuals. Today.",
    description:
      "We use AI tools to create cinematic animations and video content that would take traditional studios weeks. Faster, bolder, more experimental.",
    example: "JASE \"Candy Land\" — 3D cinematic art + AI animation",
  },
  {
    title: "Graphic Design",
    headline: "Design that communicates, not just decorates.",
    description:
      "Marketing materials, packaging, social assets, print — every piece is crafted with the same attention whether it's a billboard or a business card.",
    example: "Smiths Law — professional design that builds trust",
  },
  {
    title: "Event Creative",
    headline: "Experiences people remember.",
    description:
      "From concept to execution — immersive brand activations, event design, and on-site creative direction. We've done it at scale for the biggest brands in the world.",
    example: "Maker's Mark × J. Cole at Brooklyn Mirage",
  },
  {
    title: "Social Media Management",
    headline: "Strategy, not just posting.",
    description:
      "We build and execute social strategies that grow audiences and drive real engagement. Content calendars, community management, and performance tracking.",
    example: "Full social strategy across brand portfolios",
  },
  {
    title: "SEO",
    headline: "Be found by the right people.",
    description:
      "Technical SEO, content strategy, and on-page optimization that drives organic growth. We build visibility that compounds over time.",
    example: "Integrated SEO across all web builds",
  },
];

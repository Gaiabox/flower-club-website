/**
 * Where the work happened. Every entry comes from the founder's own
 * account of each event, so location pages list real work only.
 */
export type LocationEvent = {
  title: string;
  detail: string;
  place?: string;
  slug?: string; // matching project in lib/portfolio, when there is one
};

export const NEW_YORK_EVENTS: LocationEvent[] = [
  { title: "Maker's Mark × J. Cole at Brooklyn Mirage", detail: "Brand activation." },
  {
    title: "Maker's Mark × CultureCon",
    detail: "Full-scale activation, immersive experience design, and content capture.",
    slug: "makers-mark-culturecon",
  },
  { title: "Courvoisier #HerStory", detail: "Video production for the campaign.", slug: "courvoisier-herstory" },
  {
    title: "Skillosophy × Effen Vodka",
    detail: "Video production for a cultural programming event.",
    slug: "skillosophy-effen-vodka",
  },
  { title: "Pusha T listening party", detail: "Venue sourcing and the bar program." },
];

export const FLORIDA_EVENTS: LocationEvent[] = [
  {
    title: "Red Bull × Daysnatchers",
    detail:
      "A collaborative activation bringing Red Bull's energy to a cultural platform, with brand integration, event design, and content that felt native, not sponsored.",
    place: "Tallahassee",
    slug: "redbull-daysnatchers",
  },
  { title: "Popeyes at HBCU Homecoming", detail: "Site location design and staffing.", place: "Tallahassee", slug: "popeyes" },
  {
    title: "Febreze outdoor event",
    detail: "A full experiential activation with a custom booth build, a brand ambassador program, and product sampling.",
    place: "Tallahassee",
    slug: "febreze",
  },
  { title: "Rémy Martin × Meta at Art Basel", detail: "An intimate Instagram dinner activation.", place: "Miami", slug: "remy-martin" },
  { title: "Bacardi golf weekend", detail: "Brand activation and content.", place: "Miami", slug: "bacardi" },
];

/** Project slug to its location page, used for the small city links on /work. */
export const PROJECT_LOCATION: Record<string, { label: string; href: string }> = Object.fromEntries([
  ...NEW_YORK_EVENTS.filter((e) => e.slug).map((e) => [e.slug!, { label: "New York", href: "/services/new-york" }]),
  ...FLORIDA_EVENTS.filter((e) => e.slug).map((e) => [e.slug!, { label: e.place ?? "Florida", href: "/services/florida" }]),
]);

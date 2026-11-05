/**
 * Guide pages: one searched question each, answered plainly and tied to
 * real Flower Club work. Approved copy. No prices, no invented results.
 */
export type ListItem = string | [lead: string, body: string];
export type GuideBlock = {
  heading: string;
  paras?: string[];
  list?: ListItem[];
  ordered?: boolean;
  table?: { head: string[]; rows: string[][] };
};
export type Guide = {
  slug: string;
  question: string;
  metaTitle: string;
  metaDescription: string;
  answer: string;
  blocks: GuideBlock[];
  proof: string;
  links: [href: string, label: string][];
};

const CONTACT: [string, string] = ["/contact", "Tell Us About Your Project"];

export const GUIDES: Guide[] = [
  {
    slug: "website-cost-small-business",
    question: "How much does a website cost for a small business?",
    metaTitle: "How Much Does a Small Business Website Cost?",
    metaDescription:
      "What actually sets the price of a small business website, how to compare quotes, and what to ask before you hire anyone.",
    answer:
      "A small business website can cost very little or a great deal. The price comes down to scope: how many pages, how much custom design and writing, what the site has to do, and who builds it. Because the same page count can mean very different work, a good builder quotes per project rather than from a price list.",
    blocks: [
      {
        heading: "What changes the price",
        list: [
          ["Custom design or a template.", "A designed-for-you site takes more work than a customized template, and gives you more control."],
          ["Pages and content.", "More pages mean more writing, photography, and review. Content is often the slowest and most underestimated part."],
          ["What the site has to do.", "A brochure site is simple. Booking, online sales, member areas, and connections to tools like a CRM add real work."],
          ["Writing, photography, and video.", "If you do not have them, someone has to make them."],
          ["Care after launch.", "Updates, hosting, and fixes are part of the cost of owning a site."],
        ],
      },
      {
        heading: "Three ways to get a site",
        ordered: true,
        list: [
          ["Do it yourself with a builder.", "Lowest outlay, most of your own time, and limited control over how it works."],
          ["A freelancer.", "Often a good fit for a focused project, with one person responsible for everything."],
          ["A studio or agency.", "Makes sense when the site is tied to your brand, your sales process, or your tools."],
        ],
      },
      {
        heading: "What to ask for in any quote",
        list: [
          "What exactly is included, page by page and feature by feature?",
          "Who writes the copy, and who supplies images?",
          "How many rounds of changes are included?",
          "Who owns the site and the code when it is finished?",
          "What does it cost to keep it running?",
        ],
      },
    ],
    proof:
      "The Fire & Ash Cigar Carts site includes a product configurator that sends a visitor's choices into HubSpot with their inquiry. Jade Lilly's website was designed and built by The Flower Club. Both show how much of a site's cost is in what it does, not how many pages it has.",
    links: [CONTACT, ["/services/web-design", "How we build websites"]],
  },
  {
    slug: "branding-cost",
    question: "How much does branding cost?",
    metaTitle: "How Much Does Branding Cost? What Sets the Price",
    metaDescription:
      "What goes into a branding project, why quotes differ so much, and how to tell what you are actually paying for.",
    answer:
      "Branding costs vary widely because \"branding\" can mean anything from a logo to a full identity system with strategy and guidelines. The price depends on how deep the work goes, how many places the brand has to appear, and how much research and refinement is involved. Ask what you will have in hand at the end, not just what it costs.",
    blocks: [
      {
        heading: "What changes the price",
        list: [
          ["Depth.", "A logo alone, a full visual identity, or strategy plus identity are three very different projects."],
          ["Research.", "Understanding your customers and competitors takes time, and it shapes every later decision."],
          ["Where the brand has to live.", "Website, packaging, signage, social, and print each need their own decisions."],
          ["Guidelines.", "A document that keeps the brand consistent after the designer leaves is part of the work."],
          ["Revisions.", "How many rounds, and how decisions get made, affects the schedule and the cost."],
        ],
      },
      {
        heading: "What you should have at the end",
        list: [
          "Logo files in every format you will need",
          "Colors and typography, with rules for using them",
          "Examples of the brand applied to real things",
          "Guidelines your team and other vendors can follow",
        ],
      },
    ],
    proof:
      "Bean Locks came to us for a logo and brand identity, built around athletic energy and a clean, bold mark. Our brand work sits alongside the websites and campaigns we build, so the identity is designed to work in practice, not just on a presentation slide.",
    links: [CONTACT, ["/services/brand-identity", "How we approach brand identity"]],
  },
  {
    slug: "how-long-to-build-a-website",
    question: "How long does it take to build a website?",
    metaTitle: "How Long Does It Take to Build a Website?",
    metaDescription: "The stages of a website project, what really slows them down, and how to keep yours moving.",
    answer:
      "How long a website takes depends on its scope and how quickly decisions and content come in. In most projects the biggest delays are waiting on content and approvals, not building. A clear scope and a single decision-maker are the best ways to keep a project on schedule.",
    blocks: [
      {
        heading: "The stages",
        ordered: true,
        list: [
          ["Discovery.", "What the site is for, who it is for, and what a visitor should do next."],
          ["Structure and content.", "Which pages exist, what each one says, and what you need to supply."],
          ["Design.", "How it looks and feels, reviewed with you."],
          ["Build.", "The site is made, connected to your tools, and tested on real devices."],
          ["Review and launch.", "Final changes, then going live."],
        ],
      },
      {
        heading: "What slows a project down",
        list: [
          "Content that is not ready",
          "Several people giving conflicting feedback",
          "Scope that grows after the build begins",
          "Late decisions about which tools the site must connect to",
        ],
      },
      {
        heading: "What speeds it up",
        list: [
          "One person with the authority to approve",
          "Writing and images ready before design begins",
          "A short, firm list of what the site must do on day one",
        ],
      },
    ],
    proof:
      "Sites that connect to other tools, such as a configurator feeding a CRM, add a planning stage up front. Deciding what information needs to move, and where it goes, early is what keeps the build itself fast.",
    links: [CONTACT],
  },
  {
    slug: "custom-website-vs-template",
    question: "Custom website vs template: which is right for you?",
    metaTitle: "Custom Website vs Template: How to Choose",
    metaDescription: "A plain comparison of custom and template websites, and the situations where each makes sense.",
    answer:
      "A template site starts from a pre-made design that you adapt. A custom site is designed and built around your brand and what you need it to do. Templates are faster to start and fine for simple needs. Custom is worth it when the site has to behave in a specific way, or when standing out is part of the point.",
    blocks: [
      {
        heading: "How they compare",
        table: {
          head: ["", "Template", "Custom"],
          rows: [
            ["Starting point", "Pre-made design", "Your brand and goals"],
            ["Control over layout and flow", "Limited to what the template allows", "Full"],
            ["Special features", "Depends on available add-ons", "Built to fit"],
            ["Speed to start", "Fast", "Slower, with more planning"],
            ["Looks like others in your field", "Often", "Rarely"],
          ],
        },
      },
      {
        heading: "A template makes sense when",
        list: [
          "You need a simple, credible presence quickly",
          "Your needs match what the template already does",
          "Your brand is still taking shape",
        ],
      },
      {
        heading: "Custom makes sense when",
        list: [
          "The site has to do something specific, like qualify leads or guide a purchase",
          "Your brand is a real part of why people choose you",
          "You want the site to fit how you work, not the other way around",
        ],
      },
    ],
    proof:
      "Fire & Ash Events replaced a standard contact form with a short guided survey that learns about an event before anyone replies. That kind of specific flow is where custom work earns its keep.",
    links: [CONTACT, ["/services/web-design", "How we build websites"]],
  },
  {
    slug: "brand-identity-vs-logo",
    question: "Brand identity vs logo: what is the difference?",
    metaTitle: "Brand Identity vs Logo: What's the Difference?",
    metaDescription: "A logo is one piece of a brand identity. Here is what the rest includes and why it matters.",
    answer:
      "A logo is a single mark that identifies your business. A brand identity is the whole visual and verbal system around it: color, typography, imagery, tone of voice, and the rules for using them together. The logo is the signature, and the identity is how everything else looks and sounds.",
    blocks: [
      {
        heading: "What a brand identity includes",
        list: [
          "Logo and its variations",
          "Color palette",
          "Typography",
          "Imagery and graphic style",
          "Tone of voice",
          "Guidelines for using all of it",
        ],
      },
      {
        heading: "Why it matters",
        paras: [
          "A logo on its own looks different every time it is placed on something new. An identity keeps your website, packaging, signage, and social posts looking like they come from the same business.",
        ],
      },
      {
        heading: "Which one do you need?",
        list: [
          ["Starting out with a tight budget:", "a strong logo and a simple palette can be enough to begin."],
          ["Growing, hiring, or selling across more places:", "an identity system saves time and keeps you consistent."],
        ],
      },
    ],
    proof: "Our brand work, such as Bean Locks and KannaGruv, starts with the mark and extends into the system that surrounds it.",
    links: [["/services/brand-identity", "How we approach brand identity"], CONTACT],
  },
  {
    slug: "how-to-choose-a-branding-agency",
    question: "How to choose a branding or web design agency",
    metaTitle: "How to Choose a Branding or Web Design Agency",
    metaDescription:
      "What to look for, what to ask, and what to watch out for when hiring a branding or web design agency.",
    answer:
      "Choose an agency by looking at finished work you can inspect, talking to the people who will actually do the work, and checking that they understand your customers. A good fit shows up in how they ask questions, not just in how polished the portfolio looks.",
    blocks: [
      {
        heading: "What to look for",
        list: [
          ["Work you can click.", "Live websites and real projects beat screenshots in a pitch deck."],
          ["Relevance.", "Not the same industry necessarily, but the same kind of problem."],
          ["Clear scope.", "They say what is included and what is not."],
          ["Who does the work.", "Know who you will be dealing with day to day."],
          ["Ownership.", "You should own your site, your files, and your brand assets."],
        ],
      },
      {
        heading: "Questions to ask",
        ordered: true,
        list: [
          "Can I see live work and talk to a past client?",
          "What do you need from me, and when?",
          "How do you handle changes after the scope is agreed?",
          "What happens after launch?",
          "Who owns what at the end?",
        ],
      },
      {
        heading: "Warning signs",
        list: [
          "A price with no description of what it covers",
          "Pressure to decide quickly",
          "No live examples, only mockups",
          "Vague answers about who will do the work",
        ],
      },
    ],
    proof: "Our websites for Fire & Ash and Jade Lilly are live, so you can judge the quality yourself.",
    links: [["/work", "See the work"], CONTACT],
  },
  {
    slug: "connect-website-form-to-hubspot",
    question: "How to connect a website form to HubSpot",
    metaTitle: "How to Connect a Website Form to HubSpot",
    metaDescription: "Three ways to send website form submissions into HubSpot, and what to check so nothing gets lost.",
    answer:
      "You can connect a website form to HubSpot in three main ways: embed a HubSpot form on the page, send submissions from your own form into HubSpot through its Forms API, or use HubSpot's tracking code to collect some existing forms. Embedding is the simplest, a custom connection gives you the most control, and tracking-code collection is the least predictable.",
    blocks: [
      {
        heading: "The three approaches",
        ordered: true,
        list: [
          ["Embed a HubSpot form.", "You build the form in HubSpot and paste its code into your page. Quickest to set up, with less control over how it looks and behaves."],
          ["Send your own form's data through the Forms API.", "Your site keeps its own design and logic, and passes the submission to HubSpot. Best when the form is part of a larger experience."],
          ["Collect from existing forms with the tracking code.", "HubSpot can pick up some non-HubSpot forms. It is the least predictable option, so test it carefully."],
        ],
      },
      {
        heading: "Before you go live, check",
        list: [
          "Every field maps to the right HubSpot property",
          "Consent and privacy wording is included where needed",
          "A test submission appears in HubSpot as expected",
          "Someone is notified, and knows what to do next",
          "You have a plan if the connection fails, so no lead is lost",
        ],
      },
    ],
    proof:
      "On Fire & Ash Cigar Carts, we built a product configurator that sends a visitor's choices into HubSpot with their inquiry. It gives the sales conversation a starting point. This is a connected website workflow, not a claim of measured time savings.",
    links: [["/services/digital-employees", "How we handle business workflows"], CONTACT],
  },
  {
    slug: "what-is-a-brand-activation",
    question: "What is a brand activation?",
    metaTitle: "What Is a Brand Activation? Examples and How It Works",
    metaDescription:
      "What a brand activation is, how brands use them, what goes into planning one, and what shapes the cost.",
    answer:
      "A brand activation is a planned experience that gets people to interact with a brand in person, not just see an ad. It might be a dinner, a pop-up, a party, a booth, or a sponsored moment at an existing event. The goal is for people to remember how the brand made them feel and to talk about it afterward.",
    blocks: [
      {
        heading: "What goes into one",
        list: [
          ["An idea tied to the audience.", "It has to feel native to where it happens, not sponsored."],
          ["The place and the moment.", "Venue, date, and the crowd already there."],
          ["Production.", "Build, staffing, content capture, and everything that has to run on the day."],
          ["Content afterward.", "Photo and video that carry the event to people who were not there."],
        ],
      },
      {
        heading: "What shapes the cost",
        paras: [
          "Scale and guest count, the venue, the build, the number of staff, travel, and how much content you want captured. Costs are set per project.",
        ],
      },
      {
        heading: "Examples of our work",
        list: [
          ["Maker's Mark × J. Cole, Brooklyn Mirage (New York).", "Brand activation."],
          ["Maker's Mark × CultureCon (New York).", "Activation, experience design, and content capture."],
          ["Pusha T listening party (New York).", "Venue sourcing and the bar program."],
          ["Courvoisier #HerStory and Skillosophy × Effen Vodka (New York).", "Video production."],
          ["Rémy Martin × Meta at Art Basel (Miami).", "An intimate Instagram dinner."],
          ["Bacardi golf weekend (Miami).", "Brand activation and content."],
          ["Red Bull × Daysnatchers (Tallahassee).", "A collaborative activation."],
          ["Popeyes at HBCU Homecoming (Tallahassee).", "Site location design and staffing."],
          ["Febreze outdoor event (Tallahassee).", "A full experiential activation with a custom booth and sampling."],
        ],
      },
    ],
    proof: "See our activation work by city in New York and Florida.",
    links: [["/services/new-york", "Work in New York"], ["/services/florida", "Work in Florida"], ["/work", "See the work"], CONTACT],
  },
];

export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug);

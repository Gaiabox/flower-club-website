"use client";

import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FlowerWatermark from "@/components/FlowerWatermark";
import Marquee from "@/components/Marquee";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "Corporate",
    title: "Fortune 500 Foundation",
    description:
      "US Commercial Marketing & Sales Manager at Maker's Mark (Beam Suntory). Brand marketing, consumer engagement, and market positioning at the highest level, Maker's Mark, Courvoisier, Effen.",
  },
  {
    year: "Culture",
    title: "Building the Body of Work",
    description:
      "Executed activations with J. Cole, at CultureCon, with Buzzfeed. Built relationships and reputation across artists, brands, and cultural platforms. The range started here.",
  },
  {
    year: "Agency",
    title: "The Flower Club",
    description:
      "Took everything learned at the Fortune 500 level and built an agency that brings that same craft to artists, companies, and culture brands that deserve it. Independent. Culture-forward. Results-driven.",
  },
  {
    year: "Now",
    title: "Brand × AI Systems",
    description:
      "The next chapter: paid AI audits that find where owner-run businesses bleed money, systems and digital employees that fix it, and a concierge seat, the Club, for owners who want an AI advisor on call. Look like the market leader. Run like one.",
  },
];

const values = [
  {
    title: "Discover.",
    description:
      "Before recommending anything, we take the time to understand your goals, current challenges, and what success actually looks like for you.",
  },
  {
    title: "Build the plan.",
    description:
      "We identify the highest-impact opportunities first so your time and budget are spent where they'll create the most value.",
  },
  {
    title: "Build mode.",
    description:
      "Once we lock in plan, we design and develop the tools needed to move your business forward.",
  },
  {
    title: "Launch and grow.",
    description:
      "Built on years of corporate America and creative execution, not on pitch decks and promises. The work speaks.",
  },
];

export default function AboutPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-header", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".about-blurb", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5,
      });

      gsap.from(".milestone", {
        opacity: 0,
        x: -30,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".milestones",
          start: "top 80%",
        },
      });

      gsap.from(".value-card", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".values-grid",
          start: "top 80%",
        },
      });

      // Timeline line draws itself in as you scroll
      gsap.from(".timeline-line", {
        scaleY: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".milestones",
          start: "top 75%",
          end: "bottom 60%",
          scrub: 0.8,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-navy-dark pt-32 pb-24 md:pb-32 relative overflow-hidden grain-overlay">
        <FlowerWatermark className="w-[560px] md:w-[760px] -right-32 md:-right-44 -top-32 text-cream opacity-[0.05]" />
        <div className="section-padding max-w-5xl mx-auto relative z-10">
          <div className="about-header mb-12">
            <p className="label-light mb-4">About</p>
            <h1 className="text-display-xl text-cream font-bold">
              Built on Real
              <br />
              Experience.
            </h1>
          </div>

          <div className="about-blurb max-w-3xl">
            <p className="text-cream/80 text-xl md:text-2xl leading-relaxed">
              The Flower Club is a brand and AI systems firm built on real
              experience. Before the agency, our founder spent years building
              some of the biggest spirits brands in the country, Maker&apos;s Mark,
              Courvoisier, Effen, executing activations with J. Cole, at
              CultureCon, with Buzzfeed.
            </p>
            <p className="text-cream/60 text-lg md:text-xl leading-relaxed mt-6">
              Now we bring Fortune 500 brand craft and AI-forward operations to
              owners who built something real. Med spas, law firms,
              manufacturers, practices, and the artists and culture brands
              we&apos;ve always served. If you built it and you want it to grow,
              you&apos;re who this is for.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-cream py-24 md:py-32">
        <div className="section-padding max-w-5xl mx-auto">
          <p className="label mb-12">The Journey</p>

          <div className="milestones relative space-y-0">
            {/* Red line that draws itself in on scroll */}
            <div className="timeline-line absolute left-[-1px] top-1 bottom-0 w-[2px] bg-red origin-top" />
            {milestones.map((milestone, i) => (
              <div
                key={milestone.year}
                className="milestone relative pl-12 md:pl-20 pb-16 last:pb-0 border-l-2 border-navy/10 last:border-transparent"
              >
                {/* Ghost number */}
                <span
                  className="pointer-events-none select-none absolute right-0 top-0 font-bold text-navy/[0.06] leading-none"
                  style={{ fontSize: "clamp(5rem, 12vw, 9rem)" }}
                  aria-hidden="true"
                >
                  0{i + 1}
                </span>

                {/* Dot */}
                <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 bg-red rounded-full" />

                {/* Year label */}
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-red font-medium">
                  {milestone.year}
                </span>

                <h3 className="text-display-sm text-navy font-bold mt-2 mb-3">
                  {milestone.title}
                </h3>
                <p className="text-navy/60 leading-relaxed max-w-xl">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee items={["Strategy", "Craft", "Culture", "Results"]} />

      {/* Founder */}
      <section className="bg-navy-dark py-20 md:py-28 relative overflow-hidden">
        <div className="section-padding max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-10">
            {/* Avatar — swap for a photo at /assets/images/founder.jpg when ready */}
            <div className="flex-shrink-0 w-28 h-28 md:w-36 md:h-36 rounded-full bg-navy border-2 border-[#F4A300] flex items-center justify-center">
              <span className="text-cream font-bold text-4xl md:text-5xl tracking-tight">JH</span>
            </div>
            <div>
              <p className="label-light mb-3">The Founder</p>
              <h2 className="text-display-sm text-cream font-bold mb-4">
                James Highsmith
              </h2>
              <p className="text-cream/70 text-lg leading-relaxed max-w-2xl mb-4">
                Former US Commercial Marketing &amp; Sales Manager at Maker&apos;s
                Mark (Beam Suntory). Built campaigns and activations for some of
                the biggest brands in the country, then built The Flower Club to
                bring that level of craft to owners who don&apos;t have a Fortune
                500 budget, just Fortune 500 ambition.
              </p>
              <p className="text-cream/50 leading-relaxed max-w-2xl">
                Every audit and every build gets his eyes on it. When you book,
                you&apos;re not handed to an account manager.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy py-24 md:py-32 relative overflow-hidden">
        <FlowerWatermark className="w-[520px] md:w-[700px] -left-36 md:-left-48 -bottom-36 text-cream opacity-[0.04]" />
        <div className="section-padding max-w-6xl mx-auto relative z-10">
          <p className="label-light mb-4">Philosophy</p>
          <h2 className="text-display-md text-cream font-bold mb-16">
            How We Work.
          </h2>

          <div className="values-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="value-card p-8 border border-cream/10 rounded-sm hover:border-red/30 transition-colors duration-500"
              >
                <h3 className="text-cream font-bold text-xl mb-3">
                  {value.title}
                </h3>
                <p className="text-cream/60 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-24 md:py-32">
        <div className="section-padding max-w-3xl mx-auto text-center">
          <h2 className="text-display-md text-navy font-bold mb-6">
            Ready to build something?
          </h2>
          <p className="text-navy/60 text-lg mb-10">
            We work with brands that take their creative seriously.
          </p>
          <Link href="/services/audit" className="btn-primary !bg-navy hover:!bg-navy-dark">
            Book the Audit
          </Link>
        </div>
      </section>
    </div>
  );
}

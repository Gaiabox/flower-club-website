"use client";

import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "Corporate",
    title: "Fortune 500 Foundation",
    description:
      "US Commercial Marketing & Sales Manager at Maker's Mark (Beam Suntory). Brand marketing, consumer engagement, and market positioning at the highest level — Maker's Mark, Courvoisier, Effen.",
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
];

const values = [
  {
    title: "We don't decorate. We build.",
    description:
      "Every project gets the same level of strategic thinking and execution — whether it's a Fortune 500 brand or an independent artist.",
  },
  {
    title: "Range is the proof.",
    description:
      "Album art to law firm branding. Event activations to AI animation. We don't specialize in one thing — we specialize in doing every thing at a high level.",
  },
  {
    title: "Culture is not a buzzword.",
    description:
      "We don't slap 'culture' on a pitch deck. We come from it, we create within it, and we know when something is authentic versus manufactured.",
  },
  {
    title: "Real experience. Real results.",
    description:
      "Built on years of corporate America and creative execution — not on pitch decks and promises. The work speaks.",
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
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-navy-dark pt-32 pb-24 md:pb-32">
        <div className="section-padding max-w-5xl mx-auto">
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
              The Flower Club is a full-service creative agency built on real
              experience. Before the agency, our founder spent years building
              some of the biggest spirits brands in the country — Maker&apos;s Mark,
              Courvoisier, Effen — executing activations with J. Cole, at
              CultureCon, with Buzzfeed.
            </p>
            <p className="text-cream/60 text-lg md:text-xl leading-relaxed mt-6">
              Now we bring that same level of craft to artists, companies, and
              culture brands that deserve it.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-cream py-24 md:py-32">
        <div className="section-padding max-w-5xl mx-auto">
          <p className="label mb-12">The Journey</p>

          <div className="milestones space-y-0">
            {milestones.map((milestone) => (
              <div
                key={milestone.year}
                className="milestone relative pl-12 md:pl-20 pb-16 last:pb-0 border-l-2 border-navy/10 last:border-transparent"
              >
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

      {/* Values */}
      <section className="bg-navy py-24 md:py-32">
        <div className="section-padding max-w-6xl mx-auto">
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
          <Link href="/contact" className="btn-primary !bg-navy hover:!bg-navy-dark">
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
}

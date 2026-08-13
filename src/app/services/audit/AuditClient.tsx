"use client";

import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlueprintDecor from "@/components/BlueprintDecor";
import { BOOKING_URL } from "@/lib/site";
import { auditFaq } from "./faq";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    n: "01",
    title: "Define outcomes",
    body: "“We want AI” is a wish, not an outcome. We pin down current state, target state, and a measurable delta, every outcome ends with “worth $X per year.”",
  },
  {
    n: "02",
    title: "Map the business",
    body: "Executives know the destination; operators know the road. We interview the people doing the work, “walk me through yesterday morning”, not just the owner.",
  },
  {
    n: "03",
    title: "Map the tasks",
    body: "“Follow up with leads” sounds like one task. It's usually seven. AI opportunities live in the details, so we break work down until it can't be broken further.",
  },
  {
    n: "04",
    title: "Find the AI fits",
    body: "Four questions per task: structured input? predictable output? rule-based decisions? repeated often? Yes to all four, prime candidate. AI takes the predictable 80%, humans keep the judgment.",
  },
  {
    n: "05",
    title: "Prioritize",
    body: "Business value vs. implementation difficulty. Quick wins first, the one that pays for the engagement, then the big swings once the wins prove the model.",
  },
  {
    n: "06",
    title: "Price the ROI",
    body: "Time wasted × people × days per year × loaded hourly cost = annual waste. That number is what makes the decision easy, for you, not for us.",
  },
];

const verticals = [
  {
    name: "Med Spas",
    bleeds: [
      "Inquiries answered hours later, booked elsewhere",
      "No-shows without automated confirmation flows",
      "Front desk buried in rescheduling and intake forms",
    ],
  },
  {
    name: "Law Firms",
    bleeds: [
      "Consult requests that wait a day get a different lawyer",
      "Intake and conflict checks eating billable hours",
      "Document prep and status updates done by hand",
    ],
  },
  {
    name: "Manufacturers",
    bleeds: [
      "Quote turnaround measured in days, not minutes",
      "Order status calls interrupting the floor",
      "Reporting stitched together in spreadsheets monthly",
    ],
  },
  {
    name: "Dental & Medical",
    bleeds: [
      "Unfilled chair time from slow recall follow-up",
      "After-hours calls going to voicemail, then to a competitor",
      "Insurance verification done one phone call at a time",
    ],
  },
];

const deliverables = [
  "A map of how your business actually runs, not how the org chart says it runs",
  "~20 scored opportunities, each priced in dollars per year",
  "A prioritized roadmap: quick wins first, big swings second",
  "The one quick win that pays for the audit before lunch",
  "No tools pitched. No jargon. A document you could hand to any builder, including us",
];

export default function AuditClient() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".audit-hero", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });
      gsap.from(".audit-step", {
        opacity: 0,
        y: 30,
        duration: 0.65,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ".audit-steps", start: "top 82%" },
      });
      gsap.from(".audit-vertical", {
        opacity: 0,
        y: 30,
        duration: 0.65,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ".audit-verticals", start: "top 82%" },
      });
      gsap.from(".audit-cta", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".audit-cta", start: "top 85%" },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="blueprint-bg relative min-h-screen pt-32 pb-24 overflow-x-hidden">
      <BlueprintDecor />
      <div className="relative z-10 section-padding max-w-6xl mx-auto">

        {/* Hero */}
        <section className="audit-hero max-w-4xl mb-20 md:mb-24">
          <p className="label mb-4">The Audit, AI Consulting</p>
          <h1 className="text-display-xl text-navy font-bold mb-6">
            Find out where your business bleeds money.
          </h1>
          <p className="text-navy/65 text-xl max-w-3xl leading-relaxed mb-6">
            A paid diagnosis for owner-run businesses of every kind, from med
            spas, law firms, manufacturers, and practices to artists and
            brands. We map how the work actually happens,
            find where time and revenue leak, and hand you a roadmap where
            every fix is priced in dollars per year.
          </p>
          <p className="text-navy font-semibold text-lg mb-8">
            From $2,500, scoped by complexity and task count. Two to three weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary !bg-navy hover:!bg-navy-dark">
              Book the Audit
            </Link>
            <Link
              href={BOOKING_URL}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-navy/40 text-navy font-semibold text-sm uppercase tracking-wider hover:bg-navy hover:text-cream transition-all duration-300 rounded-sm"
            >
              Book a 15-Min Scoping Call
            </Link>
          </div>
          <p className="text-navy/50 text-sm mt-6 max-w-2xl leading-relaxed">
            <strong className="text-navy">Our guarantee:</strong> if the audit
            doesn&apos;t surface more recoverable annual value than you paid for
            it, we keep digging at no charge until it does.
          </p>
        </section>

        {/* Why diagnose first */}
        <section className="mb-20 md:mb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="label mb-4">Why start here</p>
            <h2 className="text-display-sm text-navy font-bold">
              Most AI failures are problem-selection failures.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-navy/65 text-lg leading-relaxed mb-5">
              Buying tools before diagnosing is how businesses end up with
              abandoned software and no ROI to point to. The audit de-risks
              both sides: you get a valuable deliverable either way, and
              whatever gets built next is what the business actually needs.
            </p>
            <p className="text-navy/55 leading-relaxed">
              Executives don&apos;t buy AI, they buy outcomes. A team wasting 2
              hours a day across 8 people at $40/hour loaded cost is bleeding
              <strong className="text-navy"> $166,400 a year</strong>. Numbers
              like that make the next decision obvious.
            </p>
          </div>
        </section>

        {/* The 6 steps */}
        <section className="mb-20 md:mb-24">
          <p className="label mb-4">The method</p>
          <h2 className="text-display-sm text-navy font-bold mb-10">
            Six steps. None of them involve picking a tool.
          </h2>
          <div className="audit-steps grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((s) => (
              <div key={s.n} className="audit-step border border-navy/10 rounded-sm bg-white/50 p-6">
                <p className="font-mono text-red text-sm mb-3">{s.n}</p>
                <h3 className="text-navy font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Verticals */}
        <section className="audit-verticals mb-20 md:mb-24">
          <p className="label mb-4">Who it&apos;s for</p>
          <h2 className="text-display-sm text-navy font-bold mb-4">
            Built for owners who built something real.
          </h2>
          <p className="text-navy/60 max-w-2xl mb-10">
            Every industry bleeds differently. These are the patterns we see
            most, if yours isn&apos;t listed, the method still applies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {verticals.map((v) => (
              <div key={v.name} className="audit-vertical bg-navy rounded-sm p-7">
                <h3 className="text-cream font-bold text-xl mb-4">{v.name}</h3>
                <ul className="space-y-2.5">
                  {v.bleeds.map((b) => (
                    <li key={b} className="text-cream/70 text-sm leading-relaxed flex gap-2.5">
                      <span className="text-red mt-0.5">✦</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Deliverables */}
        <section className="mb-20 md:mb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="label mb-4">What you walk away with</p>
            <h2 className="text-display-sm text-navy font-bold">
              A deliverable that wins either way.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-4">
              {deliverables.map((d) => (
                <li key={d} className="border-t border-navy/15 pt-4 text-navy text-lg leading-relaxed">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20 md:mb-24 max-w-4xl">
          <p className="label mb-4">Questions owners ask</p>
          <h2 className="text-display-sm text-navy font-bold mb-8">
            Before you book.
          </h2>
          <div>
            {auditFaq.map((f) => (
              <div key={f.q} className="border-t border-navy/15 py-6">
                <h3 className="text-navy font-bold text-lg mb-2">{f.q}</h3>
                <p className="text-navy/60 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="audit-cta bg-navy rounded-sm p-10 md:p-14 text-center max-w-4xl mx-auto">
          <p className="label-light mb-4">From $2,500 · scoped by complexity</p>
          <h2 className="text-display-sm text-cream font-bold mb-4">
            Two weeks from now, you&apos;ll know the number.
          </h2>
          <p className="text-cream/65 max-w-2xl mx-auto mb-8 leading-relaxed">
            Tell us about the business. We&apos;ll scope the audit on a short
            call, complexity and task count set the price, and you&apos;ll know
            it before we start.
          </p>
          <Link href="/contact" className="btn-primary">
            Book the Audit
          </Link>
        </section>
      </div>
    </div>
  );
}

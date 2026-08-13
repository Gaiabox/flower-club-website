import type { Metadata } from "next";
import Link from "next/link";
import CityAudit from "@/components/CityAudit";

export const metadata: Metadata = {
  title: "AI Automation & Branding Agency Nashville TN | The Flower Club",
  description:
    "AI audits, digital employees, and brand design for Nashville businesses: healthcare practices, manufacturers, music companies, and owner-run brands. Audits from $2,500, built by an agency with real music-industry credits.",
};

const bleeds = [
  {
    title: "Healthcare's front desk",
    body: "Nashville is a healthcare capital, and practice front desks are drowning: intake forms, insurance verification, recall follow-up. AI employees clear the repetitive 80% so staff handle the human 20%.",
  },
  {
    title: "The plant's paperwork",
    body: "Middle Tennessee manufacturing is booming, and quotes still take days while order-status calls interrupt the floor. We automate the paper trail so the shop ships.",
  },
  {
    title: "Music-business ops",
    body: "We've produced activations with J. Cole and thrown listening parties for Pusha T. We know how music money moves, and how much of it leaks through manual fan, merch, and booking workflows.",
  },
];

export default function NashvillePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#FAF7F2]">
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <p className="font-mono text-xs tracking-[0.2em] text-[#C0392B] uppercase mb-6">
          Nashville, TN
        </p>
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-8 max-w-3xl">
          Music City runs on hustle. Automate the part that isn&apos;t.
        </h1>
        <p className="text-[#FAF7F2]/60 text-xl leading-relaxed max-w-2xl mb-10">
          Healthcare practices, manufacturers, music companies, owner-run
          brands: Nashville is full of businesses growing faster than their
          back office. The Flower Club is an{" "}
          <strong className="text-[#FAF7F2]/90">
            AI automation and branding agency
          </strong>{" "}
          with real music-industry credits and Fortune 500 brand craft.
        </p>
        <Link
          href="/services/audit"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#C0392B] text-[#FAF7F2] font-semibold text-sm uppercase tracking-wider hover:bg-[#D94435] transition-all duration-300 rounded-sm"
        >
          Book the Audit
        </Link>
      </section>

      <CityAudit city="Nashville" industries="healthcare practices, manufacturers, and music businesses" />

      {/* Bleed patterns */}
      <section className="py-16 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Where Nashville businesses bleed money.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bleeds.map((b) => (
            <div key={b.title} className="border border-[#FAF7F2]/10 rounded-sm p-7 bg-[#FAF7F2]/[0.03]">
              <h3 className="font-bold text-xl mb-3">{b.title}</h3>
              <p className="text-[#FAF7F2]/60 leading-relaxed text-sm">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Two weeks from now, you&apos;ll know the number.
        </h2>
        <p className="text-[#FAF7F2]/60 text-lg mb-10 max-w-xl mx-auto">
          The audit maps your operation, prices every leak in dollars per year,
          and hands you the roadmap. From $2,500, scoped by complexity.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#C0392B] text-[#FAF7F2] font-semibold text-sm uppercase tracking-wider hover:bg-[#D94435] transition-all duration-300 rounded-sm"
        >
          Start the Conversation
        </Link>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import CityAudit from "@/components/CityAudit";

export const metadata: Metadata = {
  title: "AI Automation & Branding Agency Phoenix-Scottsdale AZ | The Flower Club",
  description:
    "AI audits, digital employees, and brand design for Phoenix and Scottsdale businesses. Built for the med spa capital of America: faster lead response, automated booking, brands that stand out. Audits from $2,500.",
};

const bleeds = [
  {
    title: "The 4-hour inquiry",
    body: "Scottsdale has more med spas per capita than anywhere in the country. When five competitors sit on the same road, the consult goes to whoever answers first. Hours-later replies are donations to the spa next door.",
  },
  {
    title: "The empty treatment room",
    body: "No-shows and slow recall follow-up leave injector hours unfilled. An AI employee that confirms, reminds, and rebooks runs your calendar like it's protecting revenue, because it is.",
  },
  {
    title: "The template brand",
    body: "In the most saturated aesthetics market in America, looking like every other spa is an operational problem. We build brands with Fortune 500 craft: Maker's Mark, Bacardi, Red Bull level work, pointed at your market.",
  },
];

export default function PhoenixScottsdalePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#FAF7F2]">
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <p className="font-mono text-xs tracking-[0.2em] text-[#C0392B] uppercase mb-6">
          Phoenix / Scottsdale, AZ
        </p>
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-8 max-w-3xl">
          The med spa capital deserves better operations.
        </h1>
        <p className="text-[#FAF7F2]/60 text-xl leading-relaxed max-w-2xl mb-10">
          Phoenix and Scottsdale run on appointment businesses: med spas,
          aesthetics practices, dental, concierge health. The Flower Club is an{" "}
          <strong className="text-[#FAF7F2]/90">
            AI automation and branding agency
          </strong>{" "}
          that makes those businesses respond in seconds and look like the
          market leader while doing it.
        </p>
        <Link
          href="/services/audit"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#C0392B] text-[#FAF7F2] font-semibold text-sm uppercase tracking-wider hover:bg-[#D94435] transition-all duration-300 rounded-sm"
        >
          Book the Audit
        </Link>
      </section>

      <CityAudit city="Phoenix-Scottsdale" industries="med spas, aesthetics practices, dental, and concierge health" />

      {/* Bleed patterns */}
      <section className="py-16 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Where Valley businesses bleed money.
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

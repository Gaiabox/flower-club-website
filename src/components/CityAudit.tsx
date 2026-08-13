import Link from "next/link";

/**
 * CityAudit — the AI audit pitch, localized. Dropped into every city
 * page right after the hero so the money service leads everywhere.
 */
export default function CityAudit({
  city,
  industries,
}: {
  city: string;
  industries: string;
}) {
  return (
    <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
      <div className="bg-[#1B2A4A] rounded-sm p-8 md:p-12">
        <p className="font-mono text-xs tracking-[0.2em] text-[#F4A300] uppercase mb-4">
          New: The AI Audit, from $2,500
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#FAF7F2] mb-4 leading-tight">
          Find out where your {city} business bleeds money.
        </h2>
        <p className="text-[#FAF7F2]/65 text-lg leading-relaxed max-w-2xl mb-6">
          A paid diagnosis for {industries}, and any owner-run business. We map
          how the work actually happens, find where time and revenue leak, and
          deliver a roadmap where every fix is priced in dollars per year. Then
          we build the fixes: AI employees for lead follow-up, intake,
          scheduling, and after-hours coverage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/services/audit"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C0392B] text-[#FAF7F2] font-semibold text-sm uppercase tracking-wider hover:bg-[#D94435] transition-all duration-300 rounded-sm"
          >
            Book the Audit
          </Link>
          <Link
            href="/services/digital-employees"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#FAF7F2]/30 text-[#FAF7F2] font-semibold text-sm uppercase tracking-wider hover:bg-[#FAF7F2]/10 transition-all duration-300 rounded-sm"
          >
            Meet the AI Employees
          </Link>
        </div>
      </div>
    </section>
  );
}

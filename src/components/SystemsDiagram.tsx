const inputs = ["Website & configurator", "Affiliate signup", "Customer inquiries"];
const outputs = ["Follow-up & reminders", "Agreements & approvals", "Dashboards & reporting"];
export default function SystemsDiagram() {
  return (
    <figure className="border border-navy/20 bg-[#f8f6ef] p-5 lg:p-7 text-navy overflow-hidden">
      <figcaption className="flex justify-between items-center border-b border-navy/20 pb-4 mb-7">
        <span className="font-semibold text-lg">Behind the experience</span>
        <span className="font-mono text-[10px] tracking-widest uppercase text-navy/85">System map</span>
      </figcaption>
      <div className="grid grid-cols-3 gap-2">
        {inputs.map((label) => <div key={label} className="border border-navy/20 bg-white/70 px-2 py-4 text-center text-xs sm:text-sm font-medium">{label}</div>)}
      </div>
      <svg aria-hidden="true" viewBox="0 0 300 42" className="w-full h-10" preserveAspectRatio="none">
        <path d="M50 0V20H250V0M150 0V42" fill="none" stroke="#1c2c4b" strokeOpacity=".4" />
        <circle cx="150" cy="20" r="3" fill="#bf3829" />
      </svg>
      <div className="bg-navy text-cream px-5 py-6 text-center relative">
        <p className="text-[10px] uppercase tracking-[.2em] text-cream/85 mb-2">One connected foundation</p>
        <p className="text-xl font-semibold">CRM + custom database</p>
        <p className="text-sm text-cream/85 mt-2">Contacts · project data · referral records</p>
        <div className="border-t border-cream/20 mt-4 pt-3 text-xs text-cream/80">Automation rules + human review</div>
      </div>
      <svg aria-hidden="true" viewBox="0 0 300 42" className="w-full h-10" preserveAspectRatio="none">
        <path d="M150 0V42M50 42V20H250V42" fill="none" stroke="#1c2c4b" strokeOpacity=".4" />
        <circle cx="150" cy="20" r="3" fill="#bf3829" />
      </svg>
      <div className="grid grid-cols-3 gap-2">
        {outputs.map((label) => <div key={label} className="border-t-2 border-red bg-navy/[.04] px-2 py-4 text-center text-xs sm:text-sm font-medium">{label}</div>)}
      </div>
      <p className="text-xs text-navy/85 mt-6 leading-relaxed">Example architecture. Each system is designed around your tools, data, and approval process.</p>
    </figure>
  );
}

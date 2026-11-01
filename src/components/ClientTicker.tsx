const clients = ["Bacardi", "Red Bull", "P&G", "Popeyes", "Maker's Mark", "Courvoisier", "Liquid Death", "OFFSET", "J. Cole"];
export default function ClientTicker() {
  return (
    <section aria-label="Featured brand and artist work" className="client-bar bg-navy-dark border-y border-cream/10 py-4 overflow-hidden">
      <div className="client-ticker flex whitespace-nowrap w-max">
        {[0, 1, 2].map((copy) => (
          <div key={copy} aria-hidden={copy > 0 ? true : undefined} className="flex gap-12 pr-12">
            {clients.map((client) => (
              <span key={client} className="flex items-center gap-12">
                <span className="font-bold text-cream/30 text-xs uppercase tracking-[0.25em] hover:text-cream/70 transition-colors duration-300 cursor-default">{client}</span>
                <span aria-hidden="true" className="text-red/40 text-[8px]">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

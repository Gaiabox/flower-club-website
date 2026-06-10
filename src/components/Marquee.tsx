/**
 * Marquee — full-width band of oversized text gliding sideways.
 * Words alternate solid / outlined; separators in red.
 * Pure CSS animation (reuses the existing `marquee` keyframes).
 */

export default function Marquee({
  items,
  dark = true,
}: {
  items: string[];
  dark?: boolean;
}) {
  const textColor = dark ? "text-cream" : "text-navy";
  return (
    <section
      className={`${dark ? "bg-navy-dark border-cream/10" : "bg-cream border-navy/10"} border-y py-8 md:py-10`}
      style={{ overflowX: "clip" }}
      aria-hidden="true"
    >
      <div
        className="flex items-center gap-8 md:gap-12 whitespace-nowrap"
        style={{ animation: "marquee 30s linear infinite", width: "max-content" }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-8 md:gap-12">
            <span
              className={`${textColor} ${i % 2 === 1 ? "text-outline" : ""} font-bold uppercase tracking-tight leading-none`}
              style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}
            >
              {item}
            </span>
            <span className="text-red text-xl md:text-2xl">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

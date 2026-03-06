"use client";

// Flower mark for THE FL[O]WER CLUB
// Bold, graphic, badge-weight. Not decorative — iconic.
// Thick stroke, chunky petals, strong center ring. Hebru Brantley energy: street art made premium.
export default function FlowerLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-0 font-bold tracking-tight ${className}`}>
      <span>THE FL</span>
      <span className="inline-flex items-center" style={{ lineHeight: 0 }}>
        <svg
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{
            width: "0.85em",
            height: "0.85em",
            display: "inline-block",
            verticalAlign: "middle",
            marginBottom: "0.07em",
          }}
        >
          {/* 8 chunky petals — bold, slightly squared-off, radiating strong */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <ellipse
              key={angle}
              cx="18"
              cy="9"
              rx="4.5"
              ry="7.5"
              fill="#FFD700"
              stroke="#1B2A4A"
              strokeWidth="2"
              strokeLinejoin="round"
              transform={`rotate(${angle} 18 18)`}
            />
          ))}
          {/* Bold outer ring — gives it badge/crest energy */}
          <circle cx="18" cy="18" r="8.5" fill="#F4A300" stroke="#1B2A4A" strokeWidth="2.2" />
          {/* Inner circle — creates depth */}
          <circle cx="18" cy="18" r="4.5" fill="#1B2A4A" />
          {/* Three bold dots in center — the signature detail */}
          <circle cx="16.2" cy="17.2" r="1.1" fill="#FFD700" />
          <circle cx="19.8" cy="17.2" r="1.1" fill="#FFD700" />
          <circle cx="18" cy="20.2" r="1.1" fill="#FFD700" />
        </svg>
      </span>
      <span>WER CLUB</span>
    </span>
  );
}

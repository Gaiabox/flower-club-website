"use client";

/**
 * SketchDecor — hand-drawn pencil overlays for the Services page.
 * All elements are aria-hidden, pointer-events-none, absolutely positioned.
 * Strokes use warm graphite tones at low opacity to feel like a working sketchbook.
 */
export default function SketchDecor() {
  const s = { stroke: "#4a3a28", fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true" style={{ zIndex: 2 }}>

      {/* ══════════════════════════════════════════
          TOP — Rough Flower Club logo study + "branding starts here" note
      ══════════════════════════════════════════ */}
      <svg style={{ position:"absolute", top:"6%", right:"5%" }} width="180" height="180" viewBox="0 0 180 180">
        {/* rough circle for logo containment */}
        <ellipse cx="90" cy="90" rx="62" ry="63" {...s} strokeWidth="1" opacity="0.14" strokeDasharray="3 4"/>
        {/* 8 petal flower rough sketch */}
        {[0,45,90,135,180,225,270,315].map((deg,i) => {
          const rad = (deg * Math.PI) / 180;
          const cx = 90 + Math.cos(rad)*30, cy = 90 + Math.sin(rad)*30;
          return <ellipse key={i} cx={cx} cy={cy} rx="13" ry="8"
            transform={`rotate(${deg},${cx},${cy})`}
            {...s} strokeWidth="1.1" opacity="0.18"/>;
        })}
        {/* center circle */}
        <circle cx="90" cy="90" r="10" {...s} strokeWidth="1.2" opacity="0.18"/>
        {/* annotation arrow */}
        <path d="M148 52 Q158 44 164 38" {...s} strokeWidth="1" opacity="0.2"/>
        <path d="M162 34 L164 38 L160 39" {...s} strokeWidth="1" opacity="0.2"/>
        <text x="148" y="30" fontFamily="'Caveat', cursive, sans-serif" fontSize="10" fill="#4a3a28" opacity="0.28" transform="rotate(-6,148,30)">logo mark?</text>
      </svg>

      {/* "The range is the proof" — scrawled note top-left margin */}
      <svg style={{ position:"absolute", top:"8%", left:"2%" }} width="120" height="60" viewBox="0 0 120 60">
        <text x="8" y="18" fontFamily="'Caveat', cursive, sans-serif" fontSize="11" fill="#4a3a28" opacity="0.22" transform="rotate(-4,8,18)">range =</text>
        <text x="6" y="32" fontFamily="'Caveat', cursive, sans-serif" fontSize="11" fill="#4a3a28" opacity="0.22" transform="rotate(-4,6,32)">proof</text>
        {/* underline squiggle */}
        <path d="M6 36 Q30 39 58 36" {...s} strokeWidth="1" opacity="0.18"/>
      </svg>

      {/* ══════════════════════════════════════════
          BRAND IDENTITY — logo mark studies, color swatches
      ══════════════════════════════════════════ */}
      <svg style={{ position:"absolute", top:"18%", right:"3%" }} width="160" height="130" viewBox="0 0 160 130">
        {/* rough hexagon — logo prototype */}
        <path d="M80 10 L118 32 L118 78 L80 100 L42 78 L42 32 Z" {...s} strokeWidth="1.2" opacity="0.16"/>
        {/* inner mark */}
        <path d="M80 30 L100 55 L80 80 L60 55 Z" {...s} strokeWidth="1" opacity="0.14"/>
        {/* "MARK" label */}
        <text x="64" y="118" fontFamily="'Caveat', cursive, sans-serif" fontSize="10" fill="#4a3a28" opacity="0.24">identity mark</text>
        {/* rough tick — approved */}
        <path d="M138 16 L144 24 L154 10" {...s} strokeWidth="1.8" opacity="0.22"/>
        {/* color swatch row */}
        <rect x="14" y="108" width="12" height="12" rx="1" stroke="#4a3a28" fill="none" strokeWidth="1" opacity="0.2"/>
        <rect x="30" y="108" width="12" height="12" rx="1" stroke="#4a3a28" fill="none" strokeWidth="1" opacity="0.2"/>
        <rect x="46" y="108" width="12" height="12" rx="1" stroke="#4a3a28" fill="none" strokeWidth="1" opacity="0.2"/>
        <text x="14" y="104" fontFamily="'Caveat', cursive, sans-serif" fontSize="9" fill="#4a3a28" opacity="0.22">palette →</text>
      </svg>

      {/* ══════════════════════════════════════════
          WEB DESIGN — rough wireframe layout sketch
      ══════════════════════════════════════════ */}
      <svg style={{ position:"absolute", top:"30%", left:"1.5%" }} width="140" height="120" viewBox="0 0 140 120">
        {/* browser chrome */}
        <rect x="8" y="8" width="124" height="104" rx="3" {...s} strokeWidth="1.1" opacity="0.18"/>
        {/* nav bar */}
        <rect x="8" y="8" width="124" height="18" rx="3" {...s} strokeWidth="1" opacity="0.16"/>
        <circle cx="18" cy="17" r="3" {...s} strokeWidth="1" opacity="0.18"/>
        <circle cx="28" cy="17" r="3" {...s} strokeWidth="1" opacity="0.18"/>
        {/* hero block */}
        <rect x="14" y="32" width="112" height="34" rx="2" {...s} strokeWidth="1" opacity="0.14"/>
        {/* two content cols */}
        <rect x="14" y="72" width="52" height="30" rx="2" {...s} strokeWidth="1" opacity="0.13"/>
        <rect x="72" y="72" width="54" height="30" rx="2" {...s} strokeWidth="1" opacity="0.13"/>
        {/* X marks through placeholder boxes */}
        <line x1="14" y1="32" x2="126" y2="66" {...s} strokeWidth="0.8" opacity="0.09"/>
        <line x1="126" y1="32" x2="14" y2="66" {...s} strokeWidth="0.8" opacity="0.09"/>
        {/* annotation */}
        <text x="26" y="118" fontFamily="'Caveat', cursive, sans-serif" fontSize="9.5" fill="#4a3a28" opacity="0.24">no templates</text>
      </svg>

      {/* ══════════════════════════════════════════
          CONTENT CREATION — camera lens + phone
      ══════════════════════════════════════════ */}
      <svg style={{ position:"absolute", top:"42%", right:"2.5%" }} width="150" height="140" viewBox="0 0 150 140">
        {/* camera body */}
        <rect x="20" y="40" width="90" height="64" rx="6" {...s} strokeWidth="1.2" opacity="0.17"/>
        {/* lens */}
        <circle cx="65" cy="72" r="22" {...s} strokeWidth="1.2" opacity="0.18"/>
        <circle cx="65" cy="72" r="15" {...s} strokeWidth="1" opacity="0.15"/>
        <circle cx="65" cy="72" r="6" {...s} strokeWidth="1" opacity="0.13"/>
        {/* viewfinder bump */}
        <rect x="56" y="30" width="28" height="12" rx="3" {...s} strokeWidth="1" opacity="0.15"/>
        {/* flash */}
        <rect x="98" y="44" width="8" height="6" rx="1" {...s} strokeWidth="1" opacity="0.14"/>
        {/* shutter button */}
        <circle cx="100" cy="40" r="4" {...s} strokeWidth="1" opacity="0.15"/>
        {/* rough phone beside it */}
        <rect x="118" y="50" width="22" height="40" rx="4" {...s} strokeWidth="1" opacity="0.14"/>
        <line x1="124" y1="56" x2="134" y2="56" {...s} strokeWidth="0.8" opacity="0.14"/>
        <circle cx="129" cy="82" r="3" {...s} strokeWidth="0.8" opacity="0.14"/>
        {/* note */}
        <text x="8" y="120" fontFamily="'Caveat', cursive, sans-serif" fontSize="9.5" fill="#4a3a28" opacity="0.24">light. story. feel.</text>
        {/* motion lines */}
        <path d="M8 55 Q14 52 10 48" {...s} strokeWidth="1" opacity="0.14"/>
        <path d="M8 65 Q16 62 12 57" {...s} strokeWidth="1" opacity="0.12"/>
      </svg>

      {/* ══════════════════════════════════════════
          AI ANIMATION — keyframe timeline + motion lines
      ══════════════════════════════════════════ */}
      <svg style={{ position:"absolute", top:"55%", left:"1%" }} width="160" height="100" viewBox="0 0 160 100">
        {/* timeline bar */}
        <line x1="10" y1="50" x2="150" y2="50" {...s} strokeWidth="1.1" opacity="0.18"/>
        {/* keyframe diamonds */}
        {[20,50,85,120,148].map((x,i) => (
          <path key={i} d={`M${x} 43 L${x+6} 50 L${x} 57 L${x-6} 50 Z`} {...s} strokeWidth="1" opacity="0.2"/>
        ))}
        {/* motion blur lines above */}
        <path d="M30 30 Q70 20 100 32 Q130 44 148 30" {...s} strokeWidth="1" opacity="0.14"/>
        {/* easing curve below */}
        <path d="M10 70 C40 70 60 85 90 85 C120 85 140 70 150 70" {...s} strokeWidth="1.2" opacity="0.16"/>
        <text x="10" y="94" fontFamily="'Caveat', cursive, sans-serif" fontSize="9.5" fill="#4a3a28" opacity="0.24">ease in → out</text>
        <text x="100" y="20" fontFamily="'Caveat', cursive, sans-serif" fontSize="9" fill="#4a3a28" opacity="0.22" transform="rotate(-3,100,20)">frame by frame</text>
      </svg>

      {/* ══════════════════════════════════════════
          GRAPHIC DESIGN — letterform studies
      ══════════════════════════════════════════ */}
      <svg style={{ position:"absolute", top:"66%", right:"2%" }} width="170" height="130" viewBox="0 0 170 130">
        {/* rough oversized F letterform */}
        <path d="M30 20 L30 110" {...s} strokeWidth="2" opacity="0.12"/>
        <path d="M30 20 L80 20" {...s} strokeWidth="2" opacity="0.12"/>
        <path d="M30 60 L68 60" {...s} strokeWidth="2" opacity="0.12"/>
        {/* rough C beside it */}
        <path d="M110 25 Q90 22 84 50 Q80 78 96 100 Q110 114 128 108" {...s} strokeWidth="2" opacity="0.12"/>
        {/* construction lines */}
        <line x1="20" y1="20" x2="140" y2="20" {...s} strokeWidth="0.7" strokeDasharray="3 4" opacity="0.1"/>
        <line x1="20" y1="65" x2="140" y2="65" {...s} strokeWidth="0.7" strokeDasharray="3 4" opacity="0.1"/>
        <line x1="20" y1="110" x2="140" y2="110" {...s} strokeWidth="0.7" strokeDasharray="3 4" opacity="0.1"/>
        {/* "x-height" label */}
        <text x="142" y="68" fontFamily="'Caveat', cursive, sans-serif" fontSize="8.5" fill="#4a3a28" opacity="0.22">x-height</text>
        <text x="28" y="124" fontFamily="'Caveat', cursive, sans-serif" fontSize="9.5" fill="#4a3a28" opacity="0.24">type = voice</text>
      </svg>

      {/* ══════════════════════════════════════════
          EVENT CREATIVE — stage / spotlight sketch
      ══════════════════════════════════════════ */}
      <svg style={{ position:"absolute", top:"78%", left:"1.5%" }} width="160" height="130" viewBox="0 0 160 130">
        {/* stage floor */}
        <line x1="10" y1="100" x2="150" y2="100" {...s} strokeWidth="1.5" opacity="0.18"/>
        {/* stage edge curve */}
        <path d="M10 100 Q80 92 150 100" {...s} strokeWidth="1" opacity="0.14"/>
        {/* two spotlights from top */}
        <path d="M40 10 L20 80 L60 80 Z" {...s} strokeWidth="0.9" opacity="0.12"/>
        <path d="M110 10 L90 80 L130 80 Z" {...s} strokeWidth="0.9" opacity="0.12"/>
        {/* spotlight circles */}
        <ellipse cx="40" cy="82" rx="20" ry="6" {...s} strokeWidth="1" opacity="0.14"/>
        <ellipse cx="110" cy="82" rx="20" ry="6" {...s} strokeWidth="1" opacity="0.14"/>
        {/* rough figure on stage */}
        <circle cx="80" cy="68" r="6" {...s} strokeWidth="1.1" opacity="0.16"/>
        <path d="M80 74 L80 90 M74 80 L86 80 M80 90 L76 100 M80 90 L84 100" {...s} strokeWidth="1" opacity="0.16"/>
        {/* rays */}
        <path d="M40 10 L20 5 M40 10 L50 2 M40 10 L60 6" {...s} strokeWidth="0.8" opacity="0.1"/>
        <text x="18" y="118" fontFamily="'Caveat', cursive, sans-serif" fontSize="9.5" fill="#4a3a28" opacity="0.24">the experience matters</text>
      </svg>

      {/* ══════════════════════════════════════════
          ERASER MARKS — scattered smudge zones
      ══════════════════════════════════════════ */}
      {/* smudge 1 — near brand identity */}
      <svg style={{ position:"absolute", top:"22%", left:"60%" }} width="100" height="24" viewBox="0 0 100 24">
        {[2,6,10,14,18].map(y => (
          <line key={y} x1="4" y1={y} x2={80+Math.sin(y)*6} y2={y+1}
            stroke="#8a7a60" strokeWidth={1.1} strokeLinecap="round" opacity="0.15"/>
        ))}
      </svg>
      {/* smudge 2 — near web design */}
      <svg style={{ position:"absolute", top:"35%", right:"20%" }} width="80" height="20" viewBox="0 0 80 20">
        {[3,7,11,15].map(y => (
          <line key={y} x1="2" y1={y} x2={66+Math.cos(y)*4} y2={y+1}
            stroke="#8a7a60" strokeWidth="1" strokeLinecap="round" opacity="0.13"/>
        ))}
      </svg>
      {/* smudge 3 — near graphic design */}
      <svg style={{ position:"absolute", top:"68%", left:"55%" }} width="110" height="22" viewBox="0 0 110 22">
        {[2,6,10,14,18].map(y => (
          <line key={y} x1="3" y1={y} x2={88+Math.sin(y)*5} y2={y+2}
            stroke="#8a7a60" strokeWidth={1.2} strokeLinecap="round" opacity="0.14"/>
        ))}
      </svg>

      {/* ══════════════════════════════════════════
          MARGIN NOTES — scattered throughout
      ══════════════════════════════════════════ */}
      <svg style={{ position:"absolute", top:"48%", right:"1%" }} width="90" height="40" viewBox="0 0 90 40">
        <text x="4" y="14" fontFamily="'Caveat', cursive, sans-serif" fontSize="10" fill="#4a3a28" opacity="0.22" transform="rotate(5,4,14)">Fortune 500</text>
        <text x="8" y="28" fontFamily="'Caveat', cursive, sans-serif" fontSize="10" fill="#4a3a28" opacity="0.22" transform="rotate(5,8,28)">→ indie artist</text>
      </svg>

      <svg style={{ position:"absolute", top:"72%", right:"1.5%" }} width="80" height="30" viewBox="0 0 80 30">
        <text x="4" y="14" fontFamily="'Caveat', cursive, sans-serif" fontSize="10" fill="#4a3a28" opacity="0.2" transform="rotate(-3,4,14)">culture first.</text>
        <path d="M4 18 Q40 22 70 18" stroke="#4a3a28" fill="none" strokeWidth="0.8" opacity="0.18"/>
      </svg>

      <svg style={{ position:"absolute", top:"90%", left:"3%" }} width="120" height="30" viewBox="0 0 120 30">
        <text x="4" y="16" fontFamily="'Caveat', cursive, sans-serif" fontSize="11" fill="#4a3a28" opacity="0.22" transform="rotate(-2,4,16)">start a project ↗</text>
      </svg>

    </div>
  );
}

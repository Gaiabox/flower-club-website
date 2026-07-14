"use client";

/**
 * BlueprintDecor, technical schematic overlays for the Digital Employees page.
 * All elements are aria-hidden, pointer-events-none, absolutely positioned.
 * Strokes use cool navy tones at low opacity to feel like engineering blueprints.
 */
export default function BlueprintDecor() {
  const s = {
    stroke: "#1B2A4A",
    fill: "none",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
      style={{ zIndex: 2 }}
    >
      {/* ══════════════════════════════════════════
          TOP-RIGHT, Circuit / processor node
      ══════════════════════════════════════════ */}
      <svg
        style={{ position: "absolute", top: "6%", right: "4%" }}
        width="200"
        height="200"
        viewBox="0 0 200 200"
      >
        {/* Central processor */}
        <rect x="70" y="70" width="60" height="60" rx="4" {...s} strokeWidth="1.2" opacity="0.12" />
        <rect x="82" y="82" width="36" height="36" rx="2" {...s} strokeWidth="1" opacity="0.10" />
        {/* Pin connections, top */}
        {[80, 100, 120].map((x) => (
          <line key={`t${x}`} x1={x} y1="70" x2={x} y2="48" {...s} strokeWidth="0.8" opacity="0.10" />
        ))}
        {/* Pin connections, bottom */}
        {[80, 100, 120].map((x) => (
          <line key={`b${x}`} x1={x} y1="130" x2={x} y2="152" {...s} strokeWidth="0.8" opacity="0.10" />
        ))}
        {/* Pin connections, left */}
        {[80, 100, 120].map((y) => (
          <line key={`l${y}`} x1="70" y1={y} x2="48" y2={y} {...s} strokeWidth="0.8" opacity="0.10" />
        ))}
        {/* Pin connections, right */}
        {[80, 100, 120].map((y) => (
          <line key={`r${y}`} x1="130" y1={y} x2="152" y2={y} {...s} strokeWidth="0.8" opacity="0.10" />
        ))}
        {/* Terminal nodes */}
        {[
          [80, 44], [100, 44], [120, 44],
          [80, 156], [100, 156], [120, 156],
          [44, 80], [44, 100], [44, 120],
          [156, 80], [156, 100], [156, 120],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" {...s} strokeWidth="0.8" opacity="0.12" />
        ))}
        <text x="60" y="185" fontFamily="'JetBrains Mono', monospace" fontSize="7" fill="#1B2A4A" opacity="0.15" letterSpacing="1">
          SYS.CORE v2.1
        </text>
      </svg>

      {/* ══════════════════════════════════════════
          TOP-LEFT, Data flow diagram
      ══════════════════════════════════════════ */}
      <svg
        style={{ position: "absolute", top: "8%", left: "2%" }}
        width="160"
        height="120"
        viewBox="0 0 160 120"
      >
        {/* Input node */}
        <circle cx="20" cy="30" r="12" {...s} strokeWidth="1" opacity="0.10" />
        <text x="14" y="33" fontFamily="'JetBrains Mono', monospace" fontSize="7" fill="#1B2A4A" opacity="0.14">IN</text>
        {/* Flow arrow 1 */}
        <path d="M32 30 L58 30" {...s} strokeWidth="0.8" opacity="0.10" />
        <path d="M55 27 L58 30 L55 33" {...s} strokeWidth="0.8" opacity="0.10" />
        {/* Process box */}
        <rect x="60" y="18" width="40" height="24" rx="2" {...s} strokeWidth="1" opacity="0.12" />
        <line x1="66" y1="26" x2="94" y2="26" {...s} strokeWidth="0.6" opacity="0.08" />
        <line x1="66" y1="34" x2="88" y2="34" {...s} strokeWidth="0.6" opacity="0.08" />
        {/* Flow arrow 2 */}
        <path d="M100 30 L126 30" {...s} strokeWidth="0.8" opacity="0.10" />
        <path d="M123 27 L126 30 L123 33" {...s} strokeWidth="0.8" opacity="0.10" />
        {/* Output node */}
        <circle cx="140" cy="30" r="12" {...s} strokeWidth="1" opacity="0.10" />
        <text x="132" y="33" fontFamily="'JetBrains Mono', monospace" fontSize="7" fill="#1B2A4A" opacity="0.14">OUT</text>
        {/* Branch down from process */}
        <path d="M80 42 L80 70" {...s} strokeWidth="0.8" opacity="0.10" />
        <rect x="60" y="70" width="40" height="20" rx="2" {...s} strokeWidth="1" opacity="0.10" strokeDasharray="3 3" />
        <text x="24" y="108" fontFamily="'JetBrains Mono', monospace" fontSize="6.5" fill="#1B2A4A" opacity="0.13" letterSpacing="0.5">
          data-flow.map
        </text>
      </svg>

      {/* ══════════════════════════════════════════
          MID-LEFT, Waveform / signal diagram
      ══════════════════════════════════════════ */}
      <svg
        style={{ position: "absolute", top: "32%", left: "1.5%" }}
        width="140"
        height="80"
        viewBox="0 0 140 80"
      >
        <line x1="10" y1="40" x2="130" y2="40" {...s} strokeWidth="0.6" opacity="0.08" strokeDasharray="2 3" />
        <path
          d="M10 40 L10 18 L30 18 L30 40 L30 58 L50 58 L50 40 L50 18 L70 18 L70 40 L70 58 L90 58 L90 40 L90 18 L110 18 L110 40"
          {...s} strokeWidth="1" opacity="0.12"
        />
        {/* Period measurement */}
        <line x1="10" y1="14" x2="30" y2="14" {...s} strokeWidth="0.6" opacity="0.10" />
        <line x1="10" y1="12" x2="10" y2="16" {...s} strokeWidth="0.6" opacity="0.10" />
        <line x1="30" y1="12" x2="30" y2="16" {...s} strokeWidth="0.6" opacity="0.10" />
        <text x="15" y="11" fontFamily="'JetBrains Mono', monospace" fontSize="5.5" fill="#1B2A4A" opacity="0.12">T</text>
        <text x="10" y="74" fontFamily="'JetBrains Mono', monospace" fontSize="6.5" fill="#1B2A4A" opacity="0.13">signal.ref</text>
      </svg>

      {/* ══════════════════════════════════════════
          MID-RIGHT, Network topology
      ══════════════════════════════════════════ */}
      <svg
        style={{ position: "absolute", top: "44%", right: "2.5%" }}
        width="180"
        height="160"
        viewBox="0 0 180 160"
      >
        {/* Hub node */}
        <circle cx="90" cy="80" r="16" {...s} strokeWidth="1.2" opacity="0.12" />
        <circle cx="90" cy="80" r="6" {...s} strokeWidth="0.8" opacity="0.10" />
        {/* Satellite nodes + connections */}
        {[
          { cx: 30, cy: 30, label: "A" },
          { cx: 150, cy: 30, label: "B" },
          { cx: 30, cy: 130, label: "C" },
          { cx: 150, cy: 130, label: "D" },
          { cx: 90, cy: 20, label: "E" },
        ].map((node, i) => (
          <g key={i}>
            <line x1="90" y1="80" x2={node.cx} y2={node.cy} {...s} strokeWidth="0.7" opacity="0.08" strokeDasharray="4 3" />
            <circle cx={node.cx} cy={node.cy} r="10" {...s} strokeWidth="0.9" opacity="0.11" />
            <text x={node.cx - 3} y={node.cy + 3} fontFamily="'JetBrains Mono', monospace" fontSize="7" fill="#1B2A4A" opacity="0.13">
              {node.label}
            </text>
          </g>
        ))}
        {/* Cross-connections */}
        <path d="M30 30 L150 30" {...s} strokeWidth="0.5" opacity="0.06" strokeDasharray="2 4" />
        <path d="M30 130 L150 130" {...s} strokeWidth="0.5" opacity="0.06" strokeDasharray="2 4" />
        <text x="52" y="155" fontFamily="'JetBrains Mono', monospace" fontSize="6.5" fill="#1B2A4A" opacity="0.13">topology.mesh</text>
      </svg>

      {/* ══════════════════════════════════════════
          LOWER-LEFT, Dimension / measurement callout
      ══════════════════════════════════════════ */}
      <svg
        style={{ position: "absolute", top: "62%", left: "1%" }}
        width="150"
        height="100"
        viewBox="0 0 150 100"
      >
        <rect x="20" y="20" width="80" height="50" rx="3" {...s} strokeWidth="1" opacity="0.10" />
        <line x1="20" y1="38" x2="100" y2="38" {...s} strokeWidth="0.6" opacity="0.08" />
        <line x1="60" y1="38" x2="60" y2="70" {...s} strokeWidth="0.6" opacity="0.08" />
        {/* Width dimension */}
        <line x1="20" y1="78" x2="100" y2="78" {...s} strokeWidth="0.6" opacity="0.10" />
        <line x1="20" y1="75" x2="20" y2="81" {...s} strokeWidth="0.6" opacity="0.10" />
        <line x1="100" y1="75" x2="100" y2="81" {...s} strokeWidth="0.6" opacity="0.10" />
        <text x="48" y="86" fontFamily="'JetBrains Mono', monospace" fontSize="6" fill="#1B2A4A" opacity="0.12">240u</text>
        {/* Height dimension */}
        <line x1="108" y1="20" x2="108" y2="70" {...s} strokeWidth="0.6" opacity="0.10" />
        <line x1="105" y1="20" x2="111" y2="20" {...s} strokeWidth="0.6" opacity="0.10" />
        <line x1="105" y1="70" x2="111" y2="70" {...s} strokeWidth="0.6" opacity="0.10" />
        <text x="114" y="48" fontFamily="'JetBrains Mono', monospace" fontSize="6" fill="#1B2A4A" opacity="0.12">120u</text>
      </svg>

      {/* ══════════════════════════════════════════
          LOWER-RIGHT, State machine diagram
      ══════════════════════════════════════════ */}
      <svg
        style={{ position: "absolute", top: "72%", right: "3%" }}
        width="160"
        height="110"
        viewBox="0 0 160 110"
      >
        <circle cx="30" cy="40" r="18" {...s} strokeWidth="1" opacity="0.10" />
        <text x="21" y="43" fontFamily="'JetBrains Mono', monospace" fontSize="6.5" fill="#1B2A4A" opacity="0.13">idle</text>
        <circle cx="90" cy="40" r="18" {...s} strokeWidth="1" opacity="0.10" />
        <text x="80" y="43" fontFamily="'JetBrains Mono', monospace" fontSize="6.5" fill="#1B2A4A" opacity="0.13">run</text>
        {/* Final state (double circle) */}
        <circle cx="130" cy="85" r="14" {...s} strokeWidth="1" opacity="0.10" />
        <circle cx="130" cy="85" r="11" {...s} strokeWidth="0.8" opacity="0.08" />
        <text x="123" y="88" fontFamily="'JetBrains Mono', monospace" fontSize="6" fill="#1B2A4A" opacity="0.13">ok</text>
        {/* Transitions */}
        <path d="M48 36 L68 36" {...s} strokeWidth="0.8" opacity="0.10" />
        <path d="M65 33 L68 36 L65 39" {...s} strokeWidth="0.8" opacity="0.10" />
        <path d="M104 50 L120 74" {...s} strokeWidth="0.8" opacity="0.10" />
        <path d="M117 71 L120 74 L116 75" {...s} strokeWidth="0.8" opacity="0.10" />
        {/* Loop back */}
        <path d="M72 38 Q60 10 48 38" {...s} strokeWidth="0.7" opacity="0.08" strokeDasharray="2 3" />
      </svg>

      {/* ══════════════════════════════════════════
          SCATTERED, Cross-hair alignment marks
      ══════════════════════════════════════════ */}
      <svg style={{ position: "absolute", top: "25%", left: "55%" }} width="30" height="30" viewBox="0 0 30 30">
        <line x1="15" y1="5" x2="15" y2="25" {...s} strokeWidth="0.6" opacity="0.08" />
        <line x1="5" y1="15" x2="25" y2="15" {...s} strokeWidth="0.6" opacity="0.08" />
        <circle cx="15" cy="15" r="8" {...s} strokeWidth="0.5" opacity="0.06" />
      </svg>

      <svg style={{ position: "absolute", top: "55%", left: "45%" }} width="24" height="24" viewBox="0 0 24 24">
        <line x1="12" y1="3" x2="12" y2="21" {...s} strokeWidth="0.5" opacity="0.07" />
        <line x1="3" y1="12" x2="21" y2="12" {...s} strokeWidth="0.5" opacity="0.07" />
        <circle cx="12" cy="12" r="6" {...s} strokeWidth="0.4" opacity="0.05" />
      </svg>

      {/* Reference labels */}
      <svg style={{ position: "absolute", top: "88%", left: "3%" }} width="120" height="20" viewBox="0 0 120 20">
        <text x="4" y="14" fontFamily="'JetBrains Mono', monospace" fontSize="6.5" fill="#1B2A4A" opacity="0.12" letterSpacing="1">
          REF: 00.00.00, R1
        </text>
      </svg>

      <svg style={{ position: "absolute", top: "92%", right: "3%" }} width="100" height="20" viewBox="0 0 100 20">
        <text x="4" y="14" fontFamily="'JetBrains Mono', monospace" fontSize="6" fill="#1B2A4A" opacity="0.11" letterSpacing="1">
          REV 01, DRAFT
        </text>
      </svg>
    </div>
  );
}

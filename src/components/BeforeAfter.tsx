"use client";

import { useRef, useState } from "react";

/**
 * BeforeAfter — draggable comparison slider showing what we do to
 * websites. Both sides are illustrative mockups built in-component
 * (no client assets needed): a dated, cluttered "before" and a clean,
 * branded "after". Pointer events so it works with mouse and touch.
 */

function BeforeMock() {
  return (
    <div className="absolute inset-0 bg-[#e8e4d8] overflow-hidden" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
      {/* dated header */}
      <div className="bg-[#2e5c8a] px-4 py-2 flex items-center justify-between">
        <span className="text-white text-[11px] md:text-sm font-bold italic">★ Smith &amp; Co LLC — Home Page ★</span>
        <span className="hidden md:block text-[#ffe97a] text-[9px] underline">click here!! | about us | links</span>
      </div>
      {/* banner */}
      <div className="mx-3 mt-3 border-4 border-double border-[#a04444] bg-[#fff8dc] p-2 md:p-4 text-center">
        <p className="text-[#a04444] text-[12px] md:text-xl font-bold">WELCOME TO OUR WEBSITE!!!</p>
        <p className="text-[#555] text-[8px] md:text-[11px] italic mt-1">~ proudly serving the greater area since 2009 ~</p>
      </div>
      {/* clutter row */}
      <div className="flex gap-2 mx-3 mt-3">
        <div className="flex-1 bg-white border border-[#999] p-2">
          <p className="text-[7px] md:text-[10px] leading-snug text-[#333]">
            Lorem ipsum we offer many services for all your needs. We are the best in town. Call now. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do…
          </p>
        </div>
        <div className="w-1/3 bg-[#ffe97a] border-2 border-dashed border-[#cc8800] p-1.5 text-center">
          <p className="text-[#aa0000] text-[7px] md:text-[10px] font-bold leading-tight">⚠ SPECIAL OFFER ⚠ CLICK NOW!!</p>
        </div>
      </div>
      {/* rainbow button */}
      <div className="text-center mt-3">
        <span
          className="inline-block px-3 md:px-5 py-1.5 text-white text-[8px] md:text-[11px] font-bold rounded"
          style={{ background: "linear-gradient(90deg,#e53935,#fb8c00,#fdd835,#43a047,#1e88e5,#8e24aa)" }}
        >
          ➤➤ CONTACT US TODAY ➤➤
        </span>
      </div>
      {/* visitor counter */}
      <p className="text-center text-[7px] md:text-[9px] text-[#777] mt-2 md:mt-3">
        You are visitor #004,217 · Best viewed in Internet Explorer
      </p>
    </div>
  );
}

function AfterMock() {
  return (
    <div className="absolute inset-0 bg-navy-dark overflow-hidden">
      {/* faint flower watermark */}
      <svg viewBox="0 0 36 36" className="absolute -right-10 -top-10 w-48 md:w-72 opacity-[0.07] text-cream" aria-hidden="true">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <ellipse key={a} cx="18" cy="9" rx="4.5" ry="7.5" fill="none" stroke="currentColor" strokeWidth="0.6" transform={`rotate(${a} 18 18)`} />
        ))}
        <circle cx="18" cy="18" r="8.5" fill="none" stroke="currentColor" strokeWidth="0.6" />
      </svg>

      {/* mini nav */}
      <div className="relative flex items-center justify-between px-4 md:px-6 py-2.5 md:py-3 border-b border-cream/10">
        <span className="flex items-center gap-1.5">
          <svg viewBox="0 0 36 36" className="w-3 md:w-4" aria-hidden="true">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
              <ellipse key={a} cx="18" cy="9" rx="4.5" ry="7.5" fill="#FFD700" transform={`rotate(${a} 18 18)`} />
            ))}
            <circle cx="18" cy="18" r="7" fill="#F4A300" />
          </svg>
          <span className="text-cream text-[9px] md:text-xs font-bold tracking-tight">SMITH&nbsp;&amp;&nbsp;CO</span>
        </span>
        <span className="bg-red text-cream text-[7px] md:text-[9px] font-bold uppercase tracking-wider px-2 md:px-3 py-1 rounded-sm">Start a Project</span>
      </div>

      {/* oversized display type — the agency look */}
      <div className="relative px-4 md:px-6 pt-3 md:pt-6">
        <p className="text-cream font-bold uppercase leading-[0.92] tracking-tight text-[26px] md:text-[52px]">
          Work that
        </p>
        <p
          className="font-bold uppercase leading-[0.92] tracking-tight text-[26px] md:text-[52px] text-cream"
          style={{ WebkitTextStroke: "1.5px #FAF7F2", color: "transparent" }}
        >
          wins.
        </p>
      </div>

      {/* running marquee band — actual motion inside the after panel */}
      <div className="absolute left-0 right-0 bottom-9 md:bottom-12 border-y border-cream/10 bg-navy py-1 md:py-1.5 overflow-hidden">
        <div
          className="flex gap-3 md:gap-5 whitespace-nowrap"
          style={{ animation: "marquee 9s linear infinite", width: "max-content" }}
        >
          {Array.from({ length: 3 }).flatMap((_, r) =>
            ["Branding", "Web", "AI Employees", "Motion", "Events"].map((w, i) => (
              <span key={`${r}-${i}`} className="flex items-center gap-3 md:gap-5">
                <span className="text-cream/80 font-mono text-[7px] md:text-[9px] uppercase tracking-[0.2em]">{w}</span>
                <span className="text-red text-[6px]">✦</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* red stat strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-red px-4 md:px-6 py-1.5 md:py-2 flex items-center gap-4 md:gap-8">
        <span className="text-cream text-[7px] md:text-[10px] font-bold">2× leads</span>
        <span className="text-cream/70 text-[7px] md:text-[10px]">0.8s load</span>
        <span className="text-cream/70 text-[7px] md:text-[10px]">AI follow-up built in</span>
      </div>

      {/* mini Bud — AI employee included */}
      <div className="absolute bottom-12 md:bottom-16 right-3 md:right-4 flex items-center gap-1.5">
        <span className="hidden md:inline-block bg-navy border border-cream/20 text-cream/80 text-[8px] rounded-md px-2 py-1">
          Hey — need a quote?
        </span>
        <span className="relative flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-navy border border-cream/25">
          <svg viewBox="0 0 36 36" className="w-3 md:w-4" aria-hidden="true">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
              <ellipse key={a} cx="18" cy="9" rx="4.5" ry="7.5" fill="#FFD700" transform={`rotate(${a} 18 18)`} />
            ))}
            <circle cx="18" cy="18" r="7" fill="#F4A300" />
          </svg>
          <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-green-400 animate-pulse border border-navy-dark" />
        </span>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const frameRef = useRef<HTMLDivElement>(null);

  const setFromClientX = (clientX: number) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, pct)));
  };

  return (
    <div
      ref={frameRef}
      className="relative aspect-[16/10] md:aspect-[16/8] rounded-sm overflow-hidden border border-cream/15 select-none touch-none cursor-ew-resize shadow-2xl"
      onPointerDown={(e) => {
        dragging.current = true;
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        setFromClientX(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && setFromClientX(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      {/* After fills everything; Before is clipped to the left of the handle */}
      <AfterMock />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <BeforeMock />
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 bg-black/60 text-white font-mono text-[9px] uppercase tracking-widest px-2 py-1 rounded-sm pointer-events-none">
        Before
      </span>
      <span className="absolute top-3 right-3 bg-red text-cream font-mono text-[9px] uppercase tracking-widest px-2 py-1 rounded-sm pointer-events-none">
        After
      </span>

      {/* Handle */}
      <div className="absolute top-0 bottom-0 pointer-events-none" style={{ left: `${pos}%` }}>
        <div className="absolute top-0 bottom-0 -left-px w-0.5 bg-cream" />
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-cream shadow-lg flex items-center justify-center">
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="#121D33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 1L1 6l4 5M11 1l4 5-4 5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

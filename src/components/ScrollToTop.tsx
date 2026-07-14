"use client";

import { useEffect, useState } from "react";

/**
 * ScrollToTop, circle-outline button, bottom right.
 * Two chevrons march upward on a loop ("looking up").
 * Appears after 300px of scroll. Slightly larger tap target on mobile.
 */

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="9"
      viewBox="0 0 16 9"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M1 8L8 1L15 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 flex h-14 w-14 md:h-12 md:w-12 items-center justify-center rounded-full border border-cream/40 bg-navy-dark/70 text-cream backdrop-blur-sm transition-all duration-500 hover:border-cream hover:bg-navy-dark ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span className="relative flex h-5 w-4 items-center justify-center overflow-hidden">
        <Chevron className="chevron-rise absolute" />
        <Chevron className="chevron-rise chevron-rise-delayed absolute" />
      </span>
    </button>
  );
}

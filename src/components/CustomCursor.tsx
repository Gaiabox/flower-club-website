"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * CustomCursor — circular "VIEW" badge that follows the mouse over
 * portfolio/work cards. Native cursor is hidden over those elements
 * (see globals.css). Desktop pointer devices only.
 */

const TARGETS = '.portfolio-card, .work-item, [data-cursor="view"]';

export default function CustomCursor() {
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const badge = badgeRef.current;
    if (!badge) return;

    const xTo = gsap.quickTo(badge, "x", { duration: 0.35, ease: "power3.out" });
    const yTo = gsap.quickTo(badge, "y", { duration: 0.35, ease: "power3.out" });
    let active = false;

    const onMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);

      const overTarget = !!(e.target as Element | null)?.closest?.(TARGETS);
      if (overTarget !== active) {
        active = overTarget;
        gsap.to(badge, {
          scale: active ? 1 : 0,
          opacity: active ? 1 : 0,
          duration: 0.3,
          ease: active ? "back.out(1.6)" : "power2.in",
        });
      }
    };

    // hide the badge if the mouse leaves the window
    const onLeave = () => {
      if (active) {
        active = false;
        gsap.to(badge, { scale: 0, opacity: 0, duration: 0.2 });
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={badgeRef}
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden md:flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 scale-0 items-center justify-center rounded-full bg-cream opacity-0 shadow-lg"
      aria-hidden="true"
    >
      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-navy">
        View
      </span>
    </div>
  );
}

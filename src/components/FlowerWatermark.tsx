"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * FlowerWatermark — the brand's flower mark, oversized and outlined,
 * sitting faintly behind section content. Rotates slowly as the user
 * scrolls past. Parent section must be `relative overflow-hidden`.
 *
 * Size, position, color, and opacity are all driven by className, e.g.:
 *   <FlowerWatermark className="w-[640px] -right-40 -top-40 text-cream opacity-[0.05]" />
 */
export default function FlowerWatermark({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.to(el, {
        rotation: 60,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`pointer-events-none absolute select-none ${className}`}
      style={{ height: "auto", aspectRatio: "1" }}
    >
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <ellipse
          key={angle}
          cx="18"
          cy="9"
          rx="4.5"
          ry="7.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          transform={`rotate(${angle} 18 18)`}
        />
      ))}
      <circle cx="18" cy="18" r="8.5" fill="none" stroke="currentColor" strokeWidth="0.6" />
      <circle cx="18" cy="18" r="4.5" fill="none" stroke="currentColor" strokeWidth="0.6" />
    </svg>
  );
}

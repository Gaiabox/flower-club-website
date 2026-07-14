"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * CountUp, number counts from 0 to `end` the first time it scrolls
 * into view. GSAP ScrollTrigger drives it (fires immediately if the
 * element is already in view), writing textContent directly.
 */
export default function CountUp({
  end,
  suffix = "",
  className = "",
}: {
  end: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const counter = { n: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        n: end,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 95%", once: true },
        onUpdate: () => {
          el.textContent = `${Math.round(counter.n)}${suffix}`;
        },
      });
    });
    return () => ctx.revert();
  }, [end, suffix]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      0{suffix}
    </span>
  );
}

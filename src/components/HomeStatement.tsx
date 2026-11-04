"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function HomeStatement() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(ref.current!.querySelectorAll(".statement-line"), {
        yPercent: 70, opacity: 0, stagger: 0.18, ease: "none", immediateRender: false,
        scrollTrigger: { trigger: ref.current, start: "top 85%", end: "center 55%", scrub: 0.6 },
      });
    });
    mm.add("(max-width:767px) and (prefers-reduced-motion:no-preference)", () => {
      gsap.fromTo(ref.current!.querySelector(".mobile-statement-image"), { yPercent:-7, scale:1.18 }, { yPercent:7, scale:1.18, ease:"none", scrollTrigger:{trigger:ref.current,start:"top bottom",end:"bottom top",scrub:true,invalidateOnRefresh:true} });
    });
    return () => mm.revert();
  }, []);
  return (
<section ref={ref} aria-label="Built to be seen"
        className="statement-sec relative py-20 md:py-28 overflow-hidden border-t border-cream/5 w-full"
        style={{ backgroundImage: "url('/assets/images/culture-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="mobile-statement-image" aria-hidden="true" />
        <div className="absolute inset-0 bg-navy-dark/70" />
        <div className="relative z-10 section-padding max-w-7xl mx-auto">
          <p className="label-light mb-6 text-center">The Standard</p>
          <div className="flex flex-col items-center text-center gap-2">
            <span
              className="statement-line text-cream font-bold uppercase leading-none tracking-tight select-none"
              style={{ fontSize: "clamp(3rem, 12vw, 11rem)", letterSpacing: "-0.03em" }}
            >
              BUILT
            </span>
            <span
              className="statement-line text-red font-bold uppercase leading-none tracking-tight select-none"
              style={{ fontSize: "clamp(3rem, 12vw, 11rem)", letterSpacing: "-0.03em" }}
            >
              TO BE
            </span>
            <span
              className="statement-line text-cream/20 font-bold uppercase leading-none tracking-tight select-none"
              style={{ fontSize: "clamp(3rem, 12vw, 11rem)", letterSpacing: "-0.03em" }}
            >
              SEEN.
            </span>
          </div>
        </div>
      </section>
  );
}

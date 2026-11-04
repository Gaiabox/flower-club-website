"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function MobileHomeMotion() {
  useEffect(() => {
    let frame = 0;
    const refresh = () => {
      if (window.innerWidth < 768) {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          ScrollTrigger.sort();
          ScrollTrigger.refresh();
        });
      }
    };
    window.addEventListener("load", refresh);
    window.addEventListener("fc-mobile-work-ready", refresh);
    document.fonts.ready.then(refresh);
    const mm = gsap.matchMedia();
    mm.add(
      "(max-width:767px) and (prefers-reduced-motion:no-preference)",
      () => {
        document
          .querySelectorAll("main > section:not(#selected-work) h2")
          .forEach((el) => {
            gsap.from(el, {
              y: 18,
              opacity: 0,
              duration: 0.55,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 92%", once: true },
            });
          });
      },
    );
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("load", refresh);
      window.removeEventListener("fc-mobile-work-ready", refresh);
      mm.revert();
    };
  }, []);
  return null;
}

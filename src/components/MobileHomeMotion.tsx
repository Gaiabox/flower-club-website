"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function MobileHomeMotion() {
  useEffect(() => {
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
    return () => mm.revert();
  }, []);
  return null;
}

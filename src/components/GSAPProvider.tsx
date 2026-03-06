"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Scroll reveal animations for all elements with data-animate
    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => {
      const direction = el.getAttribute("data-animate") || "up";
      const delay = parseFloat(el.getAttribute("data-delay") || "0");

      const from: gsap.TweenVars = {
        opacity: 0,
        duration: 0.8,
        delay,
        ease: "power3.out",
      };

      switch (direction) {
        case "up":
          from.y = 40;
          break;
        case "down":
          from.y = -40;
          break;
        case "left":
          from.x = 40;
          break;
        case "right":
          from.x = -40;
          break;
        case "fade":
          break;
      }

      gsap.from(el, {
        ...from,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    // Stagger animations for grid items
    const grids = document.querySelectorAll("[data-stagger]");
    grids.forEach((grid) => {
      const children = grid.children;
      gsap.from(children, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: grid,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}

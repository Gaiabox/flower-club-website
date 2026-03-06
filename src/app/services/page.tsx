"use client";

import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/lib/portfolio";
import SketchDecor from "@/components/SketchDecor";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".services-header", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".service-card", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-list",
          start: "top 80%",
        },
      });

      gsap.from(".services-cta", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-cta",
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="sketchbook-bg relative min-h-screen pt-32 pb-24 overflow-x-hidden">

      {/* ── Pink Pearl Eraser ── */}
      <div
        className="pointer-events-none select-none fixed bottom-20 right-12 z-20"
        style={{ transform: "rotate(-11deg)", filter: "drop-shadow(3px 8px 14px rgba(0,0,0,0.18))" }}
        aria-hidden="true"
      >
        {/* Eraser dust / smudge marks on paper behind eraser */}
        <svg className="absolute" style={{ top:"38px", left:"-18px", zIndex:-1 }} width="200" height="40" viewBox="0 0 200 40" fill="none">
          <ellipse cx="100" cy="20" rx="88" ry="10" fill="rgba(120,100,70,0.07)"/>
          {[10,25,40,55,72,90,108,125,142,158,174].map((x,i) => (
            <line key={i} x1={x} y1={8+Math.sin(i)*5} x2={x+12} y2={14+Math.sin(i+1)*4} stroke="rgba(90,70,40,0.09)" strokeWidth="1.2" strokeLinecap="round"/>
          ))}
        </svg>

        <svg width="148" height="52" viewBox="0 0 148 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Drop shadow */}
          <rect x="4" y="12" width="140" height="38" rx="4" fill="rgba(0,0,0,0.12)" style={{filter:"blur(4px)"}}/>
          {/* Main body — worn pink */}
          <rect x="0" y="6" width="140" height="40" rx="4" fill="#dba8b4"/>
          {/* Top face highlight */}
          <rect x="0" y="6" width="140" height="9" rx="4" fill="#e8bcc6"/>
          {/* Bottom edge shadow */}
          <rect x="2" y="40" width="138" height="6" rx="2" fill="#b07888"/>
          {/* Blue/grey end cap */}
          <rect x="0" y="6" width="26" height="40" rx="4" fill="#5a7ab0"/>
          <rect x="0" y="6" width="26" height="9" fill="#6a8ec4"/>
          <rect x="24" y="6" width="2.5" height="40" fill="#8a4020" opacity="0.45"/>
          {/* Brand stamp */}
          <text x="46" y="27" fontFamily="'Arial Narrow', Arial, sans-serif" fontSize="8" fontWeight="bold" fill="rgba(100,40,50,0.6)" letterSpacing="2.5">PINK PEARL</text>
          <text x="60" y="38" fontFamily="Arial, sans-serif" fontSize="5.5" fill="rgba(100,40,50,0.38)" letterSpacing="2">ERASER</text>
          {/* Worn / used right end — creamy green */}
          <rect x="112" y="6" width="28" height="40" rx="2" fill="#c8d8a0"/>
          <rect x="113" y="7" width="26" height="8" rx="1" fill="#d4e0ae"/>
          {/* Worn edge shavings / scuff marks */}
          <rect x="136" y="10" width="4" height="34" rx="1" fill="#b0c278" opacity="0.7"/>
          <path d="M113 24 Q118 20 124 25 Q130 30 136 24" stroke="rgba(80,90,40,0.18)" strokeWidth="1" fill="none"/>
          <path d="M114 32 Q120 28 128 33" stroke="rgba(80,90,40,0.14)" strokeWidth="1" fill="none"/>
          {/* Smear lines on worn end */}
          {[14,19,24,29,34].map(y => (
            <line key={y} x1="113" y1={y} x2="135" y2={y+1} stroke="rgba(70,80,30,0.1)" strokeWidth="1" strokeLinecap="round"/>
          ))}
        </svg>

        {/* Cast shadow on paper */}
        <div style={{ position:"absolute", bottom:"-4px", left:"12px", width:"128px", height:"6px", background:"radial-gradient(ellipse, rgba(0,0,0,0.14) 0%, transparent 75%)", borderRadius:"50%" }}/>
      </div>

      {/* Eraser residue trails — graphite smudge */}
      <svg
        className="pointer-events-none select-none fixed z-10"
        style={{ bottom:"62px", right:"48px", transform:"rotate(-11deg)", opacity:0.22 }}
        width="160" height="28" viewBox="0 0 160 28" fill="none"
        aria-hidden="true"
      >
        {[4,9,14,19,24].map((y,i) => (
          <line key={y} x1={6+i*3} y1={y} x2={148-i*2} y2={y+1} stroke="#6b5a3e" strokeWidth={1.2-i*0.1} strokeLinecap="round" opacity={0.7-i*0.08}/>
        ))}
      </svg>

      <SketchDecor />
      <div className="relative z-10 section-padding max-w-6xl mx-auto">
        {/* Header */}
        <div className="services-header mb-20">
          <p className="label mb-4">Services</p>
          <h1 className="text-display-xl text-navy font-bold mb-4">
            What We Do.
          </h1>
          <p className="text-navy/60 text-xl max-w-xl">
            Full-service creative — from brand identity to AI animation.
            Everything your brand needs to show up and stand out.
          </p>
        </div>

        {/* Services List */}
        <div className="services-list space-y-0">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card group border-t border-navy/10 py-12 md:py-16 hover:bg-navy/[0.02] transition-colors duration-300 -mx-6 md:-mx-12 lg:-mx-20 xl:-mx-28 px-6 md:px-12 lg:px-20 xl:px-28"
            >
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="font-mono text-sm text-navy/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <div className="md:col-span-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-navy group-hover:text-red transition-colors duration-300">
                    {service.title}
                  </h2>
                </div>

                {/* Description */}
                <div className="md:col-span-5">
                  <p className="font-semibold text-navy mb-2">
                    {service.headline}
                  </p>
                  <p className="text-navy/60 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Example */}
                <div className="md:col-span-2">
                  <p className="label mb-1">Example</p>
                  <p className="text-navy/50 text-xs leading-relaxed">
                    {service.example}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-navy/10" />
        </div>

        {/* CTA */}
        <div className="services-cta mt-20 bg-navy rounded-sm p-12 md:p-16 text-center">
          <h2 className="text-display-sm text-cream font-bold mb-4">
            Need something specific?
          </h2>
          <p className="text-cream/60 mb-8 max-w-md mx-auto">
            Every project is different. Tell us what you need and we&apos;ll
            build the right solution.
          </p>
          <Link href="/contact" className="btn-primary">
            Start a Conversation
          </Link>
        </div>
      </div>{/* end max-w-6xl */}
    </div>
  );
}

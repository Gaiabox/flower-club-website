"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PortfolioAsset from "@/components/PortfolioAsset";
import FlowerWatermark from "@/components/FlowerWatermark";
import Marquee from "@/components/Marquee";
import CountUp from "@/components/CountUp";
import BeforeAfter from "@/components/BeforeAfter";


gsap.registerPlugin(ScrollTrigger);

const clients = [
  "Bacardi",
  "Red Bull",
  "P&G",
  "Popeyes",
  "Maker's Mark",
  "Courvoisier",
  "Liquid Death",
  "OFFSET",
  "J. Cole",
];

const serviceTiles = [
  { title: "Web Design + Development", icon: "▣", href: "/services" },
  { title: "AI-Powered Digital Employees", icon: "◎", href: "/services/digital-employees" },
  { title: "Brand Identity + Design", icon: "◈", href: "/services" },
  { title: "Video Production + AI Animation", icon: "◉", href: "/services" },
  { title: "Brand Activations", icon: "◆", href: "/services" },
  { title: "Content Creation", icon: "◐", href: "/services" },
];

const featuredWork = [
  {
    client: "AI Animation",
    title: "AI Animation",
    category: "Motion Design",
    slug: "ai-animation-hero",
    teaserSrc: "/assets/videos/ai-animation-hero-teaser.mp4",
    fullSrc: "/assets/videos/ai-animation-hero.mp4",
  },
  {
    client: "Animation",
    title: "Animation",
    category: "Motion Design",
    slug: "animation-card",
    teaserSrc: "/assets/videos/animation-card.mov",
    fullSrc: "/assets/videos/animation-card.mov",
  },
  {
    client: "3D Animation",
    title: "3D Animation",
    category: "Motion Design",
    slug: "3d-animation-card",
    teaserSrc: "/assets/videos/3d-animation-card-teaser.mp4",
    fullSrc: "/assets/videos/3d-animation-card.mp4",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [activeSound, setActiveSound] = useState<string | null>(null);
  const toggleSound = (id: string) => setActiveSound(prev => prev === id ? null : id);


  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero headline animation
      gsap.from(headlineRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.3,
      });

      // Hero subhead + CTA
      gsap.from(".hero-sub", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.6,
      });

      gsap.from(".hero-cta", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.9,
      });

      // Client bar
      gsap.from(".client-bar", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        immediateRender: false,
        scrollTrigger: {
          trigger: ".client-bar",
          start: "top 105%",
        },
      });

      // Portfolio cards
      gsap.from(".portfolio-card", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".portfolio-section",
          start: "top 105%",
        },
      });

      // Two-step system cards
      gsap.from(".system-card", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".system-section",
          start: "top 80%",
        },
      });

      // Statement lines reveal as you scroll through them
      gsap.from(".statement-line", {
        yPercent: 70,
        opacity: 0,
        stagger: 0.18,
        ease: "none",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".statement-sec",
          start: "top 85%",
          end: "center 55%",
          scrub: 0.6,
        },
      });

      // Before/after section reveal
      gsap.from(".ba-section .max-w-5xl > *", {
        opacity: 0,
        y: 35,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".ba-section",
          start: "top 75%",
        },
      });

      // CTA strip
      gsap.from(".cta-strip-content", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".cta-strip",
          start: "top 105%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="grain-overlay relative min-h-screen flex items-center justify-center bg-navy-dark overflow-hidden"
      >
        {/* Hero background image (always present — poster on mobile, fallback under video on desktop) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}
        />
        {/* Hero background video — desktop only, mobile keeps the still */}
        <video
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          src="/assets/videos/makers-mark-rev-run-teaser.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/images/hero-bg.jpg"
        />
        {/* Dark overlay — keeps text legible */}
        <div className="absolute inset-0 bg-navy-dark/75" />
        {/* Subtle gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy-dark to-transparent" />

        <div className="relative z-10 text-center section-padding max-w-5xl mx-auto">
          <p className="label-light mb-6">Full-Service Creative Agency — Charlotte, NC</p>
          <h1
            ref={headlineRef}
            className="text-display-xl text-cream font-bold mb-6"
          >
            Your Website Should Be Bringing You Customers.
          </h1>
          <p className="hero-sub text-cream/70 text-lg md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed w-full px-2">
            We build websites, AI employees, and digital experiences that help businesses capture more leads, respond faster, and grow without adding headcount.
          </p>
          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Let&apos;s Grow
            </Link>
            <Link href="/work" className="btn-outline">
              See the Work
            </Link>
          </div>


        </div>

        {/* Work credit — what you're looking at IS the work */}
        <div className="absolute bottom-8 left-6 md:left-12 z-10 flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-red animate-pulse flex-shrink-0" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-cream/70 leading-relaxed">
            <span className="md:hidden">Our work — Pusha T listening party, produced by The Flower Club</span>
            <span className="hidden md:inline">Our work — Maker&apos;s Mark × Rev Run activation, produced by The Flower Club</span>
          </span>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-cream/30">
          <span className="font-mono text-xs uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-cream/30 to-transparent" />
        </div>
      </section>

      {/* ─── STATS STRIP ─── */}
      <section className="bg-red py-5">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16">
            {[
              { stat: <CountUp end={150} suffix="+" />, key: "events", label: "Events Produced" },
              { stat: <CountUp end={50} suffix="+" />, key: "brands", label: "Brands Worked With" },
              { stat: "Fortune 500", key: "f500", label: "to Independent Artists" },
            ].map(({ stat, key, label }) => (
              <div key={key} className="flex items-center gap-3">
                <span className="text-cream font-bold text-xl md:text-2xl uppercase tracking-tight">{stat}</span>
                <span className="text-cream/60 font-mono text-[10px] uppercase tracking-widest leading-tight max-w-[80px]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLIENT TICKER ─── */}
      <section className="client-bar bg-navy-dark border-y border-cream/10 py-4" style={{overflowX:"clip", overflowY:"visible"}}>
        <div
          className="flex gap-12 whitespace-nowrap"
          style={{ animation: "ticker 25s linear infinite", width: "max-content" }}
        >
          {[...clients, ...clients, ...clients].map((client, i) => (
            <span key={i} className="flex items-center gap-12">
              <span className="font-bold text-cream/30 text-xs uppercase tracking-[0.25em] hover:text-cream/70 transition-colors duration-300 cursor-default">
                {client}
              </span>
              <span className="text-red/40 text-[8px]">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ─── THE TWO-STEP SYSTEM ─── */}
      <section className="system-section bg-navy py-24 md:py-32 relative overflow-hidden">
        <FlowerWatermark className="w-[560px] md:w-[760px] -right-36 md:-right-48 -top-40 text-cream opacity-[0.04]" />
        <div className="section-padding max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <p className="label-light mb-4">The Biggest Opportunities</p>
            <h2 className="text-display-md text-cream font-bold">
              Where brands get
              <br />
              the most leverage.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Step 01 — The Website */}
            <Link
              href="/contact"
              className="system-card group block border border-cream/15 bg-navy-dark/60 p-10 md:p-12 rounded-sm hover:border-red/60 transition-colors duration-500"
            >
              <p className="font-mono text-red text-sm mb-6">01</p>
              <h3 className="text-display-sm text-cream font-bold mb-4">
                The Website
              </h3>
              <p className="text-cream/60 leading-relaxed mb-8">
                Custom-coded, conversion-focused, fast. No templates, no
                Squarespace. Your digital front door — built to turn visitors
                into customers, not just look good.
              </p>
              <span className="inline-flex items-center gap-2 text-cream font-semibold text-sm uppercase tracking-wider group-hover:text-red transition-colors">
                Start here
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>

            {/* Step 02 — The AI Layer */}
            <Link
              href="/services/digital-employees"
              className="system-card group block border border-cream/15 bg-navy-dark/60 p-10 md:p-12 rounded-sm hover:border-red/60 transition-colors duration-500"
            >
              <p className="font-mono text-red text-sm mb-6">02</p>
              <h3 className="text-display-sm text-cream font-bold mb-4">
                The AI Employees
              </h3>
              <p className="text-cream/60 leading-relaxed mb-8">
                Custom digital employees installed behind your site — lead
                follow-up, intake, scheduling, reporting. The busywork runs
                itself, so growth doesn&apos;t mean more headcount.
              </p>
              <span className="inline-flex items-center gap-2 text-cream font-semibold text-sm uppercase tracking-wider group-hover:text-red transition-colors">
                See how it works
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          </div>

          <p className="text-cream/40 font-mono text-xs uppercase tracking-widest mt-10 text-center">
            Weak site? We fix that first. Solid site? We build the layer on top.
          </p>
        </div>
      </section>

      {/* ─── BEFORE / AFTER ─── */}
      <section className="ba-section bg-navy-dark py-24 md:py-32 relative overflow-hidden">
        <div className="section-padding max-w-5xl mx-auto">
          <div className="mb-12">
            <p className="label-light mb-4">The Difference</p>
            <h2 className="text-display-md text-cream font-bold">
              Drag it. See it.
            </h2>
            <p className="text-cream/55 text-lg mt-4 max-w-xl">
              Every site we touch goes from template to brand. Grab the handle.
            </p>
          </div>
          <BeforeAfter />
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-cream font-semibold text-sm uppercase tracking-wider hover:text-red transition-colors group"
            >
              Your site is the before. Let&apos;s fix that
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SERVICES BRIEF ─── */}
      <section className="no-breathe bg-cream py-24 md:py-32">
        <div className="section-padding max-w-7xl mx-auto">

          {/* Two-col: left = heading + tiles, right = video */}
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Left column */}
            <div className="flex-1 min-w-0">
              <div className="mb-16">
                <p className="label mb-4">How We Help Businesses Grow</p>
                <h2 className="text-display-md text-navy font-bold">
                  Built For Growth.
                  <br />
                  Powered By Strategy.
                </h2>
              </div>

              <div className="services-grid grid grid-cols-1 sm:grid-cols-2 gap-6">
                {serviceTiles.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="service-tile group p-8 border border-navy/25 bg-white/60 rounded-sm hover:border-red/50 hover:bg-navy transition-all duration-500 cursor-pointer shadow-sm"
                  >
                    <span className="text-red text-2xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </span>
                    <h3 className="text-navy group-hover:text-cream font-bold text-lg mb-2 transition-colors duration-500">
                      {service.title}
                    </h3>
                    <div className="w-8 h-0.5 bg-red/50 group-hover:w-12 transition-all duration-500" />
                  </Link>
                ))}
              </div>

              <div className="mt-12">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-navy font-semibold text-sm uppercase tracking-wider hover:text-red transition-colors group"
                >
                  Full Services
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Right column — featured video */}
            <div className="block w-full lg:w-[420px] flex-shrink-0">
              <div className="relative group rounded-sm overflow-hidden bg-navy-dark sticky top-32">
                {/* Thumbnail label badge */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-navy-dark/80 backdrop-blur-sm border border-cream/10 rounded-full px-3 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse" />
                  <span className="text-cream/80 font-mono text-[10px] uppercase tracking-widest">Featured</span>
                </div>
                {/* Video */}
                <div className="aspect-[9/16] relative overflow-hidden">
                  <video
                    src="/assets/videos/makers-mark-rev-run-teaser.mp4"
                    poster="/assets/images/makers-mark-rev-run-thumb.jpg"
                    preload="none"
                    muted={activeSound !== "revrun"}
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
                    onMouseLeave={(e) => { const v = e.currentTarget as HTMLVideoElement; v.pause(); v.currentTime = 0; }}
                  />
                  {/* Play pill */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                    <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                      <svg width="10" height="12" viewBox="0 0 10 12" fill="none"><path d="M1 1L9 6L1 11V1Z" fill="white"/></svg>
                      <span className="text-cream text-[10px] font-mono uppercase tracking-widest">Play</span>
                    </div>
                  </div>
                  {/* Sound toggle */}
                  <button
                    onClick={() => toggleSound("revrun")}
                    className="absolute bottom-14 right-3 z-30 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 transition-colors"
                  >
                    {activeSound !== "revrun" ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                    )}
                  </button>
                  {/* Bottom gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-dark/80 to-transparent" />
                  {/* Caption */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-cream font-bold text-sm uppercase tracking-wide">Maker&apos;s Mark × Rev Run</p>
                    <p className="text-cream/50 font-mono text-[10px] uppercase tracking-widest mt-0.5">Brand Activation</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO PREVIEW ─── */}
      <section className="portfolio-section bg-navy-dark py-24 md:py-32">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="label-light mb-4">Selected Work</p>
            <h2 className="text-display-md text-cream font-bold">
              From Fortune 500
              <br />
              to your next release.
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {featuredWork.map((project) => (
              <div key={project.slug} className="portfolio-card group block">
                <PortfolioAsset
                  slug={project.slug}
                  name={project.client}
                  category={project.category}
                  aspect="portrait"
                  teaserSrc={project.teaserSrc}
                />
                <div className="mt-4">
                  <h3 className="text-cream font-bold text-lg group-hover:text-red transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="label-light mt-1">{project.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Extra video row above View All Work */}
          <div className="mt-8 flex flex-col md:flex-row gap-4">
            {/* Horizontal video — flex 3 */}
            <div className="group relative overflow-hidden rounded-sm md:flex-[3] cursor-pointer">
              <div className="relative overflow-hidden rounded-sm" style={{paddingTop: "56.25%"}}>
                <video
                  src="/assets/videos/home-feature-1-teaser.mp4"
                  poster="/assets/images/home-feature-1-thumb.jpg"
                  preload="none"
                  muted={activeSound !== "feat1"} loop playsInline
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
                  onMouseLeave={(e) => { const v = e.currentTarget as HTMLVideoElement; v.pause(); v.currentTime = 0; }}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                  <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none"><path d="M1 1L9 6L1 11V1Z" fill="white"/></svg>
                    <span className="text-cream text-[10px] font-mono uppercase tracking-widest">Play</span>
                  </div>
                </div>
                <button onClick={() => toggleSound("feat1")} className="absolute bottom-3 right-3 z-30 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 transition-colors">
                  {activeSound !== "feat1" ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                  )}
                </button>
              </div>
            </div>
            {/* Vertical video — flex 1, hidden on mobile to avoid 1700px height */}
            <div className="hidden md:block group relative overflow-hidden rounded-sm md:flex-[1] cursor-pointer">
              <div className="relative overflow-hidden rounded-sm" style={{paddingTop: "177.78%"}}>
                <video
                  src="/assets/videos/home-feature-2-vertical-teaser.mp4"
                  poster="/assets/images/home-feature-2-thumb.jpg"
                  preload="none"
                  muted={activeSound !== "feat2"} loop playsInline
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
                  onMouseLeave={(e) => { const v = e.currentTarget as HTMLVideoElement; v.pause(); v.currentTime = 0; }}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                  <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none"><path d="M1 1L9 6L1 11V1Z" fill="white"/></svg>
                    <span className="text-cream text-[10px] font-mono uppercase tracking-widest">Play</span>
                  </div>
                </div>
                <button onClick={() => toggleSound("feat2")} className="absolute bottom-3 right-3 z-30 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 transition-colors">
                  {activeSound !== "feat2" ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-cream font-semibold text-sm uppercase tracking-wider hover:text-red transition-colors group"
            >
              View All Work
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Marquee
        items={[
          "Brand Identity",
          "Web Design",
          "AI Employees",
          "Activations",
          "Motion",
          "Content",
        ]}
      />

      {/* ─── STATEMENT SECTION ─── */}
      <section
        className="statement-sec relative py-20 md:py-28 overflow-hidden border-t border-cream/5 w-full"
        style={{ backgroundImage: "url('/assets/images/culture-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-navy-dark/70" />
        <div className="relative z-10 section-padding max-w-7xl mx-auto">
          <p className="label-light mb-6 text-center">The Standard</p>
          <div className="flex flex-col items-center text-center gap-2">
            <span
              className="statement-line text-cream font-bold uppercase leading-none tracking-tight select-none"
              style={{ fontSize: "clamp(3rem, 12vw, 11rem)", letterSpacing: "-0.03em" }}
            >
              CULTURE
            </span>
            <span
              className="statement-line text-red font-bold uppercase leading-none tracking-tight select-none"
              style={{ fontSize: "clamp(3rem, 12vw, 11rem)", letterSpacing: "-0.03em" }}
            >
              IS THE
            </span>
            <span
              className="statement-line text-cream/20 font-bold uppercase leading-none tracking-tight select-none"
              style={{ fontSize: "clamp(3rem, 12vw, 11rem)", letterSpacing: "-0.03em" }}
            >
              MEDIUM.
            </span>
          </div>
        </div>
      </section>

      {/* ─── CTA STRIP ─── */}
      <section className="cta-strip bg-navy py-24 md:py-32 relative overflow-hidden">
        <FlowerWatermark className="w-[480px] md:w-[640px] left-1/2 -translate-x-1/2 -bottom-56 text-cream opacity-[0.05]" />
        <div className="cta-strip-content section-padding max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-display-md text-cream font-bold mb-6">
            Ready to turn your website into a growth tool?
          </h2>
          <p className="text-cream/60 text-lg mb-10 max-w-xl mx-auto">
            Tell us about your business, your goals, and what&apos;s slowing growth. 
            We&apos;ll show you the highest-impact opportunities first.
          </p>
          <Link href="/contact" className="btn-primary">
           Let&apos;s Grow
          </Link>
        </div>
      </section>


    </>
  );
}

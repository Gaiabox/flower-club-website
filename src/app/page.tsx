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
import SiteShowcase from "@/components/SiteShowcase";
import BrandFilm from "@/components/BrandFilm";
import HeroVideo from "@/components/HeroVideo";
import { websites } from "@/lib/portfolio";


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
  { title: "The Audit, AI Consulting", icon: "❖", href: "/services/audit" },
  { title: "AI Systems + Digital Employees", icon: "◎", href: "/services/digital-employees" },
  { title: "Web Design + Development", icon: "▣", href: "/services" },
  { title: "Brand Identity + Design", icon: "◈", href: "/services" },
  { title: "Video Production + AI Animation", icon: "◉", href: "/services" },
  { title: "Brand Activations", icon: "◆", href: "/services" },
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

      // Live client sites
      gsap.from(".site-card", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".sites-section",
          start: "top 78%",
        },
      });

      // In-house brand films
      gsap.from(".brand-film-card", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: ".films-section",
          start: "top 82%",
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
        {/* Hero background image (always present, poster on mobile, fallback under video on desktop) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}
        />
        {/* Hero background video, mounted on desktop only so phones never fetch it */}
        <HeroVideo
          src="/assets/videos/makers-mark-rev-run-teaser.mp4"
          poster="/assets/images/hero-bg.jpg"
        />
        {/* Dark overlay, keeps text legible */}
        <div className="absolute inset-0 bg-navy-dark/75" />
        {/* Subtle gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy-dark to-transparent" />

        <div className="relative z-10 text-center section-padding max-w-5xl mx-auto">
          <p className="label-light mb-6">Brand × AI Systems for Owners Who Built Something Real</p>
          <h1
            ref={headlineRef}
            className="text-display-xl text-cream font-bold mb-6"
          >
            Turn Website Visitors Into Customers.
          </h1>
          <p className="hero-sub text-cream/70 text-lg md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed w-full px-2">
            We make your business impossible to ignore, and impossible to
            out-operate. Brand on the outside, AI systems on the inside.
          </p>
          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/services/audit" className="btn-primary">
              Book the Audit
            </Link>
            <Link href="/work" className="btn-outline">
              See the Work
            </Link>
          </div>


        </div>

        {/* Work credit, what you're looking at IS the work */}
        <div className="absolute bottom-8 left-6 md:left-12 z-10 flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-red animate-pulse flex-shrink-0" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-cream/70 leading-relaxed">
            <span className="md:hidden">Our work: Pusha T listening party, produced by The Flower Club</span>
            <span className="hidden md:inline">Our work: Maker&apos;s Mark × Rev Run activation, produced by The Flower Club</span>
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
              { stat: <CountUp end={1000} suffix="+" />, key: "events", label: "Events Produced" },
              { stat: <CountUp end={50} suffix="+" />, key: "brands", label: "Brands Worked With" },
              { stat: "Fortune 500", key: "f500", label: <>to <b className="text-cream font-bold">Independent Artists</b></> },
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

      {/* ─── THE LADDER ─── */}
      <section id="audit" className="system-section bg-navy py-24 md:py-32 relative overflow-hidden">
        <FlowerWatermark className="w-[560px] md:w-[760px] -right-36 md:-right-48 -top-40 text-cream opacity-[0.04]" />
        <div className="section-padding max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <p className="label-light mb-4">The Growth System, Our Flagship Engagement</p>
            <h2 className="text-display-md text-cream font-bold">
              Four rungs.
              <br />
              Each one earns the next.
            </h2>
            <p className="text-cream/55 text-lg mt-5 max-w-2xl">
              Our premium path for owners who want the whole machine. Med spas,
              law firms, manufacturers, practices, artists, and everyone in
              between. We diagnose before we prescribe, and every finding is
              priced in dollars per year.
            </p>
            <p className="text-cream/45 text-base mt-4 max-w-2xl">
              Just need one thing done well, a website, a logo, a video, an
              activation? We do that too, no ladder required.{" "}
              <Link href="/services" className="text-cream underline decoration-red/60 underline-offset-4 hover:text-red transition-colors">
                See all services
              </Link>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {/* 01, The Audit */}
            <Link
              href="/services/audit"
              className="system-card group flex flex-col border border-cream/15 bg-navy-dark/60 p-8 rounded-sm hover:border-red/60 transition-colors duration-500"
            >
              <p className="font-mono text-red text-sm mb-5">01</p>
              <h3 className="text-cream font-bold text-2xl mb-1">The Audit</h3>
              <p className="font-mono text-cream/45 text-[11px] uppercase tracking-widest mb-4">
                from $2.5K · one-time
              </p>
              <p className="text-cream/60 text-sm leading-relaxed mb-6 flex-1">
                Paid diagnosis. We map how your business actually runs, find
                where it bleeds money, and hand you a roadmap priced in
                dollars per year. Scoped by complexity and task count.
              </p>
              <span className="inline-flex items-center gap-2 text-cream font-semibold text-xs uppercase tracking-wider group-hover:text-red transition-colors">
                Book the Audit
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>

            {/* 02, The Build */}
            <Link
              href="/services"
              className="system-card group flex flex-col border border-cream/15 bg-navy-dark/60 p-8 rounded-sm hover:border-red/60 transition-colors duration-500"
            >
              <p className="font-mono text-red text-sm mb-5">02</p>
              <h3 className="text-cream font-bold text-2xl mb-1">The Build</h3>
              <p className="font-mono text-cream/45 text-[11px] uppercase tracking-widest mb-4">
                from $4.5K · project
              </p>
              <p className="text-cream/60 text-sm leading-relaxed mb-6 flex-1">
                Whatever the audit prescribes: AI systems for intake,
                follow-up, and scheduling, plus the brand and website. Looking
                small is an operational problem too.
              </p>
              <span className="inline-flex items-center gap-2 text-cream font-semibold text-xs uppercase tracking-wider group-hover:text-red transition-colors">
                See the systems
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>

            {/* 03, AI Employees */}
            <Link
              href="/services/digital-employees"
              className="system-card group flex flex-col border border-cream/15 bg-navy-dark/60 p-8 rounded-sm hover:border-red/60 transition-colors duration-500"
            >
              <p className="font-mono text-red text-sm mb-5">03</p>
              <h3 className="text-cream font-bold text-2xl mb-1">AI Employees</h3>
              <p className="font-mono text-cream/45 text-[11px] uppercase tracking-widest mb-4">
                from $2.5K / month
              </p>
              <p className="text-cream/60 text-sm leading-relaxed mb-6 flex-1">
                The systems, staffed. Machines on payroll that answer in
                seconds, follow up every lead, and never call in sick -
                monitored and improved monthly.
              </p>
              <span className="inline-flex items-center gap-2 text-cream font-semibold text-xs uppercase tracking-wider group-hover:text-red transition-colors">
                Meet them
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>

            {/* 04, The Club */}
            <Link
              href="/contact"
              className="system-card group flex flex-col border border-gold/40 bg-navy-dark/60 p-8 rounded-sm hover:border-gold transition-colors duration-500"
              style={{ borderColor: "rgba(244,163,0,0.4)" }}
            >
              <p className="font-mono text-sm mb-5" style={{ color: "#F4A300" }}>04</p>
              <h3 className="text-cream font-bold text-2xl mb-1">The Club</h3>
              <p className="font-mono text-cream/45 text-[11px] uppercase tracking-widest mb-4">
                retainers from $2.5K / month
              </p>
              <p className="text-cream/60 text-sm leading-relaxed mb-6 flex-1">
                Membership. Your AI concierge, the call you make before any
                tech decision. Monthly counsel, vendor vetting, quarterly
                re-audits, first look at what&apos;s new.
              </p>
              <span className="inline-flex items-center gap-2 font-semibold text-xs uppercase tracking-wider transition-colors" style={{ color: "#F4A300" }}>
                Apply for membership
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          </div>

          <p className="text-cream/40 font-mono text-xs uppercase tracking-widest mt-10 text-center">
            The full system: Diagnose → Build → Staff → Belong. Single projects always welcome.
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
              href="/services/audit"
              className="inline-flex items-center gap-2 text-cream font-semibold text-sm uppercase tracking-wider hover:text-red transition-colors group"
            >
              Your site is the before. Book the Audit
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>


      {/* ─── LIVE CLIENT SITES ─── */}
      <section id="websites" className="sites-section bg-navy py-24 md:py-32 relative overflow-hidden">
        <FlowerWatermark className="w-[520px] md:w-[700px] -left-36 md:-left-44 -bottom-40 text-cream opacity-[0.04]" />
        <div className="section-padding max-w-7xl mx-auto relative z-10">
          <div className="mb-14">
            <p className="label-light mb-4">Live Client Sites</p>
            <h2 className="text-display-md text-cream font-bold">
              Built to sell,
              <br />
              not just to look good.
            </h2>
            <p className="text-cream/55 text-lg mt-5 max-w-2xl">
              Designed and coded from scratch, with the sales conversation built
              into the page. Go click around in them yourself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
            {websites.map((site) => (
              <SiteShowcase
                key={site.slug}
                href={site.url}
                image={site.image}
                alt={site.alt}
                client={site.client}
                title={site.title}
                description={site.description}
                tags={site.tags}
              />
            ))}
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

            {/* Right column, featured video */}
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
                  ambient={project.slug === "ai-animation-hero" || project.slug === "3d-animation-card"}
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
            {/* Horizontal video, flex 3 */}
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
            {/* Vertical video, flex 1, hidden on mobile to avoid 1700px height */}
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

      {/* ─── IN-HOUSE BRAND FILMS ─── */}
      <section id="films" className="films-section bg-navy-dark pb-24 md:pb-32">
        <div className="section-padding max-w-7xl mx-auto">
          <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <div>
              <p className="label-light mb-4">Made In-House</p>
              <h2 className="text-display-md text-cream font-bold">
                We test it on ourselves first.
              </h2>
            </div>
            <p className="text-cream/50 text-sm max-w-sm leading-relaxed">
              AI animation, character design, and motion, built for our own
              brand. The same pipeline we point at yours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl">
            <div className="brand-film-card">
              <BrandFilm
                src="/assets/videos/fc-bloomfire.mp4"
                poster="/assets/images/fc-bloomfire-thumb.jpg"
                title="Operation Bloomfire"
                meta="AI Animation · Character Design"
                aspect="3/4"
              />
            </div>
            <div className="brand-film-card">
              <BrandFilm
                src="/assets/videos/fc-hoops.mp4"
                poster="/assets/images/fc-hoops-thumb.jpg"
                title="Club Ball"
                meta="AI Animation · Brand Film"
                aspect="3/4"
              />
            </div>
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

      {/* ─── CTA STRIP ─── */}
      <section className="cta-strip bg-navy py-24 md:py-32 relative overflow-hidden">
        <FlowerWatermark className="w-[480px] md:w-[640px] left-1/2 -translate-x-1/2 -bottom-56 text-cream opacity-[0.05]" />
        <div className="cta-strip-content section-padding max-w-4xl mx-auto text-center relative z-10">
          <p className="label-light mb-4">Membership</p>
          <h2 className="text-display-md text-cream font-bold mb-6">
            Join the Club.
          </h2>
          <p className="text-cream/60 text-lg mb-10 max-w-xl mx-auto">
            The concierge seat: monthly counsel, vendor vetting, quarterly
            re-audits, and first look at every new AI capability, the call you
            make before any tech decision. Retainers from $2.5K/month.
            Members get their calls answered first.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-cream/30 text-cream font-semibold text-sm uppercase tracking-wider hover:bg-cream/10 transition-all duration-300 rounded-sm"
          >
            Apply for Membership
          </Link>

          <div className="mt-14 pt-10 border-t border-cream/10">
            <p className="text-cream/50 text-sm mb-5 font-mono uppercase tracking-widest">
              Every membership starts the same way
            </p>
            <Link href="/services/audit" className="btn-primary">
              Book the Audit
            </Link>
          </div>
        </div>
      </section>


    </>
  );
}

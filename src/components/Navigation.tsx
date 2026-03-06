"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FlowerLogo from "@/components/FlowerLogo";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Pages with light (cream) background — nav text must be dark when unscrolled
  const lightBgPages = ["/services", "/contact", "/about"];
  const isLightPage = lightBgPages.includes(pathname);

  const links = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-dark/95 backdrop-blur-md py-4"
          : isLightPage
          ? "bg-cream/95 backdrop-blur-sm py-6 border-b border-navy/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="section-padding flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50">
          <span className="text-cream text-xl">
            <FlowerLogo />
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${
                !scrolled && isLightPage
                  ? "!text-navy hover:!text-red"
                  : pathname === link.href
                  ? "!text-cream"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className={`!py-3 !px-6 !text-xs ${!scrolled && isLightPage ? "border border-navy text-navy font-bold uppercase tracking-widest text-xs px-6 py-3 hover:bg-navy hover:text-cream transition-colors" : "btn-primary"}`}>
            Start a Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden relative z-50 w-8 h-8 flex flex-col justify-center gap-1.5 ${!scrolled && isLightPage ? "[&>span]:bg-navy" : ""}`}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-full h-0.5 bg-cream transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-1" : ""
            }`}
          />
          <span
            className={`block w-full h-0.5 bg-cream transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-1" : ""
            }`}
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-navy-dark z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
            mobileOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-cream text-display-sm font-bold uppercase tracking-wider hover:text-red transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary mt-4">
            Start a Project
          </Link>
        </div>
      </div>
    </nav>
  );
}

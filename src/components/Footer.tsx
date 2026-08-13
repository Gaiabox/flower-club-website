import Link from "next/link";
import FlowerLogo from "@/components/FlowerLogo";
import NewsletterForm from "@/components/NewsletterForm";
import { SITE } from "@/lib/seo";

const pages = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { href: "/services", label: "Web Design + Development" },
  { href: "/services/digital-employees", label: "AI Employees" },
  { href: "/services", label: "Brand Identity" },
  { href: "/services", label: "Brand Activations" },
  { href: "/services", label: "Video + AI Animation" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-cream/10 relative overflow-hidden">
      <div className="section-padding max-w-7xl mx-auto pt-16 md:pt-20 pb-8">

        {/* Big wordmark */}
        <Link href="/" className="block text-cream hover:text-cream/80 transition-colors">
          <span className="text-3xl sm:text-4xl md:text-6xl">
            <FlowerLogo />
          </span>
        </Link>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-14 md:mt-16">
          <div>
            <p className="label-light mb-5">Explore</p>
            <ul className="space-y-3">
              {pages.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-cream transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-light mb-5">Services</p>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-cream transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2">
            <p className="label-light mb-5">Start a Conversation</p>
            <Link
              href="/services/audit"
              className="inline-flex items-center gap-3 text-cream text-lg md:text-2xl font-bold hover:text-red transition-colors group"
            >
              Book the Audit
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <p className="text-cream/40 text-sm mt-6 leading-relaxed">
              Charlotte, NC, serving Miami, New York, Los Angeles, and
              everywhere in between.
            </p>
            <div className="mt-8">
              <p className="label-light mb-3">Owner&apos;s Notes</p>
              <p className="text-cream/50 text-sm mb-3 leading-relaxed">
                Short, occasional notes on brand and AI moves that make
                owner-run businesses money. No spam, unsubscribe anytime.
              </p>
              <NewsletterForm />
            </div>
            <div className="flex gap-6 mt-6">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/60 hover:text-cream transition-colors text-xs font-mono uppercase tracking-widest"
              >
                Instagram
              </a>
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/60 hover:text-cream transition-colors text-xs font-mono uppercase tracking-widest"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-16 pt-6 border-t border-cream/10">
          <p className="text-cream/40 text-[11px] font-mono uppercase tracking-wider">
            © {new Date().getFullYear()} The Flower Club. All rights reserved.
          </p>
          <p className="text-cream/40 text-[11px] font-mono uppercase tracking-wider">
            Culture-forward. Results-driven.
          </p>
        </div>
      </div>
    </footer>
  );
}

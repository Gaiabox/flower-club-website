import Link from "next/link";
import FlowerLogo from "@/components/FlowerLogo";

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-cream/10 section-padding py-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Left — brand */}
        <div className="flex items-center gap-2">
          <FlowerLogo />
        </div>

        {/* Center — nav */}
        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2">
          {[
            { href: "/", label: "Home" },
            { href: "/work", label: "Work" },
            { href: "/services", label: "Services" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-white/70 transition-colors text-[11px] font-mono uppercase tracking-wider"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right — copyright */}
        <p className="text-white text-[10px] font-mono">
          © {new Date().getFullYear()} The Flower Club. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

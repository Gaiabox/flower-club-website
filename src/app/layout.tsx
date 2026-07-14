import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";
import BudChat from "@/components/BudChat";
import { OrgSchema, WebsiteSchema } from "@/components/JsonLd";
import { SITE } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: "AI Consulting, Web Design & AI Employees | The Flower Club, Charlotte NC",
    template: "%s | The Flower Club",
  },
  description:
    "AI audits from $2.5K, system builds, AI employees & brand design for owner-run businesses, med spas, law firms, manufacturers. Charlotte NC agency trusted by Bacardi, Red Bull & Maker's Mark.",
  metadataBase: new URL(SITE.url),
  alternates: { canonical: SITE.url },
  openGraph: {
    title: "We build brands people remember.",
    description:
      "Charlotte NC creative agency, conversion-focused web design, AI employees, brand identity, activations, video production & AI animation. Fortune 500 to rising brands.",
    url: SITE.url,
    siteName: "The Flower Club",
    images: [{ url: `${SITE.url}/og-card.jpg`, width: 1200, height: 630 }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "We build brands people remember.",
    description:
      "Charlotte NC creative agency, web design, AI employees, brand identity, activations, video & AI animation.",
    images: [`${SITE.url}/og-card.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TTQBGTVGV9"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TTQBGTVGV9');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <Preloader />
        <CustomCursor />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <BudChat />
        <OrgSchema />
        <WebsiteSchema />
      </body>
    </html>
  );
}

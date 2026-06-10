import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";
import { OrgSchema, WebsiteSchema } from "@/components/JsonLd";
import { SITE } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: "Web Design & AI Employees for Business | The Flower Club — Charlotte NC",
    template: "%s | The Flower Club",
  },
  description:
    "The Flower Club builds conversion-focused websites, then installs AI employees behind them — lead follow-up, scheduling, intake. Charlotte NC creative agency also serving Miami, New York & LA. Brand activations for Bacardi, Red Bull & more.",
  metadataBase: new URL(SITE.url),
  alternates: { canonical: SITE.url },
  openGraph: {
    title: "Web Design & AI Employees for Business | The Flower Club",
    description:
      "Websites built to convert. AI employees built to run the busywork behind them. Charlotte NC · Miami · New York · LA.",
    url: SITE.url,
    siteName: "The Flower Club",
    images: [{ url: `${SITE.url}/og-image.jpg`, width: 1200, height: 630 }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & AI Employees for Business | The Flower Club",
    description:
      "Websites built to convert. AI employees built to run the busywork behind them.",
    images: [`${SITE.url}/og-image.jpg`],
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
        <OrgSchema />
        <WebsiteSchema />
      </body>
    </html>
  );
}

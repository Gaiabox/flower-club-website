import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import PrivacyControls from "@/components/PrivacyControls";
import ScrollToTop from "@/components/ScrollToTop";
import BudChat from "@/components/BudChat";
import { OrgSchema, WebsiteSchema } from "@/components/JsonLd";
import { SITE } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: "Brand & Digital Design, Websites & AI Systems | The Flower Club",
    template: "%s | The Flower Club",
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  alternates: { canonical: SITE.url },
  openGraph: {
    title: "Brand & Digital Design, Websites & AI Systems | The Flower Club",
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: [{ url: `${SITE.url}/og-card.jpg`, width: 1200, height: 630 }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand & Digital Design, Websites & AI Systems | The Flower Club",
    description: SITE.description,
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
      <body className="antialiased">
        <Preloader />
        <PrivacyControls />
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

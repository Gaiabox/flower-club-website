import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Flower Club — Culture-Forward Creative Agency | Charlotte · Miami · New York · LA",
  description:
    "Full-service creative agency for Fortune 500 brands and independent artists. Brand activations, AI animation, web design, video production, and graphic design across Charlotte NC, Miami FL, New York NY, and Los Angeles CA.",
  metadataBase: new URL("https://theflowerclub.co"),
  openGraph: {
    title: "The Flower Club — Culture-Forward Creative Agency",
    description: "Full-service creative agency. Brand activations, AI animation, web design & video production. Charlotte · Miami · New York · LA",
    url: "https://theflowerclub.co",
    siteName: "The Flower Club",
    images: [{ url: "https://theflowerclub.co/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Flower Club — Culture-Forward Creative Agency",
    description: "Brand activations, AI animation, web design & video production.",
    images: ["https://theflowerclub.co/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

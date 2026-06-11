import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";
import { ServicesSchema } from "@/components/JsonLd";
import { buildMeta } from "@/lib/seo";

export const metadata: Metadata = buildMeta({
  title: "Services — Web Design, AI Employees, Brand Activations & More",
  description:
    "Conversion-focused web design, AI-powered digital employees, brand identity, video production, AI animation, and brand activations. Charlotte NC creative agency serving clients nationwide.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <ServicesClient />
      <ServicesSchema />
    </>
  );
}

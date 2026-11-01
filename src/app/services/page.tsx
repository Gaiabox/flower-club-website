import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";
import { ServicesSchema } from "@/components/JsonLd";
import { buildMeta } from "@/lib/seo";

export const metadata: Metadata = buildMeta({
  title: "Services, Brand Identity, Websites & Creative Production",
  description:
    "Brand identity, custom websites, content and experiences, and business automation. Explore how The Flower Club can support your next project.",
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

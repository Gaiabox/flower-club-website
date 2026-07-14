import type { Metadata } from "next";
import WorkClient from "./WorkClient";
import { WorkSchema } from "@/components/JsonLd";
import { buildMeta } from "@/lib/seo";

export const metadata: Metadata = buildMeta({
  title: "Work, Brand Activations, AI Animation & Design Portfolio",
  description:
    "Selected work for Bacardi, Red Bull, Maker's Mark, Popeyes, and independent artists, brand activations, AI animation, video production, and design by The Flower Club.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <WorkClient />
      <WorkSchema />
    </>
  );
}

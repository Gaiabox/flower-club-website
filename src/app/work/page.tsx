import type { Metadata } from "next";
import WorkClient from "./WorkClient";
import { WorkSchema } from "@/components/JsonLd";
import { buildMeta } from "@/lib/seo";

export const metadata: Metadata = buildMeta({
  title: "Work, Websites, Brand Identities & Experiences",
  description:
    "Explore websites, visual identities, video, and brand experiences from The Flower Club, plus in-house motion and AI-assisted creative studies.",
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

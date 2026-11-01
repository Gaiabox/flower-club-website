import type { Metadata } from "next";
import { buildMeta } from "@/lib/seo";
export const metadata: Metadata = buildMeta({
  title: "Start a Project",
  description:
    "Tell The Flower Club about your brand identity, website, content, or business automation project. Share your goals, timeline, and budget.",
  path: "/contact",
});
export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

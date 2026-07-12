import type { Metadata } from "next";
import AuditClient from "./AuditClient";
import { buildMeta } from "@/lib/seo";

export const metadata: Metadata = buildMeta({
  title: "AI Audit for Med Spas, Law Firms & Manufacturers — From $2,500",
  description:
    "Paid AI consulting audit for owner-run businesses: we map how your business runs, find where it bleeds money, and deliver a roadmap with every fix priced in dollars per year. From $2,500, scoped by complexity. Charlotte NC, serving nationwide.",
  path: "/services/audit",
});

export default function AuditPage() {
  return <AuditClient />;
}

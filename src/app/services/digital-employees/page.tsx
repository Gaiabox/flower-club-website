import type { Metadata } from "next";
import DigitalEmployeesClient from "./DigitalEmployeesClient";
import { buildMeta } from "@/lib/seo";

export const metadata: Metadata = buildMeta({
  title: "Business Automation & AI Workflows",
  description:
    "Custom workflows for intake, follow-up, scheduling, reporting, and recurring administration. Scoped around your tools, team, and review needs.",
  path: "/services/digital-employees",
});

export default function DigitalEmployeesPage() {
  return <DigitalEmployeesClient />;
}

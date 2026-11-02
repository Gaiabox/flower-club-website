import type { Metadata } from "next";
import AuditClient from "./AuditClient";
import { auditFaq } from "./faq";
import { buildMeta } from "@/lib/seo";

export const metadata: Metadata = buildMeta({
  title: "Business Automation Audit, From $2,500",
  description:
    "A focused review of your business workflows, with prioritized automation opportunities, estimated value, and a practical roadmap. From $2,500.",
  path: "/services/audit",
});

export default function AuditPage() {
  return (
    <>
      <AuditClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: auditFaq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}

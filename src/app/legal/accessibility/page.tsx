import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { buildMeta } from "@/lib/seo";
export const metadata: Metadata = buildMeta({
  title: "Accessibility",
  description:
    "Contact The Flower Club about accessibility barriers and request an alternative way to review our work or discuss a project.",
  path: "/legal/accessibility",
});
export default function AccessibilityPage() {
  return (
    <LegalPage title="Accessibility">
      <section>
        <h2>Access to our work and services</h2>
        <p>
          We aim to make our website usable with keyboards, readable text,
          descriptive links, and reduced-motion preferences. We have not
          completed an independent audit confirming conformance with every
          accessibility standard. This statement is not a claim of WCAG or legal
          certification.
        </p>
      </section>
      <section>
        <h2>Tell us about a barrier</h2>
        <p>
          If a page, form, video, or interaction prevents you from reviewing our
          work or discussing a project, use the contact page and identify the
          issue as an accessibility request. Include the page address, the task
          you were trying to complete, and any browser or assistive technology
          details you choose to share. Please omit sensitive personal
          information.
        </p>
      </section>
      <section>
        <h2>Alternative formats</h2>
        <p>
          You can request a text description of portfolio media or an
          alternative way to discuss a service. We will review the request and
          work with you on an accessible alternative. External client websites
          linked in the portfolio are operated independently.
        </p>
      </section>
    </LegalPage>
  );
}

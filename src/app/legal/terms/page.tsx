import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { buildMeta } from "@/lib/seo";
export const metadata: Metadata = buildMeta({
  title: "Website Terms",
  description:
    "Terms for using The Flower Club website and understanding its portfolio and service information.",
  path: "/legal/terms",
});
export default function TermsPage() {
  return (
    <LegalPage title="Website Terms">
      <section>
        <h2>Website use and service agreements</h2>
        <p>
          These terms describe use of The Flower Club’s website. The site
          presents our services and selected work. An inquiry, chat response,
          website description, or starting price is not a binding project
          proposal, service agreement, or promise of availability. Paid
          engagements require a separate agreement identifying the contracting
          parties, scope, fees, schedule, and responsibilities. That agreement
          governs the engagement and controls if it conflicts with general
          website information.
        </p>
      </section>
      <section>
        <h2>Pricing, scope, and results</h2>
        <p>
          Starting prices are indicative minimums for the stated service and
          remain subject to a written scope. Taxes, software, hosting, licenses,
          maintenance, and other third-party costs are addressed in the proposal
          where applicable. No website statement guarantees revenue, leads,
          rankings, savings, uninterrupted operation, or a specific business
          result. Estimates depend on their stated assumptions and results vary.
        </p>
      </section>
      <section>
        <h2>Portfolio, ownership, and credits</h2>
        <p>
          Our portfolio contains selected design, development, production, and
          activation work, along with clearly labeled in-house creative studies.
          A project’s description identifies the scope presented; showing a
          project does not claim authorship of every underlying image,
          performance, product, campaign element, or brand. Client names,
          trademarks, artwork, photography, music, and other third-party
          materials remain the property of their respective rights holders.
          Display does not imply their endorsement of every service offered
          here.
        </p>
        <p>
          You may view and link to the site for ordinary personal or business
          evaluation. You may not copy, resell, republish, or use portfolio
          assets commercially without the relevant rights holder’s permission.
          Ownership and licenses for commissioned deliverables are governed by
          the project agreement, including any third-party asset and AI-tool
          terms.
        </p>
      </section>
      <section>
        <h2>AI, automation, and demonstrations</h2>
        <p>
          We may use AI-assisted tools in creative production and business
          workflows as scoped. Outputs can contain errors and may require human
          review. Automation examples labeled illustrative explain a possible
          process; they are not client performance results or proof of a
          deployed system. Bud is a scripted inquiry form. It does not provide
          legal, medical, financial, or other professional advice. Sensitive or
          regulated workflows require a separate assessment and written scope.
        </p>
      </section>
      <section>
        <h2>Submissions and acceptable use</h2>
        <p>
          Provide accurate contact information and submit only content you are
          entitled to share. Do not submit confidential or sensitive material
          before an appropriate agreement and secure exchange are established.
          Do not interfere with the website, attempt unauthorized access, submit
          unlawful content, impersonate others, or use forms for unsolicited
          promotions.
        </p>
      </section>
      <section>
        <h2>External sites and availability</h2>
        <p>
          Links to client sites and external resources are provided for context.
          Their operators control their content, availability, products, and
          privacy practices. Website information may change and may contain
          errors. To the extent permitted by applicable law, the website is
          provided as available without warranties concerning its completeness,
          fitness for a particular purpose, or uninterrupted operation.
        </p>
      </section>
      <section>
        <h2>Legal limits and applicable law</h2>
        <p>
          To the extent permitted by law, The Flower Club is not responsible for
          indirect or consequential losses arising solely from use of this
          informational website. This does not exclude liability or remedies
          that cannot lawfully be excluded, or replace obligations in a signed
          service agreement. Nothing in these terms waives non-waivable consumer
          rights.
        </p>
        <p>
          North Carolina law applies to these website terms to the extent
          permitted by applicable law, subject to any mandatory protections that
          apply where you reside. Disputes about paid services are addressed in
          the applicable service agreement.
        </p>
      </section>
      <section>
        <h2>Questions and updates</h2>
        <p>
          Contact us about website errors, ownership concerns, or these terms
          through the contact page. We may revise the terms and update the
          effective date. Changes to a signed project agreement follow that
          agreement’s change process.
        </p>
      </section>
    </LegalPage>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { buildMeta } from "@/lib/seo";
export const metadata: Metadata = buildMeta({
  title: "Privacy & Cookies",
  description:
    "How The Flower Club website handles inquiries, analytics, cookies, and privacy requests.",
  path: "/legal/privacy",
});
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy & Cookies">
      <section>
        <h2>Who this policy covers</h2>
        <p>
          This policy describes information handled through The Flower Club
          website at theflowerclub.design, including its contact form and Bud,
          our scripted project intake assistant. It does not describe the
          independent practices of client sites or other sites linked from our
          portfolio.
        </p>
      </section>
      <section>
        <h2>Information you provide</h2>
        <p>
          The contact form collects your name, email, optional company and
          budget, project type, and message. Bud collects the name, email,
          service, budget, and project details you choose to provide. Bud is a
          guided form, not a person or a generative AI advisor.
        </p>
        <p>
          We use inquiry information to respond, evaluate a potential project,
          prepare a proposal, and manage related business communications.
          Sending an inquiry does not subscribe you to marketing. Do not send
          passwords, payment card information, health information, government
          identifiers, or other sensitive or confidential material through these
          forms.
        </p>
      </section>
      <section>
        <h2>Hosting, forms, and recipients</h2>
        <p>
          Netlify hosts the website and processes form submissions for our team.
          Hosting and delivery systems can process technical information such as
          IP addresses, request times, device and browser information, and
          security logs. Authorized team members and service providers may
          access information as needed to operate the site and respond to
          requests. These providers may process data in the United States or
          other countries where they operate.
        </p>
        <p>
          This version of the contact form sends submissions to Netlify Forms.
          It does not send a duplicate to the previous temporary automation
          webhook. We do not sell inquiry information or use this website to
          share it for cross-context behavioral advertising. Information may
          also be disclosed when required by law or reasonably needed to protect
          rights, security, or prevent misuse.
        </p>
      </section>
      <section>
        <h2>Optional Google Analytics</h2>
        <p>
          Google Analytics loads only after you accept optional analytics. It
          can process usage events, page paths, browser and device information,
          approximate location derived from IP information, and cookie
          identifiers. We use these reports to understand site use and inquiry
          steps. Our event code does not include form contents, names, email
          addresses, or message text. We disable Google signals and advertising
          personalization in the site configuration.
        </p>
        <p>
          For this website’s analytics page events, we send the page path
          without query strings. Google’s processing is described in its{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          . The site does not load Google Analytics when you decline, before a
          choice, or after a saved choice expires.
        </p>
      </section>
      <section>
        <h2>Cookies and browser storage</h2>
        <p>
          We store your analytics choice in browser local storage under
          fc-analytics-choice for up to 180 days. This is necessary to remember
          your selection. If you accept, Google Analytics may set cookies such
          as _ga and _ga_ identifiers; their duration depends on the analytics
          configuration and browser controls. You can change your choice through
          Cookie Settings in the footer. Declining after acceptance withdraws
          future analytics permission, removes accessible Google Analytics
          cookies for this site, and reloads the page. It does not erase
          information already processed by Google.
        </p>
        <p>
          You can also use browser settings to block or delete cookies and
          storage. Doing so may reset your saved preference. Third-party sites
          you open have their own controls.
        </p>
      </section>
      <section>
        <h2>Retention and security</h2>
        <p>
          We retain inquiry records as needed to handle the request, maintain
          relevant business records, resolve disputes, and meet applicable legal
          obligations. Retention depends on the nature of the record and the
          relationship. You can request deletion through the contact form. We
          evaluate requests against applicable recordkeeping obligations and
          available provider controls.
        </p>
        <p>
          No internet transmission or storage system is completely secure.
          Please limit what you submit. A service engagement requiring
          confidential information should use a separately agreed process and
          agreement.
        </p>
      </section>
      <section>
        <h2>Your requests and choices</h2>
        <p>
          Depending on your location and applicable law, you may have rights to
          access, correct, delete, or receive information about your personal
          data, or to object to certain processing. Use our{" "}
          <Link href="/contact">contact form</Link> and identify your request as
          a privacy request. We may need to verify your identity before acting.
          Applicable rights, exceptions, verification requirements, and response
          periods depend on the law governing your request.
        </p>
      </section>
      <section>
        <h2>Children and policy changes</h2>
        <p>
          This is a business services website intended for adults. It is not
          directed to children under 13. If you believe a child submitted
          personal information, contact us so we can investigate. We may update
          this policy as the site changes and will update the effective date.
          Material changes requiring additional notice or consent will be
          handled as applicable.
        </p>
      </section>
    </LegalPage>
  );
}

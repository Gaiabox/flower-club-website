import Link from "next/link";
import { auditFaq } from "./faq";
const steps = [
  {
    title: "Define the goal",
    body: "Choose the workflow and the problem to solve, such as slow inquiry follow-up or repetitive reporting.",
  },
  {
    title: "Map the work",
    body: "Talk with the people doing the work. Document the steps, tools, handoffs, and exceptions.",
  },
  {
    title: "Assess the options",
    body: "Identify where a simpler process, a standard automation, or an AI-assisted workflow could help.",
  },
  {
    title: "Estimate the value",
    body: "Compare potential time savings with build and running costs. Make the assumptions and limitations explicit.",
  },
  {
    title: "Set priorities",
    body: "Rank opportunities by usefulness, effort, dependencies, and the review they need.",
  },
  {
    title: "Plan the next step",
    body: "Deliver a roadmap with a recommended first project, measures of success, and implementation considerations.",
  },
];
export default function AuditClient() {
  return (
    <div className="bg-cream pt-36 pb-24">
      <div className="section-padding max-w-6xl mx-auto">
        <header className="max-w-4xl mb-20">
          <p className="label mb-4">Business Automation · Discovery</p>
          <h1 className="text-display-xl text-navy font-bold mb-6">
            Know what to automate before you invest.
          </h1>
          <p className="text-navy/75 text-xl leading-relaxed mb-6">
            A focused review of how work moves through your business. We
            identify repetitive tasks, assess where automation can help, and
            give you a practical roadmap for what to build first.
          </p>
          <p className="text-navy font-semibold text-lg mb-8">
            From $2,500. Typically two to three weeks, with scope and timing
            agreed before kickoff.
          </p>
          <Link href="/contact?type=audit" className="btn-primary">
            Discuss an Audit
          </Link>
          <p className="text-navy/70 mt-6">
            Planning a brand, website, or content project?{" "}
            <Link href="/contact" className="underline underline-offset-4">
              Start a project conversation
            </Link>
            . An audit is not required.
          </p>
        </header>
        <section className="mb-20">
          <h2 className="text-display-sm text-navy font-bold mb-8">
            A closer look at the work behind the business.
          </h2>
          <p className="text-navy/75 text-lg leading-relaxed max-w-3xl mb-10">
            This service is for teams with recurring intake, follow-up,
            scheduling, reporting, or administrative work. We begin with a
            specific problem and the people affected by it.
          </p>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {steps.map((step) => (
              <div key={step.title} className="border-t border-navy/20 pt-6">
                <h3 className="text-navy font-bold text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-navy/70 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-20 bg-navy p-8 md:p-12">
          <h2 className="text-display-sm text-cream font-bold mb-6">
            What you receive.
          </h2>
          <ul className="text-cream/80 text-lg space-y-4">
            {[
              "A map of the workflows reviewed",
              "Prioritized opportunities with estimated value and stated assumptions",
              "A recommended first project and measures of success",
              "Implementation considerations, dependencies, and human review points",
              "A findings walkthrough and a roadmap you can use with any implementation team",
            ].map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>
        <section className="max-w-4xl mb-16">
          <h2 className="text-display-sm text-navy font-bold mb-8">
            Before we begin.
          </h2>
          {auditFaq.map((faq) => (
            <div key={faq.q} className="border-t border-navy/20 py-6">
              <h3 className="text-navy font-bold text-xl mb-3">{faq.q}</h3>
              <p className="text-navy/70 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </section>
        <section className="border-t border-navy/20 pt-12">
          <h2 className="text-display-sm text-navy font-bold mb-5">
            Start with the workflow you want to improve.
          </h2>
          <p className="text-navy/70 text-lg mb-8">
            Tell us what takes too much time and where the handoffs break down.
            We will discuss whether an audit is the right next step.
          </p>
          <Link href="/contact?type=audit" className="btn-primary">
            Discuss an Audit
          </Link>
        </section>
      </div>
    </div>
  );
}

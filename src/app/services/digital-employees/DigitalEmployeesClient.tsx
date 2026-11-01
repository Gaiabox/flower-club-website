import Link from "next/link";
const workflows = [
  {
    title: "Intake and lead follow-up",
    body: "Collect the details you need, route inquiries, and trigger follow-up steps so the next person has useful context.",
  },
  {
    title: "Scheduling and reminders",
    body: "Connect inquiry and appointment workflows, send confirmations, and flag changes that need a person to respond.",
  },
  {
    title: "Reporting and summaries",
    body: "Bring information from agreed sources into recurring reports, with review before important decisions or communication.",
  },
  {
    title: "Recurring administration",
    body: "Connect repetitive tasks across your tools and define how exceptions are identified and handled.",
  },
];
export default function DigitalEmployeesClient() {
  return (
    <div className="bg-cream pt-36 pb-24">
      <div className="section-padding max-w-6xl mx-auto">
        <header className="max-w-4xl mb-20">
          <p className="label mb-4">Business Automation</p>
          <h1 className="text-display-xl text-navy font-bold mb-6">
            Less repetitive work. Clearer handoffs.
          </h1>
          <p className="text-navy/75 text-xl leading-relaxed mb-8">
            We build connected workflows for intake, lead follow-up, scheduling,
            reporting, and administration. AI is one tool we can use within a
            defined process, with human review where it matters.
          </p>
          <Link href="/contact?type=automation" className="btn-primary">
            Discuss Automation
          </Link>
        </header>
        <section className="grid md:grid-cols-2 gap-10 mb-20 border-t border-navy/20 pt-10">
          <div>
            <h2 className="text-display-sm text-navy font-bold mb-5">
              A new inquiry should start the next step.
            </h2>
            <p className="text-navy/75 text-lg leading-relaxed">
              When a customer reaches out, the details need to reach the right
              person. We connect the form, customer record, notifications, and
              follow-up process so your team can respond with context.
            </p>
            <p className="text-navy/75 mt-5">
              If you are copying the same information between tools or losing
              track of who needs a response, start with that workflow.
            </p>
          </div>
          <div className="bg-navy p-8">
            <p className="label-light mb-4">Related Work · Website + CRM</p>
            <h3 className="text-cream font-bold text-2xl mb-4">
              Fire &amp; Ash Cigar Carts
            </h3>
            <p className="text-cream/80 leading-relaxed mb-6">
              We built a product configurator that sends a visitor’s choices
              into HubSpot with their inquiry. It gives the sales conversation a
              starting point. This is a connected website workflow, not a claim
              of an AI deployment or measured time savings.
            </p>
            <Link
              href="/work/fire-and-ash-cigar-carts"
              className="text-cream underline underline-offset-4"
            >
              See what we built →
            </Link>
          </div>
        </section>
        <section className="mb-20">
          <h2 className="text-display-sm text-navy font-bold mb-6">
            Start with a task your team knows well.
          </h2>
          <p className="text-navy/70 text-lg max-w-3xl mb-10">
            These are examples of workflows we can scope. The connections,
            permissions, and level of automation depend on your tools and how
            the task works.
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            {workflows.map((item) => (
              <div key={item.title} className="border-t border-navy/20 pt-6">
                <h3 className="text-navy font-bold text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-navy/70 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="grid md:grid-cols-2 gap-12 mb-20">
          <h2 className="text-display-sm text-navy font-bold">
            Define the process, then build the system.
          </h2>
          <div className="text-navy/75 text-lg leading-relaxed">
            <p>
              We agree on the task, inputs, expected output, and measures of
              success. Then we connect the tools, test the workflow, and
              document where a person reviews or takes over.
            </p>
            <p className="mt-5">
              We choose the hosting and access setup around the work. Ongoing
              monitoring, maintenance, and changes are defined in the support
              scope.
            </p>
          </div>
        </section>
        <section className="bg-navy p-8 md:p-12 mb-20">
          <h2 className="text-display-sm text-cream font-bold mb-6">
            A focused build or ongoing support.
          </h2>
          <p className="text-cream/80 text-lg leading-relaxed max-w-3xl">
            System builds start at $4,500. Ongoing support retainers start at
            $2,500 per month. We confirm deliverables, running costs,
            responsibilities, and support before work begins.
          </p>
          <p className="text-cream/75 mt-6 max-w-3xl">
            If you need to decide which workflows to address, our{" "}
            <Link
              href="/services/audit"
              className="text-cream underline underline-offset-4"
            >
              automation audit starts at $2,500
            </Link>
            . If the task is already clear, we can discuss the build directly.
          </p>
        </section>
        <section className="mb-20">
          <h2 className="text-navy font-bold text-2xl mb-4">
            Looking for AI-assisted creative production?
          </h2>
          <p className="text-navy/70 text-lg max-w-3xl">
            Animation, brand films, and motion design sit within{" "}
            <Link
              href="/services#content-experiences"
              className="underline underline-offset-4"
            >
              Content &amp; Experiences
            </Link>
            . That is a different service from automating business workflows.
          </p>
        </section>
        <section className="mb-16">
          <h2 className="text-navy text-3xl font-bold mb-6">
            Questions before you automate.
          </h2>
          {[
            [
              "Do we need to replace all our tools?",
              "We start with the tools you already use and assess their integration options. The proposal identifies any new services, subscriptions, or access required.",
            ],
            [
              "Will AI send messages or make decisions without review?",
              "We agree on the permissions, approval steps, and handoffs before building. The level of automation depends on the task and the consequences of an error.",
            ],
            [
              "Can you promise a specific amount of savings?",
              "No. We define a baseline and measures of success for the workflow. Estimates depend on actual task volume, tool costs, and adoption.",
            ],
            [
              "Do I need the paid audit first?",
              "Only if discovery is needed to choose or define the workflow. If the task and requirements are clear, we can scope a build directly.",
            ],
          ].map(([question, answer]) => (
            <details className="border-t border-navy/20 py-5" key={question}>
              <summary className="font-bold text-navy text-lg cursor-pointer">
                {question}
              </summary>
              <p className="text-navy/75 leading-relaxed mt-4">{answer}</p>
            </details>
          ))}
        </section>
        <section className="border-t border-navy/20 pt-12">
          <h2 className="text-display-sm text-navy font-bold mb-6">
            What would you like to take off your team&apos;s plate?
          </h2>
          <Link href="/contact?type=automation" className="btn-primary">
            Discuss Automation
          </Link>
        </section>
      </div>
    </div>
  );
}

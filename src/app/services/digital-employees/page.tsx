"use client";

import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlueprintDecor from "@/components/BlueprintDecor";

gsap.registerPlugin(ScrollTrigger);

const supportAreas = [
  "Lead follow-up",
  "Intake and qualification",
  "Appointment scheduling",
  "Reporting and summaries",
  "Customer communication",
  "Internal admin",
  "Content operations",
  "Recurring back-office tasks",
];

const buildPrinciples = [
  "Built around how your business already works",
  "Designed to reduce friction, not add complexity",
  "Deployed locally, in the cloud, or in a hybrid setup",
  "Human-guided where judgment matters",
];

const deploymentOptions = [
  {
    title: "Cloud",
    description:
      "Best for businesses that want flexibility, speed, and lighter infrastructure overhead.",
  },
  {
    title: "Local Hardware",
    description:
      "Best for businesses that want more control, more privacy, and systems that live closer to the business.",
  },
  {
    title: "Hybrid",
    description:
      "Best for businesses that want the balance of cloud scale and local control.",
  },
];

const outcomes = [
  "Faster response",
  "Smoother operations",
  "Less repetitive admin",
  "More consistency",
  "A business that can handle more without feeling heavier",
];

export default function DigitalEmployeesPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".de-hero", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".de-section-title", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".de-content",
          start: "top 80%",
        },
      });

      gsap.from(".de-card", {
        opacity: 0,
        y: 30,
        duration: 0.65,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".de-grid",
          start: "top 82%",
        },
      });

      gsap.from(".de-cta", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".de-cta",
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="blueprint-bg relative min-h-screen pt-32 pb-24 overflow-x-hidden">
      <BlueprintDecor />
      <div className="relative z-10 section-padding max-w-6xl mx-auto de-content">
        <section className="de-hero max-w-4xl mb-20 md:mb-24">
          <p className="label mb-4">AI-Powered Digital Employees</p>
          <h1 className="text-display-xl text-navy font-bold mb-6">
            Give your business a custom AI-powered support layer for the tasks
            that eat time and slow growth.
          </h1>
          <p className="text-navy/65 text-xl max-w-3xl leading-relaxed mb-6">
            We build AI-powered digital employees customized around your business
            to help handle repetitive operational work like follow-up,
            scheduling, intake, reporting, admin, and content support.
          </p>
          <p className="text-navy/55 text-lg max-w-3xl leading-relaxed">
            Built for real businesses. Deployed locally, in the cloud, or in a
            hybrid setup based on the level of control, privacy, and scale you
            need.
          </p>
        </section>

        <section className="mb-20 md:mb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="label de-section-title mb-4">What this actually means</p>
            <h2 className="text-display-sm text-navy font-bold de-section-title">
              Support systems built for how the business really runs.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-navy/65 text-lg leading-relaxed mb-6 de-section-title">
              AI-powered digital employees are custom business support systems
              designed to help your team handle repetitive work with more speed,
              consistency, and less friction.
            </p>
            <p className="text-navy/55 leading-relaxed mb-8 de-section-title">
              This is not about removing the human side of a business. It&apos;s
              about making repetitive work easier to manage and creating more
              room for the parts of the business that actually need human
              judgment.
            </p>
            <div className="de-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
              {supportAreas.map((item) => (
                <div
                  key={item}
                  className="de-card border border-navy/10 rounded-sm px-5 py-4 bg-white/40"
                >
                  <p className="text-navy font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-20 md:mb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="label de-section-title mb-4">Built around your business</p>
            <h2 className="text-display-sm text-navy font-bold de-section-title">
              No generic bot. No one-size-fits-all automation.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-navy/65 text-lg leading-relaxed mb-8 de-section-title">
              We look at how your business currently works, where time gets lost,
              where follow-up breaks down, where admin starts piling up, and
              where communication gets inconsistent. Then we build the right
              layer around that.
            </p>
            <div className="de-grid grid grid-cols-1 md:grid-cols-2 gap-4">
              {buildPrinciples.map((principle) => (
                <div
                  key={principle}
                  className="de-card border-t border-navy/15 py-5"
                >
                  <p className="text-navy text-lg leading-relaxed">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-20 md:mb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="label de-section-title mb-4">Deployment options</p>
            <h2 className="text-display-sm text-navy font-bold de-section-title">
              Built to fit the level of control and flexibility you need.
            </h2>
          </div>
          <div className="lg:col-span-7 de-grid grid grid-cols-1 md:grid-cols-3 gap-5">
            {deploymentOptions.map((option) => (
              <div
                key={option.title}
                className="de-card bg-navy text-cream rounded-sm p-6"
              >
                <p className="label-light mb-3">{option.title}</p>
                <p className="text-cream/75 leading-relaxed text-sm">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 md:mb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="label de-section-title mb-4">Start with the right layer</p>
            <h2 className="text-display-sm text-navy font-bold de-section-title">
              Some businesses are ready for AI support now. Some need the
              digital foundation fixed first.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-navy/65 text-lg leading-relaxed mb-5 de-section-title">
              If the website is weak, outdated, unclear, or not built to
              convert, we handle that first. If the front end is already solid,
              we build the AI-powered support layer on top.
            </p>
            <p className="text-navy/55 leading-relaxed de-section-title">
              A stronger operational layer works better when the business
              already has a clear digital front door.
            </p>
          </div>
        </section>

        <section className="mb-20 md:mb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="label de-section-title mb-4">Outcome</p>
            <h2 className="text-display-sm text-navy font-bold de-section-title">
              The point is simple: make the business easier to run.
            </h2>
          </div>
          <div className="lg:col-span-7 de-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
            {outcomes.map((outcome) => (
              <div
                key={outcome}
                className="de-card border border-navy/10 rounded-sm px-5 py-4 bg-white/40"
              >
                <p className="text-navy font-medium">{outcome}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="de-cta bg-navy rounded-sm p-10 md:p-14 text-center max-w-4xl mx-auto">
          <p className="label-light mb-4">Want to see where this fits?</p>
          <h2 className="text-display-sm text-cream font-bold mb-4">
            We&apos;ll look at your website, customer flow, and operational friction
            points, then show you what kind of system makes sense.
          </h2>
          <p className="text-cream/65 max-w-2xl mx-auto mb-8 leading-relaxed">
            Some businesses need a stronger digital foundation first. Some are
            ready for AI-powered support right now. We&apos;ll tell you which one is
            true, and why.
          </p>
          <Link href="/contact" className="btn-primary">
            Start a Conversation
          </Link>
        </section>
      </div>
    </div>
  );
}

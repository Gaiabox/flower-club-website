"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

const projectTypes = [
  "Brand Identity",
  "Web Design + Development",
  "Content Creation",
  "AI Animation + Video",
  "Graphic Design",
  "Event Creative",
  "Social Media Management",
  "SEO",
  "Multiple Services",
  "Not Sure Yet",
];

const budgetRanges = [
  "Under $5,000",
  "$5,000 — $15,000",
  "$15,000 — $30,000",
  "$30,000 — $50,000",
  "$50,000+",
  "Let's Discuss",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    budget: "",
    projectType: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-header", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".contact-form", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5,
      });

      gsap.from(".contact-info", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.7,
      });
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added post-launch
    alert(
      "Thanks for reaching out! We'll get back to you within 24 hours."
    );
  };

  return (
    <div className="bg-cream min-h-screen pt-32 pb-24">
      <div className="section-padding max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left — Header + Info */}
          <div className="lg:col-span-5">
            <div className="contact-header mb-12">
              <p className="label mb-4">Contact</p>
              <h1 className="text-display-lg text-navy font-bold mb-6">
                Let&apos;s Build.
              </h1>
              <p className="text-navy/60 text-lg leading-relaxed">
                Have a project in mind? Tell us about it. We respond within 24
                hours.
              </p>
            </div>

            <div className="contact-info space-y-8">
              <div>
                <p className="label mb-2">Email</p>
                <a
                  href="mailto:hello@theflowerclub.co"
                  className="text-navy font-semibold hover:text-red transition-colors"
                >
                  hello@theflowerclub.co
                </a>
              </div>

              <div>
                <p className="label mb-2">Based In</p>
                <p className="text-navy/70">Charlotte, NC</p>
              </div>

              <div>
                <p className="label mb-2">Response Time</p>
                <p className="text-navy/70">Within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="contact-form space-y-6"
            >
              {/* Name */}
              <div>
                <label className="label mb-2 block">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-transparent border-b-2 border-navy/20 py-3 text-navy focus:border-red outline-none transition-colors text-lg placeholder:text-navy/30"
                  placeholder="Your name"
                />
              </div>

              {/* Company */}
              <div>
                <label className="label mb-2 block">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full bg-transparent border-b-2 border-navy/20 py-3 text-navy focus:border-red outline-none transition-colors text-lg placeholder:text-navy/30"
                  placeholder="Company or brand name"
                />
              </div>

              {/* Project Type */}
              <div>
                <label className="label mb-2 block">Project Type *</label>
                <select
                  required
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                  className="w-full bg-transparent border-b-2 border-navy/20 py-3 text-navy focus:border-red outline-none transition-colors text-lg appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget Range */}
              <div>
                <label className="label mb-2 block">Budget Range</label>
                <select
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                  className="w-full bg-transparent border-b-2 border-navy/20 py-3 text-navy focus:border-red outline-none transition-colors text-lg appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select a range
                  </option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="label mb-2 block">
                  Tell Us About Your Project *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-transparent border-b-2 border-navy/20 py-3 text-navy focus:border-red outline-none transition-colors text-lg placeholder:text-navy/30 resize-none"
                  placeholder="What are you building? What's the timeline? Any details that help us understand the vision."
                />
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button type="submit" className="btn-primary !bg-navy hover:!bg-navy-dark w-full md:w-auto">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

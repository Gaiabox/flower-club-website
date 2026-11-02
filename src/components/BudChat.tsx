"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/** Scripted project intake assistant. Uses the same Netlify form as Contact. */

type Msg = { from: "bud" | "user"; text: string };
type Step =
  "name" | "email" | "service" | "budget" | "details" | "sending" | "done";

const SERVICES = [
  "Brand Identity",
  "Website",
  "Content & Experiences",
  "Business Automation",
  "Automation Audit",
  "Not sure yet",
];
const BUDGETS = [
  "Under $2,500",
  "$2,500–$5,000",
  "$5,000–$15,000",
  "$15,000+",
  "Let's discuss",
];
const SERVICE_MAP: Record<string, string> = {
  "Brand Identity": "Brand Identity",
  Website: "Website",
  "Content & Experiences": "Content & Experiences",
  "Business Automation": "Business Automation",
  "Automation Audit": "Automation Audit",
  "Not sure yet": "Not Sure Yet",
};
const SERVICE_REPLIES: Record<string, string> = {
  "Brand Identity":
    "Thanks. What budget range do you have in mind for the identity work?",
  Website: "Thanks. What budget range do you have in mind for the website?",
  "Content & Experiences":
    "Got it. What budget range do you have in mind for the creative work?",
  "Business Automation":
    "Thanks. The team will discuss the workflow and what it needs. What budget range do you have in mind?",
  "Automation Audit":
    "Audits start at $2,500, with the scope agreed before work begins. What budget range do you have in mind?",
  "Not sure yet":
    "That is fine. The team can help define the scope. Do you have a budget range in mind?",
};

function FlowerIcon({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 36 36" width={size} height={size} aria-hidden="true">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <ellipse
          key={a}
          cx="18"
          cy="9"
          rx="4.5"
          ry="7.5"
          fill="#FFD700"
          stroke="#121D33"
          strokeWidth="2"
          transform={`rotate(${a} 18 18)`}
        />
      ))}
      <circle
        cx="18"
        cy="18"
        r="8.5"
        fill="#F4A300"
        stroke="#121D33"
        strokeWidth="2.2"
      />
      <circle cx="18" cy="18" r="4.5" fill="#121D33" />
    </svg>
  );
}

export default function BudChat() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(false);
  const [step, setStep] = useState<Step>("name");
  const [input, setInput] = useState("");
  const data = useRef({ name: "", email: "", service: "", budget: "" });
  const bodyRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  const say = (text: string, delay = 900) =>
    new Promise<void>((res) => {
      setTyping(true);
      window.setTimeout(() => {
        setTyping(false);
        setMsgs((m) => [...m, { from: "bud", text }]);
        res();
      }, delay);
    });

  const userSays = (text: string) =>
    setMsgs((m) => [...m, { from: "user", text }]);

  useEffect(() => {
    if (open && !started.current) {
      started.current = true;
      say(
        "Hi, I'm Bud, The Flower Club's automated project assistant. I'll collect a few details for the team to review. This is a guided form, not a live conversation.",
        1000,
      ).then(() => say("First up, what should I call you?", 800));
    }
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: 99999, behavior: "smooth" });
  }, [msgs, typing]);

  const handleName = async () => {
    const v = input.trim();
    if (!v) return;
    setInput("");
    userSays(v);
    data.current.name = v;
    setStep("email");
    await say(
      `Good to meet you, ${v}. What email should the team use to follow up?`,
    );
  };

  const handleEmail = async () => {
    const v = input.trim();
    if (!v) return;
    setInput("");
    userSays(v);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || v.length > 254) {
      await say("Hmm, that doesn't look like an email. Mind trying again?");
      return;
    }
    data.current.email = v;
    setStep("service");
    await say("Got it. What are you looking to build?");
  };

  const handleService = async (s: string) => {
    userSays(s);
    data.current.service = SERVICE_MAP[s];
    setStep("budget");
    await say(SERVICE_REPLIES[s]);
  };

  const handleBudget = async (b: string) => {
    userSays(b);
    data.current.budget = b;
    setStep("details");
    await say(
      "Last one, tell me about the project. Timeline, goals, anything that helps the team scope it.",
    );
  };

  const handleDetails = async () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.current.email.trim()) || data.current.email.length > 254) {
      setStep("email");
      setInput("");
      await say("A valid email is required before I can send your inquiry. What email should the team use?");
      return;
    }
    const v = input.trim();
    if (!v) return;
    setInput("");
    userSays(v);
    setStep("sending");
    await say("On it, passing this to the team…", 700);
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          name: data.current.name,
          email: data.current.email,
          company: "",
          projectType: data.current.service,
          budget: data.current.budget,
          message: `${v}\n\n- collected by Bud, the automated project assistant`,
        }).toString(),
      });
      if (!res.ok) throw new Error("submit failed");
      setStep("done");
      await say(
        `Thanks, ${data.current.name}. Your inquiry has been submitted. The team will follow up by email to discuss the project.`,
      );
      await say(
        "You can explore our work while the team reviews your inquiry.",
        1100,
      );
    } catch {
      setStep("details");
      await say(
        "Hmm, that didn't go through. Mind using the contact page instead? Everything still lands with the team.",
      );
    }
  };

  const showInput = step === "name" || step === "email" || step === "details";

  return (
    <>
      {/* Floating launcher, bottom left, opposite the scroll-to-top */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat" : "Chat with Bud"}
        className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-navy-dark border border-cream/30 shadow-lg hover:border-cream transition-colors"
      >
        {open ? (
          <span className="text-cream text-xl leading-none">✕</span>
        ) : (
          <>
            <FlowerIcon size={26} />
            <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-green-400 border border-navy-dark" />
          </>
        )}
      </button>

      {/* Chat panel */}
      <div
        className={`fixed z-40 left-3 right-3 bottom-24 md:left-6 md:right-auto md:w-[380px] rounded-lg overflow-hidden border border-cream/15 bg-navy-dark shadow-2xl transition-all duration-300 origin-bottom-left ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "invisible opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 bg-navy border-b border-cream/10">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-dark border border-cream/20">
            <FlowerIcon size={20} />
          </div>
          <div className="flex-1">
            <p className="text-cream font-bold text-sm leading-tight">Bud</p>
            <p className="text-cream/85 font-mono text-[10px] uppercase tracking-widest">
              Project Assistant
            </p>
          </div>
          <span className="flex items-center gap-1.5 text-green-400 font-mono text-[10px] uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            Guided Form
          </span>
        </div>

        <p className="px-4 pt-3 text-cream/85 text-xs leading-relaxed">
          Details go to our team through Netlify Forms. Avoid sensitive
          information.{" "}
          <Link href="/legal/privacy" className="underline">
            Privacy Policy
          </Link>
        </p>
        {/* Messages */}
        <div
          ref={bodyRef}
          className="h-[320px] md:h-[360px] overflow-y-auto px-4 py-4 space-y-3"
        >
          {msgs.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-lg px-3.5 py-2.5 text-base leading-relaxed whitespace-pre-line ${
                  m.from === "user"
                    ? "bg-red text-cream"
                    : "bg-navy text-cream/90 border border-cream/10"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex justify-start">
              <div className="bg-navy border border-cream/10 rounded-lg px-4 py-3 flex gap-1.5">
                <span className="bud-dot h-1.5 w-1.5 rounded-full bg-cream/60" />
                <span
                  className="bud-dot h-1.5 w-1.5 rounded-full bg-cream/60"
                  style={{ animationDelay: "0.15s" }}
                />
                <span
                  className="bud-dot h-1.5 w-1.5 rounded-full bg-cream/60"
                  style={{ animationDelay: "0.3s" }}
                />
              </div>
            </div>
          )}

          {/* Quick replies */}
          {!typing && step === "service" && (
            <div className="flex flex-wrap gap-2 pt-1">
              {SERVICES.map((s) => (
                <button
                  key={s}
                  onClick={() => handleService(s)}
                  className="border border-cream/25 text-cream/85 hover:border-red hover:text-cream rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
          {!typing && step === "budget" && (
            <div className="flex flex-wrap gap-2 pt-1">
              {BUDGETS.map((b) => (
                <button
                  key={b}
                  onClick={() => handleBudget(b)}
                  className="border border-cream/25 text-cream/85 hover:border-red hover:text-cream rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors"
                >
                  {b}
                </button>
              ))}
            </div>
          )}
          {!typing && step === "done" && (
            <div className="flex flex-wrap gap-2 pt-1">
              <Link
                href="/work"
                className="border border-cream/25 text-cream/85 hover:border-red hover:text-cream rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors"
              >
                See the work →
              </Link>
              <Link
                href="/services/digital-employees"
                className="border border-cream/25 text-cream/85 hover:border-red hover:text-cream rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors"
              >
                Explore automation →
              </Link>
            </div>
          )}
        </div>

        <p className="px-4 py-2 text-xs leading-relaxed text-cream/85">
          Bud is an automated intake form. Your email is required for a reply.
          Only submitted details are sent to our team through Netlify Forms.
          Do not share passwords, payment details, or sensitive information.
          Submitting requests project follow-up, not marketing emails or a contract.
          {" "}<Link href="/legal/privacy" className="underline">Privacy</Link>
          {" · "}<Link href="/legal/terms" className="underline">Terms</Link>
        </p>
        {/* Input */}
        {showInput && (
          <div className="flex items-center gap-2 border-t border-cream/10 px-3 py-3">
            <input
              type={step === "email" ? "email" : "text"}
              autoComplete={step === "email" ? "email" : step === "name" ? "name" : "off"}
              aria-label={step === "email" ? "Email address (required)" : step === "name" ? "Your name" : "Project details"}
              required
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter")
                  (step === "name"
                    ? handleName
                    : step === "email"
                      ? handleEmail
                      : handleDetails)();
              }}
              placeholder={
                step === "name"
                  ? "Your name…"
                  : step === "email"
                    ? "you@business.com"
                    : "Tell Bud about the project…"
              }
              className="flex-1 bg-navy border border-cream/15 rounded-md px-3 py-2.5 text-sm text-cream placeholder:text-cream/85 outline-none focus:border-cream/40"
            />
            <button
              onClick={
                step === "name"
                  ? handleName
                  : step === "email"
                    ? handleEmail
                    : handleDetails
              }
              aria-label="Send"
              className="h-10 w-10 flex items-center justify-center rounded-md bg-red text-cream hover:bg-red-hover transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

"use client";

import { useState } from "react";

/**
 * NewsletterForm — email capture in the footer. Posts to the Netlify
 * "newsletter" form (defined in public/__forms.html).
 */
export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/.+@.+\..+/.test(email)) return;
    setStatus("sending");
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": "newsletter", email }).toString(),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <p className="text-cream/70 text-sm">
        ✓ You&apos;re in. Watch for the first note.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="flex gap-2 max-w-sm">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@business.com"
        aria-label="Email address"
        className="flex-1 min-w-0 bg-navy border border-cream/15 rounded-sm px-3 py-2.5 text-sm text-cream placeholder:text-cream/30 outline-none focus:border-cream/40"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-red text-cream text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-sm hover:bg-red-hover transition-colors disabled:opacity-50 whitespace-nowrap"
      >
        {status === "sending" ? "…" : status === "error" ? "Retry" : "Get It"}
      </button>
    </form>
  );
}

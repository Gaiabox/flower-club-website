/** Coarse attribution only: never retain arbitrary query strings or referrer paths. */
export function discoverySource(): string {
  if (typeof window === "undefined") return "unknown";
  let saved: string | null = null;
  try { saved = sessionStorage.getItem("fc-discovery-source"); } catch {}
  if (saved) return saved;
  let host = "";
  try { host = new URL(document.referrer).hostname; } catch {}
  const source = new URLSearchParams(window.location.search).get("utm_source")?.toLowerCase();
  const isHost = (domain: string) => host === domain || host.endsWith("." + domain);
  const value = source === "chatgpt.com" || isHost("chatgpt.com") ? "chatgpt"
    : isHost("perplexity.ai") ? "perplexity"
    : isHost("claude.ai") ? "claude"
    : isHost("gemini.google.com") ? "gemini"
    : isHost("google.com") ? "google"
    : isHost("bing.com") ? "bing"
    : host && host !== window.location.hostname ? "other_referral" : "direct_or_unknown";
  try { sessionStorage.setItem("fc-discovery-source", value); } catch {}
  return value;
}

/** Consent-gated funnel events. Never include form values or personal details. */
export function track(name: string, details: Record<string, string> = {}) {
  if (typeof window === "undefined" || !window.gtag) return;
  try {
    const choice = JSON.parse(
      localStorage.getItem("fc-analytics-choice") || "null",
    );
    if (
      choice?.value !== "accepted" ||
      Date.now() - choice.at > 180 * 24 * 60 * 60 * 1000
    )
      return;
  } catch {
    return;
  }
  window.gtag("event", name, {
    ...details,
    discovery_source: discoverySource(),
    page_location: window.location.origin + window.location.pathname,
    page_path: window.location.pathname,
  });
}

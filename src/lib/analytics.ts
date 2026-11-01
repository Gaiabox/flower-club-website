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
    page_location: window.location.origin + window.location.pathname,
    page_path: window.location.pathname,
  });
}

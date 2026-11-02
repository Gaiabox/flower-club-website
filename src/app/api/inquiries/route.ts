import { NextRequest, NextResponse } from "next/server";
import { SERVICES, BUDGETS } from "@/lib/inquiry-options";

export const runtime = "nodejs";
// Best-effort per-instance throttling; not a distributed rate limiter.
const attempts = new Map<string, { count: number; until: number }>();
export async function POST(request: NextRequest) {
  const reply = (error: string, status: number) => NextResponse.json({ error }, { status });
  const origin = request.headers.get("origin");
  const allowedOrigins = new Set(["https://theflowerclub.design", "https://www.theflowerclub.design"]);
  // Netlify may expose an internal origin in nextUrl after proxying.
  const host = request.headers.get("host");
  if (host && (/^deploy-preview-\d+--flowerclub\.netlify\.app$/.test(host) || /^localhost:\d+$/.test(host))) allowedOrigins.add(`${host.startsWith("localhost:") ? "http" : "https"}://${host}`);
  if (!origin || !allowedOrigins.has(origin)) return reply("Invalid origin", 403);
  if (Number(request.headers.get("content-length") || 0) > 20000) return reply("Request too large", 413);
  const raw = await request.text();
  if (raw.length > 20000) return reply("Request too large", 413);
  let body: Record<string, unknown>;
  try { body = JSON.parse(raw); } catch { return reply("Invalid request", 400); }
  if (!body || typeof body !== "object" || Array.isArray(body)) return reply("Invalid request", 400);
  const value = (key: string) => typeof body[key] === "string" ? (body[key] as string).trim() : "";
  if (value("website")) return reply("Submission rejected", 400);
  const email = value("email"), name = value("name"), service = value("projectType"), budget = value("budget"), message = value("message"), company = value("company");
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return reply("A valid email is required", 400);
  if (!name || name.length > 200 || !message || message.length > 8000 || company.length > 200 || !SERVICES.includes(service) || (budget && !BUDGETS.includes(budget))) return reply("Check your project details", 400);
  const ip = request.headers.get("x-nf-client-connection-ip") || "unknown";
  const now = Date.now();
  attempts.forEach((entry, key) => { if (entry.until <= now) attempts.delete(key); });
  const entry = attempts.get(ip) || { count: 0, until: now + 60000 };
  if (++entry.count > 5) return reply("Please wait a minute before trying again", 429);
  attempts.set(ip, entry);
  const sources: Record<string, string> = { chatgpt: "ChatGPT", perplexity: "Perplexity", claude: "Claude", gemini: "Gemini", google: "Google", bing: "Bing", other_referral: "Other referral", direct_or_unknown: "Direct or unknown", not_collected: "Not collected (analytics not accepted)" };
  const discovery = sources[value("discoverySource")] || "Unknown";
  const [firstname, ...rest] = name.split(/\s+/);
  const fields = Object.entries({ email, firstname, lastname: rest.join(" "), company, service_requested: service, project_budget: budget, project_details: `${message}\n\nSubmitted via ${value("source") === "bud" ? "Bud" : "website contact form"}.\nDiscovery source: ${discovery}.` }).filter(([,v]) => v).map(([name, value]) => ({ objectTypeId: "0-1", name, value }));
  try {
    const result = await fetch("https://api.hsforms.com/submissions/v3/integration/submit/247865442/d96196be-130b-4b89-997c-7a57d3ef7c71", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fields, context: { pageUri: "https://theflowerclub.design/contact", pageName: "Project inquiry" } }),
      signal: AbortSignal.timeout(12000),
    });
    if (!result.ok) { console.error("hubspot_inquiry_failed", { status: result.status }); return reply("Your inquiry could not be delivered. Please try again.", 502); }
    return NextResponse.json({ ok: true });
  } catch { return reply("Your inquiry could not be delivered. Please try again.", 502); }
}

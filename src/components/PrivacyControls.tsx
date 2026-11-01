"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";
const KEY = "fc-analytics-choice";
const MAX_AGE = 180 * 24 * 60 * 60 * 1000;
type Choice = "accepted" | "declined";
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
export function AnalyticsPreferencesButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("fc-open-privacy"))}
      className="text-cream/70 underline underline-offset-4"
    >
      Cookie Settings
    </button>
  );
}
export default function PrivacyControls() {
  const [choice, setChoice] = useState<Choice | null>(null);
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    let saved: { value: Choice; at: number } | null = null;
    try {
      saved = JSON.parse(localStorage.getItem(KEY) || "null");
    } catch {}
    if (
      saved &&
      (saved.value === "accepted" || saved.value === "declined") &&
      Date.now() - saved.at < MAX_AGE
    ) {
      setChoice(saved.value);
    } else {
      setVisible(true);
    }
    const open = () => setVisible(true);
    window.addEventListener("fc-open-privacy", open);
    return () => window.removeEventListener("fc-open-privacy", open);
  }, []);
  useEffect(() => {
    if (choice === "accepted" && window.gtag) {
      window.gtag("event", "page_view", {
        page_location: window.location.origin + pathname,
        page_path: pathname,
      });
    }
  }, [choice, pathname]);
  function select(value: Choice) {
    try {
      localStorage.setItem(KEY, JSON.stringify({ value, at: Date.now() }));
    } catch {}
    if (choice === "accepted" && value === "declined") {
      window.gtag?.("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
      const host = window.location.hostname;
      const domains = [
        "",
        host,
        ...host
          .split(".")
          .map((_, i) => "." + host.split(".").slice(i).join(".")),
      ];
      document.cookie.split(";").forEach((cookie) => {
        const name = cookie.split("=")[0].trim();
        if (
          name.startsWith("_ga") ||
          name === "_gid" ||
          name.startsWith("_gat")
        )
          domains.forEach((domain) => {
            document.cookie = `${name}=; Max-Age=0; path=/;${domain ? " domain=" + domain + ";" : ""}`;
          });
      });
      window.location.reload();
      return;
    }
    setChoice(value);
    setVisible(false);
  }
  return (
    <>
      {choice === "accepted" && (
        <>
          <Script
            id="analytics-init"
            strategy="afterInteractive"
          >{`window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments)};window.gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});window.gtag('js',new Date());window.gtag('config','G-TTQBGTVGV9',{send_page_view:false,allow_google_signals:false,allow_ad_personalization_signals:false});window.gtag('event','page_view',{page_location:location.origin+location.pathname,page_path:location.pathname});`}</Script>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-TTQBGTVGV9"
            strategy="afterInteractive"
          />
        </>
      )}
      {visible && (
        <aside
          aria-label="Cookie preferences"
          className="fixed bottom-0 inset-x-0 z-[250] bg-cream border-t border-navy/25 shadow-xl p-5 md:p-7"
        >
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-5 lg:items-center">
            <div className="flex-1">
              <h2 className="text-navy font-bold text-lg mb-2">
                Your privacy choices
              </h2>
              <p className="text-navy/80 text-sm leading-relaxed">
                We use necessary storage to remember this choice. With your
                permission, Google Analytics helps us understand site use.
                Optional analytics stays off until you accept.{" "}
                <Link href="/legal/privacy" className="underline">
                  Privacy &amp; cookies
                </Link>
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => select("declined")}
                className="border border-navy text-navy px-5 py-3 font-semibold text-sm"
              >
                Decline Analytics
              </button>
              <button
                onClick={() => select("accepted")}
                className="border border-navy text-navy px-5 py-3 font-semibold text-sm"
              >
                Accept Analytics
              </button>
              {choice && (
                <button
                  onClick={() => setVisible(false)}
                  className="text-navy px-3 underline"
                >
                  Close
                </button>
              )}
            </div>
          </div>
        </aside>
      )}
    </>
  );
}

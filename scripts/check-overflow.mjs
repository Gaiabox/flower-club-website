/**
 * Overflow check script — run after ANY change to the Flower Club site.
 * Tests all 5 pages at both desktop (1280px) and mobile (390px).
 * Exits with error if any page has horizontal overflow.
 */

import { chromium } from "playwright";

const PAGES = ["/", "/work", "/services", "/contact", "/about"];
const VIEWPORTS = [
  { width: 1280, height: 800, label: "desktop" },
  { width: 390, height: 844, label: "mobile" },
];
const BASE = "http://localhost:3002";

const browser = await chromium.launch();
let failed = false;

for (const vp of VIEWPORTS) {
  const page = await browser.newPage();
  await page.setViewportSize(vp);

  for (const path of PAGES) {
    await page.goto(BASE + path, { waitUntil: "networkidle" });
    const result = await page.evaluate(() => ({
      bodyW: document.body.scrollWidth,
      clientW: document.documentElement.clientWidth,
    }));

    const overflow = result.bodyW > result.clientW;
    const status = overflow ? "❌ OVERFLOW" : "✅ OK";
    console.log(`${status}  ${vp.label.padEnd(8)} ${path.padEnd(12)} bodyW:${result.bodyW} clientW:${result.clientW}`);
    if (overflow) failed = true;
  }
  await page.close();
}

await browser.close();

if (failed) {
  console.log("\n🚨 Overflow detected — fix before proceeding.");
  process.exit(1);
} else {
  console.log("\n✅ All pages clean — no overflow.");
}

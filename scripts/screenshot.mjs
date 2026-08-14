// Captures reference screenshots of the running app into docs/.
// Requires the dev server to already be running (npm run dev) and
// playwright + a browser binary installed (see README section 6).
//
// Run with: node scripts/screenshot.mjs
import { chromium } from "playwright";
import { mkdirSync } from "fs";

const BASE_URL = process.env.SCREENSHOT_BASE_URL || "http://localhost:3000";

mkdirSync("docs", { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

try {
  console.log(`Loading ${BASE_URL} ...`);
  await page.goto(BASE_URL, { waitUntil: "networkidle" });
  await page.waitForSelector("text=Warm doors worth knocking on");
  await page.screenshot({ path: "docs/screenshot-home.png" });
  console.log("Saved docs/screenshot-home.png (idle state + recommendations)");

  console.log("Tracing a path into Stellar Labs...");
  await page.fill("#company-search", "Stellar Labs");
  await page.click('button:has-text("Trace a path")');
  // Wait for either a found result ("hop"/"hops") or a not-found message.
  await page.waitForSelector("text=/hop|No referral path found/");
  await page.screenshot({ path: "docs/screenshot-path-found.png" });
  console.log("Saved docs/screenshot-path-found.png (referral trail)");

  console.log("Tracing a path into a company with no reachable connection...");
  await page.fill("#company-search", "");
  await page.fill("#company-search", "Beacon Health");
  await page.click('button:has-text("Trace a path")');
  await page.waitForSelector("text=/hop|No referral path found/");
  await page.screenshot({ path: "docs/screenshot-path-notfound.png" });
  console.log("Saved docs/screenshot-path-notfound.png");
} catch (err) {
  console.error("Screenshot run failed:", err.message);
  console.error("Is `npm run dev` running, and did you `npm run seed` first?");
  process.exitCode = 1;
} finally {
  await browser.close();
}

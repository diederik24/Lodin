import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage();

const errors = [];
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(`console: ${msg.text()}`);
});
page.on("pageerror", (err) => errors.push(`page: ${err.message}`));
page.on("requestfailed", (req) => {
  errors.push(`fail: ${req.url()} ${req.failure()?.errorText}`);
});

await page.goto("http://localhost:1000/kaart-voor-website/kaart.html", {
  waitUntil: "networkidle",
  timeout: 60000,
});
await page.waitForTimeout(4000);

const state = await page.evaluate(() => ({
  hasCanvas: !!document.querySelector(".maplibregl-canvas"),
  maplibre: typeof window.maplibregl,
  body: document.body.innerHTML.slice(0, 200),
}));

console.log("state", state);
console.log("errors", errors);

await page.screenshot({ path: "screens/kaart-direct.png", fullPage: true });

await page.goto("http://localhost:1000/", { waitUntil: "networkidle" });
await page.locator('iframe[title*="Werkgebied"], iframe[src*="kaart"]').first().scrollIntoViewIfNeeded();
await page.waitForTimeout(5000);
await page.screenshot({ path: "screens/kaart-op-home.png" });

const iframeInfo = await page.evaluate(() => {
  const iframe = document.querySelector('iframe[src*="kaart"]');
  if (!iframe) return { found: false };
  return {
    found: true,
    src: iframe.getAttribute("src"),
    height: iframe.clientHeight,
    width: iframe.clientWidth,
  };
});
console.log("iframe", iframeInfo);

await browser.close();

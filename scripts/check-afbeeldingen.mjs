import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

page.on("response", (r) => {
  if (r.request().resourceType() === "image" && !r.ok()) {
    console.log("MISLUKT", r.status(), r.url().slice(0, 120));
  }
});
page.on("requestfailed", (r) => {
  if (r.resourceType() === "image") {
    console.log("GEFAALD", r.failure()?.errorText, r.url().slice(0, 120));
  }
});

await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await page.waitForTimeout(3000);

const info = await page.evaluate(() =>
  [...document.images].map((img) => ({
    src: img.currentSrc.slice(0, 110) || img.src.slice(0, 110),
    compleet: img.complete,
    breedte: img.naturalWidth,
  })),
);
console.table(info);

await browser.close();

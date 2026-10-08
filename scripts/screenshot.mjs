/**
 * Maakt screenshots van de site om het ontwerp te controleren.
 * Draaien met: node scripts/screenshot.mjs (dev server moet draaien)
 */
import { chromium } from "playwright";

const browser = await chromium.launch();

/**
 * Wacht tot de afbeeldingen in beeld echt binnen zijn, anders staan ze leeg op
 * de foto. Afbeeldingen die pas bij scrollen laden slaan we over.
 */
const wachtOpAfbeeldingen = (page) =>
  page.waitForFunction(() =>
    [...document.images]
      .filter((img) => img.loading !== "lazy")
      .every((img) => img.complete && img.naturalWidth > 0),
  );

const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await desktop.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await wachtOpAfbeeldingen(desktop);
await desktop.screenshot({ path: "screens/home-desktop.png" });
await desktop.screenshot({ path: "screens/home-desktop-vol.png", fullPage: true });

// Kaart op de contactpagina, deze laadt pas als je hem in beeld scrollt
await desktop.goto("http://localhost:3000/contact", { waitUntil: "networkidle" });
await desktop.locator("iframe").scrollIntoViewIfNeeded();
await desktop.waitForTimeout(4000);
await desktop.screenshot({ path: "screens/contact-kaart.png" });

const mobiel = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobiel.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await mobiel.screenshot({ path: "screens/home-mobiel.png" });

await browser.close();
console.log("screenshots klaar");

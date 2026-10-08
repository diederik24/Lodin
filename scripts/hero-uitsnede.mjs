/**
 * Snijdt het fotogedeelte uit de banner zodat het als losse hero-afbeelding
 * gebruikt kan worden. Draaien met: node scripts/hero-uitsnede.mjs
 */
import sharp from "sharp";

const bron = "public/banner.jpg";

// Fotogedeelte rechts in de banner, zonder de logo-kant en zonder de groene balk
await sharp(bron)
  .extract({ left: 606, top: 0, width: 418, height: 344 })
  .resize({ width: 856, kernel: "lanczos3" })
  .jpeg({ quality: 90 })
  .toFile("public/hero-foto.jpg");

console.log("hero-foto.jpg aangemaakt");

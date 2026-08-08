// One-off migration script — not a runtime dependency. Run once: node scripts/generate-og-images.mjs
//
// next/og's ImageResponse -> Sharp post-processing pipeline errors out in this
// environment ("Input buffer contains unsupported image format") for both
// app/icon.js and app/opengraph-image.js. Generating static PNGs via sharp's
// own SVG rasterizer sidesteps that pipeline entirely.
import sharp from "sharp";
import path from "node:path";

const iconSvg = `
<svg width="256" height="256" xmlns="http://www.w3.org/2000/svg">
  <rect width="256" height="256" rx="48" fill="#0a0a0a"/>
  <text x="128" y="150" font-family="Arial, sans-serif" font-size="104" font-weight="700"
        fill="#ffffff" text-anchor="middle">AZ</text>
</svg>`;

const ogSvg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0a0a0a"/>
  <text x="600" y="300" font-family="Arial, sans-serif" font-size="72" font-weight="700"
        fill="#ffffff" text-anchor="middle">Andi Zogaj</text>
  <text x="600" y="370" font-family="Arial, sans-serif" font-size="32"
        fill="#a1a1a1" text-anchor="middle">Front-End Web Developer</text>
  <text x="600" y="430" font-family="Arial, sans-serif" font-size="24"
        fill="#6a6a6a" text-anchor="middle">Founder of Obsidium Web Development</text>
</svg>`;

await sharp(Buffer.from(iconSvg)).png().toFile(path.resolve("src/app/icon.png"));
await sharp(Buffer.from(ogSvg)).png().toFile(path.resolve("src/app/opengraph-image.png"));

console.log("Generated src/app/icon.png and src/app/opengraph-image.png");

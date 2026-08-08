// One-off migration script — not a runtime dependency. Run once: node scripts/convert-images.mjs
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const SOURCE_DIR = path.resolve("src/assets");
const OUTPUT_DIR = path.resolve("src/assets/projects");

// [old filename, new filename] — p7.png intentionally excluded: dead import, unused
// anywhere in the old Projects.jsx projects array.
const MAP = [
  ["p1.png", "xypo.webp"],
  ["p8.png", "upbeat.webp"],
  ["p9.png", "electronic-ecommerce.webp"],
  ["p2.png", "upnorth-travels.webp"],
  ["p4.png", "recepies.webp"],
  ["p3.png", "studynest.webp"],
  ["p5.png", "cinema24.webp"],
  ["p6.png", "tech-electronics.webp"],
  ["p10.png", "flappy-bird-clone.webp"],
  ["p11.png", "textshift.webp"],
  ["p12.png", "andis-blog.webp"],
  ["p13.PNG", "zogaj-construction.webp"],
  ["p14.PNG", "mati-gradnje.webp"],
  ["p15.PNG", "como-grit.webp"],
  ["p17.PNG", "hive-blog.webp"],
  ["p16.PNG", "obsidium.webp"], // used by the "Currently Working On" section, not the projects grid
];

await mkdir(OUTPUT_DIR, { recursive: true });

for (const [input, output] of MAP) {
  const inputPath = path.join(SOURCE_DIR, input);
  const outputPath = path.join(OUTPUT_DIR, output);
  const before = (await sharp(inputPath).metadata()).size ?? 0;

  await sharp(inputPath)
    .resize({ width: 1280, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(outputPath);

  const { size: after } = await import("node:fs").then((fs) =>
    fs.promises.stat(outputPath)
  );
  console.log(
    `${input} -> ${output} (${Math.round((before || after) / 1024)}KB -> ${Math.round(after / 1024)}KB)`
  );
}

console.log("\nDone.");

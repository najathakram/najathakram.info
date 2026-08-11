// TEMPORARY tool. Builds a numbered contact sheet from instagram-originals/ so a
// whole account can be eyeballed in one image instead of one request per photo.
//
//   node scripts/contact-sheet.mjs nat
//
// Writes instagram-originals/_sheet-<prefix>.jpg and prints index -> filename.
// Delete once the photo set is final.
import sharp from "sharp";
import { readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DIR = join(process.cwd(), "instagram-originals");
const prefix = process.argv[2];
if (!prefix) {
  console.error("usage: node scripts/contact-sheet.mjs <prefix>");
  process.exit(1);
}

const COLS = 8;
const TW = 200;
const TH = 250;
const PAD = 3;

const files = readdirSync(DIR)
  .filter((f) => f.startsWith(`${prefix}-`) && f.endsWith(".jpg"))
  .sort();

const rows = Math.ceil(files.length / COLS);
const W = COLS * (TW + PAD) + PAD;
const H = rows * (TH + PAD) + PAD;

const composites = [];
const lines = [];

for (let i = 0; i < files.length; i++) {
  const col = i % COLS;
  const row = Math.floor(i / COLS);
  const left = PAD + col * (TW + PAD);
  const top = PAD + row * (TH + PAD);

  const tile = await sharp(join(DIR, files[i]))
    .resize(TW, TH, { fit: "cover", position: "centre" })
    .jpeg({ quality: 78 })
    .toBuffer();
  composites.push({ input: tile, left, top });

  // A legible index badge, drawn over the tile's top-left corner.
  const badge = Buffer.from(
    `<svg width="54" height="30"><rect width="54" height="30" fill="#000" fill-opacity="0.72"/>` +
      `<text x="27" y="21" font-family="monospace" font-size="20" font-weight="bold" fill="#fff" text-anchor="middle">${i + 1}</text></svg>`
  );
  composites.push({ input: badge, left, top });

  lines.push(`${String(i + 1).padStart(3)}  ${files[i]}`);
}

const out = join(DIR, `_sheet-${prefix}.jpg`);
await sharp({ create: { width: W, height: H, channels: 3, background: "#1a1a1a" } })
  .composite(composites)
  .jpeg({ quality: 80 })
  .toFile(out);

writeFileSync(join(DIR, `_sheet-${prefix}.txt`), lines.join("\n"), "utf8");
console.log(`${out}  ${files.length} tiles, ${W}x${H}`);
console.log(lines.join("\n"));

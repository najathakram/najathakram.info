// One-off photo optimizer: normalizes public/photos/*.jpg in place.
// Max 1600px long edge, EXIF stripped, mozjpeg q80. Originals are recoverable
// from git history. Run: node scripts/optimize-photos.mjs
import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import sharp from "sharp";

const dir = fileURLToPath(new URL("../public/photos/", import.meta.url));

const files = (await readdir(dir)).filter((f) => /\.jpe?g$/i.test(f));

for (const file of files) {
  const path = join(dir, file);
  const before = (await stat(path)).size;
  const input = await readFile(path); // buffer in, so no open handle on the file
  const meta = await sharp(input).metadata();
  const longEdge = Math.max(meta.width ?? 0, meta.height ?? 0);

  let pipeline = sharp(input).rotate(); // bake EXIF orientation, then strip metadata
  if (longEdge > 1600) {
    pipeline = pipeline.resize({ width: 1600, height: 1600, fit: "inside" });
  }
  const buffer = await pipeline.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
  await writeFile(path, buffer);

  const after = (await stat(path)).size;
  console.log(
    `${file}: ${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB`
  );
}

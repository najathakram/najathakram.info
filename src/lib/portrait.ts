import { existsSync } from "node:fs";
import { join } from "node:path";

// The hero portrait is optional. This resolves at build time in a server
// component, so dropping the file into public/ makes it appear on the next
// build with no code change, and its absence never breaks the build.
// Accepts either extension; first match wins.
const CANDIDATES = ["portrait.jpg", "portrait.jpeg", "portrait.png"];

export function getPortrait(): string | null {
  for (const name of CANDIDATES) {
    if (existsSync(join(process.cwd(), "public", name))) return `/${name}`;
  }
  return null;
}

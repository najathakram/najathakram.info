# Code Map — najathakram.info (personal site)

Personal site for Najath Akram. Next.js 16 (App Router) + Tailwind v4 + Archivo/JetBrains
Mono, deployed to Vercel. Nine static routes sharing one header/footer shell, fed by a
single data file. No API routes, no database.

- **Stack:** Next.js 16, React 19, TypeScript, Tailwind v4 (CSS-first via postcss; there is
  NO `tailwind.config.js`).
- **Build/dev:** `npm run dev` (see `.claude/launch.json`, name `personal-site`), `npm run build`.
- **Routes:** `/`, `/systems`, `/experience`, `/publications`, `/notes`, `/notes/[slug]`,
  `/photography`, `/lyrics`, `/contact`. `src/app/layout.tsx` wraps all of them in
  `SiteHeader` + `<main>` + `SiteFooter`; pages compose `PageHeader` and `Section` rather
  than per-section components.
- **All copy lives in `src/lib/site-data.ts`** (note bodies in `src/lib/notes.ts`, photos in
  `src/lib/photos.ts`). Edit content there, not in pages.
- **THIS SITE IS NOT A JOB APPLICATION** (owner direction, 2026-08-10, overrides the review
  panel). It shows the projects, graciously and understated. Hard consequences: no boasting
  about current work; **no debug counts or month spans** (to have debugged something you need a
  bug, which is internal, so "helped identify issues" is the ceiling); no hiring or availability
  language; no inviting the reader to hear his opinions. The war-room panel's top finding was
  "no outcomes stated anywhere" and the owner has **declined it deliberately** - do not
  reintroduce outcome claims to raise a score. Job-seeking lives on LinkedIn, not here.
- **Voice rules (hard):** no em/en dashes (U+2011 non-breaking hyphen used inside terms like
  O‑RAN); never "honest/humble/privilege/entrepreneur/innovator"; understatement over adjectives.

## Where to find

| Task / symptom | File |
| --- | --- |
| Any copy change (bio, roles, systems, publications, lyrics, photo credits) | `src/lib/site-data.ts` |
| Note text (the three long-form articles) | `src/lib/notes.ts` |
| Home page section order | `src/app/page.tsx` |
| A single route's content or layout | `src/app/<route>/page.tsx` |
| Adding a route | new `src/app/<route>/page.tsx` + a `nav` entry and `pageIntros` key in site-data |
| Header nav, mobile menu, active-link state | `src/components/layout/SiteHeader.tsx` |
| Footer links, Reach list, copyright | `src/components/layout/SiteFooter.tsx` |
| Page `<h1>` band / section bands | `src/components/primitives/PageHeader.tsx`, `Section.tsx` |
| Fonts, metadata/SEO, colour tokens | `src/app/layout.tsx`, `src/app/globals.css` |
| Scroll-reveal animation behavior | `src/components/Reveal.tsx` |
| Publications / education / honors rendering | `src/app/publications/page.tsx` |
| Photo grid and its sources | `src/app/photography/page.tsx` + `src/lib/photos.ts` |

Area file: [site.md](site.md)

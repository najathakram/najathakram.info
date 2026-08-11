# Area: site (src/)

## App shell

- `src/app/layout.tsx` — RootLayout; loads fonts via next/font into GENERIC SLOTS
  (`--font-sans-var` = Archivo, `--font-mono-var` = JetBrains Mono) so a face swap is a
  two-line change here. Exports `metadata` (SEO, OpenGraph, title template
  `%s · <name>`) and `viewport` (themeColor, `colorScheme: "light"`). Sets
  `data-scroll-behavior="smooth"` on `<html>` (Next 16 requirement) and a `<noscript>`
  style that un-hides `.reveal`. Renders the shell every route shares: skip link,
  `<SiteHeader>`, `<main id="main">{children}</main>`, `<SiteFooter>`.
- `src/app/globals.css` — Tailwind v4 entry, THREE TIERS:
  tier 1 `:root` primitives (palette, motion tokens `--ease-emphasized`/`--duration-reveal`,
  `--reveal-distance`) — the visual design direction edits ONLY this block;
  tier 2 `@theme inline` maps semantics to Tailwind utilities (components must never use raw
  hex); tier 3 `@layer base`/`utilities` behavior (focus-visible ring, reduced-motion
  scroll-behavior, reveal states, and the house utilities `.label` `.measure`
  `.font-mono-fig` `.tabular` `.text-balance` `.text-pretty` `.link-underline`).
- `src/app/page.tsx` — `Home()`; the argument in one scroll. Owns its own `<h1>` (no
  `PageHeader`) and sets no `title`, so it takes the layout default. Section order:
  hero (`hero.thesis`/`turn`/`gate` + Contact and Resume actions) → readout strip
  (`readouts` in mono, the signature moment) → About → Focus (`expertise`) → Systems
  (`systems.slice(0, 4)` + "All systems") → Publications (`featured` only + "Full list")
  → Contact. Everything below the hero is a `<Section>`.
- `src/app/systems/page.tsx` — all nine `systems` in the house list recipe (title + tag +
  body) under `PageHeader` from `pageIntros.systems`. No grouping; tags carry it.
- `src/app/experience/page.tsx` — `experience` roles: company + location, position/period
  rows, summary, optional `highlights` as left-ruled sub-items. Closes with both resume
  PDF links (`profile.resumes.product` / `.technical`).
- `src/app/notes/page.tsx` — `notes` as cards linking to `/notes/${slug}`; title, dek, and
  a `.label` meta line with date and `${minutes} min`. Order as stored.
- `src/app/notes/[slug]/page.tsx` — dynamic note detail. `params` is a Promise in Next 16,
  so the page and `generateMetadata` both `await params`; `generateStaticParams()` from
  `notes` prerenders every slug; `notFound()` when `getNote(slug)` misses. Renders its own
  `<h1>` (not `PageHeader`) and the `Block[]` body inside `.measure`.
- `src/app/publications/page.tsx` — the record page. Renders `publications` grouped by `type`
  (Journal / Conference / Dissertation / Report), then **`talks`**, then `education`, `honors`,
  `leadership` (headed "Service"), `affiliations` + IEEE/Scholar links. Talks live here rather
  than on their own route: this page is already "work that exists in public". The three talk
  video IDs were confirmed live via YouTube oEmbed on 2026-08-07.
- `src/app/photography/page.tsx` — `photos` from `src/lib/photos` in a 2/3-col grid of
  next/image tiles (blur placeholders, `sizes`), then `photoSources` as external links.
  Orientation is DERIVED (`image.width > image.height`), never a hand-kept flag:
  landscape frames get `col-span-2` + `aspect-[3/2]`, portrait keeps `aspect-[4/5]`.
  Cropping a landscape frame to 4:5 cuts the subject out of it, which is why.
- `src/app/lyrics/page.tsx` — `lyrics` rows: title linked out, `titleNative` beneath with
  `lang="si"`, artist, year right-aligned in `.font-mono-fig .tabular`.
- `src/app/contact/page.tsx` — `contact.body`, a large mailto on `profile.email`, then
  LinkedIn / IEEE / both resume PDFs, closing with `profile.openTo`.
- `src/app/publications/page.tsx` — `PublicationsPage()`; the load-bearing citable route
  (printed resumes say "full list at najathakram.info"). Groups publications by type, then
  Education, Honors, Leadership and service, affiliations + IEEE author link. `<PageHeader>`
  owns the single `<h1>`; every group is a `<Section title=...>` so each group name is a real
  `<h2>` above the per-item `<h3>`s (pass group names as `title`, never `label`: `label`
  renders a `<p class="label">` and would strand the h3s).
- `src/app/opengraph-image.tsx` — ImageResponse 1200x630 (neutral; restyle with the design).
- `src/app/icon.svg`, `src/app/apple-icon.png` — monogram favicons (default favicon deleted).
- `src/app/robots.ts`, `src/app/sitemap.ts` — both read `profile.siteUrl`; sitemap derives its
  entries from `nav` (route items) plus `/contact` plus one URL per `notes` slug, so new routes
  only need a `nav` entry and new notes need nothing.

## Data (single source of copy)

- `src/lib/site-data.ts` — all site content as typed exports. Copy policy: conservative
  register per `.claude/panel-reviews/plan-v2.md`; only ledger-verified facts at full
  strength. Exports:
  - `nav: NavItem[]` — `{label, href, kind: "anchor"|"route"}`; six route entries (Home is
    the wordmark, Contact is the header's accent action). Drives header, footer, sitemap.
  - `pageIntros` — `Record<string, {title, dek, label}>` keyed by route: `systems`
    `experience` `publications` `notes` `photography` `lyrics` `contact`. Feeds each
    route's `PageHeader` and its `metadata`.
  - `readouts` — `{value, label}[]`, 4 items; the home page's mono readout strip.
  - `profile` — name, siteUrl, contact, `role` (title + company), `identityLine2`
    (PhD + prior Principal, the title-dip fix), `openTo`, `resumes.{product,technical}`.
    NOTE: the old fake Google Scholar URL was removed; do not re-add unverified.
  - `hero` — `{thesis: string[2], turn, gate}`; `turn` is the load-bearing pivot sentence.
  - `about: string[]`, `expertise: {id,title,body}[]`
  - `experience: Role[]` — `Role = {company, location, positions:{title,period}[], summary,
    highlights?: string[]}`; Airspan uses `highlights`.
  - `systems: System[]` — `{id,title,tag,body}`; 9 entries. Public-safe: no customer or
    employer-internal names. (Renamed from the old `selectedWork`.)
  - `publications: Publication[]` — `{id,title,venue?,year?,type,url?,featured?}`; 12 items
    (9 IEEE + dissertation + AFRL report + 1 unlinked conference). Titles are TITLES OF
    RECORD: keep original hyphens even though site copy bans dashes. `featured` drives the
    home-page teaser. Links are IEEE Xplore document pages / DTIC; swap in DOIs when verified.
  - `education` (3), `honors` (7, from his own prior site), `leadership` (4),
    `affiliations` (string), `contact: {body}`
  - `lyrics: Lyric[]`, `photoSources: PhotoSource[]`
  - `focusAreas` and `asideIntro` survive from the sidebar era and are no longer rendered.
- `src/lib/notes.ts` — `notes: Note[]` (3) + `getNote(slug)`. A `Note` is
  `{slug,title,date,year,dek,minutes,featured?,body: Block[]}` where `Block` is
  `{kind:"p"|"h";text}` or `{kind:"ol";items:{lead?,text}[]}`. Bodies are recovered
  VERBATIM from the previous site: do not edit the prose.
- `talks: Talk[]` in `site-data.ts` — 2 invited talks + 1 recorded tutorial, recovered from the
  old Wix site's video pages. Runtimes are load-bearing (they are the only public evidence of
  holding a technical room that long), so keep them in the `venue` string. `year` is omitted
  where the old site gave no date; do not guess one.
- `src/lib/photos.ts` — `photos: SitePhoto[]` (`{image, alt}`) using STATIC IMPORTS of
  `public/photos/*.jpg`, which gives next/image intrinsic sizes + blur placeholders.
  Photo data deliberately lives here, not in site-data. Array order IS display order,
  and weddings/nature/city are interleaved on purpose: the owner asked for one grid with
  no names or captions, so `alt` is screen-reader only and there is no category field.
  Alt text must describe what is visibly in the frame, never a place or event not shown.
  **21 photos, 2 of them landscape, at index 0/11.** Load-bearing: counting CELLS, not
  entries (landscape = 2 cells), the cell count before each landscape entry must be a
  multiple of **6** — the grid is 3-col on desktop and 2-col on mobile, so it has to
  start a fresh row in both. A multiple of 3 is not enough and was a real bug (9 cells
  was fine on desktop, left a hole on mobile). A plain portrait cell never opens a gap,
  so appending one at the tail is always safe; touching anything before the last
  landscape entry means re-deriving the sum in the file's own header comment.

## Scroll figures (monochrome line art)

- `src/components/motion/ScrollDraw.tsx` — client wrapper; IntersectionObserver adds `.drawn`.
  CSS default is FULLY DRAWN, so no-JS and reduced-motion both mean "already there" rather
  than invisible. Pass `delay` to stagger a figure.
- `src/components/motion/Figures.tsx` — `SignalJourney` (bits, carrier picking up noise mid
  flight, bits recovered; illustrates `hero.lede` and lives under the signature band),
  `ArrayBeam`, `MelodyLine`, `Aperture` (one per identity card, mapped in `page.tsx` by route
  via `IDENTITY_FIGURES`). All strokes use `currentColor`; child groups are classed
  `draw-1`..`draw-4` and globals.css animates them in sequence.

## DATA HYGIENE RULE (learned the hard way)

Never write a quantity into prose that some array already knows. The identity card said
"Five recorded so far" and went stale the moment two lyric credits were added, and the owner
had to catch it. Either derive the number or omit it. `lyrics` is additionally a SELECTION,
not a complete set, so it must never carry a total. Verified facts from
`Resume/PROJECTS.md` (17 bands, five wrapped IP C-models, 846 checks) are fine: they describe
the world, not the length of a list in this repo.

## Components

There are no per-section components any more: pages compose the primitives directly.

- `src/components/layout/SiteHeader.tsx` — client component; sticky translucent header with
  the monogram wordmark (links `/`), route nav from `nav` in site-data, the accent Contact
  action, and a `useState` mobile menu that closes on route change and on Escape. Active
  state is `pathname.startsWith(href)` (exact match for `/`).
- `src/components/layout/SiteFooter.tsx` — server component; identity block
  (name, role, location, `openTo`), Pages column from `nav`, Reach column (Email, LinkedIn,
  IEEE Xplore, Resume PDF), copyright year.
- `src/components/primitives/PageHeader.tsx` — `PageHeader({label, title, dek})`; the
  bordered header band that owns the single `<h1>`. First element of every route except
  `/` and `/notes/[slug]`, which supply their own `<h1>`.
- `src/components/primitives/Section.tsx` — `Section({id, label, title, children, className})`;
  bordered band on the shared `max-w-6xl` container with a left rail that collapses below
  `lg`. `title` renders a real `<h2>` (wired by `aria-labelledby`); `label` renders only a
  `<p class="label">`, so pass group names as `title` when they must outrank inner `<h3>`s.
- `src/components/primitives/Eyebrow.tsx` — `Eyebrow({children, className})`; the small
  uppercase letterspaced label. Currently unused: pages apply the `.label` utility directly.
- `src/components/Reveal.tsx` — `Reveal({children, delay, className, as})`; client component.
  v2: reveals are opt-in via CSS (`.reveal` inside `prefers-reduced-motion: no-preference`,
  with a `<noscript>` override in the layout), so no-JS and reduced-motion users see content
  immediately. Stagger passes `--reveal-delay` as a CSS var, not a JS timer.

## Assets and scripts

- `public/photos/*.jpg` — 21 photos (4 `wedding-`, 6 `nature-`, 11 `urban-`), re-encoded to
  max 1600px / mozjpeg q82. Weddings came from pixelparchment.com, nature/city from the
  owner's two Instagram grids. **Provenance and the working harvest method are recorded in
  [.claude/photo-sources.md](../photo-sources.md)** — read that before attempting to pull
  more, it also lists the four approaches that do NOT work.
- `public/resume/product/Najath Akram Resume.pdf`, `public/resume/technical/...` — both
  exported from `Resume/*.docx`; the download filename is deliberately identical for both.
- `scripts/optimize-photos.mjs` — one-off sharp re-encoder (reads to a buffer first; sharp
  cannot write back to a path it still holds open on Windows).
- `scripts/contact-sheet.mjs` — builds a numbered montage of `instagram-originals/` so a
  whole account can be judged in one image. Used when re-picking the published set.
- `next.config.ts` — `images: { qualities: [60, 75], formats: [avif, webp] }`. Next 16
  defaults to `qualities: [75]` only, so any other `quality` prop needs listing here.

## Cross-refs / gotchas

- Adding a route means three edits: the `src/app/<route>/page.tsx` file, a `nav` entry in
  site-data (header, footer and sitemap all derive from it), and a `pageIntros` key.
- `nav` is routes only now; the `"anchor"` kind is vestigial. There are no section anchors
  left to keep in sync.
- Publication titles keep their real hyphens; the no-dash house rule applies to prose only.
- `Resume/` in the repo root holds the docx sources (not part of the build); the built PDFs
  under `public/resume/` are what the site serves.
- Governing content/positioning docs: `.claude/panel-reviews/plan-v2.md` (facts ledger and
  register spec), `.claude/review-panel.md` (the six reviewer personas).

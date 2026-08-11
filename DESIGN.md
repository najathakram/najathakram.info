---
name: Najath Akram
description: The canon played straight — warm-neutral instrument panel for an engineer who owns a radio down to the sample.
colors:
  ground: "#fcfcfb"
  ground-raised: "#f5f5f3"
  ground-sunk: "#efefec"
  ink: "#16181d"
  ink-muted: "#6a6e76"
  ink-soft: "#8e9299"
  line: "rgba(22, 24, 29, 0.09)"
  line-strong: "rgba(22, 24, 29, 0.16)"
  accent: "#1b5e8c"
  accent-hover: "#164b70"
  accent-soft: "rgba(27, 94, 140, 0.08)"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.7rem + 2.6vw, 3.5rem)"
    fontWeight: 560
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.4rem + 1.6vw, 2.5rem)"
    fontWeight: 560
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1.2rem + 0.8vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  subtitle:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    fontFeature: "ss01, cv11"
  body-compact:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  caption:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    letterSpacing: "0.14em"
  reading:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "clamp(1.375rem, 1.2rem + 0.8vw, 1.75rem)"
    fontWeight: 400
    fontFeature: "tnum"
rounded:
  DEFAULT: "6px"
  lg: "10px"
spacing:
  space-1: "0.25rem"
  space-2: "0.5rem"
  space-3: "0.75rem"
  space-4: "1rem"
  space-6: "1.5rem"
  space-8: "2rem"
  space-12: "3rem"
  space-16: "4rem"
  space-24: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
    rounded: "{rounded.DEFAULT}"
    padding: "0.5rem 1rem"
    typography: "{typography.body}"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "#ffffff"
  button-secondary:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.DEFAULT}"
    padding: "0.5rem 1rem"
    typography: "{typography.body}"
  button-secondary-hover:
    backgroundColor: "{colors.ground-sunk}"
    textColor: "{colors.ink}"
  nav-link:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink-muted}"
    padding: "0.375rem 0.625rem"
    rounded: "{rounded.DEFAULT}"
  nav-link-hover:
    backgroundColor: "{colors.ground-sunk}"
    textColor: "{colors.ink}"
  nav-link-active:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
  list-row:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    padding: "1.25rem 0"
  readout-tile:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    padding: "1.25rem"
  media-frame:
    backgroundColor: "{colors.ground-sunk}"
    rounded: "{rounded.lg}"
---

# Design System: Najath Akram

## Overview

**Creative North Star: "The Instrument Panel, Read in Daylight"**

This is the canon played straight. The owner was offered an invented visual world (a phased-array lattice, direction seed `af8c32fb`) and took the standing exit instead: convention executed at full craft fidelity, no invented metaphor, no smuggled quirk. What that produces is a warm-neutral daylight panel — near-white ground, near-black ink, hairline rules, and exactly one instrument blue — where every measured value is set in monospace so numbers read as readings rather than as decoration. The register is a lab bench in a bright room, not a terminal in a dark one.

Density is calm and generous. Content sits at a 68ch measure inside a 72rem container, sections are separated by hairlines rather than cards, and vertical rhythm comes from a small 4px-based scale used at the coarse end (`3rem`, `4rem`, `6rem`) far more often than the fine end. Depth is not simulated: there are no shadows in the system, so hierarchy is carried entirely by rule weight, ink tone, and space. Motion is short and precise (140-200ms for state, 480ms for a single reveal) and focus is treated as a first-class visible state, not an afterthought to be removed.

Two rejections are confirmed and load-bearing. The site refuses the engineer-portfolio rut of a dark terminal with neon monospace, and it refuses the cream-plus-serif editorial default this site itself used before the rebuild. The craft bar is linear.app's level of finish, light only, taken as a standard of precision rather than as a look to clone; the long-form-editorial, interactive-explainer, and print-press idioms (craigmod.com, ciechanow.ski, stripe.com/press) are named rejections.

**Key Characteristics:**
- Warm-neutral near-white ground (`#fcfcfb`), never cream, never dark.
- One typeface for everything (Archivo) plus one mono (JetBrains Mono) restricted to labels and measured values.
- Hairline rules and tonal grounds instead of shadows and cards.
- A single accent, one instrument blue, spent almost entirely on primary action and focus.
- Three-tier token architecture: primitives, semantic mapping, behavior — components touch only the middle tier.
- Motion and reveals are opt-in for users who allow motion; content is never JavaScript-dependent to be readable.

## Colors

A near-monochrome warm neutral field with a single cool blue that behaves like an instrument marking rather than a brand splash.

### Primary
- **Instrument Blue** (`{colors.accent}`): the only chromatic voice. It is spent on the primary button fill, the visible focus outline, and nothing else routine. Its darker sibling **Instrument Blue Pressed** (`{colors.accent-hover}`) is the hover fill for that same button, and **Instrument Wash** (`{colors.accent-soft}`) is the text-selection background — a tint so faint it reads as a highlighter, not a fill.

### Neutral
- **Daylight Paper** (`{colors.ground}`): the page ground everywhere, including the browser theme colour. Warm-neutral near-white; the whole world sits on it.
- **Paper Raised** (`{colors.ground-raised}`): the lighter of the two secondary grounds, reserved for a surface that must separate from the page without a rule.
- **Paper Sunk** (`{colors.ground-sunk}`): the interaction ground. It is the hover fill for nav items and secondary buttons and the resting fill behind media frames.
- **Graphite Ink** (`{colors.ink}`): all primary text, headings, wordmark, and active nav state.
- **Reading Grey** (`{colors.ink-muted}`): body prose in a supporting role — deks, section paragraphs, footer copy, resting nav labels.
- **Annotation Grey** (`{colors.ink-soft}`): the quietest tier — labels, dates, venues, years, copyright.
- **Hairline** (`{colors.line}`): every divider, section boundary, header underline, and list rule. This colour does more structural work than any other in the system.
- **Hairline Strong** (`{colors.line-strong}`): the stroke of an interactive outlined element — secondary button, menu button, wordmark badge.

### Named Rules
**The Two Rules Rule.** Structure is drawn with exactly two line weights, both hairlines: `{colors.line}` for anything the eye passes over (dividers, section boundaries) and `{colors.line-strong}` for anything a finger can hit. There is no third border colour and no thicker rule.

**The One Blue Rule.** The accent appears on the primary action and the focus ring. It is not used to colour body links, headings, icons, hovers on text, or decorative fills. If a screen shows more than one blue element at rest, one of them is wrong.

**The Ink Ladder Rule.** Text tone descends in exactly three steps — ink for what is said, muted for what supports it, soft for what annotates it. Nothing is lighter than `{colors.ink-soft}`, and no text tone is invented between the rungs.

**The No Raw Hex Rule.** Components may only use the mapped Tailwind colour utilities (`bg-ground`, `text-ink-muted`, `border-line`, `bg-accent`, …). Raw hex in a component is a defect even when the value matches a token; `globals.css` tier 1 is the only place a colour literal is written.

## Typography

**Display / Body Font:** Archivo (with `ui-sans-serif`, `system-ui`, `sans-serif`), loaded into the generic slot `--font-sans-var`
**Label / Value Font:** JetBrains Mono (with `ui-monospace`, `monospace`), loaded into `--font-mono-var`

**Character:** One grotesque does all the talking — Archivo is neutral, slightly condensed, and modern enough to look engineered without looking technical. The mono is not a second voice but an instrument face: it appears only where a value is being reported, so a number in JetBrains Mono is a signal that it is a reading. Both faces load through generic CSS slots, so a face swap is a two-line change in the root layout.

### Hierarchy
- **Display** (weight 560, `clamp(2.25rem, 1.7rem + 2.6vw, 3.5rem)`, line-height 1.15, tracking `-0.02em`): the single h1 per route — the home thesis and every `PageHeader` title. Always balanced (`text-balance`) and held to the measure or `max-w-3xl`.
- **Headline** (weight 560, `clamp(1.75rem, 1.4rem + 1.6vw, 2.5rem)`): the h1 of a note article, where a long title needs to sit inside a reading column rather than dominate a landing viewport.
- **Title** (`clamp(1.375rem, 1.2rem + 0.8vw, 1.75rem)`): the home hero dek, the contact email address, and the mono value in a readout tile.
- **Subtitle** (weight 500, `1.25rem`): a `Section` h2, an in-article h2, and a page dek.
- **Body** (`1.0625rem`, line-height 1.65, features `ss01` + `cv11`): the document default set on `body`; prose runs at the 68ch measure with `text-pretty`.
- **Caption** (`0.8125rem`): footer copyright and other trailing metadata.
- **Label** (mono, `0.6875rem`, tracking `0.14em`, uppercase, `{colors.ink-soft}`): the single small-type recipe in the system — section group names, dates, tags, footer column heads, the "back to notes" link.
- **Reading** (mono, tabular figures): any reported number — readout values, publication years, durations. Delivered by `.font-mono-fig`; `.tabular` and every `<time>` element also get tabular numerals from the base layer.

### Named Rules
**The Mono Is A Reading Rule.** JetBrains Mono is reserved for measured values and labels. It never sets prose, headings, navigation, or button text. If mono appears somewhere that isn't reporting a value or naming a group, it is decoration and must come out.

**The One Label Recipe Rule.** All uppercase small type is `.label` — one font, one size, one tracking, one colour. There is no second small-caps style, no per-page label variant, and no locally tuned tracking or 10px size.

**The Non-Jitter Rule.** Numerals that stack in a column must not shift between rows: use `.font-mono-fig` or `.tabular` (or a real `<time>`) for anything numeric that repeats down a list.

**The One H1 Rule.** `PageHeader` owns the single h1 of a route. A `Section` contributes an h2 only through its `title` prop, which renders a real heading wired to the section via `aria-labelledby`; the `label` prop renders a plain `<p class="label">` and outranks nothing. A group name that must sit above inner h3s is passed as `title`, never as `label`.

## Layout

One container for the whole site: centred, `max-w-6xl` (72rem), with gutters of `1.25rem` rising to `2rem` at the `sm` breakpoint. Nothing escapes it, and there is no full-bleed surface anywhere in the build.

Prose is held to a 68ch measure via `.measure`, independent of the container. That is the difference between the reading column and the layout column: the container sets the page's edges, the measure sets how far a line may run inside it.

The site's structural unit is the ruled section. A `Section` closes with a bottom hairline and lays out on a two-column grid above `lg`: a fixed `10rem` left rail carrying the label and h2, then the content column (`minmax(0, 1fr)`) with a `4rem` gutter. Below `lg` the rail collapses to sit above the content with a `2rem` gap. Vertical padding is `3.5rem` rising to `5rem` at `sm`; the home hero and the footer run looser (`5rem`/`7rem` and a `6rem` top margin respectively).

Rhythm comes from a 4px-based scale, and in practice the build spends the coarse end: `1.25rem` for tile and row padding, `2rem`-`2.5rem` between a block and its follow-on link, `3rem`-`3.5rem` between grouped blocks, `6rem` to separate the footer from the page. Responsive behaviour is a small set of collapses rather than a grid system: the section rail collapses at `lg`, primary nav collapses to a Menu button at `md`, the photography grid runs 2-up then 3-up at `sm`, the footer runs one column then `1fr auto auto` at `sm`, and the readout strip runs 2-up then 4-up.

### Named Rules
**The Hairline Boundary Rule.** Sections are separated by a single bottom hairline on the section itself, not by background changes, gaps, or cards. The page reads as one continuous sheet ruled into bands.

**The Measure Rule.** Any run of prose gets `.measure` (68ch). Headings may exceed it only via an explicit `max-w-3xl`; body text never runs the full container width.

## Elevation & Depth

There is no shadow vocabulary. The system is flat by construction: no `box-shadow` token exists in tier 1, and no component in the build carries a resting shadow. Depth is entirely tonal and linear — a hairline to divide, a stronger hairline to signal that something is interactive, `{colors.ground-sunk}` to fill a hovered target, and space to group. The one place the build lifts anything is the skip link, which becomes a fixed focused chip with a faint browser-default small shadow while focused; that is an accessibility affordance, not an elevation system.

The header is the only translucent surface: it sticks to the top at `z-40` over a `backdrop-blur-md` with the ground at 85% opacity (70% where `backdrop-filter` is supported), separated from content by the same hairline as everything else. Translucency there is a scroll cue, not a material.

### Named Rules
**The Flat Sheet Rule.** Surfaces do not lift. No shadows, no glows, no offset borders, no gradients. If a surface needs to separate from the page, use a hairline or a tonal ground — in that order.

## Shapes

The form language is rectangular and quiet. Corners are barely rounded: `{rounded.DEFAULT}` (6px) is the house radius for anything a user acts on — primary button, secondary button — and `{rounded.lg}` (10px) is reserved for media frames, where a larger image needs a slightly softer corner to avoid looking cropped. Focus rings round to 2px so the outline hugs whatever it wraps, including inline text.

Strokes are 1px, always. Interactive outlines take `{colors.line-strong}`, structural rules take `{colors.line}`, and there is no double border, no ring plus border, and no dashed or dotted variant. Two recurring silhouettes define the build: the full-width ruled row (a horizontal rule above and below a stack, hairlines between) and the hairline-gap grid — a grid with `gap-px` on a `{colors.line}` background so the gaps themselves read as rules, used for the four-up readout strip.

Note the one divergence from the token: the header chrome (wordmark badge, nav items, contact chip, menu button) is drawn at a literal `5px` radius rather than the 6px token. It is consistent within the header, but it is a leftover literal, not a second radius step. New surfaces use `var(--radius)`.

### Named Rules
**The Barely-Rounded Rule.** 6px on controls, 10px on media, 2px on focus, 0 everywhere else. A radius above 10px does not exist in this world, and neither does a pill.

## Components

### Buttons
- **Shape:** barely-rounded corners (`{rounded.DEFAULT}`, 6px), no shadow.
- **Primary:** instrument-blue fill with white text, `0.5rem 1rem` padding, body type at normal weight. Used once per view for the true next action (Contact, the header chip).
- **Hover / Focus:** background crossfades to `{colors.accent-hover}` over `var(--duration-fast)` (140ms). Focus is the global 2px accent outline at 2px offset; it is never suppressed.
- **Secondary:** transparent on the page ground with a `{colors.line-strong}` hairline stroke and ink text, same padding and radius; hover fills `{colors.ground-sunk}` rather than changing the stroke. Used for the resume download beside the primary action.

### Cards / Containers
There are no cards. The two container shapes in the build are:
- **Readout tile:** page-ground cell inside a `gap-px` hairline grid, `1.25rem` padding, a mono value at Title size over a `.label` caption. No border of its own — the grid gap is the border.
- **Media frame:** `{rounded.lg}` (10px) with a `{colors.line}` hairline and `overflow-hidden`, fixed `4/5` aspect. On group hover the image scales to `1.015` over `var(--duration-base)`; the frame itself never moves.

### Navigation
Slim sticky header, `3.5rem` tall, hairline-bottomed, translucent with backdrop blur. The wordmark is a small outlined `N` badge beside the name at `0.9375rem` medium. Route links are `0.875rem`, resting in `{colors.ink-muted}` and hovering to ink over a `{colors.ground-sunk}` fill; the active route is set in ink and carries `aria-current="page"`. A blue Contact chip sits at the right from `sm` up. Below `md` the link row is replaced by a Menu / Close toggle that opens a stacked list of hairline-divided rows on the solid ground; it closes on route change and on Escape. The footer navigation is three groups under `.label` heads with `0.875rem` muted links that darken to ink on hover.

Every text link in content uses the house underline: `.link-underline` draws a 1px `currentColor` rule 2px below the text that scales in from the left over 200ms on hover **and** on `:focus-visible`, so a keyboard user sees exactly what a mouse user sees.

### The Ruled List
The signature component, and the shape most of the site's content takes. A `ul` with `divide-y divide-line border-y border-line` holds rows padded `1.25rem 0`. Each row's head is `flex flex-wrap items-baseline justify-between` with `gap-x-6 gap-y-1`: an h3 title (Body size, medium weight, ink) on the left and a mono value or `.label` on the right, baseline-aligned so the number sits on the same line as the title and wraps under it on narrow screens. A supporting paragraph, when present, follows at the measure in `{colors.ink-muted}`. When a list needs to be surveyed rather than read, this is the answer — not a card grid.

### Reveal
Scroll reveals are opt-in by media query. The hidden state (`opacity: 0`, `translateY(8px)`) exists only inside `@media (prefers-reduced-motion: no-preference)`, an IntersectionObserver adds `.in` at a 0.12 threshold with a `-60px` bottom root margin, the client also short-circuits to visible when reduced motion is set or the observer is missing, and a `<noscript>` style in the root layout forces `.reveal` visible. Stagger is passed as the CSS variable `--reveal-delay` (60ms per index in every use in the build), never as a JavaScript timer.

### Focus and Skip
Focus is a designed state: a 2px `{colors.accent}` outline at 2px offset on every `:focus-visible` element, plus the `.link-underline` reveal on links. The first focusable element on the page is a screen-reader-only skip link that becomes a visible fixed chip on the ground at top-left when focused.

## Do's and Don'ts

### Do:
- **Do** edit tier 1 of `globals.css` and only tier 1 when the world changes; tier 2 maps semantics to utilities and tier 3 holds behavior.
- **Do** use only the mapped colour utilities in components (`bg-ground`, `text-ink-soft`, `border-line-strong`, `bg-accent`).
- **Do** reach for the ruled list (`ul.divide-y.divide-line.border-y.border-line` with `flex flex-wrap items-baseline justify-between` rows, title left, mono value or label right) for any set of comparable items.
- **Do** pass a group name to `Section` as `title` when it must outrank inner h3s; `label` renders only a `<p class="label">` and creates no heading.
- **Do** set every reported number in `.font-mono-fig` / `.tabular` so figures stay tabular and columns do not jitter.
- **Do** wrap prose in `.measure` (68ch) and add `text-pretty` to paragraphs, `text-balance` to display headings.
- **Do** keep transitions at `var(--duration-fast)` (140ms) for colour state and `var(--duration-base)` (200ms) for transforms, on `var(--ease-out)`.
- **Do** let focus show: the 2px accent outline is a system component, and `.link-underline` must fire on `:focus-visible` as well as hover.
- **Do** keep content visible without JavaScript and without motion — reveals stay opt-in behind `prefers-reduced-motion: no-preference` with the `<noscript>` un-hide intact.

### Don't:
- **Don't** write a raw hex value in a component, even a correct one.
- **Don't** add a dark palette. This site is light only by a standing brand commitment from the owner; adding dark mode is a brand decision, not a sensible default.
- **Don't** use monospace for prose, headings, navigation, or button labels — mono means "this is a reading".
- **Don't** invent a second small-uppercase style. If small uppercase type is needed, it is `.label`.
- **Don't** add shadows, glows, gradients, or offset borders to create depth; use a hairline or `{colors.ground-sunk}`.
- **Don't** spend the accent on body links, headings, or decorative fills — primary action and focus only.
- **Don't** build a card grid where a ruled list will do, and don't box a section in a border to separate it.
- **Don't** exceed a 10px radius or introduce a new radius literal; use `var(--radius)` / `var(--radius-lg)`.
- **Don't** let a paragraph run the full 72rem container width.
- **Don't** drive stagger from JavaScript timers; pass `--reveal-delay`.
- **Don't** reach for cream grounds, serif display faces, or the dark-terminal-with-neon-mono idiom. Both are named, confirmed rejections.

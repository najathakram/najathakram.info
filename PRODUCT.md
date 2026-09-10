# PRODUCT.md — najathakram.info

Durable product truth. No visual decisions live here.

## What this is

The personal site of Najath Akram: a signal processing engineer (PhD) who works on the
physical layer of O-RAN radio units, and who also ships AI software products, writes Sinhala
song lyrics, and co-owns a wedding photography studio. Multi-page. Static, no accounts, no
database, no commerce.

## The mechanism, in one sentence

He understands a radio all the way down to the sample, and ships the thing all the way out to
the people who use it, which is a combination almost nobody in wireless actually holds.

## Who it is for, in priority order

1. **Bridge-role hiring managers** in wireless (technical product manager, product line
   manager, solutions architect). They arrive from his resume or LinkedIn, spend two or three
   minutes, and are deciding one thing: is this only an algorithms specialist, or someone who
   can face customers and ship products? They are the reason the site exists in this form.
2. **O-RAN and AI-RAN industry contacts** met at plugfests, alliance meetings, and
   conferences, who look him up on the train afterward. They decide whether to remember him,
   forward him, or forget him. They want something citable.
3. **Senior IC verifiers** giving a technical opinion on him. They check whether the numbers
   are real and the terminology is used correctly. If they scoff, word travels.

## What success looks like

A hiring manager books a call. A conference contact forwards a page to a colleague. A
verifier vouches without qualifying it. Concretely: the site makes the product-side case
without ever self-labeling, and it survives a skeptic who checks the numbers.

## Content truth (all of it real, none of it inventable)

- Currently at Airspan Networks, Houston. Owns the versioned golden models (downlink, uplink,
  low-PHY, PRACH) that firmware is signed off against for multiband LTE and 5G NR O-RAN radio
  units. 29 production debug engagements taken to root cause since joining.
- Previously Jabil: Senior FPGA Engineer to Lead to Principal Design Engineer in four years.
  Wrote the architecture and implementation documents the digital design team built to.
- PhD, Florida International University. 10+ IEEE publications, an AFRL technical report,
  and a dissertation (owner directive 2026-09-09: state the count as "10+", never the exact
  number). Reduced-ADC array receivers: one ADC per four antennas at 28 GHz, and half the
  count again for 2D arrays.
- Tools with real users: an O-RAN fronthaul power and PAPR tool (MATLAB Compiler GUI and CLI
  executables plus a Python version) and an uplink EVM and PRACH analyzer with an RU to DU
  full-scale alignment check, both standalone so lab teams need no instrument or MATLAB
  license; a bit-accurate PRACH model covering every LTE and NR FR1 format.
- AI systems with governance, not demos: TaxLens (IRS citations, evidence ratings, confidence
  scores, hashed and locked ledger steps); Salient (pre-authored case data, a diagnosis leak
  guard, cost controls at every step); RouteFlow (routeflow.info). Forge and AGOS were removed
  from the site at the owner's instruction (2026-09-09 and 2026-08-11).
- Writes Sinhala song lyrics recorded by named artists. Co-owns Pixel Parchment with his wife
  Maznah. Photographs weddings, nature, and cities.
- Founded a Toastmasters club at the University of Ruhuna that grew past 200 members;
  co-founded XBOTIX, a national robotics competition; treasurer of Tau Beta Pi Florida Theta.

## Hard constraints

- **Voice:** understated. The number is the adjective. Work verbs, not stature verbs. Scope by
  enumeration, never evaluation. Name the referee. No adverbs, and adjectives only when
  technical. Full register spec in `.claude/panel-reviews/plan-v2.md`.
- **Banned words:** honest, humble, privilege, genuinely, lovely, entrepreneur, innovator, and
  the whole "innovation" family. No em dashes or en dashes in prose (published paper titles
  keep their own hyphens exactly).
- **Public-safety line:** no customer, OEM, partner, or third-party silicon names in site copy.
  His employers may be named. Employer work stays at conference-talk altitude: measured
  numbers yes, internal product identifiers and program names no. Published paper titles keep
  every vendor name they were published with.
- **Nothing invented.** Only facts verified in the ledger at
  `.claude/panel-reviews/plan-v2.md` may be stated at full strength; contested facts ship in
  their smaller true phrasing.
- The complete publication list must stay reachable at this domain: his printed resume PDFs
  tell readers "full list at najathakram.info".
- Two resume PDFs are served, and both must download as "Najath Akram Resume.pdf".

## Brand commitments (standing, from the owner)

- **The canon, played straight.** Offered an invented visual world (the direction roll assigned
  a phased-array lattice world, seed af8c32fb) and the owner took the standing exit instead.
  Convention is the commitment: no invented metaphor, no smuggled quirk, executed at full
  craft fidelity.
- **Craft bar: linear.app, "kinda okay, not perfect".** Take the craft level, not the look:
  precise spacing scale, restrained palette, real micro-interaction, excellent focus states,
  fast subtle transitions. Do not clone Linear's identity.
- **Light, never dark.** Stated explicitly. No dark theme, no dark hero, no dark mode default.
- **Rejected bars:** craigmod.com, ciechanow.ski, stripe.com/press. Do not reach for
  long-form editorial, interactive-explainer, or print-press idioms.

## What must not change

The facts, the register, and the publication route. Everything visual is open.

## Technical constraints

Next.js 16.2.4 App Router (Turbopack), React 19.2.4, Tailwind v4 (CSS-first, no config file),
TypeScript strict. Static prerender, deployed on Vercel. Accessibility floor: WCAG AA contrast,
visible focus, reduced-motion respected, content never dependent on JavaScript to be readable.

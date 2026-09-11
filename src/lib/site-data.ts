// Single source of truth for all site copy and data.
// Copy policy: conservative register per .claude/panel-reviews/plan-v2.md.
// Only ledger-verified facts at full strength; contested facts use the smaller
// true phrasing (upgrade paths tracked in the plan's copy risk register).
// Publication titles are titles of record and keep their original hyphens.

export type NavItem = { label: string; href: string; kind: "anchor" | "route" };

// Header navigation. Home is reached through the wordmark; Contact is rendered
// separately as the header's single accent action.
export const nav: NavItem[] = [
  { label: "Systems", href: "/systems", kind: "route" },
  { label: "Experience", href: "/experience", kind: "route" },
  { label: "Publications", href: "/publications", kind: "route" },
  { label: "Notes", href: "/notes", kind: "route" },
  { label: "Photography", href: "/photography", kind: "route" },
  { label: "Lyrics", href: "/lyrics", kind: "route" },
];

// Page-level intro copy. Same conservative register as the rest of the site.
export const pageIntros: Record<
  string,
  { title: string; dek: string }
> = {
  systems: {
    title: "Things I have built",
    dek: "Models, tools, and software with the gates that make their numbers trustworthy. The publishable parts, at least.",
  },
  experience: {
    title: "Where the work happened",
    dek: "Ten years in radio, the last six shipping O-RAN radio units.",
  },
  publications: {
    title: "Papers, talks, and a dissertation",
    dek: "Titles as published, with links.",
  },
  notes: {
    // "Notes", not "Writing". The route was calling itself four different
    // things: "Notes" in the nav, the metadata and the back-link, "Writing" in
    // the h1. Three of the four already said Notes, so Notes wins.
    title: "Notes",
    // Dated framing on purpose: these are 2020-2022 pieces, and presenting them
    // as current practice was the single biggest problem the panel found here.
    // It also resolves the mismatch where one post is not about wireless.
    dek: "Earlier pieces, written between 2020 and 2022, kept because the writing was worth keeping.",
  },
  photography: {
    title: "Photographs",
    // The last sentence is the one a senior manager notices, and it is earned by
    // the fact of the business rather than by an adjective: a wedding is a
    // genuinely immovable deadline with real clients and no second take. Stated
    // once, lightly, with no claim attached.
    dek: "Weddings from Pixel Parchment, the studio my wife Maznah and I run, and whatever the camera finds otherwise. A wedding is the one deadline that will not move for anybody, which turns out to be decent practice for shipping things.",
  },
  lyrics: {
    title: "Sinhala song lyrics",
    // Active voice, on purpose: the previous version never said plainly that he
    // wrote any of it, so the panel read the page as a favourites list.
    dek: "I write Sinhala song lyrics. These are seven of them, recorded by other people. A selection: some earlier credits are not linked here yet.",
  },
  contact: {
    title: "Get in touch",
    dek: "Email reaches me directly.",
  },
};

// There is deliberately no stats-strip export here. A big-number-with-tiny-caps-
// label row is a banned pattern, and pulling a measurement out of its sentence
// strips the meaning that made it worth stating. Numbers belong mid-sentence,
// as a property of the work: see `about`, `systems`, and the experience
// highlights, where each one keeps its referee and its units.

export const profile = {
  name: "Najath Akram",
  siteUrl: "https://www.najathakram.info",
  location: "Houston, Texas",
  email: "akram.m.n@ieee.org",
  phone: "+1 (330) 990-8406",
  linkedin: "https://www.linkedin.com/in/najath",
  // Both corrected by the owner 2026-08-06. The previous IEEE id (37086418999)
  // was wrong, and the previous Scholar URL was a placeholder that never resolved.
  ieee: "https://ieeexplore.ieee.org/author/37086499364",
  scholar: "https://scholar.google.com/citations?user=RMi0JYQAAAAJ",
  // No employer here, by owner direction 2026-08-10: the site is about him, not
  // about the company. The current employer stays where it belongs, in the
  // `experience` record below, and nowhere in the identity or hero copy.
  role: "Signal Processing Engineer",
  // `identityLine2` deleted 2026-08-10. It was never rendered anywhere, and it
  // led with a former employer, which is the thing the identity copy is now
  // meant to avoid. Employers live in `experience`, not in the identity.
  // Owner's decision, 2026-08-10: this site is NOT a job application, and must
  // not read as one. The job-seeking signal lives on LinkedIn ("open to work,
  // recruiters only"), which is the right place for it. What stays here is a
  // plain statement of what the work is, with no ask attached.
  openTo:
    "Most of the work here sits between signal processing and the radios that have to carry it.",
  // OWNER DIRECTION 2026-09-10: one resume on the site, and it is the one at
  // Resume/Najath Akram Resume.pdf. The product variant (Resume/Najath Akram
  // Resume - Product.pdf) is NOT to be served here; the /resume/product/ and
  // /resume/technical/ paths were removed with it. Copy the built PDF to
  // public/resume/ after any resume edit. Percent-encoded because the served
  // filename deliberately keeps its spaces, so the download lands as
  // "Najath Akram Resume.pdf".
  resume: "/resume/Najath%20Akram%20Resume.pdf",
};

// The landing moment. Short on purpose: a headline someone remembers, one line
// of what that means, one line of what it means this year. The long evidence
// lives further down the page and on the routes.
export const hero = {
  headline: "I build the part of a radio you never see.",
  lede: "The physical layer: where information becomes electromagnetic waves and, with a bit of luck, becomes information again on the other end.",
  now: "These days that means multiband O-RAN radio units, some early 6G, and AI agents that have to prove their work like everyone else.",
};

// The three things that are true about him at once. This is the reason to keep
// reading, so it sits directly under the headline.
export const identities: { label: string; body: string; href: string }[] = [
  {
    label: "Signal processing",
    body: "O-RAN radio units now, a PhD before that. Most of my papers are about getting more antennas out of fewer converters.",
    href: "/systems",
  },
  {
    label: "Song lyrics",
    // No count here on purpose. It would duplicate `lyrics.length`, and that
    // list is a selection rather than the complete set, so any number written
    // into prose is wrong the moment a credit is added. Never hardcode a
    // quantity that some other array already knows.
    body: "Sinhala songs, written for other people to sing. Not one of them is about radios.",
    href: "/lyrics",
  },
  {
    label: "Photographs",
    body: "Weddings for Pixel Parchment, the studio my wife Maznah and I run, plus whatever the camera finds on the way home.",
    href: "/photography",
  },
];

export const focusAreas = [
  "Digital signal processing",
  "O-RAN, 5G, 6G physical layer",
];

// OWNER DIRECTION, 2026-08-10, and it overrides the war-room panel.
//
// This site is not a job application and must not read as one. Stronger than
// that: **you do not write about your day-to-day job on a personal website.**
// The resume covers the job. This site is what he is outside of it, and what he
// has built and made in his own right.
//
// Consequences, all owner-stated: no boasting about current work. No debug
// counts or month spans (to have debugged something you need a bug, and that is
// internal). No employer task descriptions, however well they read. No employer
// names outside the `experience` record. No inviting the reader to hear his
// opinions.
//
// The panel's top finding was "no outcomes stated anywhere". The owner has
// declined it on purpose, which caps the score a hiring-funnel panel would
// give. That is the correct trade, because winning a hiring funnel is not what
// this site is for.
export const about: string[] = [
  // OWNER DIRECTION 2026-09-11. Register: fluent, senior, technical. Authority
  // comes from what the work is depended on for, never from titles or adjectives.
  //
  // Two rejected rewrites, so the failure modes are on record:
  //   1. Promotions and title ladders ("senior engineer to lead to principal").
  //      "Who cares about promotions?" Titles stay plain facts in `experience`.
  //   2. Cute personification ("persuading four antennas to share one converter",
  //      agents that "type faster and with more confidence"). Rejected as cringy.
  // The third failure was prose that read translated: "ten years in radio" (radio
  // is broadcasting; the field is wireless), "the same seam", "in a document
  // describing", uncontracted "I have stayed". Keep the English plain and native:
  // active voice, precise domain nouns used casually, no strained metaphor.
  "I'm Najath. Ten years in wireless, the last six on O-RAN radio units. Before that, a PhD at Florida International University on receivers that get by with a quarter of the converters.",
  "Most of what I do sits between the math and the hardware: the reference models firmware is signed off against, the documents other people build from, and the tooling that proves the checks themselves work.",
  "A fair amount of what I build now has AI agents in it. They changed how much code I write and nothing about what I trust. Independent decoders re-read every exported byte off disk, and mutation tests plant faults to prove the checks can catch them.",
];

export const expertise = [
  {
    id: "dsp",
    title: "Signal processing",
    body:
      "Digital beamforming, phased arrays, and the quiet art of doing more with fewer ADCs. A good portion of my PhD went into trading converters for mathematics: one ADC per four antennas at 28 GHz, and half the count again for 2D arrays, using multidimensional signal processing and approximate FFTs.",
  },
  {
    id: "oran",
    title: "O-RAN radio units",
    body:
      "Digital front ends, crest factor reduction, EVM, PIM, and the fronthaul that carries it all: split 7.2x, eAxC, the WG4 CUS-plane. I spend most of my days here. If something about a waveform looks wrong on a spectrum analyzer, it usually becomes my afternoon.",
  },
  // The "Machine learning" card was removed 2026-08-11 at the owner's
  // instruction: that work is not for sharing. Do not reintroduce it, and do not
  // reintroduce ML-in-radio claims anywhere else on the site either. AI in the
  // owner's OWN products (TaxLens, Salient, RouteFlow) is a separate matter and
  // stays. Forge was removed 2026-09-09 at the owner's instruction.
];

export type Role = {
  company: string;
  location: string;
  positions: { title: string; period: string }[];
  summary: string;
  highlights?: string[];
};

export const experience: Role[] = [
  // OWNER DIRECTION 2026-09-09, superseding the 2026-08-10 minimalism above: the
  // Experience and Systems pages now mirror the resume's bullets, fact for fact.
  // The public-safety line still holds: no customer, operator, ODM, or program
  // names, and vendor IP is "the vendor's" rather than a silicon brand. Still no
  // debug counts. The facts below are the resume's (Resume/Najath Akram
  // Resume.docx, which the owner hand-edits); change them there first.
  {
    company: "Airspan Networks",
    location: "Houston, TX",
    positions: [
      { title: "Signal Processing Engineer", period: "Jan 2025 to present" },
    ],
    summary:
      "O-RAN 7.2x radio units: bit-accurate DFE and low-PHY reference modeling, FPGA IP verification, and the fronthaul test tooling the lab teams run. I own the golden models of the downlink, uplink, low-PHY, and PRACH chains, versioned and used to generate the RTL and fronthaul test vectors firmware is signed off against, and I generate the 3GPP test waveforms the system test, RF test, firmware verification, and software teams work from.",
    // Highlights 3 and 4 used to restate the Systems entries for the power tool
    // and the EVM analyzer almost word for word; merged into one pointer line
    // (2026-09-09) so the depth lives in one place instead of two.
    highlights: [
      "I built and maintain the bit-accurate downlink and uplink DFE and low-PHY reference models that generate the RTL golden vectors, so RTL is compared bit for bit rather than to a tolerance: NR and LTE test models through IFFT and FFT, CFR, the vendor's channel-filter and mixer IP C-models, and O-RAN BFP at 8, 9, 10, 12, and 14 bits, across 3 to 100 MHz including combined-band carriers such as B28 with B20.",
      "I built the bit-accurate PRACH receive-chain model, from the vendor's PRACH DDC and decimation through CP removal, FFT, subcarrier extraction, BFP and U-plane packing, and detection, covering every LTE format and all NR FR1 formats, long and short preambles, FDD and TDD.",
      "The O-RAN fronthaul power and PAPR tool and the uplink EVM and PRACH analyzer, including its RU to DU full-scale alignment check, live under Systems.",
      "I built the expected versus captured IQ comparison GUI used in bring-up: cross-correlation delay alignment, overlaid PSD and PSD difference, and dBFS power readout for hex, BFP, .mat, and raw binary captures.",
      "I re-clocked CFR from 491.52 to 245.76 MSPS and redesigned the cancellation pulses and channel filters for 3 to 20 MHz to meet an operator's 3 MHz carrier requirement (a 3 MHz channel filter is not realizable at 30.72 MSPS), tuning cutoff and pulse length against a per-symbol constellation EVM metric rather than the vendor's RMS figure: 2.17 to 2.23% EVM at 3, 5, and 10 MHz inside ACLR and OBUE margin.",
      "I built a multiband PIM planner that catalogs IM3, IM5, and IM7 products for multi-carrier downlink and flags uplink-band hits, checked by hand against a B71, B29, and B14 stack.",
    ],
  },
  {
    company: "Jabil",
    location: "Warren, NJ and Houston, TX",
    // Titles verified against LinkedIn 2026-08-10. Month-level periods come from
    // the owner's own resume edit of 2026-09-09.
    positions: [
      { title: "Principal Wireless Systems Design Engineer", period: "Dec 2023 to Aug 2024" },
      { title: "Lead Wireless Systems Design Engineer", period: "Sep 2021 to Dec 2023" },
      { title: "Senior FPGA Design Engineer", period: "Dec 2020 to Sep 2021" },
    ],
    summary:
      "Four years of O-RAN radios, single band to tri band. I ran software and firmware workstreams, defined NR implementation requirements, and wrote the architecture and implementation documents the digital design team built to. I also spent a fair amount of time in front of customers explaining passive intermodulation, which taught me more about what a radio has to be than any specification did.",
    highlights: [
      "Led the software and firmware workstreams for LTE and 5G NR O-RAN radio units from single-band to tri-band through commercial release: defined NR implementation requirements, wrote the architecture and implementation documents the digital design team built to, weighed massive MIMO and O-RAN functional-split options against implementation complexity, resources, and timelines, and briefed customers on passive intermodulation.",
      "Primary author of the DFE System Design Documents for two radio lines, a B3 FDD radio (5 to 40 MHz) and a 100 MHz TDD radio: the interpolation chain to 983.04 MSPS, pulse-shaping filters derived from TS 38.104 guard-band rules and grouped into five classes covering thirteen bandwidths, CFR cancellation-pulse configuration, and uplink decimation and PRACH routing.",
      "Authored the firmware implementation guides for the NR symbol phase-compensation term of TS 38.211 section 5.4 (quadrant-folded trigonometric LUT, 4097-entry table, 21-bit minimum phase accumulator, numerology-dependent parameters, since a wrong term shows up as a rotated constellation) and for RFSoC pre-emphasis (per-subcarrier 16-bit LUTs flattening pulse-shaping passband droop for 5 to 30 MHz, with the LTE and LTE plus NB-IoT edge cases per TS 38.104 section 5.7.3).",
      "Wrote the uplink DFE receiver test plan for LTE, NR, and MSR against TS 36.141 and TS 38.141: reference sensitivity, dynamic range, in-channel and adjacent-channel selectivity, and narrowband, in-band, and out-of-band blocking, with bottom, mid, and top frequency coverage per band and VRB-offset sweeps.",
      "Designed 8-block PRACH detection within the PRACH core's 4K-FFT limit by cascading two 4K FFTs as a filter bank with per-block phase-rotation correction, and mapped LTE and NR PRACH subcarriers onto the core's FFT sizes and decimation ratios.",
      "Ran filter design, CFR simulation, and cancellation-pulse generation for uplink, downlink, and PRACH DFE firmware: a hard-clipper threshold sweep in 0.1 dB steps that set the 7.8 dB PAR operating point for E-TM 3.1, a first- and second-difference slew-rate detector for post-IFFT overflow, and cancellation-pulse analysis delivered to a major OpenRAN program partner in 2022.",
      "Generated RTL stimulus vectors, integrated the vendor's hard-IP C-models, developed executable models for UVM testbenches, and wrote PCAP tooling to extract O-RAN C-plane and U-plane data for bit-accurate system modeling.",
    ],
  },
  {
    company: "Florida International University",
    location: "Miami, FL",
    positions: [{ title: "Graduate Research Assistant, PhD", period: "2018-2020" }],
    summary:
      "PhD research on hardware-efficient massive MIMO. I built a 28 GHz digital beamforming array receiver that used one ADC per four antennas instead of one per antenna, and a multidimensional scheme that halved the ADC count for 2D arrays. The lab had a few RFSoC boards and quite a lot of patience.",
  },
  {
    company: "MathWorks",
    location: "Natick, MA",
    positions: [{ title: "Engineering Intern", period: "2019" }],
    summary:
      "A summer on HDL Verifier workflows and Ethernet PHY IP across a few FPGA families. Two awards in the intern hackathon.",
  },
  {
    company: "The University of Akron",
    location: "Akron, OH",
    positions: [{ title: "Graduate Research Assistant", period: "2016-2018" }],
    summary:
      "DARPA, NSF, and AFRL funded research on multidimensional DSP for RF systems. This is where I first fell for approximate DFTs and multidimensional sigma-delta ADCs, and where I learned that a good algorithm and a bad one can look identical on paper and very different on silicon.",
  },
  {
    company: "Synopsys",
    location: "Colombo, Sri Lanka",
    positions: [{ title: "Product Verification Intern", period: "2015" }],
    summary:
      "First exposure to ASIC verification: Spyglass, SystemVerilog, VHDL, and a great deal of Perl.",
  },
];

export type System = {
  id: string;
  title: string;
  tag: string;
  body: string;
  /** Public site for the system, where one exists. Rendered as the title link. */
  url?: string;
};

// Every figure here traces to Resume/PROJECTS.md, which was verified against the
// actual project folders on 2026-08-07. Claims that document marks as
// unverifiable are absent rather than softened, and its "do not claim" lines are
// respected: no all-configs-pass, no calibrated dBm, no IRC in fixed point.
export const systems: System[] = [
  {
    id: "golden-models",
    title: "The bit-accurate models firmware is verified against",
    tag: "Modeling",
    body:
      "Bit-accurate models of the downlink, uplink, low-PHY, and PRACH chains of multiband O-RAN radio units, and the source of the RTL golden vectors firmware is signed off against. NR and LTE test models run through IFFT and FFT, CFR, the same channel-filter and mixer IP C-models the FPGA uses, and O-RAN BFP compression at 8, 9, 10, 12, and 14 bits, so firmware verification can compare RTL output stage by stage and treat any difference as a defect rather than a question of tolerance. Every intermediate stage is exported, so when a test team hits something unexpected on the bench the problem can be narrowed to the stage that first disagrees. The models also carry the architectural work, evaluating filter and gain structures before a configuration is committed to hardware. Carriers from 3 to 100 MHz, FDD and TDD, including combined-band carriers such as B28 with B20, packaged as versioned executables so running them needs no MATLAB license.",
  },
  {
    id: "prach",
    title: "A PRACH receive chain covering every configuration",
    tag: "Verification",
    body:
      "PRACH is the first thing a radio hears from a phone, and it is the most configuration-dependent chain in the receiver. The model runs the whole receive chain bit-accurately, from the PRACH DDC and decimation through cyclic prefix removal, FFT, subcarrier extraction, BFP and U-plane packing, and detection, and covers LTE formats 0 to 3 and full NR FR1, long and short preambles, and all 256 configuration indices in both FDD and TDD. What makes it harder than the rest of the receive path is that very little is fixed. Preamble format, subcarrier spacing, and the occasion pattern together decide where in time and frequency a preamble is even allowed to appear, so the search window has to be derived per configuration rather than written down once. Timing has to be right to the sample, cyclic prefix and guard handling change with format, and the root sequence and cyclic shift have to be recovered without being told which ones were sent. Getting a single configuration right proves very little, which is why the model is exercised across the whole index space instead of a representative few.",
  },
  {
    id: "pim",
    title: "Predicting where intermodulation will land",
    tag: "Tooling",
    body:
      "Passive intermodulation is far cheaper to design around than to find later. Once a radio is built, a product falling in its own uplink band presents as a sensitivity problem that looks like several other faults, and tracing it back to the mixing that caused it is slow work. This enumerates third, fifth, and seventh order products across a 46-band catalog and flags any that land in an uplink band, for the mixing topologies of single, dual, and tri-band radios. It uses corner-evaluation interval arithmetic, so the reported hit ranges are exact across the band edges rather than sampled at a few frequencies and assumed representative. The use is band-combination planning: combinations can be ruled in or out before anyone commits to a filter plan. Products are ranked in dBc, and the power figures are relative rather than calibrated, which the tool states plainly. The catalog was checked by hand against a B71, B29, and B14 stack before anyone trusted it.",
  },
  {
    id: "ul-test-tool",
    title: "Uplink EVM without an instrument license",
    tag: "Tooling",
    body:
      "The radio unit does not do channel estimation or equalization, so measuring uplink quality means demodulating the fronthaul capture somewhere else. That is normally a Keysight 89600 vector signal analyzer, and the licenses cost enough that there are only ever a few seats to share. Most of the people waiting for one need to open a PCAP, find the uplink data going from the O-RU to the O-DU, demodulate it, and read an EVM. This does that as a standalone executable with no license attached: PUSCH and PRACH demodulated straight from 7.2x U-plane captures, uncompressed or block-floating-point compressed, with result views aligned to the VSA so the two can be read side by side. It also settles a recurring interop argument. An RU to DU full-scale alignment check emulates the DU's fixed-point ingest (shift, container width, wrap or saturate) against the per-PRB BFP exponents in the capture and returns a pass or fail that separates a radio misconfiguration from a DU ingest error. The instrument seats stay free for the work that needs them.",
  },
  {
    id: "power-tool",
    title: "Fronthaul power, read straight off a capture",
    tag: "Tooling",
    body:
      "Several O-DU vendors, and they read the fronthaul standard differently. The power levels arriving on the wire differ with them, so getting the downlink right, and sometimes the uplink gain, depends on knowing what to expect rather than assuming. This reports per-eAxC dBFS power from an O-RAN fronthaul PCAP per the WG4 CUS-plane measurement definitions, with grid-domain PAR, per-tone PAR, and oversampled time-domain PAPR for the uplink kept as separate numbers, because they answer different questions. Direction, numerology, BFP width, and the eAxC bit split are worked out from the capture itself, and the compressed-domain full-scale reference is derived per section 8.1.3.1 rather than assumed. Shipped as MATLAB Compiler GUI and command-line executables, and as a Python version that batches a folder of captures into a spreadsheet, so nobody has to install MATLAB or Python to read a power number.",
  },
  // The polyphase filter bank entry was removed 2026-08-11 at the owner's
  // instruction, from the site and from the resume. Do not reinstate it.
  {
    id: "taxlens",
    title: "TaxLens: rebuilding a year of books from the statements",
    tag: "Software",
    body:
      "Small businesses rarely have the capacity for meticulous bookkeeping, and personal and business money get mixed along the way: a business payment goes on a personal card, a personal one on the business account. By the end of the year it is a stack of statements, and putting it back in order means working through every transaction, which is hours of it whether the owner does the work or pays somebody else to. TaxLens does that reconstruction from the raw statements. It asks about the transactions it cannot place, learns how the particular business actually operates, and categorizes the way an experienced accountant would rather than by keyword: what is deductible, under which IRS category, against current guidance. Every deductible dollar carries a tax-code citation, an evidence tier, and a confidence score; classifications are append-only; and a citation it cannot verify is flagged rather than asserted. On one real client year it also found about ten thousand dollars of double-counted bounced payments that manual review had missed. It deliberately cannot file anything.",
  },
  {
    id: "salient",
    title: "Salient: exam practice against a patient who cannot leak the answer",
    tag: "Software",
    body:
      "Clinical exam practice needs a patient who behaves like one: answers what is asked, withholds what a real patient would not volunteer, and never hints at the diagnosis. A general chat model manages the first and fails the other two, and it will invent a lab value if asked confidently enough. Salient is built so that it cannot. Every examination finding and lab result is pre-authored and schema-validated, so ordering an investigation is a deterministic lookup rather than something generated on the spot, and a leak guard redacts any reply that would give the diagnosis away. Six model roles are tiered by how hard each job really is, so the cheap work runs on cheap models. Cost governance sits in three layers over a per-call ledger denominated in micro-cents, because an AI product without a budget is a bill waiting to happen. Around 700 unit tests and 24 browser journeys run in CI.",
  },
  {
    id: "routeflow",
    title: "RouteFlow: one system for a wholesale distribution business",
    tag: "Software",
    url: "https://www.routeflow.info",
    body:
      "Wholesale distribution needs inventory, costing, supply chain, orders, taxes, regulated-item sales, bookkeeping, and delivery route management, and there are very few systems that cover all of that rather than most of it. Running four tools instead means the numbers never quite agree. RouteFlow is the whole set in one place, and it works from both ends: the distributor runs catalog, orders, driver routes with proof of delivery, and compliance filings, while the retail shops order from all of their suppliers through the same platform instead of a separate portal for each. Inventory transfers straight through a sale, supplier invoices are scanned rather than typed, and one item can carry separate wholesale and retail SKUs. The problem underneath it is that a growing small business often cannot say what it is actually making, because the transactions and the expenses live in different places and never get added up in one view. AI does the parts that are judgment rather than arithmetic: reading a scanned invoice into line items, matching them to catalog products, and categorizing expenses so the profit figure is built from everything instead of from whatever got entered. Tenant isolation sits at the database layer, where an extension injects the tenant into every query and write rather than trusting each developer to remember.",
  },
];

export type Publication = {
  id: string;
  title: string;
  venue?: string;
  year?: string;
  type: "Journal" | "Conference" | "Dissertation" | "Report";
  url?: string;
  featured?: boolean;
};

// Titles are titles of record (hyphens preserved; verified against the
// publisher pages where links exist). Links are IEEE Xplore document pages
// and DTIC; DOIs can replace them when confirmed.
export const publications: Publication[] = [
  {
    id: "freq-mux-adc",
    title:
      "Frequency-Multiplexed Array Digitization for MIMO Receivers: 4-Antennas/ADC at 28 GHz on Xilinx ZCU-1285 RF SoC",
    venue: "IEEE Access, vol. 9",
    year: "2021",
    type: "Journal",
    url: "https://ieeexplore.ieee.org/document/9576751",
    featured: true,
  },
  {
    id: "spacetime-freq-mux",
    title:
      "Spacetime Frequency-Multiplexed Digital-RF Array Receivers with Reduced ADC Count",
    venue: "IEEE Transactions on Circuits and Systems II: Express Briefs, vol. 68",
    year: "2021",
    type: "Journal",
    url: "https://ieeexplore.ieee.org/document/9404265",
    featured: true,
  },
  {
    id: "mmwave-fdm-rfsoc",
    title:
      "Massive-MIMO and Digital mm-Wave Arrays on RF-SoCs using FDM for M-Fold Increase in Antennas per ADC/DAC",
    // Was the placeholder string "IEEE". Real venue from Scholar, 2026-08-11.
    venue: "2021 IEEE Space Hardware and Radio Conference (SHaRC)",
    year: "2021",
    type: "Conference",
    url: "https://ieeexplore.ieee.org/document/9375888",
  },
  {
    id: "radix-32-dft",
    title: "Fast Radix-32 Approximate DFTs for 1024-Beam Digital RF Beamforming",
    venue: "IEEE Access, vol. 8",
    year: "2020",
    type: "Journal",
    url: "https://ieeexplore.ieee.org/document/9093889",
    featured: true,
  },
  {
    id: "direct-conversion-28ghz",
    title:
      "A Direct-Conversion Digital Beamforming Array Receiver with 800 MHz Channel Bandwidth at 28 GHz using Xilinx RF SoC",
    venue: "IEEE COMCAS, Israel",
    year: "2019",
    type: "Conference",
    url: "https://ieeexplore.ieee.org/document/8958039",
  },
  {
    id: "64qam-receiver",
    title: "Design of 28 GHz 64-QAM Digital Receiver",
    // Was the placeholder string "IEEE". Real venue from Scholar, 2026-08-11.
    venue: "2019 International Workshop on Antenna Technology (iWAT)",
    year: "2019",
    type: "Conference",
    url: "https://ieeexplore.ieee.org/document/8730596",
  },
  {
    id: "hv-polarized",
    title:
      "Sampling H- & V-Polarized Antennas using a Single ADC for Digital Antenna Arrays by Exploiting Multi-Dimensional Signal Processing RF Circuits",
    venue: "IEEE 23rd International Conference on Digital Signal Processing, China",
    year: "2018",
    type: "Conference",
    url: "https://ieeexplore.ieee.org/document/8631606",
  },
  {
    id: "multiport-adc-dish",
    title: "Multiport ADCs for Microwave Focal Plane Array Dish Receivers",
    venue: "IEEE International Symposium on Circuits and Systems, Italy",
    year: "2018",
    type: "Conference",
    url: "https://ieeexplore.ieee.org/document/8351300",
  },
  {
    id: "delta-sigma-multiport",
    title:
      "Improving ADC Figures-of-Merit in Wideband Antenna Array Receivers using Multidimensional Space-time Delta-Sigma Multiport Circuits",
    venue: "IEEE 10th International Workshop on Multidimensional Systems, Poland",
    year: "2017",
    type: "Conference",
    url: "https://ieeexplore.ieee.org/document/8070633",
  },
  // Added 2026-08-10 from the Google Scholar profile, which listed three works
  // the site was missing. No URLs yet: DOIs can be filled in when confirmed,
  // and inventing a link is worse than omitting one.
  {
    // Venue and DOI taken from the IEEE Xplore record 2026-08-11, not from the
    // Scholar listing, which abbreviated the conference name.
    id: "oam-beams",
    title:
      "A Spatio-temporal Domain Analysis on Orbital Angular Momentum Carrying Beams",
    venue:
      "2025 8th International Conference on Advanced Communication Technologies and Networking (CommNet), Rabat",
    year: "2025",
    type: "Conference",
    url: "https://ieeexplore.ieee.org/document/11288817",
  },
  {
    // Venue and link from the IEEE Xplore record, 2026-08-11. This is the paper
    // behind the iCooler work that took first runners up at the IET Global
    // Challenge, so the honours list and the publication list now agree.
    id: "icooler-tec",
    title:
      "Implementation of an external intelligent cooling system for laptops using TECs",
    venue:
      "2016 IEEE 6th International Conference on Consumer Electronics, Berlin (ICCE-Berlin)",
    year: "2016",
    type: "Conference",
    url: "https://ieeexplore.ieee.org/document/7684731",
  },
  {
    id: "tec-characteristics",
    title:
      "A study on thermal and electrical characteristics of thermoelectric cooler TEC1-127 series",
    venue: "International Conference on Intelligent Systems, Modelling and Simulation",
    year: "2016",
    type: "Conference",
  },
  {
    id: "dissertation",
    title:
      "Digital and Mixed Domain Hardware Reduction Algorithms and Implementations for Massive MIMO",
    // Degree conferred 2020, dissertation published 2021. Stated so that the
    // 2020 on the education list does not look like a contradiction.
    venue:
      "PhD dissertation, Florida International University. Degree conferred 2020, published 2021.",
    year: "2021",
    type: "Dissertation",
  },
  {
    id: "afrl-report",
    title:
      "Multi-Beam Radio Frequency (RF) Aperture Arrays Using Multiplierless Approximate Fast Fourier Transform (FFT)",
    venue: "AFRL Sensors Directorate, technical report AFRL-RY-WP-TR-2017-0144",
    year: "2017",
    type: "Report",
    url: "https://apps.dtic.mil/sti/citations/AD1038266",
  },
];

// Recovered from the previous site's Innovations / Demonstrations / Invited
// Talks video pages, which the new site otherwise dropped. Runtimes are the
// recorded lengths as listed there, and they are the point: they are the only
// public evidence of holding a technical room for that long.
//
// Titles are trimmed of the old page's filename-ish decoration but not
// reworded. `year` is omitted where the old site gave no date; do not guess one.
export type Talk = {
  id: string;
  title: string;
  venue: string;
  year?: string;
  url: string;
};

export const talks: Talk[] = [
  {
    id: "yms-2021",
    title:
      "Career Guidance Program for Electrical, Electronic, and Telecommunication Undergraduates",
    venue: "Invited talk, YMS 2021. 2 hours 30 minutes, recorded.",
    year: "2021",
    url: "https://www.youtube.com/watch?v=qy6TjyeFZ6Y",
  },
  {
    id: "re-awake-2021",
    title: "Re-awake",
    venue: "Invited talk. 1 hour 45 minutes, recorded.",
    year: "2021",
    url: "https://www.youtube.com/watch?v=ux3YjHf4nrw",
  },
  {
    id: "rfsoc-tutorial",
    title:
      "Configuration of Xilinx RFSoC ZCU-1285 for measurements with a 28 GHz mmWave testbed",
    venue: "Recorded tutorial. 20 minutes.",
    url: "https://www.youtube.com/watch?v=p5qvTIu-l-M",
  },
];

export const education = [
  {
    // Degree conferred 2020; the dissertation was published in 2021. Those are
    // two different dates for two different things, which is why the
    // publications list shows 2021 and this shows 2020. Owner-confirmed
    // 2026-08-10, and it resolves what the panel read as a contradiction.
    school: "Florida International University",
    degree: "PhD, Electrical and Computer Engineering",
    location: "Miami, FL",
    year: "2020",
  },
  {
    school: "University of Ruhuna",
    degree: "BSc (Hons), Electrical and Information Engineering",
    location: "Galle, Sri Lanka",
    year: "2016",
  },
  {
    school: "National Institute of Business Management",
    degree: "AS, Business Management",
    location: "Galle, Sri Lanka",
    year: "2015",
  },
];

// Sourced from the previous site's resume page; his own claims of record.
export const honors: { label: string; year: string }[] = [
  { label: "IET Global Challenge, first runners up, London", year: "2015" },
  { label: "MathWorks intern hackathon, two awards", year: "2019" },
  { label: "MangoHack winner, among 40+ teams", year: "2019" },
  {
    label: "University of Akron $10,000 Start-up Challenge, Silver Award",
    year: "2017",
  },
  { label: "IET Global Challenge, top ten", year: "2017" },
  {
    label: "University of Ruhuna Vice Chancellor's List, best overall performance",
    year: "2016",
  },
  { label: "SAITM Robotics Challenge, first runners up", year: "2013" },
];

export const leadership: string[] = [
  "Founder and president of the Engineering Gavel Club (Toastmasters) at the University of Ruhuna, a club that grew past 200 members; patron through 2022.",
  "Co-founder and organizer of XBOTIX, a Sri Lankan national robotics competition (2014-2016).",
  "Treasurer, Tau Beta Pi Florida Theta chapter (2019 onward).",
  "Committee roles across IEEE and IET student chapters: hackathons, IEEEXtreme, industry relations (2013-2016).",
];

export const affiliations =
  "IEEE member since 2013. Tau Beta Pi Engineering Honor Society.";

export const asideIntro: string[] = [
  // The AGOS cross-reference is gone with AGOS itself (owner, 2026-08-11).
  "Outside the lab I write the occasional Sinhala song lyric, and I keep a camera close. My wife Maznah and I run Pixel Parchment, a wedding photography studio in Houston. A small selection below.",
];

export const contact = {
  // No hiring language and no invitation to opine: owner direction 2026-08-10.
  // The old version opened "If you are hiring for product or technical program
  // roles" and asked for views on where machine learning belongs in a radio.
  // Both are gone. What is left is a way to reach him.
  body:
    // Topics named here must be ones the site actually covers publicly. Uplink
    // combining used to be listed and came out with the rest of that work.
    "If you have a question about anything here, O-RAN fronthaul, PRACH, or one of the photographs, email reaches me directly. I read everything.",
};

// Listed newest first. `year` stays optional so a credit can be added the day
// it lands, before its release year is confirmed.
//
// `artist` is the performer, not the writer. Where two names are joined by
// "and" the track is a duet and both are singers (owner-confirmed 2026-08-10).
//
// NO ENGLISH TRANSLATIONS, by owner direction. An approximate translation of
// someone else's released song is a factual claim about their work, and he
// would rather the title stood as released.
//
// `acted` marks the music videos he appears in. It is a separate credit from
// writing the words, and conflating the two would misstate both.
export type Lyric = {
  title: string;
  titleNative?: string;
  artist: string;
  year?: string;
  url: string;
  /** He appears in this music video. Distinct from having written it. */
  acted?: boolean;
};

export const lyrics: Lyric[] = [
  {
    title: "Thani Pata Heena",
    titleNative: "තනි පාට හීන",
    artist: "Imaya Perera and Tharindu Damsara",
    year: "2024",
    url: "https://www.youtube.com/watch?v=n8zLVn0Xp4w",
  },
  {
    title: "Dandelion",
    titleNative: "ඩැන්ඩෙලයන්",
    artist: "Imaya Perera and Tharindu Damsara",
    year: "2022",
    url: "https://www.youtube.com/watch?v=MRYBP6lL1PE",
  },
  {
    title: "Katahada",
    titleNative: "කටහඩ",
    artist: "Nilakshi Dinusha Perera",
    year: "2021",
    url: "https://www.youtube.com/watch?v=7eozsk1uWxk",
  },
  {
    title: "Ramalanaye Sanda",
    titleNative: "රාමලානයේ සද",
    artist: "Dushani Madhushika",
    year: "2020",
    url: "https://www.youtube.com/watch?v=tBj98Ph_dg4",
  },
  {
    title: "Yuganthaya",
    titleNative: "යුගාන්තය",
    artist: "Gihan Dhanushka",
    year: "2020",
    url: "https://www.youtube.com/watch?v=w0MGP3iKVb0",
  },
  {
    title: "Midunu Seethala Hima Piyallaka",
    titleNative: "මිදුණු සීතල හිම පියල්ලක",
    artist: "Harshana Disanayake",
    year: "2020",
    url: "https://www.youtube.com/watch?v=nDG4PU9ZLZ0",
  },
  {
    title: "Disi Rana Liya Sadisi",
    titleNative: "දිසි රන ලිය සදිසි",
    artist: "Harshana Disanayake",
    year: "2020",
    url: "https://www.youtube.com/watch?v=eqj8pKyOMls",
  },
  {
    // Recovered from the old Wix music page 2026-08-10. His lyrics, and he
    // appears in the video. Year not stated on the old page, so it is omitted
    // rather than guessed. A duet, so both names are the singers.
    title: "Sanda Diya Wee",
    artist: "Umesh and Nethmi",
    url: "https://www.youtube.com/watch?v=4xsXAiRLiUw",
    acted: true,
  },
];

// Music videos he appears in but did NOT write. Kept separate from `lyrics` on
// purpose: listing an acting credit among writing credits would overstate one
// and hide the other. "Ikigasa Hadana Gana Kaluwara" is acting only.
export type ScreenCredit = { title: string; artist: string; url: string };

export const screenCredits: ScreenCredit[] = [
  {
    title: "Ikigasa Hadana Gana Kaluwara",
    artist: "Anjalee Kawindhya",
    url: "https://www.youtube.com/watch?v=4bw7fS4Xx68",
  },
];

// Photo data lives in src/lib/photos.ts (static imports for next/image).

export type PhotoSource = { label: string; href: string; note?: string };

// The personal Instagram (@najath_akram) is deliberately absent: owner's call,
// 2026-08-07. Only the studio and the two themed accounts belong here.
export const photoSources: PhotoSource[] = [
  { label: "Pixel Parchment", href: "https://www.pixelparchment.com", note: "weddings" },
  { label: "@nj_a_nature", href: "https://www.instagram.com/nj_a_nature", note: "nature" },
  { label: "@nj_a_urban", href: "https://www.instagram.com/nj_a_urban", note: "urban" },
];

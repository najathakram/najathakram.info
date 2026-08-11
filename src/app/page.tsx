import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../components/Reveal";
import { Section } from "../components/primitives/Section";
import { ArrowUpRight } from "lucide-react";
import { getPortrait } from "../lib/portrait";
import { ScrollDraw } from "../components/motion/ScrollDraw";
import {
  ArrayBeam,
  Aperture,
  MelodyLine,
  SignalJourney,
} from "../components/motion/Figures";
import {
  about,
  contact,
  expertise,
  hero,
  identities,
  profile,
  publications,
  systems,
} from "../lib/site-data";

// One figure per identity, keyed by the route it links to.
const IDENTITY_FIGURES: Record<
  string,
  (props: { className?: string }) => React.ReactElement
> = {
  "/systems": ArrayBeam,
  "/lyrics": MelodyLine,
  "/photography": Aperture,
};

export default function Home() {
  const featuredPublications = publications.filter((pub) => pub.featured);
  const portrait = getPortrait();

  return (
    <>
      {/* The hero is one text column on the page grid, with the portrait bled
          to the right viewport edge as a full-height panel. The panel is
          absolutely positioned, so its height is driven by the text rather than
          the reverse: there is no way for a gap to open between them. */}
      {/* Hero as a signal chain: the name, the claim, then a waveform running
          left to right out of the text and into the portrait, which is bled to
          the viewport edge as a full-height panel with its seam softened so the
          dark mass reads as part of the page rather than a pasted-on card. */}
      <section className="relative overflow-hidden border-b border-line lg:min-h-[38rem]">
        {/* Najath's own photograph, on a fog-bound trail. It earns the hero
            because he is small in the frame and the fog at the top is already
            almost the page colour, so it dissolves instead of sitting in a box.
            Blended on three edges: hard against the right viewport edge only. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] lg:block"
        >
          <Image
            src="/hero-trail.webp"
            alt=""
            fill
            priority
            sizes="48vw"
            className="object-cover object-center"
          />
          {/* These overlays are the page's cool near-white, so any of them lying
              over Najath drains the warmth out of his skin. Each one is kept
              short enough to blend an edge and no longer: the left fade clears
              him entirely, and the subject sits on untouched photograph. */}
          <div className="absolute inset-y-0 left-0 w-[38%] bg-gradient-to-r from-ground via-ground/55 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-ground to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ground to-transparent" />
        </div>

        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="relative py-16 sm:py-20 lg:w-[56%] lg:py-28">
            <h1 className="text-[length:var(--step-6)] leading-[0.9] tracking-[var(--tracking-display)] text-balance">
              {profile.name}
            </h1>
            <p className="label mt-5">
              {profile.role} / {profile.location}
            </p>

            <p className="mt-10 max-w-[21ch] text-[length:var(--step-4)] leading-[1.08] tracking-[var(--tracking-tight)] font-medium text-ink text-balance">
              {hero.headline}
            </p>

            {/* No portrait here at any width. The face lives once, at a modest
                size, beside the About prose that introduces it. */}
            <p className="mt-9 max-w-[44ch] leading-relaxed text-ink-muted text-pretty">
              {hero.now}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="rounded-[var(--radius)] bg-accent px-4 py-2.5 font-medium text-white transition-colors duration-[var(--duration-fast)] hover:bg-accent-hover"
              >
                Get in touch
              </Link>
              <a
                href={profile.resumes.product}
                className="rounded-[var(--radius)] border border-line-strong px-4 py-2.5 text-ink transition-colors duration-[var(--duration-fast)] hover:bg-ground-sunk"
              >
                Resume (PDF)
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Three things that are true at once. The reason to keep reading. */}
      <section
        className="border-y border-line bg-ground-raised"
        aria-label="What I do"
      >
        <div className="mx-auto grid max-w-6xl gap-px bg-line sm:grid-cols-3">
          {/* No Reveal wrapper here on purpose: fading the card would fade its
              background too, and the band visibly flashed dark before settling.
              The figures carry the motion instead. */}
          {identities.map((item, idx) => {
            const Figure = IDENTITY_FIGURES[item.href] ?? ArrayBeam;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group flex h-full flex-col bg-ground-raised px-5 py-9 transition-colors duration-[var(--duration-base)] hover:bg-ground sm:px-8"
              >
                <ScrollDraw
                  delay={120 + idx * 160}
                  className="mb-6 text-ink-soft transition-colors duration-[var(--duration-base)] group-hover:text-accent"
                >
                  <Figure className="h-11 w-16" />
                </ScrollDraw>
                <span className="mt-auto flex items-baseline gap-1.5 text-[length:var(--step-1)] font-medium text-ink">
                  {item.label}
                  <ArrowUpRight
                    className="h-3.5 w-3.5 flex-none translate-y-[1px] text-ink-soft transition-transform duration-[var(--duration-fast)] group-hover:translate-x-0.5"
                    strokeWidth={1.75}
                  />
                </span>
                <span className="mt-2 text-[length:var(--step-ui)] leading-relaxed text-ink-muted text-pretty">
                  {item.body}
                </span>
              </Link>
            );
          })}
        </div>
      </section>


      {/* The signature moment: one sentence, full width, at display size.
          No image and no effect, because the line is the whole point. */}
      <section className="border-b border-line" aria-label="What the work is">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <p className="max-w-[26ch] text-[length:var(--step-5)] leading-[1.1] tracking-[var(--tracking-tight)] text-ink text-balance sm:max-w-[30ch]">
              {hero.lede}
            </p>
          </Reveal>
          {/* The sentence, drawn: clean bits, the carrier they ride, noise
              picked up in transit, the bits recovered on the far side. It sits
              here rather than in the hero, where it competed with the array. */}
          <ScrollDraw delay={140} className="mt-16 max-w-2xl text-ink-soft">
            <SignalJourney />
          </ScrollDraw>
        </div>
      </section>

      {/* The portrait lives here rather than in the hero: a face belongs beside
          the prose that introduces it, and at this size it reads as a person
          rather than a billboard. */}
      <Section title="Who is writing">
        <div className="sm:flex sm:items-start sm:gap-10">
          {portrait && (
            <div className="relative mb-8 aspect-square w-32 shrink-0 overflow-hidden rounded-[var(--radius-lg)] border border-line sm:order-last sm:mb-0 sm:w-40 lg:w-44">
              <Image
                src={portrait}
                alt={profile.name}
                fill
                sizes="11rem"
                className="object-cover object-[62%_22%]"
              />
            </div>
          )}
          <div className="measure text-pretty">
            {about.map((paragraph, idx) => (
              <p
                key={paragraph.slice(0, 40)}
                className={
                  idx === 0
                    ? "text-[length:var(--step-2)] leading-relaxed text-ink"
                    : "mt-5 leading-relaxed text-ink-muted"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section title="What I work on">
        <ul className="divide-y divide-line border-y border-line">
          {expertise.map((item, idx) => (
            <Reveal as="li" key={item.id} delay={idx * 60} className="row-hover py-5">
              <h3 className="text-[length:var(--step-2)] font-medium text-ink">
                {item.title}
              </h3>
              <p className="measure mt-2 text-ink-muted text-pretty">{item.body}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Cards, not another ruled list: the page's second structural device,
          so Recent work does not read identically to every other section. */}
      <Section title="Recent work">
        <ul className="grid gap-4 sm:grid-cols-2">
          {systems.slice(0, 4).map((system, idx) => (
            <Reveal
              as="li"
              key={system.id}
              delay={idx * 60}
              className="lift flex flex-col rounded-[var(--radius-lg)] border border-line bg-ground p-6"
            >
              <span className="label">{system.tag}</span>
              <h3 className="mt-3 text-[length:var(--step-2)] font-medium text-ink text-balance">
                {system.title}
              </h3>
              <p className="mt-2 text-[length:var(--step-ui)] leading-relaxed text-ink-muted text-pretty">
                {system.body}
              </p>
            </Reveal>
          ))}
        </ul>
        <div className="mt-8">
          <Link href="/systems" className="link-underline text-ink">
            All systems
          </Link>
        </div>
      </Section>

      <Section title="Papers">
        <ul className="divide-y divide-line border-y border-line">
          {featuredPublications.map((pub, idx) => (
            <Reveal as="li" key={pub.id} delay={idx * 60} className="row-hover py-5">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6">
                <h3 className="text-[length:var(--step-2)] font-medium text-ink">
                  {pub.url ? (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline"
                    >
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )}
                </h3>
                {pub.year && (
                  <span className="font-mono-fig tabular shrink-0 text-ink-soft">
                    {pub.year}
                  </span>
                )}
              </div>
              {pub.venue && (
                <p className="measure mt-2 text-ink-soft text-pretty">{pub.venue}</p>
              )}
            </Reveal>
          ))}
        </ul>
        <div className="mt-8">
          <Link href="/publications" className="link-underline text-ink">
            Full list, with links
          </Link>
        </div>
      </Section>

      {/* A real close rather than a fifth ruled band: the page ends on the
          address at display scale, in the accent, with the offer beneath it. */}
      <section className="border-b border-line bg-ground-raised" id="contact">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <a
            href={`mailto:${profile.email}`}
            className="link-underline inline-block text-[length:var(--step-4)] leading-tight tracking-[var(--tracking-tight)] font-medium text-accent"
          >
            {profile.email}
          </a>
          <p className="measure mt-8 leading-relaxed text-ink-muted text-pretty">
            {contact.body}
          </p>
          <p className="measure mt-5 leading-relaxed text-ink text-pretty">
            {profile.openTo}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={profile.resumes.product}
              className="rounded-[var(--radius)] border border-line-strong bg-ground px-4 py-2.5 text-ink transition-colors duration-[var(--duration-fast)] hover:bg-ground-sunk"
            >
              Resume (PDF)
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[var(--radius)] border border-line-strong bg-ground px-4 py-2.5 text-ink transition-colors duration-[var(--duration-fast)] hover:bg-ground-sunk"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

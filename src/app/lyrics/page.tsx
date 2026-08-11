import type { Metadata } from "next";
import { PageHeader } from "../../components/primitives/PageHeader";
import { Reveal } from "../../components/Reveal";
import { Section } from "../../components/primitives/Section";
import { pageIntros, lyrics, screenCredits } from "../../lib/site-data";

export const metadata: Metadata = {
  title: "Lyrics",
  description: pageIntros.lyrics.dek,
  alternates: { canonical: "/lyrics" },
};

export default function LyricsPage() {
  return (
    <>
      <PageHeader {...pageIntros.lyrics} />
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <ul className="divide-y divide-line border-y border-line">
          {lyrics.map((song, idx) => (
            <Reveal as="li" key={song.title} delay={idx * 60} className="row-hover py-5">
              <div className="grid gap-x-6 gap-y-1 sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_auto] sm:items-baseline">
                <div>
                  <a
                    href={song.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-[length:var(--step-2)] font-medium text-ink"
                  >
                    {song.title}
                  </a>
                  {song.titleNative && (
                    <p lang="si" className="mt-1 text-ink-soft">
                      {song.titleNative}
                    </p>
                  )}
                </div>
                <p className="text-ink-muted text-pretty">
                  {song.artist}
                  {/* Named plainly. He wrote the words to these; on two he is
                      also in the video, and that is a different credit. */}
                  {song.acted && (
                    <span className="text-ink-soft"> / I appear in the video</span>
                  )}
                </p>
                {song.year ? (
                  <span className="font-mono-fig tabular text-ink-soft sm:text-right">
                    {song.year}
                  </span>
                ) : (
                  <span aria-hidden="true" />
                )}
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Acting kept separate from writing on purpose. Listing it among the
          lyrics would overstate one credit and hide the other. */}
      <Section title="In front of the camera instead">
        <ul className="divide-y divide-line border-y border-line">
          {screenCredits.map((credit, idx) => (
            <Reveal
              as="li"
              key={credit.title}
              delay={idx * 60}
              className="row-hover py-5"
            >
              <div className="grid gap-x-6 gap-y-1 sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] sm:items-baseline">
                <a
                  href={credit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-[length:var(--step-2)] font-medium text-ink"
                >
                  {credit.title}
                </a>
                <p className="text-ink-muted text-pretty">
                  {credit.artist} / acting, not writing
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}

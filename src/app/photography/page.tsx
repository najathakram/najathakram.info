import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "../../components/primitives/PageHeader";
import { Reveal } from "../../components/Reveal";
import { pageIntros, photoSources } from "../../lib/site-data";
import { photos } from "../../lib/photos";

export const metadata: Metadata = {
  title: "Photography",
  description: pageIntros.photography.dek,
  alternates: { canonical: "/photography" },
};

// The intro names the studio; the studio has a site. The dek string stays the
// single source (it is also the page description), so the link is spliced in
// here rather than kept as a second copy of the sentence.
const STUDIO = "Pixel Parchment";
const studio = photoSources.find((source) => source.label === STUDIO);

export default function PhotographyPage() {
  const intro = pageIntros.photography;
  const [before, after] = intro.dek.split(STUDIO);
  const dek =
    studio && after !== undefined ? (
      <>
        {before}
        <a
          href={studio.href}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline text-ink"
        >
          {STUDIO}
        </a>
        {after}
      </>
    ) : (
      intro.dek
    );

  return (
    <>
      <PageHeader title={intro.title} dek={dek} />
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {photos.map((photo, idx) => {
            // Orientation comes from the file's own intrinsic size rather than a
            // hand-kept flag. A landscape frame takes a double-width cell at its
            // own ratio, because cropping one to 4:5 cuts the subject out of it.
            const wide = photo.image.width > photo.image.height;
            return (
              <Reveal
                key={photo.image.src}
                delay={idx * 60}
                className={wide ? "col-span-2" : undefined}
              >
                <div
                  className={`group overflow-hidden rounded-[var(--radius-lg)] border border-line ${
                    wide ? "aspect-[3/2]" : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={photo.image}
                    alt={photo.alt}
                    placeholder="blur"
                    sizes={
                      wide
                        ? "(min-width: 640px) 67vw, 100vw"
                        : "(min-width: 640px) 33vw, 50vw"
                    }
                    className="h-full w-full object-cover transition-transform duration-[var(--duration-base)] group-hover:scale-[1.015]"
                  />
                </div>
              </Reveal>
            );
          })}
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
          {photoSources.map((source) => (
            <li key={source.href}>
              <a
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-ink-muted transition-colors duration-[var(--duration-fast)] hover:text-ink"
              >
                {source.label}
                {source.note ? ` (${source.note})` : ""}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { PageHeader } from "../../components/primitives/PageHeader";
import { Reveal } from "../../components/Reveal";
import { experience, pageIntros, profile } from "../../lib/site-data";

export const metadata: Metadata = {
  title: "Experience",
  description: pageIntros.experience.dek,
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        title={pageIntros.experience.title}
        dek={pageIntros.experience.dek}
      />
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="divide-y divide-line">
          {experience.map((role, idx) => (
            <Reveal
              as="article"
              key={role.company}
              delay={idx * 60}
              className="py-8"
            >
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6">
                <h2 className="text-[length:var(--step-2)] font-medium text-ink">
                  {role.company}
                </h2>
                <span className="shrink-0 text-ink-soft">{role.location}</span>
              </div>

              <ul className="mt-4 space-y-1.5">
                {role.positions.map((position) => (
                  <li
                    key={position.title}
                    className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1"
                  >
                    <span className="text-[length:var(--step-0)] text-ink">
                      {position.title}
                    </span>
                    <span className="font-mono-fig tabular shrink-0 text-ink-muted">
                      {position.period}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="measure mt-4 text-ink-muted text-pretty">
                {role.summary}
              </p>

              {role.highlights && (
                <ul className="mt-4 space-y-3">
                  {role.highlights.map((highlight) => (
                    <li
                      key={highlight.slice(0, 40)}
                      className="border-l border-line-strong pl-4 text-[length:var(--step-0)] text-ink-muted text-pretty"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-8">
          <a href={profile.resume} className="link-underline text-ink">
            Resume (PDF)
          </a>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { PageHeader } from "../../components/primitives/PageHeader";
import { Section } from "../../components/primitives/Section";
import { Reveal } from "../../components/Reveal";
import {
  publications,
  talks,
  education,
  honors,
  leadership,
  affiliations,
  profile,
  pageIntros,
  type Publication,
} from "../../lib/site-data";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Papers, a dissertation, and a technical report by Najath Akram. Titles as published, with links.",
  alternates: { canonical: "/publications" },
};

const groups: { heading: string; types: Publication["type"][] }[] = [
  { heading: "Journal articles", types: ["Journal"] },
  { heading: "Conference papers", types: ["Conference"] },
  { heading: "Dissertation", types: ["Dissertation"] },
  { heading: "Technical report", types: ["Report"] },
];

export default function PublicationsPage() {
  const intro = pageIntros.publications;

  return (
    <>
      <PageHeader title={intro.title} dek={intro.dek} />

      {groups.map((group) => {
        const items = publications.filter((pub) => group.types.includes(pub.type));
        if (items.length === 0) return null;

        return (
          <Section key={group.heading} title={group.heading}>
            <ul className="divide-y divide-line border-y border-line">
              {items.map((pub, idx) => (
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
                      <span className="font-mono-fig tabular shrink-0 text-[length:var(--step--1)] text-ink-soft">
                        {pub.year}
                      </span>
                    )}
                  </div>
                  {pub.venue && (
                    <p className="mt-2 text-ink-soft text-pretty">{pub.venue}</p>
                  )}
                </Reveal>
              ))}
            </ul>
          </Section>
        );
      })}

      {/* Talks sit with the papers rather than on their own route: this page is
          already the record of work that exists in public. */}
      <Section title="Talks and tutorials">
        <ul className="divide-y divide-line border-y border-line">
          {talks.map((talk, idx) => (
            <Reveal as="li" key={talk.id} delay={idx * 60} className="row-hover py-5">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6">
                <h3 className="text-[length:var(--step-2)] font-medium text-ink">
                  <a
                    href={talk.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    {talk.title}
                  </a>
                </h3>
                {talk.year && (
                  <span className="font-mono-fig tabular shrink-0 text-[length:var(--step--1)] text-ink-soft">
                    {talk.year}
                  </span>
                )}
              </div>
              <p className="mt-2 text-ink-soft text-pretty">{talk.venue}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section title="Education">
        <ul className="divide-y divide-line border-y border-line">
          {education.map((edu, idx) => (
            <Reveal as="li" key={edu.school} delay={idx * 60} className="row-hover py-5">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6">
                <h3 className="text-[length:var(--step-2)] font-medium text-ink">
                  {edu.degree}
                </h3>
                <span className="font-mono-fig tabular shrink-0 text-[length:var(--step--1)] text-ink-soft">
                  {edu.year}
                </span>
              </div>
              <p className="mt-2 text-ink-soft text-pretty">
                {edu.school}, {edu.location}.
              </p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section title="Honors">
        <ul className="divide-y divide-line border-y border-line">
          {honors.map((honor, idx) => (
            <Reveal as="li" key={honor.label} delay={idx * 60} className="row-hover py-5">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6">
                <span className="text-ink text-pretty">{honor.label}</span>
                <span className="font-mono-fig tabular shrink-0 text-[length:var(--step--1)] text-ink-soft">
                  {honor.year}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Not "Service": owner confirmed 2026-08-10 he has no working-group or
          standards-body contributions, and "Service" in an academic record
          implies exactly that. These are student leadership and community
          roles, so the heading now says so. */}
      <Section title="Student leadership and community">
        <ul className="space-y-4">
          {leadership.map((item, idx) => (
            <Reveal
              as="li"
              key={item.slice(0, 32)}
              delay={idx * 60}
              className="measure text-ink-muted text-pretty"
            >
              {item}
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section title="Affiliations">
        <p className="measure text-ink-muted text-pretty">{affiliations}</p>
        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
          <a
            href={profile.ieee}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-ink"
          >
            Author page on IEEE Xplore
          </a>
          <a
            href={profile.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-ink"
          >
            Google Scholar
          </a>
        </div>
      </Section>
    </>
  );
}

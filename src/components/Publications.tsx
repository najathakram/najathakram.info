import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { publications, education, recognition } from "../lib/site-data";
import { ArrowUpRight } from "lucide-react";

export function Publications() {
  return (
    <Section
      id="writing"
      eyebrow="Writing and research"
      title={
        <>
          Papers I had the
          <span className="font-display italic"> privilege</span> of
          writing.
        </>
      }
    >
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-8 divide-y divide-border border-t border-b border-border">
          {publications.map((pub, idx) => (
            <div
              key={idx}
              className="group grid gap-3 py-6 sm:grid-cols-[76px_1fr_58px] sm:items-baseline"
            >
              <span className="text-[11px] tracking-[0.2em] uppercase text-muted">
                {pub.type}
              </span>
              <div className="space-y-1">
                <h3 className="text-foreground text-pretty leading-snug">
                  {pub.title}
                </h3>
                <p className="text-sm text-muted">{pub.venue}</p>
              </div>
              <span className="text-xs text-muted sm:text-right tabular-nums">
                {pub.year}
              </span>
            </div>
          ))}
          <div className="pt-6 flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="https://scholar.google.com/citations?user=najath"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
            >
              Google Scholar
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </a>
            <a
              href="https://ieeexplore.ieee.org/author/37086418999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
            >
              IEEE Xplore
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </a>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-4 space-y-12" delay={120}>
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted mb-5">
              Education
            </p>
            <ul className="space-y-5">
              {education.map((edu) => (
                <li key={edu.school}>
                  <p className="text-foreground text-pretty">{edu.degree}</p>
                  <p className="text-sm text-muted mt-1">
                    {edu.school}. {edu.location}. {edu.year}.
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted mb-5">
              Other
            </p>
            <ul className="space-y-3">
              {recognition.map((r) => (
                <li key={r} className="text-muted-strong text-pretty">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

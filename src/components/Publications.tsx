import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { publications, education, recognition } from "../lib/site-data";
import { ExternalLink } from "lucide-react";

export function Publications() {
  return (
    <Section
      id="publications"
      index="/ 05"
      eyebrow="Research & Recognition"
      title={
        <>
          Selected publications and
          <span className="font-display italic text-foreground"> contributions</span>.
        </>
      }
    >
      <div className="grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-7 space-y-1">
          {publications.map((pub, idx) => (
            <div
              key={idx}
              className="group grid gap-2 sm:grid-cols-[60px_1fr_70px] items-baseline border-t border-border py-6 first:border-t last:border-b last:border-b-border"
            >
              <span className="font-mono-tabular text-[11px] tracking-[0.2em] uppercase text-accent">
                {pub.type}
              </span>
              <div className="space-y-1">
                <h3 className="text-foreground text-pretty leading-snug group-hover:text-accent transition-colors">
                  {pub.title}
                </h3>
                <p className="text-sm text-muted">{pub.venue}</p>
              </div>
              <span className="font-mono-tabular text-xs text-muted sm:text-right">{pub.year}</span>
            </div>
          ))}
          <div className="pt-6 flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="https://scholar.google.com/citations?user=najath"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
            >
              Google Scholar <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
            </a>
            <a
              href="https://ieeexplore.ieee.org/author/37086418999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
            >
              IEEE Xplore <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
            </a>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5 space-y-12" delay={150}>
          <div>
            <p className="font-mono-tabular text-xs uppercase tracking-[0.25em] text-muted mb-6">
              Education
            </p>
            <ul className="space-y-6">
              {education.map((edu) => (
                <li key={edu.school} className="border-l border-border pl-5">
                  <p className="text-foreground text-pretty">{edu.degree}</p>
                  <p className="text-sm text-muted mt-1">
                    {edu.school} · {edu.location} · {edu.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono-tabular text-xs uppercase tracking-[0.25em] text-muted mb-6">
              Recognition
            </p>
            <ul className="space-y-3">
              {recognition.map((r) => (
                <li key={r} className="flex gap-3 text-muted-strong text-pretty">
                  <span className="mt-2.5 h-px w-3 flex-none bg-border-strong" aria-hidden />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

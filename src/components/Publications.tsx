import { Reveal } from "./Reveal";
import { publications, education, recognition, profile } from "../lib/site-data";
import { ArrowUpRight } from "lucide-react";

export function Publications() {
  return (
    <section id="writing" className="scroll-mt-16 space-y-16">
      <Reveal>
        <p className="text-[10px] uppercase tracking-[0.24em] text-muted mb-8">
          Selected publications
        </p>
        <ul className="divide-y divide-border border-t border-b border-border">
          {publications.map((pub, idx) => (
            <li
              key={idx}
              className="grid gap-2 py-5 sm:grid-cols-[1fr_60px] sm:items-baseline"
            >
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base text-foreground text-pretty leading-snug">
                  {pub.title}
                </h3>
                <p className="text-xs text-muted">
                  {pub.type}. {pub.venue}.
                </p>
              </div>
              <span className="text-xs text-muted sm:text-right tabular-nums">
                {pub.year}
              </span>
            </li>
          ))}
        </ul>
        <div className="pt-5 flex flex-wrap gap-x-6 gap-y-2">
          <a
            href={profile.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
          >
            Google Scholar
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </a>
          <a
            href={profile.ieee}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
          >
            IEEE Xplore
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </a>
        </div>
      </Reveal>

      <Reveal>
        <p className="text-[10px] uppercase tracking-[0.24em] text-muted mb-6">
          Education
        </p>
        <ul className="space-y-4">
          {education.map((edu) => (
            <li key={edu.school}>
              <p className="text-foreground text-pretty">{edu.degree}</p>
              <p className="text-sm text-muted mt-1">
                {edu.school}. {edu.location}. {edu.year}.
              </p>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal>
        <p className="text-[10px] uppercase tracking-[0.24em] text-muted mb-6">
          Other
        </p>
        <ul className="space-y-2 text-muted-strong text-pretty">
          {recognition.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

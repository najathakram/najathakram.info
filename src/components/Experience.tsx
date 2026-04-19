import { Reveal } from "./Reveal";
import { experience } from "../lib/site-data";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-16">
      <Reveal>
        <p className="text-[10px] uppercase tracking-[0.24em] text-muted mb-8">
          Experience
        </p>
      </Reveal>
      <ol className="divide-y divide-border border-t border-b border-border">
        {experience.map((role, idx) => (
          <Reveal as="li" key={role.company} delay={idx * 60} className="py-7 space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-display text-lg sm:text-xl text-foreground leading-tight">
                {role.company}
              </h3>
              <span className="text-xs text-muted">{role.location}</span>
            </div>
            <ul className="space-y-1">
              {role.positions.map((pos) => (
                <li
                  key={pos.title}
                  className="flex flex-wrap items-baseline justify-between gap-x-4 text-sm"
                >
                  <span className="text-foreground text-pretty">{pos.title}</span>
                  <span className="text-xs tracking-wide text-muted tabular-nums">
                    {pos.period}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-sm sm:text-base leading-relaxed text-muted-strong text-pretty">
              {role.summary}
            </p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

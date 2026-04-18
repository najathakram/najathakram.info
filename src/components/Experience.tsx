import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { experience } from "../lib/site-data";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={
        <>
          A fairly quiet
          <span className="font-display italic"> path</span>, in order.
        </>
      }
    >
      <ol className="divide-y divide-border border-t border-b border-border">
        {experience.map((role, idx) => (
          <Reveal
            as="li"
            key={role.company}
            delay={idx * 70}
            className="grid gap-6 py-12 sm:py-14 lg:grid-cols-12 lg:gap-16"
          >
            <div className="lg:col-span-4 space-y-1">
              <h3 className="font-display text-2xl sm:text-3xl text-foreground leading-tight">
                {role.company}
              </h3>
              <p className="text-sm text-muted">{role.location}</p>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <ul className="space-y-2">
                {role.positions.map((pos) => (
                  <li
                    key={pos.title}
                    className="flex flex-wrap items-baseline justify-between gap-x-4"
                  >
                    <span className="text-foreground text-pretty">{pos.title}</span>
                    <span className="text-xs tracking-wide text-muted tabular-nums">
                      {pos.period}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-strong text-pretty leading-relaxed">
                {role.summary}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

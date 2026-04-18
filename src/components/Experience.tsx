import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { experience } from "../lib/site-data";

export function Experience() {
  return (
    <Section
      id="experience"
      index="/ 04"
      eyebrow="Experience"
      title={
        <>
          Six chapters across research, industry, and
          <span className="font-display italic text-foreground"> production radios</span>.
        </>
      }
    >
      <ol className="relative">
        <span className="pointer-events-none absolute left-[7px] top-2 bottom-2 w-px bg-border" aria-hidden />
        {experience.map((role, idx) => (
          <Reveal as="li" key={role.company} delay={idx * 80} className="relative pl-10 sm:pl-14 pb-16 last:pb-0">
            <span className="absolute left-0 top-2 grid place-items-center">
              <span className="h-3.5 w-3.5 rounded-full border border-accent bg-background" />
              <span className="absolute h-1.5 w-1.5 rounded-full bg-accent" />
            </span>

            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-4 space-y-1">
                <h3 className="font-display text-2xl sm:text-3xl text-foreground text-balance">
                  {role.company}
                </h3>
                <p className="text-sm font-mono-tabular tracking-wide text-muted">
                  {role.location}
                </p>
              </div>

              <div className="lg:col-span-8 space-y-6">
                <div className="space-y-1">
                  {role.positions.map((pos) => (
                    <div
                      key={pos.title}
                      className="flex flex-wrap items-baseline justify-between gap-x-4 border-b border-border pb-2"
                    >
                      <span className="text-foreground text-pretty">{pos.title}</span>
                      <span className="font-mono-tabular text-xs tracking-wide text-muted">
                        {pos.period}
                      </span>
                    </div>
                  ))}
                </div>

                <ul className="space-y-3 text-muted-strong text-pretty leading-relaxed">
                  {role.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2.5 h-px w-3 flex-none bg-border-strong" aria-hidden />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { expertise } from "../lib/site-data";

export function Expertise() {
  return (
    <Section
      id="expertise"
      index="/ 03"
      eyebrow="Expertise"
      title={
        <>
          Three disciplines, one
          <span className="font-display italic text-foreground"> physical layer</span>.
        </>
      }
    >
      <div className="grid gap-px bg-border md:grid-cols-3 border border-border">
        {expertise.map((pillar, idx) => (
          <Reveal
            key={pillar.id}
            delay={idx * 120}
            className="bg-background p-8 sm:p-10 lg:p-12 group panel-hover transition-colors"
          >
            <div className="flex items-start justify-between mb-8">
              <span className="font-mono-tabular text-xs tracking-[0.25em] text-accent">
                {pillar.label}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-foreground mb-5 text-balance">
              {pillar.title}
            </h3>
            <p className="text-muted-strong text-pretty leading-relaxed mb-8">
              {pillar.body}
            </p>
            <ul className="flex flex-wrap gap-1.5">
              {pillar.keywords.map((kw) => (
                <li
                  key={kw}
                  className="text-[11px] tracking-wide text-muted border border-border rounded-full px-2.5 py-1 font-mono-tabular"
                >
                  {kw}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

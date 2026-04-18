import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { expertise } from "../lib/site-data";

export function Expertise() {
  return (
    <Section
      id="work"
      eyebrow="What I work on"
      title={
        <>
          Three threads, all running through the
          <span className="font-display italic"> physical layer</span>.
        </>
      }
    >
      <div className="divide-y divide-border border-t border-b border-border">
        {expertise.map((pillar, idx) => (
          <Reveal
            key={pillar.id}
            delay={idx * 90}
            className="grid gap-8 py-12 sm:py-14 lg:grid-cols-12 lg:gap-16"
          >
            <div className="lg:col-span-4">
              <h3 className="font-display text-3xl sm:text-[2.25rem] leading-tight text-foreground text-balance">
                {pillar.title}
              </h3>
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg leading-relaxed text-muted-strong text-pretty">
                {pillar.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

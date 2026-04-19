import { Reveal } from "./Reveal";
import { expertise } from "../lib/site-data";

export function Expertise() {
  return (
    <section id="work" className="scroll-mt-16">
      <Reveal>
        <p className="text-[10px] uppercase tracking-[0.24em] text-muted mb-8">
          What I work on
        </p>
      </Reveal>
      <ul className="space-y-10">
        {expertise.map((pillar, idx) => (
          <Reveal as="li" key={pillar.id} delay={idx * 80} className="space-y-3">
            <h3 className="font-display text-xl sm:text-2xl text-foreground leading-tight">
              {pillar.title}
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-muted-strong text-pretty">
              {pillar.body}
            </p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

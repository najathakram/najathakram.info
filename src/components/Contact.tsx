import { Reveal } from "./Reveal";
import { profile } from "../lib/site-data";
import { ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16">
      <Reveal>
        <p className="text-[10px] uppercase tracking-[0.24em] text-muted mb-6">
          Get in touch
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-muted-strong text-pretty mb-8 max-w-prose">
          Research collaborations, advisory conversations, or a good question
          about O&#8209;RAN, beamforming, or where ML fits in all of this.
          I read every thoughtful note.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors"
        >
          {profile.email}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" strokeWidth={1.5} />
        </a>
      </Reveal>
    </section>
  );
}

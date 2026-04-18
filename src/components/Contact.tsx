import { Reveal } from "./Reveal";
import { profile } from "../lib/site-data";
import { ArrowUpRight } from "lucide-react";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "linkedin.com/in/najath", href: profile.linkedin },
  { label: "Scholar", value: "scholar.google.com", href: profile.scholar },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full px-6 sm:px-10 lg:px-16 py-28 sm:py-40 border-t border-border"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted mb-6">
            Get in touch
          </p>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-foreground text-balance leading-[1.02] mb-10">
            If there&apos;s something interesting near a{" "}
            <span className="italic text-muted-strong">waveform</span>, I&apos;d
            love to hear about it.
          </h2>

          <p className="max-w-xl text-lg text-muted-strong text-pretty mb-14 leading-relaxed">
            Research collaborations, advisory conversations, or a good
            question about O-RAN, beamforming, or where ML fits in all of
            this. I read every thoughtful note.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ul className="divide-y divide-border border-t border-b border-border">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 py-5 transition-colors"
                >
                  <div className="flex items-baseline gap-6 sm:gap-10 min-w-0">
                    <span className="text-[11px] uppercase tracking-[0.22em] text-muted w-20 flex-none">
                      {c.label}
                    </span>
                    <span className="text-foreground text-pretty truncate group-hover:text-accent transition-colors">
                      {c.value}
                    </span>
                  </div>
                  <ArrowUpRight
                    className="h-4 w-4 text-muted group-hover:text-accent group-hover:rotate-45 transition-all duration-300 flex-none"
                    strokeWidth={1.5}
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

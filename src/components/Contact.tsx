import { Reveal } from "./Reveal";
import { profile } from "../lib/site-data";
import { ArrowUpRight } from "lucide-react";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "linkedin.com/in/najath", href: profile.linkedin },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full px-6 sm:px-10 lg:px-16 py-32 sm:py-44 border-t border-border"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-center gap-3 text-muted mb-12">
            <span className="font-mono-tabular text-xs tracking-[0.2em]">/ 06</span>
            <span className="h-px w-12 bg-border-strong" />
            <span className="font-mono-tabular text-xs uppercase tracking-[0.2em]">
              Contact
            </span>
          </div>

          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl text-foreground text-balance leading-[0.95] mb-12">
            Have a system to <span className="italic text-muted-strong">design</span>,
            <br />
            a problem to <span className="italic text-muted-strong">solve</span>,
            <br />
            or a paper to <span className="italic text-muted-strong">discuss</span>?
          </h2>

          <p className="max-w-xl text-lg text-muted-strong text-pretty mb-16">
            I&apos;m open to advisory work, research collaboration, and conversations
            with teams building the next generation of wireless and AI-native radios.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid gap-px bg-border border border-border">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group bg-background flex items-center justify-between gap-4 px-6 py-6 sm:px-8 hover:bg-background-elev transition-colors"
              >
                <div className="flex items-baseline gap-6 sm:gap-10 min-w-0">
                  <span className="font-mono-tabular text-xs uppercase tracking-[0.25em] text-muted w-20 flex-none">
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
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

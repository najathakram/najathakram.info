import { ArrowDownRight, MapPin } from "lucide-react";
import { profile } from "../lib/site-data";
import { WaveformCanvas } from "./WaveformCanvas";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] w-full items-center justify-center overflow-hidden hero-radial"
    >
      <WaveformCanvas />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16 pt-24 pb-12">
        <div className="grid gap-10">
          <div className="flex items-center gap-3 anim-fade-up">
            <span className="font-mono-tabular text-xs uppercase tracking-[0.32em] text-muted">
              Houston · Texas
            </span>
            <span className="h-px w-10 bg-border-strong" />
            <span className="font-mono-tabular text-xs uppercase tracking-[0.32em] text-muted">
              Signal · Systems · AI
            </span>
          </div>

          <h1
            className="font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] tracking-tight text-foreground anim-fade-up text-balance"
            style={{ animationDelay: "120ms" }}
          >
            {profile.name},
            <br />
            <span className="italic text-muted-strong">
              {profile.credential}
            </span>
          </h1>

          <p
            className="max-w-2xl text-pretty text-lg sm:text-xl text-muted-strong leading-relaxed anim-fade-up"
            style={{ animationDelay: "260ms" }}
          >
            {profile.positioning}
          </p>

          <div
            className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4 anim-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            <a
              href="#expertise"
              className="group inline-flex items-center gap-2 text-sm tracking-wide text-foreground border-b border-border-strong pb-1 hover:border-accent transition-colors"
            >
              See the work
              <ArrowDownRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                strokeWidth={1.5}
              />
            </a>
            <a
              href="#contact"
              className="text-sm tracking-wide text-muted hover:text-foreground transition-colors"
            >
              Get in touch
            </a>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted">
              <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
              {profile.location}
            </span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-0 right-0 z-10 mx-auto flex max-w-6xl items-end justify-between px-6 sm:px-10 lg:px-16">
        <span className="font-mono-tabular text-[10px] uppercase tracking-[0.3em] text-muted">
          / 01 — Index
        </span>
        <span className="hidden sm:inline font-mono-tabular text-[10px] uppercase tracking-[0.3em] text-muted">
          MMW · 28 GHz · 800 MHz BW
        </span>
      </div>
    </section>
  );
}

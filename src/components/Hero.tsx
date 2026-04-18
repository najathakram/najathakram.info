import { profile } from "../lib/site-data";
import { WaveformCanvas } from "./WaveformCanvas";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden"
    >
      <WaveformCanvas />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 sm:px-10 lg:px-16 pt-28 pb-20">
        <div className="space-y-8 sm:space-y-10">
          <p
            className="text-[11px] uppercase tracking-[0.22em] text-muted anim-fade-up"
          >
            Houston, Texas
          </p>

          <h1
            className="font-display text-[clamp(3.25rem,8.5vw,7rem)] leading-[0.98] tracking-tight text-foreground text-balance anim-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            {profile.name}.
          </h1>

          <p
            className="max-w-xl text-pretty text-lg sm:text-xl text-muted-strong leading-relaxed anim-fade-up"
            style={{ animationDelay: "180ms" }}
          >
            {profile.short}{" "}
            <span className="text-muted">
              I work on the physical layer of wireless systems, which is a
              polite way of saying I get quite attached to small plots of
              spectrum.
            </span>
          </p>

          <div
            className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted anim-fade-up"
            style={{ animationDelay: "280ms" }}
          >
            <a
              href="#about"
              className="text-foreground border-b border-border-strong pb-0.5 hover:border-accent transition-colors"
            >
              Read a little more
            </a>
            <span className="opacity-40">·</span>
            <a
              href="#contact"
              className="hover:text-foreground transition-colors"
            >
              Or just say hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

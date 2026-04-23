import { Reveal } from "./Reveal";
import { lyrics, photos, photoSources } from "../lib/site-data";
import { ArrowUpRight } from "lucide-react";

export function Aside() {
  return (
    <section id="aside" className="scroll-mt-16 space-y-16">
      <Reveal>
        <p className="text-[10px] uppercase tracking-[0.24em] text-muted mb-6">
          Aside
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-muted-strong text-pretty max-w-prose">
          Outside of the lab, I write the occasional Sinhala song lyric, and I
          keep a camera close. My wife Maznah and I also run a small wedding
          photography studio in Houston. A small selection below.
        </p>
      </Reveal>

      <Reveal>
        <p className="text-[10px] uppercase tracking-[0.24em] text-muted mb-6">
          Lyrics
        </p>
        <ul className="divide-y divide-border border-t border-b border-border">
          {lyrics.map((song) => (
            <li
              key={song.title}
              className="grid gap-1 py-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_60px] sm:items-baseline sm:gap-6"
            >
              <a
                href={song.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-baseline gap-1.5 text-foreground hover:text-accent transition-colors text-pretty"
              >
                <span>{song.title}</span>
                <ArrowUpRight
                  className="h-3.5 w-3.5 text-muted group-hover:text-accent transition-colors flex-none translate-y-[1px]"
                  strokeWidth={1.5}
                />
              </a>
              <span className="text-sm text-muted text-pretty">{song.artist}</span>
              <span className="text-xs text-muted sm:text-right tabular-nums">
                {song.year}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>

      {photos.length > 0 && (
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.24em] text-muted mb-6">
            Photographs
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {photos.map((p) => (
              <a
                key={p.src}
                href={p.src}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-[4/5] overflow-hidden rounded-sm border border-border"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </a>
            ))}
          </div>
          <div className="pt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            {photoSources.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-accent transition-colors"
              >
                {s.label}
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </Reveal>
      )}
    </section>
  );
}

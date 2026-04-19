import Link from "next/link";
import { profile, focusAreas } from "../lib/site-data";

const reach = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "linkedin.com/in/najath", href: profile.linkedin },
  { label: "Scholar", value: "Google Scholar", href: profile.scholar },
];

const sections = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

export function Sidebar() {
  const year = new Date().getFullYear();

  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between px-6 sm:px-10 lg:px-12 pt-14 pb-10 lg:py-16 border-b lg:border-b-0 lg:border-r border-border">
      <div className="space-y-12">
        <div className="space-y-6">
          <Link
            href="#top"
            aria-label={profile.name}
            className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-border-strong text-foreground"
          >
            <span className="font-display italic text-2xl leading-none translate-y-[-1px]">
              N
            </span>
          </Link>

          <div className="space-y-2">
            <h1 className="font-display text-[2rem] leading-[1.05] text-foreground">
              {profile.name}
            </h1>
            <p className="text-sm text-muted-strong">{profile.role}</p>
            <p className="text-sm text-muted">{profile.location}</p>
          </div>
        </div>

        <nav aria-label="Sections" className="hidden lg:block">
          <ul className="space-y-2.5">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3">
          <p className="text-[10px] uppercase tracking-[0.24em] text-muted">
            Focus
          </p>
          <ul className="space-y-1.5 text-sm text-muted-strong">
            {focusAreas.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-[10px] uppercase tracking-[0.24em] text-muted">
            Reach
          </p>
          <ul className="space-y-1.5">
            {reach.map((r) => (
              <li key={r.label}>
                <a
                  href={r.href}
                  target={r.href.startsWith("http") ? "_blank" : undefined}
                  rel={r.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-sm text-muted-strong hover:text-accent transition-colors"
                >
                  {r.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-[11px] text-muted mt-12 lg:mt-0">
        © {year} {profile.name}
      </p>
    </aside>
  );
}

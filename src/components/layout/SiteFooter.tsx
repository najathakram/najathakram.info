import Link from "next/link";
import { nav, profile } from "../../lib/site-data";

const reach = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "IEEE Xplore", href: profile.ieee },
  { label: "Google Scholar", href: profile.scholar },
  { label: "Resume (PDF)", href: profile.resumes.product },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-[1fr_auto_auto] sm:gap-16">
          <div className="max-w-sm">
            <p className="text-[length:var(--step-0)] font-medium text-ink">
              {profile.name}
            </p>
            <p className="mt-1.5 text-[length:var(--step-ui)] leading-relaxed text-ink-muted">
              {profile.role}. {profile.location}.
            </p>
            <p className="mt-4 text-[length:var(--step-ui)] leading-relaxed text-ink-muted">
              {profile.openTo}
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="label">Pages</p>
            <ul className="mt-3 space-y-1.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[length:var(--step-ui)] text-ink-muted transition-colors duration-[var(--duration-fast)] hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="label">Reach</p>
            <ul className="mt-3 space-y-1.5">
              {reach.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-[length:var(--step-ui)] text-ink-muted transition-colors duration-[var(--duration-fast)] hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-line pt-6 text-[length:var(--step--1)] text-ink-soft">
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}

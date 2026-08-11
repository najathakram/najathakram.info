"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, profile } from "../../lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on route change, during render rather than in an effect.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ground/85 backdrop-blur-md supports-[backdrop-filter]:bg-ground/70">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-6 px-5 sm:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 text-[length:var(--step-0)] font-medium tracking-[-0.01em] text-ink"
        >
          <span
            aria-hidden="true"
            className="grid h-6 w-6 place-items-center rounded-[var(--radius)] border border-line-strong text-[length:var(--step--2)] font-semibold text-ink-muted"
          >
            N
          </span>
          {profile.name}
        </Link>

        <nav aria-label="Main" className="hidden flex-1 items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-[var(--radius)] px-2.5 py-1.5 text-[length:var(--step-ui)] transition-colors duration-[var(--duration-fast)] hover:bg-ground-sunk ${
                isActive(item.href)
                  ? "text-ink"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <Link
            href="/contact"
            className="hidden rounded-[var(--radius)] bg-accent px-3 py-1.5 text-[length:var(--step-ui)] font-medium text-white transition-colors duration-[var(--duration-fast)] hover:bg-accent-hover sm:inline-block"
          >
            Contact
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="rounded-[var(--radius)] border border-line-strong px-2.5 py-1.5 text-[length:var(--step-ui)] text-ink-muted transition-colors duration-[var(--duration-fast)] hover:text-ink md:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t border-line bg-ground px-5 pb-4 pt-2 md:hidden"
        >
          <ul className="flex flex-col">
            {[...nav, { label: "Contact", href: "/contact", kind: "route" as const }].map(
              (item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`block border-b border-line py-2.5 text-[length:var(--step-0)] ${
                      isActive(item.href) ? "text-ink" : "text-ink-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}

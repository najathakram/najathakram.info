"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#publications", label: "Research" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-16 h-16">
        <a
          href="#top"
          className="font-display text-xl tracking-tight text-foreground hover:text-accent transition-colors"
        >
          Najath Akram
          <span className="text-muted text-sm align-super ml-1 font-sans">PhD</span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-sm font-mono-tabular tracking-wide text-foreground hover:text-accent transition-colors"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Available
        </a>
      </div>
    </header>
  );
}

import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative w-full px-6 sm:px-10 lg:px-16 py-28 sm:py-36 ${className}`}
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 sm:mb-20 space-y-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted">
            {eyebrow}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-balance text-foreground leading-[1.05]">
            {title}
          </h2>
        </div>
        <div className="relative">{children}</div>
      </div>
    </section>
  );
}

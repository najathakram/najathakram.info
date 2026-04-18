import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({ id, index, eyebrow, title, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative w-full px-6 sm:px-10 lg:px-16 py-28 sm:py-36 ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 sm:mb-20 grid gap-6 sm:grid-cols-[auto_1fr] sm:items-end">
          <div className="flex items-center gap-3 text-muted">
            <span className="font-mono-tabular text-xs tracking-[0.2em]">{index}</span>
            <span className="h-px w-12 bg-border-strong" />
            <span className="font-mono-tabular text-xs uppercase tracking-[0.2em]">
              {eyebrow}
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-balance text-muted-strong">
            {title}
          </h2>
        </div>
        <div className="relative">{children}</div>
      </div>
    </section>
  );
}

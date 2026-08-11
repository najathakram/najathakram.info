type Props = {
  title: string;
  dek?: string;
};

/**
 * The bordered header band that owns a route's single <h1>.
 * Deliberately has no kicker above the heading: the heading carries its own
 * weight, and a label stacked above it is banned by the project's craft floor.
 */
export function PageHeader({ title, dek }: Props) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <h1 className="max-w-3xl text-[length:var(--step-5)] text-balance">
          {title}
        </h1>
        {dek && (
          <p className="measure mt-5 text-[length:var(--step-2)] leading-relaxed text-ink-muted text-pretty">
            {dek}
          </p>
        )}
      </div>
    </header>
  );
}

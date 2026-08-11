type Props = {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * A page section on the shared container with its heading in a left rail that
 * collapses above the content below lg. No kicker above the heading: the
 * project's craft floor bans a label stacked over a heading outright.
 */
export function Section({ id, title, children, className = "" }: Props) {
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      className={`border-b border-line ${className}`}
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-16">
        <div className="lg:pt-1">
          {title && (
            <h2
              id={headingId}
              className="text-[length:var(--step-3)] font-medium text-ink text-balance"
            >
              {title}
            </h2>
          )}
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

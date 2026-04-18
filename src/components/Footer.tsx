export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border px-6 sm:px-10 lg:px-16 py-10">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted">
        <span>© {year} Najath Akram</span>
        <span className="hidden sm:inline">Houston, Texas</span>
        <a href="#top" className="hover:text-foreground transition-colors">
          Back to top
        </a>
      </div>
    </footer>
  );
}

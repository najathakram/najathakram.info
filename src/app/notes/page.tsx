import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "../../components/primitives/PageHeader";
import { Reveal } from "../../components/Reveal";
import { notes, readingMinutes } from "../../lib/notes";
import { pageIntros } from "../../lib/site-data";

export const metadata: Metadata = {
  title: "Notes",
  description: pageIntros.notes.dek,
  alternates: { canonical: "/notes" },
};

export default function NotesPage() {
  return (
    <>
      <PageHeader
        title={pageIntros.notes.title}
        dek={pageIntros.notes.dek}
      />
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        {/* Sorted by date, newest first. It used to render in array order,
            which happened to look right and would have silently stopped being
            right the moment a post was inserted anywhere but the top. */}
        <ul className="flex flex-col gap-4">
          {[...notes]
            .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
            .map((note, idx) => (
            <Reveal as="li" key={note.slug} delay={idx * 60}>
              <Link
                href={`/notes/${note.slug}`}
                className="block rounded-[var(--radius)] border border-line p-6 transition-colors duration-[var(--duration-fast)] hover:border-line-strong sm:p-8"
              >
                <h2 className="text-[length:var(--step-2)] font-medium text-ink">
                  {note.title}
                </h2>
                <p className="measure mt-2 text-ink-muted text-pretty">
                  {note.dek}
                </p>
                <p className="label mt-4">
                  {note.date} · {readingMinutes(note)} min
                </p>
                </Link>
              </Reveal>
            ))}
        </ul>
      </div>
    </>
  );
}

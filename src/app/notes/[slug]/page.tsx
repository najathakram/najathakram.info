import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getNote, notes, readingMinutes } from "../../../lib/notes";

type Params = { slug: string };

export function generateStaticParams() {
  return notes.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return {};

  return {
    title: note.title,
    description: note.dek,
    alternates: { canonical: `/notes/${note.slug}` },
  };
}

export default async function NotePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="measure">
        <Link href="/notes" className="label link-underline">
          Back to notes
        </Link>

        <h1 className="mt-6 max-w-3xl text-[length:var(--step-4)] text-balance">
          {note.title}
        </h1>
        <p className="label mt-4">
          {note.date} · {readingMinutes(note)} min
        </p>

        <div className="mt-10">
          {note.body.map((block, idx) => {
            if (block.kind === "p") {
              return (
                <p key={idx} className="mt-5 text-pretty">
                  {block.text}
                </p>
              );
            }

            if (block.kind === "h") {
              return (
                <h2
                  key={idx}
                  className="mt-10 text-[length:var(--step-2)] font-medium"
                >
                  {block.text}
                </h2>
              );
            }

            return (
              <ol key={idx} className="mt-5 list-decimal space-y-4 pl-6">
                {block.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="pl-1 text-pretty">
                    {item.lead && (
                      <span className="font-medium text-ink">
                        {item.lead}:{" "}
                      </span>
                    )}
                    <span className="text-ink-muted">{item.text}</span>
                  </li>
                ))}
              </ol>
            );
          })}
        </div>
      </div>
    </div>
  );
}

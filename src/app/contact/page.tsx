import type { Metadata } from "next";
import { PageHeader } from "../../components/primitives/PageHeader";
import { pageIntros, profile, contact } from "../../lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: pageIntros.contact.dek,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader {...pageIntros.contact} />
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="measure">
          <p className="text-ink-muted text-pretty">{contact.body}</p>
          <a
            href={`mailto:${profile.email}`}
            className="link-underline mt-8 inline-block text-[length:var(--step-3)] font-medium text-ink"
          >
            {profile.email}
          </a>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-ink"
          >
            LinkedIn
          </a>
          <a
            href={profile.ieee}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-ink"
          >
            Author page on IEEE Xplore
          </a>
          <a
            href={profile.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-ink"
          >
            Google Scholar
          </a>
          <a href={profile.resume} className="link-underline text-ink">
            Resume (PDF)
          </a>
        </div>

        <p className="measure mt-14 text-ink-muted text-pretty">
          {profile.openTo}
        </p>
      </section>
    </>
  );
}

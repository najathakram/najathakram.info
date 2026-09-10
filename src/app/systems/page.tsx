import type { Metadata } from "next";
import { PageHeader } from "../../components/primitives/PageHeader";
import { Reveal } from "../../components/Reveal";
import { pageIntros, systems } from "../../lib/site-data";

export const metadata: Metadata = {
  title: "Systems",
  description: pageIntros.systems.dek,
  alternates: { canonical: "/systems" },
};

export default function SystemsPage() {
  return (
    <>
      <PageHeader
        title={pageIntros.systems.title}
        dek={pageIntros.systems.dek}
      />
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <ul className="divide-y divide-line border-y border-line">
          {systems.map((item, idx) => (
            // `id` as well as `key`: other pages link to individual systems
            // (e.g. /systems#agos from the photography page), and with only a
            // key those anchors resolve nowhere.
            <Reveal
              as="li"
              key={item.id}
              id={item.id}
              delay={idx * 60}
              className="row-hover scroll-mt-24 py-5"
            >
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6">
                <h2 className="text-[length:var(--step-2)] font-medium text-ink">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h2>
                <span className="label shrink-0">{item.tag}</span>
              </div>
              <p className="measure mt-2 text-ink-muted text-pretty">{item.body}</p>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}

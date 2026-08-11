import type { MetadataRoute } from "next";

import { notes } from "../lib/notes";
import { nav, profile } from "../lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // The header's route entries plus /contact, which the header renders separately.
  const routes = [
    ...nav.filter((item) => item.kind === "route").map((item) => item.href),
    "/contact",
  ];

  return [
    {
      url: profile.siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...routes.map((href) => ({
      url: `${profile.siteUrl}${href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...notes.map((note) => ({
      url: `${profile.siteUrl}/notes/${note.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}

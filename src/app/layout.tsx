import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "../components/layout/SiteHeader";
import { SiteFooter } from "../components/layout/SiteFooter";
import { profile } from "../lib/site-data";

// Fonts map to generic slots so a face swap is a two-line change here.
const fontSans = Archivo({
  variable: "--font-sans-var",
  subsets: ["latin"],
  display: "swap",
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono-var",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name}, Signal Processing Engineer`,
    template: `%s · ${profile.name}`,
  },
  description:
    "Najath Akram works on the physical layer of wireless systems: O-RAN radio units, golden models signed off against firmware, and AI systems built with real cost and verification gates.",
  keywords: [
    "Najath Akram",
    "Signal Processing",
    "O-RAN",
    "5G NR",
    "Digital Beamforming",
    "Massive MIMO",
    "PRACH",
    "Wireless Systems",
    // "Technical Product Manager" was here and came out 2026-08-11. Keywords
    // describe what the work IS, not a role being angled for. The site is not
    // a job application, and that includes the parts only a crawler reads.
  ],
  authors: [{ name: profile.name }],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${profile.name}, Signal Processing Engineer`,
    description:
      "The physical layer of wireless systems, and the products built on top of it.",
    url: profile.siteUrl,
    siteName: profile.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name}, Signal Processing Engineer`,
    description:
      "The physical layer of wireless systems, and the products built on top of it.",
  },
};

export const viewport: Viewport = {
  themeColor: "#fcfcfb",
  colorScheme: "light",
};

const DIRECTION_CONTRACT = `
IMPECCABLE DIRECTION CONTRACT, seed af8c32fb
THESIS: One engineer who owns a radio down to the sample and ships the product out to
  the people who use it. Refuses the engineer-portfolio rut of a dark terminal with neon
  monospace, and refuses the cream-plus-serif editorial default this site used before.
OWN-WORLD: Warm-neutral near-white ground (#fcfcfb), near-black ink, hairline rules, a
  single instrument blue (#1b5e8c). One grotesque (Archivo) for everything, one mono
  (JetBrains Mono) reserved for measured values and labels so numbers read as readings.
  Precision spacing scale, 6px radii, 140-200ms transitions, focus as a real state.
STORY: The visitor learns he models the radio and ships the tools, sees the numbers that
  prove it, and emails him or downloads the resume.
FIRST VIEWPORT: Slim sticky header with wordmark and route nav. Below it a short headline,
  one line of what it means, one of what it means this year, then two actions. Directly under
  that, three columns naming the three things that are true at once, each linking out. No
  stats strip: measurements stay inside the sentences that give them meaning.
FORM: The canon, played straight, taken by the owner as the standing exit over the
  rolled assignment (index 3, phased-array lattice). Craft bar linear.app, light only.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fontSans.variable} ${fontMono.variable} h-full`}
    >
      <head>
        {/* Reveals start hidden, so without JavaScript nothing would un-hide.
            Server-rendered identically, so it cannot desync hydration. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full bg-ground text-ink">
        <div dangerouslySetInnerHTML={{ __html: `<!--${DIRECTION_CONTRACT}-->` }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ground focus:px-4 focus:py-2 focus:text-ink focus:shadow-sm"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.najathakram.info"),
  title: {
    default: "Najath Akram, Ph.D. — Signal Processing & Wireless Systems",
    template: "%s — Najath Akram",
  },
  description:
    "Ph.D. signal processing engineer building the physical layer of 5G, 6G, and O-RAN. Phased arrays, digital beamforming, and AI for wireless systems.",
  keywords: [
    "Najath Akram",
    "Signal Processing",
    "DSP",
    "O-RAN",
    "5G",
    "6G",
    "Phased Array",
    "Digital Beamforming",
    "FPGA",
    "MATLAB",
    "Wireless Systems",
    "AI for RAN",
  ],
  authors: [{ name: "Najath Akram" }],
  openGraph: {
    title: "Najath Akram, Ph.D.",
    description:
      "Signal processing, O-RAN, and wireless systems. Building the physical layer of 5G and 6G.",
    url: "https://www.najathakram.info",
    siteName: "Najath Akram",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Najath Akram, Ph.D.",
    description:
      "Signal processing, O-RAN, and wireless systems. Building the physical layer of 5G and 6G.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground grain">
        {children}
      </body>
    </html>
  );
}

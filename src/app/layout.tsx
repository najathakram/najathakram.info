import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.najathakram.info"),
  title: {
    default: "Najath Akram",
    template: "%s · Najath Akram",
  },
  description:
    "Najath Akram is a signal processing engineer working on the physical layer of wireless systems. O-RAN, 5G, 6G, and careful applications of machine learning.",
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
    title: "Najath Akram",
    description:
      "Signal processing engineer. O-RAN, 5G, and the physical layer of wireless.",
    url: "https://www.najathakram.info",
    siteName: "Najath Akram",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Najath Akram",
    description:
      "Signal processing engineer. O-RAN, 5G, and the physical layer of wireless.",
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
      className={`${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

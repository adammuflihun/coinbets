import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interDisplay = Inter({
  variable: "--font-inter-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "CoinBets - Crypto Casino Reviews, Bonuses & Guides",
    template: "%s | CoinBets",
  },
  description:
    "Find the best crypto casinos, sports betting sites, expert reviews, exclusive bonuses, and in-depth guides at CoinBets.",
  keywords: [
    "crypto casino",
    "bitcoin casino",
    "crypto gambling",
    "sports betting",
    "casino bonuses",
    "crypto betting",
  ],
  openGraph: {
    type: "website",
    siteName: "CoinBets",
    title: "CoinBets - Crypto Casino Reviews, Bonuses & Guides",
    description:
      "Find the best crypto casinos, sports betting sites, expert reviews, exclusive bonuses, and in-depth guides at CoinBets.",
    images: [
      {
        url: "/opengraph.webp",
        width: 1200,
        height: 630,
        alt: "CoinBets - No affiliate links. No paid rankings. No casino influence.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CoinBets - Crypto Casino Reviews, Bonuses & Guides",
    description:
      "Find the best crypto casinos, sports betting sites, expert reviews, exclusive bonuses, and in-depth guides at CoinBets.",
    images: ["/opengraph.webp"],
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${inter.variable} ${interDisplay.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body data-section="body" className="min-h-full flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
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
  },
  twitter: {
    card: "summary_large_image",
    title: "CoinBets - Crypto Casino Reviews, Bonuses & Guides",
    description:
      "Find the best crypto casinos, sports betting sites, expert reviews, exclusive bonuses, and in-depth guides at CoinBets.",
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
      className={`${inter.variable} ${interDisplay.variable} h-full antialiased`}
    >
      <body data-section="body" className="min-h-full flex flex-col">
          <Navbar />
          {children}
        </body>
    </html>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Comprehensive guides on crypto gambling, sports betting strategies, blockchain basics, and how to get started with Bitcoin casinos.",
  openGraph: {
    title: "Guides | CoinBets",
    description:
      "Comprehensive guides on crypto gambling, sports betting strategies, and how to get started with Bitcoin casinos.",
  },
};

export default function GuidesPage() {
  return (
    <main className="flex-1">
      <h1>Guides</h1>
    </main>
  );
}

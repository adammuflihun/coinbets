import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bonuses",
  description:
    "Discover the best crypto casino bonuses, welcome offers, free spins, and exclusive promotions. Updated daily.",
  openGraph: {
    title: "Bonuses | CoinBets",
    description:
      "Discover the best crypto casino bonuses, welcome offers, free spins, and exclusive promotions.",
  },
};

export default function BonusesPage() {
  return (
    <main className="flex-1">
      <h1>Bonuses</h1>
    </main>
  );
}

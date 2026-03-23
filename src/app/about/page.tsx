import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about CoinBets — our mission, team, and commitment to providing honest, transparent crypto casino and sports betting reviews.",
  openGraph: {
    title: "About | CoinBets",
    description:
      "Learn about CoinBets — our mission, team, and commitment to honest crypto casino reviews.",
  },
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <h1>About</h1>
    </main>
  );
}

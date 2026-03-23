import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Reviews",
  description:
    "In-depth expert reviews of the top crypto casinos and sports betting platforms. Unbiased ratings, pros & cons, and detailed analysis.",
  openGraph: {
    title: "Expert Reviews | CoinBets",
    description:
      "In-depth expert reviews of the top crypto casinos and sports betting platforms.",
  },
};

export default function ExpertReviewsPage() {
  return (
    <main className="flex-1">
      <h1>Expert Reviews</h1>
    </main>
  );
}

import type { Metadata } from "next";
import { ReviewBlock } from "@/components/review-block";
import { casinoReviews } from "@/data/casino-reviews";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const casino = casinoReviews.find((c) => c.slug === slug);
  const name = casino?.name ?? "Casino";

  return {
    title: `${name} Review`,
    description: `In-depth review of ${name} — player ratings, expert score, bonuses, and more.`,
  };
}

export default async function CasinoReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main data-section="casino-review" className="flex-1">
      <ReviewBlock slug={slug} />
    </main>
  );
}

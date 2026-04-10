import type { Metadata } from "next";
import { SubmitReviewForm } from "@/components/submit-review-form";
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
    title: `Submit Review for ${name}`,
    description: `Share your experience with ${name}. Write an honest review to help other players.`,
  };
}

export default async function SubmitReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main data-section="main" className="flex-1">
      <SubmitReviewForm slug={slug} />
    </main>
  );
}

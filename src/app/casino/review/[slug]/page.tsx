import type { Metadata } from "next";
import { ReviewBlock } from "@/components/review-block";
import { CoinbetIndexSeoMetatags } from "@/components/coinbet-index-seo-metatags";
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
    openGraph: {
      title: `${name} Review | CoinBets`,
      description: `In-depth review of ${name} — player ratings, expert score, bonuses, and more.`,
      images: casino?.screenshots?.[0]
        ? [{ url: casino.screenshots[0], width: 1200, height: 630 }]
        : [{ url: "/opengraph.webp", width: 1200, height: 630 }],
    },
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
      <CoinbetIndexSeoMetatags />
    </main>
  );
}

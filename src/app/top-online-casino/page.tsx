import { HeroPageTemplate } from "@/components/hero-page-template";
import { SearchboxIndex } from "@/components/searchbox-index";
import { CasinoReviewList } from "@/components/casino-review-list";
import { SportsSectionNav } from "@/components/sports-section-nav";
import { CoinbetIndexSeoMetatags } from "@/components/coinbet-index-seo-metatags";

export const metadata = {
  title: "Top Online Casino",
  description:
    "Real player reviews from the crypto casino community. No paid rankings, no affiliate bias — just honest feedback.",
};

export default function TopOnlineCasinoPage() {
  return (
    <main data-section="main" className="flex-1">
      <HeroPageTemplate
        tagline="Our Expert Picks"
        title="CoinBets Recommended Casinos"
        description="These platforms passed our strict checks for trust, fairness, and user experience. Each casino earns its place through real testing and verified player reviews. We focus on game integrity, reliable withdrawals, strong support, and reputation. No paid placements, only proven sites."
        buttonText="Write a Review"
        buttonHref="#write-review"
        heroImage="/hero/recommended.webp"
        contentMaxWidth="max-w-[75ch]"
        heroHeight="h-[200px] sm:h-[280px] lg:h-[400px]"
        heroObjectFit="object-contain"
        containerClassName="relative site-container py:0 pt-6 lg:py-0"
      />

      <SportsSectionNav />
      <CasinoReviewList title="CoinBets Recommended Casinos" />
      <SearchboxIndex overlap={false} title="Browse all user reviews" />
      <CoinbetIndexSeoMetatags />
    </main>
  );
}

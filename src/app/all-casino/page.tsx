import { HeroPageTemplate } from "@/components/hero-page-template";
import { SearchboxIndex } from "@/components/searchbox-index";
import { CasinoReviewList } from "@/components/casino-review-list";
import { SportsSectionNav } from "@/components/sports-section-nav";
import { CoinbetIndexSeoMetatags } from "@/components/coinbet-index-seo-metatags";

export const metadata = {
  title: "All Casinos",
  description:
    "Browse all crypto casinos. Verified reviews and ratings from real players.",
};

export default function AllCasinoPage() {
  return (
    <main data-section="main" className="flex-1">
      <HeroPageTemplate
        tagline="Honest Reviews Backed by Real Players"
        title="Best Crypto Casinos"
        description="Find the most trusted crypto casinos with unbiased ratings, verified player reviews, and real money test results. Every site here is independently checked for withdrawals, fairness, and gameplay, giving you a transparent way to compare crypto gambling platforms."
        buttonText="Write a Review"
        buttonHref="#write-review"
        heroImage="/hero/all-casino.webp"
        contentMaxWidth="max-w-[75ch]"
        heroObjectFit="object-contain"
        backgroundImage="/hero/all-casino.svg"
        containerClassName="relative mx-auto max-w-[1200px] px-4 sm:px-5 py-6 lg:py-0"
      />

      <SportsSectionNav />
      <CasinoReviewList title="All Casinos" />
      <SearchboxIndex overlap={false} title="Browse all user reviews" />
      <CoinbetIndexSeoMetatags />
    </main>
  );
}

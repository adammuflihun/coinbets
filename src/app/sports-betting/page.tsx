import { HeroPageTemplate } from "@/components/hero-page-template";
import { SearchboxIndex } from "@/components/searchbox-index";
import { CasinoReviewList } from "@/components/casino-review-list";
import { SportsSectionNav } from "@/components/sports-section-nav";
import { CoinbetIndexSeoMetatags } from "@/components/coinbet-index-seo-metatags";

export const metadata = {
  title: "Sports Betting",
  description:
    "Real player reviews from the crypto casino community. No paid rankings, no affiliate bias — just honest feedback.",
};

export default function SportsBettingPage() {
  return (
    <main data-section="main" className="flex-1">
      <HeroPageTemplate
        tagline="Fast Odds, Fast Payouts"
        title="Crypto Sports Betting Sites"
        description="Crypto sportsbooks with strong odds, wide markets, and fast crypto payouts. We test each site with real money and review betting limits, transparency, reputation, and market depth so players get fast deposits, fair odds, and reliable withdrawals for major sports worldwide."
        buttonText="Write a Review"
        buttonHref="#write-review"
        heroImage="/hero/sports-betting.webp"
        contentMaxWidth="max-w-[75ch]"
        heroHeight="h-[400px]"
        heroObjectFit="object-cover"
      />

      <SportsSectionNav />
      <CasinoReviewList />
      <SearchboxIndex overlap={false} title="Browse all user reviews" />
      <CoinbetIndexSeoMetatags />
    </main>
  );
}

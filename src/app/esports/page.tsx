import { HeroPageTemplate } from "@/components/hero-page-template";
import { SearchboxIndex } from "@/components/searchbox-index";
import { CasinoReviewList } from "@/components/casino-review-list";
import { SportsSectionNav } from "@/components/sports-section-nav";
import { CoinbetIndexSeoMetatags } from "@/components/coinbet-index-seo-metatags";

export const metadata = {
  title: "Esports Betting",
  description:
    "Find the best crypto esports betting sites for CS2, Dota 2, League of Legends, and more. Honest reviews, odds comparisons, and verified player feedback.",
};

export default function EsportsBettingPage() {
  return (
    <main data-section="main" className="flex-1">
      <HeroPageTemplate
        tagline="Bet on CS2, League, Dota, Valorant & More"
        title="Crypto Esports Betting Sites"
        description="Crypto esports sites with sharp odds, fast withdrawals, and full coverage of CS2, League, Dota, Valorant, and more. We review each platform's markets, payout speed, and reliability using real play so you can bet on esports with confidence."
        buttonText="Write a Review"
        buttonHref="#write-review"
        heroImage="/hero/esport-betting-image.png"
        contentMaxWidth="max-w-[75ch]"
        heroObjectFit="object-contain"
        backgroundImage="/hero/esport-betting-bg.svg"
        containerClassName="relative mx-auto max-w-[1200px] px-4 sm:px-5 py-6 lg:py-0"
      />

      <SportsSectionNav />
      <CasinoReviewList title="Esports Betting" />
      <SearchboxIndex overlap={false} title="Browse all user reviews" />
      <CoinbetIndexSeoMetatags />
    </main>
  );
}

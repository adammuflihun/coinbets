import { HeroPageTemplate } from "@/components/hero-page-template";
import { SearchboxIndex } from "@/components/searchbox-index";
import { CasinoReviewList } from "@/components/casino-review-list";
import { SportsSectionNav } from "@/components/sports-section-nav";
import { CoinbetIndexSeoMetatags } from "@/components/coinbet-index-seo-metatags";

export const metadata = {
  title: "Live Dealer Casinos",
  description:
    "Discover the best live dealer crypto casinos with real-time table games, professional dealers, and immersive streaming. Honest reviews and player ratings.",
};

export default function LiveDealerCasinosPage() {
  return (
    <main data-section="main" className="flex-1">
      <HeroPageTemplate
        tagline="Real Tables, Real Dealers, Real Crypto"
        title="Best Live Dealer Crypto Casinos"
        description="Crypto casinos with real live blackjack, roulette, baccarat, and game shows from trusted providers. We check streaming quality, dealer fairness, table limits, and withdrawal reliability so you know which platforms offer real live play with smooth crypto payouts, not low-quality clones."
        buttonText="Write a Review"
        buttonHref="#write-review"
        heroImage="/hero/live-dealer-item.png"
        contentMaxWidth="max-w-[75ch]"
        heroObjectFit="object-contain"
        backgroundImage="/hero/live-dealer-bg.svg"
        containerClassName="relative site-container py-6 lg:py-0"
      />

      <SportsSectionNav />
      <CasinoReviewList title="Live Dealer Casinos" />
      <SearchboxIndex overlap={false} title="Browse all user reviews" />
      <CoinbetIndexSeoMetatags />
    </main>
  );
}

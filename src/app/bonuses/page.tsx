import { HeroPageTemplate } from "@/components/hero-page-template";
import { SearchboxIndex } from "@/components/searchbox-index";
import { CasinoReviewList } from "@/components/casino-review-list";
import { SportsSectionNav } from "@/components/sports-section-nav";
import { CoinbetIndexSeoMetatags } from "@/components/coinbet-index-seo-metatags";

export const metadata = {
  title: "Bonuses",
  description:
    "Discover the best crypto casino bonuses, welcome offers, free spins, and exclusive promotions. Updated daily with honest reviews and verified terms.",
};

export default function BonusesPage() {
  return (
    <main data-section="main" className="flex-1">
      <HeroPageTemplate
        tagline="The Bonus Database Casinos Hate"
        title="Crypto Casino Bonuses 2025"
        description="No paid listings. No affiliate links. We dig into every bonus, strip away the marketing, and expose the fine print — so you can spot the traps and see exactly what's real before you claim."
        buttonText="Write a Review"
        buttonHref="#write-review"
        heroImage="/hero/bonuses-img.png"
        contentMaxWidth="max-w-[75ch]"
        heroObjectFit="object-contain"
        backgroundImage="/hero/bonuses-bg.svg"
        containerClassName="relative mx-auto max-w-[1200px] px-4 sm:px-5 py-6 lg:py-0"
        imageClassName="w-[180px] sm:w-full h-[180px] sm:h-[240px] lg:h-[300px]"
      />

      <SportsSectionNav />
      <CasinoReviewList title="Crypto Casino Bonuses" variant="bonus" />
      <SearchboxIndex overlap={false} title="Browse all user reviews" />
      <CoinbetIndexSeoMetatags />
    </main>
  );
}

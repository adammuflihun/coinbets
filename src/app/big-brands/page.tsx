import { HeroPageTemplate } from "@/components/hero-page-template";
import { SearchboxIndex } from "@/components/searchbox-index";
import { CasinoReviewList } from "@/components/casino-review-list";
import { SportsSectionNav } from "@/components/sports-section-nav";
import { CoinbetIndexSeoMetatags } from "@/components/coinbet-index-seo-metatags";

export const metadata = {
  title: "Big Brands",
  description:
    "Explore the most established and trusted big-name crypto casinos. Verified reviews and ratings from real players.",
};

export default function BigBrandsPage() {
  return (
    <main data-section="main" className="flex-1">
      <HeroPageTemplate
        tagline="Established Names With Proven Track Records"
        title="Big Brand Crypto Casinos"
        description="Trusted casino brands with long histories, strong player bases, and reliable payouts. We highlight major operators with consistent performance, stable licensing, and solid reputations. CoinBets reviews traffic, controversies, support quality, and real player feedback to verify that these big names truly deserve their status."
        buttonText="Write a Review"
        buttonHref="#write-review"
        heroImage="/hero/big-brands-item.webp"
        contentMaxWidth="max-w-[75ch]"
        heroHeight="h-[200px] sm:h-[280px] lg:h-[400px]"
        heroObjectFit="object-contain"
        backgroundImage="/hero/big-brands-bg.svg"
        heroImageClassName="absolute inset-0 size-full py-4 lg:py-12"
        containerClassName="relative site-container py-6 lg:py-0"
      />

      <SportsSectionNav />
      <CasinoReviewList title="Big Brand Crypto Casinos" />
      <SearchboxIndex overlap={false} title="Browse all user reviews" />
      <CoinbetIndexSeoMetatags />
    </main>
  );
}

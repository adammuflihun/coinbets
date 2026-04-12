import { HeroPageTemplate } from "@/components/hero-page-template";
import { SearchboxIndex } from "@/components/searchbox-index";
import { CasinoReviewList } from "@/components/casino-review-list";
import { SportsSectionNav } from "@/components/sports-section-nav";
import { CoinbetIndexSeoMetatags } from "@/components/coinbet-index-seo-metatags";

export const metadata = {
  title: "Mobile-Friendly Casinos",
  description:
    "Discover the best mobile-friendly crypto casinos optimized for smartphones and tablets. Fast loading, responsive design, and seamless gameplay on the go.",
};

export default function MobileFriendlyCasinosPage() {
  return (
    <main data-section="main" className="flex-1">
      <HeroPageTemplate
        tagline="Optimized for On-the-Go Gaming"
        title="Mobile-Friendly Crypto Casinos"
        description="Smooth gameplay, fast interfaces, and full support on iOS and Android. These crypto casinos are tested on real phones for loading speed, responsive design, mobile game availability, and withdrawal performance so mobile players always know which platforms actually work on the go."
        buttonText="Write a Review"
        buttonHref="#write-review"
        heroImage="/hero/mobile-friendly-item.png"
        contentMaxWidth="max-w-[75ch]"
        heroObjectFit="object-contain"
        imageClassName="w-[180px] sm:w-full h-[180px] sm:h-[240px] lg:h-[300px]"
        imageAlign="self-end"
        backgroundImage="/hero/mobile-friendly.svg"
        containerClassName="relative mx-auto max-w-[1200px] px-4 sm:px-5 py-6 lg:py-0"
      />

      <SportsSectionNav />
      <CasinoReviewList title="Mobile-Friendly Casinos" />
      <SearchboxIndex overlap={false} title="Browse all user reviews" />
      <CoinbetIndexSeoMetatags />
    </main>
  );
}

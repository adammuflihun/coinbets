import { HeroPageTemplate } from "@/components/hero-page-template";
import { SearchboxIndex } from "@/components/searchbox-index";
import { CasinoReviewList } from "@/components/casino-review-list";
import { SportsSectionNav } from "@/components/sports-section-nav";
import { CoinbetIndexSeoMetatags } from "@/components/coinbet-index-seo-metatags";

export const metadata = {
  title: "Newly Opened Casinos",
  description:
    "Discover the latest crypto casinos that just launched. Get early access to fresh platforms with honest reviews and verified player feedback.",
};

export default function NewlyOpenedCasinosPage() {
  return (
    <main data-section="main" className="flex-1">
      <HeroPageTemplate
        tagline="Fresh Sites Worth Watching"
        title="New Crypto Casinos"
        description="These newly launched casinos offer big bonuses, modern interfaces, and new ideas, but they also carry more risk. CoinBets tracks each one closely, checking licenses, early player feedback, reputation signals, and fairness. These are new platforms showing potential under active review."
        buttonText="Write a Review"
        buttonHref="#write-review"
        heroImage="/hero/newly-opened.webp"
        contentMaxWidth="max-w-[75ch]"
        heroObjectFit="object-contain"
        imageClassName="w-[180px] sm:w-full h-[180px] sm:h-[240px] lg:h-[300px]"
        backgroundImage="/hero/bg-recommend.svg"
        containerClassName="relative mx-auto max-w-[1200px] px-4 sm:px-5 py-6 lg:py-0"
      />

      <SportsSectionNav />
      <CasinoReviewList title="New Crypto Casinos" />
      <SearchboxIndex overlap={false} title="Browse all user reviews" />
      <CoinbetIndexSeoMetatags />
    </main>
  );
}

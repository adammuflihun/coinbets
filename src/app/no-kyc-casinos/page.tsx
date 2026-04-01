import { HeroPageTemplate } from "@/components/hero-page-template";
import { SearchboxIndex } from "@/components/searchbox-index";
import { CasinoReviewList } from "@/components/casino-review-list";
import { SportsSectionNav } from "@/components/sports-section-nav";
import { CoinbetIndexSeoMetatags } from "@/components/coinbet-index-seo-metatags";

export const metadata = {
  title: "No KYC Casinos",
  description:
    "Find the best no KYC crypto casinos that let you play without identity verification. Honest reviews, safety ratings, and verified player feedback.",
};

export default function NoKycCasinosPage() {
  return (
    <main data-section="main" className="flex-1">
      <HeroPageTemplate
        tagline="Private, Fast, and Player-Friendly"
        title="No-KYC Crypto Casinos"
        description="Casinos that allow anonymous signup and crypto-only deposits without intrusive verification. These platforms let you play and withdraw without mandatory ID checks. CoinBets reviews withdrawal limits, risk rules, and privacy policies to confirm which sites genuinely offer real no-KYC gambling."
        buttonText="Write a Review"
        buttonHref="#write-review"
        heroImage="/hero/no-kyc-casinos-item.png"
        contentMaxWidth="max-w-[75ch]"
        heroHeight="h-[200px] sm:h-[280px] lg:h-[400px]"
        heroObjectFit="object-contain"
        backgroundImage="/hero/no-kyc-casinos.svg"
        containerClassName="relative site-container py-6 lg:py-0"
      />

      <SportsSectionNav />
      <CasinoReviewList title="No KYC Casinos" />
      <SearchboxIndex overlap={false} title="Browse all user reviews" />
      <CoinbetIndexSeoMetatags />
    </main>
  );
}

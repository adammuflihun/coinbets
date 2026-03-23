import { HeroHeader } from "@/components/hero-header";
import { HeroCategory } from "@/components/hero-category";
import { LatestReviews } from "@/components/latest-reviews";
import { CasinoIndex } from "@/components/casino-index";
import { VideoHome } from "@/components/video-home";
import { CryptoCasinoBanner } from "@/components/crypto-casino-banner";
import { ExpertReviews } from "@/components/expert-reviews";
import { LatestFromCommunity } from "@/components/latest-from-community";
import { LatestBlog } from "@/components/latest-blog";
import { CasinoCategories } from "@/components/casino-categories";

export default function Home() {
  return (
    <main data-section="main" className="flex-1">
      <HeroHeader />
      <HeroCategory />
      <LatestReviews />
      <VideoHome />
      <CasinoCategories />
      <CryptoCasinoBanner />
      <ExpertReviews />
      <LatestBlog />
      <CasinoIndex />
      <LatestFromCommunity />
    </main>
  );
}

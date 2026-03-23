import { HeroHeader } from "@/components/hero-header";
import { HeroCategory } from "@/components/hero-category";
import { LatestReviews } from "@/components/latest-reviews";
import { CasinoIndex } from "@/components/casino-index";

export default function Home() {
  return (
    <main data-section="main" className="flex-1">
      <HeroHeader />
      <HeroCategory />
      <LatestReviews />
      <CasinoIndex />
    </main>
  );
}

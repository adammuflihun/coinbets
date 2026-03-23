import { HeroHeader } from "@/components/hero-header";
import { HeroCategory } from "@/components/hero-category";
import { LatestReviews } from "@/components/latest-reviews";

export default function Home() {
  return (
    <main data-section="main" className="flex-1">
      <HeroHeader />
      <HeroCategory />
      <LatestReviews />
    </main>
  );
}

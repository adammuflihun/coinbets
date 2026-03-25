import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReviewCard } from "@/components/review-card";
import type { ReviewData } from "@/components/review-card";

export const metadata: Metadata = {
  title: "Expert Reviews | CoinBets",
  description:
    "In-depth expert reviews of the top crypto casinos and sports betting platforms. Unbiased ratings, pros & cons, and detailed analysis.",
  openGraph: {
    title: "Expert Reviews | CoinBets",
    description:
      "In-depth expert reviews of the top crypto casinos and sports betting platforms.",
  },
};

const allReviews: ReviewData[] = [
  {
    name: "Stake",
    slug: "stake",
    logo: "/casino-index/logo-stake.svg",
    safetyIndex: "High",
    playerRating: 3.0,
    playerReviews: 374,
    expertScore: 2.9,
    highlights: [
      "Web3 login, real-time RTP - love to see it",
      "Small international casino",
      "Average withdrawal limits (16000$/month)",
      "All deposits need to be wagered 1x before withdrawal",
    ],
    bonus: "300% up to $3,000",
  },
  {
    name: "Roobet",
    slug: "roobet",
    logo: "/casino-index/logo-roobet.svg",
    safetyIndex: "Normal",
    playerRating: 4.2,
    playerReviews: 512,
    expertScore: 3.8,
    highlights: [
      "Instant crypto deposits with low minimums",
      "Provably fair gaming selection",
      "Limited country availability",
      "VIP program with dedicated support",
    ],
    bonus: "200% up to $1,000",
  },
  {
    name: "Bitsler",
    slug: "bitsler",
    logo: "/casino-index/logo-bitsler.svg",
    safetyIndex: "High",
    playerRating: 2.9,
    playerReviews: 198,
    expertScore: 3.2,
    highlights: [
      "20+ supported cryptocurrencies",
      "Transparent house edge display",
      "Smaller game selection than competitors",
      "Fast withdrawal processing times",
    ],
    bonus: "150% up to $500",
  },
  {
    name: "Shuffle",
    slug: "shuffle",
    logo: "/casino-index/logo-shuffle.svg",
    safetyIndex: "Normal",
    playerRating: 3.4,
    playerReviews: 287,
    expertScore: 3.5,
    highlights: [
      "Sleek modern interface with fast loading",
      "Competitive odds on sports betting",
      "Limited live dealer game options",
      "Weekly cashback rewards for all players",
    ],
    bonus: "250% up to $2,500",
  },
  {
    name: "Gamdom",
    slug: "gamdom",
    logo: "/casino-index/logo-gamedom.svg",
    safetyIndex: "Normal",
    playerRating: 3.7,
    playerReviews: 431,
    expertScore: 3.6,
    highlights: [
      "Unique rain and giveaway features",
      "Strong community and chat integration",
      "Limited fiat currency support",
      "Rakeback rewards for active players",
    ],
    bonus: "15% rakeback bonus",
  },
  {
    name: "Thrill",
    slug: "thrill",
    logo: "/casino-index/logo-thrill.svg",
    safetyIndex: "High",
    playerRating: 4.1,
    playerReviews: 356,
    expertScore: 4.0,
    highlights: [
      "Curated game library with top providers",
      "Fast KYC verification process",
      "No US player access",
      "Generous first deposit match bonus",
    ],
    bonus: "400% up to $4,000",
  },
  {
    name: "Menace",
    slug: "menace",
    logo: "/casino-index/logo-menace.svg",
    safetyIndex: "Normal",
    playerRating: 3.5,
    playerReviews: 245,
    expertScore: 3.3,
    highlights: [
      "New platform with aggressive bonuses",
      "Growing game library from top providers",
      "Limited track record in the industry",
      "Responsive customer support team",
    ],
    bonus: "350% up to $3,500",
  },
];

export default function ExpertReviewsPage() {
  return (
    <main data-section="expert-reviews-page" className="flex-1">
      {/* Dark hero banner */}
      <section className="site-container pt-8">
        <div
          className="flex flex-col items-center rounded-lg border border-neutral-200 bg-[#020202] px-5 sm:px-8 lg:px-12 pt-10 sm:pt-14 lg:pt-16 pb-36 sm:pb-40 lg:pb-48 text-center"
          data-name="reviews-hero"
        >
          <p className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-4">
            CoinBets Expert Reviews
          </p>
          <h1 className="text-2xl sm:text-[32px] lg:text-[40px] font-black leading-[1.2] tracking-tight text-white max-w-2xl mb-4">
            Top Crypto Casinos,{" "}
            <br className="hidden sm:block" />
            Reviewed by Experts
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-neutral-400 max-w-xl mb-6">
            Unbiased ratings, in-depth analysis, and honest pros & cons. We go
            deep so you don&apos;t have to.
          </p>
          <Link
            href="/"
            className="group flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-sm font-medium text-[#020202] hover:bg-neutral-100 transition-colors"
          >
            Back to home
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      {/* Review cards grid */}
      <section className="site-container pb-12">
        <div
          className="-mt-24 relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-0 sm:px-4 lg:px-8"
          data-name="reviews-grid"
        >
          {allReviews.map((review) => (
            <ReviewCard key={review.slug} review={review} />
          ))}
        </div>
      </section>
    </main>
  );
}

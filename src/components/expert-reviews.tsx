import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Gift, CheckCircle } from "lucide-react";

const STAR_BG =
  "M15.9988 0H4C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0Z";
const STAR_SHAPE =
  "M10.38 4.035a.75.75 0 0 0-.753 0c-.206.098-.32.269-.377.362a4.7 4.7 0 0 0-.18.34L7.814 7.285l-2.813.411a4.7 4.7 0 0 0-.378.065c-.107.026-.304.081-.46.247a.75.75 0 0 0-.233.716c.03.226.157.387.228.47.074.087.172.182.268.276l2.034 1.981-.48 2.8a4.7 4.7 0 0 0-.055.38c-.009.11-.017.314.092.515a.75.75 0 0 0 .61.443c.224.041.416-.03.517-.072a4.7 4.7 0 0 0 .345-.17l2.514-1.322 2.515 1.322c.118.063.24.127.344.17.102.042.294.113.518.072a.75.75 0 0 0 .61-.443c.108-.2.1-.405.091-.515a4.7 4.7 0 0 0-.055-.38l-.48-2.799 2.035-1.982a4.7 4.7 0 0 0 .268-.275c.071-.083.198-.244.228-.47a.75.75 0 0 0-.232-.717c-.157-.165-.354-.221-.461-.247a4.7 4.7 0 0 0-.378-.065l-2.813-.411-1.257-2.548a4.7 4.7 0 0 0-.18-.34.75.75 0 0 0-.377-.362Z";

const SHIELD_BG =
  "M15.9988 0H4C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0Z";
const SHIELD_SHAPE =
  "M4.272 6.52C4.328 8.534 4.892 10.531 5.897 12.273C6.903 14.015 8.351 15.501 10.067 16.557C12.308 15.171 14.077 13.062 15.038 10.609C15.553 9.297 15.828 7.922 15.865 6.518C12.273 4.574 7.867 4.573 4.272 6.52Z";

const reviews = [
  {
    name: "Stake",
    logo: "/casino-index/base-5.svg",
    safetyIndex: "Normal",
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
    logo: "/casino-index/base-8.svg",
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
    logo: "/casino-index/base-6.svg",
    safetyIndex: "Normal",
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
    logo: "/casino-index/base-3.svg",
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
];

function PlayerStarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
      <path d={STAR_BG} fill="#fb923c" />
      <path d={STAR_SHAPE} fill="white" />
    </svg>
  );
}

function ExpertShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
      <path d={SHIELD_BG} fill="#003EB6" />
      <path d={SHIELD_SHAPE} fill="white" />
    </svg>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <div data-name="expert-card" className="flex flex-col gap-3.5 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
      {/* Casino header */}
      <div data-name="expert-casino-header" className="flex items-start gap-3.5">
        <div data-name="expert-logo" className="flex items-center justify-center w-[108px] h-[89px] rounded-lg overflow-hidden bg-[#060d17] shrink-0 p-3">
          <Image
            src={review.logo}
            alt={review.name}
            width={70}
            height={50}
            className="object-contain"
          />
        </div>
        <div data-name="expert-casino-info" className="flex flex-col gap-1">
          <p className="text-base font-semibold text-[#060d17]">{review.name}</p>
          <div data-name="expert-safety" className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#404040] uppercase">
              Safety Index
            </span>
            <span className="rounded-full bg-[#eaee45] px-2 py-0.5 text-xs font-semibold text-[#060d17]">
              {review.safetyIndex}
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div data-name="divider" className="h-px bg-[#d9d9d9]" />

      {/* Ratings */}
      <div data-name="expert-ratings" className="flex items-start justify-between">
        {/* Player Rating */}
        <div data-name="player-rating" className="flex items-start gap-2.5">
          <PlayerStarIcon />
          <div data-name="player-rating-detail" className="flex flex-col gap-1">
            <div data-name="player-score-row" className="flex items-center gap-1.5">
              <span className="text-[23px] font-medium leading-none text-[#fb923c]">
                {review.playerRating.toFixed(1)}
              </span>
              <PlayerStarIcon />
            </div>
            <p className="text-sm font-medium text-[#060d17]">Player Rating</p>
            <p className="text-sm font-medium text-[#2563eb]">
              {review.playerReviews} Reviews
            </p>
          </div>
        </div>

        {/* Expert Score */}
        <div data-name="expert-score" className="flex items-start gap-2.5">
          <ExpertShieldIcon />
          <div data-name="expert-score-detail" className="flex flex-col gap-1">
            <div data-name="expert-score-row" className="flex items-center gap-1.5">
              <span className="text-[23px] font-medium leading-none text-[#060d17]">
                {review.expertScore.toFixed(1)}
              </span>
              <ExpertShieldIcon />
            </div>
            <p className="text-sm font-medium text-[#060d17]">
              Coinbets Expert Score
            </p>
            <p className="text-sm font-medium text-[#2563eb]">
              Independent Audit
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div data-name="divider" className="h-px bg-[#d9d9d9]" />

      {/* Highlights */}
      <div data-name="highlights" className="flex flex-col gap-2.5">
        {review.highlights.map((highlight, i) => (
          <div key={i} data-name="highlight-item" className="flex items-center gap-2.5">
            <CheckCircle className="size-5 shrink-0 text-[#22c55e]" />
            <p className="text-sm font-medium text-[#060d17] leading-[18px]">
              {highlight}
            </p>
          </div>
        ))}
      </div>

      {/* Bonus */}
      <div data-name="bonus-bar" className="flex items-center justify-between rounded-md border border-[#f1f1f1] px-2.5 py-2">
        <div data-name="bonus-info" className="flex items-center gap-1.5">
          <Gift className="size-5 shrink-0 text-[#eab914]" />
          <span className="text-sm font-medium text-[#060d17]">
            {review.bonus}
          </span>
        </div>
        <div data-name="bonus-badge" className="flex items-center gap-1 rounded-lg bg-[#f5f5f5] px-2 py-1">
          <CheckCircle className="size-[15px] shrink-0 text-[#22c55e]" />
          <span className="text-sm font-semibold text-[#171717]">Bonus</span>
        </div>
      </div>

      {/* CTA */}
      <Link
        href="#"
        className="group flex items-center justify-between rounded-lg bg-[#eab914] px-6 py-2.5 text-sm font-semibold text-[#171717] hover:bg-[#d4a812] transition-colors"
      >
        Read Review
        <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}

export function ExpertReviews() {
  return (
    <section data-section="expert-reviews" className="site-container py-8">
      {/* Header */}
      <div data-name="expert-header" className="flex items-end justify-between mb-6">
        <div data-name="expert-header-text" className="flex flex-col gap-3">
          <p className="text-base font-bold text-[#060d17]">
            Recent Guides and Expert Reviews
          </p>
          <h2 className="text-[35px] font-black text-[#060d17] leading-[1.2] tracking-tight">
            Expert Reviews &<br />
            Comprehensive Guides
          </h2>
        </div>
        <Link
          href="/expert-reviews"
          className="group flex items-center gap-1.5 rounded-lg bg-neutral-900 px-3 py-1.5 text-sm font-medium text-[#f8f8f8] hover:bg-neutral-800 transition-colors"
        >
          Watch all Videos
          <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      {/* Review cards */}
      <div data-name="expert-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {reviews.map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
    </section>
  );
}

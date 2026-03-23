import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const reviews = [
  {
    logo: "/reviews/logo-luckyblock.svg",
    name: "Lucky Block",
    url: "luckyblock.com",
    review: "A delightful surprise that left me amazed...",
    userName: "LegiaTmz",
    timeAgo: "1 day ago",
    rating: 4.7,
  },
  {
    logo: "/reviews/logo-luckyblock.svg",
    name: "Lucky Block",
    url: "luckyblock.com",
    review: "A delightful surprise that left me amazed...",
    userName: "LegiaTmz",
    timeAgo: "1 day ago",
    rating: 4.7,
  },
  {
    logo: "/reviews/logo-yeet.svg",
    name: "Yeet",
    url: "yeet.com",
    review: "I've been meaning to check out Gamdom…",
    userName: "LegiaTmz",
    timeAgo: "1 day ago",
    rating: 1.7,
  },
  {
    logo: "/reviews/logo-bcgame.svg",
    name: "BC.Game",
    url: "bc.game",
    review: "I originally did a VIP transfer and…",
    userName: "LegiaTmz",
    timeAgo: "1 day ago",
    rating: 4.7,
  },
  {
    logo: "/reviews/logo-luckyblock.svg",
    name: "Lucky Block",
    url: "luckyblock.com",
    review: "After my past review betbolt did made…",
    userName: "LegiaTmz",
    timeAgo: "1 day ago",
    rating: 1.2,
  },
];

function StarIcon({ filled, color }: { filled: boolean; color: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M10 1.5L12.47 6.86L18.34 7.72L14.17 11.78L15.18 17.63L10 14.9L4.82 17.63L5.83 11.78L1.66 7.72L7.53 6.86L10 1.5Z"
        fill={filled ? color : "#E5E5E5"}
      />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  const filled = Math.round(rating);
  const color = rating >= 3 ? "#22C55E" : "#EF4444";

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <StarIcon key={i} filled={i < filled} color={color} />
        ))}
      </div>
      <span className="text-sm font-medium text-[#060D17]">{rating}</span>
    </div>
  );
}

function ReviewCard({
  logo,
  name,
  url,
  review,
  userName,
  timeAgo,
  rating,
}: (typeof reviews)[number]) {
  return (
    <div className="flex flex-col gap-2.5 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm min-w-[240px]">
      {/* Casino logo */}
      <div className="flex flex-col gap-1.5">
        <div className="w-[92px] h-[76px] bg-[#060D17] rounded flex items-center justify-center">
          <Image
            src={logo}
            alt={name}
            width={72}
            height={46}
            className="object-contain"
          />
        </div>
        <div>
          <p className="text-base font-semibold text-[#060D17]">{name}</p>
          <p className="text-xs text-[#1c1c1c]/50">{url}</p>
        </div>
      </div>

      {/* Review text */}
      <div className="bg-[#f8f8f8] rounded-md px-2.5 py-1.5 flex flex-col gap-2.5">
        <svg
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
          className="shrink-0"
        >
          <path
            d="M3.41 0.5L4.26 1.36C3.12 2.06 2.34 3.08 1.96 4.42H3.64V8H0V5.24C0 2.68 1.26 1.12 3.41 0.5ZM8.77 0.5L9.62 1.36C8.48 2.06 7.7 3.08 7.32 4.42H9V8H5.36V5.24C5.36 2.68 6.62 1.12 8.77 0.5Z"
            fill="#9CA3AF"
          />
        </svg>
        <p className="text-sm font-medium text-[#060D17] leading-[18px]">
          {review}
        </p>
      </div>

      {/* User info & rating */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1">
            <div className="size-[17px] rounded-full bg-red-400 shrink-0" />
            <span className="text-neutral-600 text-sm">{userName}</span>
          </div>
          <span className="size-[3px] rounded-full bg-neutral-400 shrink-0" />
          <span className="text-xs text-[#1c1c1c]/50">{timeAgo}</span>
        </div>
        <StarRating rating={rating} />
      </div>
    </div>
  );
}

export function LatestReviews() {
  return (
    <section data-section="latest-reviews" className="site-container py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-[#060D17]">
          Latest User Reviews
        </h2>
        <Link
          href="/reviews"
          className="flex items-center gap-1 rounded-lg bg-neutral-900 px-3 py-1.5 text-sm font-medium text-[#f8f8f8] hover:bg-neutral-800 transition-colors"
        >
          See all
          <ChevronRight className="size-4" />
        </Link>
      </div>

      {/* Review cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {reviews.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </div>
    </section>
  );
}

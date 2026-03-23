"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const reviews = [
  {
    logo: "/casino-index/base-6.svg",
    name: "Bitsler",
    url: "bitsler.com",
    review: "A delightful surprise that left me amazed...",
    userName: "LegiaTmz",
    timeAgo: "1 day ago",
    rating: 4.7,
  },
  {
    logo: "/casino-index/base-7.svg",
    name: "Thrill",
    url: "thrill.com",
    review: "A delightful surprise that left me amazed...",
    userName: "LegiaTmz",
    timeAgo: "1 day ago",
    rating: 4.7,
  },
  {
    logo: "/casino-index/base-2.svg",
    name: "BC Game",
    url: "bcgame.com",
    review: "I've been meaning to check out BC Game…",
    userName: "LegiaTmz",
    timeAgo: "1 day ago",
    rating: 1.7,
  },
  {
    logo: "/casino-index/base-8.svg",
    name: "Roobet",
    url: "roobet.com",
    review: "I originally did a VIP transfer and…",
    userName: "LegiaTmz",
    timeAgo: "1 day ago",
    rating: 4.7,
  },
  {
    logo: "/casino-index/base-5.svg",
    name: "Menace",
    url: "menace.com",
    review: "After my past review betbolt did made…",
    userName: "LegiaTmz",
    timeAgo: "1 day ago",
    rating: 1.2,
  },
];

const STAR_BG =
  "M15.9988 0H4C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0Z";
const STAR_SHAPE =
  "M10.38 4.035a.75.75 0 0 0-.753 0c-.206.098-.32.269-.377.362a4.7 4.7 0 0 0-.18.34L7.814 7.285l-2.813.411a4.7 4.7 0 0 0-.378.065c-.107.026-.304.081-.46.247a.75.75 0 0 0-.233.716c.03.226.157.387.228.47.074.087.172.182.268.276l2.034 1.981-.48 2.8a4.7 4.7 0 0 0-.055.38c-.009.11-.017.314.092.515a.75.75 0 0 0 .61.443c.224.041.416-.03.517-.072a4.7 4.7 0 0 0 .345-.17l2.514-1.322 2.515 1.322c.118.063.24.127.344.17.102.042.294.113.518.072a.75.75 0 0 0 .61-.443c.108-.2.1-.405.091-.515a4.7 4.7 0 0 0-.055-.38l-.48-2.799 2.035-1.982a4.7 4.7 0 0 0 .268-.275c.071-.083.198-.244.228-.47a.75.75 0 0 0-.232-.717c-.157-.165-.354-.221-.461-.247a4.7 4.7 0 0 0-.378-.065l-2.813-.411-1.257-2.548a4.7 4.7 0 0 0-.18-.34.75.75 0 0 0-.377-.362Z";

const RATING_COLORS: Record<number, string> = {
  5: "#23BA21",
  4: "#9FF11A",
  3: "#D8DC00",
  2: "#FFB257",
  1: "#FF6847",
};

function StarIcon({ color }: { color: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="shrink-0"
    >
      <path d={STAR_BG} fill={color} />
      <path d={STAR_SHAPE} fill="white" />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  const filled = Math.min(5, Math.max(1, Math.round(rating)));
  const activeColor = RATING_COLORS[filled] ?? RATING_COLORS[3];

  return (
    <div data-name="star-rating" className="flex items-center gap-1.5">
      <div data-name="star-icons" className="flex items-center gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <StarIcon key={i} color={i < filled ? activeColor : "#DDDDDD"} />
        ))}
      </div>
      <span className="text-sm font-medium text-[#060D17]">{rating}</span>
    </div>
  );
}

function ReviewCard({
  logo,
  name,
  review,
  userName,
  timeAgo,
  rating,
}: (typeof reviews)[number]) {
  return (
    <div
      data-name="review-card"
      className="flex flex-col gap-2.5 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm h-full"
    >
      {/* Casino logo */}
      <div data-name="review-casino" className="flex flex-col gap-1.5">
        <Image
          src={logo}
          alt={name}
          width={92}
          height={76}
          className="w-[92px] h-[76px] object-cover rounded-lg"
        />
        <p className="text-base font-semibold text-[#060D17]">{name}</p>
      </div>

      {/* Review text */}
      <div
        data-name="review-text"
        className="bg-[#f8f8f8] rounded-md p-5.5 flex flex-col gap-2.5"
      >
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
      <div data-name="review-user-info" className="flex flex-col gap-1.5">
        <div
          data-name="review-user-row"
          className="flex items-center gap-2 text-sm"
        >
          <div data-name="review-username" className="flex items-center gap-1">
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

function MobileCarousel() {
  const flickityRef = useRef<HTMLDivElement>(null);
  const flktyInstance = useRef<Flickity | null>(null);

  useEffect(() => {
    if (!flickityRef.current) return;

    let flkty: Flickity | null = null;

    import("flickity").then((mod) => {
      const Flickity = mod.default;
      if (!flickityRef.current) return;
      flkty = new Flickity(flickityRef.current, {
        cellAlign: "left",
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        freeScroll: true,
        wrapAround: true,
      });
      flktyInstance.current = flkty;
    });

    return () => {
      if (flktyInstance.current) {
        flktyInstance.current.destroy();
        flktyInstance.current = null;
      }
    };
  }, []);

  return (
    <div ref={flickityRef} data-name="reviews-carousel">
      {reviews.map((review, i) => (
        <div key={i} className="w-[75vw] mr-3">
          <ReviewCard {...review} />
        </div>
      ))}
    </div>
  );
}

export function LatestReviews() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section data-section="latest-reviews" className="site-container py-8">
      {/* Header */}
      <div
        data-name="reviews-header"
        className="flex items-center justify-between mb-4"
      >
        <h2 className="text-base font-bold text-[#060D17]">
          Latest User Reviews
        </h2>
        <Link
          href="/reviews"
          className="group flex items-center gap-1 rounded-lg bg-neutral-900 px-3 py-1.5 text-sm font-medium text-[#f8f8f8] hover:bg-neutral-800 transition-colors"
        >
          See all
          <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      {/* Mobile: Flickity carousel */}
      {isMobile && <MobileCarousel />}

      {/* Desktop: Grid */}
      {!isMobile && (
        <div
          data-name="reviews-grid"
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {reviews.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </div>
      )}
    </section>
  );
}

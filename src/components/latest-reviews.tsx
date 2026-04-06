"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ReviewerAvatar } from "@/components/reviewer-avatar";

const reviews = [
  {
    slug: "bitsler",
    logo: "/casino-index/logo-bitsler.svg",
    name: "Bitsler",
    review:
      "I have played on Fortunejack for about a year during 2023-2024\n\nTheir giveaways on site and discord are really good, maybe the best in industry.",
    userName: "LegiaTmz",
    timeAgo: "1 day ago",
    rating: 4.7,
    safetyIndex: "Normal",
  },
  {
    slug: "thrill",
    logo: "/casino-index/logo-thrill.svg",
    name: "Thrill",
    review:
      "A delightful surprise that left me amazed. The platform runs smoothly and payouts are fast.",
    userName: "LegiaTmz",
    timeAgo: "1 day ago",
    rating: 4.7,
    safetyIndex: "Normal",
  },
  {
    slug: "bc-game",
    logo: "/casino-index/logo-gamedom.svg",
    name: "BC Game",
    review:
      "I've been meaning to check out BC Game for a while now. The variety of games is impressive.",
    userName: "LegiaTmz",
    timeAgo: "1 day ago",
    rating: 1.7,
    safetyIndex: "Normal",
  },
  {
    slug: "roobet",
    logo: "/casino-index/logo-roobet.svg",
    name: "Roobet",
    review:
      "I originally did a VIP transfer and the experience has been great so far. Support is responsive.",
    userName: "LegiaTmz",
    timeAgo: "1 day ago",
    rating: 4.7,
    safetyIndex: "Normal",
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
      <span className="hidden text-sm font-medium text-[#060D17]">
        {rating}
      </span>
    </div>
  );
}

function ReviewCard({
  slug,
  logo,
  name,
  review,
  userName,
  timeAgo,
  rating,
  safetyIndex,
}: (typeof reviews)[number]) {
  return (
    <div
      data-name="review-card"
      className="group flex flex-col gap-2.5 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm h-full"
    >
      <StarRating rating={rating} />

      {/* Review text */}
      <div
        data-name="review-text"
        className="bg-[white] rounded-md p-0 flex flex-1 flex-col gap-2.5"
      >
        <svg
          width="25"
          height="20"
          viewBox="0 0 25 20"
          fill="none"
          className="shrink-0 hidden"
        >
          <path
            opacity="0.2"
            d="M10.6553 2.78711C8.03247 4.42643 5.40981 7.70546 5 10.4922C5.16393 10.4102 5.81974 10.3281 6.31152 10.3281C8.77044 10.3281 10.6553 12.2952 10.6553 15C10.6552 17.7046 8.52474 19.9997 5.65625 20C2.62368 20 0.000190601 17.4591 0 13.1152C0 7.78755 2.95068 2.95072 7.13086 0L10.6553 2.78711ZM24.7539 2.78711C22.131 4.42639 19.5895 7.7054 19.1797 10.4922C19.3436 10.4102 19.9174 10.3281 20.4092 10.3281C22.8681 10.3281 24.835 12.2952 24.835 15C24.8349 17.7047 22.6225 19.9998 19.8359 20C16.8034 20 14.1799 17.4591 14.1797 13.1152C14.1797 7.78759 17.1303 2.95072 21.2285 0L24.7539 2.78711Z"
            fill="#343434"
          />
        </svg>
        <p data-name="review-paragraphs" className="py-4 tracking-[.5px] font-regular text-[14px] leading-[1.3] bg-linear-to-b from-[#343434] to-[#202020] bg-clip-text text-transparent line-clamp-3">
          {review.replace(/\n\n/g, " ")}
        </p>
      </div>

      {/* User info & rating */}
      <div data-name="review-user-info" className="flex flex-col gap-[7px]">
        <div
          data-name="review-user-row"
          className="flex items-center gap-2 text-sm"
        >
          <div data-name="review-username" className="flex items-center gap-1">
            <ReviewerAvatar name={userName} size="sm" />
            <span className="text-[#404040] text-sm">{userName}</span>
          </div>
          <span className="size-[3px] rounded-full bg-neutral-400 shrink-0" />
          <span className="text-xs text-[#1c1c1c]/50">{timeAgo}</span>
        </div>
      </div>

      {/* Divider */}
      <div data-name="review-divider" className="py-[15px]">
        <div data-name="review-divider-line" className="h-px w-full bg-[#d9d9d9]" />
      </div>

      {/* Product info */}
      <Link href={`/casino/review/${slug}`} data-name="review-product" className="flex items-start gap-3.5 hover:opacity-80 transition-opacity">
        <div data-name="review-product-logo" className="bg-[#060d17] rounded-sm px-1.5 py-2 shrink-0 flex items-center justify-center">
          <Image
            src={logo}
            alt={name}
            width={43}
            height={27}
            className="object-contain"
          />
        </div>
        <div data-name="review-product-info" className="flex flex-col gap-[3px]">
          <p className="text-base font-semibold text-[#060D17] leading-[1.4]">
            {name}
          </p>
          <div data-name="review-safety-index" className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase text-[#404040]">
              Safety Index
            </span>
            <span className="rounded-full bg-[#eaee45] px-2 py-0.5 text-xs font-semibold text-[#060d17]">
              {safetyIndex}
            </span>
          </div>
        </div>
      </Link>
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
        cellAlign: "center",
        contain: false,
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
        <div key={i} data-name="carousel-cell" className="w-[calc(100vw-2.5rem)] mr-3">
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
          className="group flex items-center justify-center gap-1 rounded-lg bg-neutral-900 px-3 py-1.5 text-sm font-medium text-[#f8f8f8] hover:bg-neutral-800 transition-colors shrink-0"
        >
          See all
          <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      {/* Mobile: Flickity carousel */}
      {isMobile && (
        <div data-name="carousel-breakout" className="-mx-5">
          <MobileCarousel />
        </div>
      )}

      {/* Desktop: Grid */}
      {!isMobile && (
        <div
          data-name="reviews-grid"
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {reviews.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </div>
      )}
    </section>
  );
}

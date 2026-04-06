"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ReviewerAvatar } from "@/components/reviewer-avatar";

/* ── Review data & helpers ── */

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
    </div>
  );
}

function ReviewSlideCard({
  logo,
  name,
  review,
  userName,
  timeAgo,
  rating,
  safetyIndex,
}: (typeof reviews)[number]) {
  return (
    <Link
      href="/users-review"
      data-name="review-card"
      className="flex flex-col gap-2.5 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm h-full hover:shadow-md transition-shadow"
    >
      <div
        data-name="review-top-row"
        className="flex items-center justify-between gap-2"
      >
        <StarRating rating={rating} />
        <div
          data-name="review-user-info"
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

      <div
        data-name="review-text"
        className="flex flex-col gap-2.5 overflow-hidden"
      >
        <p
          data-name="review-paragraphs"
          className="py-4 tracking-[.5px] font-regular text-[14px] leading-[1.3] bg-linear-to-b from-[#343434] to-[#202020] bg-clip-text text-transparent line-clamp-3"
        >
          {review.replace(/\n\n/g, " ")}
        </p>
      </div>

      <div data-name="review-divider" className="py-[15px]">
        <div
          data-name="review-divider-line"
          className="h-px w-full bg-[#d9d9d9]"
        />
      </div>

      <div
        data-name="review-product"
        className="flex items-start gap-3.5"
      >
        <div
          data-name="review-product-logo"
          className="bg-[#060d17] rounded-sm px-1.5 py-2 shrink-0 flex items-center justify-center"
        >
          <Image
            src={logo}
            alt={name}
            width={43}
            height={27}
            className="object-contain"
          />
        </div>
        <div
          data-name="review-product-info"
          className="flex flex-col gap-[3px]"
        >
          <p className="text-base font-semibold text-[#060D17] leading-[1.4]">
            {name}
          </p>
          <div
            data-name="review-safety-index"
            className="flex items-center gap-2"
          >
            <span className="text-xs font-bold uppercase text-[#404040]">
              Safety Index
            </span>
            <span className="rounded-full bg-[#eaee45] px-2 py-0.5 text-xs font-semibold text-[#060d17]">
              {safetyIndex}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ReviewSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div data-name="review-slider" className="flex flex-col gap-3 h-full">
      <div
        data-name="review-slide-container"
        className="relative flex-1 min-h-0"
      >
        {reviews.map((review, i) => (
          <div
            key={i}
            data-name="review-slide"
            className={`absolute inset-0 transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <ReviewSlideCard {...review} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Category data & helpers ── */

function CasinoIndex52Icon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className="size-8 shrink-0"
    >
      <rect width="32" height="32" rx="7" fill="#060D17" />
      <path
        d="M11.958 10.3962C12.0504 10.3958 12.1419 10.4131 12.2275 10.448C12.3146 10.4835 12.3944 10.5358 12.4609 10.6023C12.5273 10.6687 12.5798 10.7478 12.6152 10.8347C12.6507 10.9218 12.6681 11.0151 12.667 11.1091V11.1111C12.6657 11.1762 12.6598 11.2413 12.6484 11.3054L12.6475 11.3103L12.2158 13.3972H13.0322C13.2775 13.3972 13.4861 13.458 13.6348 13.5935C13.7859 13.7315 13.8457 13.9207 13.8457 14.1169C13.8457 14.3151 13.7872 14.5083 13.6387 14.6511C13.4908 14.7931 13.281 14.8591 13.0322 14.8591H11.917L11.4756 17.0144H12.2314C12.4778 17.0144 12.686 17.0772 12.834 17.2146C12.9839 17.3539 13.0439 17.5442 13.0439 17.74C13.0439 17.9375 12.9815 18.1293 12.834 18.2712C12.6867 18.4128 12.4782 18.4822 12.2314 18.4822H11.1768L10.6514 21.0476V21.0486C10.5701 21.4413 10.2662 21.6814 9.9043 21.6814C9.71255 21.6814 9.53604 21.6131 9.40723 21.4841C9.27842 21.355 9.20904 21.1769 9.20898 20.9783V20.9753C9.21 20.9061 9.21611 20.8368 9.22656 20.7683L9.22754 20.7576H9.22852L9.69922 18.4822H7.83691L7.31055 21.0476C7.2305 21.4413 6.92516 21.6814 6.56445 21.6814C6.37267 21.6814 6.19622 21.6131 6.06738 21.4841C5.93853 21.355 5.8692 21.1769 5.86914 20.9783C5.86914 20.9148 5.87646 20.8159 5.8877 20.7595V20.7576L6.35938 18.4822H5.61328C5.36619 18.4821 5.15853 18.413 5.0127 18.2703C4.86697 18.1275 4.80769 17.9354 4.80762 17.74C4.80762 17.5443 4.86749 17.354 5.01562 17.2146C5.16226 17.0766 5.36893 17.0135 5.6123 17.0134H6.65918L7.09863 14.8591H6.42285C6.17408 14.8591 5.96483 14.7935 5.81738 14.6531C5.66894 14.5117 5.60938 14.32 5.60938 14.1248C5.60942 13.9294 5.669 13.7392 5.81836 13.5994C5.96625 13.461 6.17557 13.3972 6.42285 13.3972H7.3877L7.88477 10.9812C7.91912 10.815 8.0107 10.6661 8.14258 10.5593C8.27313 10.4537 8.43566 10.3965 8.60352 10.3962V10.3953L8.60547 10.3962L8.6084 10.3953L8.60742 10.3962C8.7006 10.3948 8.79325 10.4107 8.87988 10.4451C8.96782 10.48 9.04786 10.5329 9.11523 10.5994C9.18262 10.6658 9.2363 10.7453 9.27246 10.8328C9.30839 10.9198 9.32676 11.013 9.32617 11.1072L9.32031 11.2087C9.31698 11.2454 9.31306 11.282 9.30762 11.3093L9.30664 11.3113L8.875 13.3972H10.7305L11.2246 10.9822L11.2256 10.9812C11.2605 10.8135 11.3525 10.6633 11.4863 10.5564C11.6188 10.4507 11.7838 10.3944 11.9531 10.3962H11.9551C11.9564 10.3963 11.9577 10.3952 11.959 10.3953L11.958 10.3962ZM8.1123 17.0369H10.0146L10.4561 14.8435H8.56641L8.1123 17.0369Z"
        fill="#E6B830"
        stroke="#E6B830"
        strokeWidth="0.384615"
      />
      <path
        d="M21.2805 10.5592L20.6988 12.4631H17.984C17.7725 13.274 17.5433 14.2612 17.4023 14.8253C17.7196 14.4727 18.1955 14.2964 18.742 14.2964C20.2228 14.2964 20.6283 15.4246 20.2404 17.258L19.9584 18.5977C19.5177 20.7131 19.0241 22.1234 16.5914 22.1234C14.2821 22.1234 13.859 20.8365 14.1763 19.2852L14.2468 18.8974H16.3975L16.2917 19.4263C16.1683 20.0433 16.2388 20.4311 16.7677 20.4311C17.2612 20.4311 17.4552 19.9375 17.6667 18.9327L18.0193 17.1875C18.1779 16.4294 18.0369 16.1298 17.5786 16.1298C17.1555 16.1298 16.9087 16.4471 16.7148 17.1346L14.7404 16.9407C15.1282 15.7243 15.9391 12.4454 16.3798 10.5592H21.2805ZM25.5646 22H20.1703L20.2409 21.6827C20.6992 19.6907 21.5806 18.1746 22.9909 16.641C24.6303 14.8781 24.8947 14.5432 25.1415 13.3445C25.3178 12.5512 25.2473 12.1634 24.7537 12.1634C24.3306 12.1634 24.1191 12.4102 23.9428 13.274L23.7842 13.9438H21.7393L21.8627 13.3797C22.1271 12.04 22.6031 10.4005 24.9124 10.4005C27.1159 10.4005 27.6271 11.8813 27.2569 13.697C26.8867 15.4246 26.4637 15.7596 24.8419 17.5577C23.8018 18.7211 23.2377 19.4968 23.0261 20.0961H26.1992L25.5646 22Z"
        fill="#E6B830"
      />
    </svg>
  );
}

const categories = [
  {
    icon: "/categories/icon-crypto-casinos-orig.svg",
    title: "Crypto Casinos",
    badge: 27,
    description: "Top-Rated Crypto Casinos Reviewed",
    href: "/all-casino",
  },
  {
    icon: "/categories/icon-sports-betting-orig.svg",
    title: "Sports Betting",
    badge: 78,
    description: "Best Crypto Sportsbooks Ranked",
    href: "/sports-betting",
  },
  {
    icon: "/categories/icon-crypto-esport-orig.svg",
    title: "Crypto Esport",
    badge: 78,
    description: "Leading Crypto Esports Platforms",
    href: "/esports",
  },
  {
    icon: "/categories/icon-user-reviews-orig.svg",
    title: "User Reviews",
    badge: 78,
    description: "Reviews You Can Trust",
    href: "/users-review",
  },
  {
    icon: "/categories/icon-expert-reviews-orig.svg",
    title: "Expert Reviews",
    badge: 27,
    description: "Expert Reviews You Can Count On",
    href: "/expert-reviews",
  },
  {
    icon: "/icons/casino-index.svg",
    title: "Casino Index 52",
    badge: 52,
    description: "Crypto Casinos Ranked by Players",
    href: "/coinbet-index",
    customIcon: true,
  },
];

function CategoryCard({
  icon,
  title,
  badge,
  description,
  href,
  customIcon,
}: (typeof categories)[number]) {
  return (
    <Link
      href={href}
      data-name="category-card"
      className="flex gap-2 items-start rounded-lg border border-neutral-200 bg-white p-2.5 shadow-sm hover:border-neutral-300 transition-colors"
    >
      {customIcon ? (
        <CasinoIndex52Icon />
      ) : (
        <Image
          src={icon}
          alt=""
          width={32}
          height={32}
          className="size-8 shrink-0"
        />
      )}
      <div
        data-name="category-content"
        className="flex flex-1 flex-col gap-1.5 min-w-0"
      >
        <div
          data-name="category-title-row"
          className="flex items-center justify-between gap-2"
        >
          <p className="text-base font-medium text-neutral-900 truncate">
            {title}
          </p>
          <span className="shrink-0 rounded-lg bg-neutral-100 px-2 py-1 text-sm font-semibold text-neutral-900">
            {badge}
          </span>
        </div>
        <p className="-mt-2 text-sm text-neutral-600 leading-[18px]">
          {description}
        </p>
      </div>
    </Link>
  );
}

/* ── Combined section ── */

export function HeroCategory() {
  return (
    <section
      data-section="hero-category"
      className="relative z-10 -mt-14 sm:-mt-16 lg:-mt-10 site-container pb-8"
    >
      <div
        data-name="hero-category-layout"
        className="flex flex-col lg:flex-row lg:items-stretch gap-4"
      >
        {/* Left: auto-sliding review card (hidden on mobile) */}
        <div
          data-name="hero-review-slider"
          className="hidden lg:block w-[340px] shrink-0"
        >
          <ReviewSlider />
        </div>

        {/* Right: category grid */}
        <div
          data-name="hero-categories-right"
          className="flex-1 flex flex-col gap-3 min-w-0"
        >
          <div
            data-name="category-grids"
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-3.5"
          >
            {categories.map((cat) => (
              <CategoryCard key={cat.title} {...cat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

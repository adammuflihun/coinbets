"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface UserRatedCasino {
  logo: string;
  name: string;
  safetyLevel: string;
  safetyColor: string;
  userRating: number;
}

const casinos: UserRatedCasino[] = [
  {
    logo: "/casino-index/logo-stake.svg",
    name: "Stake",
    safetyLevel: "Normal",
    safetyColor: "#EAEE45",
    userRating: 4.2,
  },
  {
    logo: "/casino-index/logo-gamedom.svg",
    name: "BC.Game",
    safetyLevel: "Normal",
    safetyColor: "#EAEE45",
    userRating: 3.8,
  },
  {
    logo: "/casino-index/logo-roobet.svg",
    name: "Roobet",
    safetyLevel: "Normal",
    safetyColor: "#EAEE45",
    userRating: 4.6,
  },
  {
    logo: "/casino-index/logo-shuffle.svg",
    name: "Shuffle",
    safetyLevel: "High",
    safetyColor: "#00DE00",
    userRating: 4.0,
  },
  {
    logo: "/casino-index/logo-bitsler.svg",
    name: "Bitsler",
    safetyLevel: "High",
    safetyColor: "#00DE00",
    userRating: 4.4,
  },
  {
    logo: "/casino-index/logo-thrill.svg",
    name: "Thrill",
    safetyLevel: "Normal",
    safetyColor: "#EAEE45",
    userRating: 4.7,
  },
  {
    logo: "/casino-index/logo-stake.svg",
    name: "Rollbit",
    safetyLevel: "Normal",
    safetyColor: "#EAEE45",
    userRating: 3.9,
  },
  {
    logo: "/casino-index/logo-gamedom.svg",
    name: "Duelbits",
    safetyLevel: "High",
    safetyColor: "#00DE00",
    userRating: 4.1,
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

function StarRating({ rating, casinoName }: { rating: number; casinoName: string }) {
  const filled = Math.min(5, Math.max(1, Math.round(rating)));
  const activeColor = RATING_COLORS[filled] ?? RATING_COLORS[3];

  return (
    <div data-name="star-rating" className="flex flex-col gap-1">
      <div data-name="star-icons" className="flex items-center gap-1">
        <span className="font-medium text-sm text-[#060D17]">{rating.toFixed(1)}</span>
        {Array.from({ length: 5 }, (_, i) => (
          <StarIcon key={i} color={i < filled ? activeColor : "#DDDDDD"} />
        ))}
      </div>
      <div
        data-name="score-label"
        className="flex items-center gap-1 text-sm"
      >
        <span className="text-neutral-500">{100 + (casinoName.split("").reduce((a, c) => a + c.charCodeAt(0), 0) * 7) % 900} Reviews</span>
      </div>
    </div>
  );
}

function UserRatedCasinoCard({ casino }: { casino: UserRatedCasino }) {
  return (
    <Link
      href={`/casino/review/${casino.name.toLowerCase()}`}
      data-name="casino-card"
      className="relative flex flex-col sm:flex-row gap-4 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
    >
      {/* Logo */}
      <div
        data-name="casino-logo"
        className="w-full h-[89px] sm:w-[108px] bg-[#060D17] rounded-lg shrink-0 flex items-center justify-center overflow-hidden"
      >
        <Image
          src={casino.logo}
          alt={casino.name}
          width={108}
          height={89}
          className="object-contain h-full"
        />
      </div>

      {/* Content */}
      <div
        data-name="casino-content"
        className="flex flex-col gap-4 flex-1 min-w-0"
      >
        <div data-name="name-safety-rating" className="flex flex-col gap-2.5 items-center lg:items-start text-center lg:text-left">
          {/* Name + Safety */}
          <div data-name="name-safety">
            <p className="text-lg font-semibold text-[#060D17]">
              {casino.name}
            </p>
            <div
              data-name="safety-index"
              className="flex items-center gap-2 mt-0.5 shrink-0"
            >
              <span className="text-xs font-bold text-neutral-600 uppercase whitespace-nowrap">
                Safety Index
              </span>
              <span
                className="px-2 py-0.5 rounded-full text-xs font-semibold text-[#060D17]"
                style={{ backgroundColor: casino.safetyColor }}
              >
                {casino.safetyLevel}
              </span>
            </div>
          </div>

          {/* Star Rating */}
          <StarRating rating={casino.userRating} casinoName={casino.name} />
        </div>
      </div>
    </Link>
  );
}

export function UserReviewsCard() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const speedRef = useRef(0);

  const loopedCasinos = [...casinos, ...casinos, ...casinos];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Start at the middle set
    const oneSetWidth = el.scrollWidth / 3;
    el.scrollLeft = oneSetWidth;

    const tick = () => {
      if (speedRef.current !== 0 && el) {
        el.scrollLeft += speedRef.current;

        const oneSet = el.scrollWidth / 3;
        if (el.scrollLeft >= oneSet * 2) {
          el.scrollLeft -= oneSet;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += oneSet;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const ratio = x / rect.width;

      if (ratio < 0.15) {
        speedRef.current = -(0.15 - ratio) * 50;
      } else if (ratio > 0.85) {
        speedRef.current = (ratio - 0.85) * 50;
      } else {
        speedRef.current = 0;
      }
    };

    const onMouseEnter = () => {
      rafRef.current = requestAnimationFrame(tick);
    };

    const onMouseLeave = () => {
      speedRef.current = 0;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseenter", onMouseEnter);
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseenter", onMouseEnter);
      el.removeEventListener("mouseleave", onMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handlePrev = () => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector("[data-name='carousel-cell']");
    if (!card) return;
    el.scrollBy({ left: -card.clientWidth - 12, behavior: "smooth" });
  };

  const handleNext = () => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector("[data-name='carousel-cell']");
    if (!card) return;
    el.scrollBy({ left: card.clientWidth + 12, behavior: "smooth" });
  };

  return (
    <section data-section="user-reviews-card" className="overflow-hidden py-12">
      {/* Header */}
      <div
        data-name="user-reviews-header"
        className="flex w-full items-center justify-between site-container mb-6"
      >
        <h2 className="font-heading text-2xl sm:text-[30px] lg:text-[35px] font-black text-[#060D17] tracking-[-0.35px] leading-[1.2]">
          Top User-Rated Crypto Casinos
        </h2>

        {/* Arrows */}
        <div data-name="carousel-arrows" className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handlePrev}
            className="flex items-center justify-center size-10 rounded-full border border-neutral-200 bg-white hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <ChevronLeft className="size-5 text-neutral-700" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="flex items-center justify-center size-10 rounded-full border border-neutral-200 bg-white hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <ChevronRight className="size-5 text-neutral-700" />
          </button>
        </div>
      </div>

      {/* Scrollable carousel */}
      <div
        ref={scrollRef}
        data-name="user-reviews-carousel"
        className="flex gap-3 overflow-x-auto items-stretch px-5 sm:px-10 lg:px-26"
        style={{ scrollbarWidth: "none" }}
      >
        {loopedCasinos.map((casino, i) => (
          <div
            key={i}
            data-name="carousel-cell"
            className="w-[75vw] sm:w-[280px] lg:w-[300px] shrink-0"
          >
            <UserRatedCasinoCard casino={casino} />
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { ReviewCard } from "@/components/review-card";
import type { ReviewData } from "@/components/review-card";

const reviews: ReviewData[] = [
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
];

export function ExpertReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const speedRef = useRef(0);

  // Render cards 3x for seamless infinite loop
  const loopedReviews = [...reviews, ...reviews, ...reviews];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Start at the middle set
    const oneSetWidth = el.scrollWidth / 3;
    el.scrollLeft = oneSetWidth;

    const tick = () => {
      if (speedRef.current !== 0 && el) {
        el.scrollLeft += speedRef.current;

        // Infinite loop: wrap around seamlessly
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

  return (
    <section data-section="expert-reviews" className="overflow-hidden py-8">
      <div data-name="expert-container" className="site-container">
        {/* Header */}
        <div
          data-name="expert-header"
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6"
        >
          <div data-name="expert-header-text" className="flex flex-col gap-3">
            <p className="text-base font-bold text-[#060d17]">
              Recent Guides and Expert Reviews
            </p>
            <h2 className="text-2xl sm:text-[30px] lg:text-[35px] font-black text-[#060d17] leading-[1.2] tracking-tight">
              Expert-Reviewed Crypto Casinos
            </h2>
          </div>
          <Link
            href="/expert-reviews"
            className="group flex items-center justify-center gap-1.5 rounded-lg bg-neutral-900 px-3 py-1.5 text-sm font-medium text-[#f8f8f8] hover:bg-neutral-800 transition-colors shrink-0 w-full sm:w-fit"
          >
            Read all Expert reviews
            <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      {/* Infinite hover-scroll carousel – full width */}
      <div
        ref={scrollRef}
        data-name="expert-grid"
        className="flex gap-4 overflow-x-auto items-stretch px-5 sm:px-10 lg:px-26"
        style={{ scrollbarWidth: "none" }}
      >
        {loopedReviews.map((review, i) => (
          <div key={i} data-name="carousel-cell" className="w-[85vw] sm:w-[340px] lg:w-[400px] shrink-0">
            <ReviewCard review={review} hideBonus />
          </div>
        ))}
      </div>
    </section>
  );
}

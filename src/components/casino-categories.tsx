"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type Flickity from "flickity";

const tabs = ["Expert Reviews", "Newest Casinos", "Provably Fair"];

const badgeByTab: Record<string, string> = {
  "Expert Reviews": "/badges/coinbet expert.svg",
  "Newest Casinos": "/badges/news casino.svg",
  "Provably Fair": "/badges/provably fair.svg",
};

export interface Casino {
  logo: string;
  name: string;
  safetyLevel: string;
  safetyColor: string;
  rating: number;
  ratingLabel: string;
}

const casinosByTab: Record<string, Casino[]> = {
  "Expert Reviews": [
    {
      logo: "/casino-index/logo-stake.svg",
      name: "Stake",
      safetyLevel: "Normal",
      safetyColor: "#EAEE45",
      rating: 4.0,
      ratingLabel: "Excellent",
    },
    {
      logo: "/casino-index/logo-gamedom.svg",
      name: "BC.Game",
      safetyLevel: "Normal",
      safetyColor: "#EAEE45",
      rating: 4.0,
      ratingLabel: "Excellent",
    },
    {
      logo: "/casino-index/logo-roobet.svg",
      name: "Roobet",
      safetyLevel: "Normal",
      safetyColor: "#EAEE45",
      rating: 4.6,
      ratingLabel: "Excellent",
    },
    {
      logo: "/casino-index/logo-shuffle.svg",
      name: "Shuffle",
      safetyLevel: "High",
      safetyColor: "#00DE00",
      rating: 4.0,
      ratingLabel: "Excellent",
    },
    {
      logo: "/casino-index/logo-bitsler.svg",
      name: "Bitsler",
      safetyLevel: "High",
      safetyColor: "#00DE00",
      rating: 4.0,
      ratingLabel: "Excellent",
    },
    {
      logo: "/casino-index/logo-thrill.svg",
      name: "Thrill",
      safetyLevel: "Normal",
      safetyColor: "#EAEE45",
      rating: 4.6,
      ratingLabel: "Excellent",
    },
  ],
  "Newest Casinos": [
    {
      logo: "/casino-index/logo-stake.svg",
      name: "Stake",
      safetyLevel: "Normal",
      safetyColor: "#EAEE45",
      rating: 4.0,
      ratingLabel: "Excellent",
    },
    {
      logo: "/casino-index/logo-gamedom.svg",
      name: "BC.Game",
      safetyLevel: "Normal",
      safetyColor: "#EAEE45",
      rating: 4.0,
      ratingLabel: "Excellent",
    },
    {
      logo: "/casino-index/logo-roobet.svg",
      name: "Roobet",
      safetyLevel: "Normal",
      safetyColor: "#EAEE45",
      rating: 4.6,
      ratingLabel: "Excellent",
    },
    {
      logo: "/casino-index/logo-shuffle.svg",
      name: "Shuffle",
      safetyLevel: "High",
      safetyColor: "#00DE00",
      rating: 4.0,
      ratingLabel: "Excellent",
    },
    {
      logo: "/casino-index/logo-bitsler.svg",
      name: "Bitsler",
      safetyLevel: "High",
      safetyColor: "#00DE00",
      rating: 4.0,
      ratingLabel: "Excellent",
    },
    {
      logo: "/casino-index/logo-thrill.svg",
      name: "Thrill",
      safetyLevel: "Normal",
      safetyColor: "#EAEE45",
      rating: 4.6,
      ratingLabel: "Excellent",
    },
  ],
  "Provably Fair": [
    {
      logo: "/casino-index/logo-stake.svg",
      name: "Stake",
      safetyLevel: "Normal",
      safetyColor: "#EAEE45",
      rating: 4.0,
      ratingLabel: "Excellent",
    },
    {
      logo: "/casino-index/logo-gamedom.svg",
      name: "BC.Game",
      safetyLevel: "Normal",
      safetyColor: "#EAEE45",
      rating: 4.0,
      ratingLabel: "Excellent",
    },
    {
      logo: "/casino-index/logo-roobet.svg",
      name: "Roobet",
      safetyLevel: "Normal",
      safetyColor: "#EAEE45",
      rating: 4.6,
      ratingLabel: "Excellent",
    },
    {
      logo: "/casino-index/logo-shuffle.svg",
      name: "Shuffle",
      safetyLevel: "High",
      safetyColor: "#00DE00",
      rating: 4.0,
      ratingLabel: "Excellent",
    },
    {
      logo: "/casino-index/logo-bitsler.svg",
      name: "Bitsler",
      safetyLevel: "High",
      safetyColor: "#00DE00",
      rating: 4.0,
      ratingLabel: "Excellent",
    },
    {
      logo: "/casino-index/logo-thrill.svg",
      name: "Thrill",
      safetyLevel: "Normal",
      safetyColor: "#EAEE45",
      rating: 4.6,
      ratingLabel: "Excellent",
    },
  ],
};

const SHIELD_BG =
  "M15.9988 0H4C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0Z";
const SHIELD_SHAPE =
  "M4.272 6.52C4.328 8.534 4.892 10.531 5.897 12.273C6.903 14.015 8.351 15.501 10.067 16.557C12.308 15.171 14.077 13.062 15.038 10.609C15.553 9.297 15.828 7.922 15.865 6.518C12.273 4.574 7.867 4.573 4.272 6.52Z";

function ExpertShieldIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="shrink-0"
    >
      <path d={SHIELD_BG} fill={filled ? "#003EB6" : "#DDDDDD"} />
      <path d={SHIELD_SHAPE} fill="white" />
    </svg>
  );
}

function ExpertRatingBadge({ rating }: { rating: number }) {
  const filled = Math.min(5, Math.max(1, Math.round(rating)));

  return (
    <div data-name="expert-rating-badge" className="flex items-start gap-1.5">
      <div data-name="shields-and-score" className="flex flex-col gap-1.5">
        <div data-name="expert-shields" className="flex items-center gap-0.5">
          {Array.from({ length: 5 }, (_, i) => (
            <ExpertShieldIcon key={i} filled={i < filled} />
          ))}
        </div>
        <div
          data-name="score-label"
          className="flex items-center gap-1 text-sm"
        >
          <span className="font-medium text-[#060D17]">{rating}</span>
          <span className="text-neutral-600">Expert Rating</span>
        </div>
      </div>
    </div>
  );
}

function MobileCarousel({
  casinos,
  badge,
}: {
  casinos: Casino[];
  badge: string;
}) {
  const flickityRef = useRef<HTMLDivElement>(null);
  const flktyInstance = useRef<Flickity | null>(null);

  useEffect(() => {
    if (!flickityRef.current) return;

    let destroyed = false;

    import("flickity").then((mod) => {
      if (destroyed || !flickityRef.current) return;
      const Flkty = mod.default;
      flktyInstance.current = new Flkty(flickityRef.current, {
        cellAlign: "center",
        contain: false,
        prevNextButtons: false,
        pageDots: false,
        freeScroll: true,
        wrapAround: true,
      });
    });

    return () => {
      destroyed = true;
      if (flktyInstance.current) {
        flktyInstance.current.destroy();
        flktyInstance.current = null;
      }
    };
  }, []);

  return (
    <div ref={flickityRef} data-name="cards-grid" className="w-full">
      {casinos.map((casino, i) => (
        <div
          key={i}
          data-name="carousel-cell"
          className="w-[calc(100vw-2.5rem)] mr-3"
        >
          <CasinoCategoryCard casino={casino} badge={badge} />
        </div>
      ))}
    </div>
  );
}

export function CasinoCategoryCard({
  casino,
  badge,
}: {
  casino: Casino;
  badge?: string;
}) {
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
        <div data-name="name-safety-rating" className="flex flex-col gap-2.5">
          {/* Name + Safety */}
          <div data-name="name-safety">
            <p className="text-lg font-semibold text-[#060D17]">
              {casino.name}
            </p>
            <div
              data-name="safety-index"
              className="flex items-center gap-2 mt-0.5"
            >
              <span className="text-xs font-bold text-neutral-600 uppercase">
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

          {/* Rating */}
          <ExpertRatingBadge rating={casino.rating} />
        </div>
      </div>

      {/* Badge overlay */}
      {badge && (
        <div
          data-name="card-badge-overlay"
          className="absolute -top-[5px] -right-[5px] w-[100px] h-[100px]"
        >
          <Image src={badge} alt="" width={100} height={100} />
        </div>
      )}
    </Link>
  );
}

export function CasinoCategories() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const activeTab_name = tabs[activeTab];
  const activeCasinos = casinosByTab[activeTab_name] ?? [];
  const activeBadge = badgeByTab[activeTab_name] ?? "";

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section data-section="casino-categories" className="site-container py-2">
      <div
        data-name="categories-inner"
        className="flex flex-col items-center gap-11"
      >
        {/* Heading + Tabs */}
        <div
          data-name="heading-tabs"
          className="flex flex-col items-center gap-6 w-full max-w-[415px]"
        >
          <h2 className="font-heading text-2xl sm:text-[30px] lg:text-[35px] font-black text-[#060D17] text-center tracking-[-0.35px] leading-[1.2]">
            Casino Categories
          </h2>

          <div
            data-name="tab-bar"
            className="flex items-center bg-[#EBEBEB] p-1 rounded-xl w-full"
          >
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`flex-1 px-2 sm:px-2.5 py-1.5 text-sm sm:text-base font-semibold rounded-[10px] transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === i
                    ? "bg-white shadow-sm text-[#060D17]"
                    : "text-[#060D17]/70"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        {isMobile ? (
          <div data-name="carousel-breakout" className="-mx-5 w-screen">
            <MobileCarousel
              key={activeTab}
              casinos={activeCasinos}
              badge={activeBadge}
            />
          </div>
        ) : (
          <div
            data-name="cards-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
          >
            {activeCasinos.map((casino, i) => (
              <CasinoCategoryCard key={i} casino={casino} badge={activeBadge} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SHIELD_BG =
  "M15.9988 0H4C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0Z";
const SHIELD_SHAPE =
  "M4.272 6.52C4.328 8.534 4.892 10.531 5.897 12.273C6.903 14.015 8.351 15.501 10.067 16.557C12.308 15.171 14.077 13.062 15.038 10.609C15.553 9.297 15.828 7.922 15.865 6.518C12.273 4.574 7.867 4.573 4.272 6.52Z";

const tabs = ["Expert Reviews", "Newest Casinos", "Provably Fair"];

interface Casino {
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
      logo: "/casino-index/base-5.svg",
      name: "Stake",
      safetyLevel: "Normal",
      safetyColor: "#EAEE45",
      rating: 4.0,
      ratingLabel: "Excellent",
    },
    {
      logo: "/casino-index/base-2.svg",
      name: "Gamdom",
      safetyLevel: "Normal",
      safetyColor: "#EAEE45",
      rating: 4.0,
      ratingLabel: "Excellent",
    },
    {
      logo: "/casino-index/base-8.svg",
      name: "Roobet",
      safetyLevel: "Normal",
      safetyColor: "#EAEE45",
      rating: 4.6,
      ratingLabel: "Excellent",
    },
    {
      logo: "/casino-index/base-3.svg",
      name: "Shuffle",
      safetyLevel: "High",
      safetyColor: "#00DE00",
      rating: 4.0,
      ratingLabel: "Excellent",
    },
    {
      logo: "/casino-index/base-6.svg",
      name: "Bitsler",
      safetyLevel: "High",
      safetyColor: "#00DE00",
      rating: 4.0,
      ratingLabel: "Excellent",
    },
    {
      logo: "/casino-index/base-7.svg",
      name: "Thrill",
      safetyLevel: "Normal",
      safetyColor: "#EAEE45",
      rating: 4.6,
      ratingLabel: "Excellent",
    },
  ],
  "Newest Casinos": [],
  "Provably Fair": [],
};

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
      {/* Large shield score box */}

      {/* Shields + score */}
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

function CasinoCategoryCard({ casino }: { casino: Casino }) {
  return (
    <div
      data-name="casino-card"
      className="flex gap-4 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm"
    >
      {/* Logo */}
      <div
        data-name="casino-logo"
        className="w-[108px] h-[89px] bg-[#060D17] rounded-lg shrink-0 flex items-center justify-center overflow-hidden"
      >
        <Image
          src={casino.logo}
          alt={casino.name}
          width={108}
          height={89}
          className="object-contain w-full h-full"
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

        {/* CTA */}
        <Link
          href="#"
          className="flex items-center justify-center h-[30px] bg-[#003EB6] text-white text-[12px] font-semibold uppercase rounded hover:bg-[#0035a0] transition-colors"
        >
          Coinbet Expert Reviews
        </Link>
      </div>
    </div>
  );
}

export function CasinoCategories() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCasinos = casinosByTab[tabs[activeTab]] ?? [];

  return (
    <section data-section="casino-categories" className="site-container py-12">
      <div
        data-name="categories-inner"
        className="flex flex-col items-center gap-11"
      >
        {/* Heading + Tabs */}
        <div
          data-name="heading-tabs"
          className="flex flex-col items-center gap-6 w-full max-w-[415px]"
        >
          <h2 className="font-heading text-[35px] font-black text-[#060D17] text-center tracking-[-0.35px] leading-[1.2]">
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
                className={`flex-1 px-2.5 py-1.5 text-base font-semibold rounded-[10px] transition-all whitespace-nowrap ${
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

        {/* Cards grid */}
        <div
          data-name="cards-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full"
        >
          {activeCasinos.map((casino, i) => (
            <CasinoCategoryCard key={i} casino={casino} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

function RatingBadge({ rating }: { rating: number }) {
  const filled = Math.min(5, Math.max(1, Math.round(rating)));
  const activeColor = RATING_COLORS[filled] ?? RATING_COLORS[3];

  return (
    <div data-name="rating-badge" className="flex items-start gap-1.5">
      {/* Large star score box */}
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        className="shrink-0"
      >
        <path
          d="M33.8953 9.24919C33.4854 6.95628 32.3445 4.90706 30.7051 3.38953C29.243 2.02707 27.3931 1.07446 25.3439 0.708923C22.7298 0.243694 20.0492 0 17.3021 0C14.555 0 11.8744 0.243694 9.26027 0.708923C7.0892 1.09661 5.13967 2.13784 3.64429 3.63321C2.14891 5.12859 1.09661 7.07813 0.70892 9.26027C0.243691 11.8744 0 14.555 0 17.3021C0 20.0492 0.243691 22.7298 0.70892 25.3439C1.09661 27.515 2.13784 29.4534 3.62214 30.9488C5.11752 32.4552 7.06705 33.5076 9.24919 33.8953C11.8633 34.3605 14.5439 34.6042 17.291 34.6042C20.0381 34.6042 22.7187 34.3605 25.3328 33.8953C27.7365 33.4633 29.8633 32.2226 31.414 30.4614C32.6657 29.0436 33.5408 27.2824 33.8842 25.3439C34.3494 22.7298 34.5931 20.0492 34.5931 17.3021C34.5931 14.555 34.3494 11.8744 33.8842 9.26027L33.8953 9.24919Z"
          fill="#E6B830"
        />
        <path
          d="M8.23047 9.00561C8.95047 10.1687 9.94739 11.1545 11.1215 11.8524C12.3511 12.5834 13.7578 12.9933 15.1978 13.0265C15.8846 11.7638 16.228 10.3459 16.2169 8.90592C16.2058 7.53239 15.8514 6.18101 15.1978 4.97363C12.3621 5.05117 9.71477 6.57978 8.23047 8.99454V9.00561Z"
          fill="white"
        />
        <path
          d="M24.5791 22.9625C23.2499 22.0764 21.7102 21.589 20.1262 21.5447C19.373 22.9404 19.0185 24.5244 19.1293 26.1194C19.2068 27.3268 19.5502 28.5342 20.1262 29.5976C22.9619 29.52 25.6092 27.9914 27.0935 25.5767C26.4511 24.5354 25.5871 23.6382 24.5791 22.9736V22.9625Z"
          fill="white"
        />
        <path
          d="M9.28311 20.4037C10.712 19.7059 11.9083 18.6204 12.7502 17.269C11.9194 15.9065 10.7342 14.821 9.30526 14.101C8.21973 13.5582 7.01235 13.2481 5.79389 13.2148C4.43143 15.7071 4.42036 18.7644 5.76066 21.2677C6.97912 21.2345 8.1865 20.9465 9.28311 20.4148V20.4037Z"
          fill="white"
        />
        <path
          d="M20.1148 4.97363C19.4502 6.20317 19.0957 7.59885 19.0957 8.99454C19.0957 10.3902 19.4502 11.7859 20.1148 13.0154C21.9425 12.9601 23.7369 12.3065 25.1658 11.1656C25.9301 10.5564 26.5726 9.8253 27.0821 8.99454C25.5978 6.57978 22.9505 5.05117 20.1148 4.97363Z"
          fill="white"
        />
        <path
          d="M10.4458 23.1731C9.55969 23.8266 8.80647 24.6241 8.23047 25.5657C9.71477 27.9804 12.3621 29.5091 15.1978 29.5866C15.6631 28.7226 15.9732 27.8032 16.1172 26.8395C16.3941 25.0229 16.0729 23.1509 15.1978 21.5337C13.4809 21.578 11.8305 22.1429 10.4348 23.162L10.4458 23.1731Z"
          fill="white"
        />
      </svg>

      {/* Stars + score */}
      <div data-name="stars-and-score" className="flex flex-col gap-1.5">
        <div data-name="star-icons" className="flex items-center gap-0.5">
          {Array.from({ length: 5 }, (_, i) => (
            <StarIcon key={i} color={i < filled ? activeColor : "#DDDDDD"} />
          ))}
        </div>
        <div
          data-name="score-label"
          className="flex items-center gap-1 text-sm"
        >
          <span className="font-medium text-[#060D17]">{rating}</span>
          <span className="text-neutral-600">Excellent</span>
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
            <p className="text-base font-semibold text-[#060D17]">
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
          <RatingBadge rating={casino.rating} />
        </div>

        {/* CTA */}
        <Link
          href="#"
          className="flex items-center justify-center h-[30px] bg-[#003EB6] text-white text-sm font-semibold uppercase rounded hover:bg-[#0035a0] transition-colors"
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

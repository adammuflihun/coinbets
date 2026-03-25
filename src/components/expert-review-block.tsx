"use client";

import { useState } from "react";
import Image from "next/image";
import {
  RefreshCw,
  ChevronRight,
  ShieldCheck,
  Lock,
  Gift,
  UserPlus,
  BadgeCheck,
} from "lucide-react";
import type { CasinoReview } from "@/data/casino-reviews";

const RATING_COLORS: Record<number, string> = {
  5: "#23BA21",
  4: "#9FF11A",
  3: "#D8DC00",
  2: "#FFB257",
  1: "#FF6847",
};

const SAFETY_COLORS: Record<string, string> = {
  High: "#00de00",
  Normal: "#eaee45",
};

function ShieldIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M19.9988 0H0V19.9988H19.9988V0Z"
        fill={filled ? "#003EB6" : "#DDDDDD"}
      />
      <g clipPath="url(#shield-clip)">
        <path
          d="M4.27582 6.51908C4.3323 8.53258 4.89562 10.53 5.90134 12.2719C6.90706 14.0139 8.35519 15.5004 10.0707 16.5561C12.3119 15.1699 14.0807 13.0612 15.042 10.6075C15.5569 9.29641 15.8319 7.92101 15.8692 6.51696C12.2766 4.57266 7.87091 4.57249 4.27582 6.51908Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="shield-clip">
          <rect
            width="14"
            height="14"
            fill="white"
            transform="translate(3 3)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function ExpertScoreLabel({ score }: { score: number }) {
  const label =
    score >= 5
      ? "Excellent"
      : score >= 4
        ? "Good"
        : score >= 3
          ? "OK"
          : score >= 2
            ? "Bad"
            : "Terrible";

  return (
    <span className="text-xs font-bold uppercase text-[#404040]">
      Stars - {label}
    </span>
  );
}

function ExpertRatingCard({ casino }: { casino: CasinoReview }) {
  const filled = Math.min(5, Math.max(1, Math.round(casino.expertScore)));
  const bucket =
    casino.expertScore >= 4
      ? 5
      : casino.expertScore >= 3
        ? 4
        : casino.expertScore >= 2
          ? 3
          : casino.expertScore >= 1
            ? 2
            : 1;
  const shieldColor = RATING_COLORS[bucket];
  return (
    <div
      data-name="expert-rating-card"
      className="bg-white border border-[#003EB6] rounded-md overflow-hidden w-[276px]"
    >
      <div
        data-name="expert-rating-content"
        className="flex items-center gap-2 px-3 py-3"
      >
        {/* Shield icon */}
        <svg
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          className="size-[44px] shrink-0"
        >
          <path
            d="M30.0039 8.18734C29.6411 6.15767 28.6312 4.34371 27.18 3.0004C25.8857 1.79436 24.2483 0.951107 22.4343 0.627535C20.1203 0.215717 17.7474 0 15.3157 0C12.884 0 10.5112 0.215717 8.19715 0.627535C6.27533 0.970717 4.54961 1.8924 3.22591 3.21611C1.90221 4.53981 0.970714 6.26553 0.627532 8.19715C0.215714 10.5112 0 12.884 0 15.3157C0 17.7474 0.215714 20.1203 0.627532 22.4343C0.970714 24.3561 1.8924 26.072 3.2063 27.3957C4.53 28.7292 6.25572 29.6607 8.18734 30.0039C10.5014 30.4157 12.8742 30.6314 15.3059 30.6314C17.7376 30.6314 20.1105 30.4157 22.4245 30.0039C24.5522 29.6215 26.4348 28.5233 27.8076 26.9643C28.9155 25.7092 29.6902 24.1502 29.9941 22.4343C30.4059 20.1203 30.6216 17.7474 30.6216 15.3157C30.6216 12.884 30.4059 10.5112 29.9941 8.19715L30.0039 8.18734Z"
            fill="#E6B830"
          />
          <path
            d="M9.2462 20.5125C8.46178 21.091 7.79503 21.7969 7.28516 22.6304C8.59905 24.7679 10.9425 26.121 13.4526 26.1897C13.8644 25.4249 14.139 24.611 14.2665 23.758C14.5116 22.1499 14.2272 20.4928 13.4526 19.0613C11.9328 19.1005 10.4718 19.6006 9.23639 20.5027L9.2462 20.5125Z"
            fill="white"
          />
          <path
            d="M17.8064 4.40259C17.2181 5.49097 16.9043 6.72642 16.9043 7.96188C16.9043 9.19733 17.2181 10.4328 17.8064 11.5212C19.4242 11.4721 21.0127 10.8936 22.2776 9.88369C22.9541 9.34441 23.5228 8.69727 23.9739 7.96188C22.66 5.82434 20.3165 4.47122 17.8064 4.40259Z"
            fill="white"
          />
          <path
            d="M8.2164 18.0611C9.48127 17.4434 10.5402 16.4825 11.2854 15.2862C10.55 14.0802 9.50089 13.1193 8.23601 12.4819C7.2751 12.0015 6.20634 11.7269 5.12776 11.6975C3.92172 13.9037 3.91192 16.6099 5.09835 18.8259C6.17692 18.7965 7.24569 18.5415 8.2164 18.0709V18.0611Z"
            fill="white"
          />
          <path
            d="M21.7578 20.3261C20.5812 19.5417 19.2182 19.1103 17.8161 19.071C17.1493 20.3065 16.8356 21.7086 16.9336 23.1206C17.0023 24.1894 17.3062 25.2581 17.8161 26.1994C20.3262 26.1308 22.6697 24.7777 23.9836 22.6401C23.4149 21.7184 22.6501 20.9242 21.7578 20.3359V20.3261Z"
            fill="white"
          />
          <path
            d="M7.28516 7.97168C7.92249 9.00122 8.80496 9.87389 9.84431 10.4916C10.9327 11.1388 12.178 11.5016 13.4526 11.531C14.0606 10.4132 14.3645 9.15811 14.3547 7.88343C14.3449 6.66759 14.0311 5.47135 13.4526 4.40259C10.9425 4.47122 8.59905 5.82434 7.28516 7.96188V7.97168Z"
            fill="white"
          />
        </svg>
        {/* Score + Stars */}
        <div data-name="expert-score-wrapper" className="flex flex-col gap-1">
          <div data-name="expert-score-row" className="flex items-center gap-2">
            <span className="text-[42px] font-bold leading-none text-[#1c1c1c]">
              {casino.expertScore.toFixed(1)}
            </span>
            <div
              data-name="expert-shields-label"
              className="flex flex-col gap-1"
            >
              <div
                data-name="expert-shields"
                className="flex items-center gap-0.5"
              >
                {Array.from({ length: 5 }, (_, i) => (
                  <ShieldIcon key={i} filled={i < filled} />
                ))}
              </div>
              <ExpertScoreLabel score={casino.expertScore} />
            </div>
          </div>
        </div>
      </div>
      {/* Blue bottom bar */}
      <div data-name="expert-rating-bar" className="bg-[#003EB6] py-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3px] text-white text-center">
          Coinbets Expert Review
        </p>
      </div>
    </div>
  );
}

function ExpertHero({ casino }: { casino: CasinoReview }) {
  return (
    <div
      data-name="expert-hero"
      className="relative overflow-hidden rounded-xl bg-[#020202] p-6 sm:p-8 lg:p-10"
    >
      {/* Background */}
      <div
        data-name="expert-hero-bg"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/expert-hero-bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        data-name="expert-hero-layout"
        className="relative grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-10"
      >
        {/* Left — Screenshot + Data Cards */}
        <div data-name="expert-hero-left" className="flex flex-col gap-4">
          {/* Screenshot */}
          <div
            data-name="expert-screenshot"
            className="relative h-[220px] sm:h-[260px] w-full rounded-xl overflow-hidden"
          >
            <Image
              src="https://coinbets.com/wp-content/smush-webp/2025/11/rocketplay.jpg.webp"
              alt={`${casino.name} screenshot`}
              fill
              className="object-cover"
            />
          </div>

          {/* Data Cards */}
          <div data-name="data-cards" className="flex gap-3">
            {/* We Bet Real Money */}
            <div
              data-name="data-card-money"
              className="flex items-start gap-2 rounded-lg border-2 border-[#eecd37] bg-[rgba(223,159,30,0.6)] backdrop-blur-sm p-3 flex-1"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                className="size-[26px] shrink-0"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.29962 3.3402C3.72785 3.84712 3.25391 4.54606 3.25391 5.41585V7.58252C3.25391 8.45232 3.72785 9.15125 4.29962 9.65817C4.87264 10.1662 5.64001 10.5743 6.49526 10.8949C8.21376 11.5394 10.5152 11.9159 13.0039 11.9159C15.4926 11.9159 17.7941 11.5394 19.5126 10.8949C20.3678 10.5743 21.1352 10.1662 21.7082 9.65817C22.2799 9.15125 22.7539 8.45232 22.7539 7.58252V5.41585C22.7539 4.54606 22.2799 3.84712 21.7082 3.3402C21.1352 2.83215 20.3678 2.42412 19.5126 2.1034C17.7941 1.45897 15.4926 1.08252 13.0039 1.08252C10.5152 1.08252 8.21376 1.45897 6.49526 2.1034C5.64001 2.42412 4.87264 2.83215 4.29962 3.3402Z"
                  fill="#EECD37"
                />
                <path
                  d="M22.4861 11.1047C22.3947 11.1047 22.3102 11.152 22.2574 11.2267C21.6179 12.1329 20.519 12.6856 19.5126 13.063C17.7941 13.7074 15.4926 14.0839 13.0039 14.0839C10.5152 14.0839 8.21376 13.7074 6.49526 13.063C5.48886 12.6856 4.38987 12.1329 3.75041 11.2267C3.69767 11.152 3.61318 11.1047 3.52171 11.1047C3.3738 11.1047 3.25391 11.2247 3.25391 11.3725V14.0839C3.25391 14.9537 3.72785 15.6527 4.29962 16.1596C4.87264 16.6677 5.64001 17.0756 6.49526 17.3963C8.21376 18.0408 10.5152 18.4172 13.0039 18.4172C15.4926 18.4172 17.7941 18.0408 19.5126 17.3963C20.3678 17.0756 21.1352 16.6677 21.7082 16.1596C22.2799 15.6527 22.7539 14.9537 22.7539 14.0839V11.3725C22.7539 11.2247 22.634 11.1047 22.4861 11.1047Z"
                  fill="#DF9F1E"
                />
                <path
                  d="M22.4861 17.6042C22.3947 17.6042 22.3102 17.6515 22.2574 17.7262C21.6179 18.6324 20.519 19.1852 19.5126 19.5625C17.7941 20.207 15.4926 20.5834 13.0039 20.5834C10.5152 20.5834 8.21376 20.207 6.49526 19.5625C5.48886 19.1852 4.38987 18.6324 3.75041 17.7262C3.69767 17.6515 3.61318 17.6042 3.52171 17.6042C3.3738 17.6042 3.25391 17.7242 3.25391 17.872V20.5834C3.25391 21.4532 3.72785 22.1522 4.29962 22.6591C4.87264 23.1672 5.64001 23.5751 6.49526 23.8958C8.21376 24.5403 10.5152 24.9167 13.0039 24.9167C15.4926 24.9167 17.7941 24.5403 19.5126 23.8958C20.3678 23.5751 21.1352 23.1672 21.7082 22.6591C22.2799 22.1522 22.7539 21.4532 22.7539 20.5834V17.872C22.7539 17.7242 22.634 17.6042 22.4861 17.6042Z"
                  fill="#DF9F1E"
                />
              </svg>
              <div
                data-name="data-card-money-text"
                className="flex flex-col gap-1"
              >
                <span className="text-base font-bold text-[#f8f8f8]">
                  $2880
                </span>
                <span className="opacity-60 text-xs font-bold uppercase text-[#f8f8f8]">
                  We Bet Real Money
                </span>
              </div>
            </div>
            {/* Real Testing */}
            <div
              data-name="data-card-testing"
              className="flex items-start gap-2 rounded-lg border-2 border-[#4dd789] bg-[rgba(25,146,78,0.6)] backdrop-blur-sm p-3 flex-1"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                className="size-[26px] shrink-0"
              >
                <path
                  d="M13.0013 2.16724C18.9844 2.16724 23.8346 7.01749 23.8346 13.0006C23.8346 18.9836 18.9844 23.8339 13.0013 23.8339C7.01823 23.8339 2.16797 18.9836 2.16797 13.0006C2.16797 7.01749 7.01823 2.16724 13.0013 2.16724ZM11.918 7.5839C11.3197 7.5839 10.8346 8.06893 10.8346 8.66724V14.0839C10.8346 14.6822 11.3197 15.1672 11.918 15.1672H16.2513C16.8496 15.1672 17.3346 14.6822 17.3346 14.0839C17.3346 13.4856 16.8496 13.0006 16.2513 13.0006H13.0013V8.66724C13.0013 8.06893 12.5163 7.5839 11.918 7.5839Z"
                  fill="#4DD789"
                />
              </svg>
              <div
                data-name="data-card-testing-text"
                className="flex flex-col gap-1"
              >
                <span className="text-base font-bold text-[#f8f8f8]">
                  19 Hours
                </span>
                <span className="opacity-60 text-xs font-bold uppercase text-[#f8f8f8]">
                  Real Testing
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Title + Rating + Casino Card */}
        <div
          data-name="expert-hero-right"
          className="flex flex-col gap-5 justify-center"
        >
          {/* Expert Review label */}
          <div
            data-name="expert-review-label"
            className="flex items-center gap-2.5"
          >
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              className="size-[30px] shrink-0"
            >
              <path
                d="M30.0039 8.18734C29.6411 6.15767 28.6312 4.34371 27.18 3.0004C25.8857 1.79436 24.2483 0.951107 22.4343 0.627535C20.1203 0.215717 17.7474 0 15.3157 0C12.884 0 10.5112 0.215717 8.19715 0.627535C6.27533 0.970717 4.54961 1.8924 3.22591 3.21611C1.90221 4.53981 0.970714 6.26553 0.627532 8.19715C0.215714 10.5112 0 12.884 0 15.3157C0 17.7474 0.215714 20.1203 0.627532 22.4343C0.970714 24.3561 1.8924 26.072 3.2063 27.3957C4.53 28.7292 6.25572 29.6607 8.18734 30.0039C10.5014 30.4157 12.8742 30.6314 15.3059 30.6314C17.7376 30.6314 20.1105 30.4157 22.4245 30.0039C24.5522 29.6215 26.4348 28.5233 27.8076 26.9643C28.9155 25.7092 29.6902 24.1502 29.9941 22.4343C30.4059 20.1203 30.6216 17.7474 30.6216 15.3157C30.6216 12.884 30.4059 10.5112 29.9941 8.19715L30.0039 8.18734Z"
                fill="#003EB6"
              />
              <path
                d="M9.2462 20.5125C8.46178 21.091 7.79503 21.7969 7.28516 22.6304C8.59905 24.7679 10.9425 26.121 13.4526 26.1897C13.8644 25.4249 14.139 24.611 14.2665 23.758C14.5116 22.1499 14.2272 20.4928 13.4526 19.0613C11.9328 19.1005 10.4718 19.6006 9.23639 20.5027L9.2462 20.5125Z"
                fill="white"
              />
              <path
                d="M17.8064 4.40259C17.2181 5.49097 16.9043 6.72642 16.9043 7.96188C16.9043 9.19733 17.2181 10.4328 17.8064 11.5212C19.4242 11.4721 21.0127 10.8936 22.2776 9.88369C22.9541 9.34441 23.5228 8.69727 23.9739 7.96188C22.66 5.82434 20.3165 4.47122 17.8064 4.40259Z"
                fill="white"
              />
              <path
                d="M8.2164 18.0611C9.48127 17.4434 10.5402 16.4825 11.2854 15.2862C10.55 14.0802 9.50089 13.1193 8.23601 12.4819C7.2751 12.0015 6.20634 11.7269 5.12776 11.6975C3.92172 13.9037 3.91192 16.6099 5.09835 18.8259C6.17692 18.7965 7.24569 18.5415 8.2164 18.0709V18.0611Z"
                fill="white"
              />
              <path
                d="M21.7578 20.3261C20.5812 19.5417 19.2182 19.1103 17.8161 19.071C17.1493 20.3065 16.8356 21.7086 16.9336 23.1206C17.0023 24.1894 17.3062 25.2581 17.8161 26.1994C20.3262 26.1308 22.6697 24.7777 23.9836 22.6401C23.4149 21.7184 22.6501 20.9242 21.7578 20.3359V20.3261Z"
                fill="white"
              />
              <path
                d="M7.28516 7.97168C7.92249 9.00122 8.80496 9.87389 9.84431 10.4916C10.9327 11.1388 12.178 11.5016 13.4526 11.531C14.0606 10.4132 14.3645 9.15811 14.3547 7.88343C14.3449 6.66759 14.0311 5.47135 13.4526 4.40259C10.9425 4.47122 8.59905 5.82434 7.28516 7.96188V7.97168Z"
                fill="white"
              />
            </svg>
            <span className="text-base font-bold text-white">
              Expert Review
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[25px] font-black leading-[1.2] tracking-[-0.25px] text-white">
            {casino.name} Expert Casino Review 2026 - Real Crypto, No Sponsors
          </h2>

          {/* Rating Card */}
          <ExpertRatingCard casino={casino} />

          {/* Casino Info Card */}
          <div
            data-name="casino-info-card"
            className="flex items-center gap-4 rounded-lg border border-neutral-200 bg-white p-2.5 shadow-sm w-fit"
          >
            <div
              data-name="casino-info-logo"
              className="flex items-center justify-center rounded-lg bg-[#060d17] px-4 py-3 shrink-0"
            >
              <Image
                src={casino.logo}
                alt={casino.name}
                width={49}
                height={32}
                className="object-contain"
              />
            </div>
            <div
              data-name="casino-info-details"
              className="flex flex-col gap-[3px]"
            >
              <p className="text-base font-semibold text-[#060d17]">
                {casino.name}
              </p>
              <div
                data-name="casino-info-safety"
                className="flex items-center gap-2"
              >
                <span className="text-xs font-bold uppercase text-[#404040]">
                  Safety Index
                </span>
                <span
                  className="rounded-full px-2 py-0.5 text-xs font-semibold text-[#060d17]"
                  style={{
                    backgroundColor:
                      SAFETY_COLORS[casino.safetyIndex] || "#eaee45",
                  }}
                >
                  {casino.safetyIndex}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const REVIEW_SECTIONS = [
  {
    id: "license",
    title: "License and Security",
    description: "Casino credentials and player protection",
    Icon: ShieldCheck,
  },
  {
    id: "bonus",
    title: "Welcome Bonus",
    description: "Bonus size, terms, and fairness",
    Icon: Gift,
  },
  {
    id: "account",
    title: "Opening a New Account",
    description: "Sign-up speed and steps",
    Icon: UserPlus,
  },
];

function SectionNav({
  activeIndex,
  onTabClick,
}: {
  activeIndex: number;
  onTabClick: (index: number) => void;
}) {
  return (
    <div
      data-name="section-nav"
      className="flex border border-[#dedede] bg-[#0d337d] overflow-x-auto"
    >
      {REVIEW_SECTIONS.map((section, i) => {
        const isActive = i === activeIndex;
        const Icon = section.Icon;
        return (
          <button
            key={section.id}
            data-name={`section-tab-${section.id}`}
            onClick={() => onTabClick(i)}
            className={`min-w-[180px] flex-1 flex flex-col gap-1.5 p-6 text-left cursor-pointer transition-colors ${
              isActive
                ? "bg-white border-b-[3px] border-b-[#0d337d]"
                : "bg-[#f8f8f8] border-x border-[#dedede] hover:bg-[#f0f0f0]"
            }`}
          >
            <div
              data-name="section-tab-icon"
              className={`size-[42px] rounded flex items-center justify-center ${
                isActive ? "bg-[#0d337d]" : ""
              }`}
            >
              <Icon
                className={`size-5 ${
                  isActive ? "text-white" : "text-[#060d17]"
                }`}
              />
            </div>
            <p
              className={`text-base font-medium text-[#060d17] leading-none ${
                !isActive ? "opacity-50" : ""
              }`}
            >
              {section.title}
            </p>
            <p
              className={`text-sm text-[#060d17] leading-[1.2] ${
                !isActive ? "opacity-50" : "opacity-70"
              }`}
            >
              {section.description}
            </p>
          </button>
        );
      })}
    </div>
  );
}

function SectionTabs({ casino }: { casino: CasinoReview }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div data-name="expert-sections" className="flex flex-col gap-[25px] pt-5">
      <SectionNav activeIndex={activeTab} onTabClick={setActiveTab} />

      {/* License and Security */}
      {activeTab === 0 && (
        <div data-name="section-license-content" className="flex flex-col gap-[25px]">
          <div data-name="section-license" className="flex flex-col gap-[5px]">
            <h3 className="text-[24px] font-semibold leading-[30px] tracking-[-0.12px] text-[#060d17]">
              License and Security
            </h3>
            <p className="text-[17px] leading-[28.8px] text-black">
              Right, first things first, let&apos;s see who&apos;s running{" "}
              {casino.name}:
            </p>
          </div>

          <div data-name="license-callouts" className="flex flex-col gap-2.5">
            <div
              data-name="callout-license"
              className="flex gap-4 items-start bg-[#f8f8f8] border-l-4 border-[#003EB6] px-[15px] py-[18px]"
            >
              <div data-name="callout-icon" className="size-12 shrink-0 rounded-full bg-[#003EB6] flex items-center justify-center">
              <ShieldCheck className="size-6 text-white" />
            </div>
              <div data-name="callout-content" className="flex flex-col gap-4">
                <p className="text-[17px] leading-[1.7] text-[#0d0f12]">
                  <strong>{casino.name}</strong> is operated by {casino.owner}.
                  {casino.licensingAuthorities.length > 0 && (
                    <>
                      {" "}
                      It has a license from the{" "}
                      {casino.licensingAuthorities
                        .map((l) => l.name)
                        .join(", ")}
                      .
                    </>
                  )}
                </p>
                {casino.licensingAuthorities.length > 0 && (
                  <div data-name="license-badges" className="flex flex-wrap gap-2">
                    {casino.licensingAuthorities.map((lic, i) => (
                      <div
                        key={i}
                        data-name="license-badge"
                        className="flex items-center gap-2 bg-[#f8f8f8] rounded px-1.5 py-1"
                      >
                        <span className={`fi fi-${lic.flag}`} />
                        <span className="text-sm text-[#0d0f12]">
                          {lic.name}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                <button className="flex items-center gap-2 bg-[#e6b830] rounded-md px-3 py-1.5 w-fit">
                  <span className="text-sm font-medium text-[#1c1c1c]">
                    View License
                  </span>
                  <ChevronRight className="size-4 text-[#1c1c1c]" />
                </button>
              </div>
            </div>

            <div
              data-name="callout-security"
              className="flex gap-4 items-center bg-[#f8f8f8] border-l-4 border-[#003EB6] px-[15px] py-[18px]"
            >
              <Lock className="size-12 shrink-0 text-[#003EB6]" />
              <p className="text-[17px] leading-[1.7] text-[#0d0f12]">
                The site security certificate is valid, and the connection shows
                as &quot;secure&quot;.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Welcome Bonus */}
      {activeTab === 1 && (
        <div data-name="section-bonus-content" className="flex flex-col gap-[25px]">
          <div data-name="section-bonus" className="flex flex-col gap-4 pt-3">
            <h3 className="text-[24px] font-semibold leading-[1.3] text-[#060d17]">
              Welcome Bonus
            </h3>
            <p className="text-[17px] leading-[28.8px] text-black">
              {casino.bonus}
            </p>
          </div>

          <div data-name="bonus-list" className="flex flex-col gap-[5px]">
            {[
              {
                label: "First deposit bonus 180%",
                detail: "up to 20,000 USDB (min. deposit US$10)",
              },
              {
                label: "Second deposit bonus 240%",
                detail: "up to 40,000 USDB (min. deposit US$50)",
              },
              {
                label: "Third deposit bonus 300%",
                detail: "up to 60,000 USDB (min. deposit US$100)",
              },
              {
                label: "Fourth deposit bonus 360%",
                detail: "up to 100,000 USDB (min. deposit US$200)",
              },
            ].map((item, i) => (
              <div key={i} data-name="bonus-item" className="pl-2.5">
                <div className="bg-[#f8f8f8] border-l-4 border-[#003EB6] px-[15px] py-2.5">
                  <p className="text-[17px] leading-[1.7] text-[#0d0f12]">
                    <strong>{item.label}</strong> {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            data-name="bonus-explanation"
            className="text-[17px] leading-[28.8px] text-black"
          >
            <p className="mb-4">
              What the heck is &quot;USDB&quot; I hear you ask? Apparently,
              it&apos;s {casino.name}&apos;s &quot;unique crypto coins&quot; and
              you can &quot;use them at your discretion.&quot;
            </p>
            <p>
              Okay, so, from what I can see, USDB is just what {casino.name}{" "}
              calls bonus funds. Value-wise, it&apos;s pegged to the US dollar,
              so 1 USDB = 1 USD.
            </p>
          </div>

          <p className="text-lg font-bold leading-[28.8px] text-black">
            Unlock amount = wager amount x 1% x 0.1
          </p>

          <div
            data-name="bonus-details"
            className="text-[17px] leading-[28.8px] text-black"
          >
            <p className="mb-4">
              As you unlock your bonus funds, they will appear in your USDB
              treasure box, and once there&apos;s at least 5 USDB in there, you
              can claim it and transfer it to your USDT balance.
            </p>
            <p>
              Okay, so that&apos;s a horribly complicated offer. It&apos;s almost
              like they are trying to make it look more generous than it actually
              is. On the plus side, at least all the important terms are readily
              available.
            </p>
          </div>

          {casino.screenshots.length > 0 && (
            <div
              data-name="section-screenshot"
              className="relative w-full h-[391px] bg-[#11181f] overflow-hidden"
            >
              <Image
                src={casino.screenshots[0]}
                alt={`${casino.name} screenshot`}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      )}

      {/* Opening a New Account */}
      {activeTab === 2 && (
        <div data-name="section-account-content" className="flex flex-col gap-[25px]">
          <div data-name="section-account" className="flex flex-col gap-4 pt-3">
            <h3 className="text-[24px] font-semibold leading-[1.3] text-[#060d17]">
              Opening a New Account
            </h3>
            <p className="text-[17px] leading-[28.8px] text-black">
              Here&apos;s what you need to know about signing up at {casino.name}.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function ExpertContent({ casino }: { casino: CasinoReview }) {
  return (
    <div data-name="expert-content" className="flex flex-col gap-5 bg-white rounded-xl shadow-md p-6 sm:p-8">
      {/* Reviewer Info */}
      <div
        data-name="reviewer-info"
        className="flex flex-wrap items-center gap-3"
      >
        <span className="text-xs font-bold uppercase text-[#404040]">
          Reviewed by
        </span>
        <div data-name="reviewer-1" className="flex items-center gap-1.5">
          <div className="size-[30px] rounded-full bg-[#003EB6] flex items-center justify-center text-xs font-bold text-white shrink-0">
            M
          </div>
          <span className="text-sm font-semibold text-[#060d17]">
            Mladen Brndusic
          </span>
          <div
            data-name="verified-badge"
            className="flex items-center gap-1"
          >
            <BadgeCheck className="size-3.5 text-[#003EB6] fill-[#003EB6] stroke-white" />
            <span className="text-sm font-semibold text-[#003EB6]">
              Verified Expert
            </span>
          </div>
        </div>
        <div className="h-[17px] w-px bg-[#d9d9d9]" />
        <div data-name="reviewer-2" className="flex items-center gap-1.5">
          <div className="size-[30px] rounded-full bg-[#003EB6] flex items-center justify-center text-xs font-bold text-white shrink-0">
            A
          </div>
          <span className="text-sm font-semibold text-[#060d17]">Alex</span>
          <div
            data-name="verified-badge"
            className="flex items-center gap-1"
          >
            <BadgeCheck className="size-3.5 text-[#003EB6] fill-[#003EB6] stroke-white" />
            <span className="text-sm font-semibold text-[#003EB6]">
              Verified Expert
            </span>
          </div>
        </div>
        <div
          data-name="review-date"
          className="flex items-center gap-1 opacity-70"
        >
          <RefreshCw className="size-3.5" />
          <span className="text-xs text-[#060d17]">{casino.lastUpdated}</span>
        </div>
      </div>

      {/* Article Title */}
      <h2 className="text-[27px] font-semibold leading-[1.4] text-[#060d17]">
        {casino.name} Crypto Casino Review + Welcome Bonus 2026
      </h2>

      {/* Intro Text */}
      <div
        data-name="expert-intro"
        className="text-[17px] leading-[28.8px] text-black"
      >
        <p>{casino.reviewText}</p>
      </div>

      {/* Sections */}
      <SectionTabs casino={casino} />
    </div>
  );
}

export function ExpertReviewBlock({ casino }: { casino: CasinoReview }) {
  return (
    <div
      id="expert-review"
      data-name="expert-review-section"
      className="flex flex-col gap-6"
    >
      {/* Hero */}
      <ExpertHero casino={casino} />

      {/* Content */}
      <ExpertContent casino={casino} />
    </div>
  );
}

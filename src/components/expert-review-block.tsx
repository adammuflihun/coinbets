"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  RefreshCw,
  ChevronRight,
  ShieldCheck,
  Lock,
  Gift,
  UserPlus,
  BadgeCheck,
  AlertTriangle,
  ChevronDown,
  Gamepad2,
  Zap,
  Radio,
  Layers,
  Grid3X3,
  Trophy,
  Megaphone,
  Crown,
  Headphones,
  Monitor,
  Smartphone,
  Bitcoin,
  Lightbulb,
  Star,
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
          backgroundImage: "url('/hero/bg-expert-hero.svg')",
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
    <div id="toc-license" data-name="expert-sections" className="flex flex-col gap-[25px] pt-5">
      <SectionNav activeIndex={activeTab} onTabClick={setActiveTab} />

      {/* License and Security */}
      {activeTab === 0 && (
        <div
          data-name="section-license-content"
          className="flex flex-col gap-[25px]"
        >
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
              <div
                data-name="callout-icon"
                className="size-12 shrink-0 rounded-full bg-[#003EB6] flex items-center justify-center"
              >
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
                  <div
                    data-name="license-badges"
                    className="flex flex-wrap gap-2"
                  >
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
              <div
                data-name="callout-icon"
                className="size-12 shrink-0 rounded-full bg-[#003EB6] flex items-center justify-center"
              >
                <Lock className="size-6 text-white" />
              </div>
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
        <div
          data-name="section-bonus-content"
          className="flex flex-col gap-[25px]"
        >
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
              Okay, so that&apos;s a horribly complicated offer. It&apos;s
              almost like they are trying to make it look more generous than it
              actually is. On the plus side, at least all the important terms
              are readily available.
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
        <div
          data-name="section-account-content"
          className="flex flex-col gap-[25px]"
        >
          <div data-name="section-account" className="flex flex-col gap-4 pt-3">
            <h3 className="text-[24px] font-semibold leading-[1.3] text-[#060d17]">
              Opening a New Account
            </h3>
            <p className="text-[17px] leading-[28.8px] text-black">
              There are several ways to sign up at {casino.name}:
            </p>
          </div>

          <div data-name="account-options" className="flex flex-col gap-[5px]">
            {[
              {
                text: (
                  <>
                    <strong>Sign up with email</strong> — enter your email
                    address, create a password, choose your preferred currency,
                    and enter a referral code if you have one.
                  </>
                ),
              },
              {
                text: (
                  <>
                    <strong>Sign up with Google</strong> — connect your Google
                    account for quick registration.
                  </>
                ),
              },
              {
                text: (
                  <>
                    Join by connecting a Solana wallet —{" "}
                    <strong>
                      Phantom, Solflare, Backpack, MetaMask, Martian, Xaman
                    </strong>{" "}
                    are all supported.
                  </>
                ),
              },
              {
                text: (
                  <>
                    Connect via <strong>WalletConnect</strong>.
                  </>
                ),
              },
            ].map((item, i) => (
              <div key={i} data-name="account-option-item" className="pl-2.5">
                <div className="bg-[#f8f8f8] border-l-4 border-[#003EB6] px-[15px] py-2.5">
                  <p className="text-[17px] leading-[1.7] text-[#0d0f12]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {casino.screenshots.length > 0 && (
            <div
              data-name="account-screenshot-1"
              className="relative w-full h-[391px] bg-[#11181f] overflow-hidden"
            >
              <Image
                src={casino.screenshots[0]}
                alt={`${casino.name} sign up screenshot`}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div data-name="account-important" className="flex flex-col gap-4">
            <p className="text-lg font-bold leading-[28.8px] text-black">
              Important
            </p>
            <div className="text-[17px] leading-[28.8px] text-black">
              <p className="mb-4">
                {casino.name} operates under a Tobique gaming license. This
                means that, while KYC is not required at sign-up, the casino
                reserves the right to request identity verification at any time
                — especially before processing withdrawals.
              </p>
              <p>
                Additionally, players from certain jurisdictions may be
                restricted or blocked entirely. Make sure to check the
                casino&apos;s terms and conditions to confirm that your country
                is eligible before depositing any funds.
              </p>
            </div>
          </div>

          {casino.screenshots.length > 1 && (
            <div
              data-name="account-screenshot-2"
              className="relative w-full h-[391px] bg-[#11181f] overflow-hidden"
            >
              <Image
                src={casino.screenshots[1]}
                alt={`${casino.name} account screenshot`}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function PaymentsSection({ casino }: { casino: CasinoReview }) {
  const [showAllCrypto, setShowAllCrypto] = useState(false);

  return (
    <div id="toc-payments" data-name="section-payments" className="flex flex-col gap-[25px]">
      <div
        data-name="section-payments-header"
        className="flex flex-col gap-[5px]"
      >
        <h3 className="text-[24px] font-semibold leading-[1.3] text-[#060d17]">
          Payments
        </h3>
        <p className="text-[17px] leading-[28.8px] text-black">
          {casino.name} supports deposits and withdrawals in an extensive range
          of cryptocurrencies, including many Solana-based memecoins. Selected
          NFT collections are also supported.
        </p>
      </div>

      {/* Crypto Table */}
      <div data-name="crypto-table" className="overflow-hidden">
        <div data-name="crypto-table-header" className="bg-[#f6f8fb] px-3 py-2">
          <p className="text-sm font-medium text-[#060d17]">
            Crypto Deposits &amp; Withdrawals:
          </p>
        </div>
        <div
          data-name="crypto-table-body"
          className="grid grid-cols-2 sm:grid-cols-3"
        >
          {casino.cryptoAccepted
            .slice(0, showAllCrypto ? undefined : 9)
            .map((crypto, i) => (
              <div
                key={i}
                data-name="crypto-row-cell"
                className="flex items-center gap-2.5 border border-[#e4e8ec] bg-white px-3 py-2.5"
              >
                <Image
                  src={crypto.icon}
                  alt={crypto.name}
                  width={32}
                  height={32}
                  className="size-8 shrink-0 object-contain"
                />
                <span className="text-sm text-[#53565b]">{crypto.name}</span>
              </div>
            ))}
        </div>
        {casino.cryptoAccepted.length > 9 && (
          <button
            data-name="show-more-payments"
            onClick={() => setShowAllCrypto(!showAllCrypto)}
            className="flex w-full items-center justify-center gap-1 border border-[#e4e8ec] bg-white py-3 cursor-pointer hover:bg-[#f6f8fb] transition-colors"
          >
            <span className="text-sm text-[#53565b]">
              {showAllCrypto ? "Show less" : "Show more payments"}
            </span>
            <ChevronDown
              className={`size-4 text-[#53565b] transition-transform ${showAllCrypto ? "rotate-180" : ""}`}
            />
          </button>
        )}
      </div>

      {casino.screenshots.length > 0 && (
        <div
          data-name="payment-screenshot-1"
          className="relative w-full h-[391px] bg-[#11181f] overflow-hidden"
        >
          <Image
            src={casino.screenshots[0]}
            alt={`${casino.name} deposit screenshot`}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div
        data-name="deposit-text"
        className="text-[17px] leading-[28.8px] text-black"
      >
        <p>
          <strong>To make a crypto deposit,</strong> tap the teal
          &quot;Deposit&quot; tab, then select your coin and a deposit method
          (wallet address, Metamask, Web3 Wallets). If depositing by wallet
          address, choose the appropriate network if applicable, and you&apos;ll
          be provided with a deposit address in QR and text formats. The minimum
          deposit will be stated in yellow text.
        </p>
      </div>

      {casino.screenshots.length > 1 && (
        <div
          data-name="payment-screenshot-2"
          className="relative w-full h-[391px] bg-[#11181f] overflow-hidden"
        >
          <Image
            src={casino.screenshots[1]}
            alt={`${casino.name} withdrawal screenshot`}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div
        data-name="withdraw-text"
        className="text-[17px] leading-[28.8px] text-black"
      >
        <p>
          <strong>To withdraw crypto,</strong> open your wallet (in your profile
          menu), then find the balance you want to withdraw from and tap the
          blue &quot;Withdraw&quot; tab. Enter the amount of crypto you want to
          transfer, select the network and gas level if applicable, and then
          paste in your destination wallet address. If everything looks good,
          complete the hCaptcha and hit &quot;Withdraw.&quot;
        </p>
      </div>

      {casino.screenshots.length > 2 && (
        <div
          data-name="payment-screenshot-3"
          className="relative w-full h-[391px] bg-[#11181f] overflow-hidden"
        >
          <Image
            src={casino.screenshots[2]}
            alt={`${casino.name} wallet screenshot`}
            fill
            className="object-cover"
          />
        </div>
      )}

      <p className="text-[17px] leading-[28.8px] text-black">
        Note that, like many other crypto casinos, {casino.name} does offer a
        crypto vault for &quot;long term storage&quot;. However, I strongly
        advise against leaving large amounts of crypto at any casino. Instead,
        keep your player account balance relatively low, and transfer big wins
        to your own non-custodial crypto wallet/s at the earliest opportunity.
      </p>

      {/* Tip Box */}
      <div
        data-name="payment-tip"
        className="flex gap-2.5 items-start bg-[#fff8e8] border-l-4 border-[#ffe4ab] px-3 py-5"
      >
        <AlertTriangle className="size-6 shrink-0 text-[#e6b830]" />
        <p className="text-[17px] leading-[1.7] text-[#0d0f12]">
          <strong>CoinBets.com Tip: </strong>
          Always double-check crypto wallet addresses after pasting them — you
          don&apos;t want to fall victim to &apos;PasteJacking&apos;. This is
          when hackers exploit the copy-paste function to change wallet
          addresses to steal funds.
        </p>
      </div>
    </div>
  );
}

function BuyingCryptoSection({ casino }: { casino: CasinoReview }) {
  return (
    <div data-name="section-buying-crypto" className="flex flex-col gap-[20px]">
      <h3 className="text-[28px] font-semibold leading-[1.3] text-[#060d17]">
        Buying Crypto
      </h3>
      <p className="text-[17px] leading-[28.8px] text-black">
        Like most of the best crypto casinos, {casino.name} allows you to
        purchase crypto directly using fiat methods, including bank transfers,
        PSC, E-Wallets, and E-Cash. The service is powered by Swapped.com, and
        to do it, simply tap &quot;Deposit&quot; then &quot;Buy Crypto&quot;,
        and follow the prompts.
      </p>
      {casino.screenshots.length > 0 && (
        <div
          data-name="buying-crypto-screenshot"
          className="relative w-full h-[391px] bg-[#11181f] overflow-hidden"
        >
          <Image
            src={casino.screenshots[0]}
            alt={`${casino.name} buy crypto screenshot`}
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}

const GAME_CATEGORIES = [
  {
    id: "slots",
    title: "Slots",
    description: "Game variety",
    Icon: Gamepad2,
  },
  {
    id: "crash",
    title: "Crash & Instant Wins",
    description: "Fast gameplay",
    Icon: Zap,
  },
  {
    id: "live",
    title: "Live Casino",
    description: "Dealer quality",
    Icon: Radio,
  },
  {
    id: "table",
    title: "Table Games and Video Poker",
    description: "Classic tables",
    Icon: Layers,
  },
  {
    id: "bingo",
    title: "Bingo and Keno",
    description: "Casual games",
    Icon: Grid3X3,
  },
];

function GameCategoryNav({
  activeIndex,
  onTabClick,
}: {
  activeIndex: number;
  onTabClick: (index: number) => void;
}) {
  return (
    <div
      data-name="game-category-nav"
      className="flex border border-[#dedede] bg-[#0d337d] overflow-x-auto"
    >
      {GAME_CATEGORIES.map((cat, i) => {
        const isActive = i === activeIndex;
        const Icon = cat.Icon;
        return (
          <button
            key={cat.id}
            data-name={`game-tab-${cat.id}`}
            onClick={() => onTabClick(i)}
            className={`min-w-[140px] flex-1 flex flex-col gap-1.5 p-6 text-left cursor-pointer transition-colors ${
              isActive
                ? "bg-white border-b-[3px] border-b-[#0d337d]"
                : "bg-[#f8f8f8] border-x border-[#dedede] hover:bg-[#f0f0f0]"
            }`}
          >
            <div
              data-name="game-tab-icon"
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
              {cat.title}
            </p>
            <p
              className={`text-sm text-[#060d17] leading-[1.2] ${
                !isActive ? "opacity-50" : "opacity-70"
              }`}
            >
              {cat.description}
            </p>
          </button>
        );
      })}
    </div>
  );
}

function GameSelectionSection({ casino }: { casino: CasinoReview }) {
  const [activeGame, setActiveGame] = useState(0);

  return (
    <div
      id="toc-games"
      data-name="section-game-selection"
      className="flex flex-col gap-[20px]"
    >
      <h3 className="text-[28px] font-semibold leading-[1.3] text-[#060d17]">
        Game Selection
      </h3>
      <p className="text-[17px] leading-[28.8px] text-black">
        At the point of writing this {casino.name} review, the platform offered
        over 4,200 casino games from around 40 providers. Overall, despite a lot
        going on, the lobbies are pretty well organized with useful categories
        and filters.
      </p>

      <GameCategoryNav activeIndex={activeGame} onTabClick={setActiveGame} />

      {/* Slots */}
      {activeGame === 0 && (
        <div
          data-name="game-slots-content"
          className="flex flex-col gap-[15px]"
        >
          <div className="text-[17px] leading-[28.8px] text-black">
            <p className="mb-4">
              Despite styling itself as the ultimate Web3 Solana-based crypto
              casino, in truth, the vast majority of games at {casino.name} are
              the same slots from the same providers you&apos;ll see at most
              online casinos. For example, at the time of reviewing, the top
              slots were Sugar Rush 1000, Raging Waterfall Megaways, and Gem
              Fire Fortune by Pragmatic Play, Wild Justice from Platipus, Wild
              Turkey from NetEnt, and Treasure of Anubis from BGaming.
            </p>
            <p>
              While it would be good to see some more granular filters, there
              are some useful categories like New Release, Bonus, and Feature
              Buy. However, finding Megaways or jackpot slots requires using the
              search bar - never the best solution.
            </p>
          </div>

          {casino.screenshots.length > 0 && (
            <div
              data-name="game-slots-screenshot"
              className="relative w-full h-[391px] bg-[#11181f] overflow-hidden"
            >
              <Image
                src={casino.screenshots[0]}
                alt={`${casino.name} slots screenshot`}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* CoinBets Experience */}
          <div
            data-name="coinbets-experience"
            className="flex flex-col gap-[37px] bg-[#f3f3f3]  p-5"
          >
            <div
              data-name="experience-header"
              className="flex items-center gap-2.5 bg-[#0d337d] px-[15px] py-2"
            >
              <Gamepad2 className="size-6 text-white" />
              <span className="text-[19px] font-medium text-[#f8f8f8]">
                CoinBets Experience
              </span>
            </div>

            {/* Game Review 1 */}
            <div data-name="game-review-1" className="flex flex-col gap-2.5">
              <h4 className="text-[27px] font-medium leading-[40.5px] text-[#060d17]">
                Kingdom of Asgard (Pragmatic Play)
              </h4>
              {casino.screenshots.length > 0 && (
                <div
                  data-name="game-review-1-screenshot"
                  className="relative w-full h-[391px] bg-[#11181f] overflow-hidden"
                >
                  <Image
                    src={casino.screenshots[0]}
                    alt="Kingdom of Asgard gameplay"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="text-[17px] leading-[28.8px] text-black">
                <p className="mb-4">
                  I&apos;d been watching a YouTube video about Vikings at
                  lunchtime, so they must have been on my mind when I chose to
                  play Kingdom of Asgard from Pragmatic Play. And I must admit,
                  first impressions were pretty good. Polished graphics
                  featuring plenty of Viking girls… but then it all went
                  straight to Hell (or, should I say, Hel).
                </p>
                <p className="mb-4">
                  Yep, despite packing Wild, Bonus, Money, Collect, and
                  Expanding Symbols, plus Respins and Free Spins, after 50 x 1
                  USDT spins, I&apos;d seen virtually no action. Really, despite
                  a max win of 5,000x and a theoretical RTP of 96.54%, I only
                  managed to win a miserly 6.75 USDT - that&apos;s a 13.5% RTP.
                </p>
                <p>
                  If a real Viking raid had been this unsuccessful, the warriors
                  would have burned their own longships and banished themselves.
                </p>
              </div>
            </div>

            {/* Game Review 2 */}
            <div data-name="game-review-2" className="flex flex-col gap-2.5">
              <h4 className="text-[27px] font-medium leading-[40.5px] text-[#060d17]">
                King of Sweets (Play&apos;n GO)
              </h4>
              {casino.screenshots.length > 1 && (
                <div
                  data-name="game-review-2-screenshot"
                  className="relative w-full h-[391px] bg-[#11181f] overflow-hidden"
                >
                  <Image
                    src={casino.screenshots[1]}
                    alt="King of Sweets gameplay"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="text-[17px] leading-[28.8px] text-black">
                <p className="mb-4">
                  To cheer things up, I decided to play something distinctly
                  more upbeat next. Specifically, King of Sweets from
                  Play&apos;n GO. It&apos;s got a very Sweet Bonanza vibe about
                  it, but with added royalty and unicorns - and a Sweet-o-Meter.
                  Because everyone needs a Sweet-o-Meter. In fact, this slot has
                  enough sugar to induce diabetes.
                </p>
                <p className="mb-4">
                  But, with a max win of 5,000x your bet and a medium volatility
                  rating, I figured it was worth the risk to just rack up some
                  much-needed wins. And it did just that. Yep, thanks to
                  cascading symbols, Wilds, clusters, multipliers, free spins,
                  and some serious extra zap-delivered juice from the
                  Sweet-o-Meter, I managed to win 57.60 USDT with just 50 x 0.50
                  USDT spins. That&apos;s a real RTP of 230.4%.
                </p>
                <p>
                  So, King of Sweets - silly, verging on sickeningly sweet, but
                  it delivers the wins.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Crash & Instant Wins */}
      {activeGame === 1 && (
        <div
          data-name="game-crash-content"
          className="flex flex-col gap-[15px]"
        >
          <h4 className="text-[28px] font-semibold leading-[1.3] text-[#060d17]">
            Crash &amp; Instant Wins
          </h4>
          <div className="text-[17px] leading-[28.8px] text-black">
            <p className="mb-4">
              Interestingly, at {casino.name}, games usually referred to as
              &quot;instant wins&quot; or &quot;casual&quot; are in a category
              called &quot;Casual RNG&quot; - I guess it is more descriptive.
              You&apos;ll also find a few RNG-based table games in there -
              again, unusual.
            </p>
            <p>
              Specific games available include Minesweeper XY, Plinko XY, and
              Aviamasters from BGaming, Hi-Lo and Colors from Hacksaw, and High
              Flier from Pragmatic Play. When it comes to crash games
              specifically, the choice is surprisingly limited for a casino of
              this size.
            </p>
          </div>
          {casino.screenshots.length > 0 && (
            <div
              data-name="game-crash-screenshot"
              className="relative w-full h-[391px] bg-[#11181f] overflow-hidden"
            >
              <Image
                src={casino.screenshots[0]}
                alt={`${casino.name} crash games screenshot`}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      )}

      {/* Live Casino */}
      {activeGame === 2 && (
        <div data-name="game-live-content" className="flex flex-col gap-[15px]">
          <h4 className="text-[28px] font-semibold leading-[1.3] text-[#060d17]">
            Live Casino
          </h4>
          <div className="text-[17px] leading-[28.8px] text-black">
            <p className="mb-4">
              The {casino.name} live casino features several hundred live dealer
              games. No surprises, most are from Evolution and Pragmatic Play,
              but there are some from Playtech too.
            </p>
            <p>
              While the choice is good, the organization leaves a lot to be
              desired. All the live games are dumped in one lobby, with
              filtering limited to roulette and provider. To sort by blackjack,
              baccarat, craps, etc, you&apos;ll need to use the search function.
              However, there is a dedicated category for the live poker rooms.
            </p>
          </div>
          {casino.screenshots.length > 0 && (
            <div
              data-name="game-live-screenshot-1"
              className="relative w-full h-[391px] bg-[#11181f] overflow-hidden"
            >
              <Image
                src={casino.screenshots[0]}
                alt={`${casino.name} live casino screenshot`}
                fill
                className="object-cover"
              />
            </div>
          )}
          <p className="text-[17px] leading-[28.8px] text-black">
            Thankfully, there is a live game show category, which makes browsing
            much easier. And, thanks to the presence of both Evolution and
            Pragmatic, the most popular game shows are available, including
            Crazy Time, Stock Market, Monopoly Live, XXXtreme Lightning
            Roulette, and Sweet Bonanza Candyland.
          </p>
          {casino.screenshots.length > 1 && (
            <div
              data-name="game-live-screenshot-2"
              className="relative w-full h-[391px] bg-[#11181f] overflow-hidden"
            >
              <Image
                src={casino.screenshots[1]}
                alt={`${casino.name} live game shows screenshot`}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      )}

      {/* Table Games and Video Poker */}
      {activeGame === 3 && (
        <div
          data-name="game-table-content"
          className="flex flex-col gap-[15px]"
        >
          <h4 className="text-[28px] font-semibold leading-[1.3] text-[#060d17]">
            Table Games and Video Poker
          </h4>
          <p className="text-[17px] leading-[28.8px] text-black">
            As mentioned earlier, the RNG-based table games are all over the
            place here at {casino.name}. Some are in the &quot;Casual RNG&quot;
            category, while roulette games can be found in the
            &quot;Roulette&quot; category (funnily enough). In addition to First
            Person blackjack, baccarat, roulette, and craps from Evolution,
            you&apos;ll also find a few others, but table games at {casino.name}{" "}
            are more focused on the live variety. Indeed, a search for video
            poker only delivered a single result - Caribbean Stud Poker from
            GameArt.
          </p>
        </div>
      )}

      {/* Bingo and Keno */}
      {activeGame === 4 && (
        <div
          data-name="game-bingo-content"
          className="flex flex-col gap-[15px]"
        >
          <h4 className="text-[28px] font-semibold leading-[1.3] text-[#060d17]">
            Bingo and Keno
          </h4>
          <p className="text-[17px] leading-[28.8px] text-black">
            Finding video bingo also requires the search bar, though with only 4
            games - all from Belatra - it&apos;s hardly worth the effort.
            There&apos;s also 4 keno games on offer - a couple from Mascot, one
            from Play&apos;n GO, and a {casino.name} original. I think it&apos;s
            safe to say this isn&apos;t a casino for hardcore bingo and keno
            fans.
          </p>
          {casino.screenshots.length > 0 && (
            <div
              data-name="game-bingo-screenshot"
              className="relative w-full h-[391px] bg-[#11181f] overflow-hidden"
            >
              <Image
                src={casino.screenshots[0]}
                alt={`${casino.name} bingo and keno screenshot`}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const FAIR_TABS = [
  {
    id: "provably-fair",
    title: "Provably Fair Games",
    description: "Testing transparency and randomness",
    Icon: ShieldCheck,
  },
  {
    id: "coinbets-challenge",
    title: "CoinBets Challenge",
    description: "Our real-money gameplay results",
    Icon: Trophy,
  },
];

function FairTabNav({
  activeIndex,
  onTabClick,
}: {
  activeIndex: number;
  onTabClick: (index: number) => void;
}) {
  return (
    <div
      data-name="fair-tab-nav"
      className="flex border border-[#dedede] bg-[#0d337d] overflow-x-auto"
    >
      {FAIR_TABS.map((tab, i) => {
        const isActive = i === activeIndex;
        const Icon = tab.Icon;
        return (
          <button
            key={tab.id}
            data-name={`fair-tab-${tab.id}`}
            onClick={() => onTabClick(i)}
            className={`min-w-[180px] flex-1 flex flex-col gap-1.5 p-6 text-left cursor-pointer transition-colors ${
              isActive
                ? "bg-white border-b-[3px] border-b-[#0d337d]"
                : "bg-[#f8f8f8] border-x border-[#dedede] hover:bg-[#f0f0f0]"
            }`}
          >
            <div
              data-name="fair-tab-icon"
              className="size-[42px] shrink-0"
            >
              {i === 1 ? (
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" className="size-[42px]">
                  <rect width="42" height="42" fill="#E6B830" />
                  <path d="M32.5159 14.9892C32.2315 13.3984 31.44 11.9767 30.3026 10.9239C29.2882 9.97861 28.0048 9.3177 26.5831 9.0641C24.7695 8.74134 22.9097 8.57227 21.0038 8.57227C19.098 8.57227 17.2382 8.74134 15.4246 9.0641C13.9183 9.33307 12.5658 10.0555 11.5283 11.0929C10.4909 12.1304 9.76081 13.4829 9.49183 14.9969C9.16907 16.8105 9 18.6702 9 20.5761C9 22.482 9.16907 24.3417 9.49183 26.1554C9.76081 27.6616 10.4832 29.0065 11.513 30.0439C12.5504 31.0891 13.903 31.8191 15.4169 32.0881C17.2305 32.4109 19.0903 32.5799 20.9962 32.5799C22.902 32.5799 24.7618 32.4109 26.5754 32.0881C28.243 31.7884 29.7185 30.9277 30.7944 29.7058C31.6628 28.7221 32.2699 27.5002 32.5082 26.1554C32.8309 24.3417 33 22.482 33 20.5761C33 18.6702 32.8309 16.8105 32.5082 14.9969L32.5159 14.9892Z" fill="white" />
                  <path d="M16.246 24.6491C15.6312 25.1025 15.1086 25.6558 14.709 26.309C15.7388 27.9843 17.5755 29.0449 19.5428 29.0987C19.8656 28.4992 20.0807 27.8614 20.1806 27.1928C20.3728 25.9325 20.1499 24.6337 19.5428 23.5117C18.3516 23.5425 17.2066 23.9344 16.2383 24.6414L16.246 24.6491Z" fill="#E6B830" />
                  <path d="M22.9551 12.0215C22.494 12.8745 22.248 13.8428 22.248 14.8111C22.248 15.7794 22.494 16.7477 22.9551 17.6007C24.2231 17.5623 25.468 17.1089 26.4594 16.3174C26.9896 15.8947 27.4354 15.3875 27.7889 14.8111C26.7591 13.1358 24.9224 12.0753 22.9551 12.0215Z" fill="#E6B830" />
                  <path d="M15.4402 22.7277C16.4315 22.2436 17.2615 21.4905 17.8456 20.5529C17.2692 19.6077 16.4469 18.8545 15.4556 18.355C14.7024 17.9785 13.8648 17.7633 13.0194 17.7402C12.0742 19.4693 12.0665 21.5904 12.9964 23.3272C13.8417 23.3041 14.6794 23.1043 15.4402 22.7354V22.7277Z" fill="#E6B830" />
                  <path d="M26.0526 24.5032C25.1304 23.8884 24.0622 23.5503 22.9633 23.5195C22.4407 24.4878 22.1948 25.5868 22.2716 26.6934C22.3254 27.5311 22.5636 28.3687 22.9633 29.1065C24.9306 29.0527 26.7673 27.9921 27.7971 26.3168C27.3513 25.5945 26.7519 24.972 26.0526 24.5109V24.5032Z" fill="#E6B830" />
                  <path d="M14.709 14.8188C15.2085 15.6257 15.9001 16.3097 16.7147 16.7938C17.5678 17.301 18.5438 17.5854 19.5428 17.6084C20.0193 16.7323 20.2575 15.7487 20.2498 14.7496C20.2421 13.7967 19.9962 12.8591 19.5428 12.0215C17.5755 12.0753 15.7388 13.1358 14.709 14.8111V14.8188Z" fill="#E6B830" />
                </svg>
              ) : (
                <div className={`size-[42px] rounded flex items-center justify-center ${isActive ? "bg-[#0d337d]" : ""}`}>
                  <Icon className={`size-5 ${isActive ? "text-white" : "text-[#060d17]"}`} />
                </div>
              )}
            </div>
            <p
              className={`text-base font-medium text-[#060d17] leading-none ${
                !isActive ? "opacity-50" : ""
              }`}
            >
              {tab.title}
            </p>
            <p
              className={`text-sm text-[#060d17] leading-[1.2] ${
                !isActive ? "opacity-50" : "opacity-70"
              }`}
            >
              {tab.description}
            </p>
          </button>
        );
      })}
    </div>
  );
}

function ProvablyFairSection({ casino }: { casino: CasinoReview }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div data-name="section-provably-fair" className="flex flex-col gap-[20px]">
      <FairTabNav activeIndex={activeTab} onTabClick={setActiveTab} />

      {/* Provably Fair Games */}
      {activeTab === 0 && (
        <div
          data-name="provably-fair-content"
          className="flex flex-col gap-[20px]"
        >
          <h3 className="text-[28px] font-semibold leading-[1.3] text-[#060d17]">
            Provably Fair Games
          </h3>
          <div className="text-[17px] leading-[28.8px] text-black">
            <p className="mb-4">
              Like most large crypto casinos, {casino.name} offers a modest
              range of provably fair &quot;in-house original&quot; games. Yep,
              don&apos;t get too excited, they may be {casino.name} branded, but
              there&apos;s really nothing unique here - just the same simple
              games you&apos;ll find everywhere: Dice, Limbo, Plinko, Keno,
              Blackjack, Lottery, Coin Flip, Tower, Mine, Baccarat, Roulette,
              Crash, and Wheel.
            </p>
            <p>
              As for third-party provably fair games? Nope. No Turbo Games,
              InOut, or Spribe here. Wondering what it&apos;s all about? Check
              out the CoinBets Introduction to Provably Fair Gaming.
            </p>
          </div>

          {casino.screenshots.length > 0 && (
            <div
              data-name="provably-fair-screenshot"
              className="relative w-full h-[391px] bg-[#11181f] overflow-hidden"
            >
              <Image
                src={casino.screenshots[0]}
                alt={`${casino.name} provably fair games screenshot`}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Lottery */}
          <h3 className="text-[28px] font-semibold leading-[1.3] text-[#060d17]">
            Lottery
          </h3>
          <p className="text-[17px] leading-[28.8px] text-black">
            Tickets for the {casino.name} provably fair daily in-house lottery
            cost $2 each, and you can choose your own numbers. Matching 5 balls
            plus the bonus ball lands you a US$100,000 jackpot, while matching
            just the bonus ball gets you $2. If more than one player wins, the
            prize is shared equally.
          </p>

          {casino.screenshots.length > 1 && (
            <div
              data-name="lottery-screenshot"
              className="relative w-full h-[391px] bg-[#11181f] overflow-hidden"
            >
              <Image
                src={casino.screenshots[1]}
                alt={`${casino.name} lottery screenshot`}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Crypto Trading */}
          <h3 className="text-[28px] font-semibold leading-[1.3] text-[#060d17]">
            Crypto Trading
          </h3>
          <p className="text-[17px] leading-[28.8px] text-black">
            Unusually, {casino.name} also offers crypto trading. The interface
            is simple - set your wager and payout multiplier, and Buy/Long or
            Sell/Short. Both PnL and flat fee trading are offered. However,
            it&apos;s important to remember that this kind of trading is
            essentially no different from gambling - so treat it as
            entertainment and never put more than you can afford to lose on the
            line.
          </p>

          {casino.screenshots.length > 2 && (
            <div
              data-name="crypto-trading-screenshot"
              className="relative w-full h-[391px] bg-[#11181f] overflow-hidden"
            >
              <Image
                src={casino.screenshots[2]}
                alt={`${casino.name} crypto trading screenshot`}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Lootboxes */}
          <h3 className="text-[28px] font-semibold leading-[1.3] text-[#060d17]">
            Lootboxes
          </h3>
          <p className="text-[17px] leading-[28.8px] text-black">
            Cash and NFT lootboxes are also available to purchase. At the time
            of writing this {casino.name} review, options included
            Counter-Strike cases, Bluechip NFT boxes, and Solana boxes. Prices
            ranged from US $2.61 to $277.67.
          </p>

          {casino.screenshots.length > 0 && (
            <div
              data-name="lootboxes-screenshot"
              className="relative w-full h-[391px] bg-[#11181f] overflow-hidden"
            >
              <Image
                src={casino.screenshots[0]}
                alt={`${casino.name} lootboxes screenshot`}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      )}

      {/* CoinBets Challenge */}
      {activeTab === 1 && (
        <div
          data-name="coinbets-challenge-content"
          className="flex flex-col gap-[20px]"
        >
          <h3 className="text-[28px] font-semibold leading-[1.3] text-[#060d17]">
            CoinBets Challenge: Medium vs High Risk Wheel
          </h3>
          <div className="text-[17px] leading-[28.8px] text-black">
            <p className="mb-4">
              For today&apos;s CoinBets Challenge, I decided to play on one of
              the {casino.name} provably fair originals - specifically, Wheel.
              Now, regarding the game itself, there&apos;s not much to say -
              it&apos;s identical to virtually every provably fair wheel game.
              You set your bet, set your risk, and set the number of segments,
              then it&apos;s time to spin.
            </p>
            <p className="mb-4">
              The challenge? I&apos;d play 50 x 0.50 USDT spins on Medium with
              30 segments, then try to better the result with 50 x 0.50 USDT
              spins on High with 30 segments. The latter leaves just one 29.4x
              multiplier segment on the entire wheel. Quite the challenge!
            </p>
            <p className="mb-4">The results?</p>
            <p>
              50 x 0.50 USDT spins on Medium with 30 segments delivered a total
              win of 25.75 USDT - that&apos;s an RTP of 103%.
            </p>
          </div>

          {casino.screenshots.length > 0 && (
            <div
              data-name="challenge-medium-screenshot"
              className="relative w-full h-[391px] bg-[#11181f] overflow-hidden"
            >
              <Image
                src={casino.screenshots[0]}
                alt={`${casino.name} wheel medium risk screenshot`}
                fill
                className="object-cover"
              />
            </div>
          )}

          <p className="text-[17px] leading-[28.8px] text-black">
            But the 50 x 0.50 USD on Hard with 30 segments delivered a total win
            of 58.00 USDT - that&apos;s a very respectable RTP of 235.2%.
          </p>

          {casino.screenshots.length > 1 && (
            <div
              data-name="challenge-high-screenshot"
              className="relative w-full h-[391px] bg-[#11181f] overflow-hidden"
            >
              <Image
                src={casino.screenshots[1]}
                alt={`${casino.name} wheel high risk screenshot`}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="text-[17px] leading-[28.8px] text-black">
            <p className="mb-4">Challenge smashed.</p>
            <p>
              Oh, and the provably fair verification system is nice and
              straightforward too - just copy the seeds and make a note of the
              round/s you want to check (nonce), then open the fairness settings
              (scale symbol) and tap &quot;verify&quot;. Paste in the player and
              server seeds, set the required nonce, and make sure the game
              settings are accurate. Then, you should see a result that matches
              what you experienced in the game.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function SportsIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className="size-[30px]">
      <circle cx="15" cy="15" r="12" stroke="white" strokeWidth="2" fill="none" />
      <path d="M3 15h24M15 3v24M5.5 5.5c3 3 6 4.5 9.5 4.5s6.5-1.5 9.5-4.5M5.5 24.5c3-3 6-4.5 9.5-4.5s6.5 1.5 9.5 4.5" stroke="white" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function SportsSection({ casino }: { casino: CasinoReview }) {
  return (
    <div data-name="section-sports" className="flex flex-col gap-[15px]">
      {/* Virtual Sport */}
      <div data-name="virtual-sport-header" className="border border-[#dedede]">
        <div
          data-name="virtual-sport-title"
          className="flex gap-[15px] items-center bg-white border-b-[3px] border-b-[#0d337d] px-[15px] py-[13px]"
        >
          <div
            data-name="virtual-sport-icon"
            className="size-[42px] shrink-0 bg-[#0d337d] rounded flex items-center justify-center overflow-hidden"
          >
            <SportsIcon />
          </div>
          <h3 className="text-[20px] font-medium text-black leading-[40px]">
            Virtual Sport
          </h3>
        </div>
      </div>

      <p className="text-[17px] leading-[28.8px] text-black">
        For those who like the idea of sports betting but prefer instant action,{" "}
        {casino.name} offers a range of virtual sports from Pragmatic Play.
        Available options include Fantastic League Football, Flat Horse Racing,
        Force 1 Racing, Greyhound Racing, and Penalty Shootout.
      </p>

      {casino.screenshots.length > 0 && (
        <div
          data-name="virtual-sport-screenshot"
          className="relative w-full h-[391px] bg-[#11181f] overflow-hidden"
        >
          <Image
            src={casino.screenshots[0]}
            alt={`${casino.name} virtual sports screenshot`}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Sportsbook */}
      <div data-name="sportsbook-header" className="border border-[#dedede]">
        <div
          data-name="sportsbook-title"
          className="flex gap-[15px] items-center bg-white border-b-[3px] border-b-[#0d337d] px-[15px] py-[13px]"
        >
          <div
            data-name="sportsbook-icon"
            className="size-[42px] shrink-0 bg-[#0d337d] rounded flex items-center justify-center overflow-hidden"
          >
            <SportsIcon />
          </div>
          <h3 className="text-[20px] font-medium text-black leading-[40px]">
            Sportsbook
          </h3>
        </div>
      </div>

      <p className="text-[17px] leading-[28.8px] text-black">
        In common with all the best online crypto gambling platforms,{" "}
        {casino.name} also boasts an extensive sportsbook. It offers standard
        and live sports betting on everything from soccer and basketball to ice
        hockey and handball. Esports betting is also available on disciplines
        like Counter-Strike, Dota 2, and Valorant.
      </p>

      {casino.screenshots.length > 1 && (
        <div
          data-name="sportsbook-screenshot"
          className="relative w-full h-[391px] bg-[#11181f] overflow-hidden"
        >
          <Image
            src={casino.screenshots[1]}
            alt={`${casino.name} sportsbook screenshot`}
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}

const PROMO_TABS = [
  { id: "promotions", label: "Promotional Offers", subtitle: "Current bonuses and real value", Icon: Megaphone },
  { id: "vip", label: "Loyalty Program & VIP Club", subtitle: "Rewards, rakeback, and VIP perks", Icon: Crown },
];

function PromoTabNav({
  activeIndex,
  onTabClick,
}: {
  activeIndex: number;
  onTabClick: (index: number) => void;
}) {
  return (
    <div
      data-name="promo-tab-nav"
      className="flex border border-[#dedede] bg-[#0d337d] overflow-x-auto"
    >
      {PROMO_TABS.map((tab, i) => {
        const isActive = i === activeIndex;
        const Icon = tab.Icon;
        return (
          <button
            key={tab.id}
            data-name={`promo-tab-${tab.id}`}
            onClick={() => onTabClick(i)}
            className={`min-w-[180px] flex-1 flex flex-col gap-1.5 p-6 text-left cursor-pointer transition-colors ${
              isActive
                ? "bg-white border-b-[3px] border-b-[#0d337d]"
                : "bg-[#f8f8f8] border-x border-[#dedede] hover:bg-[#f0f0f0]"
            }`}
          >
            <div
              data-name="promo-tab-icon"
              className={`size-[42px] rounded flex items-center justify-center ${
                isActive ? "bg-[#003eb6]" : ""
              }`}
            >
              <Icon
                className={`size-5 ${isActive ? "text-white" : "text-[#999]"}`}
              />
            </div>
            <span
              className={`text-[16px] font-medium leading-none ${
                isActive ? "text-[#0d0f12]" : "text-[#060d17] opacity-50"
              }`}
            >
              {tab.label}
            </span>
            <span
              className={`text-[14px] leading-[28.8px] ${
                isActive
                  ? "text-[#0d0f12] opacity-70"
                  : "text-[#060d17] opacity-50"
              }`}
            >
              {tab.subtitle}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function PromotionsSection({ casino }: { casino: CasinoReview }) {
  const [activeTab, setActiveTab] = useState(0);

  const promoOffers = [
    "$10,000 Weekly Raffle - Wager $500 to get a ticket.",
    "Slot Wars - Daily bonus wars on a selected slot game, with cash prizes.",
    "$25K Weekly Race - A regular slot wagering tournament.",
    "Network Promotions - Provider-run promos like the €125k Bet & Win from Evolution, €3k Multiplier Rush from BGaming, and $11k Daily Madness from Pragmatic Play.",
  ];

  return (
    <div id="toc-promotions" data-name="promotions-section" className="flex flex-col gap-[15px]">
      <PromoTabNav activeIndex={activeTab} onTabClick={setActiveTab} />

      {activeTab === 0 && (
        <>
          <h3 className="text-[28px] font-semibold leading-[1.3] text-[#060d17]">
            Promotional Offers
          </h3>

          <p className="text-[17px] leading-[28.8px] text-black">
            Despite the lack of a {casino.name} welcome bonus, there are plenty
            of other promotional offers for existing players. At the time of
            writing this review, they included:
          </p>

          <div data-name="promo-offers-list" className="flex flex-col gap-[5px]">
            {promoOffers.map((offer, i) => (
              <div
                key={i}
                data-name="promo-offer-item"
                className="pl-[10px]"
              >
                <div
                  data-name="promo-offer-border"
                  className="bg-white border-l-4 border-l-[#003eb6] px-[15px] py-[10px]"
                >
                  <p className="text-[17px] font-bold leading-[1.7] text-[#0d0f12]">
                    {offer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {casino.screenshots.length > 0 && (
            <div
              data-name="promo-screenshot"
              className="relative w-full h-[391px] bg-[#11181f] overflow-hidden"
            >
              <Image
                src={casino.screenshots[0]}
                alt={`${casino.name} promotions screenshot`}
                fill
                className="object-cover"
              />
            </div>
          )}
        </>
      )}

      {activeTab === 1 && (
        <>
          <div data-name="vip-content" className="text-[17px] leading-[28.8px] text-black">
            <p className="mb-0">
              The {casino.name} loyalty program spans an insane 80 levels. Perks
              include a daily bonus, weekly bonus, monthly bonus, rakeback,
              level-up bonus, NFT booster, referral reward, and NFT reward.
            </p>
            <p className="mb-0">&nbsp;</p>
            <p>
              Your rank is determined by EXP points, which are earned at a rate
              of 1 EXP for every 1 USD wagered on all games except for PvP
              poker. While specific details of the loyalty/VIP program
              aren&apos;t available at the casino itself, a full breakdown can be
              found in the {casino.name} white paper (click on &quot;About
              us&quot; in the footer menu).
            </p>
          </div>

          {casino.screenshots.length > 1 && (
            <div
              data-name="vip-screenshot"
              className="relative w-full h-[391px] bg-[#11181f] overflow-hidden"
            >
              <Image
                src={casino.screenshots[1]}
                alt={`${casino.name} VIP program screenshot`}
                fill
                className="object-cover"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}

const SUPPORT_TABS = [
  { id: "support", label: "Player Support", subtitle: "Quality and Speed", Icon: Headphones },
  { id: "design", label: "User Experience & Website Design", subtitle: "Navigation, layout, and performance", Icon: Monitor },
  { id: "mobile", label: "Mobile apps", subtitle: "Gameplay and usability on mobile", Icon: Smartphone },
];

function SupportTabNav({
  activeIndex,
  onTabClick,
}: {
  activeIndex: number;
  onTabClick: (index: number) => void;
}) {
  return (
    <div
      data-name="support-tab-nav"
      className="flex border border-[#dedede] bg-[#0d337d] overflow-x-auto"
    >
      {SUPPORT_TABS.map((tab, i) => {
        const isActive = i === activeIndex;
        const Icon = tab.Icon;
        return (
          <button
            key={tab.id}
            data-name={`support-tab-${tab.id}`}
            onClick={() => onTabClick(i)}
            className={`min-w-[140px] flex-1 flex flex-col gap-1.5 p-6 text-left cursor-pointer transition-colors ${
              isActive
                ? "bg-white border-b-[3px] border-b-[#0d337d]"
                : "bg-[#f8f8f8] border-x border-[#dedede] hover:bg-[#f0f0f0]"
            }`}
          >
            <div
              data-name="support-tab-icon"
              className={`size-[40px] rounded flex items-center justify-center overflow-hidden ${
                isActive ? "bg-[#0d337d]" : ""
              }`}
            >
              <Icon
                className={`size-5 ${isActive ? "text-white" : "text-[#999]"}`}
              />
            </div>
            <span
              className={`text-[16px] font-medium leading-none ${
                isActive ? "text-black" : "text-[#707070]"
              }`}
            >
              {tab.label}
            </span>
            <span
              className={`text-[14px] leading-[28.8px] opacity-70 ${
                isActive ? "text-black" : "text-[#707070]"
              }`}
            >
              {tab.subtitle}
            </span>
          </button>
        );
      })}
    </div>
  );
}

const LANGUAGES_TABLE = [
  ["Japanese", "Korean", "Portuguese"],
  ["Vietnamese", "Spanish", "Turkish"],
  ["French", "German", "Arabic"],
];

const FLAG_CODES: Record<string, string> = {
  Japanese: "jp",
  Korean: "kr",
  Portuguese: "br",
  Vietnamese: "vn",
  Spanish: "es",
  Turkish: "tr",
  French: "fr",
  German: "de",
  Arabic: "sa",
};

function SupportDesignSection({ casino }: { casino: CasinoReview }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div id="toc-support" data-name="support-design-section" className="flex flex-col gap-[15px]">
      <SupportTabNav activeIndex={activeTab} onTabClick={setActiveTab} />

      {activeTab === 0 && (
        <>
          <h3 className="text-[28px] font-semibold leading-[1.3] text-[#060d17]">
            Player Support
          </h3>

          <div data-name="support-content" className="flex flex-col gap-[25px]">
            <div className="text-[17px] leading-[28.8px] text-black">
              <p className="mb-0">
                Like most online casinos, {casino.name} provides 24/7 player
                support via live chat - with the typical response time being
                under 2 minutes. Alternatively, you can email directly at
                support@solcasino.io.
              </p>
              <p className="mb-0">&nbsp;</p>
              <p>
                Unusually, there doesn&apos;t seem to be a FAQ section or any
                other informational resources on-site. However, you can connect
                with and follow {casino.name} on social media platforms like X
                (Twitter), Discord, and Telegram, plus there&apos;s an official
                Medium with some useful articles and guides.
              </p>
            </div>

            {casino.screenshots.length > 0 && (
              <div
                data-name="support-screenshot"
                className="relative w-full h-[391px] bg-[#11181f] overflow-hidden"
              >
                <Image
                  src={casino.screenshots[0]}
                  alt={`${casino.name} player support screenshot`}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </>
      )}

      {activeTab === 1 && (
        <>
          <h2 className="text-[28px] font-semibold leading-[1.3] text-[#060d17]">
            User Experience &amp; Website Design
          </h2>

          <div data-name="ux-content" className="flex flex-col gap-[25px]">
            <div className="text-[17px] leading-[28.8px] text-black">
              <p className="mb-0">
                There&apos;s no getting away from it, {casino.name} looks like a
                thousand other online casinos. Really, I&apos;d go as far as
                saying the design is downright dull. The colors, the logo, the
                graphics… they look beyond generic.
              </p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">
                However, the {casino.name} team has managed to pack an awful lot
                of games and features into the platform without making the user
                experience too messy. Don&apos;t get me wrong, it could really
                use some better categorization and more granular filters, but on
                the whole, everything seems to be logical and functional.
              </p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">
                Unfortunately, {casino.name} falls flat when it comes to
                responsible gambling. Aside from the usual info page linked from
                the footer, there&apos;s nothing. No safer gambling tools at all.
                Really very disappointing, but I guess this is what we should
                expect from a casino licensed at a truck stop (yeah, check out
                Tobique on Google Earth).
              </p>
              <p className="mb-0">&nbsp;</p>
              <p>
                In addition to English, {casino.name} is available in the
                following international languages:
              </p>
            </div>

            {/* Languages Table */}
            <div
              data-name="languages-table"
              className="border border-[#dedede] overflow-x-auto"
            >
              <div
                data-name="languages-header"
                className="bg-[#f6f8fb] px-3 py-2 h-[40px] flex items-center"
              >
                <span className="text-[14px] font-medium text-[#060d17]">
                  Languages
                </span>
              </div>
              {LANGUAGES_TABLE.map((row, ri) => (
                <div
                  key={ri}
                  data-name="languages-row"
                  className="flex h-[51px] border-t border-[#e4e8ec] min-w-[500px]"
                >
                  {row.map((lang) => (
                    <div
                      key={lang}
                      data-name={`lang-${lang.toLowerCase()}`}
                      className="flex-1 flex items-center gap-2.5 px-3 bg-white border-l border-[#e4e8ec]"
                    >
                      <span
                        className={`fi fi-${FLAG_CODES[lang]} size-[32px] rounded-sm bg-cover bg-center shrink-0`}
                      />
                      <span className="text-[14px] text-[#53565b]">{lang}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {activeTab === 2 && (
        <>
          <h2 className="text-[28px] font-semibold leading-[1.3] text-[#060d17]">
            Mobile Apps
          </h2>

          <p className="text-[17px] leading-[28.8px] text-black">
            Although there is no dedicated {casino.name} mobile app, the
            web-based platform is optimized for mobile browsers, so you can
            still play on your smartphone or tablet.
          </p>
        </>
      )}
    </div>
  );
}

function CryptoTokenSection({ casino }: { casino: CasinoReview }) {
  return (
    <div data-name="crypto-token-section" className="flex flex-col gap-[15px]">
      <div data-name="crypto-token-header" className="border border-[#dedede]">
        <div
          data-name="crypto-token-title"
          className="flex gap-[15px] items-center bg-white border-b-[3px] border-b-[#0d337d] px-[15px] py-[13px]"
        >
          <div
            data-name="crypto-token-icon"
            className="size-[42px] shrink-0 bg-[#0d337d] rounded flex items-center justify-center overflow-hidden"
          >
            <Bitcoin className="size-[30px] text-white" />
          </div>
          <h3 className="text-[20px] font-medium text-black leading-[40px]">
            Crypto Token and Tokenomics
          </h3>
        </div>
      </div>

      <div className="text-[17px] leading-[28.8px] text-black">
        <p className="mb-0">
          Solcasino Token (SCS) is the creatively named native token of{" "}
          {casino.name}.
        </p>
        <p className="mb-0">&nbsp;</p>
        <p>
          According to CoinGecko, at the time of writing, this Solana-based
          token had a market cap of just over $6.5m, a 24-hour trading volume of
          just over $28k, a circulating/total supply of just under 3.4b, and a
          max supply of 10 billion.
        </p>
      </div>

      {casino.screenshots.length > 0 && (
        <div
          data-name="crypto-token-screenshot-1"
          className="relative w-full h-[391px] bg-[#11181f] overflow-hidden"
        >
          <Image
            src={casino.screenshots[0]}
            alt={`${casino.name} crypto token screenshot`}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="text-[17px] leading-[28.8px] text-black">
        <p className="mb-0">
          In terms of utility, using SCS to wager at {casino.name} earns players
          rewards, while staking SCS in the casino&apos;s liquidity pool can
          generate a passive income paid in USDC. At the time of writing this{" "}
          {casino.name} review, the staking APR was 22.48%, with a 2% deposit
          fee and up to 2% unstaking fee, and a total of 1.4bn SCS were staked.
        </p>
        <p className="mb-0">&nbsp;</p>
        <p>
          SCS can be traded on decentralized exchanges like Raydium, Meteora, and
          Orca.
        </p>
      </div>

      {casino.screenshots.length > 1 && (
        <div
          data-name="crypto-token-screenshot-2"
          className="relative w-full h-[391px] bg-[#11181f] overflow-hidden"
        >
          <Image
            src={casino.screenshots[1]}
            alt={`${casino.name} tokenomics screenshot`}
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}

function InterestingFactsSection({ casino }: { casino: CasinoReview }) {
  return (
    <div id="toc-facts" data-name="interesting-facts-section" className="flex flex-col gap-[15px]">
      <div data-name="interesting-facts-header" className="border border-[#dedede]">
        <div
          data-name="interesting-facts-title"
          className="flex gap-[15px] items-center bg-white border-b-[3px] border-b-[#0d337d] px-[15px] py-[13px]"
        >
          <div
            data-name="interesting-facts-icon"
            className="size-[42px] shrink-0 bg-[#0d337d] rounded flex items-center justify-center overflow-hidden"
          >
            <Lightbulb className="size-[30px] text-white" />
          </div>
          <h3 className="text-[20px] font-medium text-black leading-[40px]">
            Other Interesting Facts
          </h3>
        </div>
      </div>

      <p className="text-[17px] leading-[28.8px] text-black">
        According to the {casino.name} white paper, it was the first casino
        platform built on the Solana blockchain, and is among the top 5 most
        popular Solana dApps according to &quot;Dapparadar&quot;. I think they
        mean &quot;DappRadar,&quot; and that really should be &quot;top 5 most
        popular Solana gambling dApps.&quot; But yep, at the time of making this{" "}
        {casino.name} review, the platform was at number 4.
      </p>

      {casino.screenshots.length > 0 && (
        <div
          data-name="interesting-facts-screenshot"
          className="relative w-full h-[391px] bg-[#11181f] overflow-hidden"
        >
          <Image
            src={casino.screenshots[0]}
            alt={`${casino.name} DappRadar screenshot`}
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}

const REPUTATION_TABLE = [
  { platform: "Trustpilot", rating: "1.8 Poor", notes: "(based on 23 reviews)" },
  { platform: "Casino Guru", rating: "Safety Index: B+", notes: "" },
  { platform: "BitcoinTalk", rating: "Overall: 4.5/5", notes: "" },
];

function OverallReputationSection({ casino }: { casino: CasinoReview }) {
  return (
    <div data-name="overall-reputation-section" className="flex flex-col gap-[15px]">
      <div data-name="reputation-header" className="border border-[#dedede]">
        <div
          data-name="reputation-title"
          className="flex gap-[15px] items-center bg-white border-b-[3px] border-b-[#0d337d] px-[15px] py-[13px]"
        >
          <div
            data-name="reputation-icon"
            className="size-[42px] shrink-0 bg-[#0d337d] rounded flex items-center justify-center overflow-hidden"
          >
            <Star className="size-[28px] text-white" />
          </div>
          <h3 className="text-[20px] font-medium text-black leading-[40px]">
            Overall Reputation
          </h3>
        </div>
      </div>

      <div className="text-[17px] leading-[28.8px] text-black">
        <p className="mb-0">
          Okay, we&apos;ve seen what {casino.name} offers, but what are people
          saying about it?
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">
          Well, before we check out some ratings from popular casino review
          platforms, it&apos;s worth keeping in mind that it&apos;s very hard to
          accurately gauge reputations. Between biased affiliate marketing
          content and systematic reputation laundering campaigns using fake
          reviews, it&apos;s hard to know what to believe. After all, that is why
          we set up CoinBets - to give you a trusted source for objective
          information.
        </p>
        <p className="mb-0">&nbsp;</p>
        <p>
          But, anyway, for curiosity&apos;s sake, if nothing else, here are some
          ratings at the time of writing this {casino.name} review:
        </p>
      </div>

      {/* Reputation Ratings Table */}
      <div data-name="reputation-table" className="border border-[#dedede] overflow-x-auto">
        <div data-name="reputation-table-header" className="flex bg-[#f8f8f8] min-w-[600px]">
          <div className="w-[194px] shrink-0 px-3 py-2 h-[40px] flex items-center">
            <span className="text-[14px] font-medium text-[#060d17]">Platform</span>
          </div>
          <div className="flex-1 px-3 py-2 h-[40px] flex items-center">
            <span className="text-[14px] font-medium text-[#060d17]">Overall Rating</span>
          </div>
          <div className="flex-1 px-3 py-2 h-[40px] flex items-center">
            <span className="text-[14px] font-medium text-[#060d17]">Notes</span>
          </div>
        </div>
        {REPUTATION_TABLE.map((row, i) => (
          <div
            key={i}
            data-name={`reputation-row-${i}`}
            className="flex h-[71px] border-t border-[#e4e8ec] min-w-[600px]"
          >
            <div className="w-[194px] shrink-0 flex items-center px-3 bg-white border-l border-[#e4e8ec]">
              {i === 0 ? (
                <svg width="101" height="37" viewBox="0 0 1133 279" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <path d="M297.7 98.5996H412.4V120H367.3V240.3H342.5V120H297.6V98.5996H297.7ZM407.5 137.7H428.7V157.5H429.1C429.8 154.7 431.1 152 433 149.4C434.9 146.8 437.2 144.3 439.9 142.2C442.6 140 445.6 138.3 448.9 136.9C452.2 135.6 455.6 134.9 459 134.9C461.6 134.9 463.5 135 464.5 135.1C465.5 135.2 466.5 135.4 467.6 135.5V157.3C466 157 464.4 156.8 462.7 156.6C461 156.4 459.4 156.3 457.8 156.3C454 156.3 450.4 157.1 447 158.6C443.6 160.1 440.7 162.4 438.2 165.3C435.7 168.3 433.7 171.9 432.2 176.3C430.7 180.7 430 185.7 430 191.4V240.2H407.4V137.7H407.5ZM571.5 240.3H549.3V226H548.9C546.1 231.2 542 235.3 536.5 238.4C531 241.5 525.4 243.1 519.7 243.1C506.2 243.1 496.4 239.8 490.4 233.1C484.4 226.4 481.4 216.3 481.4 202.8V137.7H504V200.6C504 209.6 505.7 216 509.2 219.7C512.6 223.4 517.5 225.3 523.7 225.3C528.5 225.3 532.4 224.6 535.6 223.1C538.8 221.6 541.4 219.7 543.3 217.2C545.3 214.8 546.7 211.8 547.6 208.4C548.5 205 548.9 201.3 548.9 197.3V137.8H571.5V240.3ZM610 207.4C610.7 214 613.2 218.6 617.5 221.3C621.9 223.9 627.1 225.3 633.2 225.3C635.3 225.3 637.7 225.1 640.4 224.8C643.1 224.5 645.7 223.8 648 222.9C650.4 222 652.3 220.6 653.9 218.8C655.4 217 656.1 214.7 656 211.8C655.9 208.9 654.8 206.5 652.8 204.7C650.8 202.8 648.3 201.4 645.2 200.2C642.1 199.1 638.6 198.1 634.6 197.3C630.6 196.5 626.6 195.6 622.5 194.7C618.3 193.8 614.2 192.6 610.3 191.3C606.4 190 602.9 188.2 599.8 185.9C596.7 183.7 594.2 180.8 592.4 177.3C590.5 173.8 589.6 169.5 589.6 164.3C589.6 158.7 591 154.1 593.7 150.3C596.4 146.5 599.9 143.5 604 141.2C608.2 138.9 612.8 137.3 617.9 136.3C623 135.4 627.9 134.9 632.5 134.9C637.8 134.9 642.9 135.5 647.7 136.6C652.5 137.7 656.9 139.5 660.8 142.1C664.7 144.6 667.9 147.9 670.5 151.9C673.1 155.9 674.7 160.8 675.4 166.5H651.8C650.7 161.1 648.3 157.4 644.4 155.6C640.5 153.7 636 152.8 631 152.8C629.4 152.8 627.5 152.9 625.3 153.2C623.1 153.5 621.1 154 619.1 154.7C617.2 155.4 615.6 156.5 614.2 157.9C612.9 159.3 612.2 161.1 612.2 163.4C612.2 166.2 613.2 168.4 615.1 170.1C617 171.8 619.5 173.2 622.6 174.4C625.7 175.5 629.2 176.5 633.2 177.3C637.2 178.1 641.3 179 645.5 179.9C649.6 180.8 653.6 182 657.6 183.3C661.6 184.6 665.1 186.4 668.2 188.7C671.3 191 673.8 193.8 675.7 197.2C677.6 200.6 678.6 204.9 678.6 209.9C678.6 216 677.2 221.1 674.4 225.4C671.6 229.6 668 233.1 663.6 235.7C659.2 238.3 654.2 240.3 648.8 241.5C643.4 242.7 638 243.3 632.7 243.3C626.2 243.3 620.2 242.6 614.7 241.1C609.2 239.6 604.4 237.4 600.4 234.5C596.4 231.5 593.2 227.8 590.9 223.4C588.6 219 587.4 213.7 587.2 207.6H610V207.4ZM684.6 137.7H701.7V106.9H724.3V137.7H744.7V154.6H724.3V209.4C724.3 211.8 724.4 213.8 724.6 215.6C724.8 217.3 725.3 218.8 726 220C726.7 221.2 727.8 222.1 729.3 222.7C730.8 223.3 732.7 223.6 735.3 223.6C736.9 223.6 738.5 223.6 740.1 223.5C741.7 223.4 743.3 223.2 744.9 222.8V240.3C742.4 240.6 739.9 240.8 737.6 241.1C735.2 241.4 732.8 241.5 730.3 241.5C724.3 241.5 719.5 240.9 715.9 239.8C712.3 238.7 709.4 237 707.4 234.8C705.3 232.6 704 229.9 703.2 226.6C702.5 223.3 702 219.5 701.9 215.3V154.8H684.8V137.7H684.6ZM760.7 137.7H782.1V151.6H782.5C785.7 145.6 790.1 141.4 795.8 138.8C801.5 136.2 807.6 134.9 814.3 134.9C822.4 134.9 829.4 136.3 835.4 139.2C841.4 142 846.4 145.9 850.4 150.9C854.4 155.9 857.3 161.7 859.3 168.3C861.3 174.9 862.3 182 862.3 189.5C862.3 196.4 861.4 203.1 859.6 209.5C857.8 216 855.1 221.7 851.5 226.7C847.9 231.7 843.3 235.6 837.7 238.6C832.1 241.6 825.6 243.1 818 243.1C814.7 243.1 811.4 242.8 808.1 242.2C804.8 241.6 801.6 240.6 798.6 239.3C795.6 238 792.7 236.3 790.2 234.2C787.6 232.1 785.5 229.7 783.7 227H783.3V278.2H760.7V137.7ZM839.7 189.1C839.7 184.5 839.1 180 837.9 175.6C836.7 171.2 834.9 167.4 832.5 164C830.1 160.6 827.1 157.9 823.6 155.9C820 153.9 815.9 152.8 811.3 152.8C801.8 152.8 794.6 156.1 789.8 162.7C785 169.3 782.6 178.1 782.6 189.1C782.6 194.3 783.2 199.1 784.5 203.5C785.8 207.9 787.6 211.7 790.2 214.9C792.7 218.1 795.7 220.6 799.2 222.4C802.7 224.3 806.8 225.2 811.4 225.2C816.6 225.2 820.9 224.1 824.5 222C828.1 219.9 831 217.1 833.3 213.8C835.6 210.4 837.3 206.6 838.3 202.3C839.2 198 839.7 193.6 839.7 189.1ZM879.6 98.5996H902.2V120H879.6V98.5996ZM879.6 137.7H902.2V240.3H879.6V137.7ZM922.4 98.5996H945V240.3H922.4V98.5996ZM1014.3 243.1C1006.1 243.1 998.8 241.7 992.4 239C986 236.3 980.6 232.5 976.1 227.8C971.7 223 968.3 217.3 966 210.7C963.7 204.1 962.5 196.8 962.5 188.9C962.5 181.1 963.7 173.9 966 167.3C968.3 160.7 971.7 155 976.1 150.2C980.5 145.4 986 141.7 992.4 139C998.8 136.3 1006.1 134.9 1014.3 134.9C1022.5 134.9 1029.8 136.3 1036.2 139C1042.6 141.7 1048 145.5 1052.5 150.2C1056.9 155 1060.3 160.7 1062.6 167.3C1064.9 173.9 1066.1 181.1 1066.1 188.9C1066.1 196.8 1064.9 204.1 1062.6 210.7C1060.3 217.3 1056.9 223 1052.5 227.8C1048.1 232.6 1042.6 236.3 1036.2 239C1029.8 241.7 1022.5 243.1 1014.3 243.1ZM1014.3 225.2C1019.3 225.2 1023.7 224.1 1027.4 222C1031.1 219.9 1034.1 217.1 1036.5 213.7C1038.9 210.3 1040.6 206.4 1041.8 202.1C1042.9 197.8 1043.5 193.4 1043.5 188.9C1043.5 184.5 1042.9 180.2 1041.8 175.8C1040.7 171.4 1038.9 167.6 1036.5 164.2C1034.1 160.8 1031.1 158.1 1027.4 156C1023.7 153.9 1019.3 152.8 1014.3 152.8C1009.3 152.8 1004.9 153.9 1001.2 156C997.5 158.1 994.5 160.9 992.1 164.2C989.7 167.6 988 171.4 986.8 175.8C985.7 180.2 985.1 184.5 985.1 188.9C985.1 193.4 985.7 197.8 986.8 202.1C987.9 206.4 989.7 210.3 992.1 213.7C994.5 217.1 997.5 219.9 1001.2 222C1004.9 224.2 1009.3 225.2 1014.3 225.2ZM1072.7 137.7H1089.8V106.9H1112.4V137.7H1132.8V154.6H1112.4V209.4C1112.4 211.8 1112.5 213.8 1112.7 215.6C1112.9 217.3 1113.4 218.8 1114.1 220C1114.8 221.2 1115.9 222.1 1117.4 222.7C1118.9 223.3 1120.8 223.6 1123.4 223.6C1125 223.6 1126.6 223.6 1128.2 223.5C1129.8 223.4 1131.4 223.2 1133 222.8V240.3C1130.5 240.6 1128 240.8 1125.7 241.1C1123.3 241.4 1120.9 241.5 1118.4 241.5C1112.4 241.5 1107.6 240.9 1104 239.8C1100.4 238.7 1097.5 237 1095.5 234.8C1093.4 232.6 1092.1 229.9 1091.3 226.6C1090.6 223.3 1090.1 219.5 1090 215.3V154.8H1072.9V137.7H1072.7Z" fill="#191919"/>
                  <path d="M271.3 98.6H167.7L135.7 0L103.6 98.6L0 98.5L83.9 159.5L51.8 258L135.7 197.1L219.5 258L187.5 159.5L271.3 98.6Z" fill="#00B67A"/>
                  <path d="M194.699 181.8L187.499 159.5L135.699 197.1L194.699 181.8Z" fill="#005128"/>
                </svg>
              ) : i === 1 ? (
                <svg width="101" height="50" viewBox="0 0 173 77" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 rounded-[6px]">
                  <path d="M74.8725 34.2881C73.4913 34.5643 72.2138 34.7024 69.4169 34.7024C65.3769 34.7024 60.75 32.5271 60.75 24.5853V23.4804C60.75 15.435 65.3769 13.3633 69.4169 13.3633C71.4886 13.3633 73.4913 13.674 74.907 13.8812C75.2178 13.9158 75.425 14.0193 75.425 14.2956V15.953C75.425 16.1602 75.3559 16.2983 75.0452 16.2983C75.0106 16.2983 74.9761 16.2983 74.9416 16.2983C73.7676 16.1947 71.3505 15.9875 69.4514 15.9875C66.2402 15.9875 63.754 17.8521 63.754 23.4113V24.5163C63.754 30.0064 66.2402 31.9401 69.4514 31.9401C71.316 31.9401 73.664 31.7674 74.8725 31.6638C74.907 31.6638 74.9761 31.6638 75.0106 31.6638C75.3559 31.6638 75.5286 31.8365 75.5286 32.1818V33.5284C75.5286 34.0464 75.2523 34.219 74.8725 34.2881Z" fill="#44BE4C"/>
                  <path d="M99.2849 34.494H97.3513C97.0405 34.494 96.8679 34.2868 96.7988 34.0797L94.658 27.5881H86.1638L84.0575 34.0797C83.9884 34.3214 83.7467 34.494 83.4705 34.494H81.5368C81.2261 34.494 80.9844 34.2868 80.9844 34.0451C80.9844 33.9761 80.9844 33.907 81.0189 33.8379L87.0961 15.4338C87.6485 13.7073 89.2024 13.293 90.4454 13.293C91.6539 13.293 93.2078 13.6728 93.7602 15.3993L99.8374 33.8379C99.8719 33.907 99.8719 33.9761 99.8719 34.0451C99.8374 34.2868 99.6648 34.494 99.2849 34.494ZM91.0669 16.0208C90.9634 15.71 90.7562 15.5028 90.4454 15.5028C90.1001 15.5028 89.893 15.71 89.7894 16.0208L86.8544 25.1711H94.0019L91.0669 16.0208Z" fill="#44BE4C"/>
                  <path d="M125.148 34.4957H123.353C123.042 34.4957 122.766 34.185 122.766 33.8397V14.227C122.766 13.9162 123.007 13.6055 123.353 13.6055H125.148C125.459 13.6055 125.735 13.8817 125.735 14.227V33.8397C125.735 34.185 125.493 34.4957 125.148 34.4957Z" fill="#44BE4C"/>
                  <path d="M148.282 34.4957H146.245C145.727 34.4957 145.347 34.2886 145.209 33.9778L135.092 18.1979C135.057 18.1288 135.023 18.0943 134.988 18.0943C134.954 18.0943 134.954 18.1288 134.954 18.1979V33.8742C134.954 34.185 134.678 34.4957 134.367 34.4957H132.675C132.364 34.4957 132.088 34.4267 132.088 34.1159V14.5378C132.088 14.0198 132.502 13.6055 133.055 13.6055H134.85C135.783 13.6055 135.921 13.7781 136.197 14.2615L146.245 29.9379L146.314 30.0415C146.349 30.0415 146.349 29.9724 146.349 29.9379V14.227C146.349 13.9162 146.625 13.6055 146.936 13.6055H148.662C149.007 13.6055 149.249 13.9162 149.249 14.227V33.5289C149.214 34.0814 148.8 34.4957 148.282 34.4957Z" fill="#44BE4C"/>
                  <path d="M163.958 34.7376C158.813 34.7376 155.084 31.7335 155.084 24.4478V23.6882C155.084 16.4025 158.813 13.3984 163.958 13.3984C169.103 13.3984 172.798 16.4025 172.798 23.6882V24.4478C172.798 31.699 169.103 34.7376 163.958 34.7376ZM169.794 23.6882C169.794 18.198 167.549 16.0917 163.958 16.0917C160.402 16.0917 158.088 18.198 158.088 23.6882V24.4478C158.088 29.938 160.332 32.0443 163.958 32.0443C167.515 32.0443 169.794 29.938 169.794 24.4478V23.6882Z" fill="#44BE4C"/>
                  <path d="M54.8115 31.2149C52.0491 30.3862 44.4872 29.2812 37.7194 29.2812C29.3978 29.2812 17.209 32.1472 17.209 50.4823V55.7998C17.209 73.8241 29.1561 77.0008 37.0979 77.0008C42.9679 77.0008 50.9787 76.0685 54.8115 75.2398C55.9509 74.9981 56.1236 74.9291 56.1236 73.8587V51.9325C56.1236 51.2074 55.5366 50.6204 54.8115 50.6204H50.4608H44.5562H39.1697C38.4791 50.6204 37.9266 51.1383 37.9266 51.7944V57.2846C37.9266 57.9406 38.4791 58.4586 39.1697 58.4586H42.9334C43.1405 58.4586 43.3132 58.6312 43.3132 58.8384V63.707C43.3132 63.9833 43.106 64.225 42.8298 64.225C41.3795 64.3286 37.6158 64.3631 37.1324 64.3631C35.2678 64.3631 32.1947 64.1214 32.1947 55.9379V50.4823C32.1947 43.6109 36.0275 42.0916 44.0383 42.2988C47.9056 42.4024 53.2231 42.6786 55.1222 42.9204C55.9855 43.0585 56.1926 42.7477 56.1926 41.7809V32.5961C56.1236 31.7674 56.0891 31.5947 54.8115 31.2149Z" fill="#1A1A1A"/>
                  <path d="M94.4865 37.8789H84.4039C83.8514 37.8789 83.368 38.3278 83.368 38.9148V61.5315C83.368 65.606 80.8819 66.5038 78.1886 66.5038C75.4953 66.5038 73.0092 65.6405 73.0092 61.5315V38.9148C73.0092 38.3623 72.5258 37.8789 71.9733 37.8789H61.8907C61.3383 37.8789 60.8203 38.3278 60.8203 38.9148V61.5315C60.8203 74.8253 70.1778 76.8626 78.2231 76.8626C86.2339 76.8626 95.6259 74.8599 95.6259 61.5315V38.9148C95.5914 38.3278 95.0735 37.8789 94.4865 37.8789Z" fill="#1A1A1A"/>
                  <path d="M171.279 37.8789H161.197C160.644 37.8789 160.161 38.3278 160.161 38.9148V61.5315C160.161 65.606 157.675 66.5038 154.982 66.5038C152.288 66.5038 149.802 65.6405 149.802 61.5315V38.9148C149.802 38.3623 149.319 37.8789 148.766 37.8789H138.684C138.131 37.8789 137.613 38.3278 137.613 38.9148V61.5315C137.613 74.8253 146.971 76.8626 155.016 76.8626C163.027 76.8626 172.419 74.8599 172.419 61.5315V38.9148C172.35 38.3278 171.832 37.8789 171.279 37.8789Z" fill="#1A1A1A"/>
                  <path d="M127.116 61.3247C129.913 60.0817 133.055 56.8359 133.055 51.2767V50.2408C133.055 40.469 126.598 37.3613 116.17 37.3613C112.613 37.3613 104.879 37.7066 103.118 37.9829C100.321 38.4663 99.4922 39.1569 99.4922 42.3681V75.3091C99.4922 75.8616 100.01 76.345 100.563 76.345H110.645C111.198 76.345 111.681 75.8616 111.681 75.3091V63.1548H115.065L121.211 75.3091C121.487 75.827 121.695 76.345 122.592 76.345H133.4C133.883 76.345 134.332 75.9997 134.332 75.4127C134.332 75.24 134.298 75.0329 134.194 74.8602L127.116 61.3247ZM120.9 51.3457C120.9 52.7614 119.899 54.0735 117.344 54.0735H111.75V47.5475H117.344C119.968 47.5475 120.9 48.5143 120.9 50.2753V51.3457Z" fill="#1A1A1A"/>
                  <path d="M112.441 23.2731L109.437 21.7538C107.262 20.5108 106.295 19.7166 106.295 18.4736C106.295 16.6435 107.607 15.9184 110.818 15.9184C112.096 15.9184 113.788 15.9874 115.825 16.1256H115.894C116.239 16.1256 116.481 15.9184 116.481 15.6076V14.3991C116.481 14.1919 116.378 13.9502 115.929 13.8466C114.927 13.7085 112.683 13.4668 110.853 13.4668C106.122 13.4668 103.498 15.2278 103.498 18.439C103.498 20.8561 105.121 22.2718 107.573 23.6875L110.715 25.3104C113.27 26.7951 114.168 27.5893 114.168 28.9705C114.168 31.1113 112.648 32.1817 109.506 32.1817C108.194 32.1817 106.088 32.0781 104.707 31.9745H104.603C104.258 31.9745 104.016 32.1817 104.016 32.4925V33.5974C104.016 33.9427 104.12 34.0808 104.638 34.1844H104.672C105.984 34.3916 107.469 34.5988 109.506 34.5988C116.55 34.5988 117.103 30.2826 117.103 28.9705C117.068 26.7261 115.825 25.1723 112.441 23.2731Z" fill="#44BE4C"/>
                  <path d="M13.5484 48.755C13.3758 48.755 13.2377 48.7205 13.0996 48.6169C9.40492 46.3034 7.92016 42.1944 8.88698 36.6697C9.47398 33.2859 12.4435 28.4863 15.6202 25.6894C16.9323 24.5499 18.1063 23.6176 19.1767 22.8925C19.0386 22.6508 18.9005 22.34 18.7969 22.0983C18.6243 22.4091 18.3826 22.6853 18.1408 22.927C16.9668 24.032 16.4489 24.2737 16.0346 24.2737C16 24.2737 15.9655 24.2737 15.931 24.2737C15.8619 24.3428 15.6202 24.5499 14.9987 25.3441L14.8951 25.4477C12.5816 28.21 10.4063 30.8343 9.16321 33.424C7.36768 37.1531 7.71298 40.9168 8.0928 42.8505C8.12733 43.0922 8.0928 43.3684 7.92015 43.5411C7.74751 43.7483 7.5058 43.8518 7.2641 43.8518C7.02239 43.8518 6.81522 43.7483 6.64257 43.5756C2.01563 38.5343 0.841633 29.4186 11.5803 18.9907L11.6493 18.9562C13.2031 17.6786 15.2749 16.1938 16.4489 15.3996C16.4144 15.2961 16.4144 15.1579 16.4144 15.0543C15.7583 15.5032 14.9296 16.0557 13.8937 16.7808C7.60939 21.7185 3.98381 26.9325 3.12057 32.2154C3.05151 32.6298 2.70622 32.9406 2.29187 32.9406C1.9811 32.9406 1.70487 32.7679 1.53222 32.4917C-0.677659 28.4863 1.84299 24.9298 2.9134 23.4105C2.98245 23.3069 3.08604 23.1687 3.12057 23.0997L3.1551 23.0652C7.22957 17.9203 13.1341 14.4328 15.2059 13.6386C15.5857 13.5005 15.9655 13.3624 16.3108 13.2933C16.3108 13.2243 16.3108 13.1552 16.3108 13.0862C12.8924 14.2602 7.16051 18.3346 3.98381 21.8221C3.81116 21.9948 3.60398 22.0983 3.36228 22.0983C2.9134 22.0983 2.53357 21.753 2.49904 21.2696C2.39546 18.162 5.12328 14.8817 6.57351 13.5696C7.47127 12.7754 9.95739 11.118 12.5816 9.52965C11.4767 10.0821 10.3372 10.6691 9.43945 11.1871C9.30133 11.2561 9.16321 11.2906 9.0251 11.2906C8.71433 11.2906 8.40357 11.118 8.26545 10.8418C8.12733 10.5655 8.12733 10.2202 8.33451 9.97852C10.1646 7.35429 13.8247 5.04082 16.518 4.10853C16.7597 4.03947 17.0359 3.97042 17.3121 3.97042C17.8301 3.97042 18.4171 4.10854 19.0041 4.4193L19.5566 4.35024C19.522 4.31571 19.522 4.31571 19.4875 4.28118C19.2458 3.97041 19.1422 3.55607 19.2113 3.17624C19.2803 2.86548 19.4875 2.58925 19.7983 2.52019C21.1104 2.14036 24.7705 1.58789 28.8795 1.58789C32.7122 1.58789 37.9952 2.0713 41.5172 4.35024C41.828 4.55742 41.9661 4.93724 41.8625 5.31706C41.7589 5.69688 41.4136 5.93859 41.0338 5.93859C40.9993 5.93859 40.9302 5.93859 40.8957 5.93859C40.1706 5.80048 39.3764 5.69688 38.4787 5.69688C37.6154 5.69688 36.7177 5.80047 35.6818 6.04218C35.6127 6.04218 35.5437 6.07671 35.5091 6.07671C35.4055 6.07671 35.3019 6.07671 35.2329 6.04218C34.8185 5.90406 34.4042 5.76594 34.0244 5.66235C34.197 5.835 34.2661 6.04218 34.2661 6.28389C34.2315 6.62918 33.9898 6.93994 33.61 7.04353C31.4347 7.596 28.9485 8.59735 27.4638 9.46058L28.3615 10.3583C32.3324 7.52694 36.1307 6.11124 39.7217 6.11124C43.5199 6.11124 45.937 7.69959 46.9729 8.39018C49.0101 9.7023 50.2186 12.8445 50.0805 16.401C50.046 16.8499 49.7007 17.2297 49.2173 17.2297C49.0792 17.2297 48.9065 17.1952 48.7684 17.0916C44.4522 14.5364 39.2728 14.1911 35.2329 14.1911C34.3351 14.1911 33.4374 14.2256 32.6777 14.2256H32.3324C32.4015 14.2947 32.4705 14.3983 32.5051 14.5364C33.6791 14.4673 34.7495 14.3983 35.7163 14.3983C40.9302 14.3983 45.1773 15.5723 49.459 18.1965C51.7725 19.6813 52.7393 22.4091 52.5321 26.7598C52.4976 27.2087 52.1177 27.5885 51.7034 27.5885C51.6343 27.5885 51.5653 27.5885 51.4962 27.554C51.6689 27.9338 51.807 28.3827 51.876 28.8316C51.9106 29.1423 51.8415 29.4186 51.6343 29.6603C51.4617 29.8329 51.2545 29.9365 51.0128 29.9365C50.9783 29.9365 50.9438 29.9365 50.8747 29.9365C49.8388 29.7639 49.459 29.7293 48.4922 29.5912C48.1814 29.5567 48.0088 29.315 47.9397 29.2114C47.1801 28.1064 42.7948 23.8593 35.3365 23.4105H35.3019L34.0589 24.3427C34.197 24.3427 34.3351 24.3427 34.4732 24.3427C37.1665 24.3427 42.2078 24.7916 45.4191 27.6921C45.6608 27.9338 45.7643 28.2791 45.6262 28.6244C45.4881 28.9697 45.1773 29.1769 44.7975 29.1769C44.763 29.1769 44.7285 29.1769 44.7285 29.1769C43.4163 29.0387 42.0006 28.9697 40.6195 28.9697C38.4787 28.9697 36.5105 29.1423 35.371 29.384C35.1293 29.4531 34.8185 29.5222 34.4387 29.5912C30.4333 30.3854 21.0068 32.2845 17.3121 44.9913C17.174 45.4402 16.7251 45.7164 16.1036 45.7164C15.3785 45.7164 14.6189 45.3711 14.5153 44.6805C14.0319 41.8146 14.4117 35.9791 22.6987 29.0387L22.3189 28.3482L22.0081 28.6934C21.5938 29.1423 21.1104 29.5912 20.627 30.1092C16.9668 33.8038 11.9256 38.8451 14.5498 47.7537C14.6189 48.0299 14.5843 48.2716 14.4117 48.5133C14.0664 48.6169 13.8247 48.755 13.5484 48.755Z" fill="#44BE4C"/>
                  <path d="M28.7419 2.07104C33.0581 2.07104 37.8922 2.65804 41.0689 4.7298C41.3451 4.90245 41.207 5.35133 40.8962 5.35133C40.8617 5.35133 40.8617 5.35133 40.8272 5.35133C39.9639 5.21321 39.1698 5.10963 38.3065 5.10963C37.4433 5.10963 36.5455 5.21322 35.4061 5.45492C35.3715 5.45492 35.3715 5.45492 35.337 5.45492C35.3025 5.45492 35.268 5.45492 35.2334 5.42039C32.4711 4.45357 30.1231 4.10827 27.8096 4.10827C26.6356 4.10827 25.4616 4.17733 24.2186 4.31545C23.9768 4.34998 23.8387 4.59168 23.9423 4.79886L24.0114 4.93698C24.0804 5.04057 24.184 5.14415 24.3221 5.14415C25.1508 5.10962 26.5666 4.9715 28.0858 4.9715C29.8814 4.9715 31.8495 5.14416 33.2998 5.80022C33.6451 5.93833 33.576 6.31815 33.2307 6.42174C30.9518 7.00874 28.293 8.07915 26.7392 9.01144C26.5666 9.11503 26.532 9.35673 26.6356 9.49485L27.8096 10.6688C27.8787 10.7379 27.9823 10.807 28.0858 10.807C28.1549 10.807 28.224 10.7724 28.293 10.7379C32.8164 7.49215 36.5455 6.4908 39.4805 6.4908C43.0716 6.4908 45.4541 8.01009 46.4555 8.66615C48.4927 9.97827 49.4595 13.1204 49.3214 16.1935C49.3214 16.4007 49.1488 16.5043 48.9761 16.5043C48.9071 16.5043 48.8725 16.5043 48.8035 16.4698C44.4528 13.8801 39.2043 13.5003 34.9917 13.5003C33.7487 13.5003 32.6092 13.5348 31.5733 13.5348C31.2625 13.5348 31.1244 13.9146 31.3661 14.1218L31.6769 14.3635C31.7114 14.398 31.746 14.4671 31.7805 14.5016L31.815 14.6397C31.8495 14.7778 31.9877 14.8469 32.1258 14.8469C32.1258 14.8469 32.1258 14.8469 32.1603 14.8469C33.2653 14.7778 34.3702 14.7088 35.4751 14.7088C39.8604 14.7088 44.1765 15.503 48.9761 18.438C50.9098 19.681 52.0147 21.9945 51.8075 26.5524C51.8075 26.725 51.6349 26.8631 51.4968 26.8631C51.4622 26.8631 51.4622 26.8631 51.4277 26.8631C50.2882 26.5869 49.3214 23.79 46.7662 22.8577C46.7317 22.8577 46.6972 22.8232 46.6626 22.8232C46.3864 22.8232 46.2138 23.203 46.4555 23.4102C48.0093 24.7568 50.7716 26.0344 51.1515 28.7277C51.186 28.9694 51.0479 29.2457 50.8407 29.2457H50.8062C49.7358 29.073 49.3559 29.0385 48.4236 28.9004C48.3546 28.9004 48.2855 28.8313 48.251 28.7622C47.664 27.899 43.3133 23.203 35.2334 22.7541C35.1644 22.7541 35.0953 22.7196 35.0608 22.7196L33.1617 24.1353C32.8854 24.3425 33.0235 24.7223 33.3688 24.7223C33.6796 24.7223 33.9904 24.6878 34.3357 24.6878C37.7195 24.6878 42.1393 25.3784 44.9362 27.899C45.1779 28.1062 45.0052 28.486 44.6945 28.486H44.6599C43.2788 28.3479 41.8631 28.2788 40.5164 28.2788C38.3065 28.2788 36.3038 28.4515 35.1644 28.7277C32.1948 29.4528 20.8692 30.4887 16.7257 44.6803C16.6566 44.922 16.3459 45.0601 16.0006 45.0601C15.5172 45.0601 14.9647 44.8184 14.8956 44.4386C14.4122 41.7108 14.792 36.0479 23.01 29.2111C23.1481 29.1075 23.1827 28.9349 23.0791 28.7968C22.9064 28.486 22.7338 28.1407 22.4921 27.7264C22.423 27.6228 22.3194 27.5537 22.1813 27.5537C22.0777 27.5537 22.0087 27.5882 21.9396 27.6573C21.767 27.8299 21.6289 28.0026 21.4562 28.1752C17.9342 31.9735 10.8212 37.3255 13.8943 47.7189C13.9633 47.9606 13.7907 48.1677 13.5835 48.1677C13.5144 48.1677 13.4799 48.1677 13.4109 48.1332C9.64716 45.8197 8.57675 41.6417 9.43998 36.704C9.95792 33.5964 12.7548 28.8313 16.0006 26.0344C17.4163 24.7914 18.6248 23.8591 19.6261 23.1685C19.7643 23.0649 19.7988 22.8922 19.7297 22.7541C19.5226 22.3743 19.3154 21.9254 19.1082 21.4765C19.0391 21.3384 18.9356 21.2694 18.7974 21.2694C18.6939 21.2694 18.5557 21.3384 18.5212 21.442C18.3486 21.8218 18.1069 22.1671 17.7961 22.4434C16.6566 23.5483 16.2768 23.6519 16.0351 23.6519C15.966 23.6519 15.9315 23.6519 15.897 23.6519C15.6898 23.6519 15.4826 23.7555 14.5849 24.9295C12.2369 27.7609 9.99245 30.4196 8.68034 33.1129C7.02293 36.5659 7.05745 40.226 7.57539 42.8502C7.60992 43.0919 7.43728 43.2646 7.2301 43.2646C7.16104 43.2646 7.05746 43.23 6.9884 43.161C3.36281 39.2246 0.358755 30.5232 11.8916 19.3012C11.8916 19.3012 11.8916 19.3012 11.9261 19.2667C13.4799 17.9546 15.5517 16.5043 16.7602 15.6411C16.8638 15.572 16.9329 15.4339 16.8983 15.2958C16.8293 14.8814 16.7602 14.4326 16.7602 13.9837C16.2077 14.3635 15.2064 15.0541 13.4799 16.1935C13.4799 16.1935 13.4799 16.1935 13.4454 16.1935C4.70946 23.0649 2.98299 28.9349 2.49958 31.9735C2.46505 32.1461 2.32693 32.2497 2.15428 32.2497C2.0507 32.2497 1.91258 32.1806 1.84352 32.0771C-0.366361 28.0371 2.53411 24.5151 3.43187 23.203C3.43187 23.203 3.43187 23.203 3.43187 23.1685C7.54087 17.9891 13.3418 14.6397 15.2409 13.9146C15.7243 13.742 16.1041 13.6384 16.4149 13.5693C16.5876 13.5348 16.6911 13.3967 16.6911 13.224C16.6911 12.9823 16.6911 12.7751 16.6911 12.637C16.6911 12.4299 16.5185 12.2917 16.3459 12.2917C16.3113 12.2917 16.2423 12.2917 16.2077 12.3263C16.1387 12.3608 16.1042 12.3608 16.0351 12.3953C12.444 13.6038 6.57404 17.851 3.4664 21.2694C3.39734 21.3384 3.29375 21.373 3.22469 21.373C3.05205 21.373 2.8794 21.2348 2.8794 21.0622C2.81034 18.1963 5.40005 15.0195 6.78122 13.7765C8.12787 12.568 13.4454 9.21862 16.9329 7.35404C17.0364 7.31951 17.071 7.21592 17.1055 7.11233C17.14 6.93968 17.1746 6.80157 17.2091 6.62892C17.0364 6.69798 16.8983 6.76704 16.7602 6.80157C15.7589 7.11233 11.5463 9.11503 9.06016 10.5307C8.9911 10.5653 8.95657 10.5653 8.88751 10.5653C8.64581 10.5653 8.43863 10.289 8.61128 10.0473C10.3032 7.59574 13.8252 5.3168 16.553 4.38451C16.7602 4.31545 16.9674 4.28091 17.1746 4.28091C17.727 4.28091 18.245 4.4881 18.6939 4.69527C18.7284 4.7298 18.7974 4.7298 18.832 4.7298H18.8665L21.3871 4.38451L21.4217 4.31545C19.5916 4.21186 19.5226 3.38316 19.5916 3.00333C19.6261 2.86522 19.6952 2.79615 19.8333 2.76162C20.9728 2.65804 24.5984 2.07104 28.7419 2.07104ZM28.7419 1.03516C24.5984 1.03516 20.8347 1.58763 19.5226 1.96745C19.0046 2.10557 18.6593 2.51993 18.5557 3.03787C18.5212 3.24504 18.5212 3.48675 18.5557 3.69392C18.0723 3.52128 17.6234 3.41768 17.1746 3.41768C16.8293 3.41768 16.5185 3.45222 16.2077 3.55581C13.4454 4.4881 9.64716 6.90515 7.74804 9.63297C7.47181 10.0473 7.43728 10.5998 7.64446 11.0487C7.78257 11.2904 7.95522 11.463 8.1624 11.6011C7.2301 12.2227 6.50499 12.7751 6.09063 13.155C4.57134 14.5016 1.77446 17.9545 1.84352 21.2348C1.84352 21.8218 2.22334 22.3053 2.77581 22.4779C2.74128 22.547 2.67223 22.5815 2.6377 22.6505C2.60317 22.6851 2.60317 22.7196 2.56864 22.7196C2.49958 22.8232 2.43052 22.9268 2.36146 23.0304C1.22199 24.6187 -1.40224 28.3479 0.945756 32.6641C1.18746 33.1129 1.63634 33.3892 2.15428 33.3892C2.36146 33.3892 2.56864 33.3547 2.74128 33.2511C2.70675 33.4928 2.70675 33.6999 2.67222 33.9417C2.39599 38.9829 4.74399 42.3323 6.19422 43.8861C6.47045 44.1623 6.81575 44.335 7.19557 44.335C7.60992 44.335 7.98975 44.1623 8.26598 43.817C8.4041 43.6444 8.50769 43.4718 8.54222 43.2646C9.23281 45.7162 10.6485 47.6498 12.8239 48.9964C13.031 49.1346 13.2727 49.2036 13.549 49.2036C13.9633 49.2036 14.3777 48.9964 14.6539 48.6512C14.9302 48.3059 14.9992 47.857 14.8611 47.4426C14.6884 46.8211 14.5158 46.1996 14.4122 45.6126C14.8266 45.9233 15.379 46.096 15.9315 46.096C16.7947 46.096 17.4508 45.6816 17.6234 44.9911C21.249 32.595 30.4338 30.7304 34.3702 29.9362C34.75 29.8672 35.0608 29.7981 35.337 29.7291C36.4074 29.4528 38.3411 29.3147 40.4474 29.3147C41.794 29.3147 43.2097 29.3838 44.4873 29.4874C44.5218 29.4874 44.5909 29.4874 44.6254 29.4874C45.2124 29.4874 45.7304 29.1421 45.9375 28.5896C46.0066 28.3824 46.0411 28.1407 46.0066 27.899C46.6972 28.486 47.1461 29.004 47.3532 29.2802C47.5949 29.6255 47.9057 29.8327 48.251 29.8672C49.2178 30.0053 49.5631 30.0398 50.6335 30.2125C50.7026 30.2125 50.7716 30.2125 50.8407 30.2125C51.2205 30.2125 51.6003 30.0398 51.8421 29.7636C52.1183 29.4183 52.2564 28.9694 52.1873 28.5205C52.1528 28.2443 52.0838 28.0026 52.0147 27.7609C52.4981 27.5537 52.8434 27.1048 52.8779 26.5524C53.1196 21.9945 52.0492 19.1286 49.5631 17.5402C49.4941 17.5057 49.4595 17.4711 49.3905 17.4366C49.9429 17.264 50.3573 16.7806 50.3918 16.159C50.5645 12.3953 49.2869 9.14956 47.077 7.69933C46.3174 7.21592 44.6254 6.11098 42.1393 5.59304C42.2084 5.48945 42.2429 5.38586 42.2774 5.28228C42.4501 4.69528 42.2084 4.07375 41.6904 3.72845C38.0303 1.5531 32.6092 1.06969 28.7419 1.03516ZM28.0858 9.46032C28.3621 9.3222 28.6383 9.18409 28.9145 9.04597C28.6728 9.21862 28.4311 9.39127 28.1549 9.56391L28.0858 9.46032Z" fill="black"/>
                  <path d="M25.0471 34.356C24.391 34.356 23.8731 34.1834 23.5278 33.8381C23.0098 33.3201 23.0444 32.5605 23.0789 32.008C23.0789 31.8699 23.0789 31.7663 23.0789 31.6627C23.0444 31.3519 23.0444 30.8685 23.0789 30.1089C23.0789 28.4515 23.0789 25.6891 22.9062 21.442V21.1313L23.148 20.9586C23.3551 20.8205 25.1161 19.6465 26.2211 19.6465C26.67 19.6465 26.9462 19.8537 27.0843 20.0263C27.257 20.2335 27.9821 21.0967 28.8798 22.1671C31.0207 24.6878 33.9211 28.1752 34.4736 28.9349C34.9225 29.5564 34.8879 30.0744 34.8189 30.4197C34.6117 31.1793 33.8521 31.5936 33.4377 31.7663C33.3341 31.8008 30.9516 32.8367 28.5691 33.4582C27.0152 34.0798 25.8758 34.356 25.0471 34.356Z" fill="#FCEE21"/>
                  <path d="M26.1863 20.1999C26.3935 20.1999 26.5316 20.2345 26.6352 20.3726C27.2222 21.0977 33.2303 28.1762 33.9899 29.2812C34.7496 30.3861 33.8173 31.0767 33.1612 31.3529C32.5052 31.6292 30.3643 32.4924 28.3271 33.0449C26.7733 33.6319 25.7374 33.8736 25.0468 33.8736C23.2168 33.8736 23.6656 32.3543 23.6311 31.6637C23.562 30.6969 23.7347 27.6238 23.4239 21.443C23.4239 21.4085 25.2195 20.1999 26.1863 20.1999ZM26.1863 19.1641C25.0123 19.1641 23.3203 20.2345 22.8369 20.5452L22.3535 20.856L22.388 21.443C22.5952 25.6901 22.5952 28.4525 22.5607 30.1099C22.5607 30.8695 22.5607 31.3529 22.5607 31.6982C22.5607 31.7673 22.5607 31.8709 22.5607 32.009C22.5262 32.5615 22.4916 33.4938 23.1477 34.2189C23.5966 34.6678 24.2181 34.9095 25.0123 34.9095C25.91 34.9095 27.084 34.6332 28.6379 34.0462C31.0895 33.3902 33.472 32.3543 33.5756 32.3198C34.0935 32.1126 34.9913 31.5946 35.2675 30.6278C35.4056 30.1789 35.4056 29.4883 34.8532 28.6942C34.3352 27.9691 31.9182 25.0686 29.2249 21.8919C28.3271 20.8215 27.602 19.9582 27.4293 19.7511C27.2567 19.5094 26.8769 19.1641 26.1863 19.1641Z" fill="black"/>
                  <path d="M19.6269 28.7638C17.4861 28.7638 15.2417 27.6588 13.7915 25.8633C12.4103 24.1714 11.8923 22.1342 12.3412 20.0969L12.4448 19.6826C13.0663 16.7476 14.9309 7.76993 17.7969 1.17482L18.004 0.691406L18.4874 0.898585C21.526 2.31429 34.1983 13.0184 35.3033 14.1233C37.0297 15.8498 37.5131 18.2669 36.5463 20.5803C35.5104 23.0664 33.197 24.6548 30.5727 24.6548C28.9844 24.6548 27.396 24.0678 25.8422 22.9283C24.979 26.623 22.7 28.7638 19.6269 28.7638Z" fill="#FCEE21"/>
                  <path d="M18.2445 1.38117C21.2485 2.76235 33.8863 13.501 34.8876 14.5023C38.4787 18.0934 35.4056 24.136 30.5369 24.136C28.9831 24.136 27.2567 23.5145 25.4957 21.9952C24.736 26.484 22.2154 28.245 19.6257 28.245C15.862 28.245 11.9256 24.5504 12.8234 20.1997C13.3413 17.8862 15.275 8.28705 18.2445 1.38117ZM17.7265 0L17.3122 0.966829C14.4463 7.631 12.5471 16.6086 11.9256 19.5782L11.822 19.9925C11.3731 22.1679 11.9256 24.3777 13.3758 26.2078C14.9297 28.1069 17.3122 29.3154 19.6257 29.3154C22.7333 29.3154 25.0813 27.2782 26.1517 23.7907C27.5674 24.6885 29.0867 25.1719 30.5715 25.1719C33.3684 25.1719 35.9235 23.4454 37.0285 20.7522C38.0643 18.266 37.5464 15.6073 35.6818 13.7427C34.5424 12.6032 21.9046 1.89912 18.7279 0.414357L17.7265 0Z" fill="black"/>
                </svg>
              ) : i === 2 ? (
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Bitcointalk.org_logo.png"
                  alt="BitcoinTalk"
                  width={86}
                  height={48}
                  className="object-contain shrink-0"
                />
              ) : (
                <span className="text-[14px] font-medium text-slate-900">
                  {row.platform}
                </span>
              )}
            </div>
            <div className="flex-1 flex items-center px-3 bg-white border-l border-[#e4e8ec]">
              {i === 0 ? (
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5">
                    {[0, 1, 2, 3, 4].map((star) => {
                      const fill = star < 1 ? 1 : star < 2 ? 0.8 : 0;
                      return (
                        <div key={star} className="relative size-[18px]">
                          <svg width="18" height="17" viewBox="0 0 112 107" fill="none" className="absolute inset-0">
                            <path d="M111.585 40.5539H68.9746L55.8131 0L42.6104 40.5539L0 40.5128L34.5079 65.602L21.3052 106.115L55.8131 81.0668L90.2798 106.115L77.1183 65.602L111.585 40.5539Z" fill="#dcdce6"/>
                          </svg>
                          {fill > 0 && (
                            <div className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                              <svg width="18" height="17" viewBox="0 0 112 107" fill="none">
                                <path d="M111.585 40.5539H68.9746L55.8131 0L42.6104 40.5539L0 40.5128L34.5079 65.602L21.3052 106.115L55.8131 81.0668L90.2798 106.115L77.1183 65.602L111.585 40.5539Z" fill="#00B67A"/>
                                <path d="M80.0791 74.7735L77.1177 65.6016L55.8125 81.0664L80.0791 74.7735Z" fill="#005128"/>
                              </svg>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <span className="text-[14px] font-medium text-slate-900">1.8 Poor</span>
                </div>
              ) : i === 1 ? (
                <div className="flex items-center gap-1.5">
                  <span className="text-[14px] font-medium text-slate-900">Safety Index:</span>
                  <span className="px-2 py-0.5 rounded-full text-[13px] font-semibold bg-blue-100 text-blue-700">B+</span>
                </div>
              ) : i === 2 ? (
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5">
                    {[0, 1, 2, 3, 4].map((star) => {
                      const fill = star < 4 ? 1 : star < 5 ? 0.5 : 0;
                      return (
                        <div key={star} className="relative size-[16px]">
                          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" className="absolute inset-0">
                            <path d="M3.61065 14.9435C3.22465 15.1415 2.78665 14.7945 2.86465 14.3515L3.69465 9.6215L0.171653 6.2655C-0.157347 5.9515 0.0136534 5.3775 0.454653 5.3155L5.35265 4.6195L7.53665 0.2925C7.73365 -0.0975 8.26665 -0.0975 8.46365 0.2925L10.6477 4.6195L15.5457 5.3155C15.9867 5.3775 16.1577 5.9515 15.8277 6.2655L12.3057 9.6215L13.1357 14.3515C13.2137 14.7945 12.7757 15.1415 12.3897 14.9435L7.99865 12.6875L3.61065 14.9435Z" fill="#dcdce6"/>
                          </svg>
                          {fill > 0 && (
                            <div className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                              <svg width="16" height="15" viewBox="0 0 16 15" fill="none">
                                <path d="M3.61065 14.9435C3.22465 15.1415 2.78665 14.7945 2.86465 14.3515L3.69465 9.6215L0.171653 6.2655C-0.157347 5.9515 0.0136534 5.3775 0.454653 5.3155L5.35265 4.6195L7.53665 0.2925C7.73365 -0.0975 8.26665 -0.0975 8.46365 0.2925L10.6477 4.6195L15.5457 5.3155C15.9867 5.3775 16.1577 5.9515 15.8277 6.2655L12.3057 9.6215L13.1357 14.3515C13.2137 14.7945 12.7757 15.1415 12.3897 14.9435L7.99865 12.6875L3.61065 14.9435Z" fill="black"/>
                              </svg>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <span className="text-[14px] font-medium text-amber-600">4.5/5</span>
                </div>
              ) : (
                <span className="text-[14px] font-medium text-slate-900">{row.rating}</span>
              )}
            </div>
            <div className="flex-1 flex items-center px-3 bg-white border-l border-[#e4e8ec]">
              <span className="text-[14px] font-medium text-slate-900">
                {row.notes}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[18px] leading-[28.8px] text-black">
        <span className="font-bold">Important: </span>
        When checking reviews, make sure you are looking at those for{" "}
        {casino.name} - not the similarly named Sol Casino.
      </p>

      {casino.screenshots.length > 0 && (
        <div
          data-name="reputation-screenshot-1"
          className="relative w-full h-[391px] bg-[#11181f] overflow-hidden"
        >
          <Image
            src={casino.screenshots[0]}
            alt={`${casino.name} reputation screenshot`}
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}

const SCORING_TABLE = [
  { category: "Overall Reputation", score: 2.5, weight: "15%", weighted: 0.375 },
  { category: "Size and Revenue", score: 3.0, weight: "10%", weighted: 0.3 },
  { category: "Deposits & Withdrawals", score: 3.0, weight: "15%", weighted: 0.45 },
  { category: "Bonuses & VIP Program", score: 2.5, weight: "15%", weighted: 0.375 },
  { category: "Fairness of Terms", score: 2.5, weight: "15%", weighted: 0.375 },
  { category: "User Experience", score: 3.0, weight: "15%", weighted: 0.45 },
  { category: "Crypto-Specific Features", score: 4.5, weight: "15%", weighted: 0.675 },
  { category: "Final Score", score: 0, weight: "", weighted: 3 },
];

const SCORING_ICONS = [
  // Overall Reputation
  <svg key="rep" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="1" y="0.5" width="22" height="22" rx="6" fill="#0D337D"/><g clipPath="url(#cr0)"><path d="M18.8 4.79805H16.8V4.39805C16.8 4.15805 16.64 3.99805 16.4 3.99805H7.6C7.36 3.99805 7.2 4.15805 7.2 4.39805V4.79805H5.2C4.56 4.79805 4 5.35805 4 5.99805V7.67805C4 9.51805 5.44 11.198 7.68 11.198C8.24 12.398 9.2 13.278 10.4 13.678V15.998H8.08C7.92 15.998 7.76 16.078 7.68 16.238L6.4 19.438C6.32 19.678 6.48 19.998 6.8 19.998H17.2C17.52 19.998 17.68 19.678 17.6 19.438L16.32 16.238C16.24 16.078 16.08 15.998 15.92 15.998H13.6V13.678C14.8 13.278 15.84 12.318 16.32 11.198C18.56 11.198 20 9.51805 20 7.67805V5.99805C20 5.35805 19.44 4.79805 18.8 4.79805ZM5.6 7.67805V6.39805H7.2V9.59805C6.32 9.43805 5.6 8.63805 5.6 7.67805ZM18.4 7.67805C18.4 8.63805 17.68 9.43805 16.8 9.59805V6.39805H18.4V7.67805Z" fill="white"/></g><defs><clipPath id="cr0"><rect width="16" height="16" fill="white" transform="translate(4 3.99805)"/></clipPath></defs></svg>,
  // Size and Revenue
  <svg key="rev" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="1" y="1.5" width="22" height="22" rx="6" fill="#0D337D"/><g clipPath="url(#cr1)"><path d="M9.67475 7.89126H14.3254L15.7983 5.17201C15.8457 5.08453 15.864 4.98424 15.8507 4.88565C15.8373 4.78707 15.7928 4.6953 15.7238 4.62363C15.6548 4.55196 15.5648 4.50411 15.4668 4.487C15.3688 4.46989 15.2679 4.48441 15.1787 4.52845C14.1246 5.04889 13.2028 4.8268 12.1356 4.56976C11.0801 4.31555 9.88403 4.02742 8.464 4.50439C8.39919 4.52616 8.33993 4.56185 8.29037 4.60895C8.24081 4.65604 8.20216 4.71341 8.17711 4.77703C8.15207 4.84065 8.14124 4.90897 8.1454 4.97722C8.14955 5.04546 8.16858 5.11197 8.20116 5.17208L9.67475 7.89126Z" fill="white"/><path d="M14.8148 9.01875C14.7539 8.95565 14.6925 8.8921 14.6308 8.82812H9.36748C9.30584 8.89202 9.24449 8.95556 9.18345 9.01875C8.23311 10.002 7.33542 10.9308 6.6672 11.9704C5.89889 13.1659 5.54102 14.3377 5.54102 15.6586C5.54102 17.1911 6.3673 18.3611 7.93045 19.0421C9.26742 19.6245 10.8808 19.7467 11.9988 19.7467C13.1249 19.7467 14.7472 19.6244 16.0803 19.0418C17.6354 18.3622 18.4574 17.1922 18.4574 15.6586C18.4574 14.3378 18.0995 13.1658 17.3312 11.9704C16.663 10.9308 15.7653 10.002 14.8148 9.01875ZM12.0951 13.3605C12.4309 13.4311 12.778 13.5042 13.0757 13.7004C13.4626 13.9555 13.6588 14.3496 13.6588 14.872C13.6588 15.5615 13.1552 16.1451 12.4674 16.3309V16.5727C12.4674 16.697 12.418 16.8163 12.3301 16.9042C12.2422 16.9921 12.123 17.0415 11.9986 17.0415C11.8743 17.0415 11.7551 16.9921 11.6672 16.9042C11.5793 16.8163 11.5299 16.697 11.5299 16.5727V16.3309C10.8421 16.1451 10.3385 15.5615 10.3385 14.872C10.3385 14.7476 10.3879 14.6284 10.4758 14.5405C10.5637 14.4526 10.6829 14.4032 10.8072 14.4032C10.9316 14.4032 11.0508 14.4526 11.1387 14.5405C11.2266 14.6284 11.276 14.7476 11.276 14.872C11.276 15.1938 11.6002 15.4556 11.9986 15.4556C12.3971 15.4556 12.7213 15.1937 12.7213 14.872C12.7213 14.5095 12.6065 14.4261 11.9021 14.2779C11.5664 14.2073 11.2193 14.1341 10.9215 13.9379C10.5346 13.6829 10.3385 13.2887 10.3385 12.7664C10.3385 12.0764 10.8421 11.4925 11.5299 11.3066V11.0656C11.5299 10.9413 11.5793 10.8221 11.6672 10.7342C11.7551 10.6463 11.8743 10.5969 11.9986 10.5969C12.123 10.5969 12.2422 10.6463 12.3301 10.7342C12.418 10.8221 12.4674 10.9413 12.4674 11.0656V11.3065C13.1552 11.4924 13.6588 12.0763 13.6588 12.7663C13.6588 12.8906 13.6094 13.0098 13.5215 13.0977C13.4336 13.1856 13.3144 13.235 13.19 13.235C13.0657 13.235 12.9465 13.1856 12.8586 13.0977C12.7707 13.0098 12.7213 12.8906 12.7213 12.7663C12.7213 12.444 12.3971 12.1819 11.9986 12.1819C11.6002 12.1819 11.276 12.4441 11.276 12.7663C11.2761 13.129 11.391 13.2123 12.0953 13.3605H12.0951Z" fill="white"/></g><defs><clipPath id="cr1"><rect width="16" height="16" fill="white" transform="translate(4 3.99805)"/></clipPath></defs></svg>,
  // Deposits & Withdrawals
  <svg key="dep" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="1" y="0.5" width="22" height="22" rx="6" fill="#0D337D"/><path fillRule="evenodd" clipRule="evenodd" d="M16.798 4.79883H7.19805C5.43805 4.79883 3.99805 6.23883 3.99805 7.99883C3.99805 9.35883 4.79805 10.4788 5.99805 10.9588V7.99883C5.99805 7.67883 6.15805 7.35883 6.31805 7.11883C6.47805 6.87883 6.87805 6.79883 7.19805 6.79883H16.798C17.118 6.79883 17.438 6.95883 17.678 7.11883C17.918 7.27883 17.998 7.67883 17.998 7.99883V10.9588C19.198 10.4788 19.998 9.35883 19.998 7.99883C19.998 6.23883 18.558 4.79883 16.798 4.79883ZM16.798 17.5988V7.99883H7.19805V17.5988C7.19805 18.4788 7.91805 19.1988 8.79805 19.1988H15.198C16.078 19.1988 16.798 18.4788 16.798 17.5988ZM11.358 12.3188L10.798 12.8788C10.558 13.1188 10.158 13.1188 9.91805 12.8788C9.67805 12.6388 9.67805 12.2388 9.91805 11.9988L10.958 10.9588C11.518 10.3988 12.398 10.3988 12.958 10.9588L13.998 11.9988C14.238 12.2388 14.238 12.6388 13.998 12.8788C13.758 13.1188 13.358 13.1188 13.118 12.8788L12.558 12.3188V15.6788C12.558 15.9988 12.318 16.3188 11.918 16.3188C11.518 16.3188 11.278 16.0788 11.278 15.6788V12.3188H11.358Z" fill="white"/></svg>,
  // Bonuses & VIP Program
  <svg key="bon" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="1" y="1.25" width="22" height="22" rx="6" fill="#0D337D"/><path fillRule="evenodd" clipRule="evenodd" d="M4.91774 14.0334L4.01209 8.37399C3.95255 8.00265 4.11627 7.63056 4.43031 7.42368C4.74435 7.2168 5.14992 7.21308 5.46768 7.41326L8.3052 9.20522L11.2789 5.79693C11.4605 5.58856 11.7239 5.46875 12 5.46875C12.2761 5.46875 12.5395 5.58856 12.7211 5.79693L15.6948 9.20522L18.5323 7.41326C18.8501 7.21308 19.2557 7.2168 19.5697 7.42368C19.8837 7.63056 20.0474 8.00265 19.9879 8.37399L19.0823 14.0334H4.91774ZM18.9037 15.1496L18.6395 16.7995C18.5346 17.4573 17.9668 17.941 17.3015 17.941H6.69854C6.03325 17.941 5.46545 17.4573 5.36052 16.7995L5.09634 15.1496H18.9037Z" fill="white"/></svg>,
  // Fairness of Terms
  <svg key="fair" width="22" height="22" viewBox="0 0 22 22" fill="none"><rect width="22" height="22" rx="6" fill="#0D337D"/><path d="M8.91507 11.3848C8.93931 11.3848 8.93931 11.4091 8.93931 11.4091L11.5575 8.79087L11.5333 8.76663L8.52719 5.76057C8.50295 5.76057 8.50295 5.73633 8.50295 5.73633L5.88477 8.35451L5.90901 8.37875L8.91507 11.3848Z" fill="white"/><path d="M6.8545 13.4449C7.12117 13.7115 7.58177 13.7115 7.87268 13.4449C7.96965 13.2509 9.30298 12.4509 8.57571 11.7236L5.56965 8.71758C5.27874 8.45091 4.84238 8.45091 4.55147 8.71758L3.84844 9.42061C3.58177 9.68727 3.58177 10.1479 3.84844 10.4388L6.8545 13.4449Z" fill="white"/><path d="M11.8721 8.42727C12.1387 8.69394 12.5993 8.69394 12.8903 8.42727L13.5933 7.72424C13.8842 7.43333 13.86 6.99697 13.5933 6.70606L10.5872 3.7C10.3206 3.43333 9.85995 3.43333 9.56905 3.7L8.86602 4.42727C8.59935 4.69394 8.59935 5.15455 8.86602 5.44545L11.8721 8.42727Z" fill="white"/><path d="M17.6916 15.628L11.3401 9.71289L9.86133 11.1917L15.7765 17.5674C16.2856 18.125 17.1825 18.1735 17.7401 17.5917C18.2977 17.0341 18.2734 16.1614 17.6916 15.628Z" fill="white"/><path d="M11.5091 17.0326C11.6061 16.8871 11.6545 16.7174 11.6545 16.5477C11.6545 16.0871 11.2909 15.6992 10.8545 15.6992H4.84242C4.40606 15.6992 4.04242 16.0629 4.04242 16.5477C4.04242 16.7416 4.09091 16.9113 4.18788 17.0326C3.48485 17.2992 3 17.978 3 18.778C3 18.8992 3.09697 19.0204 3.24242 19.0204H12.4788C12.6 19.0204 12.7212 18.8992 12.7212 18.778C12.697 17.978 12.2121 17.2992 11.5091 17.0326Z" fill="white"/></svg>,
  // User Experience
  <svg key="ux" width="22" height="22" viewBox="0 0 22 22" fill="none"><rect width="22" height="22" rx="6" fill="#0D337D"/><path d="M3 8.21875H5.875V9.15625H3V8.21875Z" fill="white"/><path d="M5.875 5.40625H3.46875C3.20984 5.40625 3 5.61609 3 5.875V7.28125H5.875V5.40625Z" fill="white"/><path d="M5.875 12.9062V10.0938H3V16.1875C3 16.4464 3.20984 16.6562 3.46875 16.6562H8.15625C8.41516 16.6562 8.625 16.4464 8.625 16.1875V14.7812H7.75C6.71606 14.7812 5.875 13.9402 5.875 12.9062ZM5.8125 15.7189C5.55359 15.7189 5.34375 15.5089 5.34375 15.2501C5.34375 14.9912 5.55359 14.7814 5.8125 14.7814C6.07141 14.7814 6.28125 14.9912 6.28125 15.2501C6.28125 15.5089 6.07141 15.7189 5.8125 15.7189Z" fill="white"/><path d="M18.0625 4.46875H7.75C7.23303 4.46875 6.8125 4.88928 6.8125 5.40625V12.9062C6.8125 13.4232 7.23303 13.8438 7.75 13.8438H11.0312V15.7188H10.0938C9.83484 15.7188 9.625 15.9286 9.625 16.1875C9.625 16.4464 9.83484 16.6562 10.0938 16.6562H15.7188C15.9777 16.6562 16.1875 16.4464 16.1875 16.1875C16.1875 15.9286 15.9777 15.7188 15.7188 15.7188H14.7812V13.8438H18.0625C18.5795 13.8438 19 13.4232 19 12.9062V5.40625C19 4.88928 18.5795 4.46875 18.0625 4.46875Z" fill="white"/></svg>,
  // Crypto-Specific Features
  <svg key="crypto" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="1" y="1.5" width="22" height="22" rx="6" fill="#0D337D"/><path d="M11.9928 11.9269H11.3009V10.29H12.0656C12.4456 10.29 12.7291 10.3575 12.9156 10.4922C13.1022 10.6269 13.1956 10.8422 13.1956 11.1378C13.1956 11.4075 13.0956 11.6062 12.8959 11.7347C12.6963 11.8631 12.395 11.9272 11.9922 11.9272L11.9928 11.9269ZM13.045 13.1569C12.9088 13.0903 12.73 13.0569 12.5091 13.0569H11.3009V14.7766H12.4263C12.7641 14.7766 13.0181 14.71 13.1888 14.5769C13.3594 14.4437 13.4444 14.2406 13.4444 13.9678C13.4444 13.7631 13.4119 13.5934 13.3469 13.4587C13.2819 13.3241 13.1812 13.2234 13.0447 13.1566L13.045 13.1569ZM20 12.4688C20 16.8872 16.4184 20.4688 12 20.4688C7.58156 20.4688 4 16.8872 4 12.4688C4 8.05031 7.58156 4.46875 12 4.46875C16.4181 4.46875 20 8.05031 20 12.4688ZM15.1447 13.9728C15.1447 13.7294 15.1025 13.5028 15.0181 13.2931C14.9337 13.0838 14.8022 12.905 14.6234 12.7572C14.4447 12.6094 14.2144 12.5047 13.9316 12.4431C14.2628 12.3069 14.5081 12.1062 14.6672 11.8416C14.8263 11.5769 14.9059 11.2772 14.9059 10.9428C14.9059 10.2934 14.6559 9.80469 14.1556 9.47656C13.8397 9.26937 13.4456 9.12781 12.9731 9.05156H13.0238V7.78125H12.2425V8.98688C12.1844 8.98531 12.1256 8.98469 12.0659 8.98469H11.6384V7.78156H10.8572V8.98469H8.85563V9.98812L9.59125 10.1441V14.9231L8.85563 15.0791V16.0778H10.8572V17.1566H11.6384V16.0778H12.2425V17.1566H13.0238V16.0472C13.6197 15.9828 14.0947 15.8162 14.4481 15.5469C14.9125 15.1928 15.1447 14.6684 15.1447 13.9734V13.9728Z" fill="white"/></svg>,
  // Final Score
  <svg key="final" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="1" y="0.5" width="22" height="22" rx="6" fill="#0D337D"/><path d="M17.9805 4.72654C14.4634 2.19139 10.947 7.12179 7.43001 5.40708V5.04232C7.43001 4.58931 7.06248 4.22178 6.60951 4.22178C6.15653 4.22178 5.78906 4.58931 5.78906 5.04232V19.1659C5.78906 19.6188 6.15653 19.9863 6.60951 19.9863C7.06248 19.9863 7.43001 19.6188 7.43001 19.1659V13.1825C10.7728 14.8118 14.1157 10.4385 17.4592 12.1788C17.6135 12.2595 17.7989 12.2542 17.9479 12.1633C18.0969 12.0731 18.1878 11.9117 18.1878 11.737C18.1878 9.53525 18.1878 7.33334 18.1878 5.13093C18.1877 4.97127 18.1102 4.82 17.9805 4.72654Z" fill="white"/></svg>,
];

function VerdictSection({ casino }: { casino: CasinoReview }) {
  return (
    <div id="toc-verdict" data-name="verdict-section" className="flex flex-col gap-[20px]">
      {/* Review Summary Card */}
      <div data-name="review-summary-card" className="bg-[#f8f8f8] border border-[#dedede] p-[10px]">
        <div data-name="review-card-inner" className="bg-[#f8f8f8] p-[25px]">
          <div data-name="review-card-content" className="flex gap-[10px]">
            <div data-name="review-card-left" className="flex flex-col gap-[15px] flex-1">
              {/* Casino Logo */}
              <div data-name="review-logo" className="w-[99px] h-[89px] rounded-[12px] bg-[#060d17] border border-slate-200 overflow-hidden relative">
                <div className="absolute inset-0 bg-white">
                  <Image
                    src={casino.logo}
                    alt={casino.name}
                    fill
                    className="object-contain p-1"
                  />
                </div>
              </div>

              {/* Rating Badge */}
              <ExpertRatingCard casino={casino} />

              {/* Casino Name & Summary */}
              <span className="text-[22px] font-bold text-[#060d17]">{casino.name}</span>
              <p className="text-[17px] leading-[28.8px] text-black">
                Okay, so what&apos;s my final take on {casino.name}? Well, to put it
                bluntly, this casino is atrocious.
              </p>
            </div>

            {/* Screenshot */}
            {casino.screenshots.length > 0 && (
              <div data-name="review-card-screenshot" className="flex-1 h-[391px] bg-[#11181f] overflow-hidden relative">
                <Image
                  src={casino.screenshots[0]}
                  alt={`${casino.name} review screenshot`}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Verdict Text */}
      <div data-name="verdict-text" className="bg-white p-[25px] flex flex-col gap-[25px]">
        <h3 className="text-[26.875px] font-medium text-[#060d17] leading-[40.5px]">Verdict</h3>
        <div className="text-[17px] leading-[28.8px] text-black">
          <p className="mb-0">
            Okay, so what&apos;s my final take on {casino.name}? Well, to put it
            bluntly, this casino is atrocious.
          </p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">
            Sure it looks okay on the surface, but there&apos;s no getting around the
            fact that it&apos;s completely unlicensed and based in Costa Rica. It also
            makes highly misleading claims regarding the rakeback, provably fair
            games, and its Trustpilot rating. Plus, the casino&apos;s general terms and
            conditions are vague and questionable, particularly when it comes to
            prohibited jurisdictions and VPN use.
          </p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">
            Beyond that, while there are plenty of games, browning and searching is
            clunky and frustrating, the welcome bonus isn&apos;t great, the promos
            lineup is anemic, and the loyalty/VIP program isn&apos;t exactly fantastic.
            And then there&apos;s the fact that this most definitely isn&apos;t a Web3
            casino, and has no real crypto features beyond payments. The icing on the
            cake is the alarming number of terrible ratings on Trustpilot (in
            isolation, I&apos;d take these with a pinch of salt, but from what I&apos;ve
            seen of this casino, I&apos;m leaning towards believing them).
          </p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">
            Quite simply, I can&apos;t think of any reason to use this casino when
            there are so many better alternatives. But if you do feel compelled to
            try it, I highly recommend keeping your balance low and making frequent
            withdrawals.
          </p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">
            But, that&apos;s just what I think. How about you? Have you played at{" "}
            {casino.name}? If so, why not write a CoinBets review and share your
            thoughts with the player community?
          </p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">
            Thanks for reading, and until next time, stay safe and have fun!
          </p>
        </div>
      </div>

      {/* Scoring Breakdown Table */}
      <div data-name="scoring-table" className="border border-[#e4e8ec] overflow-auto">
        <table className="w-full border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-[#0d337d]">
              <th className="w-[233px] px-3 py-2 h-[40px] text-left text-[14px] font-medium text-white">Category</th>
              <th className="px-3 py-2 h-[40px] text-left text-[14px] font-medium text-white">Score (1-5)</th>
              <th className="px-3 py-2 h-[40px] text-left text-[14px] font-medium text-white">Weight</th>
              <th className="px-3 py-2 h-[40px] text-left text-[14px] font-medium text-white">Weighted Score</th>
            </tr>
          </thead>
          <tbody>
            {SCORING_TABLE.map((row, i) => (
              <tr key={i} data-name={`scoring-row-${i}`} className="border-t border-[#e4e8ec] h-[51px]">
                <td className="w-[233px] px-3 bg-white border-l border-[#e4e8ec]">
                  <div className="flex items-center gap-[10px]">
                    <div className="shrink-0">{SCORING_ICONS[i]}</div>
                    <span className="text-[14px] font-medium text-slate-900">{row.category}</span>
                  </div>
                </td>
                <td className="px-3 bg-white border-l border-[#e4e8ec]">
                  {row.score > 0 ? (
                    <div className="flex items-center gap-1.5">
                      <div className="flex gap-0.5">
                        {[0, 1, 2, 3, 4].map((s) => {
                          const fill = s < Math.floor(row.score) ? 1 : s < row.score ? (row.score - s) : 0;
                          return (
                            <div key={s} className="relative size-[16px]">
                              <svg width="16" height="15" viewBox="0 0 16 15" fill="none" className="absolute inset-0">
                                <path d="M3.61065 14.9435C3.22465 15.1415 2.78665 14.7945 2.86465 14.3515L3.69465 9.6215L0.171653 6.2655C-0.157347 5.9515 0.0136534 5.3775 0.454653 5.3155L5.35265 4.6195L7.53665 0.2925C7.73365 -0.0975 8.26665 -0.0975 8.46365 0.2925L10.6477 4.6195L15.5457 5.3155C15.9867 5.3775 16.1577 5.9515 15.8277 6.2655L12.3057 9.6215L13.1357 14.3515C13.2137 14.7945 12.7757 15.1415 12.3897 14.9435L7.99865 12.6875L3.61065 14.9435Z" fill="#dcdce6"/>
                              </svg>
                              {fill > 0 && (
                                <div className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                                  <svg width="16" height="15" viewBox="0 0 16 15" fill="none">
                                    <path d="M3.61065 14.9435C3.22465 15.1415 2.78665 14.7945 2.86465 14.3515L3.69465 9.6215L0.171653 6.2655C-0.157347 5.9515 0.0136534 5.3775 0.454653 5.3155L5.35265 4.6195L7.53665 0.2925C7.73365 -0.0975 8.26665 -0.0975 8.46365 0.2925L10.6477 4.6195L15.5457 5.3155C15.9867 5.3775 16.1577 5.9515 15.8277 6.2655L12.3057 9.6215L13.1357 14.3515C13.2137 14.7945 12.7757 15.1415 12.3897 14.9435L7.99865 12.6875L3.61065 14.9435Z" fill="#003eb6"/>
                                  </svg>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                      <span className="text-[14px] font-medium text-slate-900">{row.score.toFixed(1)}</span>
                    </div>
                  ) : null}
                </td>
                <td className="px-3 bg-white border-l border-[#e4e8ec]">
                  <span className="text-[14px] font-medium text-slate-900">{row.weight}</span>
                </td>
                <td className="px-3 bg-white border-l border-[#e4e8ec]">
                  {i === SCORING_TABLE.length - 1 ? (
                    <div className="flex items-center gap-1.5">
                      <div className="flex gap-0.5">
                        {[0, 1, 2, 3, 4].map((s) => {
                          const fill = s < Math.floor(row.weighted) ? 1 : s < row.weighted ? (row.weighted - s) : 0;
                          return (
                            <div key={s} className="relative size-[16px]">
                              <svg width="16" height="15" viewBox="0 0 16 15" fill="none" className="absolute inset-0">
                                <path d="M3.61065 14.9435C3.22465 15.1415 2.78665 14.7945 2.86465 14.3515L3.69465 9.6215L0.171653 6.2655C-0.157347 5.9515 0.0136534 5.3775 0.454653 5.3155L5.35265 4.6195L7.53665 0.2925C7.73365 -0.0975 8.26665 -0.0975 8.46365 0.2925L10.6477 4.6195L15.5457 5.3155C15.9867 5.3775 16.1577 5.9515 15.8277 6.2655L12.3057 9.6215L13.1357 14.3515C13.2137 14.7945 12.7757 15.1415 12.3897 14.9435L7.99865 12.6875L3.61065 14.9435Z" fill="#dcdce6"/>
                              </svg>
                              {fill > 0 && (
                                <div className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                                  <svg width="16" height="15" viewBox="0 0 16 15" fill="none">
                                    <path d="M3.61065 14.9435C3.22465 15.1415 2.78665 14.7945 2.86465 14.3515L3.69465 9.6215L0.171653 6.2655C-0.157347 5.9515 0.0136534 5.3775 0.454653 5.3155L5.35265 4.6195L7.53665 0.2925C7.73365 -0.0975 8.26665 -0.0975 8.46365 0.2925L10.6477 4.6195L15.5457 5.3155C15.9867 5.3775 16.1577 5.9515 15.8277 6.2655L12.3057 9.6215L13.1357 14.3515C13.2137 14.7945 12.7757 15.1415 12.3897 14.9435L7.99865 12.6875L3.61065 14.9435Z" fill="#003eb6"/>
                                  </svg>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                      <span className="text-[14px] font-bold text-slate-900">{row.weighted} / 5</span>
                    </div>
                  ) : (
                    <span className="text-[14px] font-medium text-slate-900">{row.weighted}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ExpertContent({ casino }: { casino: CasinoReview }) {
  return (
    <div
      data-name="expert-content"
      className="flex flex-col gap-5 bg-white rounded-xl shadow-md p-6 sm:p-8"
    >
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
          <div data-name="verified-badge" className="flex items-center gap-1">
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
          <div data-name="verified-badge" className="flex items-center gap-1">
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
        id="toc-intro"
        data-name="expert-intro"
        className="text-[17px] leading-[28.8px] text-black"
      >
        <p>{casino.reviewText}</p>
      </div>

      {/* Sections */}
      <SectionTabs casino={casino} />

      {/* Payments */}
      <PaymentsSection casino={casino} />

      {/* Buying Crypto */}
      <BuyingCryptoSection casino={casino} />

      {/* Game Selection */}
      <GameSelectionSection casino={casino} />

      {/* Provably Fair & CoinBets Challenge */}
      <ProvablyFairSection casino={casino} />

      {/* Virtual Sport & Sportsbook */}
      <SportsSection casino={casino} />

      {/* Promotional Offers & VIP */}
      <PromotionsSection casino={casino} />

      {/* Player Support, UX & Design, Mobile */}
      <SupportDesignSection casino={casino} />

      {/* Crypto Token and Tokenomics */}
      <CryptoTokenSection casino={casino} />

      {/* Other Interesting Facts */}
      <InterestingFactsSection casino={casino} />

      {/* Overall Reputation */}
      <OverallReputationSection casino={casino} />

      {/* Verdict & Scoring */}
      <VerdictSection casino={casino} />
    </div>
  );
}

function useHeadingToc(containerRef: React.RefObject<HTMLDivElement | null>) {
  const [items, setItems] = useState<{ label: string; id: string }[]>([]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const headings = el.querySelectorAll("h3");
    const tocItems: { label: string; id: string }[] = [];
    headings.forEach((h) => {
      const text = h.textContent?.trim() ?? "";
      if (!text) return;
      const id = h.id || "toc-" + text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "");
      if (!h.id) h.id = id;
      h.style.scrollMarginTop = "280px";
      tocItems.push({ label: text, id });
    });
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setItems(tocItems);
  }, [containerRef]);

  return items;
}

function TableOfContents({ items }: { items: { label: string; id: string }[] }) {
  if (items.length === 0) return null;

  return (
    <nav
      data-name="table-of-contents"
      className="sticky top-[140px] hidden xl:block w-[200px]"
    >
      <div className="border border-[#e4e8ec] rounded-lg bg-white overflow-hidden shadow-sm">
        <div className="bg-[#0d337d] px-4 py-3">
          <span className="text-[13px] font-semibold text-white uppercase tracking-wide">
            Table of Contents
          </span>
        </div>
        <ul className="flex flex-col py-2">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block px-4 py-[7px] text-[13px] text-slate-700 hover:text-[#003eb6] hover:bg-[#f0f4ff] transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export function ExpertReviewBlock({ casino }: { casino: CasinoReview }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const tocItems = useHeadingToc(contentRef);

  return (
    <div
      id="expert-review"
      data-name="expert-review-section"
      className="relative flex flex-col gap-6"
      ref={contentRef}
    >
      {/* TOC floats outside the container on the right, h-full lets sticky work */}
      <div className="absolute top-0 bottom-0 left-full ml-6 hidden xl:block">
        <TableOfContents items={tocItems} />
      </div>

      {/* Hero */}
      <ExpertHero casino={casino} />

      {/* Content */}
      <ExpertContent casino={casino} />
    </div>
  );
}

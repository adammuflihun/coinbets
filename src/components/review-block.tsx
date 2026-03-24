"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ThumbsUp,
  Flag,
  Shield,
  Eye,
} from "lucide-react";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import { AnimatePresence, motion } from "motion/react";

/* ------------------------------------------------------------------ */
/*  Types & Data                                                       */
/* ------------------------------------------------------------------ */

import { casinoReviews } from "@/data/casino-reviews";
export type { CasinoReview } from "@/data/casino-reviews";
export { casinoReviews };

/* ------------------------------------------------------------------ */
/*  SVG Icons (re-declared per codebase convention)                    */
/* ------------------------------------------------------------------ */

const SAFETY_COLORS: Record<string, string> = {
  High: "#00de00",
  Normal: "#eaee45",
};

const RATING_COLORS: Record<number, string> = {
  5: "#23BA21",
  4: "#9FF11A",
  3: "#D8DC00",
  2: "#FFB257",
  1: "#FF6847",
};

const STAR_BG =
  "M15.9988 0H4C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0Z";
const STAR_SHAPE =
  "M10.38 4.035a.75.75 0 0 0-.753 0c-.206.098-.32.269-.377.362a4.7 4.7 0 0 0-.18.34L7.814 7.285l-2.813.411a4.7 4.7 0 0 0-.378.065c-.107.026-.304.081-.46.247a.75.75 0 0 0-.233.716c.03.226.157.387.228.47.074.087.172.182.268.276l2.034 1.981-.48 2.8a4.7 4.7 0 0 0-.055.38c-.009.11-.017.314.092.515a.75.75 0 0 0 .61.443c.224.041.416-.03.517-.072a4.7 4.7 0 0 0 .345-.17l2.514-1.322 2.515 1.322c.118.063.24.127.344.17.102.042.294.113.518.072a.75.75 0 0 0 .61-.443c.108-.2.1-.405.091-.515a4.7 4.7 0 0 0-.055-.38l-.48-2.799 2.035-1.982a4.7 4.7 0 0 0 .268-.275c.071-.083.198-.244.228-.47a.75.75 0 0 0-.232-.717c-.157-.165-.354-.221-.461-.247a4.7 4.7 0 0 0-.378-.065l-2.813-.411-1.257-2.548a4.7 4.7 0 0 0-.18-.34.75.75 0 0 0-.377-.362Z";

function PlayerRatingIcon({ size = 30 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 31 31"
      fill="none"
      className="shrink-0"
      style={{ width: size, height: size }}
    >
      <path
        d="M30.0039 8.18734C29.6411 6.15767 28.6312 4.34371 27.18 3.0004C25.8857 1.79436 24.2483 0.951107 22.4343 0.627535C20.1203 0.215717 17.7474 0 15.3157 0C12.884 0 10.5112 0.215717 8.19715 0.627535C6.27533 0.970717 4.54961 1.8924 3.22591 3.21611C1.90221 4.53981 0.970715 6.26553 0.627532 8.19715C0.215714 10.5112 0 12.884 0 15.3157C0 17.7474 0.215714 20.1203 0.627532 22.4343C0.970715 24.3561 1.8924 26.072 3.2063 27.3957C4.53 28.7292 6.25572 29.6607 8.18734 30.0039C10.5014 30.4157 12.8742 30.6314 15.3059 30.6314C17.7376 30.6314 20.1105 30.4157 22.4245 30.0039C24.5522 29.6215 26.4348 28.5233 27.8076 26.9643C28.9155 25.7092 29.6902 24.1502 29.9941 22.4343C30.4059 20.1203 30.6216 17.7474 30.6216 15.3157C30.6216 12.884 30.4059 10.5112 29.9941 8.19715L30.0039 8.18734Z"
        fill="#E5E7EB"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.64987 21.5792C8.80094 19.2977 11.7427 17.876 15.0002 17.876C18.2577 17.876 21.1995 19.2977 23.3506 21.5792C23.5856 21.8285 23.6499 22.1937 23.5142 22.5082C23.3784 22.8228 23.0686 23.0265 22.726 23.0265H7.27445C6.93185 23.0265 6.62205 22.8228 6.4863 22.5082C6.35055 22.1937 6.41484 21.8285 6.64987 21.5792Z"
        fill="#1C1C1C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2793 11.4381C10.2793 8.83059 12.3931 6.7168 15.0006 6.7168C17.6081 6.7168 19.7219 8.83059 19.7219 11.4381C19.7219 14.0456 17.6081 16.1594 15.0006 16.1594C12.3931 16.1594 10.2793 14.0456 10.2793 11.4381Z"
        fill="#1C1C1C"
      />
    </svg>
  );
}

function ExpertShieldIcon({ size = 30 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 31 31"
      fill="none"
      className="shrink-0"
      style={{ width: size, height: size }}
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
  );
}

/* ------------------------------------------------------------------ */
/*  Tabs                                                               */
/* ------------------------------------------------------------------ */

const TABS = [
  "Overview",
  "Bonuses",
  "User Reviews",
  "Safety Index",
  "Discussion",
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function ReviewBlock({ slug }: { slug: string }) {
  const casino = casinoReviews.find((c) => c.slug === slug) ?? casinoReviews[0];
  const [activeTab, setActiveTab] = useState(0);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [cryptoOpen, setCryptoOpen] = useState(false);

  const ratingColor =
    RATING_COLORS[Math.min(5, Math.max(1, Math.round(casino.playerRating)))] ??
    RATING_COLORS[3];

  const expertRatingColor =
    RATING_COLORS[Math.min(5, Math.max(1, Math.round(casino.expertScore)))] ??
    RATING_COLORS[3];

  return (
    <div data-section="review-block" className="bg-[#f5f5f5] pb-20">
      {/* ---- Breadcrumb (dark strip) ---- */}
      <div
        data-name="dark-header"
        className="bg-[#060D17] bg-[url('/hero/background-expert-review.svg')] bg-cover bg-center pb-28"
      >
        <nav
          data-name="breadcrumb"
          className="mx-auto max-w-[1280px] px-5 sm:px-10 flex items-center gap-2 py-4 text-sm text-white/60"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="size-3" />
          <Link
            href="/expert-reviews"
            className="hover:text-white transition-colors"
          >
            Best Online Casinos
          </Link>
          <ChevronRight className="size-3" />
          <span className="text-white">{casino.name}</span>
        </nav>
      </div>

      <div
        data-name="content-container"
        className="mx-auto max-w-[1280px] px-5 sm:px-10 -mt-24 py-8"
      >
        {/* ---- Two-Column Content ---- */}
        <div
          data-name="review-content-layout"
          className="grid grid-cols-1 lg:grid-cols-[1fr_330px] gap-6"
        >
          {/* ---- Main Column (header card + tab bar + content card) ---- */}
          <div data-name="main-column" className="flex flex-col gap-4">
            {/* ---- Casino Header Card ---- */}
            <div
              data-name="casino-header-card"
              className="rounded-lg border border-neutral-200 bg-white p-2 sm:p-5 shadow-sm"
            >
              <div
                data-name="header-layout"
                className="flex flex-col lg:flex-row gap-6 lg:gap-8"
              >
                {/* Logo */}
                <div
                  data-name="casino-logo"
                  className="flex items-center justify-center w-[140px] h-[115px] rounded-xl overflow-hidden bg-[#060d17] shrink-0"
                >
                  <Image
                    src={casino.logo}
                    alt={casino.name}
                    width={140}
                    height={115}
                    className="object-contain w-full h-full"
                  />
                </div>

                {/* Info */}
                <div
                  data-name="casino-info"
                  className="flex flex-col gap-4 flex-1 min-w-0"
                >
                  {/* Name + CTA */}
                  <div
                    data-name="name-and-cta"
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <h1 className="text-2xl font-bold text-[#060D17]">
                      {casino.name}
                    </h1>
                    <Link
                      href="#"
                      className="group inline-flex items-center gap-1.5 rounded-lg border border-[#060D17] px-5 py-2.5 text-sm font-semibold text-[#060D17] hover:bg-neutral-100 transition-colors w-fit"
                    >
                      Official Site Info
                      <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>

                  {/* Ratings row */}
                  <div
                    data-name="ratings-row"
                    className="flex flex-wrap items-start gap-6 lg:gap-10"
                  >
                    {/* Player Rating */}
                    <div
                      data-name="player-rating"
                      className="flex items-start gap-2.5"
                    >
                      <PlayerRatingIcon />
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[23px] font-medium leading-none text-[#060D17]">
                            {casino.playerRating.toFixed(1)}
                          </span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            className="size-5 shrink-0"
                          >
                            <path d={STAR_BG} fill={ratingColor} />
                            <path d={STAR_SHAPE} fill="white" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-neutral-500">
                          Player Rating
                        </p>
                        <p className="text-sm font-medium text-[#2563eb]">
                          {casino.playerReviews} Reviews
                        </p>
                      </div>
                    </div>

                    {/* Expert Score */}
                    <div
                      data-name="expert-score"
                      className="flex items-start gap-2.5"
                    >
                      <ExpertShieldIcon />
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[23px] font-medium leading-none text-[#060D17]">
                            {casino.expertScore.toFixed(1)}
                          </span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            className="size-5 shrink-0"
                          >
                            <rect
                              width="20"
                              height="20"
                              rx="5"
                              fill="#003EB6"
                            />
                            <path
                              d="M10 4.5C7.1 4.5 4.5 5.87 4.5 5.87V10.5C4.5 13.5 7 15.2 10 16.5C13 15.2 15.5 13.5 15.5 10.5V5.87C15.5 5.87 12.9 4.5 10 4.5Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-neutral-500">
                          Coinbets Expert Score
                        </p>
                        <p className="text-sm font-medium text-[#2563eb]">
                          Independent Audit
                        </p>
                      </div>
                    </div>

                    {/* Views */}
                    <div data-name="views" className="flex items-center gap-2">
                      <Eye className="size-5 text-neutral-400" />
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-neutral-400 uppercase">
                          Views
                        </span>
                        <span className="text-base font-semibold text-[#060D17]">
                          {casino.views}
                        </span>
                      </div>
                    </div>

                    {/* Safety Index */}
                    <div
                      data-name="safety-index"
                      className="flex items-center gap-2"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-bold text-neutral-400 uppercase">
                          Safety Index
                        </span>
                        <span
                          className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-[#060d17] w-fit"
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
            {/* ---- Tab Bar ---- */}
            <div
              data-name="tab-bar"
              className="flex items-center bg-[#EBEBEB] p-1 rounded-xl overflow-x-auto"
              style={{ scrollbarWidth: "none" }}
            >
              {TABS.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  className={`flex-1 px-2 sm:px-2.5 py-1.5 text-sm sm:text-base font-semibold rounded-[10px] transition-all whitespace-nowrap ${
                    activeTab === i
                      ? "bg-white shadow-sm text-[#060D17]"
                      : "text-[#060D17]/70"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div
              data-name="main-content"
              className="flex flex-col gap-6 rounded-lg border border-neutral-200 bg-white p-8 shadow-sm"
            >
              {/* Review title + CTA */}
              <div
                data-name="review-header"
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <h2 className="text-xl font-bold text-[#060D17]">
                  {casino.reviewTitle}
                </h2>
                <Link
                  href="#"
                  className="group flex items-center justify-center gap-1.5 rounded-lg bg-neutral-900 px-3 py-1.5 text-sm font-medium text-[#f8f8f8] hover:bg-neutral-800 transition-colors shrink-0"
                >
                  <svg width="20" height="20" viewBox="0 0 31 31" fill="none" className="size-5 shrink-0">
                    <path d="M30.0039 8.18734C29.6411 6.15767 28.6312 4.34371 27.18 3.0004C25.8857 1.79436 24.2483 0.951107 22.4343 0.627535C20.1203 0.215717 17.7474 0 15.3157 0C12.884 0 10.5112 0.215717 8.19715 0.627535C6.27533 0.970717 4.54961 1.8924 3.22591 3.21611C1.90221 4.53981 0.970714 6.26553 0.627532 8.19715C0.215714 10.5112 0 12.884 0 15.3157C0 17.7474 0.215714 20.1203 0.627532 22.4343C0.970714 24.3561 1.8924 26.072 3.2063 27.3957C4.53 28.7292 6.25572 29.6607 8.18734 30.0039C10.5014 30.4157 12.8742 30.6314 15.3059 30.6314C17.7376 30.6314 20.1105 30.4157 22.4245 30.0039C24.5522 29.6215 26.4348 28.5233 27.8076 26.9643C28.9155 25.7092 29.6902 24.1502 29.9941 22.4343C30.4059 20.1203 30.6216 17.7474 30.6216 15.3157C30.6216 12.884 30.4059 10.5112 29.9941 8.19715L30.0039 8.18734Z" fill="#003EB6"/>
                    <path d="M9.2462 20.5125C8.46178 21.091 7.79503 21.7969 7.28516 22.6304C8.59905 24.7679 10.9425 26.121 13.4526 26.1897C13.8644 25.4249 14.139 24.611 14.2665 23.758C14.5116 22.1499 14.2272 20.4928 13.4526 19.0613C11.9328 19.1005 10.4718 19.6006 9.23639 20.5027L9.2462 20.5125Z" fill="white"/>
                    <path d="M17.8064 4.40259C17.2181 5.49097 16.9043 6.72642 16.9043 7.96188C16.9043 9.19733 17.2181 10.4328 17.8064 11.5212C19.4242 11.4721 21.0127 10.8936 22.2776 9.88369C22.9541 9.34441 23.5228 8.69727 23.9739 7.96188C22.66 5.82434 20.3165 4.47122 17.8064 4.40259Z" fill="white"/>
                    <path d="M8.21543 18.0611C9.4803 17.4434 10.5393 16.4825 11.2845 15.2862C10.5491 14.0802 9.49991 13.1193 8.23504 12.4819C7.27413 12.0015 6.20536 11.7269 5.12679 11.6975C3.92075 13.9037 3.91094 16.6099 5.09737 18.8259C6.17595 18.7965 7.24471 18.5415 8.21543 18.0709V18.0611Z" fill="white"/>
                    <path d="M21.7578 20.3261C20.5812 19.5417 19.2182 19.1103 17.8161 19.071C17.1493 20.3065 16.8356 21.7086 16.9336 23.1206C17.0023 24.1894 17.3062 25.2581 17.8161 26.1994C20.3262 26.1308 22.6697 24.7777 23.9836 22.6401C23.4149 21.7184 22.6501 20.9242 21.7578 20.3359V20.3261Z" fill="white"/>
                    <path d="M7.28516 7.97168C7.92249 9.00122 8.80496 9.87389 9.84431 10.4916C10.9327 11.1388 12.178 11.5016 13.4526 11.531C14.0606 10.4132 14.3645 9.15811 14.3547 7.88343C14.3449 6.66759 14.0311 5.47135 13.4526 4.40259C10.9425 4.47122 8.59905 5.82434 7.28516 7.96188V7.97168Z" fill="white"/>
                  </svg>
                  Full CoinBets Review
                  <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              {/* Review text */}
              <p
                data-name="review-text"
                className="text-base leading-relaxed text-neutral-600"
              >
                {casino.reviewText}
              </p>

              {/* Pros / Cons */}
              <div
                data-name="pros-cons"
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {/* What We Liked */}
                <div
                  data-name="what-we-liked"
                  className="rounded-lg border border-green-100 bg-[#dcfce7] p-5 "
                >
                  <h3 className="text-xs font-bold text-[#104d0f] uppercase mb-4">
                    What We Liked
                  </h3>
                  <div className="flex flex-col gap-3">
                    {casino.whatWeLiked.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <div className="size-6 rounded-full bg-[#167715] flex items-center justify-center shrink-0">
                          <ThumbsUp className="size-3.5 text-white" />
                        </div>
                        <p className="text-sm text-[#14532D]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Red Flags */}
                <div
                  data-name="red-flags"
                  className="rounded-lg border border-red-100 bg-red-50 p-5"
                >
                  <h3 className="text-xs font-bold text-[#7a301f] uppercase mb-4">
                    Red Flags
                  </h3>
                  <div className="flex flex-col gap-3">
                    {casino.redFlags.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <div className="size-6 rounded-full bg-[#da3131] flex items-center justify-center shrink-0">
                          <Flag className="size-3.5 text-white" />
                        </div>
                        <p className="text-sm text-[#7f1d1d]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---- Sidebar ---- */}
          <div data-name="sidebar" className="flex flex-col gap-2">
            {/* Crypto Payments */}
            <Collapsible
              open={cryptoOpen}
              onOpenChange={setCryptoOpen}
              data-name="crypto-payments"
              className="rounded-lg border border-neutral-200 bg-white shadow-sm"
            >
              <div className="p-5">
                <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">
                  Crypto Accepted
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                  {casino.cryptoAccepted.slice(0, 5).map((crypto, i) => (
                    <Image
                      key={i}
                      src={crypto.icon}
                      alt={crypto.name}
                      width={36}
                      height={36}
                      className="size-9 object-contain"
                    />
                  ))}
                </div>
                <AnimatePresence initial={false}>
                  {cryptoOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="flex flex-col mt-4 border-t border-neutral-100">
                        {casino.cryptoAccepted.map((crypto, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 py-3 border-b border-neutral-100 last:border-b-0"
                          >
                            <Image
                              src={crypto.icon}
                              alt={crypto.name}
                              width={32}
                              height={32}
                              className="size-8 object-contain"
                            />
                            <span className="text-sm font-medium text-[#060D17]">
                              {crypto.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <CollapsibleTrigger className="flex items-center justify-center gap-1 w-full border-t border-neutral-100 py-3 text-sm font-medium text-[#003EB6] hover:bg-neutral-50 transition-colors [&[data-state=open]>svg]:rotate-180">
                See more
                <ChevronDown className="size-4 transition-transform" />
              </CollapsibleTrigger>
            </Collapsible>

            {/* Independence Card */}
            <div
              data-name="independence-card"
              className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <Shield className="size-8 text-[#2563eb] shrink-0" />
                <div className="flex flex-col gap-2">
                  <p className="text-base font-semibold text-[#060D17]">
                    CoinBets is 100% Independent
                  </p>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    The only site not paid by casinos. No affiliate links, no
                    casino money. Just real deposits and real reviews.
                  </p>
                </div>
              </div>
            </div>

            {/* Video Review */}
            <div
              data-name="video-review"
              className="rounded-lg border border-neutral-200 bg-white shadow-sm overflow-hidden"
            >
              <div
                data-name="video-thumbnail"
                className="relative flex h-[200px] items-center justify-center bg-[#060D17]"
              >
                <button className="flex items-center justify-center size-14 rounded-full bg-[#eab914] hover:bg-[#d4a812] transition-colors">
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                    <path
                      d="M17 8.268a2 2 0 0 1 0 3.464L3.5 19.124A2 2 0 0 1 .5 17.392V2.608A2 2 0 0 1 3.5.876L17 8.268Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
              <div data-name="video-label" className="bg-[#003EB6] px-4 py-2">
                <p className="text-xs font-bold text-white uppercase tracking-wider text-center">
                  Coinbet Expert Review
                </p>
              </div>
              <div data-name="video-cta" className="p-3">
                <Link
                  href="#"
                  className="group flex items-center justify-between rounded-lg bg-[#eab914] px-4 py-2.5 text-sm font-semibold text-[#171717] hover:bg-[#d4a812] transition-colors"
                >
                  Watch Review
                  <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Casino Screenshots */}
            <div
              data-name="screenshots-carousel"
              className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm"
            >
              <div
                data-name="screenshots-header"
                className="flex items-center justify-between mb-4"
              >
                <h3 className="text-sm font-bold text-[#060D17]">
                  Casino Screenshots
                </h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setCurrentScreenshot((p) =>
                        p === 0 ? casino.screenshots.length - 1 : p - 1,
                      )
                    }
                    className="size-7 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-colors"
                  >
                    <ChevronLeft className="size-4 text-neutral-600" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentScreenshot((p) =>
                        p === casino.screenshots.length - 1 ? 0 : p + 1,
                      )
                    }
                    className="size-7 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-colors"
                  >
                    <ChevronRight className="size-4 text-neutral-600" />
                  </button>
                </div>
              </div>
              <div
                data-name="screenshot-image"
                className="overflow-hidden rounded-lg"
              >
                <Image
                  src={casino.screenshots[currentScreenshot]}
                  alt={`${casino.name} screenshot`}
                  width={380}
                  height={220}
                  className="w-full h-[200px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

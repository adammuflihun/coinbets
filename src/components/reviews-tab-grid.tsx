"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReviewData } from "@/components/review-card";
import { casinoReviews } from "@/data/casino-reviews";

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

const SAFETY_COLORS: Record<string, string> = {
  High: "#00de00",
  Normal: "#eaee45",
};

function SimpleReviewCard({
  review,
}: {
  review: ReviewData & { thumbnail: string };
}) {
  const casino = casinoReviews.find((c) => c.slug === review.slug);
  const description = casino?.reviewText;

  return (
    <div
      data-name="expert-card"
      className="flex flex-col rounded-lg border border-neutral-200 bg-white shadow-sm h-full overflow-hidden"
    >
      {/* NEW: Thumbnail */}
      {review.thumbnail && (
        <Link
          href={`/casino/review/${review.slug}#expert-review`}
          data-name="expert-card-thumbnail"
          className="relative block w-full h-[230px] overflow-hidden bg-[#060d17]"
        >
          <Image
            src={review.thumbnail}
            alt={`${review.name} review`}
            fill
            className="object-contain hover:scale-105 transition-transform duration-300"
          />
        </Link>
      )}

      <div
        data-name="expert-card-body"
        className="flex flex-col gap-3.5 p-5 flex-1"
      >
        {/* NEW: Expert Reviews badge */}
        <span
          data-name="expert-badge"
          className="self-start rounded bg-[#003EB6] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white"
        >
          Expert Reviews
        </span>

        {/* NEW: Title row with logo + title + chevron */}
        <Link
          href={`/casino/review/${review.slug}#expert-review`}
          data-name="expert-title-row"
          className="group flex items-center gap-3"
        >
          <h3
            data-name="expert-title-text"
            className="flex-1 text-lg font-bold text-[#060d17] leading-snug"
          >
            {review.name} Casino Review 2026 – Real Crypto, No Sponsors
          </h3>
          <ChevronRight className="size-5 text-neutral-400 shrink-0 transition-transform group-hover:translate-x-0.5" />
        </Link>

        {/* NEW: Description */}
        {description && (
          <p
            data-name="expert-description"
            className="text-sm leading-relaxed text-neutral-600 line-clamp-3"
          >
            {description}
          </p>
        )}

        {/* Divider */}
        <div data-name="divider" className="h-px bg-[#d9d9d9]" />

        {/* ORIGINAL: Casino header */}
        <div
          data-name="expert-casino-header"
          className="flex items-start gap-3.5"
        >
          <div
            data-name="expert-logo"
            className="flex items-center justify-center w-[108px] h-[89px] rounded-lg overflow-hidden bg-[#060d17] shrink-0 p-0"
          >
            <Image
              src={review.logo}
              alt={review.name}
              width={108}
              height={89}
              className="object-contain w-full h-full"
            />
          </div>
          <div data-name="expert-casino-info" className="flex flex-col gap-1">
            <p className="text-base font-semibold text-[#060d17]">
              {review.name}
            </p>
            <div data-name="expert-safety" className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#404040] uppercase">
                Safety Index
              </span>
              <span
                className="rounded-full px-2 py-0.5 text-xs font-semibold text-[#060d17]"
                style={{
                  backgroundColor:
                    SAFETY_COLORS[review.safetyIndex] || "#eaee45",
                }}
              >
                {review.safetyIndex}
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div data-name="divider" className="h-px bg-[#d9d9d9]" />

        {/* ORIGINAL: Expert Score only (player-rating removed) */}
        <div data-name="expert-ratings" className="flex items-start">
          <div data-name="expert-score" className="flex items-start gap-2.5">
            <ExpertShieldIcon />
            <div
              data-name="expert-score-detail"
              className="flex flex-col gap-1"
            >
              <div
                data-name="expert-score-row"
                className="flex items-center gap-1.5"
              >
                <span className="text-[23px] font-medium leading-none text-[#060d17]">
                  {review.expertScore.toFixed(1)}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="size-5 shrink-0"
                >
                  <rect width="20" height="20" rx="5" fill="#003EB6" />
                  <path
                    d="M10 4.5C7.1 4.5 4.5 5.87 4.5 5.87V10.5C4.5 13.5 7 15.2 10 16.5C13 15.2 15.5 13.5 15.5 10.5V5.87C15.5 5.87 12.9 4.5 10 4.5Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-[#060d17]">
                Coinbets Expert Score
              </p>
              <p className="text-sm font-medium text-[#2563eb]">
                Independent Audit
              </p>
            </div>
          </div>
        </div>

        {/* ORIGINAL: CTA (highlights and bonus-bar removed) */}
        <div data-name="card-bottom" className="mt-auto">
          <Link
            href={`/casino/review/${review.slug}#expert-review`}
            className="group flex items-center justify-between rounded-lg bg-[#eab914] px-6 py-2.5 text-sm font-semibold text-[#171717] hover:bg-[#d4a812] transition-colors"
          >
            Read Review
            <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

const TABS = [
  {
    id: "all",
    label: "All Reviews",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="white">
        <path d="M120-640h720v-160H120v160Zm0 240h720v-160H120v160Zm0 240h720v-160H120v160Zm40-520v-80h80v80h-80Zm0 240v-80h80v80h-80Zm0 240v-80h80v80h-80Z" />
      </svg>
    ),
  },
  {
    id: "new",
    label: "Newly Reviewed",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="white">
        <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
      </svg>
    ),
  },
  {
    id: "top",
    label: "Top Rated",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="white">
        <path d="M720-120H320v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h218q32 0 56 24t24 56v80q0 7-1.5 15t-4.5 15L794-168q-9 20-30 34t-44 14ZM240-640v520H80v-520h160Z" />
      </svg>
    ),
  },
  {
    id: "low",
    label: "Lowest Rated",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="white" style={{ transform: "scaleY(-1)" }}>
        <path d="M720-120H320v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h218q32 0 56 24t24 56v80q0 7-1.5 15t-4.5 15L794-168q-9 20-30 34t-44 14ZM240-640v520H80v-520h160Z" />
      </svg>
    ),
  },
];

export function ReviewsTabGrid({
  reviews,
}: {
  reviews: (ReviewData & { thumbnail: string })[];
}) {
  const [activeTab, setActiveTab] = useState("all");

  const sorted = (() => {
    switch (activeTab) {
      case "new":
        return [...reviews].reverse();
      case "top":
        return [...reviews].sort((a, b) => b.expertScore - a.expertScore);
      case "low":
        return [...reviews].sort((a, b) => a.expertScore - b.expertScore);
      default:
        return reviews;
    }
  })();

  return (
    <>
      <div
        data-name="reviews-tab-bar"
        className="w-full border-b border-neutral-200 bg-white"
      >
        <nav
          data-name="reviews-tabs"
          className="site-container flex justify-center gap-8 overflow-x-auto"
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                data-name={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 py-4 border-b-[3px] shrink-0 cursor-pointer transition-colors ${
                  isActive
                    ? "border-[#020202] text-[#020202]"
                    : "border-transparent text-neutral-400 hover:text-neutral-600"
                }`}
              >
                <span
                  className={`flex items-center justify-center size-10 rounded-full ${
                    isActive ? "bg-[#020202]" : "bg-neutral-300"
                  }`}
                >
                  {tab.icon}
                </span>
                <span className="text-base font-semibold">{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <section
        data-name="reviews-grid-section"
        className="mx-auto max-w-[1300px] px-5 sm:px-10 py-12"
      >
        <div
          data-name="reviews-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {sorted.map((review) => (
            <SimpleReviewCard key={review.slug} review={review} />
          ))}
        </div>
      </section>
    </>
  );
}

"use client";

import type { CasinoReview } from "@/data/casino-reviews";

const RATING_COLORS: Record<number, string> = {
  5: "#23BA21",
  4: "#9FF11A",
  3: "#D8DC00",
  2: "#FFB257",
  1: "#FF6847",
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

export default function ExpertRatingCard({ casino }: { casino: CasinoReview }) {
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

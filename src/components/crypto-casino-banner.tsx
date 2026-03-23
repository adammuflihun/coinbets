"use client";

import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

function TrustShieldIcon() {
  return (
    <div
      data-name="trust-shield-icon"
      className="size-[50px] rounded-full bg-[#e6b830] flex items-center justify-center"
    >
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 2.333c-1.867 1.167-4.084 1.834-6.417 1.834-.455 0-.905-.028-1.35-.083A15.17 15.17 0 0 0 4.667 14c0 5.017 2.45 9.45 6.216 12.18.983.684 2.25.684 3.234 0A15.13 15.13 0 0 0 23.333 14c0-3.566-1.233-6.844-3.3-9.425A10.5 10.5 0 0 1 14 2.333Z"
          fill="white"
        />
        <path
          d="M18.083 10.792 12.25 16.625l-2.333-2.333"
          stroke="#e6b830"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function TrustpilotIcon() {
  return (
    <svg
      data-name="trustpilot-icon"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className="shrink-0"
    >
      <path d="M31.2711 8.53313C30.893 6.41773 29.8404 4.52716 28.3279 3.12711C26.979 1.87014 25.2724 0.991276 23.3818 0.654039C20.97 0.224827 18.497 0 15.9626 0C13.4282 0 10.9551 0.224827 8.54334 0.654039C6.54036 1.01171 4.74176 1.97233 3.36215 3.35193C1.98255 4.73154 1.01171 6.53015 0.654036 8.54335C0.224824 10.9551 0 13.4282 0 15.9626C0 18.497 0.224824 20.97 0.654036 23.3818C1.01171 25.3848 1.97233 27.1732 3.34171 28.5528C4.72132 29.9426 6.51992 30.9134 8.53313 31.2711C10.9449 31.7003 13.418 31.9251 15.9523 31.9251C18.4867 31.9251 20.9598 31.7003 23.3716 31.2711C25.5892 30.8726 27.5513 29.728 28.982 28.1031C30.1368 26.795 30.9441 25.1702 31.2609 23.3818C31.6901 20.97 31.9149 18.497 31.9149 15.9626C31.9149 13.4282 31.6901 10.9551 31.2609 8.54335L31.2711 8.53313Z" fill="#E6B830" />
      <path d="M7.59375 8.30845C8.25801 9.38148 9.17774 10.291 10.261 10.9348C11.3953 11.6093 12.6932 11.9874 14.0217 12.0181C14.6553 10.8531 14.9721 9.54499 14.9619 8.21648C14.9517 6.94928 14.6246 5.70253 14.0217 4.58862C11.4056 4.66016 8.96314 6.07042 7.59375 8.29823V8.30845Z" fill="white" />
      <path d="M22.6761 21.1845C21.4498 20.367 20.0293 19.9173 18.568 19.8765C17.8731 21.1641 17.546 22.6255 17.6482 24.097C17.7198 25.2109 18.0366 26.3248 18.568 27.3059C21.1841 27.2344 23.6265 25.8241 24.9959 23.5963C24.4032 22.6357 23.6061 21.8079 22.6761 21.1947V21.1845Z" fill="white" />
      <path d="M8.56407 18.824C9.88237 18.1802 10.986 17.1787 11.7627 15.9319C10.9963 14.6749 9.9028 13.6735 8.58451 13.0092C7.58302 12.5084 6.46911 12.2223 5.34499 12.1917C4.08801 14.491 4.0778 17.3115 5.31433 19.6211C6.43846 19.5904 7.55236 19.3247 8.56407 18.8342V18.824Z" fill="white" />
      <path d="M18.5574 4.58862C17.9442 5.72297 17.6172 7.0106 17.6172 8.29823C17.6172 9.58587 17.9442 10.8735 18.5574 12.0078C20.2436 11.9567 21.8991 11.3538 23.2174 10.3012C23.9225 9.73915 24.5152 9.06468 24.9853 8.29823C23.6159 6.07042 21.1735 4.66016 18.5574 4.58862Z" fill="white" />
      <path d="M9.63761 21.3789C8.82007 21.9819 8.12515 22.7176 7.59375 23.5863C8.96314 25.8141 11.4056 27.2244 14.0217 27.2959C14.4509 26.4988 14.7371 25.6506 14.8699 24.7615C15.1254 23.0855 14.829 21.3585 14.0217 19.8665C12.4377 19.9073 10.915 20.4285 9.62739 21.3687L9.63761 21.3789Z" fill="white" />
    </svg>
  );
}

function GreenStar() {
  return (
    <svg width="19" height="19" viewBox="0 0 20 20" fill="none">
      <rect width="20" height="20" rx="2" fill="#00b67a" />
      <path
        d="M10 2.5l1.837 5.652h5.943l-4.808 3.494 1.836 5.652L10 13.804l-4.808 3.494 1.836-5.652L2.22 8.152h5.943L10 2.5z"
        fill="white"
      />
    </svg>
  );
}

function AnimatedCounts() {
  const [phase, setPhase] = useState(0);
  const counts = [
    { positive: 191, negative: 183 },
    { positive: 186, negative: 192 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((p) => (p + 1) % counts.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [counts.length]);

  const { positive, negative } = counts[phase];

  return (
    <div
      data-name="pn-counts"
      className="flex justify-between text-[10px] font-semibold uppercase text-[#f8f8f8]"
    >
      <span>{positive} users</span>
      <span>{negative} Users</span>
    </div>
  );
}

function SafetyIndexCard() {
  return (
    <div data-name="safety-card-wrapper" className="relative w-[303px] mx-auto">
      {/* Stacked card decoration */}
      <div className="absolute -top-[15px] left-[24px] w-[256px] h-[278px] bg-[#4b4b4b] rounded-sm" />
      <div className="absolute -top-[7px] left-[12px] w-[275px] h-[278px] bg-[#323232] rounded-sm" />

      {/* Main card */}
      <div
        data-name="safety-card"
        className="relative bg-[#191919] rounded-sm w-full min-h-[271px] px-[18px] pt-[25px] pb-[20px]"
      >
        <div data-name="safety-content" className="flex flex-col gap-3">
          {/* Safety Index header + score */}
          <div
            data-name="safety-header"
            className="flex items-end justify-between"
          >
            <div data-name="safety-label" className="flex flex-col gap-1">
              <div className="h-2 w-[79px] rounded-full bg-[#323232]" />
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold uppercase text-[#f8f8f8]">
                  Safety Index
                </span>
                <span className="rounded-full bg-[#eaee45] px-2 py-0.5 text-xs font-semibold text-[#060d17]">
                  Normal
                </span>
              </div>
            </div>
            <div data-name="safety-score" className="flex items-end gap-1">
              <span className="text-[42px] leading-[0.88] font-normal text-[#23ba21]">
                4.9
              </span>
              <span className="text-sm text-white/50">/5</span>
            </div>
          </div>

          {/* Positive VS Negative */}
          <div data-name="positive-negative" className="flex flex-col gap-2">
            <div
              data-name="pn-header"
              className="flex items-center justify-between"
            >
              <span className="text-base font-semibold text-[#f8f8f8]">
                Positive
              </span>
              <span className="text-base font-semibold text-[#f8f8f8]">VS</span>
              <span className="text-base font-semibold text-[#f8f8f8]">
                Negative
              </span>
            </div>
            <div
              data-name="pn-bar"
              className="relative h-[9px] w-full rounded-sm overflow-hidden bg-[#f1f1f1]"
            >
              <div className="absolute inset-y-0 left-0 bg-[#23ba21] rounded-l-sm animate-vote-green" />
              <div className="absolute inset-y-0 right-0 bg-[#ff2024] rounded-r-sm animate-vote-red" />
            </div>
            <AnimatedCounts />
          </div>

          {/* Placeholder bars */}
          <div data-name="placeholder-bars" className="flex flex-col gap-2">
            <div className="h-[35px] w-full rounded bg-[#323232]" />
            <div className="h-[18px] w-[86%] rounded bg-[#323232]" />
          </div>

          {/* Trustpilot + Stars */}
          <div
            data-name="trustpilot-section"
            className="flex items-center justify-between flex-wrap gap-y-4"
          >
            <div
              data-name="trustpilot-label"
              className="flex items-center gap-2"
            >
              <TrustpilotIcon />
              <div className="h-2 w-[79px] rounded-full bg-[#323232]" />
            </div>
            <div
              data-name="trustpilot-stars"
              className="flex items-center gap-0.5"
            >
              {Array.from({ length: 5 }, (_, i) => (
                <GreenStar key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CryptoCasinoBanner() {
  return (
    <section
      data-section="crypto-casino-banner"
      className="site-container py-8"
    >
      <div
        data-name="banner-card"
        className="relative overflow-hidden rounded-lg bg-[#020202] border border-neutral-200 shadow-sm"
      >
        <div
          data-name="banner-layout"
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto_auto_auto] items-center gap-15 px-8 lg:px-12 py-12"
        >
          {/* Left: Title + Description */}
          <div
            data-name="banner-text"
            className="flex flex-col gap-6 max-w-[434px]"
          >
            <h2 className="text-[35px] font-black text-white tracking-tight leading-[1.2]">
              Crypto Casinos
            </h2>
            <p className="text-base leading-relaxed text-[#f8f8f8]/70">
              We independently review crypto casinos without bias or permission.
              We don&apos;t take a cent from casinos.
            </p>
            <p className="text-base leading-relaxed text-[#f8f8f8]/70">
              Our Expert Score and Safety Index are built on real testing,
              honest reviews, and zero bias. You&apos;ll know which crypto
              casinos are actually worth your time.
            </p>
          </div>

          {/* Center: Safety Index Card */}
          <div
            data-name="banner-card-center"
            className="flex items-center justify-center py-4"
          >
            <SafetyIndexCard />
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-px h-[355px] bg-white/20" />

          {/* Right: Feature Highlight */}
          <div
            data-name="banner-feature"
            className="flex flex-col gap-6 max-w-[344px]"
          >
            <div data-name="feature-header" className="flex flex-col gap-2.5">
              <TrustShieldIcon />
              <h3 className="text-[26px] font-semibold text-white tracking-tight leading-[1.2]">
                Built on Trust, Not Payouts
              </h3>
              <p className="text-base text-[#f8f8f8] leading-relaxed">
                Built on Trust, Not Payouts
              </p>
            </div>
            <p className="text-base leading-relaxed text-[#f8f8f8]/70">
              Our Expert Score and Safety Index are built on real testing,
              honest reviews, and zero bias. You&apos;ll know which crypto
              casinos are actually worth your time.
            </p>

            {/* Slide indicators */}
            <div
              data-name="slide-indicators"
              className="flex items-center gap-2"
            >
              <div className="flex-1 h-1.5 rounded-full bg-white/20" />
              <div className="flex-1 h-1.5 rounded-full bg-white" />
              <div className="flex-1 h-1.5 rounded-full bg-white/20" />
            </div>

            {/* Learn more button */}
            <Link
              href="#"
              className="group inline-flex items-center justify-between w-[127px] rounded-lg bg-[#eab914] px-3 py-1.5 text-sm font-medium text-[#171717] hover:bg-[#d4a812] transition-colors"
            >
              Learn more
              <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

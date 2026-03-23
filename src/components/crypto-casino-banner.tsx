"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

function TrustShieldIcon() {
  return (
    <div data-name="trust-shield-icon" className="size-[50px] rounded-full bg-[#e6b830] flex items-center justify-center">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
      >
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
    <div data-name="trustpilot-icon" className="size-8 rounded bg-[#00b67a] flex items-center justify-center">
      <svg width="20" height="19" viewBox="0 0 20 19" fill="none">
        <path
          d="M10 0l2.245 6.91h7.266l-5.878 4.27 2.245 6.91L10 13.82l-5.878 4.27 2.245-6.91L.49 6.91h7.266L10 0z"
          fill="white"
        />
      </svg>
    </div>
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

function SafetyIndexCard() {
  const positivePercent = (191 / (191 + 13)) * 100;
  const negativePercent = (13 / (191 + 13)) * 100;

  return (
    <div data-name="safety-card-wrapper" className="relative w-[303px] mx-auto">
      {/* Stacked card decoration */}
      <div className="absolute -top-[15px] left-[24px] w-[256px] h-[278px] bg-[#4b4b4b] rounded-sm" />
      <div className="absolute -top-[7px] left-[12px] w-[275px] h-[278px] bg-[#323232] rounded-sm" />

      {/* Main card */}
      <div data-name="safety-card" className="relative bg-[#191919] rounded-sm w-full min-h-[271px] px-[18px] pt-[25px] pb-[20px]">
        <div data-name="safety-content" className="flex flex-col gap-3">
          {/* Safety Index header + score */}
          <div data-name="safety-header" className="flex items-end justify-between">
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
            <div data-name="pn-header" className="flex items-center justify-between">
              <span className="text-base font-semibold text-[#f8f8f8]">
                Positive
              </span>
              <span className="text-base font-semibold text-[#f8f8f8]">VS</span>
              <span className="text-base font-semibold text-[#f8f8f8]">
                Negative
              </span>
            </div>
            <div data-name="pn-bar" className="flex h-[7px] gap-[2px] overflow-hidden rounded-sm">
              <div
                className="bg-[#23ba21] rounded-sm"
                style={{ width: `${positivePercent}%` }}
              />
              <div className="flex-1 relative rounded-sm overflow-hidden">
                <div className="absolute inset-0 bg-[#f1f1f1]" />
                <div
                  className="absolute inset-y-0 left-0 bg-[#ff2024]"
                  style={{ width: `${negativePercent}%` }}
                />
              </div>
            </div>
            <div data-name="pn-counts" className="flex justify-between text-[10px] font-semibold uppercase text-[#f8f8f8]">
              <span>191 users</span>
              <span>13 Users</span>
            </div>
          </div>

          {/* Placeholder bars */}
          <div data-name="placeholder-bars" className="flex flex-col gap-2">
            <div className="h-[35px] w-full rounded bg-[#323232]" />
            <div className="h-[18px] w-[86%] rounded bg-[#323232]" />
          </div>

          {/* Trustpilot + Stars */}
          <div data-name="trustpilot-section" className="flex items-center justify-between flex-wrap gap-y-4">
            <div data-name="trustpilot-label" className="flex items-center gap-2">
              <TrustpilotIcon />
              <div className="h-2 w-[79px] rounded-full bg-[#323232]" />
            </div>
            <div data-name="trustpilot-stars" className="flex items-center gap-0.5">
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
    <section data-section="crypto-casino-banner" className="site-container py-8">
      <div data-name="banner-card" className="relative overflow-hidden rounded-lg bg-[#020202] border border-neutral-200 shadow-sm">
        <div data-name="banner-layout" className="grid grid-cols-1 lg:grid-cols-[1fr_auto_auto_auto] items-center gap-8 px-8 lg:px-12 py-12">
          {/* Left: Title + Description */}
          <div data-name="banner-text" className="flex flex-col gap-6 max-w-[434px]">
            <h2 className="text-[35px] font-black text-white tracking-tight leading-[1.2]">
              Crypto Casinos
            </h2>
            <p className="text-base leading-relaxed text-[#f8f8f8]/70">
              We independently review crypto casinos without bias or
              permission. We don&apos;t take a cent from casinos.
            </p>
            <p className="text-base leading-relaxed text-[#f8f8f8]/70">
              Our Expert Score and Safety Index are built on real testing,
              honest reviews, and zero bias. You&apos;ll know which crypto
              casinos are actually worth your time.
            </p>
          </div>

          {/* Center: Safety Index Card */}
          <div data-name="banner-card-center" className="flex items-center justify-center py-4">
            <SafetyIndexCard />
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-px h-[355px] bg-white/20" />

          {/* Right: Feature Highlight */}
          <div data-name="banner-feature" className="flex flex-col gap-6 max-w-[344px]">
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
            <div data-name="slide-indicators" className="flex items-center gap-2">
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

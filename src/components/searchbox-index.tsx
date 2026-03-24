"use client";

import { Search } from "lucide-react";

const badges = ["No KYC", "Scam Reports", "Fast Withdrawals"];

function DecorativeImage({
  image,
  side,
}: {
  image: string;
  side: "left" | "right";
}) {
  return (
    <div
      data-name={`decorative-${side}`}
      className={`absolute top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none ${
        side === "left"
          ? "left-0 -translate-x-1/4"
          : "right-0 translate-x-1/4"
      }`}
    >
      <img
        src={image}
        alt=""
        className="w-[380px] h-auto object-contain"
      />
    </div>
  );
}

export function SearchboxIndex() {
  return (
    <div
      data-section="searchbox-index"
      className="relative z-10 -mt-[120px] mb-[-120px] px-5"
    >
      <div
        data-name="searchbox-card"
        className="relative mx-auto max-w-[1200px] bg-[#020202] border border-[#6f6f6f] rounded-xl overflow-hidden py-12 sm:py-14"
      >
        {/* Decorative stacked cards */}
        <DecorativeImage
          image="/casino-index/searchbox-left copy.png"
          side="left"
        />
        <DecorativeImage
          image="/casino-index/searchbox-right copy.png"
          side="right"
        />

        {/* Center content */}
        <div
          data-name="searchbox-content"
          className="relative z-10 flex flex-col items-center gap-5 px-5"
        >
          <h2
            data-name="searchbox-title"
            className="text-[28px] sm:text-[35px] font-black text-white text-center leading-tight tracking-tight"
          >
            Browse all Crypto Casinos
          </h2>

          {/* Search input with shimmer border */}
          <div
            data-name="searchbox-input"
            className="relative w-full max-w-[603px] overflow-hidden rounded-lg shadow-[0px_1px_52px_0px_rgba(230,184,48,0.5)]"
            style={
              {
                "--spread": "120deg",
                "--shimmer-color": "#ffffff",
                "--speed": "2.5s",
                "--cut": "2px",
              } as React.CSSProperties
            }
          >
            {/* Shimmer border layer */}
            <div data-name="shimmer-border" className="absolute inset-0 overflow-visible blur-[2px] @container-[size]">
              <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide aspect-[1] rounded-none [mask:none]">
                <div className="absolute -inset-full w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
              </div>
            </div>

            {/* Inner background fill */}
            <div className="absolute rounded-[8px] bg-[#020202] ring-1 ring-inset ring-[#e6b830] inset-(--cut)" />

            {/* Input content */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                <Search className="size-6 text-white" />
              </div>
              <input
                type="text"
                placeholder="Search the Top-Rated Crypto Casinos"
                className="h-[60px] w-full rounded-lg border-0 bg-transparent pl-14 pr-4 text-base text-white caret-white placeholder:text-white/60 focus:outline-none"
              />
            </div>
          </div>

          {/* Badges */}
          <div data-name="searchbox-badges" className="flex items-center gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-lg border border-neutral-300 bg-white/10 px-2 py-0.5 text-xs font-semibold text-[#f8f8f8]"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Subtitle */}
          <p
            data-name="searchbox-subtitle"
            className="text-base text-[#f8f8f8]/70 text-center"
          >
            500+ verified player reviews — search by casino, game type, or
            experience.
          </p>
        </div>
      </div>
    </div>
  );
}

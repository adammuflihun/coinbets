"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock, Sparkles } from "lucide-react";

export interface PromoData {
  slug: string;
  casinoName: string;
  casinoLogo: string;
  title: string;
  description: string;
  bonusAmount: string;
  expiresIn: string;
  safetyIndex: "High" | "Normal";
  rating: number;
}

/* ── Color maps from DESIGN.md §2.4 & §2.5 ── */
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

export function PromoCard({ promo }: { promo: PromoData }) {
  const ratingColor = RATING_COLORS[Math.round(promo.rating)] ?? "#DDDDDD";
  const safetyColor = SAFETY_COLORS[promo.safetyIndex] ?? "#eaee45";

  return (
    <div
      data-name="promo-card"
      className="group flex h-full flex-col rounded-lg border border-neutral-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
    >
      {/* ── Casino Header ── */}
      <div data-name="promo-header" className="flex items-center gap-3">
        <div
          data-name="promo-logo"
          className="relative h-[43px] w-[61px] shrink-0 overflow-hidden rounded-lg bg-[#020202]"
        >
          <Image
            src={promo.casinoLogo}
            alt={promo.casinoName}
            fill
            className="object-contain"
          />
        </div>
        <div data-name="promo-casino-info" className="flex flex-col gap-0.5">
          <span className="text-sm font-semibold text-neutral-900">
            {promo.casinoName}
          </span>
          <div className="flex items-center gap-2">
            {/* Safety badge — DESIGN.md §4.4 */}
            <span
              className="rounded-full px-2 py-0.5 text-xs font-semibold text-[#060d17]"
              style={{ backgroundColor: safetyColor }}
            >
              {promo.safetyIndex}
            </span>
            {/* Rating — DESIGN.md §2.4 */}
            <span
              className="text-xs font-semibold"
              style={{ color: ratingColor }}
            >
              {promo.rating.toFixed(1)}
            </span>
          </div>
        </div>
      </div>

      {/* ── Divider — DESIGN.md §4.9 ── */}
      <div data-name="divider" className="my-3.5 h-px w-full bg-border" />

      {/* ── Promo Content ── */}
      <div data-name="promo-content" className="flex flex-1 flex-col gap-2.5">
        <div data-name="promo-title" className="flex items-center gap-1.5">
          <Sparkles className="size-4 text-[#E6B830]" />
          <h3 className="text-sm font-semibold text-neutral-900">
            {promo.title}
          </h3>
        </div>
        <p className="text-sm font-medium leading-[1.4] text-[#7e7e7e]">
          {promo.description}
        </p>
      </div>

      {/* ── Bonus Bar — DESIGN.md §4.4 Bonus Badge ── */}
      <div
        data-name="promo-bonus"
        className="mt-3.5 flex items-center justify-between rounded-lg bg-[#f5f5f5] px-3 py-2"
      >
        <span className="text-sm font-semibold text-neutral-900">
          {promo.bonusAmount}
        </span>
        <div className="flex items-center gap-1 text-xs font-medium text-[#7e7e7e]">
          <Clock className="size-3" />
          {promo.expiresIn}
        </div>
      </div>

      {/* ── CTA Button — DESIGN.md §4.1 Primary CTA (Gold) ── */}
      <Link
        href={`/casino/review/${promo.slug}`}
        data-name="promo-cta"
        className="mt-3.5 flex items-center justify-center gap-1.5 rounded-lg bg-[#eab914] px-3 py-1.5 text-sm font-medium text-[#171717] transition-colors hover:bg-[#d4a812]"
      >
        Claim Bonus
        <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}

"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { Search, BookOpen, Star } from "lucide-react";
import { casinoReviews } from "@/data/casino-reviews";
import { guides } from "@/data/guides";

const pages = [
  { label: "Expert Reviews", href: "/expert-reviews" },
  { label: "User Reviews", href: "/users-review" },
  { label: "52 Index", href: "/coinbet-index" },
  { label: "Casino Originals", href: "/casino-originals" },
  { label: "Bonuses", href: "/bonuses" },
];

interface PredictiveSearchProps {
  placeholder?: string;
  variant?: "dark" | "light";
}

export function PredictiveSearch({
  placeholder = "Search...",
  variant = "dark",
}: PredictiveSearchProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ top: 0, left: 0, width: 0 });

  const q = query.toLowerCase().trim();

  const matchedCasinos = q
    ? casinoReviews.filter((c) => c.name.toLowerCase().includes(q))
    : [];
  const matchedGuides = q
    ? guides.filter((g) => g.title.toLowerCase().includes(q))
    : [];
  const matchedPages = q
    ? pages.filter((p) => p.label.toLowerCase().includes(q))
    : [];

  const hasResults =
    matchedCasinos.length > 0 ||
    matchedGuides.length > 0 ||
    matchedPages.length > 0;

  const updatePosition = useCallback(() => {
    if (!inputRef.current) return;
    const rect = inputRef.current.getBoundingClientRect();
    setPos({
      top: rect.bottom + window.scrollY + 8,
      left: rect.left + window.scrollX,
      width: rect.width,
    });
  }, []);

  useEffect(() => {
    if (!open) return;
    updatePosition();
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [open, updatePosition]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        inputRef.current && !inputRef.current.contains(target) &&
        dropdownRef.current && !dropdownRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isDark = variant === "dark";

  const dropdown = open && q ? (
    <div
      ref={dropdownRef}
      data-name="search-results"
      className="fixed z-[9999] max-h-[360px] overflow-y-auto rounded-xl border border-neutral-200 bg-white shadow-lg"
      style={{ top: pos.top, left: pos.left, width: pos.width, position: "absolute" }}
    >
      {!hasResults && (
        <p data-name="no-results" className="px-4 py-6 text-sm text-neutral-500 text-center">
          No results found.
        </p>
      )}

      {matchedCasinos.length > 0 && (
        <div data-name="results-casinos" className="p-2">
          <p className="px-2 py-1.5 text-xs font-medium text-neutral-500">Casino Reviews</p>
          {matchedCasinos.map((casino) => (
            <Link
              key={casino.slug}
              href={`/casino/review/${casino.slug}`}
              onClick={() => { setOpen(false); setQuery(""); }}
              className="flex items-center gap-2.5 rounded-lg px-2 py-2 hover:bg-neutral-100 transition-colors"
            >
              <Image
                src={casino.logo}
                alt=""
                width={24}
                height={24}
                className="size-6 rounded object-contain bg-[#060D17]"
              />
              <span className="text-sm text-neutral-900">{casino.name}</span>
            </Link>
          ))}
        </div>
      )}

      {matchedGuides.length > 0 && (
        <div data-name="results-guides" className="p-2 border-t border-neutral-100">
          <p className="px-2 py-1.5 text-xs font-medium text-neutral-500">Guides</p>
          {matchedGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              onClick={() => { setOpen(false); setQuery(""); }}
              className="flex items-center gap-2.5 rounded-lg px-2 py-2 hover:bg-neutral-100 transition-colors"
            >
              <BookOpen className="size-4 text-neutral-500 shrink-0" />
              <span className="text-sm text-neutral-900 truncate">{guide.title}</span>
            </Link>
          ))}
        </div>
      )}

      {matchedPages.length > 0 && (
        <div data-name="results-pages" className="p-2 border-t border-neutral-100">
          <p className="px-2 py-1.5 text-xs font-medium text-neutral-500">Pages</p>
          {matchedPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              onClick={() => { setOpen(false); setQuery(""); }}
              className="flex items-center gap-2.5 rounded-lg px-2 py-2 hover:bg-neutral-100 transition-colors"
            >
              <Star className="size-4 text-neutral-500 shrink-0" />
              <span className="text-sm text-neutral-900">{page.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  ) : null;

  return (
    <>
      <div data-name="predictive-search" className="relative w-full">
        <div data-name="search-icon-wrapper" className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-10">
          <Search className={`size-5 sm:size-6 ${isDark ? "text-white" : "text-neutral-400"}`} />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => { if (q) setOpen(true); }}
          placeholder={placeholder}
          className={`h-12 sm:h-[60px] w-full rounded-lg border-0 bg-transparent pl-10 sm:pl-12 pr-4 text-sm sm:text-base focus:outline-none ${
            isDark
              ? "text-white caret-white placeholder:text-white/60"
              : "text-neutral-900 caret-neutral-900 placeholder:text-neutral-400"
          }`}
        />
      </div>
      {typeof document !== "undefined" && dropdown && createPortal(dropdown, document.body)}
    </>
  );
}

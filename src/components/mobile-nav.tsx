"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, ChevronDown, Search } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { CountrySelector } from "@/components/country-selector";

const navCategories = [
  { label: "Crypto Casinos", icon: "/icon-casino.svg", hasDropdown: true },
  { label: "Sports Betting", icon: "/icon-sports.svg" },
  { label: "User Reviews", icon: "/icon-reviews.svg" },
  { label: "Bonuses", icon: "/icon-bonuses.svg" },
];

const navLinks = [
  { label: "Expert Reviews", href: "/expert-reviews" },
  { label: "Bonuses", href: "/bonuses" },
  { label: "Guides", href: "/guides" },
  { label: "About", href: "/about" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        data-section="mobile-menu-trigger"
        onClick={() => setOpen(true)}
        className="p-1.5 hover:bg-neutral-100 rounded-lg transition-colors lg:hidden"
      >
        <Menu className="size-6 text-neutral-900" />
      </button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          data-section="mobile-menu"
          side="left"
          className="w-[300px] p-0"
        >
          <SheetHeader className="border-b border-neutral-100 p-4">
            <SheetTitle>
              <Image src="/logo.svg" alt="CoinBets" width={120} height={28} />
            </SheetTitle>
          </SheetHeader>

          <div data-name="mobile-nav-content" className="flex flex-col py-2 overflow-y-auto">
            {/* Search */}
            <div data-name="mobile-search" className="px-4 py-3">
              <div data-name="mobile-search-input" className="flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-2">
                <Search className="size-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-neutral-400"
                />
              </div>
            </div>

            {/* Categories */}
            <div data-name="mobile-categories" className="px-2">
              <p className="px-3 py-2 text-xs font-medium text-neutral-500">
                Categories
              </p>
              {navCategories.map((item) => (
                <button
                  key={item.label}
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-100 transition-colors"
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="shrink-0"
                  />
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="size-4 text-neutral-400" />
                  )}
                </button>
              ))}
            </div>

            <div className="my-2 border-t border-neutral-100" />

            {/* Pages */}
            <div data-name="mobile-pages" className="px-2">
              <p className="px-3 py-2 text-xs font-medium text-neutral-500">
                Pages
              </p>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-100 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="my-2 border-t border-neutral-100" />

            {/* Country Selector */}
            <div data-name="mobile-language" className="px-4 py-2">
              <p className="px-1 pb-2 text-xs font-medium text-neutral-500">
                Language
              </p>
              <CountrySelector />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

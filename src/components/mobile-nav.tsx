"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  ChevronDown,
  ChevronUp,
  Trophy,
  Sparkles,
  Crown,
  LayoutGrid,
  ShieldCheck,
  EyeOff,
  Smartphone,
  MonitorPlay,
} from "lucide-react";
import { PredictiveSearch } from "@/components/predictive-search";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { CountrySelector } from "@/components/country-selector";

const navCategories = [
  { label: "Crypto Casinos", icon: "/icons/casino.svg", hasDropdown: true },
  { label: "Sports Betting", icon: "/icons/sports.svg", href: "/sports-betting" },
  { label: "User Reviews", icon: "/icons/reviews.svg", href: "/users-review" },
  { label: "Bonuses", icon: "/icons/bonuses.svg", customIcon: true, href: "/bonuses" },
];

const cryptoMobileItems = [
  { title: "Online Casinos", items: [
    { label: "Top Online Casinos", href: "/top-online-casino", icon: Trophy },
    { label: "Newly Opened Casinos", href: "/newly-opened-casinos", icon: Sparkles },
    { label: "Big Brands", href: "/big-brands", icon: Crown },
    { label: "All Casinos", href: "/all-casino", icon: LayoutGrid },
  ]},
  { title: "Popular Categories", items: [
    { label: "Provably Fair Originals", href: "/casino-originals", icon: ShieldCheck },
    { label: "No KYC Casinos", href: "/no-kyc-casinos", icon: EyeOff },
    { label: "Mobile-Friendly Casinos", href: "/mobile-friendly-casinos", icon: Smartphone },
    { label: "Live Dealer Casinos", href: "/live-dealer-casinos", icon: MonitorPlay },
  ]},
];

function BonusesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M18.6167 5.34571C18.3916 4.02049 17.765 2.83611 16.8646 1.95903C16.0615 1.17158 15.0455 0.621 13.9199 0.409733C12.4842 0.140847 11.0118 0 9.50304 0C7.99424 0 6.52193 0.140847 5.08613 0.409733C3.89369 0.633804 2.82293 1.23559 2.0016 2.09987C1.18028 2.96415 0.602305 4.09091 0.389369 5.35212C0.133845 6.863 0 8.41229 0 10C0 11.5877 0.133845 13.137 0.389369 14.6479C0.602305 15.9027 1.17419 17.023 1.98943 17.8873C2.81076 18.758 3.88152 19.3662 5.08005 19.5903C6.51585 19.8592 7.98815 20 9.49696 20C11.0058 20 12.4781 19.8592 13.9139 19.5903C15.2341 19.3406 16.4022 18.6236 17.2539 17.6056C17.9414 16.7862 18.422 15.7682 18.6106 14.6479C18.8662 13.137 19 11.5877 19 10C19 8.41229 18.8662 6.863 18.6106 5.35212L18.6167 5.34571Z" fill="black"/>
      <path d="M4.5 11.7612H9.125V16.5112H5.375C4.895 16.5112 4.5 16.1162 4.5 15.6362V11.7612ZM14.5 11.7612V15.6362C14.5 16.1162 14.105 16.5112 13.625 16.5112H9.875V11.7612H14.5ZM3.5 8.88623V10.1362C3.5 10.6162 3.895 11.0112 4.375 11.0112H9.125V8.01123H4.375C3.895 8.01123 3.5 8.40623 3.5 8.88623ZM14.625 8.01123H9.875V11.0112H14.625C15.105 11.0112 15.5 10.6162 15.5 10.1362V8.88623C15.5 8.40623 15.105 8.01123 14.625 8.01123Z" fill="white"/>
      <path d="M9.4999 8.53327C9.44605 8.53311 9.39286 8.52139 9.34394 8.4989C9.29501 8.4764 9.25149 8.44366 9.21632 8.40289C9.18114 8.36212 9.15513 8.31427 9.14005 8.26258C9.12497 8.21089 9.12116 8.15656 9.1289 8.10327C9.3139 6.85327 10.2904 4.48877 12.6644 4.48877C14.0194 4.48927 14.4999 5.22127 14.4999 5.84827C14.4999 6.96277 12.9484 8.53327 9.4999 8.53327ZM12.6644 5.23927C10.8734 5.23927 10.1934 6.94177 9.9679 7.77227C11.3809 7.70627 12.2719 7.34877 12.7849 7.04427C13.4964 6.62177 13.7499 6.14927 13.7499 5.84777C13.7499 5.39877 13.1894 5.23927 12.6644 5.23927Z" fill="white"/>
      <path d="M9.5 8.53326C6.0515 8.53326 4.5 6.96276 4.5 5.84826C4.5 5.22126 4.981 4.48926 6.336 4.48926C8.7095 4.48926 9.686 6.85376 9.871 8.10376C9.87866 8.15701 9.87479 8.21128 9.85968 8.26292C9.84456 8.31455 9.81854 8.36233 9.78337 8.40305C9.7482 8.44376 9.70471 8.47645 9.65582 8.49892C9.60694 8.52138 9.5538 8.53309 9.5 8.53326ZM6.336 5.23926C5.811 5.23926 5.25 5.39926 5.25 5.84826C5.25 6.48676 6.3665 7.65026 9.0315 7.77276C8.8065 6.94176 8.1265 5.23926 6.336 5.23926Z" fill="white"/>
    </svg>
  );
}

const navLinks = [
  { label: "Expert Reviews", href: "/expert-reviews" },
  { label: "Bonuses", href: "/bonuses" },
  { label: "Guides", href: "/guides" },
  { label: "About", href: "/about" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [cryptoExpanded, setCryptoExpanded] = useState(false);

  return (
    <>
      <button
        data-section="mobile-menu-trigger"
        onClick={() => setOpen(true)}
        className="p-1.5 hover:bg-neutral-100 rounded-lg transition-colors xl:hidden"
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
              <Image src="/icons/logo.svg" alt="CoinBets" width={120} height={28} />
            </SheetTitle>
          </SheetHeader>

          <div data-name="mobile-nav-content" className="flex flex-col py-2 overflow-y-auto">
            {/* Search — predictive */}
            <div data-name="mobile-search" className="px-4 py-3">
              <div data-name="mobile-search-input" className="rounded-lg border border-neutral-200 px-1">
                <PredictiveSearch placeholder="Search..." variant="light" />
              </div>
            </div>

            {/* Categories */}
            <div data-name="mobile-categories" className="px-2">
              <p className="px-3 py-2 text-xs font-medium text-neutral-500">
                Categories
              </p>
              {navCategories.map((item) =>
                item.hasDropdown ? (
                  <div key={item.label} data-name="mobile-crypto-dropdown">
                    <button
                      onClick={() => setCryptoExpanded(!cryptoExpanded)}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-100 transition-colors"
                    >
                      <Image src={item.icon} alt="" width={20} height={20} className="shrink-0" />
                      <span className="flex-1 text-left">{item.label}</span>
                      {cryptoExpanded ? (
                        <ChevronUp className="size-4 text-neutral-400" />
                      ) : (
                        <ChevronDown className="size-4 text-neutral-400" />
                      )}
                    </button>
                    {cryptoExpanded && (
                      <div data-name="mobile-crypto-sections" className="ml-4 border-l border-neutral-100 pl-2 pb-2">
                        {cryptoMobileItems.map((section) => (
                          <div key={section.title} data-name={`mobile-section-${section.title.toLowerCase().replace(/\s/g, "-")}`} className="mt-2">
                            <p className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-neutral-400">{section.title}</p>
                            {section.items.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100 transition-colors"
                              >
                                <div className="flex size-6 items-center justify-center rounded-md bg-neutral-100">
                                  <sub.icon className="size-3.5 text-neutral-500" />
                                </div>
                                <span>{sub.label}</span>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href ?? "/"}
                    onClick={() => setOpen(false)}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-100 transition-colors"
                  >
                    {item.customIcon ? (
                      <BonusesIcon />
                    ) : (
                      <Image
                        src={item.icon}
                        alt=""
                        width={20}
                        height={20}
                        className="shrink-0"
                      />
                    )}
                    <span className="flex-1 text-left">{item.label}</span>
                  </Link>
                )
              )}
            </div>

            <div data-name="mobile-divider-top" className="my-2 border-t border-neutral-100" />

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

            <div data-name="mobile-divider-bottom" className="my-2 border-t border-neutral-100" />

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

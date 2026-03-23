import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Search } from "lucide-react";
import { CountrySelector } from "@/components/country-selector";
import { LoginDialog } from "@/components/login-dialog";
import { MobileNav } from "@/components/mobile-nav";

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

export function Navbar() {
  return (
    <header data-section="navbar" className="bg-white border-b border-neutral-100">
      <nav data-name="nav-bar" className="flex items-center justify-between h-14 px-4 lg:px-10">
        {/* Mobile: Hamburger */}
        <div data-name="nav-mobile-trigger" className="lg:hidden">
          <MobileNav />
        </div>

        {/* Desktop: Category Nav */}
        <div
          data-section="nav-categories"
          className="hidden lg:flex items-center gap-0"
        >
          {navCategories.map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-1.5 text-sm font-medium text-neutral-900 hover:bg-neutral-100 transition-colors rounded-lg px-3 py-1.5"
            >
              <Image
                src={item.icon}
                alt=""
                width={19}
                height={20}
                className="shrink-0"
              />
              <span>{item.label}</span>
              {item.hasDropdown && (
                <ChevronDown className="size-4 text-neutral-500" />
              )}
            </button>
          ))}
        </div>

        {/* Center: Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="/logo.svg"
            alt="CoinBets"
            width={135}
            height={32}
            className="w-[110px] lg:w-[135px]"
            priority
          />
        </Link>

        {/* Right: Links & Actions */}
        <div data-section="nav-actions" className="flex items-center gap-5">
          {/* Desktop only links */}
          <div data-name="nav-links" className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-neutral-900 hover:bg-neutral-100 transition-colors rounded-lg px-3 py-1.5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div data-name="nav-right-actions" className="flex items-center gap-2.5">
            {/* Search - desktop only */}
            <button
              data-section="nav-search"
              className="hidden lg:block bg-neutral-100 rounded p-1 hover:bg-neutral-200 transition-colors"
            >
              <Search className="size-6 text-neutral-600" />
            </button>

            {/* Language Selector - desktop only */}
            <div className="hidden lg:block">
              <CountrySelector />
            </div>

            {/* Login - shimmer button with dialog */}
            <LoginDialog />
          </div>
        </div>
      </nav>
    </header>
  );
}

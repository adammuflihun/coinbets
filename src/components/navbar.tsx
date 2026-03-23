import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Search } from "lucide-react";
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

export function Navbar() {
  return (
    <header className="bg-white border-b border-neutral-100">
      <nav className="flex items-center justify-between h-14 px-10">
        {/* Left: Category Nav */}
        <div className="flex items-center gap-2">
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
            priority
          />
        </Link>

        {/* Right: Links & Actions */}
        <div className="flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <div className="flex items-center gap-2.5">
            {/* Search */}
            <button className="bg-neutral-100 rounded p-1 hover:bg-neutral-200 transition-colors">
              <Search className="size-6 text-neutral-600" />
            </button>

            {/* Language Selector */}
            <CountrySelector />

            {/* Login */}
            <button className="flex items-center gap-1.5 bg-neutral-100 rounded-lg px-3 py-1.5 hover:bg-neutral-200 transition-colors">
              <span className="text-sm font-medium text-neutral-900">
                Login
              </span>
              <Image
                src="/icon-login.svg"
                alt=""
                width={16}
                height={16}
                className="shrink-0"
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

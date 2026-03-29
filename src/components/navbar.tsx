"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ChevronDown,
  Search,
  BookOpen,
  Star,
  Trophy,
  Sparkles,
  Crown,
  LayoutGrid,
  Coins,
  ShieldCheck,
  EyeOff,
  Smartphone,
  MonitorPlay,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CountrySelector } from "@/components/country-selector";
import { LoginDialog } from "@/components/login-dialog";
import { MobileNav } from "@/components/mobile-nav";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { casinoReviews } from "@/data/casino-reviews";
import { guides } from "@/data/guides";

function useScrollDirection() {
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setAtTop(y < 10);
      if (y < 10) {
        setVisible(true);
      } else if (y < lastScrollY.current) {
        setVisible(true);
      } else if (y > lastScrollY.current + 5) {
        setVisible(false);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { visible, atTop };
}

function CasinoIndexIcon({ className }: { className?: string }) {
  return (
    <svg
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18.6167 5.34571C18.3916 4.02049 17.765 2.83611 16.8646 1.95903C16.0615 1.17158 15.0455 0.621 13.9199 0.409733C12.4842 0.140847 11.0118 0 9.50304 0C7.99424 0 6.52193 0.140847 5.08613 0.409733C3.89369 0.633804 2.82293 1.23559 2.0016 2.09987C1.18028 2.96415 0.602305 4.09091 0.389369 5.35212C0.133845 6.863 0 8.41229 0 10C0 11.5877 0.133845 13.137 0.389369 14.6479C0.602305 15.9027 1.17419 17.023 1.98943 17.8873C2.81076 18.758 3.88152 19.3662 5.08005 19.5903C6.51585 19.8592 7.98815 20 9.49696 20C11.0058 20 12.4781 19.8592 13.9139 19.5903C15.2341 19.3406 16.4022 18.6236 17.2539 17.6056C17.9414 16.7862 18.422 15.7682 18.6106 14.6479C18.8662 13.137 19 11.5877 19 10C19 8.41229 18.8662 6.863 18.6106 5.35212L18.6167 5.34571Z"
        fill="black"
      />
      <path
        d="M12.8447 3.75684C12.9577 3.75633 13.0706 3.77409 13.1768 3.81152C13.2846 3.84959 13.385 3.90627 13.4707 3.98047C13.5565 4.05478 13.6267 4.14576 13.6748 4.24805C13.7229 4.35043 13.7476 4.46207 13.7461 4.5752V4.57715C13.7444 4.65256 13.7358 4.7277 13.7207 4.80176L13.7188 4.80957L13.1816 7.06055H14.21C14.5144 7.06058 14.7745 7.12374 14.9629 7.27246C15.1603 7.42834 15.2441 7.65029 15.2441 7.88477C15.2441 8.12052 15.1623 8.34695 14.9678 8.50879C14.7797 8.66519 14.5181 8.73531 14.21 8.73535H12.7852L12.2412 11.041H13.1914C13.497 11.041 13.7574 11.1077 13.9453 11.2588C14.1411 11.4163 14.2256 11.6393 14.2256 11.873C14.2255 12.109 14.1371 12.3328 13.9443 12.4932C13.7567 12.6492 13.4968 12.7227 13.1914 12.7227H11.8457L11.1816 15.5283C11.0707 15.9935 10.6685 16.244 10.2344 16.2441C10.0006 16.2441 9.78042 16.1734 9.61523 16.0303C9.44715 15.8845 9.3506 15.6758 9.35059 15.4375V15.4336C9.35194 15.3539 9.35918 15.2739 9.37305 15.1953L9.37402 15.1885L9.37598 15.1816L9.96387 12.7227H7.59961L6.93457 15.5283C6.82483 15.9943 6.42059 16.2441 5.98828 16.2441C5.75448 16.2441 5.5343 16.1735 5.36914 16.0303C5.20114 15.8845 5.10451 15.6757 5.10449 15.4375C5.10449 15.3644 5.11427 15.2502 5.12988 15.1826L5.13086 15.1816L5.71777 12.7227H4.78027C4.47444 12.7227 4.21524 12.6498 4.0293 12.4922C3.83844 12.3304 3.75594 12.1058 3.75586 11.873C3.75586 11.6395 3.83965 11.4175 4.0332 11.2598C4.21951 11.1079 4.47677 11.0401 4.77832 11.04H6.11426L6.65723 8.73535H5.80859C5.50037 8.73535 5.23925 8.66538 5.05176 8.51074C4.8577 8.35063 4.77441 8.12637 4.77441 7.89355C4.77447 7.66039 4.85839 7.4375 5.05371 7.2793C5.24148 7.12733 5.50209 7.06055 5.80859 7.06055H7.04199L7.66895 4.41992C7.71629 4.22136 7.8398 4.05044 8.00781 3.93262C8.17372 3.81639 8.37614 3.75696 8.58105 3.75684V3.75586C8.58233 3.75584 8.58369 3.75685 8.58496 3.75684L8.58691 3.75586L8.58594 3.75684C8.69984 3.75526 8.81362 3.77171 8.9209 3.80859C9.02985 3.84612 9.13192 3.90335 9.21875 3.97754C9.30555 4.05175 9.37679 4.14251 9.42578 4.24512C9.47446 4.34716 9.49968 4.45825 9.49902 4.57129L9.49219 4.69043C9.4877 4.73314 9.48115 4.77607 9.47363 4.80859L9.47266 4.80957L8.93555 7.06055H11.2891L11.9141 4.41992V4.41895C11.9622 4.21855 12.0883 4.0475 12.2588 3.92969C12.4271 3.8134 12.632 3.75473 12.8389 3.75684V3.75586L12.8418 3.75684C12.843 3.75685 12.8445 3.75584 12.8457 3.75586L12.8447 3.75684ZM7.96582 11.0664H10.3799L10.9248 8.71777H8.52832L7.96582 11.0664Z"
        fill="white"
        stroke="white"
        strokeWidth="0.488909"
      />
    </svg>
  );
}

function NavDropdown({
  trigger,
  children,
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      data-name="nav-dropdown"
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {trigger}
      <AnimatePresence>
        {open && (
          <motion.div
            data-name="nav-dropdown-panel"
            className="absolute left-0 top-full z-50 pt-2"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
              opacity: { duration: 0.15 },
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const cryptoDropdownColumns = [
  {
    title: "Online Casinos",
    items: [
      { label: "Top Online Casinos", href: "/", icon: Trophy },
      { label: "Newly Opened Casinos", href: "/", icon: Sparkles },
      { label: "Big Brands", href: "/", icon: Crown },
      { label: "All Casinos", href: "/", icon: LayoutGrid },
    ],
  },
  {
    title: "Popular Categories",
    items: [
      { label: "Crypto Casinos", href: "/", icon: Coins },
      { label: "Provably Fair Originals", href: "/casino-originals", icon: ShieldCheck },
      { label: "No KYC Casinos", href: "/", icon: EyeOff },
      { label: "Mobile-Friendly Casinos", href: "/", icon: Smartphone },
      { label: "Live Dealer Casinos", href: "/", icon: MonitorPlay },
    ],
  },
];

const navCategories = [
  { label: "Crypto Casinos", icon: "/icons/casino.svg", hasDropdown: true },
  { label: "Sports Betting", icon: "/icons/sports.svg", href: "/sports-betting" },
  { label: "User Reviews", icon: "/icons/reviews.svg", href: "/users-review" },
];

const navLinks = [
  { label: "Expert Reviews", href: "/expert-reviews" },
  { label: "Guides", href: "/guides" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const { visible, atTop } = useScrollDirection();
  const pathname = usePathname();
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSelect = useCallback(
    (href: string) => {
      setSearchOpen(false);
      router.push(href);
    },
    [router]
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      data-section="navbar"
      className={`sticky top-0 z-40 bg-white border-b border-neutral-100 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${!atTop && visible ? "shadow-sm" : ""}`}
    >
      <nav
        data-name="nav-bar"
        className="flex items-center justify-between h-14 px-4 lg:px-10"
      >
        {/* Mobile: Hamburger */}
        <div data-name="nav-mobile-trigger" className="lg:hidden">
          <MobileNav />
        </div>

        {/* Desktop: Category Nav */}
        <div
          data-section="nav-categories"
          className="hidden lg:flex items-center gap-0"
        >
          {/* Crypto Casinos Mega Dropdown */}
          <NavDropdown
            trigger={
              <button className="flex items-center gap-1.5 text-sm font-medium transition-colors rounded-lg px-3 py-1.5 outline-none cursor-pointer text-neutral-900 hover:bg-neutral-100">
                <Image src="/icons/casino.svg" alt="" width={19} height={20} className="shrink-0" />
                <span>Crypto Casinos</span>
                <ChevronDown className="size-4 text-neutral-500" />
              </button>
            }
          >
            <div data-name="crypto-mega-dropdown" className="w-[720px] rounded-xl bg-[#020202] shadow-2xl grid grid-cols-2">
              {cryptoDropdownColumns.map((column, colIdx) => (
                <div
                  key={column.title}
                  data-name={`dropdown-column-${column.title.toLowerCase().replace(/\s/g, "-")}`}
                  className={`flex flex-col px-5 py-4 ${colIdx === 1 ? "border-l border-[#212121]" : ""}`}
                >
                  <div data-name="dropdown-column-header" className="mb-4 border-b border-[#212121] pb-2">
                    <p className="text-[11px] font-medium uppercase tracking-[3px] text-[#7e7e7e]">
                      {column.title}
                    </p>
                  </div>
                  <div data-name="dropdown-items" className="flex flex-col gap-0.5">
                    {column.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-3 cursor-pointer rounded-lg px-2 py-2.5 text-white hover:bg-yellow-400 hover:text-black transition-colors"
                      >
                        <div data-name="dropdown-icon" className="flex size-7 shrink-0 items-center justify-center rounded-md bg-[#212121]">
                          <item.icon className="size-4 text-neutral-400" />
                        </div>
                        <span className="text-[15px] font-normal">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </NavDropdown>

          {/* Sports Betting & User Reviews */}
          {navCategories.filter((item) => item.href).map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href!}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors rounded-lg px-3 py-1.5 ${
                  isActive
                    ? "bg-yellow-400 text-black"
                    : "text-neutral-900 hover:bg-neutral-100"
                }`}
              >
                <Image src={item.icon} alt="" width={19} height={20} className="shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}

          {/* Casino Index Dropdown */}
          <NavDropdown
            trigger={
              <button className={`flex items-center gap-1.5 text-sm font-medium transition-colors rounded-lg px-3 py-1.5 outline-none cursor-pointer ${
                pathname === "/coinbet-index" || pathname === "/casino-originals"
                  ? "bg-yellow-400 text-black"
                  : "text-neutral-900 hover:bg-neutral-100"
              }`}>
                <CasinoIndexIcon className="shrink-0" />
                <span>Casino Index</span>
                <ChevronDown className="size-4 text-neutral-500" />
              </button>
            }
          >
            <div data-name="casino-index-dropdown" className="min-w-[200px] rounded-xl bg-[#020202] p-2 shadow-2xl">
              <Link href="/coinbet-index" className="flex w-full items-center rounded-lg px-3 py-2.5 text-white hover:bg-yellow-400 hover:text-black transition-colors">
                52 Index
              </Link>
              <Link href="/casino-originals" className="flex w-full items-center rounded-lg px-3 py-2.5 text-white hover:bg-yellow-400 hover:text-black transition-colors">
                Casino Original
              </Link>
            </div>
          </NavDropdown>
        </div>

        {/* Center: Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="/icons/logo.svg"
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
          <div
            data-name="nav-links"
            className="hidden lg:flex items-center gap-1"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors rounded-lg px-3 py-1.5 ${
                    isActive
                      ? "bg-yellow-400 text-black"
                      : "text-neutral-900 hover:bg-neutral-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div
            data-name="nav-right-actions"
            className="flex items-center gap-2.5"
          >
            {/* Search */}
            <button
              data-section="nav-search"
              onClick={() => setSearchOpen(true)}
              className="hidden lg:block bg-neutral-100 rounded p-1 hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              <Search className="size-6 text-neutral-600" />
            </button>

            {/* Language Selector - desktop only */}
            <div data-name="nav-language" className="hidden lg:block">
              <CountrySelector />
            </div>

            {/* Login - shimmer button with dialog */}
            <LoginDialog />
          </div>
        </div>
      </nav>

      {/* Search Command Dialog */}
      <CommandDialog
        open={searchOpen}
        onOpenChange={setSearchOpen}
        title="Search"
        description="Search casinos, guides, and expert reviews"
      >
        <CommandInput placeholder="Search casinos, guides, reviews..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Casino Reviews">
            {casinoReviews.map((casino) => (
              <CommandItem
                key={casino.slug}
                onSelect={() => handleSelect(`/casino/review/${casino.slug}`)}
              >
                <Image src={casino.logo} alt="" width={20} height={20} className="size-5 rounded object-contain bg-[#060D17]" />
                <span>{casino.name}</span>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandGroup heading="Guides">
            {guides.map((guide) => (
              <CommandItem
                key={guide.slug}
                onSelect={() => handleSelect(`/guides/${guide.slug}`)}
              >
                <BookOpen className="size-4 text-neutral-500" />
                <span>{guide.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandGroup heading="Pages">
            <CommandItem onSelect={() => handleSelect("/expert-reviews")}>
              <Star className="size-4 text-neutral-500" />
              <span>Expert Reviews</span>
            </CommandItem>
            <CommandItem onSelect={() => handleSelect("/users-review")}>
              <Star className="size-4 text-neutral-500" />
              <span>User Reviews</span>
            </CommandItem>
            <CommandItem onSelect={() => handleSelect("/coinbet-index")}>
              <Star className="size-4 text-neutral-500" />
              <span>52 Index</span>
            </CommandItem>
            <CommandItem onSelect={() => handleSelect("/casino-originals")}>
              <Star className="size-4 text-neutral-500" />
              <span>Casino Originals</span>
            </CommandItem>
            <CommandItem onSelect={() => handleSelect("/bonuses")}>
              <Star className="size-4 text-neutral-500" />
              <span>Bonuses</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ThumbsUp,
  Flag,
  Shield,
  Eye,
  ThumbsDown,
  Plus,
  Minus,
  Info,
  Pencil,
  X,
} from "lucide-react";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";
import { Badge } from "@/components/ui/badge";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AnimatePresence, motion } from "motion/react";
import "flag-icons/css/flag-icons.min.css";
import { GAME_ICONS } from "@/components/game-icons";
import { CasinoCategoryCard } from "@/components/casino-categories";
import { ExpertReviewBlock } from "@/components/expert-review-block";

/* ------------------------------------------------------------------ */
/*  Types & Data                                                       */
/* ------------------------------------------------------------------ */

import { casinoReviews } from "@/data/casino-reviews";
export type { CasinoReview } from "@/data/casino-reviews";
export { casinoReviews };

/* ------------------------------------------------------------------ */
/*  SVG Icons (re-declared per codebase convention)                    */
/* ------------------------------------------------------------------ */

const SAFETY_COLORS: Record<string, string> = {
  High: "#00de00",
  Normal: "#eaee45",
};

const RATING_COLORS: Record<number, string> = {
  5: "#23BA21",
  4: "#9FF11A",
  3: "#D8DC00",
  2: "#FFB257",
  1: "#FF6847",
};

const LANG_FLAGS: Record<string, string> = {
  English: "gb",
  Spanish: "es",
  Portuguese: "pt",
  German: "de",
  French: "fr",
  Japanese: "jp",
  Korean: "kr",
  Chinese: "cn",
  Russian: "ru",
  Turkish: "tr",
  Arabic: "sa",
  Hindi: "in",
  Indonesian: "id",
  Vietnamese: "vn",
  Thai: "th",
  Polish: "pl",
  Italian: "it",
  Finnish: "fi",
  Norwegian: "no",
  Swedish: "se",
  Danish: "dk",
  Czech: "cz",
  Hungarian: "hu",
};

const STAR_BG =
  "M15.9988 0H4C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0Z";
const STAR_SHAPE =
  "M10.38 4.035a.75.75 0 0 0-.753 0c-.206.098-.32.269-.377.362a4.7 4.7 0 0 0-.18.34L7.814 7.285l-2.813.411a4.7 4.7 0 0 0-.378.065c-.107.026-.304.081-.46.247a.75.75 0 0 0-.233.716c.03.226.157.387.228.47.074.087.172.182.268.276l2.034 1.981-.48 2.8a4.7 4.7 0 0 0-.055.38c-.009.11-.017.314.092.515a.75.75 0 0 0 .61.443c.224.041.416-.03.517-.072a4.7 4.7 0 0 0 .345-.17l2.514-1.322 2.515 1.322c.118.063.24.127.344.17.102.042.294.113.518.072a.75.75 0 0 0 .61-.443c.108-.2.1-.405.091-.515a4.7 4.7 0 0 0-.055-.38l-.48-2.799 2.035-1.982a4.7 4.7 0 0 0 .268-.275c.071-.083.198-.244.228-.47a.75.75 0 0 0-.232-.717c-.157-.165-.354-.221-.461-.247a4.7 4.7 0 0 0-.378-.065l-2.813-.411-1.257-2.548a4.7 4.7 0 0 0-.18-.34.75.75 0 0 0-.377-.362Z";

function PlayerRatingIcon({ size = 30 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 31 31"
      fill="none"
      className="shrink-0"
      style={{ width: size, height: size }}
    >
      <path
        d="M30.0039 8.18734C29.6411 6.15767 28.6312 4.34371 27.18 3.0004C25.8857 1.79436 24.2483 0.951107 22.4343 0.627535C20.1203 0.215717 17.7474 0 15.3157 0C12.884 0 10.5112 0.215717 8.19715 0.627535C6.27533 0.970717 4.54961 1.8924 3.22591 3.21611C1.90221 4.53981 0.970715 6.26553 0.627532 8.19715C0.215714 10.5112 0 12.884 0 15.3157C0 17.7474 0.215714 20.1203 0.627532 22.4343C0.970715 24.3561 1.8924 26.072 3.2063 27.3957C4.53 28.7292 6.25572 29.6607 8.18734 30.0039C10.5014 30.4157 12.8742 30.6314 15.3059 30.6314C17.7376 30.6314 20.1105 30.4157 22.4245 30.0039C24.5522 29.6215 26.4348 28.5233 27.8076 26.9643C28.9155 25.7092 29.6902 24.1502 29.9941 22.4343C30.4059 20.1203 30.6216 17.7474 30.6216 15.3157C30.6216 12.884 30.4059 10.5112 29.9941 8.19715L30.0039 8.18734Z"
        fill="#E5E7EB"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.64987 21.5792C8.80094 19.2977 11.7427 17.876 15.0002 17.876C18.2577 17.876 21.1995 19.2977 23.3506 21.5792C23.5856 21.8285 23.6499 22.1937 23.5142 22.5082C23.3784 22.8228 23.0686 23.0265 22.726 23.0265H7.27445C6.93185 23.0265 6.62205 22.8228 6.4863 22.5082C6.35055 22.1937 6.41484 21.8285 6.64987 21.5792Z"
        fill="#1C1C1C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2793 11.4381C10.2793 8.83059 12.3931 6.7168 15.0006 6.7168C17.6081 6.7168 19.7219 8.83059 19.7219 11.4381C19.7219 14.0456 17.6081 16.1594 15.0006 16.1594C12.3931 16.1594 10.2793 14.0456 10.2793 11.4381Z"
        fill="#1C1C1C"
      />
    </svg>
  );
}

function ExpertShieldIcon({ size = 30 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 31 31"
      fill="none"
      className="shrink-0"
      style={{ width: size, height: size }}
    >
      <path
        d="M30.0039 8.18734C29.6411 6.15767 28.6312 4.34371 27.18 3.0004C25.8857 1.79436 24.2483 0.951107 22.4343 0.627535C20.1203 0.215717 17.7474 0 15.3157 0C12.884 0 10.5112 0.215717 8.19715 0.627535C6.27533 0.970717 4.54961 1.8924 3.22591 3.21611C1.90221 4.53981 0.970714 6.26553 0.627532 8.19715C0.215714 10.5112 0 12.884 0 15.3157C0 17.7474 0.215714 20.1203 0.627532 22.4343C0.970714 24.3561 1.8924 26.072 3.2063 27.3957C4.53 28.7292 6.25572 29.6607 8.18734 30.0039C10.5014 30.4157 12.8742 30.6314 15.3059 30.6314C17.7376 30.6314 20.1105 30.4157 22.4245 30.0039C24.5522 29.6215 26.4348 28.5233 27.8076 26.9643C28.9155 25.7092 29.6902 24.1502 29.9941 22.4343C30.4059 20.1203 30.6216 17.7474 30.6216 15.3157C30.6216 12.884 30.4059 10.5112 29.9941 8.19715L30.0039 8.18734Z"
        fill="#003EB6"
      />
      <path
        d="M9.2462 20.5125C8.46178 21.091 7.79503 21.7969 7.28516 22.6304C8.59905 24.7679 10.9425 26.121 13.4526 26.1897C13.8644 25.4249 14.139 24.611 14.2665 23.758C14.5116 22.1499 14.2272 20.4928 13.4526 19.0613C11.9328 19.1005 10.4718 19.6006 9.23639 20.5027L9.2462 20.5125Z"
        fill="white"
      />
      <path
        d="M17.8064 4.40259C17.2181 5.49097 16.9043 6.72642 16.9043 7.96188C16.9043 9.19733 17.2181 10.4328 17.8064 11.5212C19.4242 11.4721 21.0127 10.8936 22.2776 9.88369C22.9541 9.34441 23.5228 8.69727 23.9739 7.96188C22.66 5.82434 20.3165 4.47122 17.8064 4.40259Z"
        fill="white"
      />
      <path
        d="M8.2164 18.0611C9.48127 17.4434 10.5402 16.4825 11.2854 15.2862C10.55 14.0802 9.50089 13.1193 8.23601 12.4819C7.2751 12.0015 6.20634 11.7269 5.12776 11.6975C3.92172 13.9037 3.91192 16.6099 5.09835 18.8259C6.17692 18.7965 7.24569 18.5415 8.2164 18.0709V18.0611Z"
        fill="white"
      />
      <path
        d="M21.7578 20.3261C20.5812 19.5417 19.2182 19.1103 17.8161 19.071C17.1493 20.3065 16.8356 21.7086 16.9336 23.1206C17.0023 24.1894 17.3062 25.2581 17.8161 26.1994C20.3262 26.1308 22.6697 24.7777 23.9836 22.6401C23.4149 21.7184 22.6501 20.9242 21.7578 20.3359V20.3261Z"
        fill="white"
      />
      <path
        d="M7.28516 7.97168C7.92249 9.00122 8.80496 9.87389 9.84431 10.4916C10.9327 11.1388 12.178 11.5016 13.4526 11.531C14.0606 10.4132 14.3645 9.15811 14.3547 7.88343C14.3449 6.66759 14.0311 5.47135 13.4526 4.40259C10.9425 4.47122 8.59905 5.82434 7.28516 7.96188V7.97168Z"
        fill="white"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Tabs                                                               */
/* ------------------------------------------------------------------ */

const TABS = [
  "Overview",
  "Safety Index",
  "User Reviews",
  "Expert Review",
  "Bonuses",
];

type UserReview = {
  name: string;
  avatar: string;
  country: string;
  points: number;
  rating: number;
  date: string;
  title: string;
  body: string;
  liked: string[];
  disliked: string[];
  upVotes: number;
  downVotes: number;
  hasVerifiedReview: boolean;
  hasXVerified: boolean;
};

const USER_REVIEWS: UserReview[] = [
  {
    name: "MrRobot",
    avatar: "/hero/casino-1.png",
    country: "es",
    points: 8,
    rating: 2,
    date: "4 months ago",
    title: "Slow 3 withdrawal not acceptable",
    body: "Joined Yeet about a month ago after seeing rektmando the owner on Twitter. The site looks good and has plenty of games and deposits in crypto were super quick. so at first I was happy. The problem came when I tried to withdraw. I made a withdrawal of 800 usdt (around 650 euro at the time), and it went into \u201cmanual review.\u201d After 24 hours, still nothing. Support told me it usually takes \u201ca few hours\u201d but couldn\u2019t give me an actual timeframe. It eventually went through after three full days, but only after I sent them multiple screenshots of my wallet and transaction history even though I\u2019d already completed KYC two weeks earlier. Everything else works fine on the site, but the withdrawal process really killed the trust for me. For a crypto casino, three days is way too long.",
    liked: [
      "Nice site and smooth gameplay",
      "The casino own made games are pretty decent",
      "Good crypto deposit variety",
    ],
    disliked: [
      "Withdrawal took 3 days and required extra verification",
      "Support was slow and vague about what was happening",
    ],
    upVotes: 2,
    downVotes: 0,
    hasVerifiedReview: true,
    hasXVerified: true,
  },
  {
    name: "CryptoKing99",
    avatar: "/hero/casino-2.png",
    country: "gb",
    points: 12,
    rating: 4,
    date: "2 weeks ago",
    title: "Great selection of games and fast payouts",
    body: "Been using this casino for about 3 months now and overall very happy with the experience. They have a huge selection of slots and table games from top providers. Deposits are instant and withdrawals usually process within a few hours. The VIP program is decent too, got some nice bonuses after my first month. Only downside is the live chat can be slow during peak hours.",
    liked: [
      "Huge game selection from top providers",
      "Fast withdrawal processing",
      "Good VIP rewards program",
    ],
    disliked: ["Live chat slow during peak hours"],
    upVotes: 5,
    downVotes: 1,
    hasVerifiedReview: true,
    hasXVerified: false,
  },
  {
    name: "LuckyDegen",
    avatar: "/hero/casino-3.png",
    country: "de",
    points: 5,
    rating: 3,
    date: "1 month ago",
    title: "Decent casino but bonuses could be better",
    body: "The casino itself is solid with good games and a clean interface. My issue is mainly with the bonus terms. The wagering requirements are quite high (45x) compared to other crypto casinos I\u2019ve used. Also had an issue where a bonus was applied incorrectly and it took support 2 days to fix it. Once that was sorted though, everything worked fine. Would recommend for the game variety but look elsewhere if you\u2019re bonus hunting.",
    liked: [
      "Clean and modern interface",
      "Wide variety of games",
      "Crypto deposits are instant",
    ],
    disliked: [
      "High wagering requirements on bonuses",
      "Bonus was applied incorrectly, took 2 days to fix",
    ],
    upVotes: 3,
    downVotes: 2,
    hasVerifiedReview: true,
    hasXVerified: true,
  },
  {
    name: "SatoshiBets",
    avatar: "/hero/casino-1.png",
    country: "jp",
    points: 15,
    rating: 5,
    date: "3 days ago",
    title: "Best crypto casino I've used so far",
    body: "I\u2019ve tried probably 10+ crypto casinos over the past year and this is easily the best one. The provably fair system is transparent, withdrawals are lightning fast (usually under 30 minutes), and the original games are actually fun and well-designed. Customer support has been helpful every time I\u2019ve reached out. The referral program is also generous. Honestly can\u2019t think of any major complaints.",
    liked: [
      "Provably fair and transparent",
      "Withdrawals under 30 minutes",
      "Great original games",
      "Helpful customer support",
    ],
    disliked: ["Mobile app could use some polish"],
    upVotes: 8,
    downVotes: 0,
    hasVerifiedReview: true,
    hasXVerified: true,
  },
  {
    name: "NightOwl42",
    avatar: "/hero/casino-2.png",
    country: "br",
    points: 3,
    rating: 1,
    date: "2 months ago",
    title: "Avoid - account locked with funds inside",
    body: "Had my account locked after winning about 2000 USDT. They said it was for \u201csecurity verification\u201d but after submitting all the documents they asked for, I heard nothing for over a week. When I finally got a response, they said my account was under review and couldn\u2019t give a timeline. It\u2019s been 3 weeks now and I still can\u2019t access my funds. Terrible experience.",
    liked: ["Games were fun while I could play"],
    disliked: [
      "Account locked after winning",
      "No timeline given for resolution",
      "Support is unresponsive",
    ],
    upVotes: 12,
    downVotes: 1,
    hasVerifiedReview: true,
    hasXVerified: false,
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function ReviewBlock({ slug }: { slug: string }) {
  const casino = casinoReviews.find((c) => c.slug === slug) ?? casinoReviews[0];
  const [activeTab, setActiveTab] = useState(0);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [cryptoOpen, setCryptoOpen] = useState(false);
  const [isTabSticky, setIsTabSticky] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Most Helpful");
  const [websiteLangOpen, setWebsiteLangOpen] = useState(false);
  const [supportLangOpen, setSupportLangOpen] = useState(false);
  const [gamesShowAll, setGamesShowAll] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [providersOpen, setProvidersOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const tabSentinelRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  useEffect(() => {
    const el = tabSentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsTabSticky(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Track navbar visibility (same logic as navbar)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 10) {
        setNavbarVisible(true);
      } else if (y < lastScrollY.current) {
        setNavbarVisible(true);
      } else if (y > lastScrollY.current + 5) {
        setNavbarVisible(false);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-update active tab based on scroll position
  useEffect(() => {
    const sectionIds = TABS.map((tab) =>
      tab.toLowerCase().replace(/\s+/g, "-"),
    );
    const handleScroll = () => {
      const offset = 120; // account for sticky tab bar
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            setActiveTab(i);
            return;
          }
        }
      }
      setActiveTab(0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ratingColor =
    RATING_COLORS[Math.min(5, Math.max(1, Math.round(casino.playerRating)))] ??
    RATING_COLORS[3];

  const expertRatingColor =
    RATING_COLORS[Math.min(5, Math.max(1, Math.round(casino.expertScore)))] ??
    RATING_COLORS[3];

  return (
    <div data-section="review-block" className="bg-[#f5f5f5] pb-20">
      {/* ---- Breadcrumb (dark strip) ---- */}
      <div
        data-name="dark-header"
        className="relative bg-[#060D17] pb-28 flex items-center overflow-hidden"
      >
        {/* Dynamic SVG background — fill color matches casino brand */}
        <svg
          data-name="dark-header-bg"
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1600 252"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1600" height="252" fill="#020202" />
          <g opacity="0.6" filter="url(#headerBlur1)">
            <path
              d="M215.048 25.0938L8.41406 -65.9299V-158H1758.79L1732.63 3.64571L1611.79 11.4926L1515.54 74.2676L1373.77 -15.7099L1200.09 53.8657L1075.07 -15.7099L846.983 74.2676L565.542 -82.1468L215.048 25.0938Z"
              fill={casino.brandColor ?? "#003EB6"}
            />
          </g>
          <g filter="url(#headerBlur2)">
            <path
              d="M1384.74 78.0938L1591.37 -12.9299V-105H-159.003L-132.847 56.6457L-12.005 64.4926L84.25 127.268L226.017 37.2901L399.694 106.866L524.721 37.2901L752.804 127.268L1034.24 -29.1468L1384.74 78.0938Z"
              fill={casino.brandColor ?? "#003EB6"}
            />
          </g>
          <defs>
            <filter id="headerBlur1" x="-155.586" y="-322" width="2078.38" height="560.268" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="82" result="effect1_foregroundBlur" />
            </filter>
            <filter id="headerBlur2" x="-323.004" y="-269" width="2078.38" height="560.268" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="82" result="effect1_foregroundBlur" />
            </filter>
          </defs>
        </svg>

        <nav
          data-name="breadcrumb"
          className="relative z-10 mx-auto max-w-[1280px] pt-10 w-full px-5 sm:px-10 flex items-center gap-2 text-sm text-white/60"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="size-3" />
          <Link
            href="/expert-reviews"
            className="hover:text-white transition-colors"
          >
            Best Online Casinos
          </Link>
          <ChevronRight className="size-3" />
          <span className="text-white">{casino.name}</span>
        </nav>
      </div>

      <div
        data-name="content-container"
        className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-10 -mt-24 py-8"
      >
        {/* ---- Two-Column Content ---- */}
        <div
          data-name="review-content-layout"
          className="grid grid-cols-1 lg:grid-cols-[1fr_330px] gap-6"
        >
          {/* ---- Main Column (header card + tab bar + content card) ---- */}
          <div data-name="main-column" className="flex flex-col gap-4">
            {/* ---- Casino Header Card ---- */}
            <div
              data-name="casino-header-card"
              className="rounded-lg border border-neutral-200 bg-white p-5 sm:p-5 shadow-sm"
            >
              <div
                data-name="header-layout"
                className="flex flex-col lg:flex-row gap-6 lg:gap-8"
              >
                {/* Logo */}
                <div
                  data-name="casino-logo"
                  className="flex items-center justify-center w-[140px] h-[115px] rounded-xl overflow-hidden bg-[#060d17] shrink-0"
                >
                  <Image
                    src={casino.logo}
                    alt={casino.name}
                    width={140}
                    height={115}
                    className="object-contain w-full h-full"
                  />
                </div>

                {/* Info */}
                <div
                  data-name="casino-info"
                  className="flex flex-col gap-4 flex-1 min-w-0"
                >
                  {/* Name + CTA */}
                  <div
                    data-name="name-and-cta"
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <h1 className="text-lg font-bold text-[#060D17]">
                      {casino.name}
                    </h1>
                    <Link
                      href="#"
                      className="group inline-flex items-center gap-1.5 rounded-lg border border-[#060D17] px-3.5 py-1.5 text-sm font-semibold text-[#060D17] hover:bg-neutral-100 transition-colors w-fit"
                    >
                      Official Site Info
                      <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>

                  {/* Ratings row */}
                  <div
                    data-name="ratings-row"
                    className="flex flex-wrap items-start gap-6 lg:gap-10"
                  >
                    {/* Player Rating */}
                    <div
                      data-name="player-rating"
                      className="flex items-start gap-2.5"
                    >
                      <PlayerRatingIcon />
                      <div data-name="player-rating-details" className="flex flex-col gap-1">
                        <div data-name="player-rating-value" className="flex items-center gap-1.5">
                          <span className="text-lg font-medium leading-none text-[#060D17]">
                            {casino.playerRating.toFixed(1)}
                          </span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            className="size-5 shrink-0"
                          >
                            <path d={STAR_BG} fill={ratingColor} />
                            <path d={STAR_SHAPE} fill="white" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-neutral-500">
                          Player Rating
                        </p>
                        <p className="text-sm font-medium text-[#2563eb]">
                          {casino.playerReviews} Reviews
                        </p>
                      </div>
                    </div>

                    {/* Expert Score */}
                    <div
                      data-name="expert-score"
                      className="flex items-start gap-2.5"
                    >
                      <ExpertShieldIcon />
                      <div data-name="expert-score-details" className="flex flex-col gap-1">
                        <div data-name="expert-score-value" className="flex items-center gap-1.5">
                          <span className="text-lg font-medium leading-none text-[#060D17]">
                            {casino.expertScore.toFixed(1)}
                          </span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            className="size-5 shrink-0"
                          >
                            <rect
                              width="20"
                              height="20"
                              rx="5"
                              fill="#003EB6"
                            />
                            <path
                              d="M10 4.5C7.1 4.5 4.5 5.87 4.5 5.87V10.5C4.5 13.5 7 15.2 10 16.5C13 15.2 15.5 13.5 15.5 10.5V5.87C15.5 5.87 12.9 4.5 10 4.5Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-neutral-500">
                          Coinbets Expert Score
                        </p>
                        <p className="text-sm font-medium text-[#2563eb]">
                          Independent Audit
                        </p>
                      </div>
                    </div>

                    {/* Views */}
                    <div data-name="views" className="flex items-center gap-2">
                      <Eye className="size-5 text-neutral-400" />
                      <div data-name="views-details" className="flex flex-col">
                        <span className="text-xs font-bold text-neutral-400 uppercase">
                          Views
                        </span>
                        <span className="text-base font-semibold text-[#060D17]">
                          {casino.views}
                        </span>
                      </div>
                    </div>

                    {/* Safety Index */}
                    <div
                      data-name="safety-index"
                      className="flex items-center gap-2"
                    >
                      <div data-name="safety-index-details" className="flex flex-col gap-1">
                        <span className="text-xs font-bold text-neutral-400 uppercase">
                          Safety Index
                        </span>
                        <span
                          className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-[#060d17] w-fit"
                          style={{
                            backgroundColor:
                              SAFETY_COLORS[casino.safetyIndex] || "#eaee45",
                          }}
                        >
                          {casino.safetyIndex}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ---- Tab Bar ---- */}
            <div data-name="tab-sentinel" ref={tabSentinelRef} className="h-0" />
            <div
              data-name="tab-bar"
              className={`sticky z-30 flex items-center bg-[#EBEBEB] p-1 rounded-xl overflow-x-auto transition-[width,margin,top] duration-300 ease-out ${
                isTabSticky
                  ? navbarVisible
                    ? "top-[4.25rem] w-[95%] mx-auto"
                    : "top-[1ch] w-[95%] mx-auto"
                  : "top-0 w-full"
              }`}
              style={{ scrollbarWidth: "none" }}
            >
              {TABS.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(i);
                    const sectionId = tab.toLowerCase().replace(/\s+/g, "-");
                    const el = document.getElementById(sectionId);
                    if (el) {
                      const y =
                        el.getBoundingClientRect().top + window.scrollY - 80;
                      window.scrollTo({ top: y, behavior: "instant" });
                    }
                  }}
                  className={`flex-1 px-2 sm:px-2.5 py-1.5 text-[13px] sm:text-[15px] font-semibold rounded-[10px] transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === i
                      ? "bg-white shadow-sm text-[#060D17]"
                      : "text-[#060D17]/70"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div
              id="overview"
              data-name="main-content"
              className="flex flex-col gap-6 rounded-lg border border-neutral-200 bg-white p-8 shadow-sm"
            >
              {/* Review title + CTA */}
              <div
                data-name="review-header"
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <h2 className="text-base font-bold text-[#060D17]">
                  {casino.reviewTitle}
                </h2>
                <ShimmerButton
                  shimmerColor="#e6b830"
                  shimmerSize="0.05em"
                  shimmerDuration="3s"
                  borderRadius="8px"
                  background="rgba(23, 23, 23, 1)"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium shrink-0"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 31 31"
                    fill="none"
                    className="size-5 shrink-0"
                  >
                    <path
                      d="M30.0039 8.18734C29.6411 6.15767 28.6312 4.34371 27.18 3.0004C25.8857 1.79436 24.2483 0.951107 22.4343 0.627535C20.1203 0.215717 17.7474 0 15.3157 0C12.884 0 10.5112 0.215717 8.19715 0.627535C6.27533 0.970717 4.54961 1.8924 3.22591 3.21611C1.90221 4.53981 0.970714 6.26553 0.627532 8.19715C0.215714 10.5112 0 12.884 0 15.3157C0 17.7474 0.215714 20.1203 0.627532 22.4343C0.970714 24.3561 1.8924 26.072 3.2063 27.3957C4.53 28.7292 6.25572 29.6607 8.18734 30.0039C10.5014 30.4157 12.8742 30.6314 15.3059 30.6314C17.7376 30.6314 20.1105 30.4157 22.4245 30.0039C24.5522 29.6215 26.4348 28.5233 27.8076 26.9643C28.9155 25.7092 29.6902 24.1502 29.9941 22.4343C30.4059 20.1203 30.6216 17.7474 30.6216 15.3157C30.6216 12.884 30.4059 10.5112 29.9941 8.19715L30.0039 8.18734Z"
                      fill="#003EB6"
                    />
                    <path
                      d="M9.2462 20.5125C8.46178 21.091 7.79503 21.7969 7.28516 22.6304C8.59905 24.7679 10.9425 26.121 13.4526 26.1897C13.8644 25.4249 14.139 24.611 14.2665 23.758C14.5116 22.1499 14.2272 20.4928 13.4526 19.0613C11.9328 19.1005 10.4718 19.6006 9.23639 20.5027L9.2462 20.5125Z"
                      fill="white"
                    />
                    <path
                      d="M17.8064 4.40259C17.2181 5.49097 16.9043 6.72642 16.9043 7.96188C16.9043 9.19733 17.2181 10.4328 17.8064 11.5212C19.4242 11.4721 21.0127 10.8936 22.2776 9.88369C22.9541 9.34441 23.5228 8.69727 23.9739 7.96188C22.66 5.82434 20.3165 4.47122 17.8064 4.40259Z"
                      fill="white"
                    />
                    <path
                      d="M8.21543 18.0611C9.4803 17.4434 10.5393 16.4825 11.2845 15.2862C10.5491 14.0802 9.49991 13.1193 8.23504 12.4819C7.27413 12.0015 6.20536 11.7269 5.12679 11.6975C3.92075 13.9037 3.91094 16.6099 5.09737 18.8259C6.17595 18.7965 7.24471 18.5415 8.21543 18.0709V18.0611Z"
                      fill="white"
                    />
                    <path
                      d="M21.7578 20.3261C20.5812 19.5417 19.2182 19.1103 17.8161 19.071C17.1493 20.3065 16.8356 21.7086 16.9336 23.1206C17.0023 24.1894 17.3062 25.2581 17.8161 26.1994C20.3262 26.1308 22.6697 24.7777 23.9836 22.6401C23.4149 21.7184 22.6501 20.9242 21.7578 20.3359V20.3261Z"
                      fill="white"
                    />
                    <path
                      d="M7.28516 7.97168C7.92249 9.00122 8.80496 9.87389 9.84431 10.4916C10.9327 11.1388 12.178 11.5016 13.4526 11.531C14.0606 10.4132 14.3645 9.15811 14.3547 7.88343C14.3449 6.66759 14.0311 5.47135 13.4526 4.40259C10.9425 4.47122 8.59905 5.82434 7.28516 7.96188V7.97168Z"
                      fill="white"
                    />
                  </svg>
                  Full CoinBets Review
                  <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </ShimmerButton>
              </div>

              {/* Review text */}
              <p
                data-name="review-text"
                className="text-[15px] leading-relaxed text-neutral-600"
              >
                {casino.reviewText}
              </p>

              {/* Pros / Cons */}
              <div
                data-name="pros-cons"
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {/* What We Liked */}
                <div
                  data-name="what-we-liked"
                  className="rounded-lg border border-green-100 bg-[#dcfce7] p-5 "
                >
                  <h3 className="text-xs font-bold text-[#104d0f] uppercase mb-4">
                    What We Liked
                  </h3>
                  <div data-name="liked-items-list" className="flex flex-col gap-3">
                    {casino.whatWeLiked.map((item, i) => (
                      <div key={i} data-name="liked-item" className="flex items-start gap-2.5">
                        <div data-name="liked-item-icon" className="size-6 rounded-full bg-[#167715] flex items-center justify-center shrink-0">
                          <ThumbsUp className="size-3.5 text-white" />
                        </div>
                        <p className="text-sm text-[#14532D]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Red Flags */}
                <div
                  data-name="red-flags"
                  className="rounded-lg border border-red-100 bg-red-50 p-5"
                >
                  <h3 className="text-xs font-bold text-[#7a301f] uppercase mb-4">
                    Red Flags
                  </h3>
                  <div data-name="red-flags-list" className="flex flex-col gap-3">
                    {casino.redFlags.map((item, i) => (
                      <div key={i} data-name="red-flag-item" className="flex items-start gap-2.5">
                        <div data-name="red-flag-item-icon" className="size-6 rounded-full bg-[#da3131] flex items-center justify-center shrink-0">
                          <Flag className="size-3.5 text-white" />
                        </div>
                        <p className="text-sm text-[#7f1d1d]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ---- Safety Index Section ---- */}
            <div
              id="safety-index"
              data-name="safety-index-section"
              className="rounded-lg border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col gap-6"
            >
              <div data-name="safety-header" className="flex flex-col gap-3">
                <h2
                  data-name="safety-title"
                  className="text-base font-bold text-[#060D17]"
                >
                  CoinBets Safety Index Explained: {casino.name}
                </h2>
                <p
                  data-name="safety-description"
                  className="text-[15px] leading-relaxed text-neutral-600"
                >
                  Curious how {casino.name} performs on trust and fairness?
                  Below is a breakdown of the unique factors we considered when
                  calculating its CoinBets Safety Index. This rating is based on
                  objective criteria including licensing, player reports, game
                  fairness, and operational transparency. Our goal is to inform
                  players with verified data, not to promote or recommend any
                  casino.
                </p>
              </div>

              <div
                data-name="safety-body"
                className="flex flex-col sm:flex-row gap-6"
              >
                {/* Score card */}
                <div
                  data-name="safety-score-card"
                  className="flex flex-col items-start justify-center rounded-xl p-6 sm:p-8 min-w-[180px]"
                  style={{
                    backgroundColor:
                      RATING_COLORS[
                        casino.safetyScore >= 7.5
                          ? 5
                          : casino.safetyScore >= 5.5
                            ? 4
                            : casino.safetyScore >= 3.5
                              ? 3
                              : casino.safetyScore >= 1.5
                                ? 2
                                : 1
                      ],
                  }}
                >
                  <div data-name="safety-score-value" className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-white">
                      {casino.safetyScore.toFixed(1)}
                    </span>
                    <span className="text-lg font-medium text-white/70">
                      / 10
                    </span>
                  </div>
                  <div data-name="safety-score-badge" className="flex items-center gap-2 mt-2">
                    <span className="text-sm font-medium text-white/80">
                      Safety Index:
                    </span>
                    <span className="rounded-md bg-white/20 px-2 py-0.5 text-xs font-bold text-white">
                      {casino.safetyIndex}
                    </span>
                  </div>
                </div>

                {/* Factors list */}
                <div
                  data-name="safety-factors"
                  className="flex flex-1 flex-col gap-3"
                >
                  {casino.safetyFactors.map((factor, i) => (
                    <div
                      key={i}
                      data-name="safety-factor-row"
                      className="flex items-center justify-between gap-4 rounded-lg border border-neutral-200 bg-neutral-50 px-5 py-3.5"
                    >
                      <span className="text-[15px] text-neutral-700">
                        {factor}
                      </span>
                      <Popover>
                        <PopoverTrigger>
                          <Info className="size-5 shrink-0 text-neutral-300 hover:text-neutral-500 transition-colors cursor-pointer" />
                        </PopoverTrigger>
                        <PopoverContent className="w-auto max-w-xs text-xs px-3 py-1.5">
                          {factor}
                        </PopoverContent>
                      </Popover>
                    </div>
                  ))}
                </div>
              </div>

              {/* Disclaimer */}
              <div
                data-name="safety-disclaimer"
                className="border-t border-neutral-200 pt-5"
              >
                <p className="text-sm leading-relaxed text-neutral-500">
                  Disclaimer: This Safety Index reflects CoinBets&apos;
                  independent research and is not an endorsement of the casino.{" "}
                  <span className="text-[#003EB6] cursor-pointer hover:underline">
                    Learn how we rate casinos.
                  </span>
                </p>
              </div>

              {/* Complaint CTA */}
              <div
                data-name="safety-complaint"
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <span className="text-base font-bold text-[#060D17]">
                  Has this casino done something unfair to you?
                </span>
                <button className="flex items-center gap-2 rounded-lg bg-[#7a1a1a] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#5c1414] transition-colors">
                  Submit a complaint
                  <Pencil className="size-4" />
                </button>
              </div>

              {/* Complaints count */}
              <p
                data-name="complaints-count"
                className="text-center text-sm font-bold text-[#060D17]"
              >
                Complaints about {casino.name} (0)
              </p>
            </div>

            {/* ---- User Feedback Summary ---- */}
            <div
              id="user-reviews"
              data-name="user-feedback-summary"
              className="rounded-lg border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col gap-6"
            >
              {/* Top row: question + write review */}
              <div
                data-name="feedback-top"
                className="flex items-center justify-between gap-4"
              >
                <p
                  data-name="feedback-question"
                  className="text-base font-bold text-[#060D17]"
                >
                  Do you have any experience with {casino.name}?
                </p>
                <button
                  data-name="write-review-btn"
                  className="shrink-0 flex items-center gap-2 rounded-lg bg-[#003EB6] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#002d8a] transition-colors"
                >
                  Write a Review
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="size-4"
                  >
                    <path
                      d="M11.333 2.00004C11.5081 1.82494 11.716 1.68605 11.9447 1.59129C12.1735 1.49653 12.4187 1.44775 12.6663 1.44775C12.914 1.44775 13.1592 1.49653 13.388 1.59129C13.6167 1.68605 13.8246 1.82494 13.9997 2.00004C14.1748 2.17513 14.3137 2.38308 14.4084 2.61182C14.5032 2.84057 14.552 3.08575 14.552 3.33337C14.552 3.581 14.5032 3.82618 14.4084 4.05493C14.3137 4.28367 14.1748 4.49162 13.9997 4.66671L4.99967 13.6667L1.33301 14.6667L2.33301 11L11.333 2.00004Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Feedback stats + rating scale */}
              <div
                data-name="feedback-stats"
                className="flex flex-col sm:flex-row gap-6 sm:gap-10"
              >
                {/* Left: score */}
                <div data-name="feedback-score" className="flex flex-col gap-1">
                  <span
                    data-name="feedback-label"
                    className="text-xs font-bold text-neutral-500 uppercase tracking-wide"
                  >
                    User Feedback:
                  </span>
                  <span
                    data-name="feedback-value"
                    className="text-lg font-bold text-[#060D17]"
                  >
                    {casino.playerRating} –{" "}
                    <span style={{ color: ratingColor }}>
                      {casino.playerRating >= 4.5
                        ? "EXCELLENT"
                        : casino.playerRating >= 3.5
                          ? "GOOD"
                          : casino.playerRating >= 2.5
                            ? "OK"
                            : casino.playerRating >= 1.5
                              ? "BAD"
                              : "TERRIBLE"}
                    </span>
                  </span>
                  <span
                    data-name="feedback-total"
                    className="text-sm text-neutral-500"
                  >
                    63 total
                  </span>
                </div>

                {/* Right: rating scale bars */}
                <div
                  data-name="feedback-scale"
                  className="flex flex-1 items-end gap-0"
                >
                  {[
                    { score: 5, label: "EXCELLENT", color: "#23BA21" },
                    { score: 4, label: "GOOD", color: "#9FF11A" },
                    { score: 3, label: "OK", color: "#D8DC00" },
                    { score: 2, label: "BAD", color: "#FFB257" },
                    { score: 1, label: "TERRIBLE", color: "#FF6847" },
                  ].map((item, i) => (
                    <div
                      key={item.score}
                      data-name="scale-item"
                      className="flex flex-1 flex-col items-center gap-1.5"
                    >
                      <span className="text-lg font-bold text-[#060D17]">
                        {item.score}
                      </span>
                      <div
                        data-name="scale-bar"
                        className={`w-full h-2.5 ${i === 0 ? "rounded-l-full" : ""} ${i === 4 ? "rounded-r-full" : ""}`}
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-wide">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Star distribution bars */}
              <div
                data-name="feedback-distribution"
                className="flex flex-col gap-3"
              >
                {[
                  { stars: 5, percent: 27 },
                  { stars: 4, percent: 41 },
                  { stars: 3, percent: 24 },
                  { stars: 2, percent: 3 },
                  { stars: 1, percent: 5 },
                ].map((row) => (
                  <div
                    key={row.stars}
                    data-name="distribution-row"
                    className="flex items-center gap-3"
                  >
                    <Checkbox />
                    <span
                      data-name="star-label"
                      className="text-sm font-semibold text-[#060D17] w-12"
                    >
                      {row.stars}-star
                    </span>
                    <div
                      data-name="bar-track"
                      className="flex-1 h-3 bg-neutral-200 rounded-full overflow-hidden"
                    >
                      <div
                        data-name="bar-fill"
                        className="h-full rounded-full"
                        style={{
                          width: `${row.percent}%`,
                          backgroundColor: RATING_COLORS[row.stars],
                        }}
                      />
                    </div>
                    <span
                      data-name="bar-percent"
                      className="text-sm font-semibold text-[#060D17] w-10 text-right"
                    >
                      {row.percent}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* User Reviews heading + sort */}
            <div
              data-name="user-reviews-header"
              className="flex items-center justify-between"
            >
              <h2
                data-name="user-reviews-title"
                className="text-base font-bold text-[#060D17]"
              >
                User Reviews
              </h2>
              <Popover open={sortOpen} onOpenChange={setSortOpen}>
                <PopoverTrigger>
                  <div
                    data-name="user-reviews-sort"
                    className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-[#060D17] hover:bg-neutral-50 transition-colors cursor-pointer"
                  >
                    {sortBy}
                    <ChevronDown className="size-4 text-neutral-500" />
                  </div>
                </PopoverTrigger>
                <PopoverContent
                  data-name="sort-dropdown"
                  align="end"
                  className="w-[180px] p-1"
                >
                  {[
                    "Most Helpful",
                    "Most Recent",
                    "Highest Rated",
                    "Lowest Rated",
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSortBy(option);
                        setSortOpen(false);
                      }}
                      className={`flex w-full items-center rounded-md px-3 py-2 text-sm transition-colors ${
                        sortBy === option
                          ? "bg-neutral-100 font-semibold text-[#060D17]"
                          : "text-neutral-600 hover:bg-neutral-50"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </PopoverContent>
              </Popover>
            </div>

            {/* ---- User Review Cards ---- */}
            {USER_REVIEWS.map((review, idx) => {
              const reviewRatingColor =
                RATING_COLORS[
                  Math.min(5, Math.max(1, Math.round(review.rating)))
                ] ?? RATING_COLORS[3];
              return (
                <div
                  key={idx}
                  data-name="user-review-card"
                  className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm"
                >
                  {/* Reviewer header */}
                  <div
                    data-name="reviewer-header"
                    className="flex items-start gap-4"
                  >
                    <div
                      data-name="reviewer-avatar"
                      className="relative shrink-0"
                    >
                      <div
                        data-name="avatar-image"
                        className="size-16 rounded-full bg-neutral-200 overflow-hidden"
                      >
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          width={64}
                          height={64}
                          className="size-full object-cover"
                        />
                      </div>
                      <span
                        data-name="reviewer-points"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full bg-[#167715] px-2 py-0.5 text-[10px] font-bold text-white whitespace-nowrap"
                      >
                        {review.points} pts
                      </span>
                    </div>
                    <div
                      data-name="reviewer-info"
                      className="flex flex-col gap-1.5"
                    >
                      <span
                        data-name="reviewer-name"
                        className="flex items-center gap-1.5 text-base font-bold text-[#060D17]"
                      >
                        {review.name}
                        <span
                          data-name="country-flag"
                          className={`fi fi-${review.country} fis rounded-full overflow-hidden`}
                          style={{ width: 16, height: 16 }}
                        />
                      </span>
                      <div
                        data-name="reviewer-badges"
                        className="flex flex-wrap items-center gap-1"
                      >
                        {review.hasVerifiedReview && (
                          <span
                            data-name="badge-verified-review"
                            className="inline-flex items-center gap-[5px] rounded-[4px] bg-[#003EB6] px-2 py-[4px] text-xs text-white"
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              className="size-3.5 shrink-0"
                            >
                              <path
                                d="M13.4154 7L11.992 5.3725L12.1904 3.22L10.0845 2.74167L8.98203 0.875L6.9987 1.72667L5.01537 0.875L3.91287 2.73583L1.80703 3.20833L2.00536 5.36667L0.582031 7L2.00536 8.6275L1.80703 10.7858L3.91287 11.2642L5.01537 13.125L6.9987 12.2675L8.98203 13.1192L10.0845 11.2583L12.1904 10.78L11.992 8.6275L13.4154 7ZM5.88453 9.75333L3.66787 7.53083L4.5312 6.6675L5.88453 8.02667L9.29703 4.6025L10.1604 5.46583L5.88453 9.75333Z"
                                fill="white"
                              />
                            </svg>
                            Verified Review
                          </span>
                        )}
                        {review.hasXVerified && (
                          <span
                            data-name="badge-x-verified"
                            className="inline-flex items-center gap-[5px] rounded-[4px] bg-black px-2 py-[4px] text-xs text-white"
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              className="size-3.5 shrink-0"
                            >
                              <path
                                d="M8.32 5.93L13.49 0H12.27L7.78 5.15L4.2 0H0L5.42 7.78L0 14H1.22L5.96 8.56L9.74 14H13.94L8.32 5.93ZM6.58 7.85L6.03 7.08L1.66 0.91H3.61L7.07 5.89L7.62 6.66L12.27 13.13H10.32L6.58 7.85Z"
                                fill="white"
                              />
                            </svg>
                            Verified Account
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div
                    data-name="reviewer-rating"
                    className="mt-5 rounded-lg bg-neutral-50 p-4"
                  >
                    <div
                      data-name="rating-score"
                      className="flex items-center gap-2"
                    >
                      <span
                        data-name="rating-number"
                        className="text-3xl font-bold"
                        style={{ color: reviewRatingColor }}
                      >
                        {review.rating}
                      </span>
                      <span
                        data-name="rating-max"
                        className="text-sm text-neutral-500"
                      >
                        / 5
                      </span>
                      <div
                        data-name="rating-stars"
                        className="flex items-center gap-0.5 ml-2"
                      >
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            className="size-5"
                          >
                            <path
                              d={STAR_BG}
                              fill={
                                star <= review.rating
                                  ? reviewRatingColor
                                  : "#E5E7EB"
                              }
                            />
                            <path d={STAR_SHAPE} fill="white" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p
                      data-name="rating-date"
                      className="text-sm text-neutral-500 mt-1"
                    >
                      Reviewed{" "}
                      <span className="text-neutral-600">{review.date}</span>
                    </p>
                  </div>

                  <div
                    data-name="divider"
                    className="border-t border-neutral-100 my-5"
                  />

                  {/* Review content */}
                  <div
                    data-name="review-content"
                    className="flex flex-col gap-3"
                  >
                    <h3
                      data-name="review-title"
                      className="text-base font-bold text-[#060D17]"
                    >
                      {review.title}
                    </h3>
                    <p
                      data-name="review-text"
                      className="text-[15px] leading-relaxed text-neutral-600"
                    >
                      {review.body}
                    </p>
                  </div>

                  {/* What I Liked / What I Didn't Like */}
                  <div
                    data-name="review-pros-cons"
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5"
                  >
                    <div
                      data-name="review-what-i-liked"
                      className="rounded-lg border border-green-100 bg-[#dcfce7] p-4"
                    >
                      <h4
                        data-name="liked-heading"
                        className="text-xs font-bold text-[#104d0f] uppercase mb-3"
                      >
                        What I Liked
                      </h4>
                      <div
                        data-name="liked-list"
                        className="flex flex-col gap-2.5"
                      >
                        {review.liked.map((item, i) => (
                          <div
                            key={i}
                            data-name="liked-item"
                            className="flex items-start gap-2"
                          >
                            <div
                              data-name="liked-icon"
                              className="size-5 rounded-full bg-[#167715] flex items-center justify-center shrink-0 mt-0.5"
                            >
                              <Plus className="size-3 text-white" />
                            </div>
                            <p className="text-sm text-[#14532D]">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      data-name="review-what-i-disliked"
                      className="rounded-lg border border-red-100 bg-red-50 p-4"
                    >
                      <h4
                        data-name="disliked-heading"
                        className="text-xs font-bold text-[#7a301f] uppercase mb-3"
                      >
                        What I Didn&apos;t Like
                      </h4>
                      <div
                        data-name="disliked-list"
                        className="flex flex-col gap-2.5"
                      >
                        {review.disliked.map((item, i) => (
                          <div
                            key={i}
                            data-name="disliked-item"
                            className="flex items-start gap-2"
                          >
                            <div
                              data-name="disliked-icon"
                              className="size-5 rounded-full bg-[#da3131] flex items-center justify-center shrink-0 mt-0.5"
                            >
                              <Minus className="size-3 text-white" />
                            </div>
                            <p className="text-sm text-[#7f1d1d]">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Helpful footer */}
                  <div
                    data-name="review-footer"
                    className="flex items-center justify-between mt-5 pt-4 border-t border-neutral-100"
                  >
                    <span
                      data-name="helpful-label"
                      className="text-sm text-neutral-500"
                    >
                      Is this helpful?
                    </span>
                    <div
                      data-name="helpful-actions"
                      className="flex items-center gap-3"
                    >
                      <button
                        data-name="vote-up"
                        className="size-8 rounded-full border border-neutral-200 hover:bg-neutral-50 flex items-center justify-center transition-colors"
                      >
                        <ThumbsUp className="size-4 text-neutral-500" />
                      </button>
                      <span
                        data-name="vote-up-count"
                        className="text-sm text-neutral-500"
                      >
                        ({review.upVotes})
                      </span>
                      <button
                        data-name="vote-down"
                        className="size-8 rounded-full border border-neutral-200 hover:bg-neutral-50 flex items-center justify-center transition-colors"
                      >
                        <ThumbsDown className="size-4 text-neutral-500" />
                      </button>
                      <span
                        data-name="vote-down-count"
                        className="text-sm text-neutral-500"
                      >
                        ({review.downVotes})
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* See all reviews */}
            <button
              data-name="see-all-reviews"
              className="mx-auto flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-[#060D17] hover:bg-neutral-50 transition-colors shadow-sm"
            >
              See more reviews
              <span className="text-neutral-400">+3</span>
              <ChevronRight className="size-4 text-neutral-400" />
            </button>

            {/* ---- Expert Review Section ---- */}
            <ExpertReviewBlock casino={casino} />

            {/* ---- Bonuses Section ---- */}
            <div
              id="bonuses"
              data-name="bonuses-section"
              className="rounded-lg border border-neutral-200 bg-white p-8 shadow-sm flex flex-col gap-5"
            >
              <h2
                data-name="bonuses-title"
                className="text-base font-bold text-[#060D17]"
              >
                {casino.name} Bonuses
              </h2>
              <p
                data-name="bonuses-text"
                className="text-[15px] leading-relaxed text-neutral-600"
              >
                {casino.name} skips the usual welcome bonus, instead focusing on
                crypto-only wager races, leaderboards, and VIP rewards.
                It&apos;s a different approach for a crypto casino, but at least
                it&apos;s transparent. Explore all {casino.name} casino bonuses
                and promotions below (availability may vary)
              </p>
              <div
                data-name="bonuses-disclaimer"
                className="rounded-xl bg-[#efefef] p-5"
              >
                <p className="text-[15px] leading-relaxed text-neutral-700">
                  <span className="font-bold text-[#003EB6]">Disclaimer:</span>{" "}
                  CoinBets is fully independent, with no affiliate links or
                  financial incentives. Our bonus breakdowns are unbiased, but
                  always verify terms with the casino, as they may change.
                </p>
              </div>
            </div>
          </div>

          {/* ---- Sidebar ---- */}
          <div data-name="sidebar" className="flex flex-col gap-2">
            {/* Crypto Payments */}
            <Collapsible
              open={cryptoOpen}
              onOpenChange={setCryptoOpen}
              data-name="crypto-payments"
              className="rounded-lg border border-neutral-200 bg-white shadow-sm"
            >
              <div data-name="crypto-payments-content" className="p-5">
                <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">
                  Crypto Accepted
                </h3>
                <div data-name="crypto-icons-preview" className="flex flex-wrap items-center gap-2">
                  {casino.cryptoAccepted.slice(0, 5).map((crypto, i) => (
                    <Image
                      key={i}
                      src={crypto.icon}
                      alt={crypto.name}
                      width={36}
                      height={36}
                      className="size-9 object-contain"
                    />
                  ))}
                </div>
                <AnimatePresence initial={false}>
                  {cryptoOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div data-name="crypto-expanded-list" className="flex flex-col mt-4 border-t border-neutral-100">
                        {casino.cryptoAccepted.map((crypto, i) => (
                          <div
                            key={i}
                            data-name="crypto-list-item"
                            className="flex items-center gap-3 py-3 border-b border-neutral-100 last:border-b-0"
                          >
                            <Image
                              src={crypto.icon}
                              alt={crypto.name}
                              width={32}
                              height={32}
                              className="size-8 object-contain"
                            />
                            <span className="text-sm font-medium text-[#060D17]">
                              {crypto.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <CollapsibleTrigger className="flex items-center justify-center gap-1 w-full border-t border-neutral-100 py-3 text-sm font-medium text-[#003EB6] hover:bg-neutral-50 transition-colors [&[data-state=open]>svg]:rotate-180">
                See more
                <ChevronDown className="size-4 transition-transform" />
              </CollapsibleTrigger>
            </Collapsible>

            {/* Independence Card */}
            <div
              data-name="independence-card"
              className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm"
            >
              <div data-name="independence-content" className="flex items-start gap-3">
                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" className="size-[37px] shrink-0">
                  <path d="M0 6C0 2.68629 2.68629 0 6 0H31C34.3137 0 37 2.68629 37 6V31C37 34.3137 34.3137 37 31 37H6C2.68629 37 0 34.3137 0 31V6Z" fill="#E7E7E7"/>
                  <path d="M18.5 5.78949L8 8.03372V19.7445C8 21.6623 8.75299 23.5189 10.0916 24.9267C12.5807 27.4974 15.3835 29.5784 18.5 31.2105C21.6165 29.5784 24.4193 27.4974 26.9084 24.9267C28.2679 23.5189 29 21.6623 29 19.7445V8.03372L18.5 5.78949Z" fill="#0945B8"/>
                </svg>
                <div data-name="independence-text" className="flex flex-col gap-2">
                  <p className="text-base font-semibold text-[#060D17]">
                    CoinBets is 100% Independent
                  </p>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    The only site not paid by casinos. No affiliate links, no
                    casino money. Just real deposits and real reviews.
                  </p>
                </div>
              </div>
            </div>

            {/* Video Review */}
            <div
              data-name="video-review"
              className="rounded-lg border border-neutral-200 bg-white shadow-sm overflow-hidden"
            >
              <button
                data-name="video-thumbnail"
                className="relative flex w-full h-[200px] items-center justify-center bg-[#060D17] cursor-pointer overflow-hidden"
                onClick={() => setVideoOpen(true)}
              >
                {casino.videoUrl && (
                  <Image
                    src={`https://img.youtube.com/vi/${casino.videoUrl.split("/embed/")[1]?.split("?")[0]}/maxresdefault.jpg`}
                    alt={`${casino.name} video review`}
                    fill
                    className="object-cover"
                  />
                )}
                <span className="relative flex items-center justify-center size-14 rounded-full bg-[#eab914] hover:bg-[#d4a812] transition-colors">
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                    <path
                      d="M17 8.268a2 2 0 0 1 0 3.464L3.5 19.124A2 2 0 0 1 .5 17.392V2.608A2 2 0 0 1 3.5.876L17 8.268Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </button>
              <div data-name="video-label" className="bg-[#003EB6] px-4 py-2">
                <p className="text-xs font-bold text-white uppercase tracking-wider text-center">
                  Coinbet Expert Review
                </p>
              </div>
              <div data-name="video-cta" className="p-3">
                <button
                  onClick={() => setVideoOpen(true)}
                  className="group flex w-full items-center justify-between rounded-lg bg-[#eab914] px-4 py-2.5 text-sm font-semibold text-[#171717] hover:bg-[#d4a812] transition-colors cursor-pointer"
                >
                  Watch Review
                  <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>

            {/* Video Modal */}
            <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
              <DialogContent
                className="sm:max-w-7xl p-0 overflow-hidden bg-black border-none"
                showCloseButton
              >
                <div data-name="video-modal-player" className="relative w-full aspect-video">
                  {videoOpen && (
                    <iframe
                      src={
                        casino.videoUrl
                          ? `${casino.videoUrl}${casino.videoUrl.includes("?") ? "&" : "?"}autoplay=1`
                          : "about:blank"
                      }
                      title={`${casino.name} Video Review`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  )}
                </div>
              </DialogContent>
            </Dialog>

            {/* Casino Screenshots */}
            <div
              data-name="screenshots-carousel"
              className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm"
            >
              <div
                data-name="screenshots-header"
                className="flex items-center justify-between mb-4"
              >
                <h3 className="text-sm font-bold text-[#060D17]">
                  Casino Screenshots
                </h3>
                <div data-name="screenshot-controls" className="flex items-center gap-2 relative z-10">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentScreenshot((p) =>
                        p === 0 ? casino.screenshots.length - 1 : p - 1,
                      );
                    }}
                    className="size-7 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="size-4 text-neutral-600" />
                  </button>
                  <span className="text-xs text-neutral-500 tabular-nums">
                    {currentScreenshot + 1} / {casino.screenshots.length}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentScreenshot((p) =>
                        p === casino.screenshots.length - 1 ? 0 : p + 1,
                      );
                    }}
                    className="size-7 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-colors cursor-pointer"
                  >
                    <ChevronRight className="size-4 text-neutral-600" />
                  </button>
                </div>
              </div>
              <button
                type="button"
                data-name="screenshot-image"
                className="overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity w-full"
                onClick={() => { setGalleryIndex(currentScreenshot); setGalleryOpen(true); }}
              >
                <Image
                  key={currentScreenshot}
                  src={casino.screenshots[currentScreenshot]}
                  alt={`${casino.name} screenshot ${currentScreenshot + 1}`}
                  width={380}
                  height={220}
                  className="w-full h-[200px] object-cover rounded-lg"
                />
              </button>
            </div>

            {/* Accepting players from */}
            <div
              data-name="accepting-players"
              className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm"
            >
              <h3
                data-name="accepting-players-title"
                className="text-base font-bold text-[#060D17] mb-3"
              >
                Accepting players from
              </h3>
              <div
                data-name="accepting-players-country"
                className="flex items-center gap-2.5"
              >
                <span
                  data-name="accepting-players-flag"
                  className="fi fi-am fis rounded-full overflow-hidden"
                  style={{ width: 24, height: 24 }}
                />
                <span
                  data-name="accepting-players-name"
                  className="text-sm font-medium text-[#060D17]"
                >
                  Armenia
                </span>
                <svg
                  data-name="accepting-players-check"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="size-[18px] shrink-0"
                >
                  <circle cx="9" cy="9" r="9" fill="#167715" />
                  <path
                    d="M5.5 9L8 11.5L12.5 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Languages */}
            <div
              data-name="languages-section"
              className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm flex flex-col gap-4"
            >
              {/* Website languages */}
              <Field>
                <FieldLabel className="text-base font-bold text-[#060D17]">
                  Website languages
                </FieldLabel>
                <Collapsible
                  open={websiteLangOpen}
                  onOpenChange={setWebsiteLangOpen}
                >
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border border-neutral-200 px-4 py-3 text-sm font-medium text-[#060D17] hover:bg-neutral-50 transition-colors">
                    All Languages ({casino.websiteLanguages.length})
                    <ChevronDown className="size-4 text-neutral-400 transition-transform [&[data-state=open]]:rotate-180" />
                  </CollapsibleTrigger>
                  <AnimatePresence initial={false}>
                    {websiteLangOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <div data-name="website-languages-list" className="mt-2 flex flex-wrap gap-1.5">
                          {casino.websiteLanguages.map((lang) => (
                            <Badge
                              key={lang}
                              variant="secondary"
                              className="gap-1.5 px-2.5 py-1 h-auto"
                            >
                              <span
                                className={`fi fi-${LANG_FLAGS[lang] ?? "xx"} fis rounded-full overflow-hidden shrink-0`}
                                style={{ width: 14, height: 14 }}
                              />
                              {lang}
                            </Badge>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Collapsible>
              </Field>

              {/* Support languages */}
              <Field>
                <FieldLabel className="text-base font-bold text-[#060D17]">
                  Customer support
                </FieldLabel>
                <Collapsible
                  open={supportLangOpen}
                  onOpenChange={setSupportLangOpen}
                >
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border border-neutral-200 px-4 py-3 text-sm font-medium text-[#060D17] hover:bg-neutral-50 transition-colors">
                    Available ({casino.supportLanguages.length})
                    <ChevronDown className="size-4 text-neutral-400 transition-transform [&[data-state=open]]:rotate-180" />
                  </CollapsibleTrigger>
                  <AnimatePresence initial={false}>
                    {supportLangOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <div data-name="support-languages-list" className="mt-2 flex flex-wrap gap-1.5">
                          {casino.supportLanguages.map((lang) => (
                            <Badge
                              key={lang}
                              variant="secondary"
                              className="gap-1.5 px-2.5 py-1 h-auto"
                            >
                              <span
                                className={`fi fi-${LANG_FLAGS[lang] ?? "xx"} fis rounded-full overflow-hidden shrink-0`}
                                style={{ width: 14, height: 14 }}
                              />
                              {lang}
                            </Badge>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Collapsible>
              </Field>
            </div>

            {/* Games */}
            <Collapsible
              open={gamesShowAll}
              onOpenChange={setGamesShowAll}
              data-name="games-section"
              className="rounded-lg border border-neutral-200 bg-white shadow-sm"
            >
              <div data-name="games-content" className="p-5">
                <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">
                  Games
                </h3>
                <div data-name="games-icons-preview" className="flex flex-wrap items-center gap-2">
                  {casino.games
                    .filter((g) => g in GAME_ICONS)
                    .slice(0, 5)
                    .map((game) => (
                      <span
                        key={game}
                        className="shrink-0 flex items-center justify-center size-10 rounded-full bg-neutral-100"
                      >
                        {GAME_ICONS[game]}
                      </span>
                    ))}
                </div>
                <AnimatePresence initial={false}>
                  {gamesShowAll && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div data-name="games-expanded-list" className="flex flex-col mt-4 border-t border-neutral-100">
                        {casino.games
                          .filter((g) => g in GAME_ICONS)
                          .map((game) => (
                            <div
                              key={game}
                              data-name="game-list-item"
                              className="flex items-center gap-3 py-3 border-b border-neutral-100 last:border-b-0"
                            >
                              <span className="shrink-0 flex items-center justify-center size-10 rounded-full bg-neutral-100">
                                {GAME_ICONS[game]}
                              </span>
                              <span className="text-sm font-medium text-[#060D17]">
                                {game}
                              </span>
                            </div>
                          ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <CollapsibleTrigger className="flex items-center justify-center gap-1 w-full border-t border-neutral-100 py-3 text-sm font-medium text-[#003EB6] hover:bg-neutral-50 transition-colors [&[data-state=open]>svg]:rotate-180">
                See more
                <ChevronDown className="size-4 transition-transform" />
              </CollapsibleTrigger>
            </Collapsible>

            {/* Information */}
            <div
              data-name="casino-information"
              className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-lg font-bold text-[#060D17] mb-4">
                Information
              </h3>
              <div data-name="information-details" className="flex flex-col divide-y divide-neutral-100">
                <div data-name="info-owner" className="pb-3">
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">
                    Owner
                  </p>
                  <p className="text-base font-semibold text-[#060D17]">
                    {casino.owner}
                  </p>
                </div>
                <div data-name="info-established" className="py-3">
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">
                    Established
                  </p>
                  <p className="text-base font-semibold text-[#060D17]">
                    {casino.established}
                  </p>
                </div>
                <div data-name="info-revenue" className="py-3">
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">
                    Estimated Annual Revenues
                  </p>
                  <p className="text-base font-semibold text-[#060D17]">
                    {casino.estimatedRevenue}
                  </p>
                </div>
                <div data-name="info-licensing" className="pt-3">
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">
                    Licensing Authorities
                  </p>
                  <div data-name="licensing-list" className="flex flex-col gap-2 mt-2">
                    {casino.licensingAuthorities.map((auth, i) => (
                      <div key={i} data-name="licensing-item" className="flex items-center gap-2">
                        <span
                          className={`fi fi-${auth.flag} fis rounded-full overflow-hidden shrink-0`}
                          style={{ width: 20, height: 20 }}
                        />
                        <span className="text-base font-semibold text-[#060D17]">
                          {auth.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Game Providers */}
            <Collapsible
              open={providersOpen}
              onOpenChange={setProvidersOpen}
              data-name="game-providers"
              className="rounded-lg border border-neutral-200 bg-white shadow-sm"
            >
              <div data-name="providers-content" className="p-5">
                <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-4">
                  Game Providers
                </h3>
                <div data-name="providers-grid" className="grid grid-cols-2 gap-2">
                  {casino.gameProviders.slice(0, 4).map((provider) => (
                    <div
                      key={provider.name}
                      data-name="provider-item"
                      className="flex items-center justify-center rounded-lg bg-neutral-50 border border-neutral-100 p-3 h-14"
                    >
                      <Image
                        src={provider.image}
                        alt={provider.name}
                        width={120}
                        height={40}
                        className="object-contain max-h-8"
                      />
                    </div>
                  ))}
                </div>
                <AnimatePresence initial={false}>
                  {providersOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div data-name="providers-expanded-grid" className="grid grid-cols-2 gap-2 mt-2">
                        {casino.gameProviders.slice(4).map((provider) => (
                          <div
                            key={provider.name}
                            data-name="provider-expanded-item"
                            className="flex items-center justify-center rounded-lg bg-neutral-50 border border-neutral-100 p-3 h-14"
                          >
                            <Image
                              src={provider.image}
                              alt={provider.name}
                              width={120}
                              height={40}
                              className="object-contain max-h-8"
                            />
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {casino.gameProviders.length > 4 && (
                <CollapsibleTrigger className="flex items-center justify-center gap-1 w-full border-t border-neutral-100 py-3 text-sm font-medium text-[#003EB6] hover:bg-neutral-50 transition-colors [&[data-state=open]>svg]:rotate-180">
                  See more
                  <ChevronDown className="size-4 transition-transform" />
                </CollapsibleTrigger>
              )}
            </Collapsible>

            {/* Author & Contact */}
            <div
              data-name="author-contact"
              className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm"
            >
              <div data-name="author-contact-content" className="flex flex-col gap-6">
                {/* Author */}
                <div data-name="author-section">
                  <h3 className="text-lg font-bold text-[#060D17] mb-3">
                    Author & Guarantor
                  </h3>
                  <div data-name="author-info-row" className="flex items-center gap-3 mb-3">
                    <div data-name="author-avatar" className="size-12 rounded-full bg-[#003EB6] flex items-center justify-center shrink-0">
                      <span className="text-lg font-bold text-white">G</span>
                    </div>
                    <div data-name="author-name-date">
                      <p className="text-sm font-semibold text-[#060D17]">
                        Guilherme V
                      </p>
                      <p className="text-xs text-neutral-500">
                        Last updated: {casino.lastUpdated}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 mb-3">
                    Anything incorrect or missing?
                  </p>
                  <button className="rounded-lg bg-[#003EB6] px-5 py-2 text-sm font-semibold text-white hover:bg-[#002f8a] transition-colors">
                    Let Me Know
                  </button>
                </div>

                {/* Contact */}
                <div data-name="contact-section" className="border-t pt-4 border-neutral-100">
                  <h3 className="text-lg font-bold text-[#060D17] mb-3">
                    Contact info for {casino.name}
                  </h3>
                  <div data-name="contact-email-row" className="flex items-center gap-3">
                    <span className="text-sm font-medium text-neutral-500">
                      Email
                    </span>
                    <span className="text-sm font-medium text-[#003EB6]">
                      {casino.contactEmail}
                    </span>
                  </div>
                  <div data-name="contact-cta" className="mt-4">
                    <button className="group flex items-center gap-2 rounded-lg bg-[#2d6b1e] px-5 py-2 text-sm font-semibold text-white hover:bg-[#245a18] transition-colors">
                      Official Site Info
                      <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* See Other Recommendations */}
            <div data-name="other-recommendations" className="mt-5 ">
              <h3 className="text-lg font-bold text-[#060D17] mb-4">
                See Other Recommendations
              </h3>
              <div data-name="recommendations-list" className="flex flex-col gap-3">
                {casinoReviews
                  .filter((c) => c.slug !== casino.slug)
                  .slice(0, 3)
                  .map((c) => (
                    <CasinoCategoryCard
                      key={c.slug}
                      casino={{
                        logo: c.logo,
                        name: c.name,
                        safetyLevel: c.safetyIndex,
                        safetyColor:
                          c.safetyIndex === "High" ? "#00DE00" : "#EAEE45",
                        rating: c.expertScore,
                        ratingLabel: "Expert Rating",
                      }}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Screenshot Gallery Modal */}
      {galleryOpen && casino.screenshots.length > 0 && (
        <div
          data-name="gallery-overlay"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80"
          onClick={() => setGalleryOpen(false)}
        >
          <div
            data-name="gallery-modal"
            className="relative max-w-[900px] w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setGalleryOpen(false)}
              data-name="gallery-close"
              className="absolute -top-10 right-0 text-white hover:text-neutral-300 transition-colors cursor-pointer"
            >
              <X className="size-6" />
            </button>

            <div data-name="gallery-image" className="relative w-full h-[60vh] rounded-xl overflow-hidden bg-[#11181f]">
              <Image
                src={casino.screenshots[galleryIndex]}
                alt={`Screenshot ${galleryIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>

            <button
              type="button"
              onClick={() => setGalleryIndex((galleryIndex - 1 + casino.screenshots.length) % casino.screenshots.length)}
              data-name="gallery-prev"
              className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center size-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors cursor-pointer"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => setGalleryIndex((galleryIndex + 1) % casino.screenshots.length)}
              data-name="gallery-next"
              className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center size-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors cursor-pointer"
            >
              <ChevronRight className="size-5" />
            </button>

            <div
              data-name="gallery-thumbs"
              className="flex gap-2 mt-3 overflow-x-auto justify-center"
              style={{ scrollbarWidth: "none" }}
            >
              {casino.screenshots.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setGalleryIndex(i)}
                  data-name="gallery-thumb"
                  className={`relative h-[60px] w-[90px] shrink-0 rounded-md overflow-hidden cursor-pointer transition-all ${
                    i === galleryIndex ? "ring-2 ring-white opacity-100" : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image src={src} alt={`Thumb ${i + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

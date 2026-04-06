"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ThumbsUp,
  ThumbsDown,
  Plus,
  Minus,
  X,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import "flag-icons/css/flag-icons.min.css";
import { casinoReviews } from "@/data/casino-reviews";
import { ReviewerAvatar, getRankName } from "@/components/reviewer-avatar";

/* ------------------------------------------------------------------ */
/*  SVG Paths                                                          */
/* ------------------------------------------------------------------ */

const STAR_BG =
  "M15.9988 0H4C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0Z";
const STAR_SHAPE =
  "M10.38 4.035a.75.75 0 0 0-.753 0c-.206.098-.32.269-.377.362a4.7 4.7 0 0 0-.18.34L7.814 7.285l-2.813.411a4.7 4.7 0 0 0-.378.065c-.107.026-.304.081-.46.247a.75.75 0 0 0-.233.716c.03.226.157.387.228.47.074.087.172.182.268.276l2.034 1.981-.48 2.8a4.7 4.7 0 0 0-.055.38c-.009.11-.017.314.092.515a.75.75 0 0 0 .61.443c.224.041.416-.03.517-.072a4.7 4.7 0 0 0 .345-.17l2.514-1.322 2.515 1.322c.118.063.24.127.344.17.102.042.294.113.518.072a.75.75 0 0 0 .61-.443c.108-.2.1-.405.091-.515a4.7 4.7 0 0 0-.055-.38l-.48-2.799 2.035-1.982a4.7 4.7 0 0 0 .268-.275c.071-.083.198-.244.228-.47a.75.75 0 0 0-.232-.717c-.157-.165-.354-.221-.461-.247a4.7 4.7 0 0 0-.378-.065l-2.813-.411-1.257-2.548a4.7 4.7 0 0 0-.18-.34.75.75 0 0 0-.377-.362Z";

const RATING_COLORS: Record<number, string> = {
  1: "#FF6847",
  2: "#FFB257",
  3: "#D8DC00",
  4: "#9FF11A",
  5: "#23BA21",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

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
  casinoSlug: string;
  playerSince?: number;
  wageredAmount?: string;
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
    body: "Joined Yeet about a month ago after seeing rektmando the owner on Twitter. The site looks good and has plenty of games and deposits in crypto were super quick. so at first I was happy. The problem came when I tried to withdraw. I made a withdrawal of 800 usdt (around 650 euro at the time), and it went into \u201cmanual review.\u201d After 24 hours, still nothing. Support told me it usually takes \u201ca few hours\u201d but couldn\u2019t give me an actual timeframe.",
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
    casinoSlug: "stake",
    playerSince: 2021,
    wageredAmount: "$45,200",
  },
  {
    name: "CryptoKing99",
    avatar: "/hero/casino-2.png",
    country: "gb",
    points: 12,
    rating: 4,
    date: "2 weeks ago",
    title: "Great selection of games and fast payouts",
    body: "Been using this casino for about 3 months now and overall very happy with the experience. They have a huge selection of slots and table games from top providers. Deposits are instant and withdrawals usually process within a few hours. The VIP program is decent too, got some nice bonuses after my first month.",
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
    casinoSlug: "shuffle",
    playerSince: 2022,
    wageredAmount: "$128,500",
  },
  {
    name: "LuckyDegen",
    avatar: "/hero/casino-3.png",
    country: "de",
    points: 5,
    rating: 3,
    date: "1 month ago",
    title: "Decent casino but bonuses could be better",
    body: "The casino itself is solid with good games and a clean interface. My issue is mainly with the bonus terms. The wagering requirements are quite high (45x) compared to other crypto casinos I\u2019ve used. Also had an issue where a bonus was applied incorrectly and it took support 2 days to fix it.",
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
    casinoSlug: "roobet",
    playerSince: 2023,
    wageredAmount: "$12,800",
  },
  {
    name: "SatoshiBets",
    avatar: "/hero/casino-1.png",
    country: "jp",
    points: 15,
    rating: 5,
    date: "3 days ago",
    title: "Best crypto casino I've used so far",
    body: "I\u2019ve tried probably 10+ crypto casinos over the past year and this is easily the best one. The provably fair system is transparent, withdrawals are lightning fast (usually under 30 minutes), and the original games are actually fun and well-designed.",
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
    casinoSlug: "bitsler",
    playerSince: 2020,
    wageredAmount: "$310,000",
  },
  {
    name: "NightOwl42",
    avatar: "/hero/casino-2.png",
    country: "br",
    points: 3,
    rating: 1,
    date: "2 months ago",
    title: "Avoid - account locked with funds inside",
    body: "Had my account locked after winning about 2000 USDT. They said it was for \u201csecurity verification\u201d but after submitting all the documents they asked for, I heard nothing for over a week. When I finally got a response, they said my account was under review and couldn\u2019t give a timeline.",
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
    casinoSlug: "menace",
    playerSince: 2024,
    wageredAmount: "$3,400",
  },
];

const STAR_RATING_COLORS: Record<number, string> = {
  1: "#FF6847",
  2: "#FFB257",
  3: "#D8DC00",
  4: "#9FF11A",
  5: "#23BA21",
};

const REVIEWER_RANKINGS = [
  { name: "Rookie Bettor", icon: "/user-level/rookie-bettor.png" },
  { name: "Novice Gambler", icon: "/user-level/novice-gambler.png" },
  { name: "Sharp Shooter", icon: "/user-level/sharp-shooter.png" },
  { name: "Casino Ace", icon: "/user-level/casino-ace.png" },
  { name: "High Roller", icon: "/user-level/high-roller.png" },
  { name: "Administrator", icon: "/user-level/administrator.png" },
];

/* ------------------------------------------------------------------ */
/*  Filter Sidebar                                                     */
/* ------------------------------------------------------------------ */

function FilterSidebar() {
  const [casinoQuery, setCasinoQuery] = useState("");
  const [casinoFocused, setCasinoFocused] = useState(false);
  const [selectedCasino, setSelectedCasino] = useState<{
    slug: string;
    name: string;
    logo: string;
  } | null>(null);
  const [timeFilter, setTimeFilter] = useState(false);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [selectedRankings, setSelectedRankings] = useState<string[]>([]);
  const [reviewAge, setReviewAge] = useState<string | null>(null);
  const [withdrawalIssues, setWithdrawalIssues] = useState(false);
  const [verifiedReviewer, setVerifiedReviewer] = useState(false);
  const [winningScreenshot, setWinningScreenshot] = useState(false);

  const toggleRating = (star: number) =>
    setSelectedRatings((prev) =>
      prev.includes(star) ? prev.filter((s) => s !== star) : [...prev, star]
    );
  const toggleRanking = (name: string) =>
    setSelectedRankings((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );

  const hasAnyFilter =
    timeFilter ||
    selectedCasino ||
    selectedRatings.length > 0 ||
    selectedRankings.length > 0 ||
    reviewAge !== null ||
    withdrawalIssues ||
    verifiedReviewer ||
    winningScreenshot;

  const resetAll = () => {
    setSelectedCasino(null);
    setCasinoQuery("");
    setTimeFilter(false);
    setSelectedRatings([]);
    setSelectedRankings([]);
    setReviewAge(null);
    setWithdrawalIssues(false);
    setVerifiedReviewer(false);
    setWinningScreenshot(false);
  };

  const cq = casinoQuery.toLowerCase().trim();
  const filteredCasinos = cq
    ? casinoReviews.filter((c) => c.name.toLowerCase().includes(cq))
    : casinoReviews;

  return (
    <div
      data-name="filter-sidebar"
      className="rounded-lg lg:border lg:border-neutral-200 bg-white p-4 lg:shadow-sm lg:max-h-[calc(100vh-100px)] lg:overflow-y-auto"
      style={{ scrollbarWidth: "thin" }}
    >
      <div
        data-name="filter-header"
        className="flex items-center justify-between mb-3"
      >
        <h3
          data-name="filter-title"
          className="text-base font-bold text-[#060D17]"
        >
          Filter Review
        </h3>
        <button
          type="button"
          data-name="filter-reset"
          onClick={resetAll}
          className="text-xs font-medium text-neutral-500 hover:text-neutral-800 transition-colors cursor-pointer"
        >
          Reset
        </button>
      </div>

      {/* Active filter pills */}
      {hasAnyFilter && (
        <div data-name="filter-pills" className="flex flex-wrap gap-1.5 mb-3">
          {timeFilter && (
            <Badge variant="secondary" className="gap-1 px-2 py-0.5 h-auto text-xs">
              All Time
              <button type="button" onClick={() => setTimeFilter(false)} className="ml-0.5 text-neutral-400 hover:text-neutral-600 cursor-pointer"><X className="size-3" /></button>
            </Badge>
          )}
          {selectedCasino && (
            <Badge variant="secondary" className="gap-1.5 px-2 py-0.5 h-auto text-xs">
              <Image src={selectedCasino.logo} alt="" width={16} height={16} className="size-4 rounded object-contain bg-[#060D17]" />
              {selectedCasino.name}
              <button type="button" onClick={() => { setSelectedCasino(null); setCasinoQuery(""); }} className="ml-0.5 text-neutral-400 hover:text-neutral-600 cursor-pointer"><X className="size-3" /></button>
            </Badge>
          )}
          {selectedRatings.map((star) => (
            <Badge key={star} variant="secondary" className="gap-1 px-2 py-0.5 h-auto text-xs">
              {star} Star
              <button type="button" onClick={() => toggleRating(star)} className="ml-0.5 text-neutral-400 hover:text-neutral-600 cursor-pointer"><X className="size-3" /></button>
            </Badge>
          ))}
          {selectedRankings.map((name) => (
            <Badge key={name} variant="secondary" className="gap-1 px-2 py-0.5 h-auto text-xs">
              {name}
              <button type="button" onClick={() => toggleRanking(name)} className="ml-0.5 text-neutral-400 hover:text-neutral-600 cursor-pointer"><X className="size-3" /></button>
            </Badge>
          ))}
          {reviewAge && (
            <Badge variant="secondary" className="gap-1 px-2 py-0.5 h-auto text-xs">
              {reviewAge}
              <button type="button" onClick={() => setReviewAge(null)} className="ml-0.5 text-neutral-400 hover:text-neutral-600 cursor-pointer"><X className="size-3" /></button>
            </Badge>
          )}
          {withdrawalIssues && (
            <Badge variant="secondary" className="gap-1 px-2 py-0.5 h-auto text-xs">
              Withdrawal Issues
              <button type="button" onClick={() => setWithdrawalIssues(false)} className="ml-0.5 text-neutral-400 hover:text-neutral-600 cursor-pointer"><X className="size-3" /></button>
            </Badge>
          )}
          {verifiedReviewer && (
            <Badge variant="secondary" className="gap-1 px-2 py-0.5 h-auto text-xs">
              Verified
              <button type="button" onClick={() => setVerifiedReviewer(false)} className="ml-0.5 text-neutral-400 hover:text-neutral-600 cursor-pointer"><X className="size-3" /></button>
            </Badge>
          )}
          {winningScreenshot && (
            <Badge variant="secondary" className="gap-1 px-2 py-0.5 h-auto text-xs">
              Screenshots
              <button type="button" onClick={() => setWinningScreenshot(false)} className="ml-0.5 text-neutral-400 hover:text-neutral-600 cursor-pointer"><X className="size-3" /></button>
            </Badge>
          )}
        </div>
      )}

      {/* Casino search */}
      <div data-name="filter-casino" className="relative mb-3">
        <h4 className="text-base font-bold text-[#060D17] mb-1.5">Casino</h4>
        <div
          data-name="casino-search-input"
          className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2"
        >
          <Search className="size-4 text-neutral-400 shrink-0" />
          <input
            type="text"
            value={casinoQuery}
            onChange={(e) => setCasinoQuery(e.target.value)}
            onFocus={() => setCasinoFocused(true)}
            onBlur={() => setTimeout(() => setCasinoFocused(false), 150)}
            placeholder="Search casino..."
            className="w-full bg-transparent text-sm text-[#060D17] placeholder:text-neutral-400 outline-none"
          />
        </div>
        {casinoFocused && filteredCasinos.length > 0 && (
          <div
            data-name="casino-dropdown"
            className="absolute left-0 right-0 top-full mt-1 z-50 max-h-[200px] overflow-y-auto rounded-md border border-neutral-200 bg-white shadow-md"
          >
            {filteredCasinos.map((casino) => (
              <button
                key={casino.slug}
                type="button"
                onMouseDown={() => {
                  setSelectedCasino({
                    slug: casino.slug,
                    name: casino.name,
                    logo: casino.logo,
                  });
                  setCasinoQuery("");
                  setCasinoFocused(false);
                }}
                className="flex w-full items-center gap-2 px-2.5 py-1.5 text-xs text-neutral-600 hover:bg-neutral-50 transition-colors"
              >
                <Image
                  src={casino.logo}
                  alt=""
                  width={20}
                  height={20}
                  className="size-5 rounded object-contain bg-[#060D17]"
                />
                {casino.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Divider */}
      <div data-name="divider" className="border-t border-neutral-100 mb-3" />

      {/* User Rating */}
      <div data-name="filter-user-rating" className="mb-3">
        <h4 className="text-base font-bold text-[#060D17] mb-2">User Rating</h4>
        <div
          data-name="rating-count"
          className="flex items-center gap-1.5 mb-2"
        >
          <span className="text-sm text-neutral-600">User</span>
          <span className="text-sm font-semibold text-[#5A9E10]">352</span>
        </div>
        <div data-name="rating-checkboxes" className="flex flex-col">
          {[1, 2, 3, 4, 5].map((stars) => (
            <label
              key={stars}
              data-name={`rating-filter-${stars}`}
              className="flex items-center gap-2 py-1.5 border-b border-neutral-100 cursor-pointer"
            >
              <Checkbox className="size-5 rounded border-neutral-300" checked={selectedRatings.includes(stars)} onCheckedChange={() => toggleRating(stars)} />
              <div
                data-name="filter-stars"
                className="flex items-center gap-0.5"
              >
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="size-4"
                  >
                    <path
                      d={STAR_BG}
                      fill={i < stars ? STAR_RATING_COLORS[stars] : "#E5E7EB"}
                    />
                    <path d={STAR_SHAPE} fill="white" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-neutral-600">{stars} Star</span>
            </label>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div data-name="divider" className="border-t border-neutral-100 mb-3" />

      {/* Reviewer Ranking */}
      <div data-name="filter-reviewer-ranking">
        <h4 className="text-base font-bold text-[#060D17] mb-2">
          Reviewer Ranking
        </h4>
        <div data-name="ranking-checkboxes" className="flex flex-col">
          {REVIEWER_RANKINGS.map((rank) => (
            <label
              key={rank.name}
              data-name={`ranking-filter-${rank.name.toLowerCase().replace(/\s/g, "-")}`}
              className="flex items-center gap-2 py-1.5 border-b border-neutral-100 cursor-pointer"
            >
              <Checkbox className="size-5 rounded border-neutral-300" checked={selectedRankings.includes(rank.name)} onCheckedChange={() => toggleRanking(rank.name)} />
              <Image
                src={rank.icon}
                alt={rank.name}
                width={24}
                height={24}
                className="size-6 object-contain"
              />
              <span className="text-sm text-neutral-600">{rank.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div data-name="divider" className="border-t border-neutral-100 my-3" />

      {/* Review Age */}
      <div data-name="filter-review-age">
        <div className="flex items-center gap-2 mb-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="size-5 shrink-0"
          >
            <rect width="24" height="24" rx="6" fill="#060D17" />
            <path
              d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-1.5 3h1v-.25h1v.25h.5v1h-.5v2.75h-1v-2.75h-1v-1Z"
              fill="white"
            />
          </svg>
          <h4 className="text-base font-bold text-[#060D17]">Review Age</h4>
        </div>
        <div data-name="review-age-options" className="flex flex-col">
          {["All Time", "Last 3 Months", "Last 12 Months"].map((option) => (
            <label
              key={option}
              data-name={`age-filter-${option.toLowerCase().replace(/\s/g, "-")}`}
              className="flex items-center gap-2 py-1.5 border-b border-neutral-100 cursor-pointer"
            >
              <Checkbox className="size-5 rounded border-neutral-300" checked={reviewAge === option} onCheckedChange={() => setReviewAge(reviewAge === option ? null : option)} />
              <span className="text-sm text-neutral-600">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div data-name="divider" className="border-t border-neutral-100 my-3" />

      {/* Issues with Withdrawal */}
      <div data-name="filter-withdrawal">
        <label className="flex items-center gap-2 cursor-pointer py-1">
          <Checkbox className="size-5 rounded border-neutral-300" checked={withdrawalIssues} onCheckedChange={(val) => setWithdrawalIssues(val === true)} />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="size-5 shrink-0"><rect width="24" height="24" rx="6" fill="#060D17"/><path d="M16 10H8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-4 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#E6B830"/><path d="M12 6a.5.5 0 0 1 .5.5V10h-1V6.5A.5.5 0 0 1 12 6Z" fill="white"/><path d="m10.5 8 1.5 1.5L13.5 8" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="text-sm font-bold text-[#060D17]">Issues with Withdrawal</span>
        </label>
      </div>

      {/* Divider */}
      <div data-name="divider" className="border-t border-neutral-100 my-3" />

      {/* Verified Reviewer */}
      <div data-name="filter-verified">
        <label className="flex items-center gap-2 cursor-pointer py-1">
          <Checkbox className="size-5 rounded border-neutral-300" checked={verifiedReviewer} onCheckedChange={(val) => setVerifiedReviewer(val === true)} />
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="size-5 shrink-0" fill="#060D17"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm94-278 226-226-56-58-170 170-86-84-56 56 142 142Z"/></svg>
          <span className="text-sm font-bold text-[#060D17]">Verified Reviewer</span>
        </label>
      </div>

      {/* Divider */}
      <div data-name="divider" className="border-t border-neutral-100 my-3" />

      {/* Winning Screenshot */}
      <div data-name="filter-screenshot">
        <label className="flex items-center gap-2 cursor-pointer py-1">
          <Checkbox className="size-5 rounded border-neutral-300" checked={winningScreenshot} onCheckedChange={(val) => setWinningScreenshot(val === true)} />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="size-5 shrink-0"><rect width="24" height="24" rx="6" fill="#060D17"/><rect x="5" y="7" width="14" height="10" rx="2" stroke="white" strokeWidth="1.2" fill="none"/><circle cx="9" cy="12" r="1.5" fill="white"/><path d="m11 14 2-2.5 2 2.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
          <span className="text-sm font-bold text-[#060D17]">Winning Screenshot</span>
        </label>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Review Card                                                        */
/* ------------------------------------------------------------------ */

function ReviewCard({ review }: { review: UserReview }) {
  const reviewRatingColor =
    RATING_COLORS[Math.min(5, Math.max(1, Math.round(review.rating)))] ??
    RATING_COLORS[3];

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const casino = casinoReviews.find((c) => c.slug === review.casinoSlug);
  const screenshots = casino?.screenshots ?? [];

  return (
    <div
      data-name="user-review-card"
      className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm"
    >
      {/* Reviewer header */}
      <div data-name="reviewer-header" className="flex items-start gap-4">
        <ReviewerAvatar
          name={review.name}
          points={review.points}
          size="md"
        />
        <div data-name="reviewer-info" className="flex flex-col gap-1.5">
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
            <span
              data-name="badge-rank-level"
              className="text-[11px] font-bold uppercase tracking-wide text-[#167715]"
            >
              {getRankName(review.points)}
            </span>
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
            {review.playerSince && (
              <span
                data-name="badge-player-since"
                className="inline-flex items-center gap-[5px] rounded-[4px] bg-[#e5e5e5] px-2 py-[4px] text-xs font-medium text-[#525252]"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>
                  calendar_month
                </span>
                Player since {review.playerSince}
              </span>
            )}
            {review.wageredAmount && (
              <span
                data-name="badge-wagered"
                className="inline-flex items-center gap-[5px] rounded-[4px] bg-[#e5e5e5] px-2 py-[4px] text-xs font-medium text-[#525252]"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>
                  payments
                </span>
                Wagered {review.wageredAmount}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Rating + Casino Card */}
      <div
        data-name="reviewer-rating"
        className="mt-5 flex items-start justify-between gap-4 rounded-lg bg-neutral-50 p-4"
      >
        {/* Left: rating */}
        <div data-name="rating-left">
          <div data-name="rating-score" className="flex items-center gap-2">
            <span
              data-name="rating-number"
              className="text-3xl font-bold"
              style={{ color: reviewRatingColor }}
            >
              {review.rating}
            </span>
            <span data-name="rating-max" className="text-sm text-neutral-500">
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
                    fill={star <= review.rating ? reviewRatingColor : "#E5E7EB"}
                  />
                  <path d={STAR_SHAPE} fill="white" />
                </svg>
              ))}
            </div>
          </div>
          <p data-name="rating-date" className="text-sm text-neutral-500 mt-1">
            Reviewed <span className="text-neutral-600">{review.date}</span>
          </p>
        </div>

        {/* Right: Casino card */}
        {(() => {
          const casino = casinoReviews.find(
            (c) => c.slug === review.casinoSlug,
          );
          if (!casino) return null;
          return (
            <Link
              href={`/casino/review/${casino.slug}`}
              data-name="casino-card"
              className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-2.5 hover:shadow-sm transition-shadow shrink-0"
            >
              <div
                data-name="casino-logo"
                className="size-10 bg-[#060D17] rounded-md shrink-0 flex items-center justify-center overflow-hidden"
              >
                <Image
                  src={casino.logo}
                  alt={casino.name}
                  width={40}
                  height={40}
                  className="object-contain size-full"
                />
              </div>
              <div data-name="casino-info" className="flex flex-col min-w-0">
                <span className="text-sm font-semibold text-[#060D17]">
                  {casino.name}
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-neutral-500">Safety</span>
                  <span
                    className="px-1.5 py-0.5 rounded-full text-[10px] font-semibold text-[#060D17]"
                    style={{
                      backgroundColor:
                        casino.safetyIndex === "High" ? "#00DE00" : "#EAEE45",
                    }}
                  >
                    {casino.safetyIndex}
                  </span>
                </div>
              </div>
            </Link>
          );
        })()}
      </div>

      <div data-name="divider" className="border-t border-neutral-100 my-5" />

      {/* Screenshots */}
      {screenshots.length > 0 && (
        <div
          data-name="review-screenshots"
          className="flex gap-2 overflow-x-auto pb-2 mb-2"
          style={{ scrollbarWidth: "none" }}
        >
          {screenshots.slice(0, 4).map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setGalleryIndex(i);
                setGalleryOpen(true);
              }}
              data-name="screenshot-thumb"
              className="relative h-[120px] w-[200px] shrink-0 rounded-lg overflow-hidden bg-[#11181f] cursor-pointer hover:opacity-90 transition-opacity"
            >
              <Image
                src={src}
                alt={`${casino?.name} screenshot ${i + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Review content */}
      <div data-name="review-content" className="flex flex-col gap-3">
        <h3
          data-name="review-title"
          className="text-xl font-bold text-[#060D17]"
        >
          {review.title}
        </h3>
        <p
          data-name="review-text"
          className="text-base leading-relaxed text-neutral-600"
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
          <div data-name="liked-list" className="flex flex-col gap-2.5">
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
          <div data-name="disliked-list" className="flex flex-col gap-2.5">
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
        <span data-name="helpful-label" className="text-sm text-neutral-500">
          Is this helpful?
        </span>
        <div data-name="helpful-actions" className="flex items-center gap-3">
          <button
            data-name="vote-up"
            className="size-8 rounded-full border border-neutral-200 hover:bg-neutral-50 flex items-center justify-center transition-colors"
          >
            <ThumbsUp className="size-4 text-neutral-500" />
          </button>
          <span data-name="vote-up-count" className="text-sm text-neutral-500">
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

      {/* Screenshot Gallery Modal */}
      {galleryOpen && screenshots.length > 0 && (
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
            {/* Close */}
            <button
              type="button"
              onClick={() => setGalleryOpen(false)}
              data-name="gallery-close"
              className="absolute -top-10 right-0 text-white hover:text-neutral-300 transition-colors cursor-pointer"
            >
              <X className="size-6" />
            </button>

            {/* Image */}
            <div
              data-name="gallery-image"
              className="relative w-full h-[60vh] rounded-xl overflow-hidden bg-[#11181f]"
            >
              <Image
                src={screenshots[galleryIndex]}
                alt={`Screenshot ${galleryIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>

            {/* Prev / Next */}
            <button
              type="button"
              onClick={() =>
                setGalleryIndex(
                  (galleryIndex - 1 + screenshots.length) % screenshots.length,
                )
              }
              data-name="gallery-prev"
              className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center size-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors cursor-pointer"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() =>
                setGalleryIndex((galleryIndex + 1) % screenshots.length)
              }
              data-name="gallery-next"
              className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center size-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors cursor-pointer"
            >
              <ChevronRight className="size-5" />
            </button>

            {/* Thumbnail strip */}
            <div
              data-name="gallery-thumbs"
              className="flex gap-2 mt-3 overflow-x-auto justify-center"
              style={{ scrollbarWidth: "none" }}
            >
              {screenshots.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setGalleryIndex(i)}
                  data-name="gallery-thumb"
                  className={`relative h-[60px] w-[90px] shrink-0 rounded-md overflow-hidden cursor-pointer transition-all ${
                    i === galleryIndex
                      ? "ring-2 ring-white opacity-100"
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Thumb ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export function UserReviewList() {
  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Most Helpful");

  return (
    <section
      data-section="user-review-list"
      className="mx-auto max-w-[1200px] px-5 py-8"
    >
      <div
        data-name="review-list-layout"
        className="flex flex-col lg:flex-row gap-8"
      >
        {/* Left: Reviews */}
        <div
          data-name="review-list-main"
          className="flex-1 flex flex-col gap-6"
        >
          {/* Header + sort */}
          <div
            data-name="review-list-header"
            className="flex items-center justify-between"
          >
            <h2
              data-name="review-list-title"
              className="text-xl font-bold text-[#060D17]"
            >
              User Reviews
            </h2>
            <div data-name="review-list-actions" className="flex items-center gap-2">
              {/* Mobile filter button */}
              <Sheet>
                <SheetTrigger>
                  <div
                    data-name="mobile-filter-trigger"
                    className="lg:hidden flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-[#060D17] hover:bg-neutral-50 transition-colors cursor-pointer"
                  >
                    <SlidersHorizontal className="size-4" />
                    Filters
                  </div>
                </SheetTrigger>
                <SheetContent side="right" className="w-[320px] overflow-y-auto p-0">
                  <SheetHeader className="px-4 pt-4 pb-2">
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="px-4 pb-4">
                    <FilterSidebar />
                  </div>
                </SheetContent>
              </Sheet>
            <Popover open={sortOpen} onOpenChange={setSortOpen}>
              <PopoverTrigger>
                <div
                  data-name="review-list-sort"
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
          </div>

          {/* Review cards */}
          {USER_REVIEWS.map((review, idx) => (
            <ReviewCard key={idx} review={review} />
          ))}
        </div>

        {/* Right: Filter sidebar — desktop only */}
        <div
          data-name="review-list-sidebar"
          className="hidden lg:block w-[280px] shrink-0"
        >
          <div className="sticky top-24">
            <FilterSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}

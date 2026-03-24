import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const STAR_BG =
  "M15.9988 0H4C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0Z";
const STAR_SHAPE =
  "M10.38 4.035a.75.75 0 0 0-.753 0c-.206.098-.32.269-.377.362a4.7 4.7 0 0 0-.18.34L7.814 7.285l-2.813.411a4.7 4.7 0 0 0-.378.065c-.107.026-.304.081-.46.247a.75.75 0 0 0-.233.716c.03.226.157.387.228.47.074.087.172.182.268.276l2.034 1.981-.48 2.8a4.7 4.7 0 0 0-.055.38c-.009.11-.017.314.092.515a.75.75 0 0 0 .61.443c.224.041.416-.03.517-.072a4.7 4.7 0 0 0 .345-.17l2.514-1.322 2.515 1.322c.118.063.24.127.344.17.102.042.294.113.518.072a.75.75 0 0 0 .61-.443c.108-.2.1-.405.091-.515a4.7 4.7 0 0 0-.055-.38l-.48-2.799 2.035-1.982a4.7 4.7 0 0 0 .268-.275c.071-.083.198-.244.228-.47a.75.75 0 0 0-.232-.717c-.157-.165-.354-.221-.461-.247a4.7 4.7 0 0 0-.378-.065l-2.813-.411-1.257-2.548a4.7 4.7 0 0 0-.18-.34.75.75 0 0 0-.377-.362Z";

const SHIELD_BG =
  "M15.9988 0H4C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0Z";
const SHIELD_SHAPE =
  "M4.272 6.52C4.328 8.534 4.892 10.531 5.897 12.273C6.903 14.015 8.351 15.501 10.067 16.557C12.308 15.171 14.077 13.062 15.038 10.609C15.553 9.297 15.828 7.922 15.865 6.518C12.273 4.574 7.867 4.573 4.272 6.52Z";

const USER_RATING_COLORS: Record<number, string> = {
  5: "#23BA21",
  4: "#9FF11A",
  3: "#D8DC00",
  2: "#FFB257",
  1: "#FF6847",
};

const casinos = [
  {
    rank: 1,
    name: "Menace",
    logo: "/casino-index/logo-menace.svg",
    userScore: 4.5,
    reviews: 63,
    expertScore: 3.7,
    traffic: "78.7M",
    trafficChange: 0.1,
    safetyIndex: "Normal",
  },
  {
    rank: 2,
    name: "Roobet",
    logo: "/casino-index/logo-roobet.svg",
    userScore: 4.2,
    reviews: 63,
    expertScore: 4.2,
    traffic: "78.7M",
    trafficChange: 0.1,
    safetyIndex: "Normal",
  },
  {
    rank: 3,
    name: "Bitsler",
    logo: "/casino-index/logo-bitsler.svg",
    userScore: 2.9,
    reviews: 63,
    expertScore: 3.8,
    traffic: "78.7M",
    trafficChange: -13.3,
    safetyIndex: "Normal",
  },
  {
    rank: 4,
    name: "Shuffle",
    logo: "/casino-index/logo-shuffle.svg",
    userScore: 3.4,
    reviews: 63,
    expertScore: 3.2,
    traffic: "78.7M",
    trafficChange: 0.1,
    safetyIndex: "Normal",
  },
  {
    rank: 5,
    name: "Thrill",
    logo: "/casino-index/logo-thrill.svg",
    userScore: 1.6,
    reviews: 63,
    expertScore: 3.5,
    traffic: "78.7M",
    trafficChange: -13.3,
    safetyIndex: "Normal",
  },
  {
    rank: 6,
    name: "BC Game",
    logo: "/casino-index/logo-gamedom.svg",
    userScore: 4.8,
    reviews: 63,
    expertScore: 2.6,
    traffic: "78.7M",
    trafficChange: 0.1,
    safetyIndex: "Normal",
  },
];

function UserStarIcon({ color, inactive }: { color: string; inactive?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="shrink-0"
    >
      <path d={STAR_BG} fill={color} />
      <path d={STAR_SHAPE} fill="white" opacity={inactive ? 0.5 : 1} />
    </svg>
  );
}

function UserStarRating({ rating }: { rating: number }) {
  const filled = Math.min(5, Math.max(1, Math.round(rating)));
  const activeColor = USER_RATING_COLORS[filled] ?? USER_RATING_COLORS[3];

  return (
    <div data-name="user-star-rating" className="flex flex-col gap-2">
      <div data-name="user-rating-row" className="flex items-center gap-2">
        <span
          className="text-[19px] font-semibold"
          style={{ color: activeColor }}
        >
          {rating}
        </span>
        <div data-name="user-stars" className="flex items-center gap-0.5">
          {Array.from({ length: 5 }, (_, i) => (
            <UserStarIcon
              key={i}
              color={i < filled ? activeColor : "#4F4F4F"}
              inactive={i >= filled}
            />
          ))}
        </div>
      </div>
      <span className="text-xs text-white/50">Verified Players</span>
    </div>
  );
}

function ExpertShieldIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="shrink-0"
    >
      <path d={SHIELD_BG} fill={filled ? "#003EB6" : "#4F4F4F"} />
      <path d={SHIELD_SHAPE} fill="white" opacity={filled ? 1 : 0.5} />
    </svg>
  );
}

function ExpertRating({ rating }: { rating: number }) {
  const filled = Math.min(5, Math.max(1, Math.round(rating)));

  return (
    <div data-name="expert-rating" className="flex flex-col gap-2">
      <div data-name="expert-rating-row" className="flex items-center gap-2">
        <span className="text-[19px] font-semibold text-white">{rating}</span>
        <div data-name="expert-shields" className="flex items-center gap-0.5">
          {Array.from({ length: 5 }, (_, i) => (
            <ExpertShieldIcon key={i} filled={i < filled} />
          ))}
        </div>
      </div>
      <span className="text-xs text-white/50">Independent Audit</span>
    </div>
  );
}

function SortIcon() {
  return (
    <svg
      width="10"
      height="14"
      viewBox="0 0 10 14"
      fill="none"
      className="shrink-0 opacity-67"
    >
      <path d="M5 0L9.33 5H0.67L5 0Z" fill="#f8f8f8" />
      <path d="M5 14L0.67 9H9.33L5 14Z" fill="#f8f8f8" />
    </svg>
  );
}

const TABLE_GRID =
  "grid grid-cols-[2fr_5fr_7fr_4fr_7fr_5fr_4fr_3fr] items-center gap-4";

function CasinoRow({ casino }: { casino: (typeof casinos)[number] }) {
  const isPositive = casino.trafficChange >= 0;

  return (
    <div
      data-name="casino-row"
      className={`${TABLE_GRID} bg-[#121212] rounded-md pl-5 pr-8 py-3.5 whitespace-nowrap`}
    >
      {/* Rank */}
      <span className="text-sm font-semibold text-[#a7a7a7] text-center">
        #{casino.rank}
      </span>

      {/* Casino name + logo */}
      <div
        data-name="casino-name-logo"
        className="sticky left-0 z-10 flex items-center gap-3 self-stretch bg-[#121212] pr-3 shadow-[8px_0_12px_#121212] sm:static sm:self-auto sm:shadow-none sm:pr-0"
      >
        <div
          data-name="row-logo"
          className="w-[61px] h-[43px] rounded-lg overflow-hidden flex items-center justify-center shrink-0"
          style={{ backgroundColor: "#020202" }}
        >
          <Image
            src={casino.logo}
            alt={casino.name}
            width={45}
            height={29}
            className="object-contain"
          />
        </div>
        <span className="text-sm font-semibold text-white">{casino.name}</span>
      </div>

      {/* User score */}
      <UserStarRating rating={casino.userScore} />

      {/* Reviews */}
      <div data-name="reviews-count" className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <span className="text-[19px] font-semibold text-white">
            {casino.reviews}
          </span>
          <span className="text-xs text-white/50">Reviews</span>
        </div>
        <span className="text-xs text-white/50">In Last 6 Months</span>
      </div>

      {/* Expert score */}
      <ExpertRating rating={casino.expertScore} />

      {/* 30D Traffic */}
      <div data-name="traffic-info" className="flex items-center gap-1">
        <span className="text-sm font-semibold text-white">
          {casino.traffic}
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className={`shrink-0 ${isPositive ? "" : "rotate-180"}`}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.5872 1.33736C6.81499 1.10955 7.18436 1.10955 7.41215 1.33736L11.4955 5.42069C11.6623 5.58752 11.7122 5.83842 11.6219 6.05641C11.5316 6.2744 11.319 6.4165 11.083 6.4165H9.33301V11.7966C9.33307 11.8661 9.33307 11.9491 9.32712 12.0222C9.32017 12.1069 9.30244 12.2283 9.23763 12.3554C9.15375 12.52 9.01993 12.6539 8.85526 12.7378C8.72815 12.8026 8.60682 12.8203 8.52212 12.8273C8.44897 12.8332 8.36602 12.8332 8.29654 12.8332C7.43198 12.8328 6.56742 12.8328 5.70285 12.8332C5.63337 12.8332 5.55039 12.8332 5.47729 12.8273C5.39258 12.8203 5.27125 12.8026 5.14411 12.7378C4.97947 12.6539 4.84562 12.52 4.76173 12.3554C4.69695 12.2283 4.67919 12.1069 4.67227 12.0222C4.6663 11.9491 4.66633 11.8662 4.66635 11.7966L4.66636 6.4165H2.91636C2.68042 6.4165 2.46772 6.2744 2.37743 6.05641C2.28714 5.83842 2.33704 5.58752 2.50388 5.42069L6.5872 1.33736Z"
            fill={isPositive ? "#22C55E" : "#EF4444"}
          />
        </svg>
        <span
          className={`text-sm font-semibold ${isPositive ? "text-green-500" : "text-red-500"}`}
        >
          {Math.abs(casino.trafficChange)}%
        </span>
      </div>

      {/* Safety Index */}
      <span className="inline-flex w-fit items-center rounded-full bg-[#eaee45] px-2 py-0.5 text-xs font-semibold text-[#060d17]">
        {casino.safetyIndex}
      </span>

      {/* View button */}
      <Link
        href="#"
        className="group inline-flex items-center justify-center gap-1.5 rounded-lg border border-[#d4d4d4] px-3 py-1.5 text-sm font-medium text-[#f5f5f5] hover:bg-white/5 transition-colors"
      >
        View
        <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}

export function CasinoIndex() {
  return (
    <section
      data-section="casino-index"
      className="relative bg-[#020202] py-8 overflow-hidden"
    >
      {/* Static grid lines */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        // style={{
        //   backgroundImage:
        //     "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
        //   backgroundSize: "60px 60px",
        // }}
      />

      <div
        data-name="index-card"
        className="relative z-10 overflow-hidden site-container"
      >
        {/* Header */}
        <div
          data-name="index-header"
          className="flex flex-col items-center gap-4 pt-10 sm:pt-16 pb-6 sm:pb-10 px-5"
        >
          <div
            data-name="index-title"
            className="flex items-center gap-2.5 flex-wrap justify-center"
          >
            <h2 className="text-2xl sm:text-[35px] lg:text-[45px] font-black text-white tracking-tight text-center">
              CoinBets Casino Index
            </h2>
            <span className="rounded-lg bg-[#e6b830] px-2 py-0.5 text-xs font-semibold text-[#101010]">
              Beta
            </span>
          </div>
          <p className="text-sm sm:text-base text-white/70 text-center max-w-[545px] pb-5 sm:pb-10">
            Ranked by real player reviews and verified signals. No casino
            influence. No affiliate revenue. Just data.
          </p>
        </div>

        {/* Scrollable table wrapper */}
        <div className="overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          <div className="min-w-[1200px]">
            {/* Table header + rows share the same padding context */}
            <div className="px-4 sm:px-8 lg:px-15">
              <div
                data-name="table-header"
                className={`${TABLE_GRID} pl-5 pr-8 pb-4 text-sm font-bold text-[#f8f8f8]/67 uppercase whitespace-nowrap`}
              >
                <div className="flex items-center justify-center gap-2">
                  Rank
                  <SortIcon />
                </div>
                <div>Casino Name</div>
                <div className="flex items-center gap-2">
                  User Score
                  <SortIcon />
                </div>
                <div className="flex items-center gap-2">
                  In Last 6M
                  <SortIcon />
                </div>
                <div className="flex items-center gap-2">
                  Expert Score
                  <SortIcon />
                </div>
                <div className="flex items-center gap-2">
                  30D Traffic
                  <SortIcon />
                </div>
                <div className="flex items-center gap-2">
                  Safety
                  <SortIcon />
                </div>
                <div className="text-center">View</div>
              </div>

              {/* Casino rows */}
              <div
                data-name="casino-rows"
                className="flex flex-col gap-1.5 pb-8"
              >
                {casinos.map((casino) => (
                  <CasinoRow key={casino.rank} casino={casino} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Gradient fade + View Full Index */}
        <div
          data-name="index-gradient"
          className="absolute bottom-0 left-0 right-0 z-20 h-[250px] bg-linear-to-b from-transparent to-[#020202] flex items-center justify-center pb-10 pointer-events-none"
        >
          <div className="flex items-center gap-3 pointer-events-auto">
            <Link
              href="/coinbet-index"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#f5f5f5] px-6 py-2.5 text-sm font-bold text-[#171717] hover:bg-white transition-colors"
            >
              View Casino Index
              <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/casino-originals"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#f5f5f5] px-6 py-2.5 text-sm font-bold text-[#171717] hover:bg-white transition-colors"
            >
              View Casino Originals
              <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

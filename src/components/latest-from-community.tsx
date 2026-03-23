import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const reviews = [
  {
    logo: "/casino-index/base-6.svg",
    name: "Bitsler",
    safetyIndex: "Normal",
    reviewCount: 6,
    review:
      "fortunejack was fine until i tried to withdraw as soon as i hit cashout my account gets closed and they refuse to pay. no clear reason either, just random accusations changing every message first bonus abuse then multiple accounts which one is it?? no proof for any of it funny how deposits were fine the whole time, but the second…",
    userName: "LegiaTmz",
    rank: "Rookie Bettor",
    rating: 1.7,
  },
  {
    logo: "/casino-index/base-1.svg",
    name: "Yeet",
    safetyIndex: "Normal",
    reviewCount: 6,
    review:
      "fortunejack was fine until i tried to withdraw as soon as i hit cashout my account gets closed and they refuse to pay. no clear reason either, just random accusations changing every message first bonus abuse then multiple accounts which one is it?? no proof for any of it funny how deposits were fine the whole time, but the second…",
    userName: "LegiaTmz",
    rank: "Rookie Bettor",
    rating: 1.7,
  },
  {
    logo: "/casino-index/base-2.svg",
    name: "BC Game",
    safetyIndex: "Normal",
    reviewCount: 6,
    review:
      "After my past review betbolt did made some big changes, firstly they upgraded their interface which is bit modern but big laggy secondly they have fixed the bet viewer history thing on their original although not them ofc the provider did but you can now check if your bet was provable fair they also changed the chat interface also added…",
    userName: "LegiaTmz",
    rank: "Rookie Bettor",
    rating: 1.7,
  },
  {
    logo: "/casino-index/base-4.svg",
    name: "Rollbit",
    safetyIndex: "Normal",
    reviewCount: 6,
    review:
      "I originally did a VIP transfer and was ranked VIP Ruby 1, but they have since revoked VIP statuses so I am technically unranked now as I've not played there much since. I started playing when they launched approx 2 yrs ago. I have really only played keno here, a little mines and maybe plinko. To deposit I usually use…",
    userName: "LegiaTmz",
    rank: "Rookie Bettor",
    rating: 1.7,
  },
];

const STAR_BG =
  "M15.9988 0H4C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0Z";
const STAR_SHAPE =
  "M10.38 4.035a.75.75 0 0 0-.753 0c-.206.098-.32.269-.377.362a4.7 4.7 0 0 0-.18.34L7.814 7.285l-2.813.411a4.7 4.7 0 0 0-.378.065c-.107.026-.304.081-.46.247a.75.75 0 0 0-.233.716c.03.226.157.387.228.47.074.087.172.182.268.276l2.034 1.981-.48 2.8a4.7 4.7 0 0 0-.055.38c-.009.11-.017.314.092.515a.75.75 0 0 0 .61.443c.224.041.416-.03.517-.072a4.7 4.7 0 0 0 .345-.17l2.514-1.322 2.515 1.322c.118.063.24.127.344.17.102.042.294.113.518.072a.75.75 0 0 0 .61-.443c.108-.2.1-.405.091-.515a4.7 4.7 0 0 0-.055-.38l-.48-2.799 2.035-1.982a4.7 4.7 0 0 0 .268-.275c.071-.083.198-.244.228-.47a.75.75 0 0 0-.232-.717c-.157-.165-.354-.221-.461-.247a4.7 4.7 0 0 0-.378-.065l-2.813-.411-1.257-2.548a4.7 4.7 0 0 0-.18-.34.75.75 0 0 0-.377-.362Z";

const RATING_COLORS: Record<number, string> = {
  5: "#23BA21",
  4: "#9FF11A",
  3: "#D8DC00",
  2: "#FFB257",
  1: "#FF6847",
};

function StarIcon({ color }: { color: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="shrink-0"
    >
      <path d={STAR_BG} fill={color} />
      <path d={STAR_SHAPE} fill="white" />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  const filled = Math.min(5, Math.max(1, Math.round(rating)));
  const activeColor = RATING_COLORS[filled] ?? RATING_COLORS[3];

  return (
    <div data-name="star-rating" className="flex items-center gap-1.5">
      <div data-name="star-icons" className="flex items-center gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <StarIcon key={i} color={i < filled ? activeColor : "#DDDDDD"} />
        ))}
      </div>
      <span className="text-sm font-medium text-[#060D17]">{rating}</span>
    </div>
  );
}

function QuoteIcon() {
  return (
    <svg
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M3.41 0.5L4.26 1.36C3.12 2.06 2.34 3.08 1.96 4.42H3.64V8H0V5.24C0 2.68 1.26 1.12 3.41 0.5ZM8.77 0.5L9.62 1.36C8.48 2.06 7.7 3.08 7.32 4.42H9V8H5.36V5.24C5.36 2.68 6.62 1.12 8.77 0.5Z"
        fill="#9CA3AF"
      />
    </svg>
  );
}

function CommunityReviewCard({
  logo,
  name,
  safetyIndex,
  reviewCount,
  review,
  userName,
  rank,
  rating,
}: (typeof reviews)[number]) {
  return (
    <div
      data-name="community-card"
      className="flex flex-col gap-2.5 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm"
    >
      {/* Casino info */}
      <div
        data-name="community-casino-info"
        className="flex items-start gap-3.5"
      >
        <div
          data-name="community-logo"
          className="flex items-center justify-center rounded-lg overflow-hidden w-[108px] h-[89px] shrink-0 p-0"
          style={{ backgroundColor: "#060d17" }}
        >
          <Image
            src={logo}
            alt={name}
            width={108}
            height={89}
            className="object-contain w-full h-full"
          />
        </div>
        <div
          data-name="community-casino-details"
          className="flex flex-col gap-0.5"
        >
          <p className="text-base font-semibold text-[#060D17]">{name}</p>
          <div data-name="community-safety" className="flex items-center gap-2">
            <span className="text-xs font-bold text-neutral-600 uppercase">
              Safety Index
            </span>
            <span className="inline-flex items-center rounded-full bg-[#eaee45] px-2 py-0.5 text-xs font-semibold text-[#060d17]">
              {safetyIndex}
            </span>
          </div>
          <p className="text-sm text-neutral-600">{reviewCount} Reviews</p>
        </div>
      </div>

      {/* Review text */}
      <div
        data-name="community-review-text"
        className="bg-[#f8f8f8] rounded-md p-5.5 flex flex-col gap-2.5"
      >
        <QuoteIcon />
        <p className="text-sm font-medium text-[#060D17] leading-relaxed">
          {review}
        </p>
      </div>

      {/* User info & rating */}
      <div data-name="community-user-info" className="flex flex-col gap-1.5">
        <div
          data-name="community-user-row"
          className="flex items-center gap-2 text-sm"
        >
          <div
            data-name="community-username"
            className="flex items-center gap-1"
          >
            <div className="size-[17px] rounded-full bg-red-400 shrink-0" />
            <span className="text-neutral-600 text-sm">{userName}</span>
          </div>
          <span className="size-[3px] rounded-full bg-neutral-400 shrink-0" />
          <span className="text-xs text-[#1c1c1c]/50">{rank}</span>
        </div>
        <StarRating rating={rating} />
      </div>
    </div>
  );
}

export function LatestFromCommunity() {
  const leftCol = reviews.filter((_, i) => i % 2 === 0);
  const rightCol = reviews.filter((_, i) => i % 2 === 1);

  return (
    <section
      data-section="latest-from-community"
      className="mx-auto max-w-[1100px] px-5 sm:px-10 py-8 mb-16 sm:mb-24 lg:mb-40"
    >
      <div
        data-name="community-layout"
        className="grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        {/* Left column: header + cards */}
        <div data-name="community-left-col" className="flex flex-col gap-4">
          {/* Header */}
          <div
            data-name="community-header"
            className="flex items-end justify-between mb-2"
          >
            <div
              data-name="community-header-text"
              className="flex flex-col gap-3"
            >
              <p className="text-base font-bold text-[#060D17]">
                Most helpful from The Community
              </p>
              <h2 className="text-2xl sm:text-[30px] lg:text-[35px] font-black text-[#060D17] leading-[1.2] tracking-tight">
                Helpful User Reviews
                <br className="hidden sm:block" />
                {" "}from our community
              </h2>
            </div>
          </div>
          {leftCol.map((review, i) => (
            <CommunityReviewCard key={i * 2} {...review} />
          ))}
        </div>

        {/* Right column: cards only */}
        <div data-name="community-right-col" className="flex flex-col gap-4">
          {rightCol.map((review, i) => (
            <CommunityReviewCard key={i * 2 + 1} {...review} />
          ))}
        </div>
      </div>

      <Link
        href="/reviews"
        className="group mt-6 mx-auto flex w-full sm:w-fit items-center justify-center gap-1.5 rounded-lg bg-neutral-900 px-3 py-1.5 text-sm font-medium text-[#f8f8f8] hover:bg-neutral-800 transition-colors"
      >
        Read all reviews
        <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </section>
  );
}

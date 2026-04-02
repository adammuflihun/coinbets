import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const reviews = [
  {
    slug: "bitsler",
    logo: "/casino-index/logo-bitsler.svg",
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
    slug: "yeet",
    logo: "/casino-index/logo-Yeet.svg",
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
    slug: "bc-game",
    logo: "/casino-index/logo-gamedom.svg",
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
    slug: "rollbit",
    logo: "/casino-index/logo-rollbit.svg",
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
      <span className="hidden text-sm font-medium text-[#060D17]">
        {rating}
      </span>
    </div>
  );
}

function CommunityReviewCard({
  slug,
  logo,
  name,
  safetyIndex,
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
      <StarRating rating={rating} />

      {/* Review text */}
      <div
        data-name="community-review-text"
        className="bg-[white] rounded-md py-4 flex flex-col gap-2.5"
      >
        <svg
          width="25"
          height="20"
          viewBox="0 0 25 20"
          fill="none"
          className="shrink-0 hidden"
        >
          <path
            opacity="0.2"
            d="M10.6553 2.78711C8.03247 4.42643 5.40981 7.70546 5 10.4922C5.16393 10.4102 5.81974 10.3281 6.31152 10.3281C8.77044 10.3281 10.6553 12.2952 10.6553 15C10.6552 17.7046 8.52474 19.9997 5.65625 20C2.62368 20 0.000190601 17.4591 0 13.1152C0 7.78755 2.95068 2.95072 7.13086 0L10.6553 2.78711ZM24.7539 2.78711C22.131 4.42639 19.5895 7.7054 19.1797 10.4922C19.3436 10.4102 19.9174 10.3281 20.4092 10.3281C22.8681 10.3281 24.835 12.2952 24.835 15C24.8349 17.7047 22.6225 19.9998 19.8359 20C16.8034 20 14.1799 17.4591 14.1797 13.1152C14.1797 7.78759 17.1303 2.95072 21.2285 0L24.7539 2.78711Z"
            fill="#060D17"
          />
        </svg>
        <p className="tracking-[.5px] font-regular  text-[14px] leading-[1.5] text-[#060D17]">
          {review}
        </p>
      </div>

      {/* User info & rating */}
      <div data-name="community-user-info" className="flex flex-col gap-[7px]">
        <div
          data-name="community-user-row"
          className="flex items-center gap-2 text-sm"
        >
          <div
            data-name="community-username"
            className="flex items-center gap-1"
          >
            <div data-name="community-avatar" className="size-[17px] rounded-full bg-red-400 shrink-0" />
            <span className="text-[#404040] text-sm">{userName}</span>
          </div>
          <span className="size-[3px] rounded-full bg-neutral-400 shrink-0" />
          <span className="text-xs text-[#1c1c1c]/50">{rank}</span>
        </div>
      </div>

      {/* Divider */}
      <div data-name="community-divider" className="py-[15px]">
        <div data-name="community-divider-line" className="h-px w-full bg-[#d9d9d9]" />
      </div>

      {/* Product info */}
      <Link href={`/casino/review/${slug}`} data-name="community-product" className="flex items-start gap-3.5 hover:opacity-80 transition-opacity">
        <div data-name="community-product-logo" className="bg-[#060d17] rounded-sm px-1.5 py-2 shrink-0 flex items-center justify-center">
          <Image
            src={logo}
            alt={name}
            width={43}
            height={27}
            className="object-contain"
          />
        </div>
        <div data-name="community-product-info" className="flex flex-col gap-[3px]">
          <p className="text-base font-semibold text-[#060D17] leading-[1.4]">
            {name}
          </p>
          <div data-name="community-safety-index" className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase text-[#404040]">
              Safety Index
            </span>
            <span className="rounded-full bg-[#eaee45] px-2 py-0.5 text-xs font-semibold text-[#060d17]">
              {safetyIndex}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export function LatestFromCommunity() {
  const leftCol = reviews.filter((_, i) => i % 2 === 0);
  const rightCol = reviews.filter((_, i) => i % 2 === 1);

  return (
    <section
      data-section="latest-from-community"
      className="mx-auto max-w-[1100px] px-5 sm:px-10 py-8 mb-16 sm:mb-24 lg:my-30"
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
                <br className="hidden sm:block" /> from our community
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

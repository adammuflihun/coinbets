import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReviewData } from "@/components/review-card";
import ExpertRatingCard from "@/components/expert-rating-card";
import { casinoReviews } from "@/data/casino-reviews";
import { ReviewsTabGrid } from "@/components/reviews-tab-grid";
import { CoinbetIndexSeoMetatags } from "@/components/coinbet-index-seo-metatags";
import { UnicornBackground } from "@/components/unicorn-background";

export const metadata: Metadata = {
  title: "Expert Reviews | CoinBets",
  description:
    "In-depth expert reviews of the top crypto casinos and sports betting platforms. Unbiased ratings, pros & cons, and detailed analysis.",
  openGraph: {
    title: "Expert Reviews | CoinBets",
    description:
      "In-depth expert reviews of the top crypto casinos and sports betting platforms.",
  },
};

const allReviews: (ReviewData & { thumbnail: string })[] = [
  {
    name: "Stake",
    slug: "stake",
    logo: "/casino-index/logo-stake.svg",
    thumbnail: "https://stg-coinbets-staging.kinsta.cloud/wp-content/uploads/2025/07/wpn-275@2x.avif",
    safetyIndex: "High",
    playerRating: 3.0,
    playerReviews: 374,
    expertScore: 2.9,
    highlights: [
      "Web3 login, real-time RTP - love to see it",
      "Small international casino",
      "Average withdrawal limits (16000$/month)",
      "All deposits need to be wagered 1x before withdrawal",
    ],
    bonus: "300% up to $3,000",
  },
  {
    name: "Roobet",
    slug: "roobet",
    logo: "/casino-index/logo-roobet.svg",
    thumbnail: "https://stg-coinbets-staging.kinsta.cloud/wp-content/smush-avif/2025/11/rocketplay.jpg.avif",
    safetyIndex: "Normal",
    playerRating: 4.2,
    playerReviews: 512,
    expertScore: 3.8,
    highlights: [
      "Instant crypto deposits with low minimums",
      "Provably fair gaming selection",
      "Limited country availability",
      "VIP program with dedicated support",
    ],
    bonus: "200% up to $1,000",
  },
  {
    name: "Bitsler",
    slug: "bitsler",
    logo: "/casino-index/logo-bitsler.svg",
    thumbnail: "https://stg-coinbets-staging.kinsta.cloud/wp-content/uploads/2025/07/wpn-146@2x.avif",
    safetyIndex: "High",
    playerRating: 2.9,
    playerReviews: 198,
    expertScore: 3.2,
    highlights: [
      "20+ supported cryptocurrencies",
      "Transparent house edge display",
      "Smaller game selection than competitors",
      "Fast withdrawal processing times",
    ],
    bonus: "150% up to $500",
  },
  {
    name: "Shuffle",
    slug: "shuffle",
    logo: "/casino-index/logo-shuffle.svg",
    thumbnail: "https://stg-coinbets-staging.kinsta.cloud/wp-content/smush-avif/2025/09/stack-expert-review.jpg.avif",
    safetyIndex: "Normal",
    playerRating: 3.4,
    playerReviews: 287,
    expertScore: 3.5,
    highlights: [
      "Sleek modern interface with fast loading",
      "Competitive odds on sports betting",
      "Limited live dealer game options",
      "Weekly cashback rewards for all players",
    ],
    bonus: "250% up to $2,500",
  },
  {
    name: "Gamdom",
    slug: "gamdom",
    logo: "/casino-index/logo-gamedom.svg",
    thumbnail: "https://stg-coinbets-staging.kinsta.cloud/wp-content/uploads/2025/01/Bitsler-Video.avif",
    safetyIndex: "Normal",
    playerRating: 3.7,
    playerReviews: 431,
    expertScore: 3.6,
    highlights: [
      "Unique rain and giveaway features",
      "Strong community and chat integration",
      "Limited fiat currency support",
      "Rakeback rewards for active players",
    ],
    bonus: "15% rakeback bonus",
  },
  {
    name: "Thrill",
    slug: "thrill",
    logo: "/casino-index/logo-thrill.svg",
    thumbnail: "https://stg-coinbets-staging.kinsta.cloud/wp-content/uploads/2025/07/wpn-553@2x.avif",
    safetyIndex: "High",
    playerRating: 4.1,
    playerReviews: 356,
    expertScore: 4.0,
    highlights: [
      "Curated game library with top providers",
      "Fast KYC verification process",
      "No US player access",
      "Generous first deposit match bonus",
    ],
    bonus: "400% up to $4,000",
  },
  {
    name: "Menace",
    slug: "menace",
    logo: "/casino-index/logo-menace.svg",
    thumbnail: "https://stg-coinbets-staging.kinsta.cloud/wp-content/uploads/2025/07/wpn-275@2x.avif",
    safetyIndex: "Normal",
    playerRating: 3.5,
    playerReviews: 245,
    expertScore: 3.3,
    highlights: [
      "New platform with aggressive bonuses",
      "Growing game library from top providers",
      "Limited track record in the industry",
      "Responsive customer support team",
    ],
    bonus: "350% up to $3,500",
  },
];

export default function ExpertReviewsPage() {
  const featured = casinoReviews[0];

  return (
    <main data-section="expert-reviews-page" className="flex-1">
      {/* Hero with featured card */}
      <div data-name="reviews-hero-wrapper" className="relative bg-[#020202] overflow-hidden">
        <UnicornBackground />
        {/* Gray bottom half background — full width */}
        <div data-name="reviews-hero-bg" className="absolute bottom-0 left-0 right-0 h-1/2 bg-white pointer-events-none z-1" />
      <section data-name="reviews-hero-section" className="relative z-10 site-container pt-8">
        <div
          data-name="reviews-hero"
          className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-8 rounded-lg px-5 sm:px-8 lg:px-12 pt-10 sm:pt-14 lg:pt-16 pb-10 sm:pb-14 lg:pb-16"
        >
          {/* Left — Header text */}
          <div data-name="reviews-hero-header" className="flex flex-col justify-start">
            <p className="text-sm sm:text-base font-bold leading-relaxed text-white mb-2.5">
              CoinBets Expert Reviews
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-[1.2] tracking-tight text-white max-w-2xl mb-4">
              Top Crypto Casinos,{" "}
              <br className="hidden sm:block" />
              Reviewed by Experts
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-white/70 max-w-xl mb-8">
              Unbiased ratings, in-depth analysis, and honest pros & cons. We go
              deep so you don&apos;t have to.
            </p>

            {/* How expert reviews work */}
            <div
              data-name="reviews-work-banner"
              className="flex flex-col rounded-lg border border-neutral-200 bg-white p-5 sm:p-6"
            >
              <p className="text-sm font-bold uppercase tracking-wider text-[#060d17] mb-4">
                How Our Expert Reviews Work
              </p>
              <div data-name="reviews-work-features" className="flex flex-col gap-5">
                <div data-name="feature-item" className="flex gap-3 items-start">
                  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" className="size-[42px] shrink-0"><path d="M42 21C42 31.7789 33.8789 40.658 23.4248 41.8589C22.4167 41.9782 21.4011 42.0221 20.3864 41.9902C9.06937 41.6653 0 32.3925 0 21C0 9.40078 9.40078 0 21 0C32.5959 0 42 9.40078 42 21Z" fill="#060D17"/><path d="M29.125 17.1104H13.125C12.3296 17.1111 11.567 17.4275 11.0046 17.9899C10.4421 18.5523 10.1258 19.3149 10.125 20.1104V28.1104C10.1258 28.9058 10.4421 29.6684 11.0046 30.2308C11.567 30.7932 12.3296 31.1096 13.125 31.1104H29.125C29.9204 31.1096 30.683 30.7932 31.2454 30.2308C31.8079 29.6684 32.1242 28.9058 32.125 28.1104V20.1104C32.1242 19.3149 31.8079 18.5523 31.2454 17.9899C30.683 17.4275 29.9204 17.1111 29.125 17.1104ZM21.125 27.1104C20.3294 27.1104 19.5663 26.7943 19.0037 26.2317C18.4411 25.6691 18.125 24.906 18.125 24.1104C18.125 23.3147 18.4411 22.5516 19.0037 21.989C19.5663 21.4264 20.3294 21.1104 21.125 21.1104C21.9206 21.1104 22.6837 21.4264 23.2463 21.989C23.8089 22.5516 24.125 23.3147 24.125 24.1104C24.125 24.906 23.8089 25.6691 23.2463 26.2317C22.6837 26.7943 21.9206 27.1104 21.125 27.1104Z" fill="#E6B830"/><path d="M21.1367 11.1104C21.4019 11.1104 21.6563 11.2157 21.8438 11.4032C22.0314 11.5908 22.1367 11.8451 22.1367 12.1104V18.1104C22.1367 18.3756 22.0314 18.6299 21.8438 18.8175C21.6563 19.005 21.4019 19.1104 21.1367 19.1104C20.8715 19.1104 20.6171 19.005 20.4296 18.8175C20.2421 18.6299 20.1367 18.3756 20.1367 18.1104V12.1104C20.1367 11.8451 20.2421 11.5908 20.4296 11.4032C20.6171 11.2157 20.8715 11.1104 21.1367 11.1104Z" fill="white"/><path d="M18.8873 14.8606C19.0186 14.8604 19.1487 14.8862 19.27 14.9365C19.3914 14.9868 19.5015 15.0606 19.5943 15.1536L21.1373 16.6966L22.6803 15.1536C22.8689 14.9714 23.1215 14.8706 23.3837 14.8729C23.6459 14.8752 23.8967 14.9803 24.0821 15.1657C24.2675 15.3512 24.3727 15.602 24.375 15.8642C24.3772 16.1264 24.2764 16.379 24.0943 16.5676L21.8443 18.8176C21.6568 19.005 21.4025 19.1104 21.1373 19.1104C20.8721 19.1104 20.6178 19.005 20.4303 18.8176L18.1803 16.5676C18.0405 16.4277 17.9453 16.2495 17.9067 16.0556C17.8681 15.8616 17.8879 15.6606 17.9636 15.4779C18.0393 15.2952 18.1674 15.139 18.3318 15.0292C18.4962 14.9193 18.6895 14.8606 18.8873 14.8606Z" fill="white"/><path d="M21.125 27.1104C20.3294 27.1104 19.5663 26.7943 19.0037 26.2317C18.4411 25.6691 18.125 24.906 18.125 24.1104C18.125 23.3147 18.4411 22.5516 19.0037 21.989C19.5663 21.4264 20.3294 21.1104 21.125 21.1104C21.9206 21.1104 22.6837 21.4264 23.2463 21.989C23.8089 22.5516 24.125 23.3147 24.125 24.1104C24.125 24.906 23.8089 25.6691 23.2463 26.2317C22.6837 26.7943 21.9206 27.1104 21.125 27.1104Z" fill="white"/><path d="M15.125 25.1104C15.6773 25.1104 16.125 24.6626 16.125 24.1104C16.125 23.5581 15.6773 23.1104 15.125 23.1104C14.5727 23.1104 14.125 23.5581 14.125 24.1104C14.125 24.6626 14.5727 25.1104 15.125 25.1104Z" fill="white"/><path d="M27.125 25.1104C27.6773 25.1104 28.125 24.6626 28.125 24.1104C28.125 23.5581 27.6773 23.1104 27.125 23.1104C26.5727 23.1104 26.125 23.5581 26.125 24.1104C26.125 24.6626 26.5727 25.1104 27.125 25.1104Z" fill="white"/></svg>
                  <div data-name="feature-text" className="flex flex-col gap-1">
                    <p className="text-sm font-bold leading-snug text-[#060d17]">
                      Real Money Testing
                    </p>
                    <p className="text-sm leading-normal text-neutral-500">
                      We deposit real crypto and test every casino hands-on before reviewing.
                    </p>
                  </div>
                </div>

                <div data-name="feature-item" className="flex gap-3 items-start">
                  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" className="size-[42px] shrink-0"><path d="M42 21C42 31.7789 33.8789 40.658 23.4248 41.8589C22.4167 41.9782 21.4011 42.0221 20.3864 41.9902C9.06937 41.6653 0 32.3925 0 21C0 9.40078 9.40078 0 21 0C32.5959 0 42 9.40078 42 21Z" fill="#060D17"/><path d="M30.6406 21.1106C30.6406 21.8991 30.0425 22.4428 29.5123 22.9186C29.2675 23.1633 28.9414 23.4487 28.887 23.6255C28.8191 23.8294 28.9006 24.2508 28.9822 24.6315C29.1181 25.3112 29.2677 26.0859 28.8191 26.7114C28.3705 27.3231 27.582 27.4183 26.8752 27.4998C26.5217 27.5406 26.0867 27.595 25.9236 27.7037C25.7605 27.8261 25.5702 28.2203 25.4342 28.5465C25.1352 29.199 24.8089 29.9195 24.0612 30.1642C23.9117 30.2186 23.7622 30.2322 23.6127 30.2322C23.0689 30.2322 22.5387 29.9331 22.063 29.6748C21.7231 29.4845 21.3425 29.267 21.125 29.267C20.9075 29.267 20.5269 29.4845 20.187 29.6748C19.5889 30.0147 18.8956 30.3953 18.1888 30.1642C17.4411 29.9195 17.1148 29.199 16.8158 28.5465C16.6798 28.2203 16.4895 27.8261 16.3264 27.7037C16.1633 27.595 15.7283 27.5406 15.3612 27.4998C14.668 27.4183 13.8795 27.3231 13.4309 26.6978C12.9823 26.0861 13.1319 25.3112 13.2678 24.6315C13.3494 24.2509 13.4309 23.8295 13.363 23.6255C13.3086 23.4487 12.9823 23.1633 12.7377 22.9186C12.2075 22.4428 11.6094 21.8991 11.6094 21.1106C11.6094 20.3222 12.2075 19.7784 12.7377 19.3026C12.9823 19.058 13.3086 18.7725 13.363 18.5958C13.4309 18.3919 13.3494 17.9705 13.2678 17.5897C13.1319 16.91 12.9823 16.1353 13.4309 15.5099C13.8795 14.8981 14.668 14.803 15.3748 14.7214C15.7283 14.6806 16.1633 14.6263 16.3264 14.5175C16.4895 14.3952 16.6798 14.0009 16.8158 13.6747C17.1148 13.0222 17.4411 12.3017 18.1888 12.057C18.8956 11.8259 19.5889 12.2066 20.187 12.5464C20.5269 12.7367 20.9075 12.9542 21.125 12.9542C21.3425 12.9542 21.7231 12.7367 22.063 12.5464C22.6611 12.2066 23.3544 11.8259 24.0612 12.057C24.8089 12.3017 25.1352 13.0222 25.4342 13.6747C25.5702 14.0009 25.7605 14.3952 25.9236 14.5175C26.0867 14.6263 26.5217 14.6806 26.8888 14.7214C27.582 14.803 28.3705 14.8981 28.8191 15.5234C29.2677 16.1352 29.1181 16.91 28.9822 17.5897C28.9006 17.9703 28.8191 18.3917 28.887 18.5958C28.9414 18.7725 29.2677 19.058 29.5123 19.3026C30.0425 19.7784 30.6406 20.3222 30.6406 21.1106Z" fill="#E6B830"/><path d="M20.4453 23.8291C20.2714 23.8291 20.0974 23.7627 19.9647 23.6299L17.246 20.9112C16.9805 20.6457 16.9805 20.2156 17.246 19.9501C17.5115 19.6846 17.9416 19.6846 18.2071 19.9501L20.4453 22.1883L24.0429 18.5907C24.3083 18.3252 24.7385 18.3252 25.0039 18.5907C25.2694 18.8562 25.2694 19.2863 25.0039 19.5518L20.9258 23.6299C20.793 23.7627 20.6191 23.8291 20.4453 23.8291Z" fill="#F8F8F8"/></svg>
                  <div data-name="feature-text" className="flex flex-col gap-1">
                    <p className="text-sm font-bold leading-snug text-[#060d17]">
                      Independent Verification
                    </p>
                    <p className="text-sm leading-normal text-neutral-500">
                      No sponsors, no affiliate bias — our team verifies every review independently.
                    </p>
                  </div>
                </div>

                <div data-name="feature-item" className="flex gap-3 items-start">
                  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" className="size-[42px] shrink-0"><path d="M42 21C42 31.7789 33.8789 40.658 23.4248 41.8589C22.4167 41.9782 21.4011 42.0221 20.3864 41.9902C9.06937 41.6653 0 32.3925 0 21C0 9.40078 9.40078 0 21 0C32.5959 0 42 9.40078 42 21Z" fill="#060D17"/><path fillRule="evenodd" clipRule="evenodd" d="M19.4711 27.6844C19.697 27.8981 19.9339 28.1005 20.1805 28.2905C19.053 28.8636 17.8058 29.1615 16.541 29.1599C14.8775 29.1622 13.2546 28.6465 11.8975 27.6844H19.4711ZM22.0546 13.9318C23.1821 13.3588 24.4293 13.0609 25.6941 13.0625C30.1363 13.0625 33.7428 16.6691 33.7428 21.1112C33.7428 25.5533 30.1363 29.1599 25.6941 29.1599C24.4293 29.1615 23.1821 28.8636 22.0546 28.2905C24.2066 26.6348 25.5945 24.0338 25.5945 21.1112C25.5945 18.1886 24.2066 15.5876 22.0546 13.9318ZM21.1176 14.4914C23.2149 15.9447 24.5895 18.3686 24.5895 21.1112C24.5895 23.8538 23.2149 26.2777 21.1176 27.731C19.0205 26.2777 17.6457 23.8538 17.6457 21.1112C17.6457 18.3686 19.0205 15.9447 21.1176 14.4914ZM17.3589 24.6482C17.6681 25.3746 18.071 26.0575 18.5573 26.6794H10.7316C10.1561 26.0795 9.67671 25.3944 9.31044 24.6482H17.3589ZM16.6546 21.6123C16.6918 22.3003 16.8078 22.9818 17.0004 23.6434H8.89947C8.6818 22.9861 8.55015 22.3034 8.50781 21.6123H16.6546ZM17.0012 18.5764C16.8085 19.238 16.6922 19.9194 16.6546 20.6075H8.50807C8.55042 19.9163 8.68233 19.2336 8.9005 18.5764H17.0012ZM18.5575 15.5427C18.0717 16.164 17.6692 16.846 17.3601 17.5716H9.31173C9.67791 16.8263 10.1569 16.1419 10.7318 15.5427H18.5575ZM11.8978 14.5377C13.2548 13.5758 14.8777 13.0602 16.541 13.0625C17.8504 13.0625 19.0875 13.3761 20.1805 13.9318C19.9341 14.1217 19.6974 14.3239 19.4714 14.5377H11.8978Z" fill="white"/><path fillRule="evenodd" clipRule="evenodd" d="M19.4711 27.6844C19.697 27.8981 19.9339 28.1005 20.1805 28.2905C19.053 28.8636 17.8058 29.1615 16.541 29.1599C14.8775 29.1622 13.2546 28.6465 11.8975 27.6844H19.4711ZM17.3589 24.6482C17.6681 25.3746 18.071 26.0575 18.5573 26.6794H10.7316C10.1561 26.0795 9.67671 25.3944 9.31044 24.6482H17.3589ZM16.6546 21.6123C16.6918 22.3003 16.8078 22.9818 17.0004 23.6434H8.89947C8.6818 22.9861 8.55015 22.3034 8.50781 21.6123H16.6546ZM17.0012 18.5764C16.8085 19.238 16.6922 19.9194 16.6546 20.6075H8.50807C8.55042 19.9163 8.68233 19.2336 8.9005 18.5764H17.0012ZM18.5575 15.5427C18.0717 16.164 17.6692 16.846 17.3601 17.5716H9.31173C9.67791 16.8263 10.1569 16.1419 10.7318 15.5427H18.5575ZM11.8978 14.5377C13.2548 13.5758 14.8777 13.0602 16.541 13.0625C17.8504 13.0625 19.0875 13.3761 20.1805 13.9318C19.9341 14.1217 19.6974 14.3239 19.4714 14.5377H11.8978Z" fill="#E6B830"/></svg>
                  <div data-name="feature-text" className="flex flex-col gap-1">
                    <p className="text-sm font-bold leading-snug text-[#060d17]">
                      Full Transparency
                    </p>
                    <p className="text-sm leading-normal text-neutral-500">
                      Every score, pro, and con is backed by real testing data you can trust.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Featured expert-hero card */}
          <div
            data-name="expert-hero"
            className="relative overflow-hidden rounded-xl border border-neutral-700 p-5 sm:p-6 text-white max-w-[46ch]"
          >
            {/* Featured pill */}
            <span data-name="featured-pill" className="absolute top-3 left-3 z-10 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#020202]">
              Featured Casino
            </span>

            {/* Background */}
            <div
              data-name="expert-hero-bg"
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: "url('/hero/bg-expert-hero.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div data-name="expert-hero-content" className="relative flex flex-col gap-4">
              {/* Screenshot */}
              <Link
                href={`/casino/review/${featured.slug}`}
                data-name="expert-screenshot"
                className="relative h-[180px] sm:h-[220px] w-full rounded-xl overflow-hidden block hover:opacity-90 transition-opacity"
              >
                <Image
                  src="https://stg-coinbets-staging.kinsta.cloud/wp-content/uploads/2025/07/wpn-275@2x.avif"
                  alt={`${featured.name} screenshot`}
                  fill
                  className="object-cover"
                />
              </Link>

              {/* Data Cards */}
              <div data-name="data-cards" className="flex gap-3">
                  {/* We Bet Real Money */}
                  <div
                    data-name="data-card-money"
                    className="flex items-start gap-2 rounded-lg border-2 border-[#eecd37] bg-[rgba(223,159,30,0.6)] backdrop-blur-sm p-3 flex-1"
                  >
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      className="size-[26px] shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.29962 3.3402C3.72785 3.84712 3.25391 4.54606 3.25391 5.41585V7.58252C3.25391 8.45232 3.72785 9.15125 4.29962 9.65817C4.87264 10.1662 5.64001 10.5743 6.49526 10.8949C8.21376 11.5394 10.5152 11.9159 13.0039 11.9159C15.4926 11.9159 17.7941 11.5394 19.5126 10.8949C20.3678 10.5743 21.1352 10.1662 21.7082 9.65817C22.2799 9.15125 22.7539 8.45232 22.7539 7.58252V5.41585C22.7539 4.54606 22.2799 3.84712 21.7082 3.3402C21.1352 2.83215 20.3678 2.42412 19.5126 2.1034C17.7941 1.45897 15.4926 1.08252 13.0039 1.08252C10.5152 1.08252 8.21376 1.45897 6.49526 2.1034C5.64001 2.42412 4.87264 2.83215 4.29962 3.3402Z"
                        fill="#EECD37"
                      />
                      <path
                        d="M22.4861 11.1047C22.3947 11.1047 22.3102 11.152 22.2574 11.2267C21.6179 12.1329 20.519 12.6856 19.5126 13.063C17.7941 13.7074 15.4926 14.0839 13.0039 14.0839C10.5152 14.0839 8.21376 13.7074 6.49526 13.063C5.48886 12.6856 4.38987 12.1329 3.75041 11.2267C3.69767 11.152 3.61318 11.1047 3.52171 11.1047C3.3738 11.1047 3.25391 11.2247 3.25391 11.3725V14.0839C3.25391 14.9537 3.72785 15.6527 4.29962 16.1596C4.87264 16.6677 5.64001 17.0756 6.49526 17.3963C8.21376 18.0408 10.5152 18.4172 13.0039 18.4172C15.4926 18.4172 17.7941 18.0408 19.5126 17.3963C20.3678 17.0756 21.1352 16.6677 21.7082 16.1596C22.2799 15.6527 22.7539 14.9537 22.7539 14.0839V11.3725C22.7539 11.2247 22.634 11.1047 22.4861 11.1047Z"
                        fill="#DF9F1E"
                      />
                      <path
                        d="M22.4861 17.6042C22.3947 17.6042 22.3102 17.6515 22.2574 17.7262C21.6179 18.6324 20.519 19.1852 19.5126 19.5625C17.7941 20.207 15.4926 20.5834 13.0039 20.5834C10.5152 20.5834 8.21376 20.207 6.49526 19.5625C5.48886 19.1852 4.38987 18.6324 3.75041 17.7262C3.69767 17.6515 3.61318 17.6042 3.52171 17.6042C3.3738 17.6042 3.25391 17.7242 3.25391 17.872V20.5834C3.25391 21.4532 3.72785 22.1522 4.29962 22.6591C4.87264 23.1672 5.64001 23.5751 6.49526 23.8958C8.21376 24.5403 10.5152 24.9167 13.0039 24.9167C15.4926 24.9167 17.7941 24.5403 19.5126 23.8958C20.3678 23.5751 21.1352 23.1672 21.7082 22.6591C22.2799 22.1522 22.7539 21.4532 22.7539 20.5834V17.872C22.7539 17.7242 22.634 17.6042 22.4861 17.6042Z"
                        fill="#DF9F1E"
                      />
                    </svg>
                    <div data-name="data-card-money-text" className="flex flex-col gap-1">
                      <span className="text-base font-bold text-[#f8f8f8]">$2880</span>
                      <span className="opacity-60 text-xs font-bold uppercase text-[#f8f8f8]">
                        We Bet Real Money
                      </span>
                    </div>
                  </div>
                  {/* Real Testing */}
                  <div
                    data-name="data-card-testing"
                    className="flex items-start gap-2 rounded-lg border-2 border-[#4dd789] bg-[rgba(25,146,78,0.6)] backdrop-blur-sm p-3 flex-1"
                  >
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      className="size-[26px] shrink-0"
                    >
                      <path
                        d="M13.0013 2.16724C18.9844 2.16724 23.8346 7.01749 23.8346 13.0006C23.8346 18.9836 18.9844 23.8339 13.0013 23.8339C7.01823 23.8339 2.16797 18.9836 2.16797 13.0006C2.16797 7.01749 7.01823 2.16724 13.0013 2.16724ZM11.918 7.5839C11.3197 7.5839 10.8346 8.06893 10.8346 8.66724V14.0839C10.8346 14.6822 11.3197 15.1672 11.918 15.1672H16.2513C16.8496 15.1672 17.3346 14.6822 17.3346 14.0839C17.3346 13.4856 16.8496 13.0006 16.2513 13.0006H13.0013V8.66724C13.0013 8.06893 12.5163 7.5839 11.918 7.5839Z"
                        fill="#4DD789"
                      />
                    </svg>
                    <div data-name="data-card-testing-text" className="flex flex-col gap-1">
                      <span className="text-base font-bold text-[#f8f8f8]">19 Hours</span>
                      <span className="opacity-60 text-xs font-bold uppercase text-[#f8f8f8]">
                        Real Testing
                      </span>
                    </div>
                  </div>
                </div>

              {/* Expert Review label */}
              <div data-name="expert-review-label" className="flex items-center gap-2.5">
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    className="size-[30px] shrink-0"
                  >
                    <path
                      d="M30.0039 8.18734C29.6411 6.15767 28.6312 4.34371 27.18 3.0004C25.8857 1.79436 24.2483 0.951107 22.4343 0.627535C20.1203 0.215717 17.7474 0 15.3157 0C12.884 0 10.5112 0.215717 8.19715 0.627535C6.27533 0.970717 4.54961 1.8924 3.22591 3.21611C1.90221 4.53981 0.970714 6.26553 0.627532 8.19715C0.215714 10.5112 0 12.884 0 15.3157C0 17.7474 0.215714 20.1203 0.627532 22.4343C0.970714 24.3561 1.8924 26.072 3.2063 27.3957C4.53 28.7292 6.25572 29.6607 8.18734 30.0039C10.5014 30.4157 12.8742 30.6314 15.3059 30.6314C17.7376 30.6314 20.1105 30.4157 22.4245 30.0039C24.5522 29.6215 26.4348 28.5233 27.8076 26.9643C28.9155 25.7092 29.6902 24.1502 29.9941 22.4343C30.4059 20.1203 30.6216 17.7474 30.6216 15.3157C30.6216 12.884 30.4059 10.5112 29.9941 8.19715L30.0039 8.18734Z"
                      fill="#003EB6"
                    />
                    <path d="M9.2462 20.5125C8.46178 21.091 7.79503 21.7969 7.28516 22.6304C8.59905 24.7679 10.9425 26.121 13.4526 26.1897C13.8644 25.4249 14.139 24.611 14.2665 23.758C14.5116 22.1499 14.2272 20.4928 13.4526 19.0613C11.9328 19.1005 10.4718 19.6006 9.23639 20.5027L9.2462 20.5125Z" fill="white" />
                    <path d="M17.8064 4.40259C17.2181 5.49097 16.9043 6.72642 16.9043 7.96188C16.9043 9.19733 17.2181 10.4328 17.8064 11.5212C19.4242 11.4721 21.0127 10.8936 22.2776 9.88369C22.9541 9.34441 23.5228 8.69727 23.9739 7.96188C22.66 5.82434 20.3165 4.47122 17.8064 4.40259Z" fill="white" />
                    <path d="M8.2164 18.0611C9.48127 17.4434 10.5402 16.4825 11.2854 15.2862C10.55 14.0802 9.50089 13.1193 8.23601 12.4819C7.2751 12.0015 6.20634 11.7269 5.12776 11.6975C3.92172 13.9037 3.91192 16.6099 5.09835 18.8259C6.17692 18.7965 7.24569 18.5415 8.2164 18.0709V18.0611Z" fill="white" />
                    <path d="M21.7578 20.3261C20.5812 19.5417 19.2182 19.1103 17.8161 19.071C17.1493 20.3065 16.8356 21.7086 16.9336 23.1206C17.0023 24.1894 17.3062 25.2581 17.8161 26.1994C20.3262 26.1308 22.6697 24.7777 23.9836 22.6401C23.4149 21.7184 22.6501 20.9242 21.7578 20.3359V20.3261Z" fill="white" />
                    <path d="M7.28516 7.97168C7.92249 9.00122 8.80496 9.87389 9.84431 10.4916C10.9327 11.1388 12.178 11.5016 13.4526 11.531C14.0606 10.4132 14.3645 9.15811 14.3547 7.88343C14.3449 6.66759 14.0311 5.47135 13.4526 4.40259C10.9425 4.47122 8.59905 5.82434 7.28516 7.96188V7.97168Z" fill="white" />
                  </svg>
                  <span className="text-base font-bold text-white">Expert Review</span>
                </div>

                {/* Title */}
                <h2 className="text-[25px] font-black leading-[1.2] tracking-[-0.25px] text-white">
                  {featured.name} Expert Casino Review 2026 - Real Crypto, No Sponsors
                </h2>

                {/* Rating Card */}
                <ExpertRatingCard casino={featured} />

            </div>
          </div>
        </div>
      </section>
      </div>

      <ReviewsTabGrid reviews={allReviews} />
      <CoinbetIndexSeoMetatags />
    </main>
  );
}

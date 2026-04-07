import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Eye } from "lucide-react";
import { guides } from "@/data/guides";
import { GuidesTabGrid } from "@/components/guides-tab-grid";
import { UnicornBackground } from "@/components/unicorn-background";

export const metadata: Metadata = {
  title: "Guides | CoinBets",
  description:
    "Comprehensive guides on crypto gambling, sports betting strategies, blockchain basics, and how to get started with Bitcoin casinos.",
  openGraph: {
    title: "Guides | CoinBets",
    description:
      "Comprehensive guides on crypto gambling, sports betting strategies, and how to get started with Bitcoin casinos.",
    images: [{ url: "/opengraph.webp", width: 1200, height: 630 }],
  },
};

export default function GuidesPage() {
  return (
    <main data-section="guides-page" className="flex-1">
      {/* Hero with featured guide */}
      <div data-name="guides-hero-wrapper" className="relative bg-[#020202] overflow-hidden">
        <UnicornBackground projectId="diGFz9XwEi5VtQZ6nhL3" />
        {/* White bottom half background */}
        <div data-name="guides-hero-bg" className="absolute bottom-0 left-0 right-0 h-1/2 bg-white pointer-events-none z-1" />

        <section data-name="guides-hero-section" className="relative z-10 site-container pt-8">
          <div
            data-name="guides-hero"
            className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-8 rounded-lg px-0 sm:px-8 lg:px-12 pt-0 sm:pt-14 lg:pt-16 pb-0 sm:pb-14 lg:pb-16"
          >
            {/* Left — Header text */}
            <div data-name="guides-hero-header" className="flex flex-col justify-start">
              <p data-name="guides-hero-label" className="text-sm sm:text-base font-bold leading-relaxed text-white mb-2.5">
                CoinBets Guides
              </p>
              <h1 data-name="guides-hero-title" className="text-2xl sm:text-3xl lg:text-4xl font-black leading-[1.2] tracking-tight text-white max-w-2xl mb-4">
                Latest Coinbets Articles
              </h1>
              <p data-name="guides-hero-description" className="text-base sm:text-lg leading-relaxed text-white/70 max-w-xl mb-0 sm:mb-8">
                Learn about crypto betting, exclusive expert reviews, blockchain
                security, responsible gambling practices, and much more.
              </p>

              {/* How guides work */}
              <div
                data-name="guides-work-banner"
                className="hidden sm:flex flex-col rounded-lg border border-neutral-200 bg-white p-5 sm:p-6"
              >
                <p data-name="guides-work-title" className="text-sm font-bold uppercase tracking-wider text-[#060d17] mb-4">
                  Why Read Our Guides
                </p>
                <div data-name="guides-work-features" className="flex flex-col gap-5">
                  <div data-name="feature-item" className="flex gap-3 items-start">
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" className="size-[42px] shrink-0"><path d="M42 21C42 31.7789 33.8789 40.658 23.4248 41.8589C22.4167 41.9782 21.4011 42.0221 20.3864 41.9902C9.06937 41.6653 0 32.3925 0 21C0 9.40078 9.40078 0 21 0C32.5959 0 42 9.40078 42 21Z" fill="#060D17"/><path d="M29.125 17.1104H13.125C12.3296 17.1111 11.567 17.4275 11.0046 17.9899C10.4421 18.5523 10.1258 19.3149 10.125 20.1104V28.1104C10.1258 28.9058 10.4421 29.6684 11.0046 30.2308C11.567 30.7932 12.3296 31.1096 13.125 31.1104H29.125C29.9204 31.1096 30.683 30.7932 31.2454 30.2308C31.8079 29.6684 32.1242 28.9058 32.125 28.1104V20.1104C32.1242 19.3149 31.8079 18.5523 31.2454 17.9899C30.683 17.4275 29.9204 17.1111 29.125 17.1104ZM21.125 27.1104C20.3294 27.1104 19.5663 26.7943 19.0037 26.2317C18.4411 25.6691 18.125 24.906 18.125 24.1104C18.125 23.3147 18.4411 22.5516 19.0037 21.989C19.5663 21.4264 20.3294 21.1104 21.125 21.1104C21.9206 21.1104 22.6837 21.4264 23.2463 21.989C23.8089 22.5516 24.125 23.3147 24.125 24.1104C24.125 24.906 23.8089 25.6691 23.2463 26.2317C22.6837 26.7943 21.9206 27.1104 21.125 27.1104Z" fill="#E6B830"/><path d="M21.1367 11.1104C21.4019 11.1104 21.6563 11.2157 21.8438 11.4032C22.0314 11.5908 22.1367 11.8451 22.1367 12.1104V18.1104C22.1367 18.3756 22.0314 18.6299 21.8438 18.8175C21.6563 19.005 21.4019 19.1104 21.1367 19.1104C20.8715 19.1104 20.6171 19.005 20.4296 18.8175C20.2421 18.6299 20.1367 18.3756 20.1367 18.1104V12.1104C20.1367 11.8451 20.2421 11.5908 20.4296 11.4032C20.6171 11.2157 20.8715 11.1104 21.1367 11.1104Z" fill="white"/><path d="M18.8873 14.8606C19.0186 14.8604 19.1487 14.8862 19.27 14.9365C19.3914 14.9868 19.5015 15.0606 19.5943 15.1536L21.1373 16.6966L22.6803 15.1536C22.8689 14.9714 23.1215 14.8706 23.3837 14.8729C23.6459 14.8752 23.8967 14.9803 24.0821 15.1657C24.2675 15.3512 24.3727 15.602 24.375 15.8642C24.3772 16.1264 24.2764 16.379 24.0943 16.5676L21.8443 18.8176C21.6568 19.005 21.4025 19.1104 21.1373 19.1104C20.8721 19.1104 20.6178 19.005 20.4303 18.8176L18.1803 16.5676C18.0405 16.4277 17.9453 16.2495 17.9067 16.0556C17.8681 15.8616 17.8879 15.6606 17.9636 15.4779C18.0393 15.2952 18.1674 15.139 18.3318 15.0292C18.4962 14.9193 18.6895 14.8606 18.8873 14.8606Z" fill="white"/><path d="M21.125 27.1104C20.3294 27.1104 19.5663 26.7943 19.0037 26.2317C18.4411 25.6691 18.125 24.906 18.125 24.1104C18.125 23.3147 18.4411 22.5516 19.0037 21.989C19.5663 21.4264 20.3294 21.1104 21.125 21.1104C21.9206 21.1104 22.6837 21.4264 23.2463 21.989C23.8089 22.5516 24.125 23.3147 24.125 24.1104C24.125 24.906 23.8089 25.6691 23.2463 26.2317C22.6837 26.7943 21.9206 27.1104 21.125 27.1104Z" fill="white"/><path d="M15.125 25.1104C15.6773 25.1104 16.125 24.6626 16.125 24.1104C16.125 23.5581 15.6773 23.1104 15.125 23.1104C14.5727 23.1104 14.125 23.5581 14.125 24.1104C14.125 24.6626 14.5727 25.1104 15.125 25.1104Z" fill="white"/><path d="M27.125 25.1104C27.6773 25.1104 28.125 24.6626 28.125 24.1104C28.125 23.5581 27.6773 23.1104 27.125 23.1104C26.5727 23.1104 26.125 23.5581 26.125 24.1104C26.125 24.6626 26.5727 25.1104 27.125 25.1104Z" fill="white"/></svg>
                    <div data-name="feature-text" className="flex flex-col gap-1">
                      <p className="text-sm font-bold leading-snug text-[#060d17]">
                        Expert-Written Content
                      </p>
                      <p className="text-sm leading-normal text-neutral-500">
                        Every guide is written by experienced crypto gambling analysts and verified for accuracy.
                      </p>
                    </div>
                  </div>

                  <div data-name="feature-item" className="flex gap-3 items-start">
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" className="size-[42px] shrink-0"><path d="M42 21C42 31.7789 33.8789 40.658 23.4248 41.8589C22.4167 41.9782 21.4011 42.0221 20.3864 41.9902C9.06937 41.6653 0 32.3925 0 21C0 9.40078 9.40078 0 21 0C32.5959 0 42 9.40078 42 21Z" fill="#060D17"/><path d="M30.6406 21.1106C30.6406 21.8991 30.0425 22.4428 29.5123 22.9186C29.2675 23.1633 28.9414 23.4487 28.887 23.6255C28.8191 23.8294 28.9006 24.2508 28.9822 24.6315C29.1181 25.3112 29.2677 26.0859 28.8191 26.7114C28.3705 27.3231 27.582 27.4183 26.8752 27.4998C26.5217 27.5406 26.0867 27.595 25.9236 27.7037C25.7605 27.8261 25.5702 28.2203 25.4342 28.5465C25.1352 29.199 24.8089 29.9195 24.0612 30.1642C23.9117 30.2186 23.7622 30.2322 23.6127 30.2322C23.0689 30.2322 22.5387 29.9331 22.063 29.6748C21.7231 29.4845 21.3425 29.267 21.125 29.267C20.9075 29.267 20.5269 29.4845 20.187 29.6748C19.5889 30.0147 18.8956 30.3953 18.1888 30.1642C17.4411 29.9195 17.1148 29.199 16.8158 28.5465C16.6798 28.2203 16.4895 27.8261 16.3264 27.7037C16.1633 27.595 15.7283 27.5406 15.3612 27.4998C14.668 27.4183 13.8795 27.3231 13.4309 26.6978C12.9823 26.0861 13.1319 25.3112 13.2678 24.6315C13.3494 24.2509 13.4309 23.8295 13.363 23.6255C13.3086 23.4487 12.9823 23.1633 12.7377 22.9186C12.2075 22.4428 11.6094 21.8991 11.6094 21.1106C11.6094 20.3222 12.2075 19.7784 12.7377 19.3026C12.9823 19.058 13.3086 18.7725 13.363 18.5958C13.4309 18.3919 13.3494 17.9705 13.2678 17.5897C13.1319 16.91 12.9823 16.1353 13.4309 15.5099C13.8795 14.8981 14.668 14.803 15.3748 14.7214C15.7283 14.6806 16.1633 14.6263 16.3264 14.5175C16.4895 14.3952 16.6798 14.0009 16.8158 13.6747C17.1148 13.0222 17.4411 12.3017 18.1888 12.057C18.8956 11.8259 19.5889 12.2066 20.187 12.5464C20.5269 12.7367 20.9075 12.9542 21.125 12.9542C21.3425 12.9542 21.7231 12.7367 22.063 12.5464C22.6611 12.2066 23.3544 11.8259 24.0612 12.057C24.8089 12.3017 25.1352 13.0222 25.4342 13.6747C25.5702 14.0009 25.7605 14.3952 25.9236 14.5175C26.0867 14.6263 26.5217 14.6806 26.8888 14.7214C27.582 14.803 28.3705 14.8981 28.8191 15.5234C29.2677 16.1352 29.1181 16.91 28.9822 17.5897C28.9006 17.9703 28.8191 18.3917 28.887 18.5958C28.9414 18.7725 29.2677 19.058 29.5123 19.3026C30.0425 19.7784 30.6406 20.3222 30.6406 21.1106Z" fill="#E6B830"/><path d="M20.4453 23.8291C20.2714 23.8291 20.0974 23.7627 19.9647 23.6299L17.246 20.9112C16.9805 20.6457 16.9805 20.2156 17.246 19.9501C17.5115 19.6846 17.9416 19.6846 18.2071 19.9501L20.4453 22.1883L24.0429 18.5907C24.3083 18.3252 24.7385 18.3252 25.0039 18.5907C25.2694 18.8562 25.2694 19.2863 25.0039 19.5518L20.9258 23.6299C20.793 23.7627 20.6191 23.8291 20.4453 23.8291Z" fill="#F8F8F8"/></svg>
                    <div data-name="feature-text" className="flex flex-col gap-1">
                      <p className="text-sm font-bold leading-snug text-[#060d17]">
                        Beginner Friendly
                      </p>
                      <p className="text-sm leading-normal text-neutral-500">
                        Clear explanations for newcomers and advanced insights for experienced players.
                      </p>
                    </div>
                  </div>

                  <div data-name="feature-item" className="flex gap-3 items-start">
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" className="size-[42px] shrink-0"><path d="M42 21C42 31.7789 33.8789 40.658 23.4248 41.8589C22.4167 41.9782 21.4011 42.0221 20.3864 41.9902C9.06937 41.6653 0 32.3925 0 21C0 9.40078 9.40078 0 21 0C32.5959 0 42 9.40078 42 21Z" fill="#060D17"/><path fillRule="evenodd" clipRule="evenodd" d="M19.4711 27.6844C19.697 27.8981 19.9339 28.1005 20.1805 28.2905C19.053 28.8636 17.8058 29.1615 16.541 29.1599C14.8775 29.1622 13.2546 28.6465 11.8975 27.6844H19.4711ZM22.0546 13.9318C23.1821 13.3588 24.4293 13.0609 25.6941 13.0625C30.1363 13.0625 33.7428 16.6691 33.7428 21.1112C33.7428 25.5533 30.1363 29.1599 25.6941 29.1599C24.4293 29.1615 23.1821 28.8636 22.0546 28.2905C24.2066 26.6348 25.5945 24.0338 25.5945 21.1112C25.5945 18.1886 24.2066 15.5876 22.0546 13.9318ZM21.1176 14.4914C23.2149 15.9447 24.5895 18.3686 24.5895 21.1112C24.5895 23.8538 23.2149 26.2777 21.1176 27.731C19.0205 26.2777 17.6457 23.8538 17.6457 21.1112C17.6457 18.3686 19.0205 15.9447 21.1176 14.4914ZM17.3589 24.6482C17.6681 25.3746 18.071 26.0575 18.5573 26.6794H10.7316C10.1561 26.0795 9.67671 25.3944 9.31044 24.6482H17.3589ZM16.6546 21.6123C16.6918 22.3003 16.8078 22.9818 17.0004 23.6434H8.89947C8.6818 22.9861 8.55015 22.3034 8.50781 21.6123H16.6546ZM17.0012 18.5764C16.8085 19.238 16.6922 19.9194 16.6546 20.6075H8.50807C8.55042 19.9163 8.68233 19.2336 8.9005 18.5764H17.0012ZM18.5575 15.5427C18.0717 16.164 17.6692 16.846 17.3601 17.5716H9.31173C9.67791 16.8263 10.1569 16.1419 10.7318 15.5427H18.5575ZM11.8978 14.5377C13.2548 13.5758 14.8777 13.0602 16.541 13.0625C17.8504 13.0625 19.0875 13.3761 20.1805 13.9318C19.9341 14.1217 19.6974 14.3239 19.4714 14.5377H11.8978Z" fill="white"/><path fillRule="evenodd" clipRule="evenodd" d="M19.4711 27.6844C19.697 27.8981 19.9339 28.1005 20.1805 28.2905C19.053 28.8636 17.8058 29.1615 16.541 29.1599C14.8775 29.1622 13.2546 28.6465 11.8975 27.6844H19.4711ZM17.3589 24.6482C17.6681 25.3746 18.071 26.0575 18.5573 26.6794H10.7316C10.1561 26.0795 9.67671 25.3944 9.31044 24.6482H17.3589ZM16.6546 21.6123C16.6918 22.3003 16.8078 22.9818 17.0004 23.6434H8.89947C8.6818 22.9861 8.55015 22.3034 8.50781 21.6123H16.6546ZM17.0012 18.5764C16.8085 19.238 16.6922 19.9194 16.6546 20.6075H8.50807C8.55042 19.9163 8.68233 19.2336 8.9005 18.5764H17.0012ZM18.5575 15.5427C18.0717 16.164 17.6692 16.846 17.3601 17.5716H9.31173C9.67791 16.8263 10.1569 16.1419 10.7318 15.5427H18.5575ZM11.8978 14.5377C13.2548 13.5758 14.8777 13.0602 16.541 13.0625C17.8504 13.0625 19.0875 13.3761 20.1805 13.9318C19.9341 14.1217 19.6974 14.3239 19.4714 14.5377H11.8978Z" fill="#E6B830"/></svg>
                    <div data-name="feature-text" className="flex flex-col gap-1">
                      <p className="text-sm font-bold leading-snug text-[#060d17]">
                        Always Up to Date
                      </p>
                      <p className="text-sm leading-normal text-neutral-500">
                        Regularly updated to reflect the latest trends, regulations, and platform changes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Featured guide hero card */}
            <div
              data-name="guide-hero"
              className="relative overflow-hidden rounded-xl border border-neutral-700 p-5 sm:p-6 text-white max-w-[46ch]"
            >
              {/* Featured pill */}
              <span data-name="featured-pill" className="absolute top-3 left-3 z-10 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#020202]">
                Featured Guide
              </span>

              {/* Background */}
              <div
                data-name="guide-hero-bg"
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: "url('/hero/bg-expert-hero.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <div data-name="guide-hero-content" className="relative flex flex-col gap-4">
                {/* Screenshot */}
                <Link
                  href="/guides/crypto-vs-traditional-gambling"
                  data-name="guide-screenshot"
                  className="relative h-[180px] sm:h-[220px] w-full rounded-xl overflow-hidden block hover:opacity-90 transition-opacity"
                >
                  <Image
                    src="https://stg-coinbets-staging.kinsta.cloud/wp-content/uploads/2025/07/wpn-11@2x-1.avif"
                    alt="Crypto vs. Traditional Gambling: What's the Difference?"
                    fill
                    className="object-cover"
                  />
                </Link>

                {/* Tags */}
                <div data-name="guide-hero-tags" className="flex items-center gap-2">
                  <span className="rounded-full bg-[#e6b830] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#020202]">
                    Guides
                  </span>
                </div>

                {/* Title */}
                <Link href="/guides/crypto-vs-traditional-gambling">
                  <h2 data-name="guide-hero-title" className="text-[25px] font-black leading-[1.2] tracking-[-0.25px] text-white hover:underline">
                    Crypto vs. Traditional Gambling: What&apos;s the Difference?
                  </h2>
                </Link>

                {/* Description */}
                <p data-name="guide-hero-excerpt" className="text-sm leading-relaxed text-white/70 line-clamp-3">
                  What Exactly Makes Crypto Casinos Better than Fiat Online Casinos? How does the crypto casino scene compare to traditional online gambling? How did we get here, and what are the differences that players need to know about?
                </p>

                {/* Meta */}
                <div data-name="guide-hero-meta" className="flex items-center gap-4">
                  <div data-name="guide-hero-date" className="flex items-center gap-1.5 text-sm font-medium text-white/70">
                    <Calendar className="size-[16px]" />
                    July 09, 2025
                  </div>
                  <div data-name="guide-hero-views" className="flex items-center gap-1.5 text-sm font-medium text-white/70">
                    <Eye className="size-[16px]" />
                    541 Views
                  </div>
                  <span data-name="guide-hero-badge" className="rounded bg-[#003EB6] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
                    Expert
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Tabs + Grid */}
      <GuidesTabGrid guides={guides} />
    </main>
  );
}

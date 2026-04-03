import Image from "next/image";
import { Search } from "lucide-react";
import { PredictiveSearch } from "@/components/predictive-search";

const cryptoIcons = [
  { src: "/hero/coin-btc.png", alt: "Bitcoin" },
  { src: "/hero/coin-usdt.png", alt: "Tether" },
  { src: "/hero/coin-sol.png", alt: "Solana" },
  { src: "/hero/coin-link.png", alt: "Chainlink" },
  { src: "/hero/coin-avax.png", alt: "Avalanche" },
  { src: "/hero/coin-ada.png", alt: "Cardano" },
  { src: "/hero/coin-dot.png", alt: "Polkadot" },
  { src: "/hero/coin-algo.png", alt: "Algorand" },
  { src: "/hero/coin-atom.png", alt: "Cosmos" },
  { src: "/hero/coin-xlm.png", alt: "Stellar" },
];

export function HeroHeader() {
  return (
    <section
      data-section="hero"
      className="relative overflow-hidden bg-[#020202] pb-12 sm:pb-15 lg:pb-15"
    >
      {/* Background gradient SVG */}
      <div
        data-section="hero-background"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero/background.svg')" }}
      />

      <div
        data-name="hero-container"
        className="relative site-container py-5 lg:py-5"
      >
        <div
          data-name="hero-layout"
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10"
        >
          {/* Left: Content */}
          <div
            data-section="hero-content"
            className="flex w-full max-w-[643px] flex-col gap-6 sm:gap-9"
          >
            {/* Headline */}
            <div
              data-section="hero-headline"
              className="flex flex-col gap-2.5 text-white"
            >
              <p className="text-sm sm:text-base font-bold leading-relaxed">
                No Casino Funding. Real Reviews.
              </p>
              <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-[1.2]">
                Find a Crypto Casino You Can Trust
              </h1>
            </div>

            {/* Search Input with shimmer border */}
            <div
              data-section="hero-search"
              className="relative w-full max-w-[603px]"
            >
              {/* Shimmer border box */}
              <div
                data-name="shimmer-box"
                className="relative overflow-hidden rounded-lg shadow-[0px_1px_52px_0px_rgba(230,184,48,0.5)]"
                style={
                  {
                    "--spread": "120deg",
                    "--shimmer-color": "#ffffff",
                    "--speed": "2.5s",
                    "--cut": "2px",
                  } as React.CSSProperties
                }
              >
                {/* Shimmer border layer */}
                <div
                  data-name="shimmer-border"
                  className="absolute inset-0 overflow-visible blur-[2px] [container-type:size]"
                >
                  <div
                    data-name="shimmer-animation"
                    className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]"
                  >
                    <div
                      data-name="shimmer-gradient"
                      className="absolute -inset-full w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]"
                    />
                  </div>
                </div>

                {/* Inner background fill */}
                <div
                  data-name="search-inner-background"
                  className="absolute rounded-[8px] bg-[#020202] ring-1 ring-inset ring-[#e6b830] [inset:var(--cut)]"
                />

                {/* Input */}
                <div data-name="search-input" className="relative">
                  <PredictiveSearch
                    placeholder="Search the Top-Rated Crypto Casinos"
                    variant="dark"
                  />
                </div>
              </div>
            </div>

            {/* Below: Crypto Icons + Description */}
            <div data-name="icons-description" className="flex flex-col gap-5">
              {/* Crypto Icons Row */}
              <div
                data-section="hero-crypto-icons"
                className="flex items-center gap-1"
              >
                {cryptoIcons.map((coin) => (
                  <Image
                    key={coin.alt}
                    src={coin.src}
                    alt={coin.alt}
                    width={51}
                    height={52}
                    className="size-[calc((100vw-80px)/10)] sm:size-[51px] object-cover"
                  />
                ))}
              </div>

              {/* Description */}
              <div
                data-section="hero-description"
                className="flex flex-col gap-1.5"
              >
                <p className="text-sm sm:text-base font-bold text-[#f8f8f8] leading-relaxed">
                  Unfiltered Player Reviews — Discover, Rate &amp; Decide
                </p>
                <p className="text-sm sm:text-base font-normal text-white/70 leading-relaxed">
                  No affiliate links. No paid rankings. No casino Influence.
                  Just honest reviews, verified data, and a community exposing
                  what others won&apos;t.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Casino Illustration */}
          <div
            data-section="hero-illustration"
            className="relative hidden h-[500px] w-[540px] shrink-0 lg:block"
          >
            <Image
              src="/hero/hero-illustration.png"
              alt="Casino wheel, slot machine, cards and chips"
              width={540}
              height={500}
              className="absolute inset-0 size-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

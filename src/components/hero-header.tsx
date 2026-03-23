import Image from "next/image";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

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
    <section className="relative overflow-hidden bg-[#020202]">
      {/* Background gradient SVG */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero/background.svg')" }}
      />

      <div className="relative mx-auto max-w-[1600px] px-10 lg:px-36 py-16 lg:py-20">
        <div className="flex items-center justify-between gap-10">
          {/* Left: Content */}
          <div className="flex max-w-[643px] flex-col gap-9">
            {/* Headline */}
            <div className="flex flex-col gap-2.5 text-white">
              <p className="text-base font-bold leading-relaxed">
                No Casino Funding. Real Reviews.
              </p>
              <h1 className="font-heading text-4xl font-black tracking-tight leading-[1.2]">
                Find a Crypto Casino You Can Trust
              </h1>
            </div>

            {/* Search Input */}
            <div className="relative w-full max-w-[603px]">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                <Search className="size-6 text-white" />
              </div>
              <Input
                type="text"
                placeholder="Search the Top-Rated Crypto Casinos"
                className="h-[60px] w-full rounded-lg border border-[#e6b830] bg-[#020202] pl-12 pr-4 text-base text-white placeholder:text-white/60 shadow-[0px_1px_52px_0px_rgba(230,184,48,0.5)] focus-visible:border-[#e6b830] focus-visible:ring-[#e6b830]/30"
              />
            </div>

            {/* Below: Crypto Icons + Description */}
            <div className="flex flex-col gap-5">
              {/* Crypto Icons Row */}
              <div className="flex items-center gap-1">
                {cryptoIcons.map((coin) => (
                  <Image
                    key={coin.alt}
                    src={coin.src}
                    alt={coin.alt}
                    width={51}
                    height={52}
                    className="size-[51px] object-cover"
                  />
                ))}
              </div>

              {/* Description */}
              <div className="flex flex-col gap-1.5">
                <p className="text-base font-bold text-[#f8f8f8] leading-relaxed">
                  Unfiltered Player Reviews — Discover, Rate &amp; Decide
                </p>
                <p className="text-base font-normal text-white/70 leading-relaxed">
                  No affiliate links. No paid rankings. No casino Influence.
                  Just honest reviews, verified data, and a community exposing
                  what others won&apos;t.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Casino Illustration */}
          <div className="relative hidden h-[480px] w-[500px] shrink-0 lg:block">
            <Image
              src="/hero/hero-illustration.png"
              alt="Casino wheel, slot machine, cards and chips"
              width={500}
              height={480}
              className="absolute inset-0 size-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

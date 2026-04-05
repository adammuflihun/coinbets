import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about CoinBets — our mission, team, and commitment to providing honest, transparent crypto casino and sports betting reviews.",
  openGraph: {
    title: "About | CoinBets",
    description:
      "Learn about CoinBets — our mission, team, and commitment to honest crypto casino reviews.",
    images: [{ url: "/opengraph.webp", width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return (
    <main data-section="main" className="flex-1">
      {/* Hero */}
      <div
        data-name="about-hero"
        className="relative bg-[#060505] overflow-hidden"
      >
        <Image
          src="/hero/about-hero.jpg"
          alt=""
          fill
          className="object-cover hidden lg:block"
          priority
        />
        <Image
          src="/hero/about-hero-mobile.png"
          alt=""
          fill
          className="object-cover lg:hidden"
          priority
        />

        <div
          data-name="about-hero-container"
          className="relative site-container py-24 lg:py-40 flex justify-center"
        >
          <div
            data-name="about-hero-content"
            className="max-w-[480px] flex flex-col gap-[22px]"
          >
            <p
              data-name="about-tagline"
              className="text-base font-bold tracking-[3.2px] text-white"
            >
              About Us
            </p>
            <h1
              data-name="about-title"
              className="text-[32px] lg:text-[45px] font-black leading-none tracking-[-0.45px] text-white"
            >
              The Truth. Uncensored. No Bullsh*t.
            </h1>
            <div
              data-name="about-paragraphs"
              className="flex flex-col gap-8 text-lg font-medium text-white leading-[1.4]"
            >
              <p data-name="about-paragraph-1">
                The world of crypto casino reviews is a crime-ridden city.
                Shadowy deals. Backdoor bribes. A system built to exploit you,
                not help you.
              </p>
              <p data-name="about-paragraph-2">
                Most crypto casino review sites aren&apos;t the heroes they
                claim to be. They&apos;re the villains, feeding off your losses,
                silencing real complaints, and protecting the highest bidders.
              </p>
            </div>
          </div>
        </div>
        <div
          data-name="about-hero-gradient"
          className="absolute bottom-0 left-0 right-0 h-[20%] bg-linear-to-t from-[#060505] to-transparent"
        />
      </div>

      {/* Independent Section */}
      <div data-name="about-independent" className="bg-[#060505]">
        <div
          data-name="about-independent-container"
          className="site-container py-16 lg:py-24"
        >
          <div
            data-name="about-independent-grid"
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            <div
              data-name="about-independent-image"
              className="relative aspect-[591/522] rounded-sm overflow-hidden"
            >
              <Image
                src="/hero/about-images-02.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div
              data-name="about-independent-content"
              className="flex flex-col gap-11"
            >
              <h2
                data-name="about-independent-heading"
                className="text-[32px] lg:text-[45px] font-extrabold leading-none tracking-[0.45px] text-white"
              >
                CoinBets is the only 100% independent crypto casino guide
              </h2>
              <div
                data-name="about-independent-items"
                className="flex flex-col gap-4"
              >
                {[
                  {
                    icon: "/icons/about/game-sponsor.svg",
                    text: "No shady sponsorships.",
                  },
                  {
                    icon: "/icons/about/affiliate-marketing.svg",
                    text: "No affiliate deals that profit from your losses.",
                  },
                  {
                    icon: "/icons/about/credit-card.svg",
                    text: 'No "pay-for-play" review scores.',
                  },
                ].map((item) => (
                  <div
                    key={item.text}
                    data-name="about-independent-item"
                    className="flex items-center gap-2.5"
                  >
                    <Image
                      src={item.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="size-8 shrink-0"
                    />
                    <p className="text-lg font-medium text-white">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
              <div
                data-name="about-independent-callout"
                className="bg-[#e6b830] flex gap-2.5 items-start px-5 py-3.5"
              >
                <Image
                  src="/icons/about/credit-card-dark.svg"
                  alt=""
                  width={32}
                  height={32}
                  className="size-8 shrink-0"
                />
                <p className="text-lg font-bold text-[#060505] leading-[1.2]">
                  Why? Because the moment a casino pays a review site, the truth
                  dies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ugly Truth Section */}
      <div data-name="about-ugly-truth" className="bg-[#060505]">
        <div
          data-name="about-ugly-truth-container"
          className="site-container py-16 lg:py-24"
        >
          <div
            data-name="about-ugly-truth-grid"
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start"
          >
            <div
              data-name="about-ugly-truth-content"
              className="flex flex-col gap-12"
            >
              {/* Heading + Lists */}
              <div
                data-name="about-ugly-truth-main"
                className="flex flex-col gap-6"
              >
                <h2
                  data-name="about-ugly-truth-heading"
                  className="text-[32px] lg:text-[45px] font-extrabold leading-none tracking-[-0.45px] text-white"
                >
                  The Ugly Truth About Crypto Casino Review Sites
                </h2>
                <div
                  data-name="about-ugly-truth-list-1"
                  className="flex flex-col gap-2"
                >
                  {[
                    {
                      icon: "/icons/about/affiliate-money.svg",
                      text: "They earn 30-50% of your losses - FOR LIFE.",
                    },
                    {
                      icon: "/icons/about/push-casinos.svg",
                      text: "They push casinos that pay the most, not the best ones for players.",
                    },
                    {
                      icon: "/icons/about/delete.svg",
                      text: "They delete or bury negative reviews to protect their cash flow.",
                    },
                  ].map((item) => (
                    <div
                      key={item.text}
                      data-name="about-ugly-truth-item"
                      className="flex gap-2 items-start"
                    >
                      <Image
                        src={item.icon}
                        alt=""
                        width={32}
                        height={32}
                        className="size-8 shrink-0"
                      />
                      <p className="text-base text-white tracking-[0.15px] leading-[2.1]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
                <div
                  data-name="about-ugly-truth-list-2"
                  className="flex flex-col gap-2"
                >
                  {[
                    {
                      icon: "/icons/about/affiliate-money.svg",
                      text: "They make money ONLY if you lose.",
                    },
                    {
                      icon: "/icons/about/warning.svg",
                      text: "They have ZERO incentive to warn you about predatory casinos.",
                    },
                  ].map((item) => (
                    <div
                      key={item.text}
                      data-name="about-ugly-truth-item"
                      className="flex gap-2 items-start"
                    >
                      <Image
                        src={item.icon}
                        alt=""
                        width={32}
                        height={32}
                        className="size-8 shrink-0"
                      />
                      <p className="text-base text-white tracking-[0.15px] leading-[2.1]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ever Wonder Why */}
              <div
                data-name="about-ever-wonder"
                className="flex flex-col gap-6"
              >
                <h3
                  data-name="about-ever-wonder-heading"
                  className="text-[22px] font-black leading-[1.2] tracking-[-0.22px] text-white"
                >
                  Ever wonder why
                </h3>
                <div
                  data-name="about-ever-wonder-list"
                  className="flex flex-col gap-2"
                >
                  {[
                    {
                      icon: "/icons/about/rating.svg",
                      text: 'Every casino has a "great" rating?',
                    },
                    {
                      icon: "/icons/about/delete-red.svg",
                      text: "Your real complaint got deleted or ignored?",
                    },
                    {
                      icon: "/icons/about/bonus.svg",
                      text: "Even the worst casinos get 'recommended' bonuses?",
                    },
                  ].map((item) => (
                    <div
                      key={item.text}
                      data-name="about-ever-wonder-item"
                      className="flex gap-2 items-start"
                    >
                      <Image
                        src={item.icon}
                        alt=""
                        width={32}
                        height={32}
                        className="size-8 shrink-0"
                      />
                      <p className="text-base text-white tracking-[0.15px] leading-[2.1]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Callout */}
              <div
                data-name="about-ugly-truth-callout"
                className="bg-[#e6b830] flex gap-2.5 items-start px-5 py-3.5"
              >
                <Image
                  src="/icons/about/credit-card-dark.svg"
                  alt=""
                  width={32}
                  height={32}
                  className="size-8 shrink-0"
                />
                <p className="text-base font-bold text-[#060505] tracking-[0.15px] leading-[1.2]">
                  It&apos;s because they aren&apos;t protecting players.
                  They&apos;re protecting their money.
                </p>
              </div>

              <p
                data-name="about-ugly-truth-footer"
                className="text-[15px] font-bold text-white tracking-[0.15px] leading-[1.2]"
              >
                It&apos;s because they aren&apos;t protecting players.
                They&apos;re protecting their money.
              </p>
            </div>

            <div
              data-name="about-ugly-truth-image"
              className="relative aspect-[615/773] rounded-sm overflow-hidden"
            >
              <Image
                src="/hero/about-images-01.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Breaking the Corrupt System */}
      <div data-name="about-corrupt" className="bg-[#060505]">
        <div
          data-name="about-corrupt-container"
          className="site-container py-16 lg:py-24"
        >
          {/* Heading */}
          <h2
            data-name="about-corrupt-heading"
            className="text-[32px] lg:text-[45px] font-extrabold leading-none tracking-[-0.45px] text-white text-center"
          >
            Breaking the corrupt system
          </h2>

          {/* Center image + description */}
          <div
            data-name="about-corrupt-hero"
            className="mt-10 flex flex-col items-center"
          >
            <Image
              data-name="about-corrupt-image"
              src="/hero/about-image-03.png"
              alt=""
              width={647}
              height={534}
              className="w-full max-w-[647px] h-auto"
            />
            <p
              data-name="about-corrupt-description"
              className="mt-6 text-center text-2xl font-bold text-white leading-[1.3] tracking-[0.15px] max-w-[635px]"
            >
              CoinBets is building a vault of verified player reviews and
              complaints because when the truth stacks up, even the biggest
              crypto casinos have to listen.
            </p>
          </div>

          {/* Three cards */}
          <div
            data-name="about-corrupt-cards"
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: "/hero/icon-about-01.png",
                title: "Zero Casino Money",
                text: "We don\u2019t get paid when you lose. Because we don\u2019t take casino money",
              },
              {
                icon: "/hero/icon-about-02.png",
                title: "Player Protection",
                text: "Our player complaint system punishes casinos that ignore complaints and scam players",
              },
              {
                icon: "/hero/icon-about-03.png",
                title: "Full Transparency",
                text: "We expose crypto casinos for every shady move they make",
              },
            ].map((card) => (
              <div
                key={card.title}
                data-name="about-corrupt-card"
                className="bg-white/5 rounded-xl flex flex-col items-center px-5 pt-5 pb-8"
              >
                <div
                  data-name="about-corrupt-card-image"
                  className="relative size-[179px]"
                >
                  <Image
                    src={card.icon}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <h3
                  data-name="about-corrupt-card-title"
                  className="mt-5 text-xl font-bold text-white text-center"
                >
                  {card.title}
                </h3>
                <p
                  data-name="about-corrupt-card-text"
                  className="mt-2 text-base text-white text-center leading-[1.4] tracking-[0.15px]"
                >
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom image */}
          <div
            data-name="about-corrupt-bottom-image"
            className="mt-16 relative w-full aspect-[1331/667] rounded-sm overflow-hidden"
          >
            <Image
              src="/hero/about-image-04.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* How We Monetize */}
      <div data-name="about-monetize" className="bg-[#060505]">
        <div
          data-name="about-monetize-container"
          className="site-container py-16 lg:py-24"
        >
          {/* Intro */}
          <p
            data-name="about-monetize-intro"
            className="text-2xl font-bold text-white text-center leading-[1.3] tracking-[0.15px] max-w-[635px] mx-auto"
          >
            We bet real money and pay a world-class team to keep it honest. We
            don&apos;t take a cent from casinos but we still need to make money
            to survive. So we&apos;ll monetize the right way.
          </p>

          {/* Heading */}
          <div data-name="about-monetize-heading" className="mt-16 text-center">
            <h2 className="text-[32px] lg:text-[49px] font-extrabold leading-none tracking-[-0.49px] text-white">
              How We Plan to Monetize
            </h2>
            <p className="text-[28px] lg:text-[40px] font-extrabold leading-none tracking-[-0.49px] text-[#e6b830] mt-1">
              (Without Selling Out)
            </p>
          </div>

          {/* 4 cards */}
          <div
            data-name="about-monetize-cards"
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: "/hero/icon-plan-01.png",
                title: "Pro Comparisons",
                text: "Powerful premium casino comparison tools with advanced filters",
              },
              {
                icon: "/hero/icon-plan-02.png",
                title: "Deep Insights",
                text: "Exclusive reports, deep-dive insights, and real payout data for b2b",
              },
              {
                icon: "/hero/icon-plan-03.png",
                title: "Scam Alerts",
                text: "Advanced alerts when casinos are flagged for scams, frozen funds, or delayed withdrawals",
              },
              {
                icon: "/hero/icon-plan-04.png",
                title: "Dispute Support",
                text: "Elite investigative support for high-stakes casino disputes",
              },
            ].map((card) => (
              <div
                key={card.title}
                data-name="about-monetize-card"
                className="bg-white/5 rounded-xl flex flex-col items-center px-5 pt-8 pb-8"
              >
                <div
                  data-name="about-monetize-card-image"
                  className="relative size-[140px]"
                >
                  <Image
                    src={card.icon}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <h3
                  data-name="about-monetize-card-title"
                  className="mt-5 text-xl font-bold text-white text-center"
                >
                  {card.title}
                </h3>
                <p
                  data-name="about-monetize-card-text"
                  className="mt-2 text-base text-white text-center leading-[1.4] tracking-[0.15px]"
                >
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          {/* Non-Casino Sponsors */}
          <h2
            data-name="about-sponsors-heading"
            className="mt-20 text-[32px] lg:text-[49px] font-extrabold leading-none tracking-[-0.49px] text-white text-center"
          >
            Non-Casino Sponsors
          </h2>

          {/* 3 cards */}
          <div
            data-name="about-sponsors-cards"
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: "/hero/icon-plan-05.png",
                title: "Crypto Partners",
                text: "Crypto wallets, VPN providers, and crypto projects unrelated to gambling",
              },
              {
                icon: "/hero/icon-plan-06.png",
                title: "Privacy Tools",
                text: "Tax reporting tools, password managers, and privacy-focused browser extensions",
              },
              {
                icon: "/hero/icon-plan-07.png",
                title: "Security Hardware",
                text: "Hardware wallet companies and DeFi security projects that align with user-first values",
              },
            ].map((card) => (
              <div
                key={card.title}
                data-name="about-sponsor-card"
                className="bg-white/5 rounded-xl flex flex-col items-center px-5 pt-8 pb-8"
              >
                <div
                  data-name="about-sponsor-card-image"
                  className="relative size-[140px]"
                >
                  <Image
                    src={card.icon}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <h3
                  data-name="about-sponsor-card-title"
                  className="mt-5 text-xl font-bold text-white text-center"
                >
                  {card.title}
                </h3>
                <p
                  data-name="about-sponsor-card-text"
                  className="mt-2 text-base text-white text-center leading-[1.4] tracking-[0.15px]"
                >
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join the Fight CTA */}
      <div data-name="about-cta" className="relative">
        {/* Olive background */}
        <div
          data-name="about-cta-backdrop"
          className="relative bg-[#292a23] pt-48 lg:pt-80 pb-48 lg:pb-64 overflow-hidden min-h-[1280px]"
        >
          <div data-name="about-cta-bg-overlay" className="absolute top-0 left-0 right-0 h-[20%] bg-linear-to-b from-[#060505] to-transparent z-1" />
          <Image
            data-name="about-cta-bg"
            src="/about/footer-about.png"
            alt=""
            fill
            className="object-cover object-bottom"
          />
          <div
            data-name="about-cta-heading-wrap"
            className="site-container relative z-10"
          >
            <h2
              data-name="about-cta-heading"
              className="text-[28px] lg:text-[49px] font-extrabold leading-none tracking-[-0.49px] text-white text-center max-w-[1023px] mx-auto"
            >
              Hold crypto casinos accountable. Join the fight with CoinBets.
            </h2>
          </div>
        </div>

        {/* Cards on black */}
        <div data-name="about-cta-cards-section" className="bg-[#060505]">
          <div
            data-name="about-cta-cards-container"
            className="site-container -mt-32 lg:-mt-40 relative z-10 pb-20 lg:pb-28"
          >
            <div
              data-name="about-cta-cards"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  icon: "/about/footer-about-01.png",
                  title: "Post Verified Reviews",
                  text: "Share your real experiences to guide other players.",
                  button: "See Reviews",
                  href: "#",
                },
                {
                  icon: "/about/footer-about-02.png",
                  title: "Vote on Complaints",
                  text: "Help keep shady casinos in check.",
                  button: "Read Complaints",
                  href: "#",
                },
                {
                  icon: "/about/footer-about-03.png",
                  title: "Join the Discussion",
                  text: "Speak your mind in our community forum.",
                  button: "Have your say",
                  href: "#",
                },
                {
                  icon: "/about/footer-about-04.png",
                  title: "Spread the Word",
                  text: "The more we grow, the louder our voice.",
                  button: "Learn More",
                  href: "#",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  data-name="about-cta-card"
                  className="flex flex-col items-center text-center h-full"
                >
                  <div
                    data-name="about-cta-card-image"
                    className="relative w-[136px] h-[131px]"
                  >
                    <Image
                      src={card.icon}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3
                    data-name="about-cta-card-title"
                    className="mt-6 text-xl font-bold text-white"
                  >
                    {card.title}
                  </h3>
                  <p
                    data-name="about-cta-card-text"
                    className="mt-1 text-base text-white leading-[1.4] tracking-[0.15px] flex-1"
                  >
                    {card.text}
                  </p>
                  <a
                    data-name="about-cta-card-button"
                    href={card.href}
                    className="mt-4 inline-flex items-center justify-center bg-[#e6b830] text-[#1c1c1c] font-bold text-base leading-5 px-3 py-3 rounded-md hover:bg-[#d4a82a] transition-colors"
                  >
                    {card.button}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gradient from previous black section into olive */}
      </div>
    </main>
  );
}

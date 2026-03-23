import Image from "next/image";
import Link from "next/link";
import { BookOpen, ArrowRight, ChevronDown } from "lucide-react";

const helpfulGuides = [
  { label: "Introduction to Crypto Gambling", href: "/guides/intro-crypto-gambling" },
  { label: "The Best Crypto Casinos of 2024", href: "/guides/best-crypto-casinos" },
  { label: "How to Choose a Safe and Reliable Crypto Casino", href: "/guides/safe-crypto-casino" },
  { label: "Understanding Blockchain Technology in Online Gambling", href: "/guides/blockchain-gambling" },
  { label: "Top Cryptocurrencies for Gambling: Beyond Bitcoin", href: "/guides/top-crypto-gambling" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact us", href: "/contact" },
  { label: "Transparency Report", href: "/transparency" },
  { label: "Terms of Use", href: "/terms" },
];

const coinbetsLinks = [
  { label: "Crypto Casinos", href: "/crypto-casinos", icon: "/categories/icon-crypto-casinos.svg" },
  { label: "Crypto Sports Betting", href: "/sports-betting", icon: "/categories/icon-sports-betting.svg" },
  { label: "Crypto Esports Betting", href: "/esports", icon: "/categories/icon-crypto-esport.svg" },
  { label: "Bonuses", href: "/bonuses", icon: "/icon-bonuses.svg" },
  { label: "Expert Reviews", href: "/expert-reviews", icon: "/categories/icon-expert-reviews.svg" },
  { label: "User Reviews", href: "/user-reviews", icon: "/categories/icon-user-reviews.svg" },
  { label: "All Guides", href: "/guides", icon: null },
];

function XIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#F8F8F8"/>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#F8F8F8"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#F8F8F8"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer data-section="footer" className="bg-[#020202] text-[#f8f8f8]">
      <div className="site-container py-16 lg:py-24" data-name="footer-container">
        {/* Top Section: Logo, Newsletter, Social */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-8" data-name="footer-top">
          {/* Logo */}
          <div className="shrink-0" data-name="footer-logo">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="CoinBets"
                width={150}
                height={31}
                className="brightness-0 invert"
              />
            </Link>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-2.5" data-name="footer-newsletter">
            <p className="font-heading font-bold text-xs uppercase tracking-wide">
              Subscribe to our newsletter
            </p>
            <div className="flex gap-2.5" data-name="newsletter-input-row">
              <input
                type="email"
                placeholder="Enter your e-mail address"
                className="h-[46px] w-[284px] max-w-full rounded-lg border border-neutral-300 bg-white px-3 text-sm text-neutral-500 shadow-sm outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
              />
              <button className="flex h-[46px] items-center justify-between gap-2 rounded-lg bg-[#eab914] px-6 font-heading font-semibold text-sm text-[#171717] hover:bg-[#d4a812] transition-colors">
                Subscribe
                <ArrowRight className="size-4" />
              </button>
            </div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="size-4 rounded border-neutral-400 bg-white accent-[#eab914]"
              />
              <span className="text-sm text-white">
                I am at least 18 years old and legally allowed to play in a casino
              </span>
            </label>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col gap-4" data-name="footer-social">
            <p className="font-heading font-bold text-base">Follow us</p>
            <div className="flex items-center gap-3" data-name="social-icons">
              <Link href="#" aria-label="X (Twitter)" className="hover:opacity-80 transition-opacity">
                <XIcon />
              </Link>
              <Link href="#" aria-label="YouTube" className="hover:opacity-80 transition-opacity">
                <YouTubeIcon />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
                <LinkedInIcon />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#d9d9d9] opacity-20 my-14" />

        {/* Middle Section: Link Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto] gap-12 lg:gap-24" data-name="footer-links">
          {/* Helpful Guides */}
          <div data-name="guides-column">
            <h3 className="font-heading font-bold text-sm uppercase text-[#f8f8f8] opacity-70 mb-10">
              Helpful Guides
            </h3>
            <ul className="flex flex-col gap-4">
              {helpfulGuides.map((guide) => (
                <li key={guide.label}>
                  <Link
                    href={guide.href}
                    className="flex items-center gap-2.5 text-sm font-medium text-[#f8f8f8] hover:text-[#eab914] transition-colors"
                  >
                    <BookOpen className="size-4 shrink-0 opacity-70" />
                    {guide.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div data-name="company-column">
            <h3 className="font-heading font-bold text-sm uppercase text-[#f8f8f8] opacity-70 mb-10">
              Company
            </h3>
            <ul className="flex flex-col gap-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-[#f8f8f8] hover:text-[#eab914] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CoinBets */}
          <div data-name="coinbets-column">
            <h3 className="font-heading font-bold text-sm uppercase text-[#f8f8f8] opacity-70 mb-10">
              CoinBets
            </h3>
            <ul className="flex flex-col gap-4">
              {coinbetsLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm font-medium text-[#f8f8f8] hover:text-[#eab914] transition-colors"
                  >
                    {link.icon ? (
                      <Image
                        src={link.icon}
                        alt=""
                        width={16}
                        height={16}
                        className="size-4 shrink-0 brightness-0 invert"
                      />
                    ) : (
                      <BookOpen className="size-4 shrink-0 opacity-70" />
                    )}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#d9d9d9] opacity-20 my-14" />

        {/* Bottom Section: Disclaimer + Language */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-24" data-name="footer-bottom">
          <p className="text-xs leading-relaxed text-[#f8f8f8] opacity-70 max-w-[975px]">
            CoinBets is an independent source of information about online casinos and online casino
            games, not controlled by any gambling operator. All our reviews and guides are created
            honestly, according to the best knowledge and judgment of the members of our independent
            expert team; however, they are intended for informative purposes only and should not be
            construed as, nor relied upon as, legal advice. You should always make sure that you meet
            all regulatory requirements before playing in any selected casino. Copyright &copy;2024
          </p>

          <div className="shrink-0" data-name="footer-language">
            <p className="font-heading font-bold text-base mb-4">CoinBets in other languages</p>
            <button className="flex items-center gap-1.5 rounded-lg bg-neutral-100 px-3 py-1.5 text-sm font-medium text-[#171717]">
              <Image
                src="/flag-en.svg"
                alt=""
                width={16}
                height={16}
                className="size-4 rounded-full"
              />
              English
              <ChevronDown className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

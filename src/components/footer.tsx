"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const helpfulGuides = [
  {
    label: "Introduction to Crypto Gambling",
    href: "/guides/intro-crypto-gambling",
  },
  {
    label: "The Best Crypto Casinos of 2024",
    href: "/guides/best-crypto-casinos",
  },
  {
    label: "How to Choose a Safe and Reliable Crypto Casino",
    href: "/guides/safe-crypto-casino",
  },
  {
    label: "Understanding Blockchain Technology in Online Gambling",
    href: "/guides/blockchain-gambling",
  },
  {
    label: "Top Cryptocurrencies for Gambling: Beyond Bitcoin",
    href: "/guides/top-crypto-gambling",
  },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact us", href: "/contact" },
  { label: "Transparency Report", href: "/transparency" },
  { label: "Terms of Use", href: "/terms" },
];

const coinbetsLinks = [
  {
    label: "Crypto Casinos",
    href: "/crypto-casinos",
    icon: "/categories/icon-crypto-casinos.svg",
  },
  {
    label: "Crypto Sports Betting",
    href: "/sports-betting",
    icon: "/categories/icon-sports-betting.svg",
  },
  {
    label: "Crypto Esports Betting",
    href: "/esports",
    icon: "/categories/icon-crypto-esport.svg",
  },
  { label: "Bonuses", href: "/bonuses", icon: "/icon-bonuses.svg" },
  {
    label: "Expert Reviews",
    href: "/expert-reviews",
    icon: "/categories/icon-expert-reviews.svg",
  },
  {
    label: "User Reviews",
    href: "/user-reviews",
    icon: "/categories/icon-user-reviews.svg",
  },
  { label: "All Guides", href: "/guides", icon: null },
];

function XIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        fill="#F8F8F8"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
        fill="#F8F8F8"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        fill="#F8F8F8"
      />
    </svg>
  );
}

function NewsletterCheckbox() {
  const [checked, setChecked] = useState(false);
  return (
    <label
      className="flex items-center gap-3 cursor-pointer"
      onClick={() => setChecked(!checked)}
    >
      {checked ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          className="size-[18px] shrink-0"
        >
          <path
            d="M13 0.5C15.4853 0.5 17.5 2.51472 17.5 5V13C17.5 15.4853 15.4853 17.5 13 17.5H5C2.51472 17.5 0.5 15.4853 0.5 13V5C0.5 2.51472 2.51472 0.5 5 0.5H13Z"
            fill="#EAB914"
            stroke="#171717"
          />
          <path
            d="M13.357 5.19064C13.5278 5.01979 13.8048 5.01979 13.9756 5.19064C14.1465 5.3615 14.1465 5.63844 13.9756 5.80929L7.55897 12.226C7.38811 12.3968 7.11117 12.3968 6.94032 12.226L4.02365 9.30929C3.85279 9.13844 3.85279 8.8615 4.02365 8.69064C4.1945 8.51979 4.47145 8.51979 4.6423 8.69064L7.24964 11.298L13.357 5.19064Z"
            fill="#020202"
          />
        </svg>
      ) : (
        <span className="size-[18px] shrink-0 rounded-[5px] border border-neutral-400 bg-white" />
      )}
      <span className="text-sm text-white">
        I am at least 18 years old and legally allowed to play in a casino
      </span>
    </label>
  );
}

export function Footer() {
  useEffect(() => {
    const win = window as Window & {
      UnicornStudio?: { isInitialized?: boolean; init?: () => void };
    };
    const u = win.UnicornStudio;
    if (u && u.init) {
      u.init();
    } else {
      win.UnicornStudio = { isInitialized: false };
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.4/dist/unicornStudio.umd.js";
      script.onload = () => {
        win.UnicornStudio?.init?.();
      };
      document.head.appendChild(script);
    }
  }, []);

  return (
    <footer
      data-section="footer"
      className="relative bg-[#020202] text-[#f8f8f8] overflow-hidden"
    >
      {/* UnicornStudio animated background */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        data-name="footer-bg"
      >
        <div
          style={{ width: "100%", height: "100%" }}
          data-us-project="VcUjJkH0sFQCLMDEVf84"
        />
      </div>

      <div
        className="site-container py-16 lg:py-24 relative z-10"
        data-name="footer-container"
      >
        {/* Top Section: Logo, Newsletter, Social */}
        <div
          className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-8"
          data-name="footer-top"
        >
          {/* Logo */}
          <div className="shrink-0" data-name="footer-logo">
            <Link href="/">
              <svg
                width="auto"
                height="auto"
                viewBox="0 0 150 31"
                fill="none"
                className="h-[40px] w-[100%]"
              >
                <path
                  d="M56.3312 11.1583L53.5662 13.1095H53.5564C52.2817 11.1093 50.5756 10.0993 48.4282 10.0993C46.2809 10.0993 45.3592 10.6484 44.2708 11.7564C43.1825 12.8742 42.6432 14.2862 42.6432 16.0217C42.6432 17.7572 43.1825 19.1496 44.2708 20.2575C45.3592 21.3459 46.7417 21.8852 48.4282 21.8852C50.1147 21.8852 52.2817 20.8851 53.5564 18.8848C53.5564 18.8848 53.5564 18.8848 53.5662 18.8848L56.3312 20.836C54.782 23.6305 51.8503 25.2876 48.3988 25.2876C44.9474 25.2876 43.457 24.3953 41.6136 22.6304C39.7899 20.836 38.8682 18.6397 38.8682 16.0021C38.8682 13.3645 39.7899 11.1681 41.6332 9.40318C43.4766 7.60883 45.7318 6.71655 48.4184 6.71655C51.1051 6.71655 54.7134 8.37363 56.3214 11.1681L56.3312 11.1583Z"
                  fill="white"
                />
                <path
                  d="M77.127 9.71694C75.4798 9.71694 74.2149 8.14811 75.0091 6.38317C75.8033 4.61824 75.568 5.59875 75.9994 5.41245C77.784 4.65745 79.4607 5.79486 79.4607 7.45194C79.4607 9.10901 78.4311 9.70713 77.127 9.70713V9.71694Z"
                  fill="white"
                />
                <path
                  d="M78.9513 11.5114H75.2842V24.9543H78.9513V11.5114Z"
                  fill="white"
                />
                <path
                  d="M94.4824 16.6296V24.964H90.8545V17.1199C90.8545 15.5706 89.8544 14.5117 88.3542 14.5117C86.854 14.5117 85.8048 15.5706 85.8048 17.1199V24.964H82.1475V11.5309H85.5008V12.7467C86.501 11.7368 87.8345 11.2269 89.4327 11.2269C92.5606 11.2269 94.4824 13.3743 94.4824 16.6296Z"
                  fill="white"
                />
                <path
                  d="M126.604 19.5124H117.152C117.613 21.2185 118.996 22.1696 120.957 22.1696C122.918 22.1696 123.526 21.7087 124.692 20.8263C124.692 20.8263 124.702 20.8263 124.712 20.8263L126.222 23.3168C124.624 24.6503 122.829 25.3269 120.849 25.3269C118.868 25.3269 116.966 24.6503 115.583 23.3168C114.201 21.9539 113.515 20.2772 113.495 18.2965C113.377 9.21691 126.859 8.89334 126.859 17.5121C126.859 18.1593 126.781 18.8358 126.614 19.5222L126.604 19.5124ZM117.152 16.9336H123.29C123.231 13.6587 117.946 13.0115 117.152 16.9336Z"
                  fill="white"
                />
                <path
                  d="M137.067 21.9244V24.9837C136.194 25.1994 135.361 25.3072 134.547 25.3072C131.154 25.3072 129.174 23.6207 129.174 20.2576V8.14813H132.831V11.5309H136.626V14.6196H132.831V19.9046C132.831 21.4244 133.596 21.9931 135.332 21.9931C137.067 21.9931 136.116 21.9637 137.067 21.8852V21.9244Z"
                  fill="white"
                />
                <path
                  d="M149.813 13.2664L147.97 15.5118C147.97 15.5118 147.97 15.5118 147.96 15.5118C147.068 14.6686 146.068 14.2372 144.95 14.2372C143.832 14.2372 143.509 14.5607 143.509 15.1883C143.509 15.8158 143.862 15.9727 144.921 16.3845L146.225 16.9238C148.833 17.9828 150 19.0417 150 21.0224C150 23.003 149.509 23.4148 148.509 24.1698C147.529 24.9248 146.283 25.3072 144.764 25.3072C142.371 25.3072 140.528 24.4444 139.194 22.6991L141.038 20.4831C141.038 20.4831 141.038 20.4831 141.048 20.4831C142.214 21.6989 143.489 22.297 144.813 22.297C146.136 22.297 146.519 21.9146 146.519 21.1891C146.519 20.4635 146.136 20.4046 145.136 19.9634L143.695 19.3653C141.224 18.3554 140.028 17.2474 140.028 15.2667C140.028 13.2861 142.038 11.2172 144.97 11.2172C147.901 11.2172 148.578 11.8937 149.804 13.2566L149.813 13.2664Z"
                  fill="white"
                />
                <path
                  d="M111.593 19.7379C111.593 17.8357 110.652 16.4531 109.034 15.6393L109.308 15.3059C110.201 14.4627 110.642 13.3743 110.642 12.08C110.642 10.7857 110.103 9.42281 109.044 8.50112C107.985 7.55002 106.632 7.08917 104.975 7.08917H97.7383V25.0033H105.72C107.455 25.0033 108.867 24.513 109.956 23.5325C111.073 22.552 111.613 21.2773 111.613 19.7281L111.593 19.7379ZM101.249 10.2268H104.661C106.151 10.2268 106.994 10.9916 106.994 12.2663C106.994 13.541 106.151 14.3254 104.661 14.3254H101.249V10.2268ZM105.435 21.846H101.249V17.3356H105.435C107.034 17.3356 107.985 18.1985 107.985 19.5908C107.985 20.9831 107.034 21.846 105.435 21.846Z"
                  fill="white"
                />
                <path
                  d="M70.7148 13.2566C69.3323 11.8937 67.6163 11.2172 65.6063 11.2172C63.5962 11.2172 65.6063 11.2172 65.5965 11.2172C65.5867 11.2172 65.5965 11.2172 65.5867 11.2172C63.5766 11.2172 61.8705 11.8937 60.4782 13.2566C59.0956 14.5902 58.3896 16.2472 58.3896 18.2279C58.3896 20.2085 59.0662 21.895 60.4585 23.2481C61.8411 24.5817 63.557 25.2582 65.5671 25.2582C67.5771 25.2582 65.5965 25.2582 65.6063 25.2582C65.6161 25.2582 65.6357 25.2582 65.6455 25.2582C67.6556 25.2582 69.3617 24.5817 70.754 23.2481C72.1365 21.8852 72.8229 20.2085 72.8229 18.2279C72.8229 16.2472 72.1169 14.5902 70.7344 13.2566H70.7148ZM65.6161 21.8852C65.6161 21.8852 65.6161 21.8852 65.6063 21.8852C65.5965 21.8852 65.6063 21.8852 65.5965 21.8852C63.557 21.8852 62.1254 20.3948 62.1254 18.2475C62.1254 16.1002 63.5668 14.5509 65.5965 14.5509C67.6261 14.5509 65.5965 14.5509 65.6063 14.5509C65.6161 14.5509 65.6063 14.5509 65.6161 14.5509C67.6556 14.5509 69.0871 16.1002 69.0871 18.2475C69.0871 20.3948 67.6458 21.8852 65.6161 21.8852Z"
                  fill="white"
                />
                <path
                  d="M30.0039 8.18734C29.6411 6.15767 28.6312 4.34371 27.18 3.0004C25.8857 1.79436 24.2483 0.951107 22.4343 0.627535C20.1203 0.215717 17.7474 0 15.3157 0C12.884 0 10.5112 0.215717 8.19715 0.627535C6.27533 0.970717 4.54961 1.8924 3.22591 3.21611C1.90221 4.53981 0.970714 6.26553 0.627532 8.19715C0.215714 10.5112 0 12.884 0 15.3157C0 17.7474 0.215714 20.1203 0.627532 22.4343C0.970714 24.3561 1.8924 26.072 3.2063 27.3957C4.53 28.7292 6.25572 29.6607 8.18734 30.0039C10.5014 30.4157 12.8742 30.6314 15.3059 30.6314C17.7376 30.6314 20.1105 30.4157 22.4245 30.0039C24.5522 29.6215 26.4348 28.5233 27.8076 26.9643C28.9155 25.7092 29.6902 24.1502 29.9941 22.4343C30.4059 20.1203 30.6216 17.7474 30.6216 15.3157C30.6216 12.884 30.4059 10.5112 29.9941 8.19715L30.0039 8.18734Z"
                  fill="#E6B830"
                />
                <path
                  d="M7.28516 7.97162C7.92249 9.00116 8.80496 9.87383 9.84431 10.4916C10.9327 11.1387 12.178 11.5015 13.4526 11.5309C14.0606 10.4131 14.3645 9.15805 14.3547 7.88337C14.3449 6.66753 14.0311 5.47129 13.4526 4.40253C10.9425 4.47116 8.59905 5.82428 7.28516 7.96181V7.97162Z"
                  fill="white"
                />
                <path
                  d="M21.7578 20.3262C20.5812 19.5418 19.2182 19.1104 17.8161 19.0712C17.1493 20.3066 16.8356 21.7088 16.9336 23.1207C17.0023 24.1895 17.3062 25.2582 17.8161 26.1995C20.3262 26.1309 22.6697 24.7778 23.9836 22.6403C23.4149 21.7186 22.6501 20.9243 21.7578 20.336V20.3262Z"
                  fill="white"
                />
                <path
                  d="M8.2164 18.0612C9.48127 17.4435 10.5402 16.4826 11.2854 15.2863C10.55 14.0803 9.50089 13.1194 8.23601 12.482C7.2751 12.0016 6.20634 11.727 5.12776 11.6976C3.92172 13.9038 3.91192 16.61 5.09835 18.826C6.17692 18.7966 7.24569 18.5417 8.2164 18.071V18.0612Z"
                  fill="white"
                />
                <path
                  d="M17.8064 4.40253C17.2181 5.4909 16.9043 6.72636 16.9043 7.96181C16.9043 9.19727 17.2181 10.4327 17.8064 11.5211C19.4242 11.4721 21.0127 10.8936 22.2776 9.88363C22.9541 9.34435 23.5228 8.6972 23.9739 7.96181C22.66 5.82428 20.3165 4.47116 17.8064 4.40253Z"
                  fill="white"
                />
                <path
                  d="M9.2462 20.5125C8.46178 21.091 7.79503 21.7969 7.28516 22.6304C8.59905 24.7679 10.9425 26.121 13.4526 26.1897C13.8644 25.4249 14.139 24.611 14.2665 23.758C14.5116 22.1499 14.2272 20.4928 13.4526 19.0613C11.9328 19.1005 10.4718 19.6006 9.23639 20.5027L9.2462 20.5125Z"
                  fill="white"
                />
              </svg>
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
            <NewsletterCheckbox />
          </div>

          {/* Follow Us */}
          <div className="flex flex-col gap-4" data-name="footer-social">
            <p className="font-heading font-bold text-base">Follow us</p>
            <div className="flex items-center gap-3" data-name="social-icons">
              <Link
                href="#"
                aria-label="X (Twitter)"
                className="hover:opacity-80 transition-opacity"
              >
                <XIcon />
              </Link>
              <Link
                href="#"
                aria-label="YouTube"
                className="hover:opacity-80 transition-opacity"
              >
                <YouTubeIcon />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="hover:opacity-80 transition-opacity"
              >
                <LinkedInIcon />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#d9d9d9] opacity-20 my-14" />

        {/* Middle Section: Link Columns */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto] gap-12 lg:gap-24"
          data-name="footer-links"
        >
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
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="size-4 shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.02999 12.8339C2.06061 13.2086 2.12632 13.5531 2.29118 13.8767C2.54684 14.3784 2.95479 14.7863 3.45655 15.042C3.78011 15.2069 4.12458 15.2726 4.49931 15.3032C4.86011 15.3327 5.30301 15.3327 5.83965 15.3327H11.2262C11.5777 15.3327 11.8808 15.3327 12.1306 15.3123C12.3941 15.2907 12.6563 15.2432 12.9085 15.1147C13.2848 14.9229 13.5908 14.617 13.7826 14.2407C13.9111 13.9884 13.9586 13.7263 13.9802 13.4627C13.9984 13.2389 14.0006 12.9722 14.0006 12.666C14.0006 9.59075 14.0006 6.51554 14.0006 3.44031C14.0006 3.08888 14.0006 2.78571 13.9802 2.536C13.9586 2.27244 13.9111 2.01029 13.7826 1.75804C13.5908 1.38171 13.2848 1.07575 12.9085 0.884003C12.6563 0.755476 12.3941 0.707929 12.1306 0.686396C11.8808 0.665995 11.5777 0.666005 11.2263 0.666016H5.83967C5.30303 0.666009 4.8601 0.666003 4.49931 0.695483C4.12458 0.726096 3.78011 0.791809 3.45655 0.956669C2.95479 1.21233 2.54684 1.62028 2.29118 2.12204C2.12632 2.4456 2.06061 2.79007 2.02999 3.1648C2.00051 3.5256 2.00052 3.9685 2.00053 4.50514V11.4935C2.00053 11.9409 1.99359 12.3883 2.02999 12.8339ZM12.6512 13.3541C12.6364 13.5352 12.6114 13.6023 12.5946 13.6353C12.5306 13.7608 12.4286 13.8628 12.3032 13.9267C12.2702 13.9435 12.2031 13.9686 12.022 13.9834C11.8331 13.9988 11.5849 13.9993 11.2006 13.9993H5.8672C5.29615 13.9993 4.90795 13.9988 4.60789 13.9743C4.31561 13.9504 4.16615 13.9071 4.06188 13.854C3.81099 13.7262 3.60702 13.5222 3.47919 13.2713C3.35974 13.0369 3.30067 12.8339 3.34506 12.4925C3.43013 11.8381 3.98964 11.3327 4.6672 11.3327H12.6672C12.6672 12.0027 12.7059 12.6857 12.6512 13.3541Z"
                        fill="white"
                      />
                    </svg>
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
                        className="size-4 shrink-0"
                      />
                    ) : (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="size-4 shrink-0"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.02999 12.8339C2.06061 13.2086 2.12632 13.5531 2.29118 13.8767C2.54684 14.3784 2.95479 14.7863 3.45655 15.042C3.78011 15.2069 4.12458 15.2726 4.49931 15.3032C4.86011 15.3327 5.30301 15.3327 5.83965 15.3327H11.2262C11.5777 15.3327 11.8808 15.3327 12.1306 15.3123C12.3941 15.2907 12.6563 15.2432 12.9085 15.1147C13.2848 14.9229 13.5908 14.617 13.7826 14.2407C13.9111 13.9884 13.9586 13.7263 13.9802 13.4627C13.9984 13.2389 14.0006 12.9722 14.0006 12.666C14.0006 9.59075 14.0006 6.51554 14.0006 3.44031C14.0006 3.08888 14.0006 2.78571 13.9802 2.536C13.9586 2.27244 13.9111 2.01029 13.7826 1.75804C13.5908 1.38171 13.2848 1.07575 12.9085 0.884003C12.6563 0.755476 12.3941 0.707929 12.1306 0.686396C11.8808 0.665995 11.5777 0.666005 11.2263 0.666016H5.83967C5.30303 0.666009 4.8601 0.666003 4.49931 0.695483C4.12458 0.726096 3.78011 0.791809 3.45655 0.956669C2.95479 1.21233 2.54684 1.62028 2.29118 2.12204C2.12632 2.4456 2.06061 2.79007 2.02999 3.1648C2.00051 3.5256 2.00052 3.9685 2.00053 4.50514V11.4935C2.00053 11.9409 1.99359 12.3883 2.02999 12.8339ZM12.6512 13.3541C12.6364 13.5352 12.6114 13.6023 12.5946 13.6353C12.5306 13.7608 12.4286 13.8628 12.3032 13.9267C12.2702 13.9435 12.2031 13.9686 12.022 13.9834C11.8331 13.9988 11.5849 13.9993 11.2006 13.9993H5.8672C5.29615 13.9993 4.90795 13.9988 4.60789 13.9743C4.31561 13.9504 4.16615 13.9071 4.06188 13.854C3.81099 13.7262 3.60702 13.5222 3.47919 13.2713C3.35974 13.0369 3.30067 12.8339 3.34506 12.4925C3.43013 11.8381 3.98964 11.3327 4.6672 11.3327H12.6672C12.6672 12.0027 12.7059 12.6857 12.6512 13.3541Z"
                          fill="white"
                        />
                      </svg>
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
        <div
          className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-24"
          data-name="footer-bottom"
        >
          <p className="text-xs leading-relaxed text-[#f8f8f8] opacity-70 max-w-[975px]">
            CoinBets is an independent source of information about online
            casinos and online casino games, not controlled by any gambling
            operator. All our reviews and guides are created honestly, according
            to the best knowledge and judgment of the members of our independent
            expert team; however, they are intended for informative purposes
            only and should not be construed as, nor relied upon as, legal
            advice. You should always make sure that you meet all regulatory
            requirements before playing in any selected casino. Copyright
            &copy;2024
          </p>

          <div className="shrink-0" data-name="footer-language">
            <p className="font-heading font-bold text-base mb-4">
              CoinBets in other languages
            </p>
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

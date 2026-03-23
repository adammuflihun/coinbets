"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Eye } from "lucide-react";
import type Flickity from "flickity";

const blogPosts = [
  {
    image: "/blog-images/prediction-markets.webp",
    badge: "Guide",
    title: "Easy Guide to Blockchain Prediction Markets 2026",
    date: "January 07, 2026",
    views: 64,
  },
  {
    image: "/blog-images/understanding-rtp.webp",
    badge: "Guide",
    title: "Understanding RTP and House Edge in Crypto Casinos",
    date: "January 12, 2026",
    views: 112,
  },
  {
    image: "/blog-images/crypto-esports-betting.webp",
    badge: "Article",
    title: "Crypto Esports Betting: CS:GO, LoL & PUBG Mobile",
    date: "February 03, 2026",
    views: 89,
  },
  {
    image: "/blog-images/how-to-write-casino-review.webp",
    badge: "Guide",
    title: "How to Write a Helpful Casino Review as a Player",
    date: "February 18, 2026",
    views: 47,
  },
];

const features = [
  {
    title: "Guides That Actually Help",
    description: "Clear, no-fluff advice for crypto gamblers at every level.",
  },
  {
    title: "Expert Reviews That Go Deep",
    description: "Written by real players and pros who know the game.",
  },
  {
    title: "Articles That Unpack the Industry",
    description: "We go deeper. Casinos wish we wouldn't.",
  },
];

function BlogCard({
  image,
  badge,
  title,
  date,
  views,
}: (typeof blogPosts)[number]) {
  return (
    <Link
      href="#"
      className="group flex flex-col gap-3.5 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
    >
      <div
        className="h-[201px] w-full rounded-xl bg-[#1f1c1e] overflow-hidden"
        data-name="blog-thumbnail"
      >
        {image && (
          <Image
            src={image}
            alt={title}
            width={280}
            height={201}
            className="size-full object-cover"
          />
        )}
      </div>

      <span className="self-start rounded-lg bg-neutral-100 px-2 py-1 text-sm font-semibold text-neutral-800">
        {badge}
      </span>

      <p className="text-base font-semibold leading-[1.4] text-[#060D17]">
        {title}
      </p>

      <div className="flex items-center justify-between" data-name="blog-meta">
        <div
          className="flex items-center gap-1.5 text-sm font-medium text-[#060D17]"
          data-name="blog-date"
        >
          <Calendar className="size-[18px] text-neutral-500" />
          {date}
        </div>
        <div
          className="flex items-center gap-1.5 text-sm font-medium text-[#060D17]"
          data-name="blog-views"
        >
          <Eye className="size-[18px] text-neutral-500" />
          {views} Views
        </div>
      </div>
    </Link>
  );
}

function MobileCarousel() {
  const flickityRef = useRef<HTMLDivElement>(null);
  const flktyInstance = useRef<Flickity | null>(null);

  useEffect(() => {
    if (!flickityRef.current) return;

    let destroyed = false;

    import("flickity").then((mod) => {
      if (destroyed || !flickityRef.current) return;
      const Flkty = mod.default;
      flktyInstance.current = new Flkty(flickityRef.current, {
        cellAlign: "left",
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        freeScroll: true,
        wrapAround: true,
      });
    });

    return () => {
      destroyed = true;
      if (flktyInstance.current) {
        flktyInstance.current.destroy();
        flktyInstance.current = null;
      }
    };
  }, []);

  return (
    <div ref={flickityRef} data-name="blog-carousel">
      {blogPosts.map((post, i) => (
        <div key={i} className="w-[calc(100vw-3rem)] mr-3">
          <BlogCard {...post} />
        </div>
      ))}
    </div>
  );
}

export function LatestBlog() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section data-section="latest-blog" className="site-container py-8">
      {/* Dark banner */}
      <div
        className="flex flex-col lg:flex-row rounded-lg border border-neutral-200 bg-[#020202] p-5 sm:p-8 lg:p-12 pb-40 sm:pb-44 lg:pb-52 shadow-sm"
        data-name="blog-banner"
      >
        {/* Left content */}
        <div
          className="flex flex-col gap-4 sm:gap-6 flex-1"
          data-name="blog-banner-text"
        >
          <p className="text-base font-bold text-[#f8f8f8]">
            Top Expert and User Rated
          </p>
          <h2 className="text-2xl sm:text-[30px] lg:text-[35px] font-black leading-[1.2] tracking-tight text-white">
            Expert Reviews &<br className="hidden sm:block" />
            {" "}Comprehensive Guides
          </h2>
          <Link
            href="/blog"
            className="group flex w-full sm:w-fit items-center justify-center sm:justify-start gap-1.5 rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-[#020202] hover:bg-neutral-100 transition-colors"
          >
            Read all articles
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Divider */}
        <div className="hidden lg:block mx-15 w-px self-stretch bg-white/20" />

        {/* Right features */}
        <div
          className="hidden lg:flex flex-col gap-6 flex-1 max-w-[364px]"
          data-name="blog-features"
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex gap-2.5 items-start"
              data-name="feature-item"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="size-6 shrink-0 mt-0.5"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM17.2071 9.70711C17.5976 9.31658 17.5976 8.68342 17.2071 8.29289C16.8166 7.90237 16.1834 7.90237 15.7929 8.29289L10.5 13.5858L8.20711 11.2929C7.81658 10.9024 7.18342 10.9024 6.79289 11.2929C6.40237 11.6834 6.40237 12.3166 6.79289 12.7071L9.79289 15.7071C10.1834 16.0976 10.8166 16.0976 11.2071 15.7071L17.2071 9.70711Z"
                  fill="white"
                />
              </svg>
              <div className="flex flex-col gap-3.5" data-name="feature-text">
                <p className="text-base font-bold leading-snug text-[#f8f8f8]">
                  {feature.title}
                </p>
                <p className="text-base leading-normal text-[#f8f8f8]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog cards */}
      {isMobile ? (
        <div className="-mt-20 -mx-5 relative z-10">
          <MobileCarousel />
        </div>
      ) : (
        <div
          className="-mt-24 relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 px-0 sm:px-4 lg:px-8"
          data-name="blog-grid"
        >
          {blogPosts.map((post, i) => (
            <BlogCard key={i} {...post} />
          ))}
        </div>
      )}
    </section>
  );
}

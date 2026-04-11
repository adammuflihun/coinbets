"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { blogPosts } from "@/data/blog-posts";

function BlogSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const speedRef = useRef(0);

  const posts = blogPosts.slice(0, 4);
  const loopedPosts = [...posts, ...posts, ...posts];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const oneSetWidth = el.scrollWidth / 3;
    el.scrollLeft = oneSetWidth;

    const tick = () => {
      if (speedRef.current !== 0 && el) {
        el.scrollLeft += speedRef.current;

        const oneSet = el.scrollWidth / 3;
        if (el.scrollLeft >= oneSet * 2) {
          el.scrollLeft -= oneSet;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += oneSet;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const ratio = x / rect.width;

      if (ratio < 0.15) {
        speedRef.current = -(0.15 - ratio) * 50;
      } else if (ratio > 0.85) {
        speedRef.current = (ratio - 0.85) * 50;
      } else {
        speedRef.current = 0;
      }
    };

    const onMouseEnter = () => {
      rafRef.current = requestAnimationFrame(tick);
    };

    const onMouseLeave = () => {
      speedRef.current = 0;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseenter", onMouseEnter);
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseenter", onMouseEnter);
      el.removeEventListener("mouseleave", onMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      data-name="blog-slider"
      className="flex gap-4 overflow-x-auto items-stretch"
      style={{ scrollbarWidth: "none" }}
    >
      {loopedPosts.map((post, i) => (
        <div
          key={i}
          data-name="slider-cell"
          className="w-[75vw] sm:w-[280px] lg:w-[300px] shrink-0"
        >
          <BlogCard {...post} />
        </div>
      ))}
    </div>
  );
}

export function LatestBlog() {
  return (
    <section data-section="latest-blog" className="py-8 overflow-hidden">
      <div
        className="flex flex-col lg:flex-row items-start gap-8 lg:gap-0"
        data-name="blog-banner"
      >
        {/* Left content — aligned to site-container */}
        <div
          className="flex flex-col gap-4 sm:gap-6 shrink-0 lg:min-w-[56ch] lg:max-w-[380px] pl-5 sm:pl-10 lg:pl-[max(1.5rem,calc((100vw-1600px)/2+6.5rem))] pr-5 sm:pr-10 lg:pr-0"
          data-name="blog-banner-text"
        >
          <p className="text-base font-bold text-[#060D17]">
            Top Expert and User Rated
          </p>
          <h2 className="text-2xl sm:text-[30px] lg:text-[35px] font-black leading-[1.2] tracking-tight text-[#060D17]">
            Expert Reviews &<br className="hidden sm:block" /> Comprehensive
            Guides
          </h2>
          <Link
            href="/guides"
            className="group flex w-full sm:w-fit items-center justify-center sm:justify-start gap-1.5 rounded-lg bg-neutral-900 px-3 py-1.5 text-sm font-medium text-[#f8f8f8] hover:bg-neutral-800 transition-colors"
          >
            Read all articles
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Right: blog slider — bleeds to right viewport edge */}
        <div className="relative w-full lg:flex-1 min-w-0" data-name="blog-grid">
          <div data-name="blog-grid-overlay" className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[20%] hidden lg:block bg-linear-to-r from-[#f5f5f5] to-transparent" />
          <BlogSlider />
        </div>
      </div>
    </section>
  );
}

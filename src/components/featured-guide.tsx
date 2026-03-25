"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { guides } from "@/data/guides";

export function FeaturedGuide() {
  const [index, setIndex] = useState(0);
  const guide = guides[index];

  const prev = () => setIndex((i) => (i === 0 ? guides.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === guides.length - 1 ? 0 : i + 1));

  return (
    <div data-name="featured-guide" className="flex flex-col gap-5">
      <Link
        href={`/guides/${guide.slug}`}
        className="group flex flex-col lg:flex-row gap-6 rounded-2xl border border-neutral-200 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow"
      >
        {/* Image */}
        <div
          className="w-full lg:w-[58%] shrink-0 h-[220px] sm:h-[280px] lg:h-[340px] rounded-xl bg-[#1f1c1e] overflow-hidden"
          data-name="featured-thumbnail"
        >
          {guide.image && (
            <Image
              src={guide.image}
              alt={guide.title}
              width={680}
              height={340}
              className="size-full object-cover"
            />
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center gap-4 flex-1 py-1 lg:py-4">
          <span className="self-start rounded-lg bg-neutral-100 px-2.5 py-1 text-sm font-semibold text-neutral-800">
            {guide.badge}
          </span>

          <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold leading-[1.3] tracking-tight text-[#060D17]">
            {guide.title}
          </h2>

          <p className="text-base leading-relaxed text-[#060D17]/70 line-clamp-3">
            {guide.description}
          </p>

          <div
            className="flex items-center gap-5 mt-auto"
            data-name="featured-meta"
          >
            <div className="flex items-center gap-1.5 text-sm font-medium text-[#060D17]">
              <Calendar className="size-[18px] text-neutral-500" />
              {guide.date}
            </div>
            <div className="flex items-center gap-1.5 text-sm font-medium text-[#060D17]">
              <Eye className="size-[18px] text-neutral-500" />
              {guide.views} Views
            </div>
          </div>
        </div>
      </Link>

      {/* Navigation arrows */}
      <div className="flex items-center gap-2" data-name="featured-nav">
        <button
          onClick={prev}
          className="flex items-center justify-center size-10 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 transition-colors cursor-pointer"
          aria-label="Previous guide"
        >
          <ChevronLeft className="size-5 text-neutral-700" />
        </button>
        <button
          onClick={next}
          className="flex items-center justify-center size-10 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 transition-colors cursor-pointer"
          aria-label="Next guide"
        >
          <ChevronRight className="size-5 text-neutral-700" />
        </button>
      </div>
    </div>
  );
}

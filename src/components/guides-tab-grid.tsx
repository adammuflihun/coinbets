"use client";

import { useState } from "react";
import { BlogCard } from "@/components/blog-card";
import type { Guide } from "@/data/guides";

const TABS = [
  {
    id: "all",
    label: "All Guides",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="white">
        <path d="M120-640h720v-160H120v160Zm0 240h720v-160H120v160Zm0 240h720v-160H120v160Zm40-520v-80h80v80h-80Zm0 240v-80h80v80h-80Zm0 240v-80h80v80h-80Z" />
      </svg>
    ),
  },
  {
    id: "guides",
    label: "Beginner Guides",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="white">
        <path d="M560-564v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-604q-38 0-73 9.5T560-564Zm0 220v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-384q-38 0-73 9t-67 31Zm0-110v-68q33-14 67.5-21t72.5-7q26 0 51 4t49 10v64q-24-9-48.5-13.5T700-494q-38 0-73 9.5T560-454ZM260-320q47 0 91.5 10.5T440-278v-394q-41-24-87-36t-93-12q-36 0-71.5 7T120-692v396q35-12 69.5-18t70.5-6Zm260 42q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-396q-33-14-68.5-21t-71.5-7q-47 0-93 12t-87 36v394ZM480-160q-48-38-104-59t-116-21q-42 0-82.5 11T96-204q-18 8-37-1t-19-31v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740q51-30 106.5-45T700-800q52 0 102 12t96 36q11 5 16.5 15t5.5 21v482q0 22-19 31t-37 1q-41-14-81.5-25T700-240q-60 0-116 21t-104 59Z" />
      </svg>
    ),
  },
  {
    id: "popular",
    label: "Most Helpful",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="white">
        <path d="M480-120q-126 0-223-76.5T131-392q-4-15 6-27.5t27-14.5q16-2 29 6t17 24q24 90 97 146.5T480-201q117 0 198.5-81.5T760-481q0-100-64.5-175.5T528-761v81q0 17-11.5 28.5T488-640q-17 0-28.5-11.5T448-680v-160q0-17 11.5-28.5T488-880h160q17 0 28.5 11.5T688-840q0 17-11.5 28.5T648-800h-55q108 43 182.5 140T850-481q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Z" />
      </svg>
    ),
  },
];

export function GuidesTabGrid({ guides }: { guides: Guide[] }) {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = (() => {
    switch (activeTab) {
      case "guides":
        return guides.filter((g) => g.badge === "Guide");
      case "popular":
        return [...guides].sort((a, b) => b.views - a.views);
      default:
        return guides;
    }
  })();

  return (
    <>
      <div
        data-name="guides-tab-bar"
        className="w-full border-b border-neutral-200 bg-white"
      >
        <nav
          data-name="guides-tabs"
          className="site-container flex justify-start sm:justify-center gap-2 sm:gap-8 overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                data-name={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 py-4 border-b-[3px] shrink-0 cursor-pointer transition-colors ${
                  isActive
                    ? "border-[#020202] text-[#020202]"
                    : "border-transparent text-neutral-400 hover:text-neutral-600"
                }`}
              >
                <span
                  data-name={`tab-icon-${tab.id}`}
                  className={`flex items-center justify-center size-8 sm:size-10 rounded-full ${
                    isActive ? "bg-[#020202]" : "bg-neutral-300"
                  }`}
                >
                  {tab.icon}
                </span>
                <span className="text-sm sm:text-base font-semibold">{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <section
        data-name="guides-grid-section"
        className="site-container py-10 sm:py-14 lg:py-16"
      >
        <div
          data-name="guides-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {filtered.map((guide) => (
            <BlogCard
              key={guide.slug}
              image={guide.image}
              badge={guide.badge}
              title={guide.title}
              date={guide.date}
              views={guide.views}
              slug={guide.slug}
              href={`/guides/${guide.slug}`}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p data-name="guides-empty" className="text-center text-neutral-500 py-12">
            No articles found in this category.
          </p>
        )}
      </section>
    </>
  );
}

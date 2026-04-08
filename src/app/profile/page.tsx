"use client";

import Image from "next/image";
import { useState } from "react";
import { Camera } from "lucide-react";
import "flag-icons/css/flag-icons.min.css";

const tabs = [
  {
    label: "My Profile",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "My Complaints",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Rankings",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
  },
  {
    label: "My Reviews",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 3C17.2626 2.73735 17.5744 2.52901 17.9176 2.38687C18.2608 2.24473 18.6286 2.17157 19 2.17157C19.3714 2.17157 19.7392 2.24473 20.0824 2.38687C20.4256 2.52901 20.7374 2.73735 21 3C21.2626 3.26264 21.471 3.57444 21.6131 3.9176C21.7553 4.26077 21.8284 4.62856 21.8284 5C21.8284 5.37143 21.7553 5.73923 21.6131 6.08239C21.471 6.42555 21.2626 6.73735 21 7L7.5 20.5L2 22L3.5 16.5L17 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Email Setting",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2V8H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 13H8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 17H8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 9H8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const stats = [
  { label: "Threads started", value: 0 },
  { label: "Forum Posts", value: 0 },
  { label: "Threads started", value: 0 },
  { label: "User Reviews", value: 0 },
  { label: "Approved complaints", value: 0 },
  { label: "Tournaments joined", value: 0 },
];

function RankBadgeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2L17.09 5.09L21.5 4.5L22 8.91L26 11L24.18 14L26 17L22 19.09L21.5 23.5L17.09 22.91L14 26L10.91 22.91L6.5 23.5L6 19.09L2 17L3.82 14L2 11L6 8.91L6.5 4.5L10.91 5.09L14 2Z" fill="#1B4D7A" stroke="#1B4D7A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 14L12 17L19 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("My Profile");

  return (
    <main data-section="profile" className="flex-1">
      {/* Hero section with dark background */}
      <section
        data-section="profile-hero"
        className="relative bg-[#020202] overflow-hidden"
      >
        {/* Blurred SVG background */}
        <div data-name="profile-hero-bg" className="absolute inset-0">
          <Image
            src="/hero/bg-recommend.svg"
            alt=""
            fill
            className="object-cover object-top opacity-80"
            priority
          />
        </div>

        {/* Tabs */}
        <div
          data-name="profile-tabs"
          className="relative z-10 site-container py-6 sm:py-8"
        >
          <div
            data-name="profile-tab-row"
            className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.label;
              return (
                <button
                  key={tab.label}
                  data-name={`profile-tab-${tab.label.toLowerCase().replace(/\s/g, "-")}`}
                  onClick={() => setActiveTab(tab.label)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-lg text-sm font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                    isActive
                      ? "bg-white text-neutral-900 border-2 border-[#E6B830] shadow-md"
                      : "bg-white text-neutral-700 border-2 border-transparent hover:border-neutral-200"
                  }`}
                >
                  <span className={`${isActive ? "text-neutral-900" : "text-neutral-500"}`}>
                    {tab.icon}
                  </span>
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Profile content */}
      <section
        data-section="profile-content"
        className="bg-[#f5f5f5] min-h-[60vh]"
      >
        <div
          data-name="profile-content-container"
          className="site-container py-8"
        >
          <div
            data-name="profile-layout"
            className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6"
          >
            {/* Left: Profile Card */}
            <div
              data-name="profile-card"
              className="bg-white rounded-xl p-6 sm:p-8 flex flex-col items-center h-fit"
            >
              {/* Avatar */}
              <div data-name="profile-avatar-wrapper" className="relative mb-4">
                <div
                  data-name="profile-avatar-ring"
                  className="w-[160px] h-[160px] rounded-full border-[3px] border-[#CDD6DD] flex items-center justify-center overflow-hidden bg-[#1C1C1C]"
                >
                  <Image
                    src="/icons/default-avatar.svg"
                    alt="Profile avatar"
                    width={140}
                    height={140}
                    className="w-[140px] h-[140px]"
                  />
                </div>

                {/* Rank badge */}
                <div
                  data-name="profile-rank-badge"
                  className="absolute bottom-2 left-6"
                >
                  <RankBadgeIcon />
                </div>

                {/* Camera button */}
                <button
                  data-name="profile-camera-btn"
                  className="absolute bottom-2 right-4 w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center shadow-sm hover:bg-neutral-50 transition-colors cursor-pointer"
                >
                  <Camera className="size-4 text-neutral-600" />
                </button>
              </div>

              {/* Rank title */}
              <p
                data-name="profile-rank-title"
                className="text-xs font-bold uppercase tracking-wider text-[#00A67E] mb-1"
              >
                Rookie Bettor
              </p>

              {/* Name */}
              <h1
                data-name="profile-name"
                className="text-xl font-bold text-neutral-900 mb-0.5"
              >
                Adam Bagusm
              </h1>

              {/* Status */}
              <p
                data-name="profile-status"
                className="text-xs font-medium text-neutral-400 uppercase tracking-wide mb-6"
              >
                Online
              </p>

              {/* Separator */}
              <div
                data-name="profile-separator"
                className="w-full border-t border-neutral-100 mb-5"
              />

              {/* Details */}
              <div
                data-name="profile-details"
                className="w-full flex flex-col gap-3"
              >
                <div data-name="profile-detail-points" className="flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-400 uppercase tracking-wide">
                    Points:
                  </span>
                  <span className="text-sm font-bold text-neutral-900">0pt</span>
                </div>
                <div data-name="profile-detail-gender" className="flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-400 uppercase tracking-wide">
                    Gender:
                  </span>
                  <span className="text-sm font-bold text-neutral-900"></span>
                </div>
                <div data-name="profile-detail-joined" className="flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-400 uppercase tracking-wide">
                    Joined:
                  </span>
                  <span className="text-sm font-bold text-neutral-900">
                    2026-03-23
                  </span>
                </div>
                <div data-name="profile-detail-country" className="flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-400 uppercase tracking-wide">
                    Country:
                  </span>
                  <span className="flex items-center gap-2 text-sm font-bold text-neutral-900">
                    <span className="fi fi-id fis w-5 h-3.5 rounded-sm" />
                    Indonesia
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Stats Grid */}
            <div
              data-name="profile-stats-grid"
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  data-name={`profile-stat-${stat.label.toLowerCase().replace(/\s/g, "-")}`}
                  className="bg-white rounded-xl p-6 flex flex-col"
                >
                  <h3
                    data-name="stat-label"
                    className="text-base font-bold text-neutral-900 mb-3"
                  >
                    {stat.label}
                  </h3>
                  <p
                    data-name="stat-value"
                    className="text-3xl font-bold text-neutral-900"
                  >
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

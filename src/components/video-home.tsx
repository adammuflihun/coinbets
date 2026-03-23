import Link from "next/link";
import { ChevronRight } from "lucide-react";

const videos = [
  {
    title: "The Slot RTP Switch Is Costing Players Millions",
    author: "CoinBets Team",
    timeAgo: "1 day ago",
  },
  {
    title: "The Dark Side of Online Casinos",
    author: "CoinBets Team",
    timeAgo: "1 day ago",
  },
  {
    title: "BC.Game Review, Is it a scam?",
    author: "CoinBets Team",
    timeAgo: "1 day ago",
  },
  {
    title: "BC.Game Review, Is it a scam?",
    author: "CoinBets Team",
    timeAgo: "1 day ago",
  },
];

function PlayButton() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
      <circle cx="21" cy="21" r="21" fill="#E6B830" />
      <path
        d="M28 21L17 27.9282L17 14.0718L28 21Z"
        fill="white"
      />
    </svg>
  );
}

function VideoCard({ title, author, timeAgo }: (typeof videos)[number]) {
  return (
    <div data-name="video-card" className="flex flex-col gap-3.5 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
      {/* Video thumbnail */}
      <div data-name="video-thumbnail" className="flex h-[181px] items-center justify-center rounded-xl bg-[#1f1c1e]">
        <PlayButton />
      </div>

      {/* Title */}
      <p className="text-base font-semibold leading-[1.4] text-[#060D17]">
        {title}
      </p>

      {/* User info */}
      <div data-name="video-user-info" className="flex items-center gap-2 text-sm">
        <div data-name="video-username" className="flex items-center gap-1">
          <div className="size-[17px] rounded-full bg-red-400 shrink-0" />
          <span className="text-neutral-600 text-sm">{author}</span>
        </div>
        <span className="size-[3px] rounded-full bg-neutral-400 shrink-0" />
        <span className="text-xs text-[#1c1c1c]/50">{timeAgo}</span>
      </div>
    </div>
  );
}

export function VideoHome() {
  return (
    <section data-section="video-home" className="site-container py-8">
      {/* Header */}
      <div data-name="video-header" className="flex items-end justify-between mb-6">
        <div data-name="video-header-text" className="flex flex-col gap-3">
          <p className="text-base font-bold text-[#060D17]">
            CoinBets Exclusive Videos
          </p>
          <h2 className="text-[35px] font-black leading-[1.2] tracking-tight text-[#060D17]">
            Real Wins, Raw Reviews and
            <br />
            Smarter Play Starts Here
          </h2>
        </div>
        <Link
          href="/videos"
          className="group flex items-center gap-1.5 rounded-lg bg-neutral-900 px-3 py-1.5 text-sm font-medium text-[#f8f8f8] hover:bg-neutral-800 transition-colors"
        >
          Watch all Videos
          <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      {/* Video cards */}
      <div data-name="video-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {videos.map((video, i) => (
          <VideoCard key={i} {...video} />
        ))}
      </div>
    </section>
  );
}

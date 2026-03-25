"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
import type Flickity from "flickity";

const videos = [
  {
    title: "The Truth Behind Luck.io",
    author: "CoinBets Team",
    timeAgo: "1 day ago",
    youtubeId: "P0-ObzHrKPw",
  },
  {
    title: "The Slot RTP Switch Is Costing Players Millions",
    author: "CoinBets Team",
    timeAgo: "1 day ago",
    youtubeId: "gDZXMS-x-rI",
  },
  {
    title: "The Dark Side of Online Casinos [Vol. 2]",
    author: "CoinBets Team",
    timeAgo: "1 day ago",
    youtubeId: "UHr5MIrQaKI",
  },
  {
    title: "Why Casino Founders Suddenly Want To Be Famous…",
    author: "CoinBets Team",
    timeAgo: "1 day ago",
    youtubeId: "tjxDVcHv1Fw",
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

function VideoModal({
  youtubeId,
  onClose,
}: {
  youtubeId: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      data-name="video-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-6"
      onClick={onClose}
    >
      <button
        data-name="video-modal-close"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 flex items-center justify-center size-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
      >
        <X className="size-6 text-white" />
      </button>
      <div
        data-name="video-modal-content"
        className="relative w-full max-w-[1200px] aspect-video rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
}

function VideoCard({
  title,
  author,
  timeAgo,
  youtubeId,
  onPlay,
}: (typeof videos)[number] & { onPlay: (youtubeId: string) => void }) {
  return (
    <div data-name="video-card" className="flex flex-col gap-3.5 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm h-full">
      {/* Video thumbnail */}
      <button
        data-name="video-thumbnail"
        onClick={() => onPlay(youtubeId)}
        className="relative flex h-[181px] items-center justify-center rounded-xl bg-[#1f1c1e] overflow-hidden cursor-pointer group"
      >
        <Image
          src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
          alt={title}
          fill
          className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        />
        <div className="relative z-10 group-hover:scale-110 transition-transform">
          <PlayButton />
        </div>
      </button>

      {/* Title */}
      <p className="text-base font-semibold leading-[1.4] text-[#060D17] flex-1">
        {title}
      </p>

      {/* User info */}
      <div data-name="video-user-info" className="flex items-center gap-2 text-sm mt-auto">
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

function MobileCarousel({ onPlay }: { onPlay: (youtubeId: string) => void }) {
  const flickityRef = useRef<HTMLDivElement>(null);
  const flktyInstance = useRef<Flickity | null>(null);

  useEffect(() => {
    if (!flickityRef.current) return;

    let destroyed = false;

    import("flickity").then((mod) => {
      if (destroyed || !flickityRef.current) return;
      const Flkty = mod.default;
      flktyInstance.current = new Flkty(flickityRef.current, {
        cellAlign: "center",
        contain: false,
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
    <div ref={flickityRef} data-name="video-carousel">
      {videos.map((video, i) => (
        <div key={i} data-name="carousel-cell" className="w-[calc(100vw-2.5rem)] mr-3">
          <VideoCard {...video} onPlay={onPlay} />
        </div>
      ))}
    </div>
  );
}

export function VideoHome() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handlePlay = useCallback((youtubeId: string) => {
    setActiveVideo(youtubeId);
  }, []);

  const handleClose = useCallback(() => {
    setActiveVideo(null);
  }, []);

  return (
    <section data-section="video-home" className="site-container py-8">
      {/* Header */}
      <div data-name="video-header" className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div data-name="video-header-text" className="flex flex-col gap-3">
          <p className="text-base font-bold text-[#060D17]">
            CoinBets Exclusive Videos
          </p>
          <h2 className="text-2xl sm:text-[30px] lg:text-[35px] font-black leading-[1.2] tracking-tight text-[#060D17]">
            Real Wins, Raw Reviews and
            <br className="hidden sm:block" />
            {" "}Smarter Play Starts Here
          </h2>
        </div>
        <Link
          href="/videos"
          className="group flex items-center justify-center gap-1.5 rounded-lg bg-neutral-900 px-3 py-1.5 text-sm font-medium text-[#f8f8f8] hover:bg-neutral-800 transition-colors shrink-0 w-full sm:w-fit"
        >
          Watch all Videos
          <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      {/* Mobile: Flickity carousel */}
      {isMobile && (
        <div data-name="carousel-breakout" className="-mx-5">
          <MobileCarousel onPlay={handlePlay} />
        </div>
      )}

      {/* Desktop: Grid */}
      {!isMobile && (
        <div data-name="video-grid" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {videos.map((video, i) => (
            <VideoCard key={i} {...video} onPlay={handlePlay} />
          ))}
        </div>
      )}

      {/* Video Modal */}
      {activeVideo && (
        <VideoModal youtubeId={activeVideo} onClose={handleClose} />
      )}
    </section>
  );
}

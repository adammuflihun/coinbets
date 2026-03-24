"use client";

import Link from "next/link";
import { ChevronRight, Users } from "lucide-react";
import { useEffect, useRef } from "react";

function UnicornBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const u = window.UnicornStudio;
    if (u && u.init) {
      u.init();
    } else {
      window.UnicornStudio = { isInitialized: false, init: () => {} };
      const existing = document.querySelector(
        'script[src*="unicornStudio"]',
      ) as HTMLScriptElement | null;
      if (!existing) {
        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.5/dist/unicornStudio.umd.js";
        script.onload = () => {
          window.UnicornStudio?.init();
        };
        (document.head || document.body).appendChild(script);
      } else {
        setTimeout(() => window.UnicornStudio?.init(), 100);
      }
    }
  }, []);

  return (
    <div
      ref={ref}
      className="absolute min-h-[800px]  scale-[1.1] inset-0 z-0 overflow-hidden"
    >
      <div
        data-us-project="diGFz9XwEi5VtQZ6nhL3"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export function CoinbetIndexHeader() {
  return (
    <section
      data-section="coinbet-index-header"
      className="relative bg-black overflow-hidden"
    >
      <UnicornBackground />

      <div className="relative z-10 flex flex-col items-center gap-10 px-5 py-16 sm:py-20 lg:py-24 pointer-events-none">
        {/* Heading + subtitle */}
        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center gap-2.5">
            <h1 className="text-3xl sm:text-[40px] lg:text-[45px] font-black text-white text-center leading-none tracking-tight">
              CoinBets Casino Index
            </h1>
            <span className="shrink-0 rounded-lg bg-[#e6b830] px-2 py-0.5 text-xs font-semibold text-[#101010]">
              Beta
            </span>
          </div>
          <p className="max-w-[545px] text-base text-white text-center leading-[26px]">
            A data-driven index based on real player reviews and verified
            signals. No casino influence.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-5 pointer-events-auto">
          <Link
            href="/reviews"
            className="flex items-center justify-center gap-2 rounded-lg bg-[#e6b830] px-6 py-2.5 min-h-[40px] text-sm font-bold text-[#101010] hover:bg-[#d4a82a] transition-colors"
          >
            <Users className="size-4" />
            View User Reviews
          </Link>
          <Link
            href="#how-it-works"
            className="flex items-center justify-center gap-2 rounded-lg bg-[#f5f5f5] px-6 py-2.5 min-h-[40px] text-sm font-bold text-[#171717] hover:bg-[#e8e8e8] transition-colors"
          >
            How the Index Works
            <ChevronRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

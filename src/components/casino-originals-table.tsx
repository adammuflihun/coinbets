"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ChevronDown, ChevronRight, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type ProvablyFairStatus = "Full" | "Partial" | "None";
type ProviderType = "In-house" | "3rd party";

type CasinoEntry = {
  rank: number;
  name: string;
  logo: string;
  rtp: string;
  provablyFair: ProvablyFairStatus;
  provider: ProviderType;
  maxWin: string;
};

type Game = {
  name: string;
  icon: string;
  rtp: string;
  provablyFair: { full: number; partial: number; none: number };
  providerStats: { inHouse: number; thirdParty: number };
  casinos: CasinoEntry[];
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const games: Game[] = [
  {
    name: "Limbo",
    icon: "/original-assets/Limbo.svg",
    rtp: "76%",
    provablyFair: { full: 22, partial: 5, none: 17 },
    providerStats: { inHouse: 25, thirdParty: 12 },
    casinos: [
      {
        rank: 1,
        name: "Stake",
        logo: "/casino-index/logo-stake.svg",
        rtp: "88%",
        provablyFair: "Full",
        provider: "In-house",
        maxWin: "10,000x",
      },
      {
        rank: 2,
        name: "Roobet",
        logo: "/casino-index/logo-roobet.svg",
        rtp: "85%",
        provablyFair: "Full",
        provider: "In-house",
        maxWin: "10,000x",
      },
      {
        rank: 3,
        name: "Shuffle",
        logo: "/casino-index/logo-shuffle.svg",
        rtp: "76%",
        provablyFair: "Partial",
        provider: "3rd party",
        maxWin: "5,000x",
      },
      {
        rank: 4,
        name: "Bitsler",
        logo: "/casino-index/logo-bitsler.svg",
        rtp: "72%",
        provablyFair: "Full",
        provider: "In-house",
        maxWin: "8,000x",
      },
      {
        rank: 5,
        name: "Thrill",
        logo: "/casino-index/logo-thrill.svg",
        rtp: "68%",
        provablyFair: "None",
        provider: "3rd party",
        maxWin: "5,000x",
      },
    ],
  },
  {
    name: "Mines",
    icon: "/original-assets/Mines.svg",
    rtp: "88%",
    provablyFair: { full: 9, partial: 13, none: 6 },
    providerStats: { inHouse: 28, thirdParty: 20 },
    casinos: [
      {
        rank: 1,
        name: "Roobet",
        logo: "/casino-index/logo-roobet.svg",
        rtp: "92%",
        provablyFair: "Full",
        provider: "In-house",
        maxWin: "10,000x",
      },
      {
        rank: 2,
        name: "Stake",
        logo: "/casino-index/logo-stake.svg",
        rtp: "88%",
        provablyFair: "Full",
        provider: "In-house",
        maxWin: "10,000x",
      },
      {
        rank: 3,
        name: "Gamedom",
        logo: "/casino-index/logo-gamedom.svg",
        rtp: "85%",
        provablyFair: "Partial",
        provider: "In-house",
        maxWin: "7,500x",
      },
      {
        rank: 4,
        name: "Menace",
        logo: "/casino-index/logo-menace.svg",
        rtp: "80%",
        provablyFair: "Full",
        provider: "3rd party",
        maxWin: "8,000x",
      },
      {
        rank: 5,
        name: "Rollbit",
        logo: "/casino-index/logo-rollbit.svg",
        rtp: "78%",
        provablyFair: "None",
        provider: "3rd party",
        maxWin: "5,000x",
      },
    ],
  },
  {
    name: "Dice",
    icon: "/original-assets/Dice.svg",
    rtp: "45%",
    provablyFair: { full: 18, partial: 7, none: 8 },
    providerStats: { inHouse: 34, thirdParty: 15 },
    casinos: [
      {
        rank: 1,
        name: "Bitsler",
        logo: "/casino-index/logo-bitsler.svg",
        rtp: "48%",
        provablyFair: "Full",
        provider: "In-house",
        maxWin: "9,900x",
      },
      {
        rank: 2,
        name: "Stake",
        logo: "/casino-index/logo-stake.svg",
        rtp: "46%",
        provablyFair: "Full",
        provider: "In-house",
        maxWin: "10,000x",
      },
      {
        rank: 3,
        name: "Thrill",
        logo: "/casino-index/logo-thrill.svg",
        rtp: "44%",
        provablyFair: "Partial",
        provider: "In-house",
        maxWin: "8,000x",
      },
      {
        rank: 4,
        name: "Roobet",
        logo: "/casino-index/logo-roobet.svg",
        rtp: "42%",
        provablyFair: "Full",
        provider: "3rd party",
        maxWin: "10,000x",
      },
      {
        rank: 5,
        name: "Shuffle",
        logo: "/casino-index/logo-shuffle.svg",
        rtp: "38%",
        provablyFair: "None",
        provider: "3rd party",
        maxWin: "5,000x",
      },
    ],
  },
  {
    name: "Plinko",
    icon: "/original-assets/Plinko.svg",
    rtp: "63%",
    provablyFair: { full: 20, partial: 11, none: 10 },
    providerStats: { inHouse: 22, thirdParty: 8 },
    casinos: [
      {
        rank: 1,
        name: "Stake",
        logo: "/casino-index/logo-stake.svg",
        rtp: "67%",
        provablyFair: "Full",
        provider: "In-house",
        maxWin: "1,000x",
      },
      {
        rank: 2,
        name: "Gamedom",
        logo: "/casino-index/logo-gamedom.svg",
        rtp: "65%",
        provablyFair: "Full",
        provider: "In-house",
        maxWin: "1,000x",
      },
      {
        rank: 3,
        name: "Menace",
        logo: "/casino-index/logo-menace.svg",
        rtp: "62%",
        provablyFair: "Partial",
        provider: "3rd party",
        maxWin: "500x",
      },
      {
        rank: 4,
        name: "Rollbit",
        logo: "/casino-index/logo-rollbit.svg",
        rtp: "59%",
        provablyFair: "Full",
        provider: "In-house",
        maxWin: "1,000x",
      },
      {
        rank: 5,
        name: "Bitsler",
        logo: "/casino-index/logo-bitsler.svg",
        rtp: "55%",
        provablyFair: "None",
        provider: "3rd party",
        maxWin: "500x",
      },
    ],
  },
  {
    name: "Crash",
    icon: "/original-assets/Crash.svg",
    rtp: "55%",
    provablyFair: { full: 7, partial: 14, none: 4 },
    providerStats: { inHouse: 29, thirdParty: 19 },
    casinos: [
      {
        rank: 1,
        name: "Rollbit",
        logo: "/casino-index/logo-rollbit.svg",
        rtp: "60%",
        provablyFair: "Full",
        provider: "In-house",
        maxWin: "1,000,000x",
      },
      {
        rank: 2,
        name: "Stake",
        logo: "/casino-index/logo-stake.svg",
        rtp: "57%",
        provablyFair: "Full",
        provider: "In-house",
        maxWin: "100,000x",
      },
      {
        rank: 3,
        name: "Roobet",
        logo: "/casino-index/logo-roobet.svg",
        rtp: "54%",
        provablyFair: "Partial",
        provider: "In-house",
        maxWin: "50,000x",
      },
      {
        rank: 4,
        name: "Thrill",
        logo: "/casino-index/logo-thrill.svg",
        rtp: "51%",
        provablyFair: "Full",
        provider: "3rd party",
        maxWin: "10,000x",
      },
      {
        rank: 5,
        name: "Gamedom",
        logo: "/casino-index/logo-gamedom.svg",
        rtp: "48%",
        provablyFair: "None",
        provider: "3rd party",
        maxWin: "10,000x",
      },
    ],
  },
  {
    name: "Wheel",
    icon: "/original-assets/Wheel.svg",
    rtp: "82%",
    provablyFair: { full: 13, partial: 8, none: 5 },
    providerStats: { inHouse: 31, thirdParty: 14 },
    casinos: [
      {
        rank: 1,
        name: "Menace",
        logo: "/casino-index/logo-menace.svg",
        rtp: "94%",
        provablyFair: "Full",
        provider: "In-house",
        maxWin: "50x",
      },
      {
        rank: 2,
        name: "Stake",
        logo: "/casino-index/logo-stake.svg",
        rtp: "92%",
        provablyFair: "Full",
        provider: "In-house",
        maxWin: "50x",
      },
      {
        rank: 3,
        name: "Shuffle",
        logo: "/casino-index/logo-shuffle.svg",
        rtp: "88%",
        provablyFair: "Partial",
        provider: "3rd party",
        maxWin: "40x",
      },
      {
        rank: 4,
        name: "Bitsler",
        logo: "/casino-index/logo-bitsler.svg",
        rtp: "85%",
        provablyFair: "Full",
        provider: "In-house",
        maxWin: "50x",
      },
      {
        rank: 5,
        name: "Roobet",
        logo: "/casino-index/logo-roobet.svg",
        rtp: "80%",
        provablyFair: "None",
        provider: "3rd party",
        maxWin: "30x",
      },
    ],
  },
  {
    name: "Blackjack",
    icon: "/original-assets/Blackjack.svg",
    rtp: "91%",
    provablyFair: { full: 15, partial: 10, none: 3 },
    providerStats: { inHouse: 18, thirdParty: 22 },
    casinos: [
      {
        rank: 1,
        name: "Stake",
        logo: "/casino-index/logo-stake.svg",
        rtp: "99%",
        provablyFair: "Full",
        provider: "In-house",
        maxWin: "100x",
      },
      {
        rank: 2,
        name: "Thrill",
        logo: "/casino-index/logo-thrill.svg",
        rtp: "98%",
        provablyFair: "Partial",
        provider: "3rd party",
        maxWin: "100x",
      },
      {
        rank: 3,
        name: "Rollbit",
        logo: "/casino-index/logo-rollbit.svg",
        rtp: "97%",
        provablyFair: "Full",
        provider: "In-house",
        maxWin: "80x",
      },
      {
        rank: 4,
        name: "Gamedom",
        logo: "/casino-index/logo-gamedom.svg",
        rtp: "96%",
        provablyFair: "None",
        provider: "3rd party",
        maxWin: "50x",
      },
      {
        rank: 5,
        name: "Menace",
        logo: "/casino-index/logo-menace.svg",
        rtp: "95%",
        provablyFair: "Full",
        provider: "In-house",
        maxWin: "100x",
      },
    ],
  },
  {
    name: "Keno",
    icon: "/original-assets/Keno.svg",
    rtp: "72%",
    provablyFair: { full: 11, partial: 6, none: 9 },
    providerStats: { inHouse: 20, thirdParty: 10 },
    casinos: [
      {
        rank: 1,
        name: "Roobet",
        logo: "/casino-index/logo-roobet.svg",
        rtp: "76%",
        provablyFair: "Full",
        provider: "In-house",
        maxWin: "10,000x",
      },
      {
        rank: 2,
        name: "Bitsler",
        logo: "/casino-index/logo-bitsler.svg",
        rtp: "74%",
        provablyFair: "Full",
        provider: "In-house",
        maxWin: "10,000x",
      },
      {
        rank: 3,
        name: "Stake",
        logo: "/casino-index/logo-stake.svg",
        rtp: "72%",
        provablyFair: "Partial",
        provider: "3rd party",
        maxWin: "5,000x",
      },
      {
        rank: 4,
        name: "Shuffle",
        logo: "/casino-index/logo-shuffle.svg",
        rtp: "70%",
        provablyFair: "None",
        provider: "3rd party",
        maxWin: "5,000x",
      },
      {
        rank: 5,
        name: "Menace",
        logo: "/casino-index/logo-menace.svg",
        rtp: "68%",
        provablyFair: "Full",
        provider: "In-house",
        maxWin: "8,000x",
      },
    ],
  },
  {
    name: "Hilo",
    icon: "/original-assets/Hilo.svg",
    rtp: "68%",
    provablyFair: { full: 16, partial: 4, none: 7 },
    providerStats: { inHouse: 24, thirdParty: 11 },
    casinos: [
      {
        rank: 1,
        name: "Stake",
        logo: "/casino-index/logo-stake.svg",
        rtp: "69%",
        provablyFair: "Full",
        provider: "In-house",
        maxWin: "100,000x",
      },
      {
        rank: 2,
        name: "Gamedom",
        logo: "/casino-index/logo-gamedom.svg",
        rtp: "68%",
        provablyFair: "Full",
        provider: "In-house",
        maxWin: "50,000x",
      },
      {
        rank: 3,
        name: "Thrill",
        logo: "/casino-index/logo-thrill.svg",
        rtp: "66%",
        provablyFair: "Partial",
        provider: "3rd party",
        maxWin: "10,000x",
      },
      {
        rank: 4,
        name: "Rollbit",
        logo: "/casino-index/logo-rollbit.svg",
        rtp: "63%",
        provablyFair: "None",
        provider: "3rd party",
        maxWin: "10,000x",
      },
      {
        rank: 5,
        name: "Roobet",
        logo: "/casino-index/logo-roobet.svg",
        rtp: "60%",
        provablyFair: "Full",
        provider: "In-house",
        maxWin: "50,000x",
      },
    ],
  },
  {
    name: "Tower",
    icon: "/original-assets/Tower.svg",
    rtp: "79%",
    provablyFair: { full: 14, partial: 9, none: 5 },
    providerStats: { inHouse: 19, thirdParty: 13 },
    casinos: [
      {
        rank: 1,
        name: "Shuffle",
        logo: "/casino-index/logo-shuffle.svg",
        rtp: "96%",
        provablyFair: "Full",
        provider: "In-house",
        maxWin: "10,000x",
      },
      {
        rank: 2,
        name: "Stake",
        logo: "/casino-index/logo-stake.svg",
        rtp: "94%",
        provablyFair: "Full",
        provider: "In-house",
        maxWin: "10,000x",
      },
      {
        rank: 3,
        name: "Menace",
        logo: "/casino-index/logo-menace.svg",
        rtp: "89%",
        provablyFair: "Partial",
        provider: "3rd party",
        maxWin: "5,000x",
      },
      {
        rank: 4,
        name: "Bitsler",
        logo: "/casino-index/logo-bitsler.svg",
        rtp: "85%",
        provablyFair: "Full",
        provider: "In-house",
        maxWin: "8,000x",
      },
      {
        rank: 5,
        name: "Roobet",
        logo: "/casino-index/logo-roobet.svg",
        rtp: "78%",
        provablyFair: "None",
        provider: "3rd party",
        maxWin: "5,000x",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Badge helpers                                                      */
/* ------------------------------------------------------------------ */

const PROVABLY_FAIR_COLORS: Record<ProvablyFairStatus, string> = {
  Full: "bg-green-500",
  Partial: "bg-yellow-300",
  None: "bg-gray-200",
};

const PROVIDER_COLORS: Record<ProviderType, string> = {
  "In-house": "bg-gray-200",
  "3rd party": "bg-gray-200",
};

function Badge({ label, color }: { label: string; color: string }) {
  return (
    <span
      className={`${color} inline-flex w-fit items-center justify-center rounded-full px-2 py-0.5 text-xs font-semibold text-[#060d17]`}
    >
      {label}
    </span>
  );
}

function CountBadge({
  count,
  label,
  color,
}: {
  count: number;
  label: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-[3px]">
      <span className="text-md font-semibold text-gray-200 mr-1">{count}</span>
      <Badge label={label} color={color} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  RTP color helper                                                   */
/* ------------------------------------------------------------------ */

function rtpColor(rtp: string): string {
  const num = parseInt(rtp);
  if (num >= 70) return "text-green-500";
  if (num >= 50) return "text-yellow-400";
  return "text-red-500";
}

/* ------------------------------------------------------------------ */
/*  Sort icon                                                          */
/* ------------------------------------------------------------------ */

type SortDir = "asc" | "desc" | null;

function SortIcon({ dir }: { dir?: SortDir }) {
  return (
    <svg
      width="10"
      height="14"
      viewBox="0 0 10 14"
      fill="none"
      className="shrink-0"
    >
      <path d="M5 0L9.33 5H0.67L5 0Z" fill="#f8f8f8" opacity={dir === "asc" ? 1 : 0.4} />
      <path d="M5 14L0.67 9H9.33L5 14Z" fill="#f8f8f8" opacity={dir === "desc" ? 1 : 0.4} />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Filter components                                                  */
/* ------------------------------------------------------------------ */

function Checkbox({
  checked,
  label,
  onToggle,
}: {
  checked: boolean;
  label: string;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-1.5 h-6 cursor-pointer"
    >
      <div
        className={`size-4 rounded shrink-0 flex items-center justify-center ${
          checked
            ? "bg-[#e6b830] border border-[#e6b830]"
            : "bg-white border border-[#d4d4d4] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
        }`}
      >
        {checked && <Check className="size-3.5 text-black" strokeWidth={3} />}
      </div>
      <span className="text-sm font-semibold text-[#f5f5f5]">{label}</span>
    </button>
  );
}

function GameTypeDropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const options = ["All Games", ...games.map((g) => g.name)];

  return (
    <div className="flex flex-col gap-3 shrink-0 relative" ref={ref}>
      <span className="text-sm font-bold text-[#f8f8f8]/60 uppercase">
        Game Type
      </span>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between gap-2 min-h-[36px] min-w-[160px] px-4 py-2 bg-[#f5f5f5] rounded-lg"
      >
        <span className="text-sm font-semibold text-[#020202]">{value}</span>
        <ChevronDown
          className={`size-4 text-[#020202] transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-1 w-full min-w-[160px] bg-[#1a1a1a] border border-[#363636] rounded-lg overflow-hidden z-50 shadow-lg"
          >
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-sm font-semibold transition-colors ${
                  value === opt
                    ? "bg-[#e6b830] text-[#020202]"
                    : "text-[#f5f5f5] hover:bg-[#2a2a2a]"
                }`}
              >
                {opt}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function RtpRangeSlider({
  min,
  max,
  onMinChange,
  onMaxChange,
}: {
  min: number;
  max: number;
  onMinChange: (v: number) => void;
  onMaxChange: (v: number) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const leftPercent = min;
  const rightPercent = max;

  return (
    <div className="flex flex-col gap-3 shrink-0 min-w-[180px]">
      <span className="text-sm font-bold text-[#f8f8f8]/60 uppercase">
        RTP Range
      </span>
      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold text-white">
          {min}% — {max}%
        </span>
        <div ref={trackRef} className="relative h-5 flex items-center">
          {/* Track bg */}
          <div className="absolute inset-x-0 h-1.5 rounded-full bg-[#2a2a2a]" />
          {/* Active range */}
          <div
            className="absolute h-1.5 rounded-full bg-[#e6b830]"
            style={{ left: `${leftPercent}%`, right: `${100 - rightPercent}%` }}
          />
          {/* Min thumb */}
          <input
            type="range"
            min={0}
            max={99}
            value={min}
            onChange={(e) => {
              const v = Math.min(Number(e.target.value), max - 1);
              onMinChange(v);
            }}
            className="absolute inset-x-0 w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#e6b830] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#020202] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:z-10"
          />
          {/* Max thumb */}
          <input
            type="range"
            min={0}
            max={99}
            value={max}
            onChange={(e) => {
              const v = Math.max(Number(e.target.value), min + 1);
              onMaxChange(v);
            }}
            className="absolute inset-x-0 w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#e6b830] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#020202] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:z-10"
          />
        </div>
      </div>
    </div>
  );
}

function GameFilters({
  gameType,
  onGameTypeChange,
  rtpMin,
  rtpMax,
  onRtpMinChange,
  onRtpMaxChange,
}: {
  gameType: string;
  onGameTypeChange: (val: string) => void;
  rtpMin: number;
  rtpMax: number;
  onRtpMinChange: (v: number) => void;
  onRtpMaxChange: (v: number) => void;
}) {
  const [provablyFair, setProvablyFair] = useState({
    full: true,
    partial: false,
    none: false,
  });
  const [provider, setProvider] = useState({
    inHouse: true,
    thirdParty: false,
  });

  return (
    <div
      data-name="game-filters"
      className="bg-[#020202] border border-[#181818] rounded-xl p-5 mb-6"
    >
      <p className="text-base font-bold text-white mb-5">Game Filters</p>
      <div className="flex items-start gap-9 flex-wrap">
        <GameTypeDropdown value={gameType} onChange={onGameTypeChange} />

        <div className="flex flex-col gap-3 shrink-0">
          <span className="text-sm font-bold text-[#f8f8f8]/60 uppercase">
            Provably Fair
          </span>
          <div className="flex items-center gap-4">
            <Checkbox
              checked={provablyFair.full}
              label="Full"
              onToggle={() => setProvablyFair((p) => ({ ...p, full: !p.full }))}
            />
            <Checkbox
              checked={provablyFair.partial}
              label="Partial"
              onToggle={() =>
                setProvablyFair((p) => ({ ...p, partial: !p.partial }))
              }
            />
            <Checkbox
              checked={provablyFair.none}
              label="None"
              onToggle={() => setProvablyFair((p) => ({ ...p, none: !p.none }))}
            />
          </div>
        </div>

        <RtpRangeSlider
          min={rtpMin}
          max={rtpMax}
          onMinChange={onRtpMinChange}
          onMaxChange={onRtpMaxChange}
        />

        <div className="flex flex-col gap-3 shrink-0">
          <span className="text-sm font-bold text-[#f8f8f8]/60 uppercase">
            Provider
          </span>
          <div className="flex items-center gap-4">
            <Checkbox
              checked={provider.inHouse}
              label="In-house"
              onToggle={() =>
                setProvider((p) => ({ ...p, inHouse: !p.inHouse }))
              }
            />
            <Checkbox
              checked={provider.thirdParty}
              label="3rd Party"
              onToggle={() =>
                setProvider((p) => ({ ...p, thirdParty: !p.thirdParty }))
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Inner casino row (inside expanded game)                            */
/* ------------------------------------------------------------------ */

const INNER_GRID =
  "grid grid-cols-[1fr_3fr_2fr_2fr_2fr_2fr_2fr] items-center gap-4";

function CasinoSubRow({
  casino,
  index,
}: {
  casino: CasinoEntry;
  index: number;
}) {
  return (
    <motion.div
      data-name="casino-sub-row"
      className={`${INNER_GRID} bg-[#121212] rounded-md px-5 py-3.5 whitespace-nowrap`}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
    >
      <span className="text-sm font-semibold text-white">#{casino.rank}</span>

      <div className="flex items-center gap-3">
        <div className="w-[61px] h-[43px] rounded-lg overflow-hidden flex items-center justify-center shrink-0 bg-[#020202]">
          <Image
            src={casino.logo}
            alt={casino.name}
            width={45}
            height={29}
            className="object-contain"
          />
        </div>
        <span className="text-sm font-semibold text-[#f8f8f8]">
          {casino.name}
        </span>
      </div>

      <span className={`text-[19px] font-semibold ${rtpColor(casino.rtp)}`}>
        {casino.rtp}
      </span>

      <Badge
        label={casino.provablyFair}
        color={PROVABLY_FAIR_COLORS[casino.provablyFair]}
      />

      <Badge label={casino.provider} color={PROVIDER_COLORS[casino.provider]} />

      <span className="text-[19px] font-semibold text-[#f8f8f8]">
        {casino.maxWin}
      </span>

      <Link
        href="#"
        className="group inline-flex items-center justify-center gap-1.5 rounded-lg border border-[#d4d4d4] px-3 py-1.5 text-sm font-medium text-[#f5f5f5] hover:bg-white/5 transition-colors w-fit"
      >
        See Casino
        <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Game row (outer)                                                   */
/* ------------------------------------------------------------------ */

const OUTER_GRID = "grid grid-cols-[3fr_2fr_5fr_4fr_2fr] items-center gap-4";

type SortField = "rank" | "rtp" | "provablyFair" | "provider" | "maxWin";

function sortCasinos(casinos: CasinoEntry[], field: SortField, dir: SortDir): CasinoEntry[] {
  if (!dir) return casinos;
  const sorted = [...casinos].sort((a, b) => {
    switch (field) {
      case "rank":
        return a.rank - b.rank;
      case "rtp":
        return parseInt(a.rtp) - parseInt(b.rtp);
      case "provablyFair": {
        const order: Record<ProvablyFairStatus, number> = { Full: 2, Partial: 1, None: 0 };
        return order[a.provablyFair] - order[b.provablyFair];
      }
      case "provider": {
        const order: Record<ProviderType, number> = { "In-house": 1, "3rd party": 0 };
        return order[a.provider] - order[b.provider];
      }
      case "maxWin": {
        const parse = (s: string) => parseInt(s.replace(/,/g, ""));
        return parse(a.maxWin) - parse(b.maxWin);
      }
      default:
        return 0;
    }
  });
  return dir === "desc" ? sorted.reverse() : sorted;
}

function GameRow({
  game,
  isOpen,
  onToggle,
}: {
  game: Game;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const [sortField, setSortField] = useState<SortField | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>(null);

  function handleSort(field: SortField) {
    if (sortField === field) {
      setSortDir((d) => (d === "asc" ? "desc" : d === "desc" ? null : "asc"));
      if (sortDir === "desc") setSortField(null);
    } else {
      setSortField(field);
      setSortDir("asc");
    }
  }

  const sortedCasinos = sortField && sortDir
    ? sortCasinos(game.casinos, sortField, sortDir)
    : game.casinos;

  return (
    <div
      data-name="game-row-wrapper"
      className={`flex flex-col gap-2 rounded-md ${
        isOpen
          ? "bg-[#020202] border border-[#363636] p-5"
          : "bg-[#121212] px-5 py-3.5"
      }`}
    >
      {/* Game summary row */}
      <div
        data-name="game-summary"
        className={`${OUTER_GRID} whitespace-nowrap ${isOpen ? "" : ""}`}
      >
        {/* Game icon + name */}
        <div className="flex items-center gap-4">
          <Image
            src={game.icon}
            alt={game.name}
            width={51}
            height={46}
            className="rounded-lg shrink-0"
          />
          <span className="text-sm font-semibold text-[#f8f8f8]">
            {game.name}
          </span>
        </div>

        {/* RTP */}
        <span className={`text-[19px] font-semibold ${rtpColor(game.rtp)}`}>
          {game.rtp}
        </span>

        {/* Provably Fair counts */}
        <div className="flex items-center gap-3.5">
          <CountBadge
            count={game.provablyFair.full}
            label="Full"
            color="bg-green-500"
          />
          <CountBadge
            count={game.provablyFair.partial}
            label="Partial"
            color="bg-yellow-300"
          />
          <CountBadge
            count={game.provablyFair.none}
            label="None"
            color="bg-gray-200"
          />
        </div>

        {/* Provider counts */}
        <div className="flex items-center gap-3.5">
          <CountBadge
            count={game.providerStats.inHouse}
            label="In house"
            color="bg-gray-200"
          />
          <CountBadge
            count={game.providerStats.thirdParty}
            label="3rd party"
            color="bg-gray-200"
          />
        </div>

        {/* Open/Close toggle */}
        <button
          onClick={onToggle}
          className={`inline-flex items-center justify-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors w-fit ${
            isOpen
              ? "bg-white border-white text-[#0a0a0a]"
              : "border-[#d4d4d4] text-[#f5f5f5] hover:bg-white/5"
          } mx-auto`}
        >
          {isOpen ? "Closed" : "Open"}
          <ChevronDown
            className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Expanded sub-table */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            data-name="game-expanded"
            className="flex flex-col gap-1.5"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            {/* Sub-table header */}
            <div
              data-name="sub-table-header"
              className={`${INNER_GRID} bg-[#121212] rounded-md px-5 py-2.5 text-sm font-bold text-white/67 uppercase whitespace-nowrap`}
            >
              <button className="flex items-center gap-4 cursor-pointer" onClick={() => handleSort("rank")}>
                Rank <SortIcon dir={sortField === "rank" ? sortDir : null} />
              </button>
              <div>Casino Name</div>
              <button className="flex items-center gap-4 cursor-pointer" onClick={() => handleSort("rtp")}>
                RTP <SortIcon dir={sortField === "rtp" ? sortDir : null} />
              </button>
              <button className="flex items-center gap-4 cursor-pointer" onClick={() => handleSort("provablyFair")}>
                Provably Fair <SortIcon dir={sortField === "provablyFair" ? sortDir : null} />
              </button>
              <button className="flex items-center gap-4 cursor-pointer" onClick={() => handleSort("provider")}>
                Provider <SortIcon dir={sortField === "provider" ? sortDir : null} />
              </button>
              <button className="flex items-center gap-4 cursor-pointer" onClick={() => handleSort("maxWin")}>
                Max Win <SortIcon dir={sortField === "maxWin" ? sortDir : null} />
              </button>
              <div>Visit</div>
            </div>

            {/* Sub-table rows */}
            {sortedCasinos.map((casino, i) => (
              <CasinoSubRow key={casino.rank} casino={casino} index={i} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main export                                                        */
/* ------------------------------------------------------------------ */

type OuterSortField = "name" | "rtp" | "provablyFair" | "provider";

function sortGames(list: Game[], field: OuterSortField, dir: SortDir): Game[] {
  if (!dir) return list;
  const sorted = [...list].sort((a, b) => {
    switch (field) {
      case "name":
        return a.name.localeCompare(b.name);
      case "rtp":
        return parseInt(a.rtp) - parseInt(b.rtp);
      case "provablyFair":
        return (a.provablyFair.full + a.provablyFair.partial) - (b.provablyFair.full + b.provablyFair.partial);
      case "provider":
        return a.providerStats.inHouse - b.providerStats.inHouse;
      default:
        return 0;
    }
  });
  return dir === "desc" ? sorted.reverse() : sorted;
}

export function CasinoOriginalsTable() {
  const [search, setSearch] = useState("");
  const [gameType, setGameType] = useState("All Games");
  const [rtpMin, setRtpMin] = useState(0);
  const [rtpMax, setRtpMax] = useState(99);
  const [openGames, setOpenGames] = useState<Set<string>>(new Set());
  const [outerSortField, setOuterSortField] = useState<OuterSortField | null>(null);
  const [outerSortDir, setOuterSortDir] = useState<SortDir>(null);

  function handleOuterSort(field: OuterSortField) {
    if (outerSortField === field) {
      setOuterSortDir((d) => (d === "asc" ? "desc" : d === "desc" ? null : "asc"));
      if (outerSortDir === "desc") setOuterSortField(null);
    } else {
      setOuterSortField(field);
      setOuterSortDir("asc");
    }
  }

  function toggleGame(name: string) {
    setOpenGames((prev) => {
      const next = new Set(prev);
      if (next.has(name)) {
        next.delete(name);
      } else {
        next.add(name);
      }
      return next;
    });
  }

  const filtered = games.filter((g) => {
    const matchesSearch = search.trim()
      ? g.name.toLowerCase().includes(search.toLowerCase())
      : true;
    const matchesType =
      gameType === "All Games" ? true : g.name === gameType;
    const rtp = parseInt(g.rtp);
    const matchesRtp = rtp >= rtpMin && rtp <= rtpMax;
    return matchesSearch && matchesType && matchesRtp;
  });

  const sorted = outerSortField && outerSortDir
    ? sortGames(filtered, outerSortField, outerSortDir)
    : filtered;

  return (
    <section
      data-section="casino-originals-table"
      className="bg-[#020202] pb-62"
    >
      <div className="site-container">
        <GameFilters
          gameType={gameType}
          onGameTypeChange={setGameType}
          rtpMin={rtpMin}
          rtpMax={rtpMax}
          onRtpMinChange={setRtpMin}
          onRtpMaxChange={setRtpMax}
        />

        {/* Search bar + Latest update */}
        <div
          data-name="table-toolbar"
          className="flex items-center justify-between gap-4 mb-6"
        >
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-white/40" />
            <input
              type="text"
              placeholder="Search games..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg bg-[#121212] border border-white/10 pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/25 transition-colors"
            />
          </div>
          <p className="text-sm text-white/50 whitespace-nowrap shrink-0">
            Latest update 23 March 2026
          </p>
        </div>

        {/* Scrollable table wrapper */}
        <div className="overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          <div className="min-w-[1200px]">
            {/* Outer table header */}
            <div
              data-name="table-header"
              className={`${OUTER_GRID} bg-[#020202] rounded-md px-5 pb-4 text-sm font-bold text-[#f8f8f8]/67 uppercase whitespace-nowrap`}
            >
              <button className="flex items-center gap-4 cursor-pointer" onClick={() => handleOuterSort("name")}>
                Game Name <SortIcon dir={outerSortField === "name" ? outerSortDir : null} />
              </button>
              <button className="flex items-center gap-4 cursor-pointer" onClick={() => handleOuterSort("rtp")}>
                RTP <SortIcon dir={outerSortField === "rtp" ? outerSortDir : null} />
              </button>
              <button className="flex items-center gap-4 cursor-pointer" onClick={() => handleOuterSort("provablyFair")}>
                Provably Fair <SortIcon dir={outerSortField === "provablyFair" ? outerSortDir : null} />
              </button>
              <button className="flex items-center gap-4 cursor-pointer" onClick={() => handleOuterSort("provider")}>
                Provider <SortIcon dir={outerSortField === "provider" ? outerSortDir : null} />
              </button>
              <div className="text-center">View</div>
            </div>

            {/* Game rows */}
            <div data-name="game-rows" className="flex flex-col gap-1.5">
              {sorted.map((game) => (
                <GameRow
                  key={game.name}
                  game={game}
                  isOpen={openGames.has(game.name)}
                  onToggle={() => toggleGame(game.name)}
                />
              ))}
              {filtered.length === 0 && (
                <p className="text-sm text-white/40 text-center py-8">
                  No games found matching &quot;{search}&quot;
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

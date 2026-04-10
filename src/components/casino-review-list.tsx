"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Plus,
  Minus,
  Search,
  SlidersHorizontal,
  X,
  Gamepad2,
  MapPin,
  Flame,
  Bitcoin,
  Globe,
  Headphones,
  MessageCircle,
  Shield,
  CircleDollarSign,
  Calendar,
  Clock,
  ShieldCheck,
  FileText,
  Info,
  ThumbsUp,
  ThumbsDown,
  Trophy,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Slider } from "@/components/ui/slider";
import { casinoReviews, type CasinoReview } from "@/data/casino-reviews";
import { GAME_ICONS } from "@/components/game-icons";

/* ------------------------------------------------------------------ */
/*  SVG Paths                                                          */
/* ------------------------------------------------------------------ */

const STAR_BG =
  "M15.9988 0H4C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0Z";
const STAR_SHAPE =
  "M10.38 4.035a.75.75 0 0 0-.753 0c-.206.098-.32.269-.377.362a4.7 4.7 0 0 0-.18.34L7.814 7.285l-2.813.411a4.7 4.7 0 0 0-.378.065c-.107.026-.304.081-.46.247a.75.75 0 0 0-.233.716c.03.226.157.387.228.47.074.087.172.182.268.276l2.034 1.981-.48 2.8a4.7 4.7 0 0 0-.055.38c-.009.11-.017.314.092.515a.75.75 0 0 0 .61.443c.224.041.416-.03.517-.072a4.7 4.7 0 0 0 .345-.17l2.514-1.322 2.515 1.322c.118.063.24.127.344.17.102.042.294.113.518.072a.75.75 0 0 0 .61-.443c.108-.2.1-.405.091-.515a4.7 4.7 0 0 0-.055-.38l-.48-2.799 2.035-1.982a4.7 4.7 0 0 0 .268-.275c.071-.083.198-.244.228-.47a.75.75 0 0 0-.232-.717c-.157-.165-.354-.221-.461-.247a4.7 4.7 0 0 0-.378-.065l-2.813-.411-1.257-2.548a4.7 4.7 0 0 0-.18-.34.75.75 0 0 0-.377-.362Z";

const RATING_COLORS: Record<number, string> = {
  1: "#FF6847",
  2: "#FFB257",
  3: "#D8DC00",
  4: "#9FF11A",
  5: "#23BA21",
};

/* ------------------------------------------------------------------ */
/*  Icon Components                                                    */
/* ------------------------------------------------------------------ */

function PlayerRatingIcon({ size = 30 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 31 31"
      fill="none"
      className="shrink-0"
      style={{ width: size, height: size }}
    >
      <path
        d="M30.0039 8.18734C29.6411 6.15767 28.6312 4.34371 27.18 3.0004C25.8857 1.79436 24.2483 0.951107 22.4343 0.627535C20.1203 0.215717 17.7474 0 15.3157 0C12.884 0 10.5112 0.215717 8.19715 0.627535C6.27533 0.970717 4.54961 1.8924 3.22591 3.21611C1.90221 4.53981 0.970715 6.26553 0.627532 8.19715C0.215714 10.5112 0 12.884 0 15.3157C0 17.7474 0.215714 20.1203 0.627532 22.4343C0.970715 24.3561 1.8924 26.072 3.2063 27.3957C4.53 28.7292 6.25572 29.6607 8.18734 30.0039C10.5014 30.4157 12.8742 30.6314 15.3059 30.6314C17.7376 30.6314 20.1105 30.4157 22.4245 30.0039C24.5522 29.6215 26.4348 28.5233 27.8076 26.9643C28.9155 25.7092 29.6902 24.1502 29.9941 22.4343C30.4059 20.1203 30.6216 17.7474 30.6216 15.3157C30.6216 12.884 30.4059 10.5112 29.9941 8.19715L30.0039 8.18734Z"
        fill="#E5E7EB"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.64987 21.5792C8.80094 19.2977 11.7427 17.876 15.0002 17.876C18.2577 17.876 21.1995 19.2977 23.3506 21.5792C23.5856 21.8285 23.6499 22.1937 23.5142 22.5082C23.3784 22.8228 23.0686 23.0265 22.726 23.0265H7.27445C6.93185 23.0265 6.62205 22.8228 6.4863 22.5082C6.35055 22.1937 6.41484 21.8285 6.64987 21.5792Z"
        fill="#1C1C1C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2793 11.4381C10.2793 8.83059 12.3931 6.7168 15.0006 6.7168C17.6081 6.7168 19.7219 8.83059 19.7219 11.4381C19.7219 14.0456 17.6081 16.1594 15.0006 16.1594C12.3931 16.1594 10.2793 14.0456 10.2793 11.4381Z"
        fill="#1C1C1C"
      />
    </svg>
  );
}

function ExpertShieldIcon({ size = 30 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 31 31"
      fill="none"
      className="shrink-0"
      style={{ width: size, height: size }}
    >
      <path
        d="M30.0039 8.18734C29.6411 6.15767 28.6312 4.34371 27.18 3.0004C25.8857 1.79436 24.2483 0.951107 22.4343 0.627535C20.1203 0.215717 17.7474 0 15.3157 0C12.884 0 10.5112 0.215717 8.19715 0.627535C6.27533 0.970717 4.54961 1.8924 3.22591 3.21611C1.90221 4.53981 0.970714 6.26553 0.627532 8.19715C0.215714 10.5112 0 12.884 0 15.3157C0 17.7474 0.215714 20.1203 0.627532 22.4343C0.970714 24.3561 1.8924 26.072 3.2063 27.3957C4.53 28.7292 6.25572 29.6607 8.18734 30.0039C10.5014 30.4157 12.8742 30.6314 15.3059 30.6314C17.7376 30.6314 20.1105 30.4157 22.4245 30.0039C24.5522 29.6215 26.4348 28.5233 27.8076 26.9643C28.9155 25.7092 29.6902 24.1502 29.9941 22.4343C30.4059 20.1203 30.6216 17.7474 30.6216 15.3157C30.6216 12.884 30.4059 10.5112 29.9941 8.19715L30.0039 8.18734Z"
        fill="#003EB6"
      />
      <path d="M9.2462 20.5125C8.46178 21.091 7.79503 21.7969 7.28516 22.6304C8.59905 24.7679 10.9425 26.121 13.4526 26.1897C13.8644 25.4249 14.139 24.611 14.2665 23.758C14.5116 22.1499 14.2272 20.4928 13.4526 19.0613C11.9328 19.1005 10.4718 19.6006 9.23639 20.5027L9.2462 20.5125Z" fill="white" />
      <path d="M17.8064 4.40259C17.2181 5.49097 16.9043 6.72642 16.9043 7.96188C16.9043 9.19733 17.2181 10.4328 17.8064 11.5212C19.4242 11.4721 21.0127 10.8936 22.2776 9.88369C22.9541 9.34441 23.5228 8.69727 23.9739 7.96188C22.66 5.82434 20.3165 4.47122 17.8064 4.40259Z" fill="white" />
      <path d="M8.2164 18.0611C9.48127 17.4434 10.5402 16.4825 11.2854 15.2862C10.55 14.0802 9.50089 13.1193 8.23601 12.4819C7.2751 12.0015 6.20634 11.7269 5.12776 11.6975C3.92172 13.9037 3.91192 16.6099 5.09835 18.8259C6.17692 18.7965 7.24569 18.5415 8.2164 18.0709V18.0611Z" fill="white" />
      <path d="M21.7578 20.3261C20.5812 19.5417 19.2182 19.1103 17.8161 19.071C17.1493 20.3065 16.8356 21.7086 16.9336 23.1206C17.0023 24.1894 17.3062 25.2581 17.8161 26.1994C20.3262 26.1308 22.6697 24.7777 23.9836 22.6401C23.4149 21.7184 22.6501 20.9242 21.7578 20.3359V20.3261Z" fill="white" />
      <path d="M7.28516 7.97168C7.92249 9.00122 8.80496 9.87389 9.84431 10.4916C10.9327 11.1388 12.178 11.5016 13.4526 11.531C14.0606 10.4132 14.3645 9.15811 14.3547 7.88343C14.3449 6.66759 14.0311 5.47135 13.4526 4.40259C10.9425 4.47122 8.59905 5.82434 7.28516 7.96188V7.97168Z" fill="white" />
    </svg>
  );
}

const SAFETY_COLORS: Record<string, { bg: string; text: string }> = {
  High: { bg: "#00DE00", text: "#060D17" },
  Normal: { bg: "#EAEE45", text: "#060D17" },
  Low: { bg: "#FF6847", text: "#FFFFFF" },
};

/* ------------------------------------------------------------------ */
/*  Filter Sidebar                                                     */
/* ------------------------------------------------------------------ */

const FILTER_SHIELD_INNER =
  "M10 4.5C7.1 4.5 4.5 5.87 4.5 5.87V10.5C4.5 13.5 7 15.2 10 16.5C13 15.2 15.5 13.5 15.5 10.5V5.87C15.5 5.87 12.9 4.5 10 4.5Z";

const POPULAR_FILTERS = [
  { label: "Big Brand", count: 7 },
  { label: "Crypto Casinos", count: 88 },
  { label: "eSports Betting", count: 71 },
  { label: "Live dealer", count: 85 },
  { label: "Mobile Friendly", count: 88 },
];

const COUNTRIES = [
  { name: "Albania", code: "al", count: 78 },
  { name: "Algeria", code: "dz", count: 80 },
  { name: "Andorra", code: "ad", count: 87 },
  { name: "Angola", code: "ao", count: 77 },
  { name: "Antigua and Barbuda", code: "ag", count: 84 },
  { name: "Argentina", code: "ar", count: 82 },
  { name: "Australia", code: "au", count: 75 },
  { name: "Austria", code: "at", count: 83 },
  { name: "Brazil", code: "br", count: 79 },
  { name: "Canada", code: "ca", count: 86 },
  { name: "Germany", code: "de", count: 81 },
  { name: "Japan", code: "jp", count: 74 },
  { name: "United Kingdom", code: "gb", count: 88 },
  { name: "United States", code: "us", count: 65 },
];

const GAME_COUNTS: Record<string, number> = {
  Baccarat: 86,
  Bingo: 78,
  Blackjack: 87,
  Crash: 84,
  Dice: 47,
  "Esport Betting": 71,
  "In House": 52,
  "Jackpot Games": 79,
  Keno: 63,
  "Live Casino": 85,
  Originals: 58,
  "Provably Fair": 66,
  Roulette: 88,
  "Scratch Cards": 54,
  Slots: 88,
  "Sports betting": 82,
  "Video Poker": 76,
  Betting: 80,
};

const CRYPTO_CURRENCIES = [
  { name: "1inch", ticker: "1INCH", icon: "", count: 0 },
  { name: "Aave", ticker: "AAVE", icon: "/crypto-payments/aave.svg", count: 3 },
  { name: "Algorand", ticker: "ALGO", icon: "/crypto-payments/algo.svg", count: 2 },
  { name: "ApeCoin", ticker: "APE", icon: "/crypto-payments/ape.svg", count: 1 },
  { name: "Aptos", ticker: "APT", icon: "/crypto-payments/apt.svg", count: 2 },
  { name: "Bitcoin", ticker: "BTC", icon: "/crypto-payments/btc.svg", count: 88 },
  { name: "Ethereum", ticker: "ETH", icon: "/crypto-payments/eth.svg", count: 85 },
  { name: "Litecoin", ticker: "LTC", icon: "/crypto-payments/ltc.svg", count: 72 },
  { name: "Dogecoin", ticker: "DOGE", icon: "/crypto-payments/doge.svg", count: 65 },
  { name: "Solana", ticker: "SOL", icon: "/crypto-payments/sol.svg", count: 45 },
  { name: "Tether", ticker: "USDT", icon: "/crypto-payments/usdt.svg", count: 78 },
  { name: "Ripple", ticker: "XRP", icon: "/crypto-payments/xrp.svg", count: 55 },
];

const LICENSING_AUTHORITIES = [
  { name: "Anjouan (AOFA)", code: "km", count: 35 },
  { name: "Curacao (CGCB)", code: "cw", count: 40 },
  { name: "No License", code: "un", count: 13 },
  { name: "Tobique (TGC)", code: "ca", count: 4 },
  { name: "Malta (MGA)", code: "mt", count: 22 },
  { name: "Gibraltar", code: "gi", count: 15 },
  { name: "Isle of Man", code: "im", count: 8 },
  { name: "Kahnawake", code: "ca", count: 12 },
];

const GAME_PROVIDERS = [
  { name: "100 HP Gaming", count: 12 },
  { name: "155", count: 11 },
  { name: "18 Gaming", count: 1 },
  { name: "18 Peaches", count: 0 },
  { name: "1Spin4Win", count: 40 },
  { name: "Betsoft", count: 35 },
  { name: "Evolution", count: 52 },
  { name: "Microgaming", count: 48 },
  { name: "NetEnt", count: 45 },
  { name: "Pragmatic Play", count: 58 },
  { name: "Play'n GO", count: 42 },
];

const LANGUAGES: { name: string; code: string }[] = [
  { name: "Afrikaans", code: "za" },
  { name: "Albanian", code: "al" },
  { name: "Amharic", code: "et" },
  { name: "Arabic", code: "sa" },
  { name: "Armenian", code: "am" },
  { name: "Bengali", code: "bd" },
  { name: "Chinese", code: "cn" },
  { name: "Czech", code: "cz" },
  { name: "Danish", code: "dk" },
  { name: "Dutch", code: "nl" },
  { name: "English", code: "gb" },
  { name: "Finnish", code: "fi" },
  { name: "French", code: "fr" },
  { name: "German", code: "de" },
  { name: "Greek", code: "gr" },
  { name: "Hebrew", code: "il" },
  { name: "Hindi", code: "in" },
  { name: "Indonesian", code: "id" },
  { name: "Italian", code: "it" },
  { name: "Japanese", code: "jp" },
  { name: "Korean", code: "kr" },
  { name: "Malay", code: "my" },
  { name: "Norwegian", code: "no" },
  { name: "Polish", code: "pl" },
  { name: "Portuguese", code: "pt" },
  { name: "Romanian", code: "ro" },
  { name: "Russian", code: "ru" },
  { name: "Spanish", code: "es" },
  { name: "Swedish", code: "se" },
  { name: "Thai", code: "th" },
  { name: "Turkish", code: "tr" },
  { name: "Ukrainian", code: "ua" },
  { name: "Vietnamese", code: "vn" },
];

function FilterSidebar() {
  const [globalSearch, setGlobalSearch] = useState("");
  const [userRating, setUserRating] = useState<number | null>(null);
  const [selectedShields, setSelectedShields] = useState<number[]>([]);
  const [selectedPopular, setSelectedPopular] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedGames, setSelectedGames] = useState<string[]>([]);
  const [selectedCrypto, setSelectedCrypto] = useState<string[]>([]);
  const [selectedLicenses, setSelectedLicenses] = useState<string[]>([]);
  const [selectedProviders, setSelectedProviders] = useState<string[]>([]);
  const [selectedWebLangs, setSelectedWebLangs] = useState<string[]>([]);
  const [selectedSupportLangs, setSelectedSupportLangs] = useState<string[]>([]);
  const [selectedChatLangs, setSelectedChatLangs] = useState<string[]>([]);
  const [withdrawalLimit, setWithdrawalLimit] = useState(0);
  const [countrySearch, setCountrySearch] = useState("");
  const [cryptoSearch, setCryptoSearch] = useState("");
  const [licenseSearch, setLicenseSearch] = useState("");
  const [providerSearch, setProviderSearch] = useState("");
  const [gameSearch, setGameSearch] = useState("");
  const [webLangSearch, setWebLangSearch] = useState("");
  const [supportLangSearch, setSupportLangSearch] = useState("");
  const [chatLangSearch, setChatLangSearch] = useState("");

  const [expertOpen, setExpertOpen] = useState(true);
  const [popularOpen, setPopularOpen] = useState(true);
  const [locationOpen, setLocationOpen] = useState(true);
  const [gamesOpen, setGamesOpen] = useState(true);
  const [cryptoOpen, setCryptoOpen] = useState(true);
  const [withdrawalOpen, setWithdrawalOpen] = useState(true);
  const [licenseOpen, setLicenseOpen] = useState(true);
  const [providerOpen, setProviderOpen] = useState(true);
  const [webLangOpen, setWebLangOpen] = useState(true);
  const [supportLangOpen, setSupportLangOpen] = useState(true);
  const [chatLangOpen, setChatLangOpen] = useState(true);

  const toggleShield = (val: number) =>
    setSelectedShields((prev) =>
      prev.includes(val) ? prev.filter((s) => s !== val) : [...prev, val]
    );
  const togglePopular = (val: string) =>
    setSelectedPopular((prev) =>
      prev.includes(val) ? prev.filter((s) => s !== val) : [...prev, val]
    );
  const toggleCountry = (val: string) =>
    setSelectedCountries((prev) =>
      prev.includes(val) ? prev.filter((s) => s !== val) : [...prev, val]
    );
  const toggleGame = (game: string) =>
    setSelectedGames((prev) =>
      prev.includes(game) ? prev.filter((g) => g !== game) : [...prev, game]
    );
  const toggleCrypto = (val: string) =>
    setSelectedCrypto((prev) =>
      prev.includes(val) ? prev.filter((s) => s !== val) : [...prev, val]
    );
  const toggleLicense = (val: string) =>
    setSelectedLicenses((prev) =>
      prev.includes(val) ? prev.filter((s) => s !== val) : [...prev, val]
    );
  const toggleProvider = (val: string) =>
    setSelectedProviders((prev) =>
      prev.includes(val) ? prev.filter((s) => s !== val) : [...prev, val]
    );
  const toggleWebLang = (val: string) =>
    setSelectedWebLangs((prev) =>
      prev.includes(val) ? prev.filter((s) => s !== val) : [...prev, val]
    );
  const toggleSupportLang = (val: string) =>
    setSelectedSupportLangs((prev) =>
      prev.includes(val) ? prev.filter((s) => s !== val) : [...prev, val]
    );
  const toggleChatLang = (val: string) =>
    setSelectedChatLangs((prev) =>
      prev.includes(val) ? prev.filter((s) => s !== val) : [...prev, val]
    );

  const filteredCountries = countrySearch.trim()
    ? COUNTRIES.filter((c) => c.name.toLowerCase().includes(countrySearch.toLowerCase()))
    : COUNTRIES;
  const filteredCrypto = cryptoSearch.trim()
    ? CRYPTO_CURRENCIES.filter((c) => c.name.toLowerCase().includes(cryptoSearch.toLowerCase()) || c.ticker.toLowerCase().includes(cryptoSearch.toLowerCase()))
    : CRYPTO_CURRENCIES;
  const filteredLicenses = licenseSearch.trim()
    ? LICENSING_AUTHORITIES.filter((l) => l.name.toLowerCase().includes(licenseSearch.toLowerCase()))
    : LICENSING_AUTHORITIES;
  const filteredProviders = providerSearch.trim()
    ? GAME_PROVIDERS.filter((p) => p.name.toLowerCase().includes(providerSearch.toLowerCase()))
    : GAME_PROVIDERS;
  const gameOptions = Object.keys(GAME_ICONS);
  const filteredGames = gameSearch.trim()
    ? gameOptions.filter((g) => g.toLowerCase().includes(gameSearch.toLowerCase()))
    : gameOptions;
  const filteredWebLangs = webLangSearch.trim()
    ? LANGUAGES.filter((l) => l.name.toLowerCase().includes(webLangSearch.toLowerCase()))
    : LANGUAGES;
  const filteredSupportLangs = supportLangSearch.trim()
    ? LANGUAGES.filter((l) => l.name.toLowerCase().includes(supportLangSearch.toLowerCase()))
    : LANGUAGES;
  const filteredChatLangs = chatLangSearch.trim()
    ? LANGUAGES.filter((l) => l.name.toLowerCase().includes(chatLangSearch.toLowerCase()))
    : LANGUAGES;

  const gs = globalSearch.trim().toLowerCase();
  const filteredPopular = gs
    ? POPULAR_FILTERS.filter((p) => p.label.toLowerCase().includes(gs))
    : POPULAR_FILTERS;

  const showUserRating = !gs || "user rating any star".includes(gs);
  const showExpertScore = !gs || "expert score shield star".includes(gs);
  const showPopular = !gs || filteredPopular.length > 0;
  const showLocation = !gs || filteredCountries.length > 0;
  const showGames = !gs || filteredGames.length > 0;
  const showCrypto = !gs || filteredCrypto.length > 0;
  const showWithdrawal = !gs || "withdrawal limit minimum monthly".includes(gs);
  const showLicense = !gs || filteredLicenses.length > 0;
  const showProvider = !gs || filteredProviders.length > 0;
  const showWebLang = !gs || filteredWebLangs.length > 0;
  const showSupportLang = !gs || filteredSupportLangs.length > 0;
  const showChatLang = !gs || filteredChatLangs.length > 0;

  return (
    <div
      data-name="filter-sidebar"
      className="rounded-lg lg:border lg:border-neutral-200 bg-white p-4 lg:shadow-sm lg:max-h-[calc(100vh-100px)] lg:overflow-y-auto space-y-5"
      style={{ scrollbarWidth: "thin" }}
    >
      {/* Global Search */}
      <div data-name="filter-global-search" className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />
        <input
          type="text"
          placeholder="Search all filters..."
          value={globalSearch}
          onChange={(e) => {
            const v = e.target.value;
            setGlobalSearch(v);
            setCountrySearch(v);
            setCryptoSearch(v);
            setLicenseSearch(v);
            setProviderSearch(v);
            setGameSearch(v);
            setWebLangSearch(v);
            setSupportLangSearch(v);
            setChatLangSearch(v);
          }}
          className="w-full rounded-lg border border-neutral-200 py-2 pl-9 pr-3 text-sm outline-none focus:border-neutral-400"
        />
      </div>

      {/* Filter Header + Pills */}
      <div data-name="filter-header" className="flex items-center justify-between">
        <h3 data-name="filter-title" className="text-base font-bold text-[#060D17]">Filter Casinos</h3>
        {(userRating !== null || selectedShields.length > 0 || selectedPopular.length > 0 || selectedCountries.length > 0 || selectedGames.length > 0 || selectedCrypto.length > 0 || selectedLicenses.length > 0 || selectedProviders.length > 0 || selectedWebLangs.length > 0 || selectedSupportLangs.length > 0 || selectedChatLangs.length > 0 || withdrawalLimit > 0) && (
          <button
            type="button"
            data-name="filter-reset"
            onClick={() => {
              setUserRating(null);
              setSelectedShields([]);
              setSelectedPopular([]);
              setSelectedCountries([]);
              setSelectedGames([]);
              setSelectedCrypto([]);
              setSelectedLicenses([]);
              setSelectedProviders([]);
              setSelectedWebLangs([]);
              setSelectedSupportLangs([]);
              setSelectedChatLangs([]);
              setWithdrawalLimit(0);
            }}
            className="text-xs font-medium text-red-500 hover:text-red-700 transition-colors cursor-pointer"
          >
            Reset All
          </button>
        )}
      </div>

      {(userRating !== null || selectedShields.length > 0 || selectedPopular.length > 0 || selectedCountries.length > 0 || selectedGames.length > 0 || selectedCrypto.length > 0 || selectedLicenses.length > 0 || selectedProviders.length > 0 || selectedWebLangs.length > 0 || selectedSupportLangs.length > 0 || selectedChatLangs.length > 0 || withdrawalLimit > 0) && (
        <div data-name="filter-pills" className="flex flex-wrap gap-1.5">
          {userRating !== null && (
            <Badge variant="secondary" className="gap-1 px-2 py-0.5 h-auto text-xs">
              <span className="font-semibold">Rating:</span> {userRating} Star
              <button type="button" onClick={() => setUserRating(null)} className="ml-0.5 text-neutral-400 hover:text-neutral-600 cursor-pointer"><X className="size-3" /></button>
            </Badge>
          )}
          {selectedShields.map((s) => (
            <Badge key={s} variant="secondary" className="gap-1 px-2 py-0.5 h-auto text-xs">
              <span className="font-semibold">Expert:</span> {s} Stars
              <button type="button" onClick={() => toggleShield(s)} className="ml-0.5 text-neutral-400 hover:text-neutral-600 cursor-pointer"><X className="size-3" /></button>
            </Badge>
          ))}
          {selectedPopular.map((p) => (
            <Badge key={p} variant="secondary" className="gap-1 px-2 py-0.5 h-auto text-xs">
              <span className="font-semibold">Popular:</span> {p}
              <button type="button" onClick={() => togglePopular(p)} className="ml-0.5 text-neutral-400 hover:text-neutral-600 cursor-pointer"><X className="size-3" /></button>
            </Badge>
          ))}
          {selectedCountries.map((c) => (
            <Badge key={c} variant="secondary" className="gap-1 px-2 py-0.5 h-auto text-xs">
              <span className="font-semibold">Location:</span> {COUNTRIES.find((co) => co.code === c)?.name ?? c}
              <button type="button" onClick={() => toggleCountry(c)} className="ml-0.5 text-neutral-400 hover:text-neutral-600 cursor-pointer"><X className="size-3" /></button>
            </Badge>
          ))}
          {selectedGames.map((g) => (
            <Badge key={g} variant="secondary" className="gap-1 px-2 py-0.5 h-auto text-xs">
              <span className="font-semibold">Game:</span> {g}
              <button type="button" onClick={() => toggleGame(g)} className="ml-0.5 text-neutral-400 hover:text-neutral-600 cursor-pointer"><X className="size-3" /></button>
            </Badge>
          ))}
          {selectedCrypto.map((c) => (
            <Badge key={c} variant="secondary" className="gap-1 px-2 py-0.5 h-auto text-xs">
              <span className="font-semibold">Crypto:</span> {c}
              <button type="button" onClick={() => toggleCrypto(c)} className="ml-0.5 text-neutral-400 hover:text-neutral-600 cursor-pointer"><X className="size-3" /></button>
            </Badge>
          ))}
          {selectedLicenses.map((l) => (
            <Badge key={l} variant="secondary" className="gap-1 px-2 py-0.5 h-auto text-xs">
              <span className="font-semibold">License:</span> {l}
              <button type="button" onClick={() => toggleLicense(l)} className="ml-0.5 text-neutral-400 hover:text-neutral-600 cursor-pointer"><X className="size-3" /></button>
            </Badge>
          ))}
          {selectedProviders.map((p) => (
            <Badge key={p} variant="secondary" className="gap-1 px-2 py-0.5 h-auto text-xs">
              <span className="font-semibold">Provider:</span> {p}
              <button type="button" onClick={() => toggleProvider(p)} className="ml-0.5 text-neutral-400 hover:text-neutral-600 cursor-pointer"><X className="size-3" /></button>
            </Badge>
          ))}
          {selectedWebLangs.map((l) => (
            <Badge key={`web-${l}`} variant="secondary" className="gap-1 px-2 py-0.5 h-auto text-xs">
              <span className="font-semibold">Web Lang:</span> {l}
              <button type="button" onClick={() => toggleWebLang(l)} className="ml-0.5 text-neutral-400 hover:text-neutral-600 cursor-pointer"><X className="size-3" /></button>
            </Badge>
          ))}
          {selectedSupportLangs.map((l) => (
            <Badge key={`sup-${l}`} variant="secondary" className="gap-1 px-2 py-0.5 h-auto text-xs">
              <span className="font-semibold">Support:</span> {l}
              <button type="button" onClick={() => toggleSupportLang(l)} className="ml-0.5 text-neutral-400 hover:text-neutral-600 cursor-pointer"><X className="size-3" /></button>
            </Badge>
          ))}
          {selectedChatLangs.map((l) => (
            <Badge key={`chat-${l}`} variant="secondary" className="gap-1 px-2 py-0.5 h-auto text-xs">
              <span className="font-semibold">Chat:</span> {l}
              <button type="button" onClick={() => toggleChatLang(l)} className="ml-0.5 text-neutral-400 hover:text-neutral-600 cursor-pointer"><X className="size-3" /></button>
            </Badge>
          ))}
          {withdrawalLimit > 0 && (
            <Badge variant="secondary" className="gap-1 px-2 py-0.5 h-auto text-xs">
              <span className="font-semibold">Withdrawal:</span> Min ${withdrawalLimit.toLocaleString()}
              <button type="button" onClick={() => setWithdrawalLimit(0)} className="ml-0.5 text-neutral-400 hover:text-neutral-600 cursor-pointer"><X className="size-3" /></button>
            </Badge>
          )}
        </div>
      )}

      {/* User Rating */}
      <div data-name="filter-user-rating" className={showUserRating ? "" : "hidden"}>
        <h4 className="text-lg font-bold text-[#060D17] mb-3">User Rating</h4>
        <div data-name="user-rating-buttons" className="flex items-center gap-1 rounded-lg border border-neutral-200 p-1">
          <button
            type="button"
            data-name="rating-any"
            onClick={() => setUserRating(null)}
            className={`flex-1 px-3 py-1.5 rounded-md text-sm font-semibold transition-colors cursor-pointer ${
              userRating === null
                ? "bg-black text-white"
                : "text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            Any
          </button>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              data-name={`rating-${star}`}
              onClick={() => setUserRating(star)}
              className={`flex-1 flex items-center justify-center gap-1 px-2 py-1.5 rounded-md text-sm font-semibold transition-colors cursor-pointer ${
                userRating === star
                  ? "bg-black text-white"
                  : "text-neutral-600 hover:bg-neutral-100"
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="size-4">
                <path d={STAR_BG} fill={RATING_COLORS[star]} />
                <path d={STAR_SHAPE} fill="white" />
              </svg>
              {star}
            </button>
          ))}
        </div>
      </div>

      {showExpertScore && <div data-name="divider" className="border-t border-neutral-100" />}

      {/* Expert Score */}
      <div data-name="filter-expert-score" className={showExpertScore ? "" : "hidden"}>
        <button
          type="button"
          data-name="expert-score-toggle"
          onClick={() => setExpertOpen(!expertOpen)}
          className="flex items-center justify-between w-full cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <ExpertShieldIcon size={24} />
            <h4 className="text-lg font-bold text-[#060D17]">Expert Score</h4>
          </div>
          {expertOpen ? <ChevronUp className="size-5 text-neutral-500" /> : <ChevronDown className="size-5 text-neutral-500" />}
        </button>
        {expertOpen && (
          <div data-name="expert-score-content" className="mt-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-neutral-600">Casinos</span>
              <span className="text-sm font-semibold text-blue-600">104</span>
            </div>
            <div data-name="shield-checkboxes" className="flex flex-col">
              {[1, 2, 3, 4, 5].map((shields) => (
                <label
                  key={shields}
                  data-name={`shield-filter-${shields}`}
                  className="flex items-center gap-3 py-2.5 border-b border-neutral-100 cursor-pointer"
                >
                  <Checkbox
                    className="size-5 rounded border-neutral-300"
                    checked={selectedShields.includes(shields)}
                    onCheckedChange={() => toggleShield(shields)}
                  />
                  <div data-name="filter-shields" className="flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="none" className="size-5">
                        <rect width="20" height="20" rx="5" fill={i < shields ? "#003EB6" : "#D4D4D4"} />
                        <path d={FILTER_SHIELD_INNER} fill="white" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-neutral-700">{shields} {shields === 1 ? "Star" : "Stars"}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {showPopular && <div data-name="divider" className="border-t border-neutral-100" />}

      {/* Popular Filter */}
      <div data-name="filter-popular" className={showPopular ? "" : "hidden"}>
        <button
          type="button"
          data-name="popular-filter-toggle"
          onClick={() => setPopularOpen(!popularOpen)}
          className="flex items-center justify-between w-full cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <div className="size-6 rounded-md bg-black flex items-center justify-center">
              <Flame className="size-3.5 text-white" />
            </div>
            <h4 className="text-lg font-bold text-[#060D17]">Popular Filter</h4>
          </div>
          {popularOpen ? <ChevronUp className="size-5 text-neutral-500" /> : <ChevronDown className="size-5 text-neutral-500" />}
        </button>
        {popularOpen && (
          <div data-name="popular-filter-content" className="mt-3 flex flex-col">
            {filteredPopular.map((item) => (
              <label
                key={item.label}
                data-name={`popular-filter-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                className="flex items-center gap-3 py-2.5 border-b border-neutral-100 cursor-pointer"
              >
                <Checkbox
                  className="size-5 rounded border-neutral-300"
                  checked={selectedPopular.includes(item.label)}
                  onCheckedChange={() => togglePopular(item.label)}
                />
                <span className="text-sm text-neutral-700">{item.label}</span>
                <span className="text-sm font-semibold text-blue-600">{item.count}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {showLocation && <div data-name="divider" className="border-t border-neutral-100" />}

      {/* Casino for Players Location */}
      <div data-name="filter-location" className={showLocation ? "" : "hidden"}>
        <button
          type="button"
          data-name="location-filter-toggle"
          onClick={() => setLocationOpen(!locationOpen)}
          className="flex items-center justify-between w-full cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <div className="size-6 rounded-md bg-black flex items-center justify-center">
              <MapPin className="size-3.5 text-white" />
            </div>
            <h4 className="text-lg font-bold text-[#060D17]">Players Location</h4>
          </div>
          {locationOpen ? <ChevronUp className="size-5 text-neutral-500" /> : <ChevronDown className="size-5 text-neutral-500" />}
        </button>
        {locationOpen && (
          <div data-name="location-filter-content" className="mt-3">
            <p className="text-sm text-neutral-500 mb-2">Is this your country of residence?</p>
            <div data-name="location-search" className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search filter"
                value={countrySearch}
                onChange={(e) => setCountrySearch(e.target.value)}
                className="w-full rounded-lg border border-neutral-200 py-2 pl-9 pr-3 text-sm outline-none focus:border-neutral-400"
              />
            </div>
            <div data-name="country-list" className="flex flex-col max-h-[220px] overflow-y-auto" style={{ scrollbarWidth: "thin" }}>
              {filteredCountries.map((country) => (
                <label
                  key={country.code}
                  data-name={`country-filter-${country.code}`}
                  className="flex items-center gap-3 py-2.5 border-b border-neutral-100 cursor-pointer"
                >
                  <Checkbox
                    className="size-5 rounded border-neutral-300"
                    checked={selectedCountries.includes(country.code)}
                    onCheckedChange={() => toggleCountry(country.code)}
                  />
                  <span className={`fi fi-${country.code} fis size-5 rounded-full shrink-0 overflow-hidden`} />
                  <span className="text-sm text-neutral-700">{country.name}</span>
                  <span className="text-sm font-semibold text-blue-600">{country.count}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {showGames && <div data-name="divider" className="border-t border-neutral-100" />}

      {/* Casino Games */}
      <div data-name="filter-games" className={showGames ? "" : "hidden"}>
        <button
          type="button"
          data-name="games-filter-toggle"
          onClick={() => setGamesOpen(!gamesOpen)}
          className="flex items-center justify-between w-full cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <div className="size-6 rounded-md bg-black flex items-center justify-center">
              <Gamepad2 className="size-3.5 text-white" />
            </div>
            <h4 className="text-lg font-bold text-[#060D17]">Casino Games</h4>
          </div>
          {gamesOpen ? <ChevronUp className="size-5 text-neutral-500" /> : <ChevronDown className="size-5 text-neutral-500" />}
        </button>
        {gamesOpen && (
          <div data-name="games-filter-content" className="mt-3">
            <div data-name="games-search" className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search games"
                value={gameSearch}
                onChange={(e) => setGameSearch(e.target.value)}
                className="w-full rounded-lg border border-neutral-200 py-2 pl-9 pr-3 text-sm outline-none focus:border-neutral-400"
              />
            </div>
            <div className="flex flex-col max-h-[220px] overflow-y-auto" style={{ scrollbarWidth: "thin" }}>
              {filteredGames.map((game) => (
                <label
                  key={game}
                  data-name={`game-filter-${game.toLowerCase().replace(/\s/g, "-")}`}
                  className="flex items-center gap-3 py-2.5 border-b border-neutral-100 cursor-pointer"
                >
                  <Checkbox
                    className="size-5 rounded border-neutral-300"
                    checked={selectedGames.includes(game)}
                    onCheckedChange={() => toggleGame(game)}
                  />
                  <div className="size-5 shrink-0 flex items-center justify-center [&_img]:w-5! [&_img]:h-5!">
                    {GAME_ICONS[game]}
                  </div>
                  <span className="text-sm text-neutral-700">{game}</span>
                  <span className="text-sm font-semibold text-blue-600">{GAME_COUNTS[game] ?? 0}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {showCrypto && <div data-name="divider" className="border-t border-neutral-100" />}

      {/* Crypto Currency */}
      <div data-name="filter-crypto" className={showCrypto ? "" : "hidden"}>
        <button
          type="button"
          data-name="crypto-filter-toggle"
          onClick={() => setCryptoOpen(!cryptoOpen)}
          className="flex items-center justify-between w-full cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <div className="size-6 rounded-md bg-black flex items-center justify-center">
              <Bitcoin className="size-3.5 text-white" />
            </div>
            <h4 className="text-lg font-bold text-[#060D17]">Crypto Currency</h4>
          </div>
          {cryptoOpen ? <ChevronUp className="size-5 text-neutral-500" /> : <ChevronDown className="size-5 text-neutral-500" />}
        </button>
        {cryptoOpen && (
          <div data-name="crypto-filter-content" className="mt-3">
            <div data-name="crypto-search" className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search crypto"
                value={cryptoSearch}
                onChange={(e) => setCryptoSearch(e.target.value)}
                className="w-full rounded-lg border border-neutral-200 py-2 pl-9 pr-3 text-sm outline-none focus:border-neutral-400"
              />
            </div>
            <div className="flex flex-col max-h-[220px] overflow-y-auto" style={{ scrollbarWidth: "thin" }}>
              {filteredCrypto.map((crypto) => (
                <label
                  key={crypto.ticker}
                  data-name={`crypto-filter-${crypto.ticker.toLowerCase()}`}
                  className="flex items-center gap-3 py-2.5 border-b border-neutral-100 cursor-pointer"
                >
                  <Checkbox
                    className="size-5 rounded border-neutral-300"
                    checked={selectedCrypto.includes(crypto.ticker)}
                    onCheckedChange={() => toggleCrypto(crypto.ticker)}
                  />
                  {crypto.icon && (
                    <Image src={crypto.icon} alt="" width={20} height={20} className="size-5 rounded-full" />
                  )}
                  <span className="text-sm text-neutral-700">{crypto.name} ({crypto.ticker})</span>
                  <span className="text-sm font-semibold text-blue-600">{crypto.count}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {showWithdrawal && <div data-name="divider" className="border-t border-neutral-100" />}

      {/* Withdrawal Limit */}
      <div data-name="filter-withdrawal" className={showWithdrawal ? "" : "hidden"}>
        <button
          type="button"
          data-name="withdrawal-filter-toggle"
          onClick={() => setWithdrawalOpen(!withdrawalOpen)}
          className="flex items-center justify-between w-full cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <div className="size-6 rounded-md bg-black flex items-center justify-center">
              <CircleDollarSign className="size-3.5 text-white" />
            </div>
            <h4 className="text-lg font-bold text-[#060D17]">Withdrawal Limit</h4>
          </div>
          {withdrawalOpen ? <ChevronUp className="size-5 text-neutral-500" /> : <ChevronDown className="size-5 text-neutral-500" />}
        </button>
        {withdrawalOpen && (
          <div data-name="withdrawal-filter-content" className="mt-3 rounded-lg border border-neutral-200 p-4">
            <div className="flex items-center gap-1 mb-2">
              <span className="text-sm text-neutral-600">Minimum monthly withdrawal limit</span>
            </div>
            <input
              type="number"
              value={withdrawalLimit}
              onChange={(e) => setWithdrawalLimit(Number(e.target.value))}
              className="w-full rounded-lg border border-neutral-200 py-2 px-3 text-sm outline-none focus:border-neutral-400 mb-3"
            />
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded">0 $</span>
              <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded">20 000 000 $</span>
            </div>
            <input
              type="range"
              min={0}
              max={20000000}
              step={100000}
              value={withdrawalLimit}
              onChange={(e) => setWithdrawalLimit(Number(e.target.value))}
              className="w-full accent-green-500"
            />
          </div>
        )}
      </div>

      {showLicense && <div data-name="divider" className="border-t border-neutral-100" />}

      {/* Licensing Authority */}
      <div data-name="filter-license" className={showLicense ? "" : "hidden"}>
        <button
          type="button"
          data-name="license-filter-toggle"
          onClick={() => setLicenseOpen(!licenseOpen)}
          className="flex items-center justify-between w-full cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <div className="size-6 rounded-md bg-black flex items-center justify-center">
              <Shield className="size-3.5 text-white" />
            </div>
            <h4 className="text-lg font-bold text-[#060D17]">Licensing Authority</h4>
          </div>
          {licenseOpen ? <ChevronUp className="size-5 text-neutral-500" /> : <ChevronDown className="size-5 text-neutral-500" />}
        </button>
        {licenseOpen && (
          <div data-name="license-filter-content" className="mt-3">
            <div data-name="license-search" className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search license"
                value={licenseSearch}
                onChange={(e) => setLicenseSearch(e.target.value)}
                className="w-full rounded-lg border border-neutral-200 py-2 pl-9 pr-3 text-sm outline-none focus:border-neutral-400"
              />
            </div>
            <div className="flex flex-col max-h-[220px] overflow-y-auto" style={{ scrollbarWidth: "thin" }}>
              {filteredLicenses.map((license) => (
                <label
                  key={license.name}
                  data-name={`license-filter-${license.name.toLowerCase().replace(/\s/g, "-")}`}
                  className="flex items-center gap-3 py-2.5 border-b border-neutral-100 cursor-pointer"
                >
                  <Checkbox
                    className="size-5 rounded border-neutral-300"
                    checked={selectedLicenses.includes(license.name)}
                    onCheckedChange={() => toggleLicense(license.name)}
                  />
                  <span className={`fi fi-${license.code} fis size-5 rounded-full shrink-0 overflow-hidden`} />
                  <span className="text-sm text-neutral-700">{license.name}</span>
                  <span className="text-sm font-semibold text-blue-600">{license.count}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {showProvider && <div data-name="divider" className="border-t border-neutral-100" />}

      {/* Game Provider */}
      <div data-name="filter-provider" className={showProvider ? "" : "hidden"}>
        <button
          type="button"
          data-name="provider-filter-toggle"
          onClick={() => setProviderOpen(!providerOpen)}
          className="flex items-center justify-between w-full cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <div className="size-6 rounded-md bg-black flex items-center justify-center">
              <Gamepad2 className="size-3.5 text-white" />
            </div>
            <h4 className="text-lg font-bold text-[#060D17]">Game Provider</h4>
          </div>
          {providerOpen ? <ChevronUp className="size-5 text-neutral-500" /> : <ChevronDown className="size-5 text-neutral-500" />}
        </button>
        {providerOpen && (
          <div data-name="provider-filter-content" className="mt-3">
            <div data-name="provider-search" className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search provider"
                value={providerSearch}
                onChange={(e) => setProviderSearch(e.target.value)}
                className="w-full rounded-lg border border-neutral-200 py-2 pl-9 pr-3 text-sm outline-none focus:border-neutral-400"
              />
            </div>
            <div className="flex flex-col max-h-[220px] overflow-y-auto" style={{ scrollbarWidth: "thin" }}>
              {filteredProviders.map((provider) => (
                <label
                  key={provider.name}
                  data-name={`provider-filter-${provider.name.toLowerCase().replace(/\s/g, "-")}`}
                  className="flex items-center gap-3 py-2.5 border-b border-neutral-100 cursor-pointer"
                >
                  <Checkbox
                    className="size-5 rounded border-neutral-300"
                    checked={selectedProviders.includes(provider.name)}
                    onCheckedChange={() => toggleProvider(provider.name)}
                  />
                  <span className="text-sm text-neutral-700">{provider.name}</span>
                  <span className="text-sm font-semibold text-blue-600">{provider.count}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {(showWebLang || showSupportLang || showChatLang) && <div data-name="divider" className="border-t border-neutral-100" />}

      {/* Filter by Language heading */}
      {(showWebLang || showSupportLang || showChatLang) && (
        <h3 data-name="filter-language-heading" className="text-lg font-bold text-[#060D17]">Filter by Language</h3>
      )}

      {/* Website Language */}
      <div data-name="filter-web-language" className={showWebLang ? "" : "hidden"}>
        <button
          type="button"
          data-name="web-lang-toggle"
          onClick={() => setWebLangOpen(!webLangOpen)}
          className="flex items-center justify-between w-full cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <div className="size-6 rounded-md bg-black flex items-center justify-center">
              <Globe className="size-3.5 text-white" />
            </div>
            <h4 className="text-lg font-bold text-[#060D17]">Website Language</h4>
          </div>
          {webLangOpen ? <ChevronUp className="size-5 text-neutral-500" /> : <ChevronDown className="size-5 text-neutral-500" />}
        </button>
        {webLangOpen && (
          <div data-name="web-lang-content" className="mt-3">
            <div data-name="web-lang-search" className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search language"
                value={webLangSearch}
                onChange={(e) => setWebLangSearch(e.target.value)}
                className="w-full rounded-lg border border-neutral-200 py-2 pl-9 pr-3 text-sm outline-none focus:border-neutral-400"
              />
            </div>
            <div className="flex flex-col max-h-[220px] overflow-y-auto" style={{ scrollbarWidth: "thin" }}>
              {filteredWebLangs.map((lang) => (
                <label
                  key={lang.name}
                  data-name={`web-lang-${lang.name.toLowerCase()}`}
                  className="flex items-center gap-3 py-2.5 border-b border-neutral-100 cursor-pointer"
                >
                  <Checkbox
                    className="size-5 rounded border-neutral-300"
                    checked={selectedWebLangs.includes(lang.name)}
                    onCheckedChange={() => toggleWebLang(lang.name)}
                  />
                  <span className={`fi fi-${lang.code} fis size-5 rounded-full shrink-0 overflow-hidden`} />
                  <span className="text-sm text-neutral-700">{lang.name}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {showSupportLang && <div data-name="divider" className="border-t border-neutral-100" />}

      {/* Customer Support */}
      <div data-name="filter-support-language" className={showSupportLang ? "" : "hidden"}>
        <button
          type="button"
          data-name="support-lang-toggle"
          onClick={() => setSupportLangOpen(!supportLangOpen)}
          className="flex items-center justify-between w-full cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <div className="size-6 rounded-md bg-black flex items-center justify-center">
              <Headphones className="size-3.5 text-white" />
            </div>
            <h4 className="text-lg font-bold text-[#060D17]">Customer Support</h4>
          </div>
          {supportLangOpen ? <ChevronUp className="size-5 text-neutral-500" /> : <ChevronDown className="size-5 text-neutral-500" />}
        </button>
        {supportLangOpen && (
          <div data-name="support-lang-content" className="mt-3">
            <div data-name="support-lang-search" className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search language"
                value={supportLangSearch}
                onChange={(e) => setSupportLangSearch(e.target.value)}
                className="w-full rounded-lg border border-neutral-200 py-2 pl-9 pr-3 text-sm outline-none focus:border-neutral-400"
              />
            </div>
            <div className="flex flex-col max-h-[220px] overflow-y-auto" style={{ scrollbarWidth: "thin" }}>
              {filteredSupportLangs.map((lang) => (
                <label
                  key={lang.name}
                  data-name={`support-lang-${lang.name.toLowerCase()}`}
                  className="flex items-center gap-3 py-2.5 border-b border-neutral-100 cursor-pointer"
                >
                  <Checkbox
                    className="size-5 rounded border-neutral-300"
                    checked={selectedSupportLangs.includes(lang.name)}
                    onCheckedChange={() => toggleSupportLang(lang.name)}
                  />
                  <span className={`fi fi-${lang.code} fis size-5 rounded-full shrink-0 overflow-hidden`} />
                  <span className="text-sm text-neutral-700">{lang.name}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {showChatLang && <div data-name="divider" className="border-t border-neutral-100" />}

      {/* Live Chat Language */}
      <div data-name="filter-chat-language" className={showChatLang ? "" : "hidden"}>
        <button
          type="button"
          data-name="chat-lang-toggle"
          onClick={() => setChatLangOpen(!chatLangOpen)}
          className="flex items-center justify-between w-full cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <div className="size-6 rounded-md bg-black flex items-center justify-center">
              <MessageCircle className="size-3.5 text-white" />
            </div>
            <h4 className="text-lg font-bold text-[#060D17]">Live Chat Language</h4>
          </div>
          {chatLangOpen ? <ChevronUp className="size-5 text-neutral-500" /> : <ChevronDown className="size-5 text-neutral-500" />}
        </button>
        {chatLangOpen && (
          <div data-name="chat-lang-content" className="mt-3">
            <div data-name="chat-lang-search" className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search language"
                value={chatLangSearch}
                onChange={(e) => setChatLangSearch(e.target.value)}
                className="w-full rounded-lg border border-neutral-200 py-2 pl-9 pr-3 text-sm outline-none focus:border-neutral-400"
              />
            </div>
            <div className="flex flex-col max-h-[220px] overflow-y-auto" style={{ scrollbarWidth: "thin" }}>
              {filteredChatLangs.map((lang) => (
                <label
                  key={lang.name}
                  data-name={`chat-lang-${lang.name.toLowerCase()}`}
                  className="flex items-center gap-3 py-2.5 border-b border-neutral-100 cursor-pointer"
                >
                  <Checkbox
                    className="size-5 rounded border-neutral-300"
                    checked={selectedChatLangs.includes(lang.name)}
                    onCheckedChange={() => toggleChatLang(lang.name)}
                  />
                  <span className={`fi fi-${lang.code} fis size-5 rounded-full shrink-0 overflow-hidden`} />
                  <span className="text-sm text-neutral-700">{lang.name}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Bonus Filter Sidebar                                               */
/* ------------------------------------------------------------------ */

const BONUS_TYPES = [
  { label: "No Deposit Bonus", count: 4 },
  { label: "Free bonus funds", count: 0 },
  { label: "Free spins", count: 6 },
  { label: "Deposit Bonus", count: 99 },
  { label: "Reload bonus", count: 0 },
  { label: "Cashback bonus", count: 1 },
];

const BONUS_FOR = [
  { label: "New Players", count: 88 },
  { label: "Existing Players", count: 2 },
];

const WAGERING_TYPES = [
  { label: "Bonus", count: 86 },
  { label: "Bonus + Deposit", count: 18 },
  { label: "Cashback - no WR", count: 0 },
  { label: "Deposit", count: 1 },
  { label: "Non-standard WR", count: 1 },
];

const CASHOUT_OPTIONS = [
  { label: "Cashout not Limited", count: 106 },
];

function BonusFilterSidebar() {
  const [selectedBonusTypes, setSelectedBonusTypes] = useState<string[]>([]);
  const [selectedBonusFor, setSelectedBonusFor] = useState<string[]>([]);
  const [selectedWagering, setSelectedWagering] = useState<string[]>([]);
  const [selectedCashout, setSelectedCashout] = useState<string[]>([]);
  const [selectedBonusCountries, setSelectedBonusCountries] = useState<string[]>([]);
  const [bonusCountrySearch, setBonusCountrySearch] = useState("");

  const [bonusAmount, setBonusAmount] = useState<number[]>([0, 5000000]);
  const [bonusPercent, setBonusPercent] = useState<number[]>([0, 5000]);
  const [freeSpins, setFreeSpins] = useState<number[]>([0, 5000]);
  const [maxWR, setMaxWR] = useState<number[]>([0, 500]);

  const [bonusTypeOpen, setBonusTypeOpen] = useState(true);
  const [bonusForOpen, setBonusForOpen] = useState(true);
  const [bonusValueOpen, setBonusValueOpen] = useState(true);
  const [wageringOpen, setWageringOpen] = useState(true);
  const [cashoutOpen, setCashoutOpen] = useState(true);
  const [bonusCountryOpen, setBonusCountryOpen] = useState(true);

  const toggleBonusType = (val: string) =>
    setSelectedBonusTypes((prev) =>
      prev.includes(val) ? prev.filter((s) => s !== val) : [...prev, val]
    );
  const toggleBonusFor = (val: string) =>
    setSelectedBonusFor((prev) =>
      prev.includes(val) ? prev.filter((s) => s !== val) : [...prev, val]
    );
  const toggleWagering = (val: string) =>
    setSelectedWagering((prev) =>
      prev.includes(val) ? prev.filter((s) => s !== val) : [...prev, val]
    );
  const toggleCashout = (val: string) =>
    setSelectedCashout((prev) =>
      prev.includes(val) ? prev.filter((s) => s !== val) : [...prev, val]
    );
  const toggleBonusCountry = (val: string) =>
    setSelectedBonusCountries((prev) =>
      prev.includes(val) ? prev.filter((s) => s !== val) : [...prev, val]
    );

  const filteredBonusCountries = bonusCountrySearch.trim()
    ? COUNTRIES.filter((c) => c.name.toLowerCase().includes(bonusCountrySearch.toLowerCase()))
    : COUNTRIES;

  const hasAnyFilter =
    selectedBonusTypes.length > 0 ||
    selectedBonusFor.length > 0 ||
    selectedWagering.length > 0 ||
    selectedCashout.length > 0 ||
    selectedBonusCountries.length > 0 ||
    bonusAmount[0] !== 0 || bonusAmount[1] !== 5000000 ||
    bonusPercent[0] !== 0 || bonusPercent[1] !== 5000 ||
    freeSpins[0] !== 0 || freeSpins[1] !== 5000 ||
    maxWR[0] !== 0 || maxWR[1] !== 500;

  const resetAll = () => {
    setSelectedBonusTypes([]);
    setSelectedBonusFor([]);
    setSelectedWagering([]);
    setSelectedCashout([]);
    setSelectedBonusCountries([]);
    setBonusAmount([0, 5000000]);
    setBonusPercent([0, 5000]);
    setFreeSpins([0, 5000]);
    setMaxWR([0, 500]);
    setBonusCountrySearch("");
  };

  return (
    <div
      data-name="bonus-filter-sidebar"
      className="rounded-lg lg:border lg:border-neutral-200 bg-white p-4 lg:shadow-sm space-y-5"
    >
      {/* Filter Header */}
      <div data-name="bonus-filter-header" className="flex items-center justify-between">
        <h3 data-name="bonus-filter-title" className="text-base font-bold text-[#060D17]">Filter Bonuses</h3>
        {hasAnyFilter && (
          <button
            type="button"
            data-name="bonus-filter-reset"
            onClick={resetAll}
            className="text-xs font-medium text-blue-600 hover:underline cursor-pointer"
          >
            Reset All
          </button>
        )}
      </div>

      {/* Bonus Type */}
      <div data-name="bonus-type-section">
        <button
          type="button"
          data-name="bonus-type-toggle"
          onClick={() => setBonusTypeOpen(!bonusTypeOpen)}
          className="flex w-full items-center justify-between py-2 cursor-pointer"
        >
          <div data-name="bonus-type-label" className="flex items-center gap-2.5">
            <div data-name="bonus-type-icon" className="size-8 rounded-lg bg-[#060D17] flex items-center justify-center">
              <Trophy className="size-4 text-white" />
            </div>
            <span className="text-sm font-bold text-[#060D17]">Bonus Type</span>
          </div>
          <ChevronUp className={`size-4 text-neutral-400 transition-transform ${bonusTypeOpen ? "" : "rotate-180"}`} />
        </button>
        {bonusTypeOpen && (
          <div data-name="bonus-type-options" className="mt-1 flex flex-col">
            {BONUS_TYPES.map((item) => (
              <label
                key={item.label}
                data-name="bonus-type-option"
                className="flex items-center gap-3 py-2.5 border-t border-neutral-100 cursor-pointer"
              >
                <Checkbox
                  checked={selectedBonusTypes.includes(item.label)}
                  onCheckedChange={() => toggleBonusType(item.label)}
                />
                <span className="text-sm text-[#060D17] flex-1">{item.label}</span>
                <span className="text-sm font-bold text-blue-600">{item.count}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Bonus For */}
      <div data-name="bonus-for-section">
        <button
          type="button"
          data-name="bonus-for-toggle"
          onClick={() => setBonusForOpen(!bonusForOpen)}
          className="flex w-full items-center justify-between py-2 cursor-pointer"
        >
          <div data-name="bonus-for-label" className="flex items-center gap-2.5">
            <div data-name="bonus-for-icon" className="size-8 rounded-lg bg-[#060D17] flex items-center justify-center">
              <Gamepad2 className="size-4 text-white" />
            </div>
            <span className="text-sm font-bold text-[#060D17]">Bonus For</span>
          </div>
          <ChevronUp className={`size-4 text-neutral-400 transition-transform ${bonusForOpen ? "" : "rotate-180"}`} />
        </button>
        {bonusForOpen && (
          <div data-name="bonus-for-options" className="mt-1 flex flex-col">
            {BONUS_FOR.map((item) => (
              <label
                key={item.label}
                data-name="bonus-for-option"
                className="flex items-center gap-3 py-2.5 border-t border-neutral-100 cursor-pointer"
              >
                <Checkbox
                  checked={selectedBonusFor.includes(item.label)}
                  onCheckedChange={() => toggleBonusFor(item.label)}
                />
                <span className="text-sm text-[#060D17] flex-1">{item.label}</span>
                <span className="text-sm font-bold text-blue-600">{item.count}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Bonus Value */}
      <div data-name="bonus-value-section">
        <button
          type="button"
          data-name="bonus-value-toggle"
          onClick={() => setBonusValueOpen(!bonusValueOpen)}
          className="flex w-full items-center justify-between py-2 cursor-pointer"
        >
          <div data-name="bonus-value-label" className="flex items-center gap-2.5">
            <div data-name="bonus-value-icon" className="size-8 rounded-lg bg-[#060D17] flex items-center justify-center">
              <MessageCircle className="size-4 text-white" />
            </div>
            <span className="text-sm font-bold text-[#060D17]">Bonus Value</span>
          </div>
          <ChevronUp className={`size-4 text-neutral-400 transition-transform ${bonusValueOpen ? "" : "rotate-180"}`} />
        </button>
        {bonusValueOpen && (
          <div data-name="bonus-value-options" className="mt-2 space-y-5">
            <p className="text-sm text-neutral-500">Amount, percents, number of free</p>
            <div data-name="bonus-value-sliders" className="rounded-lg border border-neutral-200 p-4 space-y-6">
              {/* Bonus Amount */}
              <div data-name="bonus-amount-slider">
                <p className="text-sm font-medium text-[#060D17] mb-2">Bonus Amount ($)</p>
                <div data-name="bonus-amount-labels" className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-white bg-green-500 rounded px-1.5 py-0.5">${bonusAmount[0].toLocaleString()}</span>
                  <span className="text-xs font-semibold text-white bg-green-500 rounded px-1.5 py-0.5">${bonusAmount[1].toLocaleString()}</span>
                </div>
                <Slider
                  value={bonusAmount}
                  onValueChange={(v) => setBonusAmount(Array.isArray(v) ? [...v] : [v])}
                  min={0}
                  max={5000000}
                  className="[&_[data-slot=slider-range]]:bg-green-500 [&_[data-slot=slider-track]]:bg-green-500/20"
                />
              </div>

              {/* Bonus Value (%) */}
              <div data-name="bonus-percent-slider">
                <p className="text-sm font-medium text-[#060D17] mb-2">Bonus Value (%)</p>
                <div data-name="bonus-percent-labels" className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-white bg-green-500 rounded px-1.5 py-0.5">{bonusPercent[0].toLocaleString()}</span>
                  <span className="text-xs font-semibold text-white bg-green-500 rounded px-1.5 py-0.5">{bonusPercent[1].toLocaleString()}</span>
                </div>
                <Slider
                  value={bonusPercent}
                  onValueChange={(v) => setBonusPercent(Array.isArray(v) ? [...v] : [v])}
                  min={0}
                  max={5000}
                  className="[&_[data-slot=slider-range]]:bg-green-500 [&_[data-slot=slider-track]]:bg-green-500/20"
                />
              </div>

              {/* Number of free spins */}
              <div data-name="bonus-freespins-slider">
                <p className="text-sm font-medium text-[#060D17] mb-2">Number of free spin</p>
                <div data-name="bonus-freespins-labels" className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-white bg-green-500 rounded px-1.5 py-0.5">{freeSpins[0].toLocaleString()}</span>
                  <span className="text-xs font-semibold text-white bg-green-500 rounded px-1.5 py-0.5">{freeSpins[1].toLocaleString()}</span>
                </div>
                <Slider
                  value={freeSpins}
                  onValueChange={(v) => setFreeSpins(Array.isArray(v) ? [...v] : [v])}
                  min={0}
                  max={5000}
                  className="[&_[data-slot=slider-range]]:bg-green-500 [&_[data-slot=slider-track]]:bg-green-500/20"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Wagering Requirement */}
      <div data-name="wagering-section">
        <button
          type="button"
          data-name="wagering-toggle"
          onClick={() => setWageringOpen(!wageringOpen)}
          className="flex w-full items-center justify-between py-2 cursor-pointer"
        >
          <div data-name="wagering-label" className="flex items-center gap-2.5">
            <div data-name="wagering-icon" className="size-8 rounded-lg bg-[#060D17] flex items-center justify-center">
              <Shield className="size-4 text-white" />
            </div>
            <span className="text-sm font-bold text-[#060D17]">Wagering Requirement</span>
          </div>
          <ChevronUp className={`size-4 text-neutral-400 transition-transform ${wageringOpen ? "" : "rotate-180"}`} />
        </button>
        {wageringOpen && (
          <div data-name="wagering-options" className="mt-1 flex flex-col">
            {WAGERING_TYPES.map((item) => (
              <label
                key={item.label}
                data-name="wagering-option"
                className="flex items-center gap-3 py-2.5 border-t border-neutral-100 cursor-pointer"
              >
                <Checkbox
                  checked={selectedWagering.includes(item.label)}
                  onCheckedChange={() => toggleWagering(item.label)}
                />
                <span className="text-sm text-[#060D17] flex-1">{item.label}</span>
                <span className="text-sm font-bold text-blue-600">{item.count}</span>
              </label>
            ))}
            {/* Maximum WR slider */}
            <div data-name="max-wr-slider" className="mt-3 rounded-lg border border-neutral-200 p-4">
              <p className="text-sm font-medium text-neutral-500 mb-2">Maximum WR</p>
              <div data-name="max-wr-labels" className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-white bg-green-500 rounded px-1.5 py-0.5">{maxWR[0]} X</span>
                <span className="text-xs font-semibold text-white bg-green-500 rounded px-1.5 py-0.5">{maxWR[1]} X</span>
              </div>
              <Slider
                value={maxWR}
                onValueChange={(v) => setMaxWR(Array.isArray(v) ? [...v] : [v])}
                min={0}
                max={500}
                className="[&_[data-slot=slider-range]]:bg-green-500 [&_[data-slot=slider-track]]:bg-green-500/20"
              />
            </div>
          </div>
        )}
      </div>

      {/* Maximum Cashout */}
      <div data-name="cashout-section">
        <button
          type="button"
          data-name="cashout-toggle"
          onClick={() => setCashoutOpen(!cashoutOpen)}
          className="flex w-full items-center justify-between py-2 cursor-pointer"
        >
          <div data-name="cashout-label" className="flex items-center gap-2.5">
            <div data-name="cashout-icon" className="size-8 rounded-lg bg-[#060D17] flex items-center justify-center">
              <CircleDollarSign className="size-4 text-white" />
            </div>
            <span className="text-sm font-bold text-[#060D17]">Maximum Cashout</span>
          </div>
          <ChevronUp className={`size-4 text-neutral-400 transition-transform ${cashoutOpen ? "" : "rotate-180"}`} />
        </button>
        {cashoutOpen && (
          <div data-name="cashout-options" className="mt-1 flex flex-col">
            {CASHOUT_OPTIONS.map((item) => (
              <label
                key={item.label}
                data-name="cashout-option"
                className="flex items-center gap-3 py-2.5 border-t border-neutral-100 cursor-pointer"
              >
                <Checkbox
                  checked={selectedCashout.includes(item.label)}
                  onCheckedChange={() => toggleCashout(item.label)}
                />
                <span className="text-sm text-[#060D17] flex-1">{item.label}</span>
                <span className="text-sm font-bold text-blue-600">{item.count}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Bonuses for Players from */}
      <div data-name="bonus-country-section">
        <button
          type="button"
          data-name="bonus-country-toggle"
          onClick={() => setBonusCountryOpen(!bonusCountryOpen)}
          className="flex w-full items-center justify-between py-2 cursor-pointer"
        >
          <div data-name="bonus-country-label" className="flex items-center gap-2.5">
            <div data-name="bonus-country-icon" className="size-8 rounded-lg bg-[#060D17] flex items-center justify-center">
              <Globe className="size-4 text-white" />
            </div>
            <span className="text-sm font-bold text-[#060D17]">Bonuses for Players from</span>
          </div>
          <ChevronUp className={`size-4 text-neutral-400 transition-transform ${bonusCountryOpen ? "" : "rotate-180"}`} />
        </button>
        {bonusCountryOpen && (
          <div data-name="bonus-country-options" className="mt-2 flex flex-col gap-2">
            <p className="text-sm text-neutral-500">Is this your country of residence?</p>
            <div data-name="bonus-country-search" className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search filter"
                value={bonusCountrySearch}
                onChange={(e) => setBonusCountrySearch(e.target.value)}
                className="w-full rounded-lg border border-neutral-200 py-2 pl-9 pr-3 text-sm outline-none focus:border-neutral-400"
              />
            </div>
            <div data-name="bonus-country-list" className="flex flex-col max-h-[260px] overflow-y-auto" style={{ scrollbarWidth: "thin" }}>
              {filteredBonusCountries.map((country) => (
                <label
                  key={country.code}
                  data-name="bonus-country-option"
                  className="flex items-center gap-3 py-2.5 border-t border-neutral-100 cursor-pointer"
                >
                  <Checkbox
                    checked={selectedBonusCountries.includes(country.code)}
                    onCheckedChange={() => toggleBonusCountry(country.code)}
                  />
                  <span className={`fi fi-${country.code} fis size-5 shrink-0 rounded-sm`} />
                  <span className="text-sm text-[#060D17] flex-1">{country.name}</span>
                  <span className="text-sm font-bold text-blue-600">0</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Casino Card                                                        */
/* ------------------------------------------------------------------ */

function CasinoCard({ casino }: { casino: CasinoReview }) {
  const [showAllGames, setShowAllGames] = useState(false);
  const [accessOpen, setAccessOpen] = useState(false);

  const playerRatingKey = Math.min(5, Math.max(1, Math.round(casino.playerRating)));
  const playerColor = RATING_COLORS[playerRatingKey] ?? RATING_COLORS[3];
  const expertRatingKey = Math.min(5, Math.max(1, Math.round(casino.expertScore)));
  const expertColor = RATING_COLORS[expertRatingKey] ?? RATING_COLORS[3];
  const safetyStyle = SAFETY_COLORS[casino.safetyIndex] ?? SAFETY_COLORS["Normal"];

  const visibleGames = showAllGames ? casino.games : casino.games.slice(0, 7);
  const hasMoreGames = casino.games.length > 7;

  return (
    <div
      data-name="casino-review-card"
      className="rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden"
    >
      {/* Top section: Logo + Info + Safety */}
      <div data-name="casino-card-top" className="p-4 sm:p-6">
        <div data-name="casino-card-header" className="flex flex-col gap-4 sm:gap-5">
          {/* Mobile: Logo + Name row */}
          <div data-name="mobile-logo-identity" className="flex flex-row items-center gap-3 sm:hidden">
            <Link
              href={`/casino/review/${casino.slug}`}
              data-name="casino-logo-mobile"
              className="shrink-0 size-[64px] rounded-lg bg-[#060D17] flex items-center justify-center overflow-hidden border border-neutral-200"
            >
              <Image
                src={casino.logo}
                alt={casino.name}
                width={64}
                height={64}
                className="object-contain size-full"
              />
            </Link>
            <div data-name="casino-name-row" className="flex flex-col gap-1.5 min-w-0">
              <Link
                href={`/casino/review/${casino.slug}`}
                data-name="casino-name"
                className="text-base font-bold text-[#060D17] hover:underline"
              >
                {casino.name}
              </Link>
              <div
                data-name="safety-badge"
                className="flex items-center gap-1.5 rounded-md border border-neutral-200 px-2 py-1 shrink-0 self-start"
              >
                <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider">
                  Safety Index:
                </span>
                <span
                  className="px-1.5 py-0.5 rounded-full text-[10px] font-bold"
                  style={{ backgroundColor: safetyStyle.bg, color: safetyStyle.text }}
                >
                  {casino.safetyIndex}
                </span>
              </div>
            </div>
          </div>

          {/* Desktop: Logo + Info side by side */}
          <div data-name="desktop-card-header" className="hidden sm:flex flex-row gap-5">
            {/* Casino Logo */}
            <Link
              href={`/casino/review/${casino.slug}`}
              data-name="casino-logo"
              className="shrink-0 size-[200px] rounded-lg bg-[#060D17] flex items-center justify-center overflow-hidden border border-neutral-200"
            >
              <Image
                src={casino.logo}
                alt={casino.name}
                width={200}
                height={200}
                className="object-contain size-full"
              />
            </Link>

            {/* Casino Info */}
            <div data-name="casino-info" className="flex-1 min-w-0">
              <div data-name="casino-name-row" className="flex flex-row items-start justify-between gap-4">
                <Link
                  href={`/casino/review/${casino.slug}`}
                  data-name="casino-name"
                  className="text-2xl font-bold text-[#060D17] hover:underline"
                >
                  {casino.name}
                </Link>
                <div
                  data-name="safety-badge"
                  className="flex items-center gap-1.5 rounded-md border border-neutral-200 px-3 py-1.5 shrink-0 self-start"
                >
                  <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                    Safety Index:
                  </span>
                  <span
                    className="px-2 py-0.5 rounded-full text-[11px] font-bold"
                    style={{ backgroundColor: safetyStyle.bg, color: safetyStyle.text }}
                  >
                    {casino.safetyIndex}
                  </span>
                </div>
              </div>

              {/* Ratings Row (desktop) */}
              <div data-name="expert-ratings" className="flex flex-row items-start gap-6 mt-3">
              {/* Player Rating */}
              <div data-name="player-rating" className="flex items-start gap-2.5">
                <PlayerRatingIcon />
                <div data-name="player-rating-detail" className="flex flex-col gap-1">
                  <div data-name="player-score-row" className="flex items-center gap-1.5">
                    <span className="text-[23px] font-medium leading-none text-[#060d17]">
                      {casino.playerRating.toFixed(1)}
                    </span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="size-5 shrink-0">
                      <path d={STAR_BG} fill={playerColor} />
                      <path d={STAR_SHAPE} fill="white" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-[#060d17]">Player Rating</p>
                  <Link
                    href={`/casino/review/${casino.slug}#reviews`}
                    className="text-sm font-medium text-[#2563eb]"
                  >
                    {casino.playerReviews} Reviews
                  </Link>
                </div>
              </div>

              {/* Expert Score */}
              <div data-name="expert-score" className="flex items-start gap-2.5">
                <ExpertShieldIcon />
                <div data-name="expert-score-detail" className="flex flex-col gap-1">
                  <div data-name="expert-score-row" className="flex items-center gap-1.5">
                    <span className="text-[23px] font-medium leading-none text-[#060d17]">
                      {casino.expertScore.toFixed(1)}
                    </span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="size-5 shrink-0">
                      <rect width="20" height="20" rx="5" fill="#003EB6" />
                      <path
                        d="M10 4.5C7.1 4.5 4.5 5.87 4.5 5.87V10.5C4.5 13.5 7 15.2 10 16.5C13 15.2 15.5 13.5 15.5 10.5V5.87C15.5 5.87 12.9 4.5 10 4.5Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-[#060d17]">Coinbets Expert Score</p>
                  <Link
                    href={`/casino/review/${casino.slug}`}
                    className="text-sm font-medium text-[#2563eb]"
                  >
                    Independent Audit
                  </Link>
                </div>
              </div>
              </div>

              {/* Description */}
              <div data-name="casino-description" className="mt-4">
                <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] mb-1.5">
                  Description
                </h4>
                <p className="text-sm leading-relaxed text-neutral-700 line-clamp-3">
                  {casino.reviewText}
                </p>
              </div>

              {/* Pros / Cons */}
              <div data-name="casino-pros-cons" className="mt-4 flex flex-col gap-2">
                {casino.whatWeLiked.slice(0, 2).map((item, i) => (
                  <div key={i} data-name="pro-item" className="flex items-start gap-2">
                    <div data-name="pro-icon" className="size-5 rounded bg-[#167715] flex items-center justify-center shrink-0 mt-0.5">
                      <Plus className="size-3 text-white" />
                    </div>
                    <p className="text-sm text-neutral-700">{item}</p>
                  </div>
                ))}
                {casino.redFlags.slice(0, 2).map((item, i) => (
                  <div key={i} data-name="con-item" className="flex items-start gap-2">
                    <div data-name="con-icon" className="size-5 rounded bg-[#da3131] flex items-center justify-center shrink-0 mt-0.5">
                      <Minus className="size-3 text-white" />
                    </div>
                    <p className="text-sm text-neutral-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: Ratings + Description + Pros/Cons */}
          <div data-name="mobile-card-details" className="flex flex-col gap-3 sm:hidden">
            {/* Ratings Row (mobile - vertical) */}
            <div data-name="expert-ratings-mobile" className="grid grid-cols-2 gap-3">
              {/* Player Rating */}
              <div data-name="player-rating" className="flex items-start gap-2">
                <PlayerRatingIcon size={24} />
                <div data-name="player-rating-detail" className="flex flex-col gap-0.5">
                  <div data-name="player-score-row" className="flex items-center gap-1">
                    <span className="text-base font-medium leading-none text-[#060d17]">
                      {casino.playerRating.toFixed(1)}
                    </span>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="size-4 shrink-0">
                      <path d={STAR_BG} fill={playerColor} />
                      <path d={STAR_SHAPE} fill="white" />
                    </svg>
                  </div>
                  <p className="text-xs font-medium text-[#060d17]">Player Rating</p>
                  <Link
                    href={`/casino/review/${casino.slug}#reviews`}
                    className="text-xs font-medium text-[#2563eb]"
                  >
                    {casino.playerReviews} Reviews
                  </Link>
                </div>
              </div>

              {/* Expert Score */}
              <div data-name="expert-score" className="flex items-start gap-2">
                <ExpertShieldIcon size={24} />
                <div data-name="expert-score-detail" className="flex flex-col gap-0.5">
                  <div data-name="expert-score-row" className="flex items-center gap-1">
                    <span className="text-base font-medium leading-none text-[#060d17]">
                      {casino.expertScore.toFixed(1)}
                    </span>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="size-4 shrink-0">
                      <rect width="20" height="20" rx="5" fill="#003EB6" />
                      <path
                        d="M10 4.5C7.1 4.5 4.5 5.87 4.5 5.87V10.5C4.5 13.5 7 15.2 10 16.5C13 15.2 15.5 13.5 15.5 10.5V5.87C15.5 5.87 12.9 4.5 10 4.5Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <p className="text-xs font-medium text-[#060d17]">Expert Score</p>
                  <Link
                    href={`/casino/review/${casino.slug}`}
                    className="text-xs font-medium text-[#2563eb]"
                  >
                    Independent Audit
                  </Link>
                </div>
              </div>
            </div>

            {/* Description */}
            <div data-name="casino-description" className="mt-1">
              <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] mb-1">
                Description
              </h4>
              <p className="text-sm leading-relaxed text-neutral-700 line-clamp-3">
                {casino.reviewText}
              </p>
            </div>

            {/* Pros / Cons */}
            <div data-name="casino-pros-cons" className="flex flex-col gap-2">
              {casino.whatWeLiked.slice(0, 2).map((item, i) => (
                <div key={i} data-name="pro-item" className="flex items-start gap-2">
                  <div data-name="pro-icon" className="size-5 rounded bg-[#167715] flex items-center justify-center shrink-0 mt-0.5">
                    <Plus className="size-3 text-white" />
                  </div>
                  <p className="text-sm text-neutral-700">{item}</p>
                </div>
              ))}
              {casino.redFlags.slice(0, 2).map((item, i) => (
                <div key={i} data-name="con-item" className="flex items-start gap-2">
                  <div data-name="con-icon" className="size-5 rounded bg-[#da3131] flex items-center justify-center shrink-0 mt-0.5">
                    <Minus className="size-3 text-white" />
                  </div>
                  <p className="text-sm text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Available Games */}
        <div data-name="casino-games" className="mt-6">
          <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] mb-2.5">
            Available Games
          </h4>
          <div data-name="game-tags" className="flex flex-wrap gap-2">
            {visibleGames.map((game) => (
              <span
                key={game}
                data-name="game-tag"
                className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 px-3 py-1.5 text-sm text-neutral-700"
              >
                <span className="size-5 shrink-0 flex items-center justify-center [&_img]:w-5! [&_img]:h-5!">
                  {GAME_ICONS[game] ?? null}
                </span>
                {game}
              </span>
            ))}
            {hasMoreGames && !showAllGames && (
              <button
                type="button"
                onClick={() => setShowAllGames(true)}
                data-name="show-all-games"
                className="inline-flex items-center rounded-lg border border-neutral-200 px-3 py-1.5 text-sm font-medium text-neutral-600 hover:bg-neutral-50 transition-colors cursor-pointer"
              >
                Show All
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar: Crypto + Actions */}
      <div
        data-name="casino-card-bottom"
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-neutral-200 px-4 sm:px-6 py-4"
      >
        {/* Crypto accepted */}
        <div data-name="crypto-accepted" className="flex items-center gap-2">
          <span className="text-sm font-semibold text-[#060D17]">Crypto Accepted</span>
          <div data-name="crypto-icons" className="flex items-center -space-x-1">
            {casino.cryptoAccepted.slice(0, 4).map((crypto, i) => (
              <Image
                key={i}
                src={crypto.icon}
                alt={crypto.name}
                width={24}
                height={24}
                className="size-6 rounded-full border-2 border-white"
              />
            ))}
          </div>
          {casino.cryptoAccepted.length > 4 && (
            <Popover>
              <PopoverTrigger
                data-name="crypto-show-more"
                className="text-xs font-medium text-blue-600 hover:underline cursor-pointer"
              >
                Show more
              </PopoverTrigger>
              <PopoverContent data-name="crypto-dropdown" align="start" className="w-48 p-2">
                <div data-name="crypto-full-list" className="flex flex-col gap-1.5">
                  {casino.cryptoAccepted.map((crypto, i) => (
                    <div key={i} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-neutral-50">
                      <Image
                        src={crypto.icon}
                        alt={crypto.name}
                        width={20}
                        height={20}
                        className="size-5 rounded-full"
                      />
                      <span className="text-sm text-neutral-700">{crypto.name}</span>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>

        {/* Action buttons */}
        <div data-name="casino-actions" className="flex items-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            data-name="how-to-access-btn"
            onClick={() => setAccessOpen(true)}
            className="flex-1 sm:flex-none rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors cursor-pointer text-center"
          >
            How to Access
          </button>

          {/* How to Access Modal */}
          <Dialog open={accessOpen} onOpenChange={setAccessOpen}>
            <DialogContent data-name="how-to-access-modal" className="max-w-2xl p-6">
              <DialogHeader>
                <div data-name="access-modal-header" className="flex items-center gap-3">
                  <div data-name="access-lock-icon" className="size-10 flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="size-10">
                      <rect x="6" y="18" width="28" height="18" rx="3" fill="#E6B830" stroke="#C5A629" strokeWidth="1.5" />
                      <path d="M14 18V12C14 8.69 16.69 6 20 6C23.31 6 26 8.69 26 12V18" stroke="#C5A629" strokeWidth="2.5" fill="none" />
                      <circle cx="20" cy="27" r="2.5" fill="#060D17" />
                      <rect x="19" y="28" width="2" height="4" rx="1" fill="#060D17" />
                    </svg>
                  </div>
                  <div>
                    <DialogTitle className="text-xl font-bold">How To Access This Casino</DialogTitle>
                    <p className="text-sm text-neutral-500 mt-0.5">This casino may be unavailable in some regions. Here&apos;s how to find the correct website safely:</p>
                  </div>
                </div>
              </DialogHeader>

              <hr className="border-neutral-200" />

              {/* Steps */}
              <div data-name="access-steps" className="space-y-4 py-2">
                <div data-name="access-step-1" className="flex items-start gap-4">
                  <span className="shrink-0 rounded-full border border-neutral-300 px-3 py-1 text-xs font-bold text-neutral-600">Step 1</span>
                  <div>
                    <p className="font-semibold text-sm">Open a new tab and search</p>
                    <p className="text-sm text-neutral-500">&quot;[{casino.name} Official Site]&quot;</p>
                  </div>
                </div>
                <div data-name="access-step-2" className="flex items-start gap-4">
                  <span className="shrink-0 rounded-full border border-neutral-300 px-3 py-1 text-xs font-bold text-neutral-600">Step 2</span>
                  <div>
                    <p className="font-semibold text-sm">Make sure the domain matches the official version shown below:</p>
                  </div>
                </div>
              </div>

              <hr className="border-neutral-200" />

              {/* Info notices */}
              <div data-name="access-notices" className="space-y-3 py-2">
                <div className="flex items-start gap-2.5">
                  <span className="text-lg leading-none">&#9989;</span>
                  <p className="text-sm text-neutral-700">This is the verified domain we used at the time of review.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-lg leading-none">&#8505;&#65039;</span>
                  <p className="text-sm text-neutral-700">If the site doesn&apos;t load, it may be unavailable in your region due to local restrictions. For more info, visit our Safe Access Guide.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-lg leading-none">&#9888;&#65039;</span>
                  <p className="text-sm text-neutral-700">Always double-check before signing up or depositing. Scam copies exist.</p>
                </div>
              </div>

              <hr className="border-neutral-200" />

              {/* Disclaimer */}
              <p data-name="access-disclaimer" className="text-xs text-neutral-500">
                <span className="font-semibold text-neutral-700">Disclaimer:</span> We are not affiliated with this casino. We do not receive money or commission. This is for informational purposes only.
              </p>

              {/* Action buttons */}
              <div data-name="access-modal-actions" className="flex gap-3 mt-2">
                <button
                  type="button"
                  onClick={() => setAccessOpen(false)}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-5 py-3 text-sm font-semibold text-black hover:bg-yellow-500 transition-colors cursor-pointer"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.3 4.7a1 1 0 0 0-1.4-1.4L6 9.17 4.1 7.3a1 1 0 0 0-1.4 1.4l2.6 2.6a1 1 0 0 0 1.4 0l6.6-6.6Z" fill="currentColor"/></svg>
                  Got it
                </button>
                <Link
                  href="/guides"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 3a1 1 0 0 1 1-1h4.5a1 1 0 0 1 .7.3L8.9 3H13a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3Z" fill="currentColor"/></svg>
                  Safe Access Guide
                </Link>
              </div>
            </DialogContent>
          </Dialog>
          <Link
            href={`/casino/review/${casino.slug}`}
            data-name="read-reviews-btn"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-black hover:bg-yellow-500 transition-colors"
          >
            Read Reviews
            <ChevronRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Bonus Detail Row (collapsible)                                     */
/* ------------------------------------------------------------------ */

function BonusDetailRow({
  icon,
  label,
  summary,
  children,
  highlight,
}: {
  icon: React.ReactNode;
  label: string;
  summary?: string;
  children?: React.ReactNode;
  highlight?: "red" | "green";
}) {
  const [open, setOpen] = useState(false);
  const hasContent = !!children;

  const bgClass =
    highlight === "red"
      ? "bg-red-50"
      : highlight === "green"
        ? "bg-green-50"
        : "";

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger
        data-name="bonus-detail-trigger"
        className={`flex w-full items-center justify-between gap-3 px-4 py-3 text-left border-b border-neutral-100 transition-colors ${
          hasContent ? "cursor-pointer hover:bg-neutral-50" : "cursor-default"
        } ${bgClass}`}
      >
        <div data-name="bonus-detail-label" className="flex items-center gap-2.5 min-w-0">
          <span data-name="bonus-detail-icon" className="shrink-0 text-neutral-500">{icon}</span>
          <span className="text-sm font-medium text-[#060D17]">{label}</span>
          {summary && (
            <span className="text-sm text-neutral-500">{summary}</span>
          )}
        </div>
        {hasContent && (
          <ChevronUp
            className={`size-4 shrink-0 text-neutral-400 transition-transform ${
              open ? "" : "rotate-180"
            }`}
          />
        )}
      </CollapsibleTrigger>
      {hasContent && (
        <CollapsibleContent>
          <div data-name="bonus-detail-content" className="px-4 py-3 text-sm leading-relaxed text-neutral-600 border-b border-neutral-100 bg-neutral-50/50">
            {children}
          </div>
        </CollapsibleContent>
      )}
    </Collapsible>
  );
}

/* ------------------------------------------------------------------ */
/*  Bonus Casino Card                                                  */
/* ------------------------------------------------------------------ */

function BonusCasinoCard({ casino }: { casino: CasinoReview }) {
  const [votes, setVotes] = useState({ up: 1, down: 0 });
  const [voted, setVoted] = useState<"up" | "down" | null>(null);

  const playerRatingKey = Math.min(5, Math.max(1, Math.round(casino.playerRating)));
  const playerColor = RATING_COLORS[playerRatingKey] ?? RATING_COLORS[3];
  const expertRatingKey = Math.min(5, Math.max(1, Math.round(casino.expertScore)));

  const bonus = casino.bonusDetails;

  const handleVote = (type: "up" | "down") => {
    if (voted === type) return;
    setVotes((prev) => ({
      up: type === "up" ? prev.up + 1 : voted === "up" ? prev.up - 1 : prev.up,
      down: type === "down" ? prev.down + 1 : voted === "down" ? prev.down - 1 : prev.down,
    }));
    setVoted(type);
  };

  return (
    <div
      data-name="bonus-casino-card"
      className="rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden"
    >
      {/* Top section: Logo + Ratings */}
      <div data-name="casino-card-top" className="p-4 sm:p-6">
        <div data-name="casino-card-header" className="flex flex-col sm:flex-row gap-4 sm:gap-5">
          {/* Casino Logo */}
          <Link
            href={`/casino/review/${casino.slug}`}
            data-name="casino-logo"
            className="shrink-0 size-[100px] sm:size-[120px] rounded-lg bg-[#060D17] flex items-center justify-center overflow-hidden border border-neutral-200"
          >
            <Image
              src={casino.logo}
              alt={casino.name}
              width={120}
              height={120}
              className="object-contain size-full"
            />
          </Link>

          {/* Casino Info */}
          <div data-name="casino-info" className="flex-1 min-w-0">
            <Link
              href={`/casino/review/${casino.slug}`}
              data-name="casino-name"
              className="text-xl sm:text-2xl font-bold text-[#060D17] hover:underline"
            >
              {casino.name}
            </Link>

            {/* Ratings Row */}
            <div data-name="bonus-ratings" className="flex flex-row items-start gap-6 mt-3">
              {/* Player Rating */}
              <div data-name="player-rating" className="flex items-start gap-2">
                <PlayerRatingIcon size={24} />
                <div data-name="player-rating-detail" className="flex flex-col gap-0.5">
                  <div data-name="player-score-row" className="flex items-center gap-1">
                    <span className="text-lg font-medium leading-none text-[#060d17]">
                      {casino.playerRating.toFixed(1)}
                    </span>
                    <div data-name="rating-stars" className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} width="16" height="16" viewBox="0 0 20 20" fill="none" className="size-4 shrink-0">
                          <path d={STAR_BG} fill={star <= playerRatingKey ? playerColor : "#DDDDDD"} />
                          <path d={STAR_SHAPE} fill="white" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs font-medium text-[#060d17]">Player Rating</p>
                  <Link
                    href={`/casino/review/${casino.slug}#reviews`}
                    className="text-xs font-medium text-[#2563eb]"
                  >
                    {casino.playerReviews} Reviews
                  </Link>
                </div>
              </div>

              {/* Expert Score */}
              <div data-name="expert-score" className="flex items-start gap-2">
                <ExpertShieldIcon size={24} />
                <div data-name="expert-score-detail" className="flex flex-col gap-0.5">
                  <div data-name="expert-score-row" className="flex items-center gap-1">
                    <span className="text-lg font-medium leading-none text-[#060d17]">
                      {casino.expertScore.toFixed(1)}
                    </span>
                    <div data-name="expert-shields" className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((shield) => (
                        <svg key={shield} width="16" height="16" viewBox="0 0 20 20" fill="none" className="size-4 shrink-0">
                          <rect width="20" height="20" rx="5" fill={shield <= expertRatingKey ? "#003EB6" : "#DDDDDD"} />
                          <path
                            d="M10 4.5C7.1 4.5 4.5 5.87 4.5 5.87V10.5C4.5 13.5 7 15.2 10 16.5C13 15.2 15.5 13.5 15.5 10.5V5.87C15.5 5.87 12.9 4.5 10 4.5Z"
                            fill="white"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs font-medium text-[#060d17]">Coinbets Expert Score</p>
                  <Link
                    href={`/casino/review/${casino.slug}`}
                    className="text-xs font-medium text-[#2563eb]"
                  >
                    Independent Audit
                  </Link>
                </div>
              </div>
            </div>

            {/* Bonus Banner */}
            <div
              data-name="bonus-banner"
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-lg bg-green-500/10 px-4 sm:px-5 py-3.5 mt-4"
            >
              <p data-name="bonus-text" className="text-base sm:text-lg font-semibold text-[#060D17]">
                {casino.bonus}
              </p>
              <Link
                href={`/casino/review/${casino.slug}`}
                data-name="bonus-info-btn"
              >
                <ShimmerButton
                  shimmerColor="#ffffff"
                  shimmerDuration="2.5s"
                  background="rgba(22, 163, 74, 1)"
                  borderRadius="8px"
                  className="px-5 py-2 text-sm font-semibold border-green-500/30"
                >
                  Bonus Info
                </ShimmerButton>
              </Link>
            </div>

            {/* Bonus Details — Collapsible Sections */}
            {bonus && (
              <div data-name="bonus-details-section" className="mt-4">
                <BonusDetailRow
                  icon={<Calendar className="size-4" />}
                  label={bonus.type}
                >
                  <p>{bonus.description}</p>
                </BonusDetailRow>

                <BonusDetailRow
                  icon={<CircleDollarSign className="size-4" />}
                  label={`Min Deposit: ${bonus.minDeposit}`}
                  summary={`Max Deposit: ${bonus.maxDeposit}`}
                >
                  <p>{bonus.depositDescription}</p>
                </BonusDetailRow>

                <BonusDetailRow
                  icon={<Gamepad2 className="size-4" />}
                  label={`Wagering Requirement: ${bonus.wageringRequirement}`}
                >
                  <p>{bonus.wageringDescription}</p>
                </BonusDetailRow>

                <BonusDetailRow
                  icon={<Clock className="size-4" />}
                  label={`Bonus Timing: ${bonus.bonusTiming}`}
                >
                  <p>{bonus.timingDescription}</p>
                </BonusDetailRow>

                <BonusDetailRow
                  icon={<ShieldCheck className="size-4" />}
                  label={`VPN Allowed : ${bonus.vpnAllowed ? "Yes" : "No"}`}
                  highlight={bonus.vpnAllowed ? "green" : "red"}
                >
                  {null}
                </BonusDetailRow>

                <BonusDetailRow
                  icon={<Info className="size-4" />}
                  label="Terms and Conditions"
                >
                  {bonus.termsAndConditions.split("\n\n").map((p, i) => (
                    <p key={i} className={i > 0 ? "mt-3" : ""}>
                      {p}
                    </p>
                  ))}
                </BonusDetailRow>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Has this Bonus Worked for you? */}
      <div
        data-name="bonus-vote-section"
        className="flex items-center justify-between gap-4 px-4 sm:px-6 py-4 border-t border-neutral-200"
      >
        <p data-name="bonus-vote-label" className="text-sm font-medium text-[#060D17]">
          Has this Bonus Worked for you?
        </p>
        <div data-name="bonus-vote-actions" className="flex items-center gap-2">
          <button
            type="button"
            data-name="bonus-vote-up"
            onClick={() => handleVote("up")}
            className={`flex items-center justify-center size-9 rounded-lg border transition-colors cursor-pointer ${
              voted === "up"
                ? "border-green-500 bg-green-50 text-green-600"
                : "border-neutral-200 text-neutral-500 hover:bg-neutral-50"
            }`}
          >
            <ThumbsUp className="size-4" />
          </button>
          <span data-name="bonus-vote-count" className="text-sm font-medium text-neutral-500 min-w-[24px] text-center">
            ({votes.up})
          </span>
          <button
            type="button"
            data-name="bonus-vote-down"
            onClick={() => handleVote("down")}
            className={`flex items-center justify-center size-9 rounded-lg border transition-colors cursor-pointer ${
              voted === "down"
                ? "border-red-500 bg-red-50 text-red-600"
                : "border-neutral-200 text-neutral-500 hover:bg-neutral-50"
            }`}
          >
            <ThumbsDown className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export function CasinoReviewList({ title = "Casino Reviews", variant = "default" }: { title?: string; variant?: "default" | "bonus" }) {
  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Top Rated");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCasinos = searchQuery.trim()
    ? casinoReviews.filter((c) =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : casinoReviews;

  return (
    <section
      data-section="casino-review-list"
      className="mx-auto max-w-[1200px] px-4 sm:px-5 py-6 sm:py-8"
    >
      <div data-name="casino-list-layout" className="flex flex-col lg:flex-row gap-8">
        {/* Left: Casino Cards */}
        <div data-name="casino-list-main" className="flex-1 flex flex-col gap-6">
          {/* Header + sort + search */}
          <div data-name="casino-list-header" className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
            <h2 data-name="casino-list-title" className="text-xl font-bold text-[#060D17]">
              {title}
            </h2>
            <div data-name="casino-list-actions" className="flex items-center gap-2">
              {/* Search */}
              <div
                data-name="casino-search"
                className="hidden sm:flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2"
              >
                <Search className="size-4 text-neutral-400 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search casinos..."
                  className="w-[160px] bg-transparent text-sm text-[#060D17] placeholder:text-neutral-400 outline-none"
                />
              </div>

              {/* Mobile filter button */}
              <Sheet>
                <SheetTrigger>
                  <div
                    data-name="mobile-filter-trigger"
                    className="lg:hidden flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-[#060D17] hover:bg-neutral-50 transition-colors cursor-pointer"
                  >
                    <SlidersHorizontal className="size-4" />
                    Filters
                  </div>
                </SheetTrigger>
                <SheetContent side="right" className="w-[320px] overflow-y-auto p-0">
                  <SheetHeader className="px-4 pt-4 pb-2">
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="px-4 pb-4 space-y-6">
                    {variant === "bonus" && <BonusFilterSidebar />}
                    <FilterSidebar />
                  </div>
                </SheetContent>
              </Sheet>

              {/* Sort */}
              <Popover open={sortOpen} onOpenChange={setSortOpen}>
                <PopoverTrigger>
                  <div
                    data-name="casino-list-sort"
                    className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-[#060D17] hover:bg-neutral-50 transition-colors cursor-pointer"
                  >
                    {sortBy}
                    <ChevronDown className="size-4 text-neutral-500" />
                  </div>
                </PopoverTrigger>
                <PopoverContent data-name="sort-dropdown" align="end" className="w-[180px] p-1">
                  {["Top Rated", "Most Reviewed", "Newest", "Safest"].map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSortBy(option);
                        setSortOpen(false);
                      }}
                      className={`flex w-full items-center rounded-md px-3 py-2 text-sm transition-colors ${
                        sortBy === option
                          ? "bg-neutral-100 font-semibold text-[#060D17]"
                          : "text-neutral-600 hover:bg-neutral-50"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Casino cards */}
          {filteredCasinos.map((casino) =>
            variant === "bonus" ? (
              <BonusCasinoCard key={casino.slug} casino={casino} />
            ) : (
              <CasinoCard key={casino.slug} casino={casino} />
            )
          )}
        </div>

        {/* Right: Filter sidebar — desktop only */}
        <div data-name="casino-list-sidebar" className="hidden lg:block w-[360px] shrink-0">
          <div className="sticky top-24 space-y-6 lg:max-h-[calc(100vh-100px)] lg:overflow-y-auto" style={{ scrollbarWidth: "thin" }}>
            {variant === "bonus" && <BonusFilterSidebar />}
            <FilterSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}

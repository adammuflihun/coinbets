export interface CasinoReview {
  slug: string;
  name: string;
  logo: string;
  playerRating: number;
  playerReviews: number;
  expertScore: number;
  views: string;
  safetyIndex: "High" | "Normal";
  reviewTitle: string;
  reviewText: string;
  whatWeLiked: string[];
  redFlags: string[];
  cryptoAccepted: { icon: string; name: string }[];
  bonus: string;
  screenshots: string[];
}

export const casinoReviews: CasinoReview[] = [
  {
    slug: "stake",
    name: "Stake",
    logo: "/casino-index/Logo-stake.svg",
    playerRating: 3.0,
    playerReviews: 374,
    expertScore: 2.9,
    views: "20K+",
    safetyIndex: "Normal",
    reviewTitle: "Stake Review",
    reviewText:
      "Stake launched in 2017 as one of the first crypto-native casinos, quickly becoming a leader in the space. With thousands of games from 70+ providers, it supports provably fair gaming and offers a seamless crypto experience. Plenty of crypto options — BTC, ETH, SOL, DOGE, and more — but don't expect fiat. While Stake boasts a strong VIP program and fast payouts, its unlicensed status and geo-restrictions raise eyebrows. Can you trust the biggest name in crypto gambling?",
    whatWeLiked: [
      "6,300+ games and real-time RTP tracking",
      "Great unique In-house provably fair titles",
      "Good reputation among players",
    ],
    redFlags: [
      "No welcome bonus",
      "Bonus categories and filters are lacking",
      "Limited responsible gambling tools",
    ],
    cryptoAccepted: [
      { icon: "/hero/coin-btc.png", name: "Bitcoin (BTC)" },
      { icon: "/hero/coin-usdt.png", name: "Ethereum (ETH)" },
      { icon: "/hero/coin-usdt.png", name: "USDT Tether (USDT)" },
      { icon: "/hero/coin-sol.png", name: "USDC (USDC)" },
      { icon: "/hero/coin-sol.png", name: "Solana (SOL)" },
      { icon: "/hero/coin-link.png", name: "TRON (TRX)" },
      { icon: "/hero/coin-avax.png", name: "Dogecoin (DOGE)" },
      { icon: "/hero/coin-sol.png", name: "Sui (SUI)" },
      { icon: "/hero/coin-xlm.png", name: "XRP (Ripple)" },
      { icon: "/hero/coin-link.png", name: "Litecoin (LTC)" },
    ],
    bonus: "300% up to $3,000",
    screenshots: [
      "/hero/casino-1.png",
      "/hero/casino-2.png",
      "/hero/casino-3.png",
      "/hero/casino-4.png",
    ],
  },
  {
    slug: "roobet",
    name: "Roobet",
    logo: "/casino-index/logo-roobet.svg",
    playerRating: 4.2,
    playerReviews: 512,
    expertScore: 3.8,
    views: "15K+",
    safetyIndex: "High",
    reviewTitle: "Roobet Review",
    reviewText:
      "Roobet has carved out a solid reputation as a crypto-first casino with instant deposits and low minimums. Known for its provably fair games and sleek interface, Roobet appeals to players who value transparency. The VIP program offers dedicated support and exclusive bonuses, though country availability remains limited. With a growing game library and responsive customer support, Roobet continues to attract crypto gambling enthusiasts worldwide.",
    whatWeLiked: [
      "Instant crypto deposits with low minimums",
      "Provably fair gaming selection",
      "VIP program with dedicated support",
      "Clean, modern user interface",
      "Fast withdrawal processing",
    ],
    redFlags: [
      "Limited country availability",
      "No fiat currency support",
      "Smaller game library compared to competitors",
    ],
    cryptoAccepted: [
      { icon: "/hero/coin-btc.png", name: "Bitcoin (BTC)" },
      { icon: "/hero/coin-usdt.png", name: "Ethereum (ETH)" },
      { icon: "/hero/coin-usdt.png", name: "USDT Tether (USDT)" },
      { icon: "/hero/coin-sol.png", name: "Solana (SOL)" },
      { icon: "/hero/coin-ada.png", name: "Cardano (ADA)" },
      { icon: "/hero/coin-link.png", name: "Litecoin (LTC)" },
      { icon: "/hero/coin-avax.png", name: "Dogecoin (DOGE)" },
      { icon: "/hero/coin-xlm.png", name: "XRP (Ripple)" },
    ],
    bonus: "200% up to $1,000",
    screenshots: [
      "/hero/casino-1.png",
      "/hero/casino-2.png",
      "/hero/casino-3.png",
      "/hero/casino-4.png",
    ],
  },
];

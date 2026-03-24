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
    logo: "/casino-index/logo-stake.svg",
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
    slug: "menace",
    name: "Menace",
    logo: "/casino-index/logo-menace.svg",
    playerRating: 4.5,
    playerReviews: 289,
    expertScore: 4.1,
    views: "12K+",
    safetyIndex: "High",
    reviewTitle: "Menace Review",
    reviewText:
      "Menace has quickly risen through the ranks as a crypto casino that puts player experience first. With a sleek, modern interface and a curated selection of high-quality games, Menace appeals to both newcomers and seasoned gamblers. The platform supports a wide range of cryptocurrencies and offers near-instant withdrawals. Their generous welcome bonus and active community set them apart, though the relatively small game library may leave variety-seekers wanting more.",
    whatWeLiked: [
      "Generous welcome bonus with fair wagering requirements",
      "Near-instant crypto withdrawals",
      "Active community and regular promotions",
    ],
    redFlags: [
      "Smaller game library compared to established platforms",
      "Limited live dealer options",
      "Newer platform with less track record",
    ],
    cryptoAccepted: [
      { icon: "/hero/coin-btc.png", name: "Bitcoin (BTC)" },
      { icon: "/hero/coin-usdt.png", name: "Ethereum (ETH)" },
      { icon: "/hero/coin-usdt.png", name: "USDT Tether (USDT)" },
      { icon: "/hero/coin-sol.png", name: "Solana (SOL)" },
      { icon: "/hero/coin-avax.png", name: "Dogecoin (DOGE)" },
      { icon: "/hero/coin-link.png", name: "Litecoin (LTC)" },
    ],
    bonus: "200% up to $2,000",
    screenshots: [
      "/hero/casino-1.png",
      "/hero/casino-2.png",
      "/hero/casino-3.png",
      "/hero/casino-4.png",
    ],
  },
  {
    slug: "shuffle",
    name: "Shuffle",
    logo: "/casino-index/logo-shuffle.svg",
    playerRating: 4.3,
    playerReviews: 631,
    expertScore: 4.0,
    views: "18K+",
    safetyIndex: "High",
    reviewTitle: "Shuffle Review",
    reviewText:
      "Shuffle has made waves in the crypto gambling space with its transparent approach and player-first mentality. Backed by a strong team and solid licensing, Shuffle offers thousands of slots, table games, and live dealer options. The platform's unique reward system lets players earn as they play, and its lightning-fast payouts have earned rave reviews. However, some regions remain restricted, and the sportsbook offering is still catching up to competitors.",
    whatWeLiked: [
      "Transparent reward system with real value",
      "Lightning-fast crypto payouts",
      "Strong licensing and security measures",
      "Wide variety of slots and live games",
    ],
    redFlags: [
      "Sportsbook still maturing compared to rivals",
      "Some geo-restrictions apply",
      "VIP program details not fully transparent",
    ],
    cryptoAccepted: [
      { icon: "/hero/coin-btc.png", name: "Bitcoin (BTC)" },
      { icon: "/hero/coin-usdt.png", name: "Ethereum (ETH)" },
      { icon: "/hero/coin-usdt.png", name: "USDT Tether (USDT)" },
      { icon: "/hero/coin-sol.png", name: "USDC (USDC)" },
      { icon: "/hero/coin-sol.png", name: "Solana (SOL)" },
      { icon: "/hero/coin-link.png", name: "TRON (TRX)" },
      { icon: "/hero/coin-avax.png", name: "Dogecoin (DOGE)" },
      { icon: "/hero/coin-xlm.png", name: "XRP (Ripple)" },
    ],
    bonus: "250% up to $1,500",
    screenshots: [
      "/hero/casino-1.png",
      "/hero/casino-2.png",
      "/hero/casino-3.png",
      "/hero/casino-4.png",
    ],
  },
  {
    slug: "bitsler",
    name: "Bitsler",
    logo: "/casino-index/logo-bitsler.svg",
    playerRating: 3.8,
    playerReviews: 445,
    expertScore: 3.5,
    views: "10K+",
    safetyIndex: "Normal",
    reviewTitle: "Bitsler Review",
    reviewText:
      "Bitsler has been a staple in the crypto gambling scene since 2015, offering a mix of in-house provably fair games and third-party slots. The platform supports over 20 cryptocurrencies and features a unique social experience with built-in chat and community events. Bitsler's dice and crash games are fan favorites, and the faucet system lets new players try games risk-free. While the UI feels dated compared to newer platforms, the reliability and game fairness keep players coming back.",
    whatWeLiked: [
      "Wide cryptocurrency support with 20+ coins",
      "Provably fair in-house games",
      "Free faucet for new players",
      "Active social community with chat",
    ],
    redFlags: [
      "Dated user interface design",
      "Limited third-party game selection",
      "Slower customer support response times",
    ],
    cryptoAccepted: [
      { icon: "/hero/coin-btc.png", name: "Bitcoin (BTC)" },
      { icon: "/hero/coin-usdt.png", name: "Ethereum (ETH)" },
      { icon: "/hero/coin-usdt.png", name: "USDT Tether (USDT)" },
      { icon: "/hero/coin-sol.png", name: "Solana (SOL)" },
      { icon: "/hero/coin-link.png", name: "Litecoin (LTC)" },
      { icon: "/hero/coin-avax.png", name: "Dogecoin (DOGE)" },
      { icon: "/hero/coin-xlm.png", name: "XRP (Ripple)" },
    ],
    bonus: "100% up to $700",
    screenshots: [
      "/hero/casino-1.png",
      "/hero/casino-2.png",
      "/hero/casino-3.png",
      "/hero/casino-4.png",
    ],
  },
  {
    slug: "thrill",
    name: "Thrill",
    logo: "/casino-index/logo-thrill.svg",
    playerRating: 4.7,
    playerReviews: 218,
    expertScore: 4.3,
    views: "8K+",
    safetyIndex: "High",
    reviewTitle: "Thrill Review",
    reviewText:
      "Thrill is a newer entrant to the crypto casino market that has quickly gained a reputation for its polished experience and generous promotions. The platform features a carefully curated game library with titles from top providers, along with exclusive Thrill originals. Fast deposits and withdrawals, combined with a rewarding VIP tier system, make it a strong choice for crypto gamblers. The platform's focus on responsible gambling and transparent operations earns it high marks from our review team.",
    whatWeLiked: [
      "Polished, modern user experience",
      "Generous VIP tier system with real rewards",
      "Fast crypto deposits and withdrawals",
      "Strong focus on responsible gambling",
    ],
    redFlags: [
      "Newer platform with limited track record",
      "Smaller community compared to established casinos",
      "Limited sportsbook options",
    ],
    cryptoAccepted: [
      { icon: "/hero/coin-btc.png", name: "Bitcoin (BTC)" },
      { icon: "/hero/coin-usdt.png", name: "Ethereum (ETH)" },
      { icon: "/hero/coin-usdt.png", name: "USDT Tether (USDT)" },
      { icon: "/hero/coin-sol.png", name: "USDC (USDC)" },
      { icon: "/hero/coin-sol.png", name: "Solana (SOL)" },
      { icon: "/hero/coin-link.png", name: "TRON (TRX)" },
    ],
    bonus: "350% up to $3,500",
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
  {
    slug: "gamdom",
    name: "Gamdom",
    logo: "/casino-index/logo-gamedom.svg",
    playerRating: 3.9,
    playerReviews: 687,
    expertScore: 3.6,
    views: "22K+",
    safetyIndex: "Normal",
    reviewTitle: "Gamdom Review",
    reviewText:
      "Gamdom has been a prominent name in crypto gambling since 2016, known for its provably fair crash game and extensive esports betting options. The platform offers a solid mix of casino games and sports betting, with a particularly strong CS2 skin gambling section. Gamdom's Rain feature and active chat community create an engaging social atmosphere. While the platform has matured significantly over the years, some users report inconsistent customer support and complex bonus terms.",
    whatWeLiked: [
      "Extensive esports and CS2 skin betting",
      "Provably fair crash game with great mechanics",
      "Active community with Rain rewards",
      "Good mix of casino and sportsbook",
    ],
    redFlags: [
      "Complex bonus wagering requirements",
      "Inconsistent customer support quality",
      "Interface can feel cluttered for new users",
    ],
    cryptoAccepted: [
      { icon: "/hero/coin-btc.png", name: "Bitcoin (BTC)" },
      { icon: "/hero/coin-usdt.png", name: "Ethereum (ETH)" },
      { icon: "/hero/coin-usdt.png", name: "USDT Tether (USDT)" },
      { icon: "/hero/coin-sol.png", name: "USDC (USDC)" },
      { icon: "/hero/coin-sol.png", name: "Solana (SOL)" },
      { icon: "/hero/coin-link.png", name: "Litecoin (LTC)" },
      { icon: "/hero/coin-avax.png", name: "Dogecoin (DOGE)" },
      { icon: "/hero/coin-xlm.png", name: "XRP (Ripple)" },
      { icon: "/hero/coin-link.png", name: "TRON (TRX)" },
    ],
    bonus: "150% up to $1,000",
    screenshots: [
      "/hero/casino-1.png",
      "/hero/casino-2.png",
      "/hero/casino-3.png",
      "/hero/casino-4.png",
    ],
  },
];

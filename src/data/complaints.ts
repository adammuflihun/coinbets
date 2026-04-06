export type ComplaintStatus = "resolved" | "unresolved" | "opened" | "rejected";

export interface ComplaintDetailData {
  id: string;
  slug: string;
  title: string;
  disputedAmount: string;
  postedDate: string;
  status: ComplaintStatus;
  verdictText: string;
  submittedDate: string;
  verdictDate: string;
  views: number;
  content: string;
  author: {
    name: string;
    rank: string;
    rankColor: string;
    postCount: number;
    countryCode: string;
    isOnline: boolean;
  };
  casino: {
    name: string;
    slug: string;
    logo: string;
    safetyIndex: string;
    playerRating: number;
    playerReviews: number;
    expertScore: number;
  };
  caseSummary: {
    text: string;
    postedTime: string;
    writtenBy: string;
    specialistName: string;
    specialistTitle: string;
  };
}

export const complaints: ComplaintDetailData[] = [
  {
    id: "1",
    slug: "clubhouse-casino-network-errors",
    title:
      "The Clubhouse Casino - Player experiencing network errors during high-stake games.",
    disputedAmount: "\u20AC4,000",
    postedDate: "Posted Thursday \u2013 06:18 PM",
    status: "resolved",
    verdictText: "Player stopped responding",
    submittedDate: "06 Feb 2025",
    verdictDate: "16 Feb 2025",
    views: 233736,
    content:
      "Hello there. I really like to see when players like you are trying to collect information to avoid any complications and to play at more safer and trustworthy casinos. While choosing the best casino for you, you should firstly be sure whether the casino meets the most important parameters, like accepting players from the country you live in and the reputation of the casino for fair gaming and paying out winnings. Secondly, you can choose a casino according to the availability of customer support in your language, attractiveness of the casino\u2019s website design or according to their selection of games.\n\nWe try to list casinos that have most of these characteristics on our list of online casinos. Feel free to use our list of casinos with advanced filtering functionality to find the best online casino for you. On our site you will find many very useful guides, you can have read on, to get as many information about the online world. You could start with these links, for example:",
    author: {
      name: "Chris",
      rank: "Rookie Bettor",
      rankColor: "#cb632a",
      postCount: 8280,
      countryCode: "gb",
      isOnline: true,
    },
    casino: {
      name: "Lucky Block",
      slug: "lucky-block",
      logo: "/casino-index/logo-Lucky-block.svg",
      safetyIndex: "High",
      playerRating: 5.0,
      playerReviews: 128,
      expertScore: 4.8,
    },
    caseSummary: {
      text: "A player from Ireland was playing blackjack on the casino site with high bets. He was repeatedly kicked out from the game four times in a row, each of which resulted in a loss. We closed the complaint because the player stopped responding.",
      postedTime: "Posted Thursday \u2013 06:18 PM",
      writtenBy: "Tomas",
      specialistName: "Thomas",
      specialistTitle: "Complaint Specialist",
    },
  },
  {
    id: "2",
    slug: "clubhouse-casino-withdrawal-delay",
    title:
      "The Clubhouse Casino - Withdrawal pending for 3 weeks with no response from support.",
    disputedAmount: "\u20AC2,500",
    postedDate: "Posted Monday \u2013 11:42 AM",
    status: "unresolved",
    verdictText: "Casino non response",
    submittedDate: "12 Jan 2025",
    verdictDate: "28 Jan 2025",
    views: 156890,
    content:
      "I have been waiting for my withdrawal for over three weeks now. I submitted a withdrawal request on January 5th and it has been stuck in \u201Cpending\u201D status ever since. I have contacted support multiple times through live chat and email, but have received no meaningful response.\n\nThe support team keeps telling me to wait, but provides no timeline or explanation for the delay. My account is fully verified and I have provided all required documents. This is completely unacceptable and I believe the casino is intentionally delaying my withdrawal.",
    author: {
      name: "Sarah",
      rank: "Experienced Player",
      rankColor: "#2563eb",
      postCount: 3450,
      countryCode: "de",
      isOnline: false,
    },
    casino: {
      name: "Lucky Block",
      slug: "lucky-block",
      logo: "/casino-index/logo-Lucky-block.svg",
      safetyIndex: "High",
      playerRating: 5.0,
      playerReviews: 128,
      expertScore: 4.8,
    },
    caseSummary: {
      text: "A player from Germany submitted a withdrawal request that remained pending for over three weeks. Despite multiple contacts with customer support, no resolution was provided. The casino failed to respond to our mediation requests.",
      postedTime: "Posted Monday \u2013 11:42 AM",
      writtenBy: "Elena",
      specialistName: "Elena",
      specialistTitle: "Complaint Specialist",
    },
  },
  {
    id: "3",
    slug: "clubhouse-casino-bonus-terms",
    title:
      "The Clubhouse Casino - Bonus terms changed after deposit was made.",
    disputedAmount: "\u20AC1,200",
    postedDate: "Posted Wednesday \u2013 03:55 PM",
    status: "opened",
    verdictText: "Waiting for a delayed payment",
    submittedDate: "20 Feb 2025",
    verdictDate: "",
    views: 89420,
    content:
      "I deposited \u20AC400 to claim the 300% welcome bonus at The Clubhouse Casino. At the time of my deposit, the wagering requirement was clearly stated as 35x. However, after making my deposit and receiving the bonus, I noticed that the wagering requirement had been changed to 60x without any prior notice.\n\nThis change makes it virtually impossible to meet the requirements and withdraw any winnings. I believe this constitutes unfair practice and I would like my original deposit returned.",
    author: {
      name: "Miguel",
      rank: "Rookie Bettor",
      rankColor: "#cb632a",
      postCount: 1205,
      countryCode: "pt",
      isOnline: true,
    },
    casino: {
      name: "Lucky Block",
      slug: "lucky-block",
      logo: "/casino-index/logo-Lucky-block.svg",
      safetyIndex: "High",
      playerRating: 5.0,
      playerReviews: 128,
      expertScore: 4.8,
    },
    caseSummary: {
      text: "A player from Portugal claimed that the casino changed the wagering requirements on their welcome bonus after the deposit was made. The case is currently under investigation pending a response from the casino.",
      postedTime: "Posted Wednesday \u2013 03:55 PM",
      writtenBy: "Marco",
      specialistName: "Marco",
      specialistTitle: "Complaint Specialist",
    },
  },
  {
    id: "4",
    slug: "clubhouse-casino-account-closed",
    title:
      "The Clubhouse Casino - Account closed without explanation, funds still held.",
    disputedAmount: "\u20AC7,800",
    postedDate: "Posted Friday \u2013 09:30 AM",
    status: "rejected",
    verdictText: "Insufficient evidence from player",
    submittedDate: "01 Mar 2025",
    verdictDate: "15 Mar 2025",
    views: 45230,
    content:
      "My account at The Clubhouse Casino was suddenly closed without any explanation. I had a balance of \u20AC7,800 at the time, which included both deposits and winnings. When I tried to log in, I received a message saying my account had been suspended.\n\nI have reached out to customer support multiple times, but they only say that my account was closed due to a \u2018breach of terms and conditions\u2019 without specifying which terms were breached. I have always played fairly and followed all rules.",
    author: {
      name: "Aleksei",
      rank: "Veteran Player",
      rankColor: "#16a34a",
      postCount: 12450,
      countryCode: "fi",
      isOnline: false,
    },
    casino: {
      name: "Lucky Block",
      slug: "lucky-block",
      logo: "/casino-index/logo-Lucky-block.svg",
      safetyIndex: "High",
      playerRating: 5.0,
      playerReviews: 128,
      expertScore: 4.8,
    },
    caseSummary: {
      text: "A player from Finland reported their account was closed without explanation while holding a balance of \u20AC7,800. The complaint was rejected due to insufficient evidence provided by the player to support their claim.",
      postedTime: "Posted Friday \u2013 09:30 AM",
      writtenBy: "Anna",
      specialistName: "Anna",
      specialistTitle: "Complaint Specialist",
    },
  },
];

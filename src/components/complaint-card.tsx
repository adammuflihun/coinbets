import Image from "next/image";
import Link from "next/link";



export type ComplaintStatus = "resolved" | "unresolved" | "opened" | "rejected";

export interface ComplaintData {
  id: string;
  slug?: string;
  title: string;
  disputedAmount: string;
  postedDate: string;
  status: ComplaintStatus;
  verdictText: string;
  casino: {
    name: string;
    slug: string;
    logo: string;
    safetyIndex: string;
    playerRating: number;
    playerReviews: number;
    expertScore: number;
  };
}

const SAFETY_COLORS: Record<string, string> = {
  High: "#00de00",
  Normal: "#eaee45",
};

const RATING_COLORS: Record<number, string> = {
  5: "#23BA21",
  4: "#9FF11A",
  3: "#D8DC00",
  2: "#FFB257",
  1: "#FF6847",
};

const STAR_BG =
  "M15.9988 0H4C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0Z";
const STAR_SHAPE =
  "M10.38 4.035a.75.75 0 0 0-.753 0c-.206.098-.32.269-.377.362a4.7 4.7 0 0 0-.18.34L7.814 7.285l-2.813.411a4.7 4.7 0 0 0-.378.065c-.107.026-.304.081-.46.247a.75.75 0 0 0-.233.716c.03.226.157.387.228.47.074.087.172.182.268.276l2.034 1.981-.48 2.8a4.7 4.7 0 0 0-.055.38c-.009.11-.017.314.092.515a.75.75 0 0 0 .61.443c.224.041.416-.03.517-.072a4.7 4.7 0 0 0 .345-.17l2.514-1.322 2.515 1.322c.118.063.24.127.344.17.102.042.294.113.518.072a.75.75 0 0 0 .61-.443c.108-.2.1-.405.091-.515a4.7 4.7 0 0 0-.055-.38l-.48-2.799 2.035-1.982a4.7 4.7 0 0 0 .268-.275c.071-.083.198-.244.228-.47a.75.75 0 0 0-.232-.717c-.157-.165-.354-.221-.461-.247a4.7 4.7 0 0 0-.378-.065l-2.813-.411-1.257-2.548a4.7 4.7 0 0 0-.18-.34.75.75 0 0 0-.377-.362Z";

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
      <path
        d="M9.2462 20.5125C8.46178 21.091 7.79503 21.7969 7.28516 22.6304C8.59905 24.7679 10.9425 26.121 13.4526 26.1897C13.8644 25.4249 14.139 24.611 14.2665 23.758C14.5116 22.1499 14.2272 20.4928 13.4526 19.0613C11.9328 19.1005 10.4718 19.6006 9.23639 20.5027L9.2462 20.5125Z"
        fill="white"
      />
      <path
        d="M17.8064 4.40259C17.2181 5.49097 16.9043 6.72642 16.9043 7.96188C16.9043 9.19733 17.2181 10.4328 17.8064 11.5212C19.4242 11.4721 21.0127 10.8936 22.2776 9.88369C22.9541 9.34441 23.5228 8.69727 23.9739 7.96188C22.66 5.82434 20.3165 4.47122 17.8064 4.40259Z"
        fill="white"
      />
      <path
        d="M8.2164 18.0611C9.48127 17.4434 10.5402 16.4825 11.2854 15.2862C10.55 14.0802 9.50089 13.1193 8.23601 12.4819C7.2751 12.0015 6.20634 11.7269 5.12776 11.6975C3.92172 13.9037 3.91192 16.6099 5.09835 18.8259C6.17692 18.7965 7.24569 18.5415 8.2164 18.0709V18.0611Z"
        fill="white"
      />
      <path
        d="M21.7578 20.3261C20.5812 19.5417 19.2182 19.1103 17.8161 19.071C17.1493 20.3065 16.8356 21.7086 16.9336 23.1206C17.0023 24.1894 17.3062 25.2581 17.8161 26.1994C20.3262 26.1308 22.6697 24.7777 23.9836 22.6401C23.4149 21.7184 22.6501 20.9242 21.7578 20.3359V20.3261Z"
        fill="white"
      />
      <path
        d="M7.28516 7.97168C7.92249 9.00122 8.80496 9.87389 9.84431 10.4916C10.9327 11.1388 12.178 11.5016 13.4526 11.531C14.0606 10.4132 14.3645 9.15811 14.3547 7.88343C14.3449 6.66759 14.0311 5.47135 13.4526 4.40259C10.9425 4.47122 8.59905 5.82434 7.28516 7.96188V7.97168Z"
        fill="white"
      />
    </svg>
  );
}

const STATUS_CONFIG: Record<
  ComplaintStatus,
  { bg: string; label: string; iconPath: React.ReactNode }
> = {
  resolved: {
    bg: "bg-[#16a34a]",
    label: "Resolved",
    iconPath: (
      /* Material: check_circle (filled) */
      <svg width="54" height="54" viewBox="0 0 24 24" fill="white">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },
  unresolved: {
    bg: "bg-[#dc2626]",
    label: "Unresolved",
    iconPath: (
      /* Material: error (filled) */
      <svg width="54" height="54" viewBox="0 0 24 24" fill="white">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </svg>
    ),
  },
  opened: {
    bg: "bg-[#1d4ed8]",
    label: "Opened",
    iconPath: (
      /* Material: pending (filled) */
      <svg width="54" height="54" viewBox="0 0 24 24" fill="white">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </svg>
    ),
  },
  rejected: {
    bg: "bg-[#030712]",
    label: "Rejected",
    iconPath: (
      /* Material: cancel (filled) */
      <svg width="54" height="54" viewBox="0 0 24 24" fill="white">
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
      </svg>
    ),
  },
};

export function ComplaintCard({ complaint }: { complaint: ComplaintData }) {
  const config = STATUS_CONFIG[complaint.status];
  const ratingBucket = Math.min(
    5,
    Math.max(1, Math.round(complaint.casino.playerRating))
  );

  return (
    <Link
      href={`/complaints/${complaint.slug ?? complaint.id}`}
      data-name="complaint-thread"
      className="flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white transition-shadow hover:shadow-md sm:flex-row"
    >
      {/* Left: Verdict Panel */}
      <div
        data-name="complaint-verdict"
        className={`flex w-full shrink-0 flex-col items-center justify-center gap-2 p-6 text-white sm:w-[200px] ${config.bg}`}
      >
        <div data-name="verdict-icon" className="shrink-0">
          {config.iconPath}
        </div>
        <span
          data-name="verdict-status"
          className="rounded-md bg-white px-2.5 py-0.5 text-xs font-bold uppercase tracking-widest text-green-950"
        >
          {config.label}
        </span>
        <span
          data-name="verdict-label"
          className="text-xs font-bold uppercase text-white/80"
        >
          Our Verdict
        </span>
        <p
          data-name="verdict-text"
          className="text-center text-sm font-bold leading-tight"
        >
          {complaint.verdictText}
        </p>
      </div>

      {/* Right: Content Panel */}
      <div
        data-name="complaint-content"
        className="flex flex-1 flex-col gap-4 p-6"
      >
        {/* Header: Date + More */}
        <div
          data-name="complaint-post-info"
          className="flex items-center gap-2"
        >
          <span className="text-sm text-neutral-500">
            {complaint.postedDate}
          </span>
        </div>

        {/* Title */}
        <h3
          data-name="complaint-title"
          className="text-lg font-bold leading-snug tracking-tight text-[#1c1c1c] sm:text-xl"
        >
          {complaint.title}
        </h3>

        {/* Disputed Amount */}
        <p data-name="complaint-amount" className="text-base text-[#1c1c1c]">
          Disputed amount:{" "}
          <span className="font-bold">{complaint.disputedAmount}</span>
        </p>

        {/* Divider */}
        <div data-name="divider" className="h-px bg-[#d9d9d9]" />

        {/* Casino Product + Expert Ratings — same row */}
        <div
          data-name="complaint-casino-row"
          className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between"
        >
          {/* Left: Casino Product — reuses review-product pattern */}
          <div
            data-name="review-product"
            className="flex items-start gap-3.5"
          >
            <div
              data-name="review-product-logo"
              className="flex shrink-0 items-center justify-center rounded-sm bg-[#060d17] px-1.5 py-2"
            >
              <Image
                src={complaint.casino.logo}
                alt={complaint.casino.name}
                width={43}
                height={27}
                className="object-contain"
              />
            </div>
            <div
              data-name="review-product-info"
              className="flex flex-col gap-[3px]"
            >
              <p className="text-base font-semibold leading-[1.4] text-[#060D17]">
                {complaint.casino.name}
              </p>
              <div
                data-name="review-safety-index"
                className="flex items-center gap-2"
              >
                <span className="text-xs font-bold uppercase text-[#404040]">
                  Safety Index
                </span>
                <span
                  className="rounded-full px-2 py-0.5 text-xs font-semibold text-[#060d17]"
                  style={{
                    backgroundColor:
                      SAFETY_COLORS[complaint.casino.safetyIndex] || "#eaee45",
                  }}
                >
                  {complaint.casino.safetyIndex}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Expert Ratings — reuses expert-ratings pattern */}
          <div
            data-name="expert-ratings"
            className="flex items-start justify-between gap-6"
          >
            {/* Player Rating */}
            <div data-name="player-rating" className="flex items-start gap-2.5">
              <PlayerRatingIcon />
              <div
                data-name="player-rating-detail"
                className="flex flex-col gap-1"
              >
                <div
                  data-name="player-score-row"
                  className="flex items-center gap-1.5"
                >
                  <span className="text-[23px] font-medium leading-none text-[#060d17]">
                    {complaint.casino.playerRating.toFixed(1)}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="size-5 shrink-0"
                  >
                    <path
                      d={STAR_BG}
                      fill={RATING_COLORS[ratingBucket] ?? RATING_COLORS[3]}
                    />
                    <path d={STAR_SHAPE} fill="white" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-[#060d17]">
                  Player Rating
                </p>
              </div>
            </div>

            {/* Expert Score */}
            <div data-name="expert-score" className="flex items-start gap-2.5">
              <ExpertShieldIcon />
              <div
                data-name="expert-score-detail"
                className="flex flex-col gap-1"
              >
                <div
                  data-name="expert-score-row"
                  className="flex items-center gap-1.5"
                >
                  <span className="text-[23px] font-medium leading-none text-[#060d17]">
                    {complaint.casino.expertScore.toFixed(1)}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="size-5 shrink-0"
                  >
                    <rect width="20" height="20" rx="5" fill="#003EB6" />
                    <path
                      d="M10 4.5C7.1 4.5 4.5 5.87 4.5 5.87V10.5C4.5 13.5 7 15.2 10 16.5C13 15.2 15.5 13.5 15.5 10.5V5.87C15.5 5.87 12.9 4.5 10 4.5Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p className="text-sm font-medium text-[#060d17]">
                  Coinbets Expert Score
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

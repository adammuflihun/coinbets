import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface ReviewData {
  name: string;
  slug: string;
  logo: string;
  safetyIndex: string;
  playerRating: number;
  playerReviews: number;
  expertScore: number;
  highlights: string[];
  bonus: string;
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

export function ReviewCard({ review, hideBonus }: { review: ReviewData; hideBonus?: boolean }) {
  return (
    <Link
      href={`/casino/review/${review.slug}`}
      data-name="expert-card"
      className="flex flex-col gap-3.5 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm h-full transition-shadow hover:shadow-md"
    >
      {/* Casino header */}
      <div
        data-name="expert-casino-header"
        className="flex items-start gap-3.5"
      >
        <div
          data-name="expert-logo"
          className="flex items-center justify-center w-[108px] h-[89px] rounded-lg overflow-hidden bg-[#060d17] shrink-0 p-0"
        >
          <Image
            src={review.logo}
            alt={review.name}
            width={108}
            height={89}
            className="object-contain w-full h-full"
          />
        </div>
        <div data-name="expert-casino-info" className="flex flex-col gap-1">
          <p className="text-base font-semibold text-[#060d17]">
            {review.name}
          </p>
          <div data-name="expert-safety" className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#404040] uppercase">
              Safety Index
            </span>
            <span
              className="rounded-full px-2 py-0.5 text-xs font-semibold text-[#060d17]"
              style={{
                backgroundColor: SAFETY_COLORS[review.safetyIndex] || "#eaee45",
              }}
            >
              {review.safetyIndex}
            </span>
          </div>
        </div>
      </div>

      {/* Expert Score */}
      <div data-name="expert-score" className="flex items-center gap-2">
        <ExpertShieldIcon />
        <div data-name="expert-score-detail" className="flex items-center gap-1.5">
          <span className="text-[23px] font-medium leading-none text-[#060d17]">
            {review.expertScore.toFixed(1)}
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
      </div>

      {/* Divider */}
      <div data-name="divider" className="h-px bg-[#d9d9d9]" />

      {/* Ratings */}
      <div
        data-name="expert-ratings"
        className="flex items-start justify-between"
      >
        {/* Player Rating */}
        <div data-name="player-rating" className="flex items-start gap-2.5">
          <PlayerRatingIcon />
          <div data-name="player-rating-detail" className="flex flex-col gap-1">
            <div
              data-name="player-score-row"
              className="flex items-center gap-1.5"
            >
              <span className="text-[23px] font-medium leading-none text-[#060d17]">
                {review.playerRating.toFixed(1)}
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
                  fill={
                    RATING_COLORS[
                      Math.min(5, Math.max(1, Math.round(review.playerRating)))
                    ] ?? RATING_COLORS[3]
                  }
                />
                <path d={STAR_SHAPE} fill="white" />
              </svg>
            </div>
            <p className="text-sm font-medium text-[#060d17]">Player Rating</p>
            <p className="text-sm font-medium text-[#2563eb]">
              {review.playerReviews} Reviews
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div data-name="divider" className="h-px bg-[#d9d9d9]" />

      {/* Highlights */}
      <div data-name="highlights" className="flex flex-col gap-2.5">
        {review.highlights.map((highlight, i) => (
          <div
            key={i}
            data-name="highlight-item"
            className="flex items-center gap-2.5"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="size-5 shrink-0"
            >
              <path
                d="M19.518 8.80836L17.5753 6.85835V4.10833C17.5753 3.18332 16.8247 2.43332 15.9001 2.43332H13.1308L11.1859 0.49091C10.5572 -0.172138 9.42808 -0.152572 8.81024 0.483302L6.86753 2.43332H4.10683C3.18225 2.43332 2.43171 3.18332 2.43171 4.10724V6.85726L0.487912 8.79966C0.175385 9.11425 0 9.53955 0 9.98282C0 10.4261 0.175385 10.8514 0.487912 11.166L2.43062 13.116V15.8834C2.43062 16.8073 3.18116 17.5573 4.10683 17.5573H6.86753L8.82764 19.5247C9.1444 19.8323 9.56953 20.003 10.0112 20C10.4528 19.9969 10.8756 19.8204 11.188 19.5084L13.1308 17.5584H15.8991C16.8247 17.5584 17.5753 16.8084 17.5753 15.8834V13.116L19.5191 11.166H19.5267C19.8319 10.8486 20.0016 10.425 20 9.98487C19.9984 9.5447 19.8255 9.12241 19.518 8.80727M10.8378 13.1823C10.8366 13.403 10.7483 13.6142 10.5921 13.7702C10.4359 13.9261 10.2243 14.0141 10.0035 14.0149C9.8939 14.0153 9.78531 13.9941 9.68396 13.9524C9.58262 13.9108 9.49052 13.8495 9.41298 13.7721C9.33544 13.6947 9.27397 13.6027 9.23213 13.5015C9.1903 13.4003 9.16891 13.2918 9.16919 13.1823V10.3236C9.16919 9.86489 9.53576 9.48989 10.0035 9.48989C10.4625 9.48989 10.8378 9.86489 10.8378 10.3236V13.1823ZM10.0035 7.79096C9.8663 7.79168 9.73033 7.76521 9.60345 7.71308C9.47656 7.66095 9.36128 7.58419 9.26427 7.48725C9.16726 7.39032 9.09045 7.27512 9.03828 7.14832C8.98612 7.02153 8.95963 6.88565 8.96035 6.74856C8.96035 6.17356 9.41937 5.70725 10.0035 5.70725C10.5702 5.70725 11.0456 6.17356 11.0456 6.74856C11.0438 7.02421 10.9335 7.28808 10.7384 7.48299C10.5434 7.6779 10.2793 7.78816 10.0035 7.78987"
                fill="#060D17"
              />
            </svg>
            <p className="text-sm font-medium text-[#060d17] leading-[18px]">
              {highlight}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom pinned: Bonus + CTA */}
      <div data-name="card-bottom" className="mt-auto flex flex-col gap-3.5">
        {!hideBonus && <div
          data-name="bonus-bar"
          className="flex items-center justify-between rounded-md border border-[#f1f1f1] px-2.5 py-2"
        >
          <div data-name="bonus-info" className="flex items-center gap-1.5">
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              className="size-5 shrink-0"
            >
              <path
                d="M18.6167 5.34571C18.3916 4.02049 17.765 2.83611 16.8646 1.95903C16.0615 1.17158 15.0455 0.621 13.9199 0.409733C12.4842 0.140847 11.0118 0 9.50304 0C7.99424 0 6.52193 0.140847 5.08613 0.409733C3.89369 0.633804 2.82293 1.23559 2.0016 2.09987C1.18028 2.96415 0.602305 4.09091 0.389369 5.35212C0.133845 6.863 0 8.41229 0 10C0 11.5877 0.133845 13.137 0.389369 14.6479C0.602305 15.9027 1.17419 17.023 1.98943 17.8873C2.81076 18.758 3.88152 19.3662 5.08005 19.5903C6.51585 19.8592 7.98815 20 9.49696 20C11.0058 20 12.4781 19.8592 13.9139 19.5903C15.2341 19.3406 16.4022 18.6236 17.2539 17.6056C17.9414 16.7862 18.422 15.7682 18.6106 14.6479C18.8662 13.137 19 11.5877 19 10C19 8.41229 18.8662 6.863 18.6106 5.35212L18.6167 5.34571Z"
                fill="black"
              />
              <path
                d="M4.5 11.7612H9.125V16.5112H5.375C4.895 16.5112 4.5 16.1162 4.5 15.6362V11.7612ZM14.5 11.7612V15.6362C14.5 16.1162 14.105 16.5112 13.625 16.5112H9.875V11.7612H14.5ZM3.5 8.88623V10.1362C3.5 10.6162 3.895 11.0112 4.375 11.0112H9.125V8.01123H4.375C3.895 8.01123 3.5 8.40623 3.5 8.88623ZM14.625 8.01123H9.875V11.0112H14.625C15.105 11.0112 15.5 10.6162 15.5 10.1362V8.88623C15.5 8.40623 15.105 8.01123 14.625 8.01123Z"
                fill="white"
              />
              <path
                d="M9.4999 8.53327C9.44605 8.53311 9.39286 8.52139 9.34394 8.4989C9.29501 8.4764 9.25149 8.44366 9.21632 8.40289C9.18114 8.36212 9.15513 8.31427 9.14005 8.26258C9.12497 8.21089 9.12116 8.15656 9.1289 8.10327C9.3139 6.85327 10.2904 4.48877 12.6644 4.48877C14.0194 4.48927 14.4999 5.22127 14.4999 5.84827C14.4999 6.96277 12.9484 8.53327 9.4999 8.53327ZM12.6644 5.23927C10.8734 5.23927 10.1934 6.94177 9.9679 7.77227C11.3809 7.70627 12.2719 7.34877 12.7849 7.04427C13.4964 6.62177 13.7499 6.14927 13.7499 5.84777C13.7499 5.39877 13.1894 5.23927 12.6644 5.23927Z"
                fill="white"
              />
              <path
                d="M9.5 8.53326C6.0515 8.53326 4.5 6.96276 4.5 5.84826C4.5 5.22126 4.981 4.48926 6.336 4.48926C8.7095 4.48926 9.686 6.85376 9.871 8.10376C9.87866 8.15701 9.87479 8.21128 9.85968 8.26292C9.84456 8.31455 9.81854 8.36233 9.78337 8.40305C9.7482 8.44376 9.70471 8.47645 9.65582 8.49892C9.60694 8.52138 9.5538 8.53309 9.5 8.53326ZM6.336 5.23926C5.811 5.23926 5.25 5.39926 5.25 5.84826C5.25 6.48676 6.3665 7.65026 9.0315 7.77276C8.8065 6.94176 8.1265 5.23926 6.336 5.23926Z"
                fill="white"
              />
            </svg>
            <span className="text-sm font-medium text-[#060d17]">
              {review.bonus}
            </span>
          </div>
          <div
            data-name="bonus-badge"
            className="flex items-center gap-1 rounded-lg bg-[#f5f5f5] px-2 py-1"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              className="size-[15px] shrink-0"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.5 0.625488C3.70304 0.625488 0.625 3.70353 0.625 7.50049C0.625 11.2974 3.70304 14.3755 7.5 14.3755C11.2969 14.3755 14.375 11.2974 14.375 7.50049C14.375 3.70353 11.2969 0.625488 7.5 0.625488ZM10.7544 6.06743C10.9985 5.82335 10.9985 5.42763 10.7544 5.18354C10.5104 4.93947 10.1146 4.93947 9.87056 5.18354L6.5625 8.49161L5.12944 7.05855C4.88536 6.81449 4.48964 6.81449 4.24556 7.05855C4.00148 7.30261 4.00148 7.69836 4.24556 7.94243L6.12056 9.81743C6.36463 10.0615 6.76038 10.0615 7.00444 9.81743L10.7544 6.06743Z"
                fill="#171717"
              />
            </svg>
            <span className="text-sm font-semibold text-[#171717]">Bonus</span>
          </div>
        </div>}

        <div
          data-name="read-review-button"
          className="group/btn flex items-center justify-between rounded-lg bg-[#eab914] px-6 py-2.5 text-sm font-semibold text-[#171717] transition-colors"
        >
          Read Review
          <ChevronRight className="size-4 transition-transform group-hover/btn:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}

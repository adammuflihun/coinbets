"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect, type ChangeEvent } from "react";
import {
  ChevronRight,
  Plus,
  Minus,
  Check,
  Upload,
  X,
  ImageIcon,
  Eye,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AnimatePresence, motion } from "motion/react";
import { casinoReviews } from "@/data/casino-reviews";
import { useAuth } from "@/components/auth-provider";
import { LoginDialogContent } from "@/components/login-dialog";

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const RATING_LABELS = ["TERRIBLE", "BAD", "OK", "GOOD", "EXCELLENT"] as const;
const RATING_COLORS = ["#FF6847", "#FFB257", "#D8DC00", "#9FF11A", "#23BA21"];

const SAFETY_COLORS: Record<string, string> = {
  High: "#00de00",
  Normal: "#eaee45",
};

const STAR_BG =
  "M15.9988 0H4C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0Z";
const STAR_SHAPE =
  "M10.38 4.035a.75.75 0 0 0-.753 0c-.206.098-.32.269-.377.362a4.7 4.7 0 0 0-.18.34L7.814 7.285l-2.813.411a4.7 4.7 0 0 0-.378.065c-.107.026-.304.081-.46.247a.75.75 0 0 0-.233.716c.03.226.157.387.228.47.074.087.172.182.268.276l2.034 1.981-.48 2.8a4.7 4.7 0 0 0-.055.38c-.009.11-.017.314.092.515a.75.75 0 0 0 .61.443c.224.041.416-.03.517-.072a4.7 4.7 0 0 0 .345-.17l2.514-1.322 2.515 1.322c.118.063.24.127.344.17.102.042.294.113.518.072a.75.75 0 0 0 .61-.443c.108-.2.1-.405.091-.515a4.7 4.7 0 0 0-.055-.38l-.48-2.799 2.035-1.982a4.7 4.7 0 0 0 .268-.275c.071-.083.198-.244.228-.47a.75.75 0 0 0-.232-.717c-.157-.165-.354-.221-.461-.247a4.7 4.7 0 0 0-.378-.065l-2.813-.411-1.257-2.548a4.7 4.7 0 0 0-.18-.34.75.75 0 0 0-.377-.362Z";

/* ------------------------------------------------------------------ */
/*  SVG Icons                                                          */
/* ------------------------------------------------------------------ */

function XLogoIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 14 14" fill="none">
      <path
        d="M8.32 5.93L13.49 0H12.27L7.78 5.15L4.2 0H0L5.42 7.78L0 14H1.22L5.96 8.56L9.74 14H13.94L8.32 5.93ZM6.58 7.85L6.03 7.08L1.66 0.91H3.61L7.07 5.89L7.62 6.66L12.27 13.13H10.32L6.58 7.85Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PlayerRatingIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 31 31" fill="none" className="shrink-0">
      <path d="M30.0039 8.18734C29.6411 6.15767 28.6312 4.34371 27.18 3.0004C25.8857 1.79436 24.2483 0.951107 22.4343 0.627535C20.1203 0.215717 17.7474 0 15.3157 0C12.884 0 10.5112 0.215717 8.19715 0.627535C6.27533 0.970717 4.54961 1.8924 3.22591 3.21611C1.90221 4.53981 0.970715 6.26553 0.627532 8.19715C0.215714 10.5112 0 12.884 0 15.3157C0 17.7474 0.215714 20.1203 0.627532 22.4343C0.970715 24.3561 1.8924 26.072 3.2063 27.3957C4.53 28.7292 6.25572 29.6607 8.18734 30.0039C10.5014 30.4157 12.8742 30.6314 15.3059 30.6314C17.7376 30.6314 20.1105 30.4157 22.4245 30.0039C24.5522 29.6215 26.4348 28.5233 27.8076 26.9643C28.9155 25.7092 29.6902 24.1502 29.9941 22.4343C30.4059 20.1203 30.6216 17.7474 30.6216 15.3157C30.6216 12.884 30.4059 10.5112 29.9941 8.19715L30.0039 8.18734Z" fill="#E5E7EB" />
      <path fillRule="evenodd" clipRule="evenodd" d="M6.64987 21.5792C8.80094 19.2977 11.7427 17.876 15.0002 17.876C18.2577 17.876 21.1995 19.2977 23.3506 21.5792C23.5856 21.8285 23.6499 22.1937 23.5142 22.5082C23.3784 22.8228 23.0686 23.0265 22.726 23.0265H7.27445C6.93185 23.0265 6.62205 22.8228 6.4863 22.5082C6.35055 22.1937 6.41484 21.8285 6.64987 21.5792Z" fill="#1C1C1C" />
      <path fillRule="evenodd" clipRule="evenodd" d="M10.2793 11.4381C10.2793 8.83059 12.3931 6.7168 15.0006 6.7168C17.6081 6.7168 19.7219 8.83059 19.7219 11.4381C19.7219 14.0456 17.6081 16.1594 15.0006 16.1594C12.3931 16.1594 10.2793 14.0456 10.2793 11.4381Z" fill="#1C1C1C" />
    </svg>
  );
}

function ExpertShieldIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 31 31" fill="none" className="shrink-0">
      <path d="M30.0039 8.18734C29.6411 6.15767 28.6312 4.34371 27.18 3.0004C25.8857 1.79436 24.2483 0.951107 22.4343 0.627535C20.1203 0.215717 17.7474 0 15.3157 0C12.884 0 10.5112 0.215717 8.19715 0.627535C6.27533 0.970717 4.54961 1.8924 3.22591 3.21611C1.90221 4.53981 0.970714 6.26553 0.627532 8.19715C0.215714 10.5112 0 12.884 0 15.3157C0 17.7474 0.215714 20.1203 0.627532 22.4343C0.970714 24.3561 1.8924 26.072 3.2063 27.3957C4.53 28.7292 6.25572 29.6607 8.18734 30.0039C10.5014 30.4157 12.8742 30.6314 15.3059 30.6314C17.7376 30.6314 20.1105 30.4157 22.4245 30.0039C24.5522 29.6215 26.4348 28.5233 27.8076 26.9643C28.9155 25.7092 29.6902 24.1502 29.9941 22.4343C30.4059 20.1203 30.6216 17.7474 30.6216 15.3157C30.6216 12.884 30.4059 10.5112 29.9941 8.19715L30.0039 8.18734Z" fill="#003EB6" />
      <path d="M9.2462 20.5125C8.46178 21.091 7.79503 21.7969 7.28516 22.6304C8.59905 24.7679 10.9425 26.121 13.4526 26.1897C13.8644 25.4249 14.139 24.611 14.2665 23.758C14.5116 22.1499 14.2272 20.4928 13.4526 19.0613C11.9328 19.1005 10.4718 19.6006 9.23639 20.5027L9.2462 20.5125Z" fill="white" />
      <path d="M17.8064 4.40259C17.2181 5.49097 16.9043 6.72642 16.9043 7.96188C16.9043 9.19733 17.2181 10.4328 17.8064 11.5212C19.4242 11.4721 21.0127 10.8936 22.2776 9.88369C22.9541 9.34441 23.5228 8.69727 23.9739 7.96188C22.66 5.82434 20.3165 4.47122 17.8064 4.40259Z" fill="white" />
      <path d="M8.2164 18.0611C9.48127 17.4434 10.5402 16.4825 11.2854 15.2862C10.55 14.0802 9.50089 13.1193 8.23601 12.4819C7.2751 12.0015 6.20634 11.7269 5.12776 11.6975C3.92172 13.9037 3.91192 16.6099 5.09835 18.8259C6.17692 18.7965 7.24569 18.5415 8.2164 18.0709V18.0611Z" fill="white" />
      <path d="M21.7578 20.3261C20.5812 19.5417 19.2182 19.1103 17.8161 19.071C17.1493 20.3065 16.8356 21.7086 16.9336 23.1206C17.0023 24.1894 17.3062 25.2581 17.8161 26.1994C20.3262 26.1308 22.6697 24.7777 23.9836 22.6401C23.4149 21.7184 22.6501 20.9242 21.7578 20.3359V20.3261Z" fill="white" />
      <path d="M7.28516 7.97168C7.92249 9.00122 8.80496 9.87389 9.84431 10.4916C10.9327 11.1388 12.178 11.5016 13.4526 11.531C14.0606 10.4132 14.3645 9.15811 14.3547 7.88343C14.3449 6.66759 14.0311 5.47135 13.4526 4.40259C10.9425 4.47122 8.59905 5.82434 7.28516 7.96188V7.97168Z" fill="white" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function StarRatingSelector({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const [hovered, setHovered] = useState<number | null>(null);
  const display = hovered ?? value;
  const label = display > 0 ? RATING_LABELS[display - 1] : "Select a rating";
  const color = display > 0 ? RATING_COLORS[display - 1] : "#a3a3a3";

  return (
    <div data-name="star-rating-selector" className="flex flex-col items-center gap-3 w-full">
      {/* Stars as large buttons */}
      <div data-name="star-buttons" className="flex items-center gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onChange(star)}
            data-name={`star-btn-${star}`}
            className={`flex items-center justify-center size-14 sm:size-16 rounded-xl border-2 transition-all cursor-pointer ${
              star <= display
                ? "border-transparent scale-105 shadow-md"
                : "border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-sm"
            }`}
            style={{
              backgroundColor: star <= display ? color : undefined,
            }}
          >
            <svg width="32" height="32" viewBox="0 0 20 20" fill="none">
              <path d={STAR_BG} fill={star <= display ? "rgba(255,255,255,0.25)" : "#DDDDDD"} />
              <path d={STAR_SHAPE} fill="white" />
            </svg>
          </button>
        ))}
      </div>
      {/* Selected label */}
      <span
        data-name="star-selected-label"
        className="text-lg font-bold transition-colors"
        style={{ color }}
      >
        {label}
      </span>
    </div>
  );
}

function RatingScaleBar({ rating }: { rating: number }) {
  return (
    <div data-name="rating-scale-bar" className="flex flex-col gap-1.5 w-full">
      {/* Numbers */}
      <div data-name="scale-numbers" className="flex w-full">
        {[1, 2, 3, 4, 5].map((n) => (
          <span
            key={n}
            className={`flex-1 text-xs font-bold text-center ${
              n === rating ? "text-[#060D17]" : "text-neutral-400"
            }`}
          >
            {n}
          </span>
        ))}
      </div>
      {/* Bars */}
      <div data-name="scale-bars" className="flex w-full rounded-full overflow-hidden">
        {RATING_COLORS.map((color, i) => (
          <div
            key={i}
            data-name="scale-bar-segment"
            className={`h-2.5 flex-1 transition-opacity ${
              rating > 0 && i + 1 <= rating ? "opacity-100" : "opacity-30"
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      {/* Labels */}
      <div data-name="scale-labels" className="flex w-full">
        {RATING_LABELS.map((l, i) => (
          <span
            key={l}
            className={`flex-1 text-[10px] font-bold uppercase tracking-wider text-center ${
              i + 1 === rating ? "text-[#060D17]" : "text-neutral-400"
            }`}
          >
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}

function YesNoToggle({
  value,
  onChange,
}: {
  value: boolean | null;
  onChange: (v: boolean) => void;
}) {
  return (
    <div data-name="yes-no-toggle" className="flex items-start">
      <button
        type="button"
        onClick={() => onChange(true)}
        data-name="toggle-yes"
        className={`px-3 py-1.5 text-base font-bold rounded-l border transition-colors cursor-pointer ${
          value === true
            ? "bg-[#003EB6] text-white border-[#003EB6]"
            : "bg-[#f8f8f8] text-[#060D17] border-neutral-300 hover:bg-neutral-100"
        }`}
      >
        Yes
      </button>
      <button
        type="button"
        onClick={() => onChange(false)}
        data-name="toggle-no"
        className={`px-3 py-1.5 text-base font-bold rounded-r border border-l-0 transition-colors cursor-pointer ${
          value === false
            ? "bg-[#003EB6] text-white border-[#003EB6]"
            : "bg-[#f8f8f8] text-[#060D17] border-neutral-300 hover:bg-neutral-100"
        }`}
      >
        No
      </button>
    </div>
  );
}

function DynamicListSection({
  title,
  subtitle,
  items,
  onAdd,
  onRemove,
  onChange,
  variant,
}: {
  title: string;
  subtitle: string;
  items: string[];
  onAdd: () => void;
  onRemove: (index: number) => void;
  onChange: (index: number, value: string) => void;
  variant: "liked" | "disliked";
}) {
  const isLiked = variant === "liked";
  const bgClass = isLiked ? "bg-[#e4ffef]" : "bg-[#f7f3f2]";
  const iconBg = isLiked ? "bg-[#167715]" : "bg-[#da3131]";

  return (
    <div
      data-name={`section-${variant}`}
      className={`${bgClass} border border-neutral-200 rounded-lg p-5 sm:p-6 flex flex-col gap-3`}
    >
      <div data-name={`${variant}-header`} className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-[#060D17]">{title}</h3>
        <span className="text-sm text-neutral-500">{subtitle}</span>
      </div>

      {items.map((item, i) => (
        <div key={i} data-name={`${variant}-item-${i}`} className="flex items-center gap-3">
          <div
            data-name={`${variant}-icon`}
            className={`size-6 rounded-full ${iconBg} flex items-center justify-center shrink-0`}
          >
            {isLiked ? (
              <Check className="size-3.5 text-white" />
            ) : (
              <Minus className="size-3.5 text-white" />
            )}
          </div>
          <div data-name={`${variant}-input-wrapper`} className="flex-1 flex items-center gap-2">
            <Input
              value={item}
              onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(i, e.target.value)}
              placeholder="Write"
              className="h-11 rounded bg-white border-neutral-300 text-base"
            />
            {items.length > 1 && (
              <button
                type="button"
                onClick={() => onRemove(i)}
                data-name={`${variant}-remove`}
                className="size-8 flex items-center justify-center rounded-full hover:bg-neutral-200 transition-colors cursor-pointer shrink-0"
              >
                <X className="size-4 text-neutral-500" />
              </button>
            )}
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={onAdd}
        data-name={`${variant}-add-more`}
        className={`flex items-center justify-center gap-2 rounded-lg border-2 border-dashed py-2.5 transition-colors cursor-pointer ${
          isLiked
            ? "border-[#167715]/30 text-[#167715] hover:bg-[#167715]/10"
            : "border-[#da3131]/30 text-[#da3131] hover:bg-[#da3131]/10"
        }`}
      >
        <Plus className="size-4" />
        <span className="text-sm font-bold">Add more</span>
      </button>
    </div>
  );
}

function FileDropZone({
  label,
  description,
  files,
  onFilesChange,
  dataName,
}: {
  label: string;
  description: string;
  files: File[];
  onFilesChange: (files: File[]) => void;
  dataName: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const dropped = Array.from(e.dataTransfer.files).filter((f) =>
      f.type.startsWith("image/"),
    );
    onFilesChange([...files, ...dropped]);
  };

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onFilesChange([...files, ...Array.from(e.target.files)]);
    }
  };

  return (
    <div data-name={dataName} className="flex flex-col gap-3">
      <div data-name={`${dataName}-header`} className="flex items-center gap-3">
        <ImageIcon className="size-6 text-[#003EB6] shrink-0" />
        <h3 className="text-lg font-bold text-[#060D17]">{label}</h3>
      </div>
      <p className="text-sm text-neutral-500">{description}</p>
      <p className="text-sm font-bold text-[#1c1c1c]">
        Attach photos or screenshot
      </p>
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        data-name={`${dataName}-drop-area`}
        className="flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[#003EB6] bg-white px-6 py-6 text-sm text-neutral-500 hover:bg-neutral-50 transition-colors cursor-pointer"
      >
        <Upload className="size-5 text-neutral-400" />
        <span>Click to select file(s) or drag &amp; drop here</span>
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleSelect}
      />

      {/* Preview */}
      {files.length > 0 && (
        <div data-name={`${dataName}-previews`} className="flex flex-wrap gap-2">
          {files.map((file, i) => (
            <div
              key={i}
              data-name={`${dataName}-preview-${i}`}
              className="relative size-20 rounded-lg overflow-hidden bg-neutral-100 border border-neutral-200"
            >
              <Image
                src={URL.createObjectURL(file)}
                alt={file.name}
                fill
                className="object-cover"
              />
              <button
                type="button"
                onClick={() =>
                  onFilesChange(files.filter((_, idx) => idx !== i))
                }
                className="absolute top-0.5 right-0.5 size-5 rounded-full bg-black/60 flex items-center justify-center cursor-pointer"
              >
                <X className="size-3 text-white" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Connect via X Dialog                                               */
/* ------------------------------------------------------------------ */

function ConnectXDialog({
  open,
  onOpenChange,
  onConnect,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onConnect: (handle: string) => void;
}) {
  const [handle, setHandle] = useState("");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        data-section="connect-x-dialog"
        className="sm:max-w-[440px] p-0 gap-0 overflow-hidden"
      >
        <div data-name="connect-x-layout" className="flex flex-col">
          {/* Header */}
          <div data-name="connect-x-header" className="bg-black px-6 py-5 flex items-center gap-3">
            <XLogoIcon className="size-6 text-white" />
            <h3 className="text-lg font-bold text-white">Connect your X account</h3>
          </div>

          {/* Body */}
          <div data-name="connect-x-body" className="p-6 flex flex-col gap-4">
            <p className="text-sm text-neutral-600 leading-relaxed">
              Link your X (formerly Twitter) account to verify your identity and
              earn the{" "}
              <span className="inline-flex items-center gap-1 rounded bg-black px-1.5 py-0.5 text-xs text-white">
                <XLogoIcon className="size-3" />
                Verified Account
              </span>{" "}
              badge on your review.
            </p>

            <div data-name="connect-x-input-group" className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#060D17]">
                Your X handle
              </label>
              <Input
                value={handle}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setHandle(e.target.value)}
                placeholder="@username"
                className="h-12 rounded-lg border-neutral-300 text-base"
              />
            </div>

            <button
              type="button"
              onClick={() => {
                if (handle.trim()) {
                  onConnect(handle.trim().replace(/^@/, ""));
                  onOpenChange(false);
                }
              }}
              disabled={!handle.trim()}
              data-name="connect-x-submit"
              className="w-full h-12 rounded-lg bg-black text-white text-sm font-bold flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              <XLogoIcon className="size-4" />
              Connect via X
            </button>

            <p className="text-xs text-neutral-400 text-center leading-relaxed">
              We only verify your handle. We never post on your behalf.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export function SubmitReviewForm({ slug }: { slug: string }) {
  const casino = casinoReviews.find((c) => c.slug === slug) ?? casinoReviews[0];
  const router = useRouter();
  const { isLoggedIn } = useAuth();
  const [loginOpen, setLoginOpen] = useState(false);

  /* Redirect to login if not authed */
  useEffect(() => {
    if (!isLoggedIn) {
      setLoginOpen(true);
    }
  }, [isLoggedIn]);

  /* Form state */
  const [rating, setRating] = useState(0);
  const [liked, setLiked] = useState([""]);
  const [disliked, setDisliked] = useState([""]);
  const [reviewBody, setReviewBody] = useState("");
  const [reviewTitle, setReviewTitle] = useState("");
  const [publicScreenshots, setPublicScreenshots] = useState<File[]>([]);
  const [withdrawalIssues, setWithdrawalIssues] = useState<boolean | null>(null);
  const [withdrawalDetails, setWithdrawalDetails] = useState("");
  const [rewardPromised, setRewardPromised] = useState<boolean | null>(null);
  const [privateScreenshots, setPrivateScreenshots] = useState<File[]>([]);
  const [xHandle, setXHandle] = useState("");
  const [xConnected, setXConnected] = useState(false);
  const [connectXOpen, setConnectXOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const wordCount = reviewBody
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const isValid =
    rating > 0 &&
    liked.some((l) => l.trim().length > 0) &&
    disliked.some((d) => d.trim().length > 0) &&
    wordCount >= 20 &&
    reviewTitle.trim().length > 0;

  const ratingColor =
    rating > 0
      ? RATING_COLORS[Math.min(4, Math.max(0, rating - 1))]
      : "#a3a3a3";

  const casinoRatingColor =
    RATING_COLORS[Math.min(4, Math.max(0, Math.round(casino.playerRating) - 1))];
  const casinoExpertColor =
    RATING_COLORS[Math.min(4, Math.max(0, Math.round(casino.expertScore) - 1))];

  const handleSubmit = () => {
    if (!isValid) return;
    setSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setSubmitting(false);
      router.push(`/casino/review/${slug}`);
    }, 1500);
  };

  return (
    <div data-section="submit-review" className="bg-[#f5f5f5] min-h-screen">
      {/* Login dialog for unauthenticated users */}
      <LoginDialogContent
        open={loginOpen}
        onOpenChange={setLoginOpen}
        redirectTo={`/casino/review/${slug}/submit-review`}
      />

      {/* Connect X dialog */}
      <ConnectXDialog
        open={connectXOpen}
        onOpenChange={setConnectXOpen}
        onConnect={(h) => {
          setXHandle(`@${h}`);
          setXConnected(true);
        }}
      />

      {/* Dark header — taller to allow card overlap */}
      <div
        data-name="submit-review-header"
        className="bg-[#060D17] pb-28 pt-10"
      >
        <div data-name="submit-review-header-inner" className="mx-auto max-w-[900px] px-5 sm:px-10">
          {/* Breadcrumb */}
          <nav
            data-name="breadcrumb"
            className="flex items-center gap-2 text-sm text-white/60 mb-6"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3" />
            <Link
              href={`/casino/review/${slug}`}
              className="hover:text-white transition-colors"
            >
              {casino.name}
            </Link>
            <ChevronRight className="size-3" />
            <span className="text-white">Write a Review</span>
          </nav>

          <h1 className="text-2xl sm:text-3xl font-black text-white text-center">
            Submit your review of {casino.name}
          </h1>
        </div>
      </div>

      {/* Form body — pulls up into the header via negative margin */}
      <div
        data-name="submit-review-body"
        className="mx-auto max-w-[900px] px-5 sm:px-10 -mt-20 pb-12 flex flex-col gap-5"
      >
        {/* ── Casino Info Card (overlapping header) ── */}
        <div
          data-name="casino-info-card"
          className="bg-white rounded-xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04),0px_4px_8px_0px_rgba(0,0,0,0.06)] p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-5"
        >
          {/* Logo */}
          <div
            data-name="casino-logo"
            className="flex items-center justify-center w-[80px] h-[66px] rounded-xl overflow-hidden bg-[#060d17] shrink-0"
          >
            <Image
              src={casino.logo}
              alt={casino.name}
              width={80}
              height={66}
              className="object-contain w-full h-full"
            />
          </div>

          {/* Casino details */}
          <div data-name="casino-details" className="flex flex-1 flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8">
            <div data-name="casino-name-col" className="flex flex-col gap-1 text-center sm:text-left">
              <h2 className="text-lg font-bold text-[#060D17]">{casino.name}</h2>
              <span className="text-sm text-neutral-500">{casino.owner}</span>
            </div>

            {/* Player Rating */}
            <div data-name="player-rating" className="flex items-center gap-2">
              <PlayerRatingIcon />
              <div data-name="player-rating-detail" className="flex flex-col gap-0.5">
                <div data-name="player-rating-value" className="flex items-center gap-1.5">
                  <span className="text-base font-medium text-[#060D17]">
                    {casino.playerRating.toFixed(1)}
                  </span>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="size-4">
                    <path d={STAR_BG} fill={casinoRatingColor} />
                    <path d={STAR_SHAPE} fill="white" />
                  </svg>
                </div>
                <span className="text-xs text-neutral-500">
                  {casino.playerReviews} Reviews
                </span>
              </div>
            </div>

            {/* Expert Score */}
            <div data-name="expert-score" className="flex items-center gap-2">
              <ExpertShieldIcon />
              <div data-name="expert-score-detail" className="flex flex-col gap-0.5">
                <div data-name="expert-score-value" className="flex items-center gap-1.5">
                  <span className="text-base font-medium text-[#060D17]">
                    {casino.expertScore.toFixed(1)}
                  </span>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="size-4">
                    <rect width="20" height="20" rx="5" fill="#003EB6" />
                    <path d="M10 4.5C7.1 4.5 4.5 5.87 4.5 5.87V10.5C4.5 13.5 7 15.2 10 16.5C13 15.2 15.5 13.5 15.5 10.5V5.87C15.5 5.87 12.9 4.5 10 4.5Z" fill="white" />
                  </svg>
                </div>
                <span className="text-xs text-neutral-500">Expert Score</span>
              </div>
            </div>

            {/* Views */}
            <div data-name="views" className="flex items-center gap-2">
              <Eye className="size-5 text-neutral-400" />
              <div data-name="views-detail" className="flex flex-col">
                <span className="text-base font-semibold text-[#060D17]">
                  {casino.views}
                </span>
                <span className="text-xs text-neutral-500 uppercase">Views</span>
              </div>
            </div>

            {/* Safety Index */}
            <div data-name="safety-index-details" className="flex flex-col gap-1 items-center sm:items-start">
              <span className="text-xs font-bold text-neutral-400 uppercase">
                Safety Index
              </span>
              <span
                className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-[#060d17] w-fit"
                style={{
                  backgroundColor: SAFETY_COLORS[casino.safetyIndex] || "#eaee45",
                }}
              >
                {casino.safetyIndex}
              </span>
            </div>
          </div>
        </div>

        {/* ── Rating Section ── */}
        <div
          data-name="rating-section"
          className="bg-white rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04),0px_4px_8px_0px_rgba(0,0,0,0.06)] p-5 sm:p-6 flex flex-col gap-5"
        >
          {/* Scale bar on top */}
          <RatingScaleBar rating={rating} />

          {/* Prominent rating selector */}
          <div
            data-name="rating-top"
            className="flex flex-col items-center gap-4 rounded-xl border-2 border-dashed border-neutral-200 bg-neutral-50/50 p-6"
          >
            <h3 className="text-xl font-bold text-[#060D17]">
              How was your experience?
            </h3>
            <p className="text-sm text-neutral-500">
              Tap a star to rate your experience
            </p>
            <StarRatingSelector value={rating} onChange={setRating} />
          </div>
        </div>

        {/* ── What I Liked ── */}
        <DynamicListSection
          title="What I liked*"
          subtitle="Positive attributes of the casino"
          items={liked}
          onAdd={() => setLiked([...liked, ""])}
          onRemove={(i) => setLiked(liked.filter((_, idx) => idx !== i))}
          onChange={(i, v) => {
            const next = [...liked];
            next[i] = v;
            setLiked(next);
          }}
          variant="liked"
        />

        {/* ── What I Didn't Like ── */}
        <DynamicListSection
          title="What I didn't like*"
          subtitle="Negative attributes of the casino"
          items={disliked}
          onAdd={() => setDisliked([...disliked, ""])}
          onRemove={(i) => setDisliked(disliked.filter((_, idx) => idx !== i))}
          onChange={(i, v) => {
            const next = [...disliked];
            next[i] = v;
            setDisliked(next);
          }}
          variant="disliked"
        />

        {/* ── Review Body ── */}
        <div
          data-name="review-body-section"
          className="bg-white rounded-lg border border-neutral-200 p-5 sm:p-6 flex flex-col gap-3"
        >
          <div data-name="review-body-header" className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-[#060D17]">
              Write your review*
            </h3>
            <span
              className={`text-sm ${wordCount >= 20 ? "text-[#167715] font-semibold" : "text-neutral-500"}`}
            >
              {wordCount}/20 words minimum
            </span>
          </div>
          <textarea
            value={reviewBody}
            onChange={(e) => setReviewBody(e.target.value)}
            placeholder="State accurate facts and be objective"
            data-name="review-body-input"
            className="w-full min-h-[150px] rounded border border-neutral-300 bg-white px-3 py-3 text-base text-[#1c1c1c] placeholder:text-neutral-400 resize-y focus:outline-none focus:ring-2 focus:ring-[#003EB6]/30 focus:border-[#003EB6]"
          />
          <p className="text-sm text-neutral-500">
            Don&apos;t use explicit language and don&apos;t post personal
            details.
          </p>
        </div>

        {/* ── Review Title ── */}
        <div
          data-name="review-title-section"
          className="bg-white rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04),0px_4px_8px_0px_rgba(0,0,0,0.06)] p-5 sm:p-6 flex flex-col gap-3"
        >
          <h3 className="text-lg font-bold text-[#060D17]">
            Give your review a title*
          </h3>
          <Input
            value={reviewTitle}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setReviewTitle(e.target.value)}
            placeholder="The gist of your experience"
            data-name="review-title-input"
            className="h-[52px] rounded border-neutral-300 text-base"
          />
        </div>

        {/* ── Public Screenshots ── */}
        <div
          data-name="public-screenshots-section"
          className="bg-white rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04),0px_4px_8px_0px_rgba(0,0,0,0.06)] p-5 sm:p-6"
        >
          <FileDropZone
            label="Screenshots of any big wins you've had"
            description="(This will show up as part of your review - Shared with public)"
            files={publicScreenshots}
            onFilesChange={setPublicScreenshots}
            dataName="public-screenshots"
          />
        </div>

        {/* ── Withdrawal Issues ── */}
        <div
          data-name="withdrawal-issues-section"
          className="bg-white rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04),0px_4px_8px_0px_rgba(0,0,0,0.06)] p-5 sm:p-6 flex flex-col gap-3"
        >
          <h3 className="text-lg font-bold text-[#060D17]">
            Did you have any issues withdrawing funds?
          </h3>
          <YesNoToggle value={withdrawalIssues} onChange={setWithdrawalIssues} />
          <p className="text-sm text-neutral-500">
            This includes excessively delayed withdrawals or unjustly blocked
            withdrawals; standard KYC checks are not included.
          </p>

          {/* Expanded detail field when Yes */}
          <AnimatePresence initial={false}>
            {withdrawalIssues === true && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <div data-name="withdrawal-details" className="flex flex-col gap-2 pt-2">
                  <label className="text-sm font-bold text-[#060D17]">
                    Please describe your withdrawal experience
                  </label>
                  <textarea
                    value={withdrawalDetails}
                    onChange={(e) => setWithdrawalDetails(e.target.value)}
                    placeholder="Tell us what happened — how long was the delay, was your withdrawal blocked, did support respond?"
                    data-name="withdrawal-details-input"
                    className="w-full min-h-[100px] rounded border border-neutral-300 bg-white px-3 py-3 text-sm text-[#1c1c1c] placeholder:text-neutral-400 resize-y focus:outline-none focus:ring-2 focus:ring-[#003EB6]/30 focus:border-[#003EB6]"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Private Information Divider ── */}
        <div
          data-name="private-info-divider"
          className="text-center text-lg font-bold text-[#060D17] py-2"
        >
          Private Information (Only CoinBets can see)
        </div>

        {/* ── Reward Promised ── */}
        <div
          data-name="reward-promised-section"
          className="bg-white rounded-lg border border-neutral-200 p-5 sm:p-6 flex flex-col gap-3"
        >
          <h3 className="text-lg font-bold text-[#060D17]">
            Has the casino promised you a reward for writing this review?
          </h3>
          <YesNoToggle value={rewardPromised} onChange={setRewardPromised} />
          <p className="text-sm text-neutral-500">
            This includes a guaranteed gift, a future discount, or entry into a
            chance draw. Companies are allowed to do this as long as the reward
            is offered for both positive and negative reviews.
          </p>
        </div>

        {/* ── Private Screenshots ── */}
        <div
          data-name="private-screenshots-section"
          className="bg-white rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04),0px_4px_8px_0px_rgba(0,0,0,0.06)] p-5 sm:p-6"
        >
          <FileDropZone
            label="Add a screenshot of your casino dashboard or funds deposit email*"
            description="(Private - only CoinBets sees this. This is to combat fake reviews and verify reviews are legitimate.)"
            files={privateScreenshots}
            onFilesChange={setPrivateScreenshots}
            dataName="private-screenshots"
          />
        </div>

        {/* ── X Handle ── */}
        <div
          data-name="x-handle-section"
          className="bg-white rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04),0px_4px_8px_0px_rgba(0,0,0,0.06)] p-5 sm:p-6 flex flex-col gap-3"
        >
          <h3 className="text-lg font-bold text-[#060D17]">Your X Handle</h3>

          {xConnected ? (
            /* Connected state */
            <div data-name="x-connected" className="flex items-center gap-3">
              <div data-name="x-connected-badge" className="flex items-center gap-2 rounded-lg bg-black px-3 py-2">
                <XLogoIcon className="size-4 text-white" />
                <span className="text-sm font-semibold text-white">{xHandle}</span>
              </div>
              <span data-name="x-connected-label" className="inline-flex items-center gap-1 text-sm font-medium text-[#167715]">
                <Check className="size-4" />
                Connected
              </span>
              <button
                type="button"
                onClick={() => {
                  setXConnected(false);
                  setXHandle("");
                }}
                data-name="x-disconnect"
                className="text-sm text-neutral-500 hover:text-neutral-700 transition-colors cursor-pointer ml-auto"
              >
                Disconnect
              </button>
            </div>
          ) : (
            /* Not connected state */
            <div data-name="x-not-connected" className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Input
                value={xHandle}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setXHandle(e.target.value)}
                placeholder="@xhandle"
                data-name="x-handle-input"
                className="h-[52px] rounded border-neutral-300 text-base flex-1"
              />
              <button
                type="button"
                onClick={() => setConnectXOpen(true)}
                data-name="connect-x-btn"
                className="flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-sm font-bold text-white hover:bg-neutral-800 transition-colors cursor-pointer shrink-0"
              >
                <XLogoIcon className="size-4" />
                Connect via X
              </button>
            </div>
          )}

          <p className="text-xs text-neutral-400">
            Connecting your X account earns you a Verified Account badge on your review.
          </p>
        </div>

        {/* ── Submit Button ── */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!isValid || submitting}
          data-name="submit-review-btn"
          className="w-full h-[50px] rounded bg-[#003EB6] text-sm font-extrabold text-white uppercase tracking-wider hover:bg-[#002d8a] transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          {submitting ? "Submitting..." : "Submit Review"}
        </button>
      </div>
    </div>
  );
}

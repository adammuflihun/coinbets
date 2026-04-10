"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback, type ChangeEvent } from "react";
import {
  ChevronRight,
  ChevronDown,
  Plus,
  Minus,
  Check,
  Upload,
  X,
  ImageIcon,
  Eye,
  Pencil,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AnimatePresence, motion } from "motion/react";
import type { CasinoReview } from "@/data/casino-reviews";

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
      <path d="M8.32 5.93L13.49 0H12.27L7.78 5.15L4.2 0H0L5.42 7.78L0 14H1.22L5.96 8.56L9.74 14H13.94L8.32 5.93ZM6.58 7.85L6.03 7.08L1.66 0.91H3.61L7.07 5.89L7.62 6.66L12.27 13.13H10.32L6.58 7.85Z" fill="currentColor" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function StarRatingSelector({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const display = hovered ?? value;
  const label = display > 0 ? RATING_LABELS[display - 1] : "Select a rating";
  const color = display > 0 ? RATING_COLORS[display - 1] : "#a3a3a3";

  return (
    <div data-name="star-rating-selector" className="flex flex-col items-center gap-2 w-full">
      <div data-name="star-buttons" className="flex items-center gap-1.5 sm:gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onChange(star)}
            data-name={`star-btn-${star}`}
            className={`flex items-center justify-center size-11 sm:size-14 rounded-xl border-2 transition-all cursor-pointer ${
              star <= display
                ? "border-transparent scale-105 shadow-md"
                : "border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-sm"
            }`}
            style={{ backgroundColor: star <= display ? color : undefined }}
          >
            <svg width="28" height="28" viewBox="0 0 20 20" fill="none">
              <path d={STAR_BG} fill={star <= display ? "rgba(255,255,255,0.25)" : "#DDDDDD"} />
              <path d={STAR_SHAPE} fill="white" />
            </svg>
          </button>
        ))}
      </div>
      <span data-name="star-selected-label" className="text-base font-bold transition-colors" style={{ color }}>
        {label}
      </span>
    </div>
  );
}

function RatingScaleBar({ rating }: { rating: number }) {
  return (
    <div data-name="rating-scale-bar" className="flex flex-col gap-1 w-full">
      <div data-name="scale-numbers" className="flex w-full">
        {[1, 2, 3, 4, 5].map((n) => (
          <span key={n} className={`flex-1 text-xs font-bold text-center ${n === rating ? "text-[#060D17]" : "text-neutral-400"}`}>{n}</span>
        ))}
      </div>
      <div data-name="scale-bars" className="flex w-full rounded-full overflow-hidden">
        {RATING_COLORS.map((color, i) => (
          <div key={i} className={`h-2 flex-1 transition-opacity ${rating > 0 && i + 1 <= rating ? "opacity-100" : "opacity-30"}`} style={{ backgroundColor: color }} />
        ))}
      </div>
      <div data-name="scale-labels" className="flex w-full">
        {RATING_LABELS.map((l, i) => (
          <span key={l} className={`flex-1 text-[9px] font-bold uppercase tracking-wider text-center ${i + 1 === rating ? "text-[#060D17]" : "text-neutral-400"}`}>{l}</span>
        ))}
      </div>
    </div>
  );
}

function YesNoToggle({ value, onChange }: { value: boolean | null; onChange: (v: boolean) => void }) {
  return (
    <div data-name="yes-no-toggle" className="flex items-start">
      <button type="button" onClick={() => onChange(true)} data-name="toggle-yes"
        className={`px-3 py-1.5 text-sm font-bold rounded-l border transition-colors cursor-pointer ${value === true ? "bg-[#003EB6] text-white border-[#003EB6]" : "bg-[#f8f8f8] text-[#060D17] border-neutral-300 hover:bg-neutral-100"}`}>Yes</button>
      <button type="button" onClick={() => onChange(false)} data-name="toggle-no"
        className={`px-3 py-1.5 text-sm font-bold rounded-r border border-l-0 transition-colors cursor-pointer ${value === false ? "bg-[#003EB6] text-white border-[#003EB6]" : "bg-[#f8f8f8] text-[#060D17] border-neutral-300 hover:bg-neutral-100"}`}>No</button>
    </div>
  );
}

function DynamicListSection({ title, subtitle, items, onAdd, onRemove, onChange, variant }: {
  title: string; subtitle: string; items: string[];
  onAdd: () => void; onRemove: (i: number) => void; onChange: (i: number, v: string) => void;
  variant: "liked" | "disliked";
}) {
  const isLiked = variant === "liked";
  const bgClass = isLiked ? "bg-[#e4ffef]" : "bg-[#f7f3f2]";
  const iconBg = isLiked ? "bg-[#167715]" : "bg-[#da3131]";

  return (
    <div data-name={`section-${variant}`} className={`${bgClass} border border-neutral-200 rounded-lg p-4 flex flex-col gap-2.5`}>
      <div data-name={`${variant}-header`} className="flex items-center justify-between">
        <h3 className="text-base font-bold text-[#060D17]">{title}</h3>
        <span className="text-xs text-neutral-500">{subtitle}</span>
      </div>
      {items.map((item, i) => (
        <div key={i} data-name={`${variant}-item-${i}`} className="flex items-center gap-2">
          <div data-name={`${variant}-icon`} className={`size-5 rounded-full ${iconBg} flex items-center justify-center shrink-0`}>
            {isLiked ? <Check className="size-3 text-white" /> : <Minus className="size-3 text-white" />}
          </div>
          <Input value={item} onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(i, e.target.value)} placeholder="Write" className="h-9 rounded bg-white border-neutral-300 text-sm flex-1" />
          {items.length > 1 && (
            <button type="button" onClick={() => onRemove(i)} className="size-7 flex items-center justify-center rounded-full hover:bg-neutral-200 transition-colors cursor-pointer shrink-0">
              <X className="size-3.5 text-neutral-500" />
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={onAdd} data-name={`${variant}-add-more`}
        className={`flex items-center justify-center gap-1.5 rounded-lg border-2 border-dashed py-2 transition-colors cursor-pointer text-xs font-bold ${isLiked ? "border-[#167715]/30 text-[#167715] hover:bg-[#167715]/10" : "border-[#da3131]/30 text-[#da3131] hover:bg-[#da3131]/10"}`}>
        <Plus className="size-3.5" /> Add more
      </button>
    </div>
  );
}

function FileDropZone({ label, description, files, onFilesChange, dataName }: {
  label: string; description: string; files: File[]; onFilesChange: (f: File[]) => void; dataName: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div data-name={dataName} className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <ImageIcon className="size-5 text-[#003EB6] shrink-0" />
        <h3 className="text-base font-bold text-[#060D17]">{label}</h3>
      </div>
      <p className="text-xs text-neutral-500">{description}</p>
      <button type="button" onClick={() => inputRef.current?.click()}
        onDrop={(e) => { e.preventDefault(); onFilesChange([...files, ...Array.from(e.dataTransfer.files).filter(f => f.type.startsWith("image/"))]); }}
        onDragOver={(e) => e.preventDefault()}
        className="flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[#003EB6] bg-white px-4 py-5 text-xs text-neutral-500 hover:bg-neutral-50 transition-colors cursor-pointer">
        <Upload className="size-4 text-neutral-400" /> Click to select file(s) or drag & drop here
      </button>
      <input ref={inputRef} type="file" accept="image/*" multiple className="hidden" onChange={(e) => { if (e.target.files) onFilesChange([...files, ...Array.from(e.target.files)]); }} />
      {files.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {files.map((file, i) => (
            <div key={i} className="relative size-16 rounded-lg overflow-hidden bg-neutral-100 border border-neutral-200">
              <Image src={URL.createObjectURL(file)} alt={file.name} fill className="object-cover" />
              <button type="button" onClick={() => onFilesChange(files.filter((_, idx) => idx !== i))} className="absolute top-0.5 right-0.5 size-4 rounded-full bg-black/60 flex items-center justify-center cursor-pointer">
                <X className="size-2.5 text-white" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ConnectXDialog({ open, onOpenChange, onConnect }: { open: boolean; onOpenChange: (v: boolean) => void; onConnect: (h: string) => void }) {
  const [handle, setHandle] = useState("");
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent data-section="connect-x-dialog" className="sm:max-w-[440px] p-0 gap-0 overflow-hidden">
        <div className="flex flex-col">
          <div className="bg-black px-6 py-4 flex items-center gap-3">
            <XLogoIcon className="size-5 text-white" />
            <h3 className="text-base font-bold text-white">Connect your X account</h3>
          </div>
          <div className="p-5 flex flex-col gap-3">
            <p className="text-sm text-neutral-600">Link your X account to earn the <span className="inline-flex items-center gap-1 rounded bg-black px-1.5 py-0.5 text-xs text-white"><XLogoIcon className="size-3" /> Verified</span> badge.</p>
            <Input value={handle} onChange={(e: ChangeEvent<HTMLInputElement>) => setHandle(e.target.value)} placeholder="@username" className="h-11 rounded-lg border-neutral-300 text-sm" />
            <button type="button" onClick={() => { if (handle.trim()) { onConnect(handle.trim().replace(/^@/, "")); onOpenChange(false); } }} disabled={!handle.trim()}
              className="w-full h-11 rounded-lg bg-black text-white text-sm font-bold flex items-center justify-center gap-2 hover:bg-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer">
              <XLogoIcon className="size-4" /> Connect via X
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Sheet Component                                               */
/* ------------------------------------------------------------------ */

export function SubmitReviewSheet({
  casino,
  open,
  onOpenChange,
}: {
  casino: CasinoReview;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

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

  const wordCount = reviewBody.trim().split(/\s+/).filter(Boolean).length;
  const isValid = rating > 0 && liked.some(l => l.trim().length > 0) && disliked.some(d => d.trim().length > 0) && wordCount >= 20 && reviewTitle.trim().length > 0;

  const casinoRatingColor = RATING_COLORS[Math.min(4, Math.max(0, Math.round(casino.playerRating) - 1))];

  const hasData = rating > 0 || liked.some(l => l.trim()) || disliked.some(d => d.trim()) || reviewBody.trim() || reviewTitle.trim();

  /* Expose hasData to parent via callback */
  const onOpenChangeWrapped = useCallback((v: boolean) => {
    onOpenChange(v);
  }, [onOpenChange]);

  const handleSubmit = () => {
    if (!isValid) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onOpenChange(false);
      // Reset form
      setRating(0); setLiked([""]); setDisliked([""]); setReviewBody(""); setReviewTitle("");
      setPublicScreenshots([]); setWithdrawalIssues(null); setWithdrawalDetails("");
      setRewardPromised(null); setPrivateScreenshots([]); setXHandle(""); setXConnected(false);
    }, 1500);
  };

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <ConnectXDialog open={connectXOpen} onOpenChange={setConnectXOpen} onConnect={(h) => { setXHandle(`@${h}`); setXConnected(true); }} />

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop — click to close, semi-transparent so content behind is visible */}
            <motion.div
              data-name="review-sheet-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-black/40"
              onClick={() => onOpenChangeWrapped(false)}
            />

            {/* Bottom sheet */}
            <motion.div
              data-name="review-sheet"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-x-0 bottom-0 z-[61] flex flex-col bg-[#f5f5f5] rounded-t-2xl shadow-2xl"
              style={{ maxHeight: "92vh" }}
            >
              {/* Drag handle + header */}
              <div data-name="review-sheet-header" className="sticky top-0 z-10 rounded-t-2xl shrink-0">
                {/* Drag indicator */}
                <div data-name="drag-handle" className="flex justify-center pt-3 pb-2 bg-white rounded-t-2xl cursor-pointer" onClick={() => onOpenChangeWrapped(false)}>
                  <div className="w-10 h-1 rounded-full bg-neutral-300" />
                </div>

                {/* Casino info bar — white bg, constrained to form width */}
                <div data-name="sheet-casino-info-wrapper" className="bg-white px-5 pb-3 border-b border-neutral-200">
                  <div data-name="sheet-casino-info" className="max-w-[680px] mx-auto bg-white rounded-lg border border-neutral-200 px-4 py-3 flex items-center gap-3">
                    <div data-name="sheet-casino-logo" className="flex items-center justify-center w-[44px] h-[36px] rounded-lg overflow-hidden bg-[#060d17] shrink-0">
                      <Image src={casino.logo} alt={casino.name} width={44} height={36} className="object-contain w-full h-full" />
                    </div>
                    <div data-name="sheet-casino-title" className="flex-1 min-w-0">
                      <h2 className="text-sm font-bold text-[#060D17] truncate">Review {casino.name}</h2>
                      <div data-name="sheet-casino-meta" className="flex items-center gap-3 mt-0.5">
                        <span className="flex items-center gap-1 text-xs text-neutral-500">
                          <span className="text-[#060D17] font-medium">{casino.playerRating.toFixed(1)}</span>
                          <svg width="12" height="12" viewBox="0 0 20 20" fill="none"><path d={STAR_BG} fill={casinoRatingColor} /><path d={STAR_SHAPE} fill="white" /></svg>
                          {casino.playerReviews} reviews
                        </span>
                        <span className="rounded-full px-1.5 py-0.5 text-[10px] font-semibold text-[#060d17]" style={{ backgroundColor: SAFETY_COLORS[casino.safetyIndex] || "#eaee45" }}>
                          {casino.safetyIndex}
                        </span>
                      </div>
                    </div>
                    <button type="button" onClick={() => onOpenChangeWrapped(false)} data-name="sheet-close"
                      className="size-8 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors cursor-pointer shrink-0">
                      <X className="size-4 text-neutral-500" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Scrollable form body */}
              <div ref={scrollRef} data-name="review-sheet-body" className="flex-1 overflow-y-auto overscroll-contain" style={{ scrollbarWidth: "thin" }}>
                <div data-name="review-sheet-form" className="max-w-[680px] mx-auto px-5 py-5 flex flex-col gap-4">

                  {/* Rating */}
                  <div data-name="rating-section" className="bg-white rounded-lg shadow-sm p-4 flex flex-col gap-3">
                    <RatingScaleBar rating={rating} />
                    <div data-name="rating-top" className="flex flex-col items-center gap-3 rounded-xl border-2 border-dashed border-neutral-200 bg-neutral-50/50 p-4">
                      <h3 className="text-lg font-bold text-[#060D17]">How was your experience?</h3>
                      <p className="text-xs text-neutral-500">Tap a star to rate</p>
                      <StarRatingSelector value={rating} onChange={setRating} />
                    </div>
                  </div>

                  {/* What I liked */}
                  <DynamicListSection title="What I liked*" subtitle="Positive attributes" items={liked}
                    onAdd={() => setLiked([...liked, ""])} onRemove={(i) => setLiked(liked.filter((_, idx) => idx !== i))}
                    onChange={(i, v) => { const n = [...liked]; n[i] = v; setLiked(n); }} variant="liked" />

                  {/* What I didn't like */}
                  <DynamicListSection title="What I didn't like*" subtitle="Negative attributes" items={disliked}
                    onAdd={() => setDisliked([...disliked, ""])} onRemove={(i) => setDisliked(disliked.filter((_, idx) => idx !== i))}
                    onChange={(i, v) => { const n = [...disliked]; n[i] = v; setDisliked(n); }} variant="disliked" />

                  {/* Review body */}
                  <div data-name="review-body-section" className="bg-white rounded-lg border border-neutral-200 p-4 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-[#060D17]">Write your review*</h3>
                      <span className={`text-xs ${wordCount >= 20 ? "text-[#167715] font-semibold" : "text-neutral-500"}`}>{wordCount}/20 min</span>
                    </div>
                    <textarea value={reviewBody} onChange={(e) => setReviewBody(e.target.value)} placeholder="State accurate facts and be objective"
                      className="w-full min-h-[120px] rounded border border-neutral-300 bg-white px-3 py-2.5 text-sm text-[#1c1c1c] placeholder:text-neutral-400 resize-y focus:outline-none focus:ring-2 focus:ring-[#003EB6]/30 focus:border-[#003EB6]" />
                    <p className="text-xs text-neutral-500">Don&apos;t use explicit language or post personal details.</p>
                  </div>

                  {/* Title */}
                  <div data-name="review-title-section" className="bg-white rounded-lg shadow-sm p-4 flex flex-col gap-2">
                    <h3 className="text-base font-bold text-[#060D17]">Give your review a title*</h3>
                    <Input value={reviewTitle} onChange={(e: ChangeEvent<HTMLInputElement>) => setReviewTitle(e.target.value)} placeholder="The gist of your experience" className="h-10 rounded border-neutral-300 text-sm" />
                  </div>

                  {/* Public screenshots */}
                  <div data-name="public-screenshots-section" className="bg-white rounded-lg shadow-sm p-4">
                    <FileDropZone label="Screenshots of big wins" description="(Shared with public)" files={publicScreenshots} onFilesChange={setPublicScreenshots} dataName="public-screenshots" />
                  </div>

                  {/* Withdrawal issues */}
                  <div data-name="withdrawal-issues-section" className="bg-white rounded-lg shadow-sm p-4 flex flex-col gap-2">
                    <h3 className="text-base font-bold text-[#060D17]">Any issues withdrawing funds?</h3>
                    <YesNoToggle value={withdrawalIssues} onChange={setWithdrawalIssues} />
                    <p className="text-xs text-neutral-500">Excessively delayed or unjustly blocked withdrawals; standard KYC not included.</p>
                    <AnimatePresence initial={false}>
                      {withdrawalIssues === true && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: "hidden" }}>
                          <textarea value={withdrawalDetails} onChange={(e) => setWithdrawalDetails(e.target.value)} placeholder="Describe what happened..."
                            className="w-full min-h-[80px] rounded border border-neutral-300 bg-white px-3 py-2.5 text-sm placeholder:text-neutral-400 resize-y focus:outline-none focus:ring-2 focus:ring-[#003EB6]/30 mt-1" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Private divider */}
                  <div data-name="private-info-divider" className="text-center text-sm font-bold text-[#060D17] py-1">Private Information (Only CoinBets can see)</div>

                  {/* Reward promised */}
                  <div data-name="reward-promised-section" className="bg-white rounded-lg border border-neutral-200 p-4 flex flex-col gap-2">
                    <h3 className="text-base font-bold text-[#060D17]">Casino promised a reward for this review?</h3>
                    <YesNoToggle value={rewardPromised} onChange={setRewardPromised} />
                    <p className="text-xs text-neutral-500">Includes gifts, discounts, or chance draws offered for both positive and negative reviews.</p>
                  </div>

                  {/* Private screenshots */}
                  <div data-name="private-screenshots-section" className="bg-white rounded-lg shadow-sm p-4">
                    <FileDropZone label="Casino dashboard or deposit email*" description="(Private — only CoinBets sees this)" files={privateScreenshots} onFilesChange={setPrivateScreenshots} dataName="private-screenshots" />
                  </div>

                  {/* X Handle */}
                  <div data-name="x-handle-section" className="bg-white rounded-lg shadow-sm p-4 flex flex-col gap-2">
                    <h3 className="text-base font-bold text-[#060D17]">Your X Handle</h3>
                    {xConnected ? (
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1.5 rounded-lg bg-black px-2.5 py-1.5 text-xs font-semibold text-white"><XLogoIcon className="size-3" />{xHandle}</span>
                        <span className="text-xs font-medium text-[#167715] flex items-center gap-0.5"><Check className="size-3.5" /> Connected</span>
                        <button type="button" onClick={() => { setXConnected(false); setXHandle(""); }} className="text-xs text-neutral-500 hover:text-neutral-700 cursor-pointer ml-auto">Disconnect</button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Input value={xHandle} onChange={(e: ChangeEvent<HTMLInputElement>) => setXHandle(e.target.value)} placeholder="@xhandle" className="h-10 rounded border-neutral-300 text-sm flex-1" />
                        <button type="button" onClick={() => setConnectXOpen(true)} className="flex items-center gap-1.5 rounded-lg bg-black px-3.5 py-2.5 text-xs font-bold text-white hover:bg-neutral-800 cursor-pointer shrink-0">
                          <XLogoIcon className="size-3.5" /> Connect
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Submit */}
                  <button type="button" onClick={handleSubmit} disabled={!isValid || submitting} data-name="submit-review-btn"
                    className="w-full h-12 rounded-lg bg-[#003EB6] text-sm font-extrabold text-white uppercase tracking-wider hover:bg-[#002d8a] transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer">
                    {submitting ? "Submitting..." : "Submit Review"}
                  </button>

                  {/* Bottom spacer for safe area */}
                  <div className="h-4" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Continue Review Bar                                                */
/* ------------------------------------------------------------------ */

export function ContinueReviewBar({
  casinoName,
  onContinue,
}: {
  casinoName: string;
  onContinue: () => void;
}) {
  return (
    <motion.div
      data-name="continue-review-bar"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 80, opacity: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="fixed bottom-0 inset-x-0 z-50 bg-[#060D17] border-t border-white/10 shadow-2xl"
    >
      <div data-name="continue-review-inner" className="mx-auto max-w-[1280px] px-5 sm:px-10 py-3 flex items-center justify-between gap-4">
        <div data-name="continue-review-text" className="flex items-center gap-3 min-w-0">
          <div data-name="continue-review-icon" className="size-9 rounded-full bg-[#003EB6] flex items-center justify-center shrink-0">
            <Pencil className="size-4 text-white" />
          </div>
          <div data-name="continue-review-label" className="flex flex-col min-w-0">
            <span className="text-sm font-bold text-white truncate">Continue your review</span>
            <span className="text-xs text-white/50 truncate">You have an unfinished review for {casinoName}</span>
          </div>
        </div>
        <button
          type="button"
          onClick={onContinue}
          data-name="continue-review-btn"
          className="shrink-0 flex items-center gap-2 rounded-lg bg-[#eab914] px-4 py-2.5 text-sm font-bold text-[#060D17] hover:bg-[#d4a812] transition-colors cursor-pointer"
        >
          Continue
          <ChevronRight className="size-4" />
        </button>
      </div>
    </motion.div>
  );
}

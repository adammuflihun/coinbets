"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Eye,
  MessageSquare,
  Plus,
  ExternalLink,
  Send,
} from "lucide-react";
import "flag-icons/css/flag-icons.min.css";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardAction, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { type ComplaintDetailData, type ComplaintStatus } from "@/data/complaints";

/* ─── Rating constants (shared with complaint-card) ─── */

const STAR_BG =
  "M15.9988 0H4C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0Z";
const STAR_SHAPE =
  "M10.38 4.035a.75.75 0 0 0-.753 0c-.206.098-.32.269-.377.362a4.7 4.7 0 0 0-.18.34L7.814 7.285l-2.813.411a4.7 4.7 0 0 0-.378.065c-.107.026-.304.081-.46.247a.75.75 0 0 0-.233.716c.03.226.157.387.228.47.074.087.172.182.268.276l2.034 1.981-.48 2.8a4.7 4.7 0 0 0-.055.38c-.009.11-.017.314.092.515a.75.75 0 0 0 .61.443c.224.041.416-.03.517-.072a4.7 4.7 0 0 0 .345-.17l2.514-1.322 2.515 1.322c.118.063.24.127.344.17.102.042.294.113.518.072a.75.75 0 0 0 .61-.443c.108-.2.1-.405.091-.515a4.7 4.7 0 0 0-.055-.38l-.48-2.799 2.035-1.982a4.7 4.7 0 0 0 .268-.275c.071-.083.198-.244.228-.47a.75.75 0 0 0-.232-.717c-.157-.165-.354-.221-.461-.247a4.7 4.7 0 0 0-.378-.065l-2.813-.411-1.257-2.548a4.7 4.7 0 0 0-.18-.34.75.75 0 0 0-.377-.362Z";

const RATING_COLORS: Record<number, string> = {
  5: "#23BA21",
  4: "#9FF11A",
  3: "#D8DC00",
  2: "#FFB257",
  1: "#FF6847",
};

const STATUS_CONFIG: Record<
  ComplaintStatus,
  { bg: string; hex: string; svgFill: string; label: string }
> = {
  resolved: { bg: "bg-[#16a34a]", hex: "#16a34a", svgFill: "#16a34a", label: "Case Closed" },
  unresolved: { bg: "bg-[#dc2626]", hex: "#dc2626", svgFill: "#dc2626", label: "Case Open" },
  opened: { bg: "bg-[#1d4ed8]", hex: "#1d4ed8", svgFill: "#1d4ed8", label: "Case Open" },
  rejected: { bg: "bg-[#030712]", hex: "#030712", svgFill: "#ffffff", label: "Case Rejected" },
};

/* ─── Helper components ─── */

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

/* ─── Sample replies ─── */

interface Reply {
  id: string;
  author: {
    name: string;
    rank: string;
    rankColor: string;
    postCount: number;
    countryCode: string;
    isOnline: boolean;
  };
  postedTime: string;
  content: string;
  label?: string;
  labelColor?: string;
}

const SAMPLE_REPLIES: Reply[] = [
  {
    id: "r1",
    author: {
      name: "Thomas",
      rank: "Complaint Specialist",
      rankColor: "#003EB6",
      postCount: 14520,
      countryCode: "cz",
      isOnline: true,
    },
    postedTime: "Posted Friday \u2013 10:32 AM",
    label: "Coinbets Response",
    labelColor: "#003EB6",
    content:
      "Dear Chris, thank you for submitting your complaint. We have reviewed your case and contacted Lucky Block Casino directly regarding the network errors you experienced during your high-stake blackjack sessions. We have requested server logs and game history records from the casino to verify your claims.\n\nWe will keep you updated on the progress. In the meantime, please provide any screenshots or recordings of the errors if available.",
  },
  {
    id: "r2",
    author: {
      name: "Chris",
      rank: "Rookie Bettor",
      rankColor: "#cb632a",
      postCount: 8280,
      countryCode: "gb",
      isOnline: true,
    },
    postedTime: "Posted Friday \u2013 02:15 PM",
    content:
      "Thank you for the quick response. I have attached the screenshots from my phone showing the network error messages. Each time the error occurred, the game counted it as a loss even though the round had not completed. This happened four times consecutively.",
  },
];

/* ─── Rich text toolbar ─── */

const TOOLBAR_ACTIONS = [
  { path: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z", command: "bold", label: "Bold" },
  { path: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z", command: "italic", label: "Italic" },
  { path: "M5 4v3h5.5v12h3V7H19V4z", command: "formatBlock", arg: "h1", label: "H1" },
  { path: "M5 4v3h5.5v12h3V7H19V4z", command: "formatBlock", arg: "h2", label: "H2" },
  { path: "M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z", command: "formatBlock", arg: "blockquote", label: "Quote" },
  { path: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z", command: "createLink", label: "Link" },
  { path: "M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z", command: "insertUnorderedList", label: "Bullet list" },
  { path: "M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z", command: "insertOrderedList", label: "Numbered list" },
  { path: "M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.67L13.88 11h-3.76L12 5.67z", command: "formatBlock", arg: "p", label: "Paragraph" },
];

/* ─── Main component ─── */

export function ComplaintDetail({
  complaint,
}: {
  complaint: ComplaintDetailData;
}) {
  const [translationOn, setTranslationOn] = useState(false);
  const [quotedReply, setQuotedReply] = useState<{
    author: string;
    content: string;
  } | null>(null);
  const [submittedComments, setSubmittedComments] = useState<
    { id: string; parentId: string; content: string; quote: { author: string; content: string } | null; timestamp: string }[]
  >([]);
  const editorRef = useRef<HTMLDivElement>(null);
  const commentCardRef = useRef<HTMLDivElement>(null);
  const config = STATUS_CONFIG[complaint.status];

  const [replyTargetId, setReplyTargetId] = useState<string | null>(null);

  function handleReplyQuote(parentId: string, author: string, content: string) {
    setReplyTargetId(parentId);
    setQuotedReply({ author, content });
    commentCardRef.current?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => editorRef.current?.focus(), 400);
  }

  function handleSubmitComment() {
    const text = editorRef.current?.innerText?.trim();
    if (!text) return;
    setSubmittedComments((prev) => [
      ...prev,
      {
        id: `c-${Date.now()}`,
        parentId: replyTargetId ?? "main",
        content: editorRef.current?.innerHTML ?? text,
        quote: quotedReply,
        timestamp: new Date().toLocaleString("en-GB", {
          weekday: "long",
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    if (editorRef.current) editorRef.current.innerHTML = "";
    setQuotedReply(null);
    setReplyTargetId(null);
  }

  function renderTimelineComments(parentId: string) {
    const comments = submittedComments.filter((c) => c.parentId === parentId);
    if (comments.length === 0) return null;
    return (
      <div data-name="inline-timeline" className="mt-4 flex flex-col">
        {comments.map((comment, i) => (
          <div
            key={comment.id}
            data-name="timeline-item"
            className="flex gap-4"
          >
            <div data-name="timeline-connector" className="flex flex-col items-center">
              <div
                data-name="timeline-dot"
                className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#e6b830]"
              >
                <MessageSquare className="size-4 text-[#1c1c1c]" />
              </div>
              {i < comments.length - 1 && (
                <Separator orientation="vertical" className="my-1 min-h-[40px] flex-1" />
              )}
            </div>
            <Card data-name="timeline-card" size="sm" className="mb-4 flex-1">
              <CardHeader>
                <CardTitle data-name="timeline-author">You</CardTitle>
                <CardDescription data-name="timeline-time">
                  {comment.timestamp}
                </CardDescription>
              </CardHeader>
              {comment.quote && (
                <CardContent>
                  <div data-name="timeline-quote" className="rounded-lg bg-muted p-2.5">
                    <p className="text-xs font-semibold text-muted-foreground">
                      Replying to {comment.quote.author}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {comment.quote.content}
                      {comment.quote.content.length >= 200 && "..."}
                    </p>
                  </div>
                </CardContent>
              )}
              <CardContent>
                <div
                  data-name="timeline-text"
                  className="text-sm leading-relaxed text-card-foreground [&_h1]:text-lg [&_h1]:font-bold [&_h2]:text-base [&_h2]:font-bold [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5"
                  dangerouslySetInnerHTML={{ __html: comment.content }}
                />
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    );
  }

  function execToolbarCommand(command: string, arg?: string) {
    if (command === "createLink") {
      const url = prompt("Enter URL:");
      if (url) document.execCommand(command, false, url);
    } else if (arg) {
      document.execCommand(command, false, arg);
    } else {
      document.execCommand(command, false);
    }
  }

  return (
    <section data-section="complaint-detail">
      {/* ═══ Case Header (dark background) ═══ */}
      <div
        data-name="case-header-bg"
        className="relative overflow-hidden bg-[#020202] pb-10 pt-8"
      >
        <svg
          data-name="case-header-background"
          className="absolute inset-0 size-full"
          viewBox="0 0 1600 252"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <g clipPath="url(#clip-complaint)">
            <rect width="1600" height="252" fill="#020202" />
            <g opacity="0.6" filter="url(#blur1-complaint)">
              <path d="M215.048 25.0938L8.41406 -65.9299V-158H1758.79L1732.63 3.64571L1611.79 11.4926L1515.54 74.2676L1373.77 -15.7099L1200.09 53.8657L1075.07 -15.7099L846.983 74.2676L565.542 -82.1468L215.048 25.0938Z" fill={config.svgFill} />
            </g>
            <g filter="url(#blur2-complaint)">
              <path d="M1384.74 78.0938L1591.37 -12.9299V-105H-159.003L-132.847 56.6457L-12.005 64.4926L84.25 127.268L226.017 37.2901L399.694 106.866L524.721 37.2901L752.804 127.268L1034.24 -29.1468L1384.74 78.0938Z" fill={config.svgFill} />
            </g>
          </g>
          <defs>
            <filter id="blur1-complaint" x="-155.586" y="-322" width="2078.38" height="560.268" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="82" result="effect1" />
            </filter>
            <filter id="blur2-complaint" x="-323.004" y="-269" width="2078.38" height="560.268" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="82" result="effect1" />
            </filter>
            <clipPath id="clip-complaint">
              <rect width="1600" height="252" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div data-name="case-header-container" className="relative mx-auto max-w-[900px] px-5 sm:px-10">
          {/* Breadcrumb */}
          <nav
            data-name="breadcrumb"
            className="mb-5 flex items-center gap-2 text-sm text-white/60"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="size-3" />
            <Link
              href="/complaints"
              className="transition-colors hover:text-white"
            >
              Complaints
            </Link>
            <ChevronRight className="size-3" />
            <span className="text-white">Case Complaint</span>
          </nav>

          {/* Thread Card */}
          <div
            data-name="case-thread"
            className="flex flex-col overflow-hidden rounded-lg sm:flex-row"
          >
            {/* Verdict Panel */}
            <div
              data-name="verdict-panel"
              className={`flex w-full shrink-0 flex-col items-center justify-center gap-2 px-4 py-6 text-white sm:w-[212px] ${config.bg}`}
            >
              <span
                data-name="verdict-status-badge"
                className="rounded-md bg-white px-2.5 py-0.5 text-xs font-bold uppercase tracking-widest text-[#060d17]"
              >
                {config.label}
              </span>
              <span
                data-name="verdict-label"
                className="text-xs font-bold uppercase tracking-widest text-white/80"
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

            {/* Content Panel */}
            <div
              data-name="case-content-panel"
              className="flex flex-1 flex-col gap-4 border border-[#f2f4f7] bg-white p-6"
            >
              {/* Dates */}
              <div
                data-name="submission-dates"
                className="flex items-center gap-2.5 text-sm text-[#1c1c1c]"
              >
                <span data-name="submitted-date" className="opacity-60">
                  Submitted: {complaint.submittedDate}
                </span>
                {complaint.verdictDate && (
                  <span data-name="verdict-date" className="font-bold">
                    Verdict : {complaint.verdictDate}
                  </span>
                )}
              </div>

              <h2
                data-name="case-title"
                className="text-xl font-bold leading-[1.4] tracking-tight text-[#1c1c1c]"
              >
                {complaint.title}
              </h2>

              <p data-name="case-amount" className="text-base text-[#1c1c1c]">
                Disputed amount:{" "}
                <span className="font-bold">{complaint.disputedAmount}</span>
              </p>

              {/* Casino Info + Ratings */}
              <div
                data-name="casino-rating-row"
                className="flex flex-col gap-4 rounded-lg bg-[#f5f5f5] p-4"
              >
                {/* Casino Product */}
                <Link
                  href={`/casino/review/${complaint.casino.slug}`}
                  data-name="review-product"
                  className="flex items-start gap-3.5 transition-opacity hover:opacity-80"
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
                            complaint.casino.safetyIndex === "High"
                              ? "#00de00"
                              : "#eaee45",
                        }}
                      >
                        {complaint.casino.safetyIndex}
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Ratings + Dates */}
                <div
                  data-name="ratings-dates-row"
                  className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
                >
                  {/* Ratings */}
                  <div
                    data-name="expert-ratings"
                    className="flex items-start gap-6"
                  >
                    {/* Player Rating */}
                    <div data-name="player-rating" className="flex items-start gap-2.5">
                      <PlayerRatingIcon />
                      <div data-name="player-rating-detail" className="flex flex-col gap-1">
                        <div data-name="player-score-row" className="flex items-center gap-1.5">
                          <span className="text-[23px] font-medium leading-none text-[#060d17]">
                            {complaint.casino.playerRating.toFixed(1)}
                          </span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="size-5 shrink-0">
                            <path d={STAR_BG} fill={RATING_COLORS[Math.min(5, Math.max(1, Math.round(complaint.casino.playerRating)))] ?? RATING_COLORS[3]} />
                            <path d={STAR_SHAPE} fill="white" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-[#060d17]">Player Rating</p>
                      </div>
                    </div>

                    {/* Expert Score */}
                    <div data-name="expert-score" className="flex items-start gap-2.5">
                      <ExpertShieldIcon />
                      <div data-name="expert-score-detail" className="flex flex-col gap-1">
                        <div data-name="expert-score-row" className="flex items-center gap-1.5">
                          <span className="text-[23px] font-medium leading-none text-[#060d17]">
                            {complaint.casino.expertScore.toFixed(1)}
                          </span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="size-5 shrink-0">
                            <rect width="20" height="20" rx="5" fill="#003EB6" />
                            <path d="M10 4.5C7.1 4.5 4.5 5.87 4.5 5.87V10.5C4.5 13.5 7 15.2 10 16.5C13 15.2 15.5 13.5 15.5 10.5V5.87C15.5 5.87 12.9 4.5 10 4.5Z" fill="white" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-[#060d17]">Coinbets Expert Score</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ Content Section ═══ */}
      <div data-name="complaint-content-wrapper" className="py-8">
        <div data-name="complaint-content-container" className="mx-auto max-w-[900px] px-5 sm:px-10">
          <div
            data-name="content-stack"
            className="flex flex-col gap-5"
          >
            {/* ── Main Content Card ── */}
            <div
              data-name="complaint-card"
              className="overflow-hidden rounded-lg border border-[#f2f4f7] bg-white p-5"
            >
              {/* User Info + Complaint Header */}
              <div data-name="user-info-section" className="flex gap-5">
                {/* User Sidebar */}
                <div
                  data-name="user-sidebar"
                  className="hidden w-[212px] shrink-0 flex-col items-center border-r border-[#f2f4f7] pr-5 sm:flex"
                >
                  <div
                    data-name="user-info-column"
                    className="flex flex-col items-center gap-3.5"
                  >
                    {/* Avatar */}
                    <div data-name="user-avatar-container">
                      <div
                        data-name="avatar-circle"
                        className="flex size-[107px] items-center justify-center overflow-hidden rounded-full bg-neutral-200"
                      >
                        <span className="text-3xl font-bold text-neutral-500">
                          {complaint.author.name.charAt(0)}
                        </span>
                      </div>
                    </div>

                    {/* Status */}
                    <div
                      data-name="user-status-section"
                      className="flex flex-col items-center gap-1"
                    >
                      <span
                        data-name="user-rank"
                        className="text-[10px] font-bold uppercase tracking-[1px]"
                        style={{ color: complaint.author.rankColor }}
                      >
                        {complaint.author.rank}
                      </span>
                      <div
                        data-name="username-row"
                        className="flex items-center gap-1.5"
                      >
                        <span
                          data-name="username"
                          className="text-base font-bold text-[#1c1c1c]"
                        >
                          {complaint.author.name}
                        </span>
                        {complaint.author.isOnline && (
                          <span
                            data-name="online-indicator"
                            className="size-1.5 rounded-full bg-green-500"
                          />
                        )}
                        <div
                          data-name="avatar-flag"
                          className="flex size-5 items-center justify-center overflow-hidden rounded-full"
                        >
                          <span
                            className={`fi fi-${complaint.author.countryCode} fis text-sm`}
                          />
                        </div>
                      </div>
                      <Badge
                        data-name="post-count-badge"
                        variant="secondary"
                        className="gap-1.5 bg-[#696969] text-white"
                      >
                        <MessageSquare className="size-3" />
                        {complaint.author.postCount.toLocaleString()} Post
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Complaint Content */}
                <div data-name="complaint-body" className="flex flex-1 flex-col">
                  <span
                    data-name="complaint-badge"
                    className="w-fit rounded-md bg-[#e63030] px-1.5 py-0.5 text-base text-white"
                  >
                    Complaint
                  </span>
                  <h2
                    data-name="complaint-title"
                    className="mt-2 text-lg font-bold leading-[1.3] text-[#1c1c1c]"
                  >
                    {complaint.title}
                  </h2>
                  <div
                    data-name="author-views-row"
                    className="mt-3 flex items-center gap-5"
                  >
                    {/* Mobile author info */}
                    <div
                      data-name="author-info"
                      className="flex items-center gap-1.5"
                    >
                      <div
                        data-name="author-avatar-small"
                        className="flex size-[18px] items-center justify-center overflow-hidden rounded-[9px] bg-neutral-300"
                      >
                        <span className="text-[8px] font-bold text-neutral-600">
                          {complaint.author.name.charAt(0)}
                        </span>
                      </div>
                      <span
                        data-name="author-name"
                        className="text-sm text-[#1c1c1c]"
                      >
                        by {complaint.author.name}
                      </span>
                    </div>
                    <div
                      data-name="views-info"
                      className="flex items-center gap-1.5"
                    >
                      <Eye className="size-5 text-[#1c1c1c]" />
                      <span
                        data-name="views-count"
                        className="text-sm text-[#1c1c1c]"
                      >
                        Views {complaint.views.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div data-name="divider-container" className="py-2">
                <div
                  data-name="divider"
                  className="h-px w-full bg-[#f2f4f7]"
                />
              </div>

              {/* Comments Section */}
              <div
                data-name="comments-section"
                className="flex flex-col gap-4 py-5"
              >
                {/* Comment Header */}
                <div
                  data-name="comment-header"
                  className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center"
                >
                  <div
                    data-name="comment-time"
                    className="flex items-center"
                  >
                    <span
                      data-name="posted-time"
                      className="text-sm text-[#1c1c1c] opacity-60"
                    >
                      {complaint.postedDate}
                    </span>
                  </div>
                  <div
                    data-name="language-flags"
                    className="flex items-center gap-2"
                  >
                    <div
                      data-name="original-btn"
                      className="flex items-center gap-2.5 rounded border border-[#f1f1f1] px-1.5 py-0.5"
                    >
                      <span
                        className={`fi fi-${complaint.author.countryCode} fis inline-block size-5 overflow-hidden rounded-full`}
                      />
                      <span
                        data-name="original-label"
                        className="text-sm font-medium text-black"
                      >
                        Original
                      </span>
                    </div>
                    <div
                      data-name="translation-btn"
                      className="flex items-center gap-2.5 rounded border border-[#f1f1f1] px-1.5 py-0.5"
                    >
                      <span className="fi fi-gb fis inline-block size-5 overflow-hidden rounded-full" />
                      <span
                        data-name="translation-label"
                        className="text-sm font-medium text-black"
                      >
                        Translation
                      </span>
                      <button
                        data-name="translation-toggle"
                        onClick={() => setTranslationOn(!translationOn)}
                        className={`flex h-5 w-9 items-center rounded-full p-0.5 transition-colors ${
                          translationOn
                            ? "justify-end bg-[#e6b830]"
                            : "justify-start bg-neutral-300"
                        }`}
                      >
                        <span
                          data-name="toggle-thumb"
                          className="size-4 rounded-full bg-white shadow-sm"
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Comment Text */}
                <div
                  data-name="comment-text"
                  className="whitespace-pre-line text-sm leading-relaxed text-[#1c1c1c]"
                >
                  {complaint.content}
                </div>
              </div>

              {/* Footer */}
              <div
                data-name="comment-footer"
                className="flex items-center justify-between"
              >
                <Button
                  data-name="reply-btn"
                  variant="outline"
                  size="default"
                  onClick={() =>
                    handleReplyQuote(
                      "main",
                      complaint.author.name,
                      complaint.content.slice(0, 200)
                    )
                  }
                >
                  <Plus data-icon="inline-start" className="size-4" />
                  Reply
                </Button>
                <div
                  data-name="follow-actions"
                  className="flex items-center gap-3"
                >
                  <Button
                    data-name="share-btn"
                    variant="outline"
                    size="icon"
                  >
                    <ExternalLink className="size-4" />
                  </Button>
                  <Button
                    data-name="follow-btn"
                    className="bg-[#e6b830] text-[#1c1c1c] hover:bg-[#d4a812]"
                  >
                    Follow Complaint
                  </Button>
                </div>
              </div>

              {/* Timeline for main complaint */}
              {renderTimelineComments("main")}
            </div>

            {/* ── Case Summary Card ── */}
            {complaint.caseSummary && (
              <div
                data-name="case-summary-card"
                className="rounded-xl border border-[#f2f4f7] bg-[#fff6db] p-6"
              >
                <div
                  data-name="case-summary-header"
                >
                  <span className="text-sm text-[#1c1c1c] opacity-60">
                    {complaint.caseSummary.postedTime}
                  </span>
                </div>

                <h3
                  data-name="case-summary-title"
                  className="mt-4 text-xl font-bold leading-[1.4] text-[#1c1c1c]"
                >
                  Case summary
                </h3>

                <p
                  data-name="case-summary-text"
                  className="mt-4 text-sm leading-relaxed text-[#1c1c1c]"
                >
                  {complaint.caseSummary.text}
                </p>

                <div
                  data-name="case-summary-author"
                  className="mt-4 flex items-center gap-2"
                >
                  <span className="text-sm text-[#1c1c1c] opacity-50">
                    Written by {complaint.caseSummary.writtenBy}
                  </span>
                  <div
                    data-name="specialist-avatar"
                    className="flex size-[18px] items-center justify-center overflow-hidden rounded-[9px] bg-neutral-300"
                  >
                    <span className="text-[8px] font-bold text-neutral-600">
                      {complaint.caseSummary.specialistName.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm text-[#1c1c1c]">
                    by{" "}
                    <span className="font-bold">
                      {complaint.caseSummary.specialistName}
                    </span>{" "}
                    {complaint.caseSummary.specialistTitle}
                  </span>
                </div>
              </div>
            )}

            {/* ── Reply Cards ── */}
            {SAMPLE_REPLIES.map((reply) => (
              <div
                key={reply.id}
                data-name="reply-card"
                className="overflow-hidden rounded-lg border border-[#f2f4f7] bg-white p-5"
              >
                <div data-name="reply-info-section" className="flex gap-5">
                  {/* User Sidebar */}
                  <div
                    data-name="reply-user-sidebar"
                    className="hidden w-[212px] shrink-0 flex-col items-center border-r border-[#f2f4f7] pr-5 sm:flex"
                  >
                    <div
                      data-name="reply-user-column"
                      className="flex flex-col items-center gap-3.5"
                    >
                      <div data-name="reply-avatar-container">
                        <div
                          data-name="reply-avatar-circle"
                          className="flex size-[80px] items-center justify-center overflow-hidden rounded-full bg-neutral-200"
                        >
                          <span className="text-2xl font-bold text-neutral-500">
                            {reply.author.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <div
                        data-name="reply-user-status"
                        className="flex flex-col items-center gap-1"
                      >
                        <span
                          data-name="reply-user-rank"
                          className="text-[10px] font-bold uppercase tracking-[1px]"
                          style={{ color: reply.author.rankColor }}
                        >
                          {reply.author.rank}
                        </span>
                        <div
                          data-name="reply-username-row"
                          className="flex items-center gap-1.5"
                        >
                          <span
                            data-name="reply-username"
                            className="text-base font-bold text-[#1c1c1c]"
                          >
                            {reply.author.name}
                          </span>
                          {reply.author.isOnline && (
                            <span
                              data-name="reply-online-indicator"
                              className="size-1.5 rounded-full bg-green-500"
                            />
                          )}
                          <div
                            data-name="reply-flag"
                          >
                            <span
                              className={`fi fi-${reply.author.countryCode} fis inline-block size-5 overflow-hidden rounded-full`}
                            />
                          </div>
                        </div>
                        <Badge
                          data-name="reply-post-count"
                          variant="secondary"
                          className="gap-1.5 bg-[#696969] text-white"
                        >
                          <MessageSquare className="size-3" />
                          {reply.author.postCount.toLocaleString()} Post
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Reply Content */}
                  <div
                    data-name="reply-body"
                    className="flex flex-1 flex-col gap-3"
                  >
                    {reply.label && (
                      <span
                        data-name="reply-label"
                        className="w-fit rounded-md px-1.5 py-0.5 text-sm text-white"
                        style={{ backgroundColor: reply.labelColor }}
                      >
                        {reply.label}
                      </span>
                    )}
                    <div
                      data-name="reply-meta"
                      className="flex items-center gap-3"
                    >
                      {/* Mobile author */}
                      <div
                        data-name="reply-author-mobile"
                        className="flex items-center gap-1.5 sm:hidden"
                      >
                        <div
                          data-name="reply-author-avatar-sm"
                          className="flex size-[18px] items-center justify-center overflow-hidden rounded-[9px] bg-neutral-300"
                        >
                          <span className="text-[8px] font-bold text-neutral-600">
                            {reply.author.name.charAt(0)}
                          </span>
                        </div>
                        <span className="text-sm font-bold text-[#1c1c1c]">
                          {reply.author.name}
                        </span>
                      </div>
                      <span className="text-sm text-[#1c1c1c] opacity-60">
                        {reply.postedTime}
                      </span>
                    </div>
                    <div
                      data-name="reply-text"
                      className="whitespace-pre-line text-sm leading-relaxed text-[#1c1c1c]"
                    >
                      {reply.content}
                    </div>
                    <div
                      data-name="reply-footer"
                      className="mt-2 flex items-center justify-between"
                    >
                      <Button
                        data-name="reply-reply-btn"
                        variant="outline"
                        size="default"
                        onClick={() =>
                          handleReplyQuote(
                            reply.id,
                            reply.author.name,
                            reply.content.slice(0, 200)
                          )
                        }
                      >
                        <Plus data-icon="inline-start" className="size-4" />
                        Reply
                      </Button>
                      <Button
                        data-name="reply-share-btn"
                        variant="outline"
                        size="icon"
                      >
                        <ExternalLink className="size-4" />
                      </Button>
                    </div>

                    {/* Timeline for this reply */}
                    {renderTimelineComments(reply.id)}
                  </div>
                </div>
              </div>
            ))}

            {/* ── Add Comment Box ── */}
            <div
              ref={commentCardRef}
              data-name="add-comment-card"
              className="overflow-hidden rounded-lg border border-[#f2f4f7] bg-white p-5"
            >
              <h3
                data-name="add-comment-title"
                className="mb-3 text-base font-semibold text-[#1c1c1c]"
              >
                Add a comment
              </h3>

              {/* Quote block */}
              {quotedReply && (
                <Card
                  data-name="quote-block"
                  size="sm"
                  className="mb-3"
                >
                  <CardHeader>
                    <CardTitle data-name="quote-author">
                      Replying to {quotedReply.author}
                    </CardTitle>
                    <CardAction>
                      <Button
                        data-name="quote-dismiss"
                        variant="ghost"
                        size="icon-xs"
                        onClick={() => setQuotedReply(null)}
                      >
                        <Plus className="size-3 rotate-45" />
                      </Button>
                    </CardAction>
                  </CardHeader>
                  <CardContent>
                    <p
                      data-name="quote-text"
                      className="text-xs leading-relaxed text-muted-foreground"
                    >
                      {quotedReply.content}
                      {quotedReply.content.length >= 200 && "..."}
                    </p>
                  </CardContent>
                </Card>
              )}

              <div
                data-name="editor-wrapper"
                className="overflow-hidden rounded-lg border border-input"
              >
                {/* Toolbar */}
                <div
                  data-name="editor-toolbar"
                  className="flex flex-wrap items-center gap-0.5 border-b border-input bg-neutral-50 px-2 py-1.5"
                >
                  {TOOLBAR_ACTIONS.map((action) => (
                    <Button
                      key={action.label}
                      data-name="toolbar-btn"
                      variant="ghost"
                      size="icon-xs"
                      onClick={() =>
                        execToolbarCommand(action.command, action.arg)
                      }
                      title={action.label}
                    >
                      <svg viewBox="0 0 24 24" className="size-4 fill-current">
                        <path d={action.path} />
                      </svg>
                    </Button>
                  ))}
                </div>
                {/* Editor */}
                <div
                  ref={editorRef}
                  data-name="comment-editor"
                  contentEditable
                  className="min-h-[120px] px-3 py-3 text-base leading-relaxed outline-none empty:before:text-muted-foreground empty:before:content-['Write_your_reply...'] [&_blockquote]:border-l-4 [&_blockquote]:border-neutral-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_h1]:text-2xl [&_h1]:font-bold [&_h2]:text-xl [&_h2]:font-bold [&_ol]:list-decimal [&_ol]:pl-6 [&_ul]:list-disc [&_ul]:pl-6"
                />
              </div>
              <div
                data-name="comment-actions"
                className="mt-3 flex items-center justify-end"
              >
                <Button
                  data-name="submit-comment-btn"
                  className="bg-[#e6b830] text-[#1c1c1c] hover:bg-[#d4a812]"
                  onClick={handleSubmitComment}
                >
                  <Send data-icon="inline-start" className="size-4" />
                  Submit Reply
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

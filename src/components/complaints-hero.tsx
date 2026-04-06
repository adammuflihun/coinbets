"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ComplaintCard } from "@/components/complaint-card";
import { complaints as sampleComplaints } from "@/data/complaints";

const steps = [
  {
    number: 1,
    text: "A dedicated mediator will be assigned to your case",
  },
  {
    number: 2,
    text: "Our expert will fairly evaluate the situation",
  },
  {
    number: 3,
    text: "Our direct casino contacts can contribute to successful resolution",
  },
];

/* Icons extracted from the combined Figma SVG — each cropped via viewBox */

function AllIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 42 42" fill="none">
      <path d="M20.998 39.375C31.1463 39.375 39.373 31.1482 39.373 21C39.373 10.8518 31.1463 2.625 20.998 2.625C10.8498 2.625 2.62305 10.8518 2.62305 21C2.62305 31.1482 10.8498 39.375 20.998 39.375ZM27.3988 25.6301C27.991 26.7682 26.7667 27.9925 25.6287 27.4003L20.5838 24.7753C19.1451 24.0267 17.9727 22.8521 17.2266 21.412L14.631 16.4021C14.042 15.2651 15.2632 14.0439 16.4002 14.633L21.4103 17.2286C22.8503 17.9746 24.0248 19.1469 24.7735 20.5855L27.3988 25.6301Z" fill="#212121" />
    </svg>
  );
}

function OpenedIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="98 2 42 40" fill="none">
      <path d="M101.34 11.8125V24.8496L103.941 20.3438C105.582 17.5011 108.616 15.75 111.898 15.75H132.709C132.101 12.7546 129.452 10.5 126.277 10.5H117.634L113.537 6.40327C112.798 5.66486 111.797 5.25 110.753 5.25H107.902C104.278 5.25 101.34 8.18814 101.34 11.8125ZM111.898 18.375H132.828C136.869 18.375 139.395 22.75 137.374 26.25L133.214 33.4559C132.042 35.4863 129.875 36.7371 127.531 36.7371H106.601C102.559 36.7371 100.034 32.3623 102.054 28.8621L106.215 21.6562C107.387 19.6258 109.553 18.375 111.898 18.375Z" fill="#212121" />
    </svg>
  );
}

function UnresolvedIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="307 2 42 42" fill="none">
      <path d="M309.215 14V10.9375C309.215 7.79637 311.761 5.25 314.902 5.25H319.94C320.984 5.25 321.986 5.66484 322.724 6.40327L325.402 9.08135L320.868 13.6156C320.622 13.8617 320.288 14 319.94 14H309.215ZM309.215 16.625V31.0625C309.215 34.2036 311.761 36.75 314.902 36.75H326.753C325.621 34.982 324.965 32.88 324.965 30.625C324.965 24.3427 330.058 19.25 336.34 19.25C339.396 19.25 342.171 20.4554 344.215 22.4168V15.3125C344.215 12.1714 341.668 9.625 338.527 9.625H328.571L322.724 15.4717C321.986 16.2102 320.984 16.625 319.94 16.625H309.215ZM326.715 30.625C326.715 35.9408 331.024 40.25 336.34 40.25C341.656 40.25 345.965 35.9408 345.965 30.625C345.965 25.3092 341.656 21 336.34 21C331.024 21 326.715 25.3092 326.715 30.625ZM341.59 24.5C342.073 24.5 342.465 24.8918 342.465 25.375V28.875C342.465 29.3582 342.073 29.75 341.59 29.75H338.09C337.607 29.75 337.215 29.3582 337.215 28.875C337.215 28.3918 337.607 28 338.09 28H339.84C339.041 26.936 337.77 26.25 336.34 26.25C334.881 26.25 333.589 26.9628 332.793 28.063C332.51 28.4545 331.963 28.5422 331.571 28.2587C331.18 27.9753 331.092 27.4283 331.375 27.0368C332.487 25.5017 334.296 24.5 336.34 24.5C338.054 24.5 339.604 25.2047 340.715 26.3386V25.375C340.715 24.8918 341.107 24.5 341.59 24.5ZM331.965 34.9114V35.875C331.965 36.3582 331.573 36.75 331.09 36.75C330.607 36.75 330.215 36.3582 330.215 35.875V32.375C330.215 31.8918 330.607 31.5 331.09 31.5H334.59C335.073 31.5 335.465 31.8918 335.465 32.375C335.465 32.8582 335.073 33.25 334.59 33.25H332.839C333.639 34.314 334.91 35 336.34 35C337.681 35 338.88 34.3976 339.684 33.4456C339.996 33.0764 340.548 33.0298 340.917 33.3415C341.287 33.6534 341.333 34.2055 341.021 34.5746C339.899 35.9037 338.218 36.75 336.34 36.75C334.625 36.75 333.076 36.0453 331.965 34.9114Z" fill="#212121" />
    </svg>
  );
}

function ResolvedIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="507 2 42 42" fill="none">
      <path d="M509.215 14V10.9375C509.215 7.79637 511.761 5.25 514.902 5.25H519.94C520.984 5.25 521.986 5.66484 522.724 6.40327L525.402 9.08135L520.868 13.6156C520.622 13.8617 520.288 14 519.94 14H509.215ZM509.215 16.625V31.0625C509.215 34.2036 511.761 36.75 514.902 36.75H526.753C525.621 34.982 524.965 32.88 524.965 30.625C524.965 24.3427 530.058 19.25 536.34 19.25C539.396 19.25 542.171 20.4554 544.215 22.4168V15.3125C544.215 12.1714 541.668 9.625 538.527 9.625H528.571L522.724 15.4717C521.986 16.2102 520.984 16.625 519.94 16.625H509.215ZM526.715 30.625C526.715 35.9408 531.024 40.25 536.34 40.25C541.656 40.25 545.965 35.9408 545.965 30.625C545.965 25.3092 541.656 21 536.34 21C531.024 21 526.715 25.3092 526.715 30.625Z" fill="#212121" />
      <circle cx="537.5" cy="32" r="7" fill="white" />
      <path d="M526.812 30.5C526.812 25.4259 530.926 21.3125 536 21.3125C541.074 21.3125 545.188 25.4259 545.188 30.5C545.188 35.5741 541.074 39.6875 536 39.6875C530.926 39.6875 526.812 35.5741 526.812 30.5ZM540.402 28.339C540.658 28.0828 540.658 27.6672 540.402 27.411C540.145 27.1547 539.73 27.1547 539.473 27.411L535.016 31.8688L532.855 29.7078C532.598 29.4516 532.183 29.4516 531.927 29.7078C531.67 29.9641 531.67 30.3796 531.927 30.6359L534.552 33.2609C534.808 33.5172 535.223 33.5172 535.48 33.2609L540.402 28.339Z" fill="#212121" />
    </svg>
  );
}

function RejectedIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="665 0 44 42" fill="none">
      <path d="M668.34 11.8125C668.34 8.18814 671.278 5.25 674.902 5.25H680.378C681.422 5.25 682.423 5.66486 683.162 6.40327L686.715 9.95634L681.306 15.3656C681.059 15.6117 680.726 15.75 680.378 15.75H668.34V11.8125ZM668.34 18.375V30.1875C668.34 33.8118 671.278 36.75 674.902 36.75H683.039C682.033 34.781 681.465 32.5505 681.465 30.1875C681.465 22.2139 687.929 15.75 695.902 15.75C699.393 15.75 702.594 16.9885 705.09 19.05V17.0625C705.09 13.4381 702.152 10.5 698.527 10.5H689.884L683.162 17.2217C682.423 17.9602 681.422 18.375 680.378 18.375H668.34ZM684.09 30.1875C684.09 36.7114 689.378 42 695.902 42C702.426 42 707.715 36.7114 707.715 30.1875C707.715 23.6636 702.426 18.375 695.902 18.375C689.378 18.375 684.09 23.6636 684.09 30.1875ZM686.715 30.1875C686.715 25.1134 690.828 21 695.902 21C697.966 21 699.871 21.6804 701.405 22.8291L688.544 35.6898C687.395 34.156 686.715 32.2513 686.715 30.1875ZM695.902 39.375C693.839 39.375 691.934 38.6946 690.4 37.5459L703.261 24.6853C704.409 26.219 705.09 28.1237 705.09 30.1875C705.09 35.2616 700.976 39.375 695.902 39.375Z" fill="#212121" />
    </svg>
  );
}

type StatusFilter = "all" | "opened" | "unresolved" | "resolved" | "rejected";

const statusTabs: { key: StatusFilter; label: string; count: number; icon: React.ReactNode }[] = [
  { key: "all", label: "All", count: 0, icon: <AllIcon /> },
  { key: "opened", label: "Opened", count: 0, icon: <OpenedIcon /> },
  { key: "unresolved", label: "Unresolved", count: 0, icon: <UnresolvedIcon /> },
  { key: "resolved", label: "Resolved", count: 0, icon: <ResolvedIcon /> },
  { key: "rejected", label: "Rejected", count: 0, icon: <RejectedIcon /> },
];

export function ComplaintsHero() {
  const [activeFilter, setActiveFilter] = useState<StatusFilter>("all");
  const [search, setSearch] = useState("");

  return (
    <section data-section="complaints-hero">
      {/* Dark hero with background */}
      <div
        data-name="complaints-hero-bg"
        className="relative overflow-hidden bg-[#020202] pb-20 pt-12 sm:pt-16 lg:pt-20"
      >
        <div
          data-section="hero-background"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero/background-expert-review.svg')" }}
        />
        <div data-name="complaints-hero-container" className="relative site-container">
          {/* Title & Subtitle */}
          <div
            data-name="complaints-hero-content"
            className="mx-auto flex max-w-[800px] flex-col items-center gap-4 text-center text-white"
          >
            <h1
              data-name="complaints-hero-title"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.2] tracking-tight"
            >
              Unfair Treatment by a Casino?
              <br />
              Let Us Help
            </h1>
            <p
              data-name="complaints-hero-subtitle"
              className="max-w-[620px] text-sm sm:text-base leading-relaxed text-white/80"
            >
              Submit your complaint and let the CoinBets team review your case
              and help you take the next steps.
            </p>
          </div>

          {/* Steps */}
          <div
            data-name="complaints-steps"
            className="mx-auto mt-10 grid max-w-[900px] grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6"
          >
            {steps.map((step) => (
              <div
                key={step.number}
                data-name={`complaints-step-${step.number}`}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div
                  data-name="step-number"
                  className="flex size-10 items-center justify-center rounded-full border border-white/40 text-sm font-semibold text-white"
                >
                  {step.number}
                </div>
                <p
                  data-name="step-text"
                  className="max-w-[240px] text-sm leading-relaxed text-white/90"
                >
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Status tabs — overlapping the hero gradient */}
      <div
        data-name="complaints-tabs-section"
        className="relative z-10 -mt-[30px]"
      >
        <div data-name="complaints-tabs-container" className="site-container">
          <div
            data-name="complaints-tabs"
            className="mx-auto grid max-w-[900px] grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
          >
            {statusTabs.map((tab) => (
              <button
                key={tab.key}
                data-name={`complaints-tab-${tab.key}`}
                onClick={() => setActiveFilter(tab.key)}
                className={`flex items-center gap-3 rounded-xl bg-white px-4 py-4 shadow-md transition-all hover:shadow-lg ${
                  activeFilter === tab.key
                    ? "ring-2 ring-[#e6b830]"
                    : "ring-1 ring-neutral-200"
                }`}
              >
                <span data-name="tab-icon" className="shrink-0">
                  {tab.icon}
                </span>
                <span
                  data-name="tab-label"
                  className="text-sm font-semibold text-neutral-900"
                >
                  {tab.label}
                </span>
                <span
                  data-name="tab-count"
                  className="ml-auto rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-semibold text-neutral-500"
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search + Submit row */}
          <div
            data-name="complaints-search-submit"
            className="mx-auto mt-8 flex max-w-[900px] flex-col items-stretch gap-3 sm:flex-row sm:items-center"
          >
            <div
              data-name="complaints-search-input"
              className="relative flex flex-1 items-center rounded-xl bg-white shadow-md ring-1 ring-neutral-200"
            >
              <Search className="ml-4 size-5 shrink-0 text-neutral-400" />
              <Input
                type="text"
                placeholder="Search complaints"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-12 border-0 bg-transparent text-base ring-0 focus-visible:border-0 focus-visible:ring-0 placeholder:text-neutral-400"
              />
            </div>
            <Link
              href="/complaints/submit"
              data-name="submit-complaint-btn"
              className="group relative z-0 inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden border border-white/10 px-6 py-3 text-sm font-bold text-white transition-transform duration-300 ease-in-out active:translate-y-px"
              style={{
                "--spread": "90deg",
                "--shimmer-color": "#e6b830",
                "--radius": "8px",
                "--speed": "3s",
                "--cut": "0.05em",
                "--bg": "rgba(23, 23, 23, 1)",
                borderRadius: "var(--radius)",
                background: "var(--bg)",
              } as React.CSSProperties}
            >
              {/* Shimmer layer */}
              <div className="absolute inset-0 -z-30 overflow-visible blur-[2px] [container-type:size]">
                <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
                  <div className="absolute -inset-full w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
                </div>
              </div>
              {/* Inner glow */}
              <div className="absolute inset-0 size-full shadow-[inset_0_-8px_10px_#ffffff1f] transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] [border-radius:var(--radius)]" />
              {/* Background fill */}
              <div className="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]" />
              Submit a Complaint
              <Plus className="size-4 transition-transform group-hover:rotate-90" />
            </Link>
          </div>

          {/* Complaint Cards */}
          <div
            data-name="complaints-list"
            className="mx-auto mt-10 mb-16 flex max-w-[900px] flex-col gap-5"
          >
            {sampleComplaints.map((complaint) => (
              <ComplaintCard key={complaint.id} complaint={complaint} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

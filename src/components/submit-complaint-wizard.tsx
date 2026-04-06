"use client";

import { useState } from "react";
import {
  ArrowDownToLine,
  ArrowUpFromLine,
  User,
  Settings,
  ChevronRight,
  ChevronDown,
  ArrowLeft,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { SubmitComplaintForm } from "@/components/submit-complaint-form";

/* ── Step indicator ──────────────────────────────────────── */

const STEP_LABELS = ["Category", "Details", "Submit"];

function StepIndicator({
  current,
  onStepClick,
}: {
  current: number;
  onStepClick: (step: number) => void;
}) {
  return (
    <div data-name="step-indicator" className="flex items-center gap-2">
      {STEP_LABELS.map((label, i) => {
        const step = i + 1;
        const isActive = step === current;
        const isCompleted = step < current;
        return (
          <div key={step} data-name={`step-${step}`} className="flex items-center gap-2">
            {i > 0 && (
              <div
                data-name="step-connector"
                className={`h-px w-6 sm:w-10 ${isCompleted ? "bg-[#e6b830]" : "bg-white/30"}`}
              />
            )}
            <button
              data-name="step-dot-label"
              onClick={() => onStepClick(step)}
              className="flex cursor-pointer items-center gap-1.5"
            >
              <div
                data-name="step-dot"
                className={`flex size-7 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                  isActive
                    ? "bg-[#e6b830] text-[#020202]"
                    : isCompleted
                      ? "bg-[#e6b830] text-[#020202]"
                      : "bg-white/20 text-white/60"
                }`}
              >
                {isCompleted ? "✓" : step}
              </div>
              <span
                data-name="step-label"
                className={`text-xs font-medium sm:text-sm ${
                  isActive || isCompleted ? "text-white" : "text-white/50"
                }`}
              >
                {label}
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
}

/* ── Step 1: Category selection ──────────────────────────── */

const categories = [
  {
    key: "deposit",
    icon: ArrowDownToLine,
    title: "Deposit",
    description:
      "Select if you can't make a deposit, your deposit has failed, or you have any other deposit-related issues.",
  },
  {
    key: "withdrawal",
    icon: ArrowUpFromLine,
    title: "Withdrawal",
    description:
      "Select if your withdrawal has failed, the casino doesn't want to send you your money, or your withdrawal is taking longer than usual.",
  },
  {
    key: "account",
    icon: User,
    title: "Account",
    description:
      "Select if you can't log in to your account, your account is behaving strangely, or you have any other account-related issues.",
  },
  {
    key: "software",
    icon: Settings,
    title: "Software",
    description:
      "Select if you are experiencing software-related issues, such as strangely-behaving games or casino website, or if you suspect that the casino's software is not fair.",
  },
];

function StepCategory({
  onSelect,
  onSkipToForm,
}: {
  onSelect: (key: string) => void;
  onSkipToForm: () => void;
}) {
  return (
    <div data-name="step-category" className="site-container py-10">
      <div
        data-name="category-grid"
        className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {categories.map((cat) => (
          <button
            key={cat.key}
            data-name={`category-card-${cat.key}`}
            onClick={() => onSelect(cat.key)}
            className="group flex flex-col gap-3 rounded-lg border border-neutral-200 bg-white p-6 text-left shadow-sm transition-all hover:shadow-md hover:ring-2 hover:ring-[#e6b830]"
          >
            <cat.icon className="size-10 text-[#1c1c1c]" strokeWidth={1.5} />
            <span
              data-name="category-label"
              className="text-xs uppercase tracking-[3.2px] text-[#1c1c1c]"
            >
              Problem with
            </span>
            <span
              data-name="category-title"
              className="text-xl font-bold tracking-tight text-[#1c1c1c]"
            >
              {cat.title}
            </span>
            <p
              data-name="category-description"
              className="text-base leading-[1.3] text-[#1c1c1c]"
            >
              {cat.description}
            </p>
            <span
              data-name="category-cta"
              className="mt-auto flex items-center gap-1 text-sm font-semibold text-[#003eb6] opacity-0 transition-opacity group-hover:opacity-100"
            >
              Select
              <ChevronRight className="size-4" />
            </span>
          </button>
        ))}
      </div>

      {/* Different problem card */}
      <div
        data-name="different-problem-card"
        className="mx-auto mt-6 max-w-[1200px] rounded-lg bg-white p-8 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04),0px_4px_8px_0px_rgba(0,0,0,0.06)] sm:px-12 sm:py-10"
      >
        <div
          data-name="different-problem-content"
          className="flex items-start gap-6 sm:gap-10"
        >
          {/* Illustration */}
          <div data-name="different-problem-icon" className="shrink-0">
            <img
              src="/icons/complaint-form.svg"
              alt=""
              width={66}
              height={63}
              className="size-16"
            />
          </div>

          {/* Text + Button */}
          <div
            data-name="different-problem-text"
            className="flex flex-col gap-4"
          >
            <h3
              data-name="different-problem-title"
              className="text-xl font-bold tracking-tight text-[#1c1c1c]"
            >
              Do you have a different problem?
            </h3>
            <p
              data-name="different-problem-description"
              className="text-base leading-[1.3] text-[#1c1c1c]"
            >
              If your issue does not fall into any of the categories above, you
              can proceed directly to the
            </p>
            <div>
              <button
                data-name="skip-to-form-btn"
                onClick={onSkipToForm}
                className="inline-flex items-center rounded-md bg-[#e6b830] px-4 py-3 text-base font-medium text-[#1c1c1c] transition-colors hover:bg-[#f0c840]"
              >
                Complaint submittal form
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Step 2: Tips and possible solutions ─────────────────── */

const tipsByCategory: Record<string, { title: string; content: string }[]> = {
  deposit: [
    {
      title: "Deposit fees",
      content:
        "Some casinos charge fees for certain deposit methods. Check the casino's payment page or T&C for information about fees. If you were charged unexpectedly, contact the casino's customer support first.",
    },
    {
      title: "Exchange rates",
      content:
        "If you made a deposit in a currency that is different from the currency used by your casino account, this money has to go through a currency exchange. The applied exchange rate may be different than the current exchange rate defined by banks. If you are not sure, check the casino's T&C, information about the used payment method or ask casino customer support.",
    },
    {
      title: "Double charge",
      content:
        "If you believe you were charged twice for a single deposit, first check your bank statement carefully — sometimes pending transactions appear as duplicates but are resolved within 24-48 hours. If the double charge persists, contact both your bank and the casino support.",
    },
  ],
  withdrawal: [
    {
      title: "Pending withdrawal",
      content:
        "Most casinos have a pending period for withdrawals (usually 24-72 hours). During this time, the withdrawal can often be reversed. Check the casino's T&C for their specific pending period and processing times.",
    },
    {
      title: "Verification required",
      content:
        "Casinos often require identity verification (KYC) before processing withdrawals. This may include providing a photo ID, proof of address, and proof of payment method. Submit the required documents as soon as possible to avoid delays.",
    },
    {
      title: "Withdrawal limits",
      content:
        "Many casinos have daily, weekly, or monthly withdrawal limits. If your withdrawal exceeds these limits, it may be split into multiple payments. Check the casino's T&C for their specific withdrawal limits.",
    },
  ],
  account: [
    {
      title: "Account locked",
      content:
        "If your account is locked, it may be due to security reasons, failed login attempts, or pending verification. Contact the casino's support team with your registered email to request an unlock.",
    },
    {
      title: "Self-exclusion",
      content:
        "If you previously set a self-exclusion period, your account will remain locked until that period expires. This cannot be reversed early as it is a responsible gambling measure.",
    },
    {
      title: "Account closure",
      content:
        "If you want to close your account, make sure to withdraw any remaining balance first. Contact the casino's support team to request account closure. Some casinos allow this through account settings.",
    },
  ],
  software: [
    {
      title: "Game malfunction",
      content:
        "If a game crashed or behaved unexpectedly during play, take screenshots and note the time. Most casinos void rounds affected by malfunctions. Contact support with the game name, time, and bet amount.",
    },
    {
      title: "Fairness concerns",
      content:
        "Licensed casinos use certified Random Number Generators (RNG). If you suspect unfair play, check if the casino is licensed and whether they have provably fair games. You can also check the game provider's certification.",
    },
    {
      title: "Website issues",
      content:
        "If the casino website is not loading properly, try clearing your browser cache, using a different browser, or disabling browser extensions. If the issue persists, contact the casino's support team.",
    },
  ],
};

function StepTips({
  category,
  onContinue,
  onResolved,
  onBack,
}: {
  category: string;
  onContinue: () => void;
  onResolved: () => void;
  onBack: () => void;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const tips = tipsByCategory[category] || tipsByCategory.deposit;

  return (
    <div data-name="step-tips" className="site-container py-10">
      <div
        data-name="tips-container"
        className="mx-auto flex max-w-[800px] flex-col gap-4"
      >
        {/* Accordion items */}
        {tips.map((tip, i) => {
          const isOpen = openIndex === i;
          return (
            <Collapsible
              key={i}
              open={isOpen}
              onOpenChange={(open) => setOpenIndex(open ? i : null)}
            >
              <div
                data-name={`tip-item-${i}`}
                className={`overflow-hidden rounded-lg border bg-white transition-all ${
                  isOpen
                    ? "border-3 border-[#45d88e] shadow-sm"
                    : "border-[#1c1c1c]"
                }`}
              >
                <CollapsibleTrigger
                  data-name="tip-trigger"
                  className="flex w-full items-center gap-3 px-8 py-5"
                >
                  {/* Circle icon */}
                  <div
                    data-name="tip-icon"
                    className={`flex size-9 shrink-0 items-center justify-center rounded-full border-2 ${
                      isOpen
                        ? "border-[#45d88e] bg-[#45d88e]"
                        : "border-[#1c1c1c]"
                    }`}
                  >
                    {isOpen && (
                      <div className="size-3 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="flex-1 text-left text-xl font-bold tracking-tight text-[#1c1c1c]">
                    {tip.title}
                  </span>
                  <ChevronDown
                    className={`size-6 shrink-0 text-[#1c1c1c] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div data-name="tip-content" className="px-8 pb-6">
                    <p className="text-base leading-[1.4] text-[#1c1c1c]">
                      {tip.content}
                    </p>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          );
        })}

        {/* Action buttons */}
        <div
          data-name="tips-actions"
          className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          <button
            data-name="problem-resolved-btn"
            onClick={onResolved}
            className="flex h-[70px] items-center justify-center rounded-md border border-[#1c1c1c] bg-white px-8 text-xl font-bold text-[#1c1c1c] transition-colors hover:bg-neutral-50"
          >
            Problem resolved
          </button>
          <button
            data-name="continue-to-form-btn"
            onClick={onContinue}
            className="flex h-[70px] items-center justify-center rounded-md border border-[#1c1c1c] bg-white px-8 text-xl font-bold text-[#1c1c1c] transition-colors hover:bg-neutral-50"
          >
            Continue to submit
          </button>
        </div>

        {/* Return back */}
        <button
          data-name="return-back-btn"
          onClick={onBack}
          className="mx-auto text-base font-medium text-[#1c1c1c] transition-colors hover:text-neutral-600"
        >
          Return back
        </button>
      </div>
    </div>
  );
}

/* ── Wizard ──────────────────────────────────────────────── */

const HERO_TITLES: Record<number, { title: string; subtitle: string }> = {
  1: {
    title: "What is your complaint about?",
    subtitle:
      "Select the category that best describes your issue so we can route your complaint to the right team.",
  },
  2: {
    title: "Tips and possible solutions",
    subtitle:
      "Before submitting a complaint, check if any of these tips can help resolve your issue.",
  },
  3: {
    title: "Submit your complaint",
    subtitle:
      "Fill out the form with details about your issue. Your private information stays confidential.",
  },
};

export function SubmitComplaintWizard() {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState<string>("deposit");

  const { title, subtitle } = HERO_TITLES[step];

  function handleCategorySelect(key: string) {
    setCategory(key);
    setStep(2);
  }

  return (
    <>
      {/* Hero with step indicator */}
      <section data-section="submit-complaint-hero">
        <div
          data-name="submit-complaint-hero-bg"
          className="relative overflow-hidden bg-[#020202] pb-16 pt-12 sm:pt-16 lg:pt-20"
        >
          <div
            data-section="hero-background"
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/hero/background-expert-review.svg')",
            }}
          />
          <div
            data-name="submit-complaint-hero-container"
            className="relative site-container"
          >
            {/* Step indicator */}
            <div
              data-name="step-indicator-wrapper"
              className="mb-8 flex justify-center"
            >
              <StepIndicator current={step} onStepClick={setStep} />
            </div>

            {/* Back button (steps 2+) */}
            {step > 1 && (
              <div data-name="back-wrapper" className="mb-4 flex justify-center">
                <button
                  data-name="back-btn"
                  onClick={() => setStep(step - 1)}
                  className="flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
                >
                  <ArrowLeft className="size-4" />
                  Back
                </button>
              </div>
            )}

            {/* Title & Subtitle */}
            <div
              data-name="submit-complaint-hero-content"
              className="mx-auto flex max-w-[800px] flex-col items-center gap-4 text-center text-white"
            >
              <h1
                data-name="submit-complaint-hero-title"
                className="font-heading text-3xl font-black leading-[1.2] tracking-tight sm:text-4xl lg:text-5xl"
              >
                {title}
              </h1>
              <p
                data-name="submit-complaint-hero-subtitle"
                className="max-w-[620px] text-sm leading-relaxed text-white/80 sm:text-base"
              >
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step content */}
      {step === 1 && (
        <StepCategory
          onSelect={handleCategorySelect}
          onSkipToForm={() => setStep(3)}
        />
      )}
      {step === 2 && (
        <StepTips
          category={category}
          onContinue={() => setStep(3)}
          onResolved={() => setStep(1)}
          onBack={() => setStep(1)}
        />
      )}
      {step === 3 && (
        <div data-name="submit-complaint-body" className="py-10">
          <SubmitComplaintForm />
        </div>
      )}
    </>
  );
}

"use client";

import { useState } from "react";
import { ChevronDown, CircleCheck } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const expertChecklist = [
  "Game quality and RTP transparency",
  "Withdrawal speed and friction",
  "KYC practices",
  "Customer support responsiveness",
  "Overall user experience",
];

const faqItems = [
  {
    question: "How is the Casino Index calculated?",
    answer:
      "The Index combines four weighted signals: Player Reviews (50%), Expert Score (20%), Traffic Data (15%), and Safety Index (15%). Each signal is normalized and combined into a single composite score.",
  },
  {
    question: "Can casinos pay to improve their ranking?",
    answer:
      "No. We do not accept affiliate revenue, paid placements, or sponsored boosts. Rankings are formula-based and cannot be influenced by casinos.",
  },
  {
    question: 'Why is a casino showing as "Unranked"?',
    answer:
      'A casino must have at least 3 player reviews to appear in the Index. If it has fewer than 3 reviews, it is listed as "Unranked" until enough player feedback has been collected.',
  },
  {
    question: "How often is the Index updated?",
    answer:
      "The Index is recalculated on a rolling basis. Player reviews, expert scores, and traffic data are updated as new information becomes available — typically weekly.",
  },
  {
    question: "Can I submit a review for a casino?",
    answer:
      "Yes. Any player can submit a review. Verified reviews from players who can confirm deposits and withdrawals carry the most weight in the Index calculation.",
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  isFirst,
  isLast,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  isFirst: boolean;
  isLast: boolean;
}) {
  return (
    <div
      data-name="faq-item"
      className={`bg-white border border-b-0 last:border-b border-neutral-200 ${isFirst ? "rounded-t-2xl" : ""} ${isLast ? "rounded-b-2xl border-b" : ""}`}
    >
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full px-4 py-4 text-left"
      >
        <span className="font-semibold text-base text-[#060d17]">
          {question}
        </span>
        <ChevronDown
          className={`size-4 shrink-0 text-neutral-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div data-name="faq-answer" className="px-4 pb-4 text-base text-[#020202]/70 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function CoinbetIndexSeoMetatags() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <section data-section="coinbet-index-seo-metatags" className="bg-neutral-100 px-5 pt-[160px] pb-16 sm:pb-20 lg:pb-24">
      <div data-name="seo-container" className="mx-auto max-w-[900px] flex flex-col gap-8">
        {/* How the Index Works */}
        <div data-name="how-it-works" className="bg-white rounded-lg border border-neutral-200 shadow-sm p-8 sm:p-12 flex flex-col gap-3.5">
          <h2 className="text-[26px] font-bold tracking-tight text-[#020202]">
            How the CoinBets Casino Index Works
          </h2>
          <div data-name="how-it-works-text" className="text-base text-[#020202]/70 leading-relaxed flex flex-col gap-3.5">
            <p>
              The CoinBets Casino Index is our attempt to rank every crypto
              casino we can find based on what actually matters to players — not
              who pays the most for placement.
            </p>
            <p>
              Unlike most casino ranking sites, we do not take affiliate revenue
              from any casino listed in the Index. No paid placements. No
              revenue-share boosts. No &ldquo;featured&rdquo; rankings disguised
              as editorial picks.
            </p>
            <p>
              Every position in the Index is calculated using a transparent
              formula built around four weighted signals:
            </p>
          </div>
        </div>

        {/* Player Reviews */}
        <div data-name="player-reviews" className="bg-white rounded-lg border border-neutral-200 shadow-sm p-8 sm:p-12 flex flex-col gap-3.5">
          <h2 className="text-[26px] font-bold tracking-tight text-[#020202]">
            Player Reviews — 50%
          </h2>
          <div data-name="player-reviews-text" className="text-base text-[#020202]/70 leading-relaxed flex flex-col gap-3.5">
            <p>
              Real reviews from real players are the foundation of the Index.
            </p>
            <p>
              Players who have actually deposited, played, and attempted
              withdrawals know more about a casino&apos;s true behavior than any
              marketing page ever will. Verified reviews carry the most weight,
              and recent reviews receive a small boost — because what happened
              last month matters more than what happened last year.
            </p>
            <p>
              <strong>Minimum requirement:</strong>
            </p>
            <p>
              A casino must have at least 3 player reviews to appear in the
              Index. Otherwise, it is listed as &ldquo;Unranked.&rdquo;
            </p>
          </div>
        </div>

        {/* Expert Score */}
        <div data-name="expert-score" className="bg-white rounded-lg border border-neutral-200 shadow-sm p-8 sm:p-12 flex flex-col gap-3.5">
          <h2 className="text-[26px] font-bold tracking-tight text-[#020202]">
            Expert Score — 20%
          </h2>
          <div data-name="expert-score-text" className="text-base text-[#020202]/70 leading-relaxed flex flex-col gap-3.5">
            <p>
              Our team deposits real cryptocurrency, plays real games, and
              attempts real withdrawals at every casino we review.
            </p>
            <p>
              <strong>We evaluate:</strong>
            </p>
          </div>
          <ul className="flex flex-col gap-3">
            {expertChecklist.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <CircleCheck className="size-3.5 shrink-0 text-[#020202]" />
                <span className="text-base text-[#020202]/70">{item}</span>
              </li>
            ))}
          </ul>
          <div data-name="expert-testing-note" className="text-base text-[#020202]/70 leading-relaxed mt-1">
            <p>
              We&apos;ve completed hands-on testing at over 100 casinos and
              counting. The expert score reflects direct, firsthand interaction —
              not press releases.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div data-name="faq-header" className="flex flex-col gap-2.5">
          <span className="text-base font-bold text-[#060d17]">FAQ</span>
          <h2 className="text-[26px] font-bold tracking-tight text-[#020202]">
            Frequently asked questions
          </h2>
        </div>

        <div data-name="faq-list" className="flex flex-col">
          {faqItems.map((item, i) => (
            <AccordionItem
              key={i}
              question={item.question}
              answer={item.answer}
              isOpen={openFaq === i}
              onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              isFirst={i === 0}
              isLast={i === faqItems.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Eye, BadgeCheck, RefreshCw } from "lucide-react";
import type { Guide } from "@/data/guides";
import { guides } from "@/data/guides";
import { BlogCard } from "@/components/blog-card";
import { LoginDialogContent } from "@/components/login-dialog";
import { useAuth } from "@/components/auth-provider";

/* ------------------------------------------------------------------ */
/*  Table of Contents                                                  */
/* ------------------------------------------------------------------ */

function useHeadingToc(containerRef: React.RefObject<HTMLDivElement | null>) {
  const [items, setItems] = useState<{ label: string; id: string }[]>([]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const headings = el.querySelectorAll("h2");
    const tocItems: { label: string; id: string }[] = [];
    headings.forEach((h) => {
      const text = h.textContent?.trim() ?? "";
      if (!text) return;
      const id =
        h.id ||
        "toc-" +
          text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/-+$/, "");
      if (!h.id) h.id = id;
      (h as HTMLElement).style.scrollMarginTop = "280px";
      tocItems.push({ label: text, id });
    });
    setItems(tocItems);
  }, [containerRef]);

  return items;
}

function TableOfContents({
  items,
}: {
  items: { label: string; id: string }[];
}) {
  if (items.length === 0) return null;

  return (
    <nav
      data-name="table-of-contents"
      className="sticky top-[140px] hidden xl:block w-[200px]"
    >
      <div
        data-name="toc-container"
        className="border border-[#e4e8ec] rounded-lg bg-white overflow-hidden shadow-sm"
      >
        <div data-name="toc-header" className="bg-[#0d337d] px-4 py-3">
          <span className="text-[13px] font-semibold text-white uppercase tracking-wide">
            Table of Contents
          </span>
        </div>
        <ul className="flex flex-col py-2">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block px-4 py-[7px] text-[13px] text-slate-700 hover:text-[#003eb6] hover:bg-[#f0f4ff] transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Share */}
      <div data-name="share-section" className="mt-4">
        <p className="text-[13px] font-semibold text-slate-500 uppercase tracking-wide mb-2">
          Share
        </p>
        <div data-name="share-buttons" className="flex gap-2">
          <a
            href="https://www.facebook.com/sharer/sharer.php?u="
            target="_blank"
            rel="noopener noreferrer"
            data-name="share-facebook"
            className="flex items-center justify-center size-9 rounded-lg bg-[#1877F2] text-white hover:opacity-80 transition-opacity"
            aria-label="Share on Facebook"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            data-name="share-instagram"
            className="flex items-center justify-center size-9 rounded-lg bg-linear-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:opacity-80 transition-opacity"
            aria-label="Share on Instagram"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a
            href="https://twitter.com/intent/tweet?url="
            target="_blank"
            rel="noopener noreferrer"
            data-name="share-x"
            className="flex items-center justify-center size-9 rounded-lg bg-[#000000] text-white hover:opacity-80 transition-opacity"
            aria-label="Share on X"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url="
            target="_blank"
            rel="noopener noreferrer"
            data-name="share-linkedin"
            className="flex items-center justify-center size-9 rounded-lg bg-[#0A66C2] text-white hover:opacity-80 transition-opacity"
            aria-label="Share on LinkedIn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/*  Guide Article Content                                              */
/* ------------------------------------------------------------------ */

function GuideCommentSection() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [comment, setComment] = useState("");
  const { isLoggedIn } = useAuth();

  return (
    <div
      data-name="guide-comments"
      className="bg-white rounded-xl shadow-md p-6 sm:p-8"
    >
      {isLoggedIn ? (
        <div data-name="guide-comments-logged-in" className="flex flex-col gap-5">
          <h3
            data-name="guide-comments-title"
            className="text-lg font-black uppercase tracking-wide text-[#060D17]"
          >
            Join the Conversation
          </h3>
          <div data-name="guide-comment-box" className="flex flex-col gap-3">
            <div data-name="guide-comment-user" className="flex items-center gap-3">
              <Image
                src="/icons/default-avatar.svg"
                alt="Your avatar"
                width={36}
                height={36}
                className="size-9 rounded-full bg-[#1C1C1C]"
              />
              <span className="text-sm font-semibold text-neutral-900">Coinbet User</span>
            </div>
            <textarea
              data-name="guide-comment-input"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment..."
              rows={4}
              className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-neutral-300 focus:ring-2 focus:ring-neutral-200 resize-none transition-colors"
            />
            <div data-name="guide-comment-actions" className="flex items-center justify-between">
              <p className="text-xs text-neutral-400">Be respectful and follow the community guidelines.</p>
              <button
                data-name="guide-comment-submit"
                disabled={!comment.trim()}
                className="rounded-lg bg-[#060D17] px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                Post Comment
              </button>
            </div>
          </div>
          <p
            data-name="guide-comments-empty"
            className="text-base text-[#060D17]/70 text-center pt-2"
          >
            No comments yet. Be the first to comment!
          </p>
        </div>
      ) : (
        <div data-name="guide-comments-logged-out" className="flex flex-col items-center gap-5 py-6">
          <h3
            data-name="guide-comments-title"
            className="text-lg font-black uppercase tracking-wide text-[#060D17]"
          >
            Join the Conversation
          </h3>
          <button
            data-name="guide-comments-login"
            className="rounded-full bg-[#060D17] px-8 py-3 text-base font-semibold text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            onClick={() => setLoginOpen(true)}
          >
            Login to Comment
          </button>
          <p
            data-name="guide-comments-empty"
            className="text-base text-[#060D17]/70"
          >
            No comments yet. Be the first to comment!
          </p>
          <LoginDialogContent open={loginOpen} onOpenChange={setLoginOpen} />
        </div>
      )}
    </div>
  );
}

function GuideContent({ guide }: { guide: Guide }) {
  return (
    <div
      data-name="guide-content"
      className="flex flex-col gap-5 bg-white rounded-xl shadow-md p-6 sm:p-8"
    >
      {/* Author Info */}
      <div
        data-name="guide-author-info"
        className="flex flex-wrap items-center gap-3"
      >
        <span className="text-xs font-bold uppercase text-[#404040]">
          Written by
        </span>
        <div data-name="author" className="flex items-center gap-1.5">
          <div
            data-name="author-avatar"
            className="size-[30px] rounded-full bg-[#003EB6] flex items-center justify-center text-xs font-bold text-white shrink-0"
          >
            C
          </div>
          <span className="text-sm font-semibold text-[#060d17]">
            CoinBets Team
          </span>
          <div data-name="verified-badge" className="flex items-center gap-1">
            <BadgeCheck className="size-3.5 text-[#003EB6] fill-[#003EB6] stroke-white" />
            <span className="text-sm font-semibold text-[#003EB6]">
              Verified
            </span>
          </div>
        </div>
        <div
          data-name="author-divider"
          className="h-[17px] w-px bg-[#d9d9d9]"
        />
        <div
          data-name="guide-date-inline"
          className="flex items-center gap-1 opacity-70"
        >
          <RefreshCw className="size-3.5" />
          <span className="text-xs text-[#060d17]">{guide.date}</span>
        </div>
      </div>

      {/* Article Title */}
      <h2
        data-name="guide-article-title"
        className="text-xl font-semibold leading-[1.4] text-[#060d17]"
      >
        {guide.title}
      </h2>

      {/* Featured Image */}
      <div
        data-name="guide-featured-image"
        className="relative w-full h-[240px] sm:h-[340px] lg:h-[420px] rounded-xl bg-[#11181f] overflow-hidden"
      >
        <Image
          src={guide.image}
          alt={guide.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Intro */}
      <div
        data-name="guide-intro"
        className="text-[15px] leading-[1.6] text-black"
      >
        <p>{guide.description}</p>
      </div>

      {/* Benefits of Crypto Gambling */}
      <h3 className="text-lg font-semibold leading-[1.3] text-[#060d17]">
        Benefits of Crypto Gambling
      </h3>
      <div
        data-name="section-benefits"
        className="text-[15px] leading-[1.6] text-black"
      >
        <p className="mb-4">
          Needless to say, crypto casinos can offer features and products that
          traditional online platforms can&apos;t. For example,{" "}
          <strong>provably fair games</strong>, crypto trading, NFT lootboxes,{" "}
          <strong>tokenized rewards</strong>, and DeFi features like staking.
        </p>
        <p>
          But they also offer several more fundamental benefits too. These are
          things that don&apos;t just add extra features, but rather improve the
          core gambling experience.
        </p>
      </div>

      {/* Enhanced Privacy and Security */}
      <h2 className="text-base font-semibold leading-[1.3] text-[#060d17]">
        Enhanced Privacy and Security
      </h2>
      <div
        data-name="section-privacy"
        className="text-[15px] leading-[1.6] text-black"
      >
        <p className="mb-4">
          One of the most appealing benefits of crypto gambling is{" "}
          <strong>enhanced privacy</strong> for users.
        </p>
        <p className="mb-4">
          Of course, the level of privacy depends on several things, including
          the specific gambling platform and cryptocurrency you&apos;re using.
          And remember, crypto transactions are{" "}
          <strong>Pseudo-anonymous</strong>, not completely anonymous.
        </p>
        <p>
          But on the whole, crypto transactions don&apos;t require the same
          level of personal information as traditional payment methods. This
          means you&apos;re{" "}
          <strong>reducing the risk of identity theft</strong> and fraud.
        </p>
      </div>

      {/* Blockquote */}
      <div
        data-name="guide-blockquote"
        className="flex gap-4 items-start bg-[#f8f8f8] border-l-4 border-[#003EB6] px-[15px] py-[18px]"
      >
        <p className="text-[15px] leading-[1.6] text-[#0d0f12]">
          But on the whole, crypto transactions don&apos;t require the same
          level of personal information as traditional payment methods. This
          means you&apos;re{" "}
          <strong>reducing the risk of identity theft</strong> and fraud.
        </p>
      </div>

      {/* Faster, Cheaper Transactions */}
      <h2 className="text-base font-semibold leading-[1.3] text-[#060d17]">
        Faster, Cheaper Transactions
      </h2>
      <div
        data-name="section-transactions"
        className="text-[15px] leading-[1.6] text-black"
      >
        <p className="mb-4">
          Cryptocurrency transactions can also be{" "}
          <strong>much faster</strong> than those involving fiat currencies.
        </p>
        <p className="mb-4">
          Again, it depends on the specific crypto in question, but
          transactions using lightweight altcoins like Litecoin, Bitcoin Cash,
          or Tether, are usually processed{" "}
          <strong>virtually instantly</strong>. Even Ethereum and Bitcoin, which
          tend to be the slowest cryptos, are much faster than a bank transfer.
        </p>
        <p className="mb-4">
          Plus, <strong>transaction fees</strong> are normally extremely low or
          even non-existent for both the player and casino operator.
        </p>
        <p>
          This is especially significant for gambling operators, who often
          absorb significant transaction fees on behalf of their customers.
          And, if gambling operators can{" "}
          <strong>lower their operational costs</strong>, they can afford to
          offer better bonuses to players.
        </p>
      </div>

      {/* Improved Accessibility */}
      <h2 className="text-base font-semibold leading-[1.3] text-[#060d17]">
        Improved Accessibility and Censorship Resistance
      </h2>
      <div
        data-name="section-accessibility"
        className="text-[15px] leading-[1.6] text-black"
      >
        <p className="mb-4">
          A further advantage of crypto gambling is its sheer{" "}
          <strong>accessibility</strong>. Theoretically, at least,
          cryptocurrencies allow casino operators to do business with players{" "}
          <strong>anywhere in the world</strong>.
        </p>
        <p>
          Anyone who has internet access and a crypto wallet can deposit and
          withdraw. This is an example of{" "}
          <strong>censorship resistance</strong> – one of the most attractive
          aspects of cryptocurrency and decentralization in general.
        </p>
      </div>

      {/* Blockquote */}
      <div
        data-name="guide-blockquote"
        className="flex gap-4 items-start bg-[#f8f8f8] border-l-4 border-[#003EB6] px-[15px] py-[18px]"
      >
        <p className="text-[15px] leading-[1.6] text-[#0d0f12]">
          Theoretically, at least, cryptocurrencies allow casino operators to
          do business with players <strong>anywhere in the world</strong>.
        </p>
      </div>

      {/* Separator */}
      <hr
        data-name="guide-separator"
        className="border-t-2 border-dotted border-neutral-300 my-2"
      />

      {/* Drawbacks of Crypto Gambling */}
      <h3 className="text-lg font-semibold leading-[1.3] text-[#060d17]">
        Drawbacks of Crypto Gambling
      </h3>
      <p className="text-[15px] leading-[1.6] text-black">
        But (there&apos;s always a &quot;but&quot;), the very fact that crypto
        gambling sites can operate outside of the reach of regulators can be a{" "}
        <strong>double-edged sword</strong>.
      </p>

      {/* Weak Player Protection */}
      <h2 className="text-base font-semibold leading-[1.3] text-[#060d17]">
        Weak Player Protection
      </h2>
      <div
        data-name="section-weak-protection"
        className="text-[15px] leading-[1.6] text-black"
      >
        <p className="mb-4">
          Because crypto casinos often operate from obscure, &quot;light
          touch&quot; jurisdictions, players can find themselves with{" "}
          <strong>little or no protection</strong> in the event of a dispute or
          fraud.
        </p>
        <p className="mb-4">
          For example, most crypto casinos are now licensed in{" "}
          <strong>Curacao</strong>, <strong>Anjouan</strong>, or{" "}
          <strong>Tobique</strong>. And while the former is attempting to
          introduce improved standards, the latter two are very much
          &quot;jurisdictions of convenience&quot; for operators – offering
          essentially no protection for players.
        </p>
        <p>
          Good luck trying to complain to the authorities in Mutsamudu if you
          want to recover lost funds. &quot;<em>Where the heck is Mutsamudu?</em>
          &quot; you ask. Exactly.
        </p>
      </div>

      {/* Crypto Price Volatility */}
      <h2 className="text-base font-semibold leading-[1.3] text-[#060d17]">
        Crypto Price Volatility
      </h2>
      <div
        data-name="section-volatility"
        className="text-[15px] leading-[1.6] text-black"
      >
        <p className="mb-4">
          The <strong>price volatility</strong> of cryptocurrencies is also an
          inherent risk when engaging in crypto gambling of any sort.
        </p>
        <p>
          The value of digital currencies is prone to dramatic and extremely
          rapid fluctuations, meaning your funds can{" "}
          <strong>lose significant value</strong> between the time of deposit
          and withdrawal. Of course, they can also go up in value during the
          same time – but, it can make managing a gambling bankroll tricky.
        </p>
      </div>

      {/* Dodgy Operators */}
      <h2 className="text-base font-semibold leading-[1.3] text-[#060d17]">
        Dodgy Operators
      </h2>
      <p className="text-[15px] leading-[1.6] text-black">
        Finally, because of its ability to offer pseudo-anonymous transactions,
        the crypto space still attracts some <strong>scammers</strong>. And,
        there&apos;s no getting around it, the gambling industry has seen its
        fair share of rogue operators willing to take advantage of unsuspecting
        players over recent years.
      </p>

      {/* Comparison Table */}
      <div
        data-name="guide-comparison-table"
        className="overflow-x-auto rounded-lg border border-[#e4e8ec]"
      >
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#0d337d] text-white">
              <th className="px-4 py-3 text-left font-semibold">
                Payment Methods
              </th>
              <th className="px-4 py-3 text-left font-semibold">
                Traditional Gambling Sites
              </th>
              <th className="px-4 py-3 text-left font-semibold">
                Crypto Gambling Sites
              </th>
            </tr>
          </thead>
          <tbody className="text-[#0d0f12]">
            <tr className="border-t border-[#e4e8ec]">
              <td className="px-4 py-3 font-medium align-top">
                Payment Options
              </td>
              <td className="px-4 py-3 align-top">
                Credit Cards (Visa, Mastercard, Amex), E-Wallets (PayPal,
                Skrill, Neteller), Prepaid (Paysafecard), Bank Transfers
              </td>
              <td className="px-4 py-3 align-top">
                Bitcoin, Ethereum, Tether, BNB, Solana, USDC, XRP, Dogecoin,
                Litecoin, Monero, and many more
              </td>
            </tr>
            <tr className="border-t border-[#e4e8ec] bg-[#f8f8f8]">
              <td className="px-4 py-3 font-medium align-top">Security</td>
              <td className="px-4 py-3 align-top">
                Strong regulatory frameworks and oversight
              </td>
              <td className="px-4 py-3 align-top">
                Decentralized, with provably fair systems
              </td>
            </tr>
            <tr className="border-t border-[#e4e8ec]">
              <td className="px-4 py-3 font-medium align-top">
                Accessibility
              </td>
              <td className="px-4 py-3 align-top">
                Limited by regional laws and regulations
              </td>
              <td className="px-4 py-3 align-top">
                Global accessibility, few regional restrictions
              </td>
            </tr>
            <tr className="border-t border-[#e4e8ec] bg-[#f8f8f8]">
              <td className="px-4 py-3 font-medium align-top">
                Transaction Speed
              </td>
              <td className="px-4 py-3 align-top">
                Slow, especially for withdrawals
              </td>
              <td className="px-4 py-3 align-top">
                Fast, virtually instant deposits and withdrawals
              </td>
            </tr>
            <tr className="border-t border-[#e4e8ec]">
              <td className="px-4 py-3 font-medium align-top">
                Transaction Fees
              </td>
              <td className="px-4 py-3 align-top">
                Can be high, depending on payment method
              </td>
              <td className="px-4 py-3 align-top">Typically very low</td>
            </tr>
            <tr className="border-t border-[#e4e8ec] bg-[#f8f8f8]">
              <td className="px-4 py-3 font-medium align-top">Privacy</td>
              <td className="px-4 py-3 align-top">
                Requires personal and financial details and ID verification
              </td>
              <td className="px-4 py-3 align-top">
                Offers high levels of anonymity
              </td>
            </tr>
            <tr className="border-t border-[#e4e8ec]">
              <td className="px-4 py-3 font-medium align-top">Games</td>
              <td className="px-4 py-3 align-top">
                Wide selection of games and betting options
              </td>
              <td className="px-4 py-3 align-top">
                Wide selection at centralized crypto casinos. Limited choice of
                truly decentralized games
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Separator */}
      <hr
        data-name="guide-separator"
        className="border-t border-neutral-200 my-2"
      />

      {/* How to Choose */}
      <h2 className="text-xl font-semibold leading-[1.3] text-[#060d17]">
        How to Choose Between Traditional and Crypto Gambling
      </h2>
      <div
        data-name="section-how-to-choose"
        className="text-[15px] leading-[1.6] text-black"
      >
        <p className="mb-4">
          Here at CoinBets, we <em>love</em> <strong>crypto casinos</strong>{" "}
          and sportsbooks, but whether it&apos;s the best choice for you will
          depend on your personal priorities.
        </p>
        <p className="mb-4">
          If <strong>security</strong>, <strong>regulation</strong>, and{" "}
          <strong>customer support</strong> are your main concerns, then it
          might be better to opt for one of the{" "}
          <strong>traditional gambling</strong> platforms. The environment will
          be more familiar to those used to offline betting, and you&apos;ll
          have the reassurance of a clear dispute resolution process should
          anything go wrong.
        </p>
        <p className="mb-4">
          Likewise, if you don&apos;t feel comfortable using{" "}
          <strong>cryptocurrency wallets</strong> and{" "}
          <strong>exchanges</strong>, then you&apos;re better off sticking with
          fiat-based platforms (at least until you catch the crypto bug).
        </p>
        <p>
          On the other hand, a good crypto casino or sportsbook site will suit
          those who prioritize <strong>privacy</strong>, <strong>speed</strong>,
          and exciting <strong>new games</strong> and Web3{" "}
          <strong>features</strong>.
        </p>
      </div>

      {/* Blockquote */}
      <div
        data-name="guide-blockquote"
        className="flex gap-4 items-start bg-[#f8f8f8] border-l-4 border-[#003EB6] px-[15px] py-[18px]"
      >
        <p className="text-[15px] leading-[1.6] text-[#0d0f12]">
          On the other hand, a good crypto casino or sportsbook site will suit
          those who prioritize <strong>privacy</strong>, <strong>speed</strong>,
          and exciting <strong>new games and features</strong>.
        </p>
      </div>

      <p className="text-[15px] leading-[1.6] text-black">
        And, let&apos;s not forget, if you&apos;re living in a country with
        repressive gambling regulations, a crypto platform may be the{" "}
        <strong>only safe way</strong> to access online casino gaming and
        sports betting.
      </p>

      {/* Venn Diagram Section */}
      <div
        data-name="guide-venn-section"
        className="rounded-xl overflow-hidden"
        style={{
          backgroundImage:
            "url('https://stg-coinbets-staging.kinsta.cloud/wp-content/uploads/article_images/article_2/tvc_bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div
          data-name="venn-container"
          className="bg-[#151e25]/90 px-5 sm:px-10 py-12 sm:py-16"
        >
          <div data-name="venn-header" className="text-center mb-10">
            <p className="text-[#e6b830] text-sm font-semibold uppercase tracking-wider mb-1">
              Traditional vs. Crypto Gambling
            </p>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              A Side-by-Side Showdown
            </h3>
          </div>

          <div
            data-name="venn-graph"
            className="flex justify-center mb-10"
          >
            <Image
              src="https://stg-coinbets-staging.kinsta.cloud/wp-content/uploads/article_images/article_2/graph.svg"
              alt="Venn Diagram showing Traditional vs Crypto Gambling"
              width={600}
              height={400}
              className="max-w-full h-auto rounded-lg"
            />
          </div>

          <div
            data-name="venn-columns"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
          >
            {/* Traditional */}
            <div data-name="venn-col-traditional" className="flex flex-col gap-4">
              <span className="text-[32px]">🔵</span>
              <div className="flex flex-col gap-3">
                <div data-name="venn-item" className="flex flex-col gap-0.5">
                  <p className="text-sm font-bold text-white">
                    🛡️ Fully Regulated &amp; Licensed
                  </p>
                  <p className="text-xs leading-relaxed text-white/60">
                    UKGC, MGA, and other watchdogs keep it tight.
                  </p>
                </div>
                <div data-name="venn-item" className="flex flex-col gap-0.5">
                  <p className="text-sm font-bold text-white">
                    💳 Fiat-Only Payment Systems
                  </p>
                  <p className="text-xs leading-relaxed text-white/60">
                    Think cards, banks, PayPal — all tied to your identity.
                  </p>
                </div>
                <div data-name="venn-item" className="flex flex-col gap-0.5">
                  <p className="text-sm font-bold text-white">
                    🐢 Slow &amp; Clunky Transactions
                  </p>
                  <p className="text-xs leading-relaxed text-white/60">
                    Withdrawals can take days. Fees and delays are standard.
                  </p>
                </div>
                <div data-name="venn-item" className="flex flex-col gap-0.5">
                  <p className="text-sm font-bold text-white">
                    📞 Legacy Support Channels
                  </p>
                  <p className="text-xs leading-relaxed text-white/60">
                    Phone lines, live chat, and email — if you&apos;re lucky.
                  </p>
                </div>
              </div>
            </div>

            {/* Both */}
            <div data-name="venn-col-both" className="flex flex-col gap-4">
              <span className="text-[32px]">🟡</span>
              <div className="flex flex-col gap-3">
                <div data-name="venn-item" className="flex flex-col gap-0.5">
                  <p className="text-sm font-bold text-white">
                    🎰 Wide Game Variety
                  </p>
                  <p className="text-xs leading-relaxed text-white/60">
                    Slots, blackjack, live dealers — both sides bring the heat.
                  </p>
                </div>
                <div data-name="venn-item" className="flex flex-col gap-0.5">
                  <p className="text-sm font-bold text-white">
                    🎁 Bonuses &amp; Promos
                  </p>
                  <p className="text-xs leading-relaxed text-white/60">
                    Crypto or fiat, everyone wants your deposit.
                  </p>
                </div>
                <div data-name="venn-item" className="flex flex-col gap-0.5">
                  <p className="text-sm font-bold text-white">
                    💻 Play Anywhere
                  </p>
                  <p className="text-xs leading-relaxed text-white/60">
                    Desktop or mobile — both formats support modern gamblers.
                  </p>
                </div>
                <div data-name="venn-item" className="flex flex-col gap-0.5">
                  <p className="text-sm font-bold text-white">
                    🌍 Geo-Based Restrictions
                  </p>
                  <p className="text-xs leading-relaxed text-white/60">
                    Where you live still matters (for now).
                  </p>
                </div>
              </div>
            </div>

            {/* Crypto */}
            <div data-name="venn-col-crypto" className="flex flex-col gap-4">
              <span className="text-[32px]">🟢</span>
              <div className="flex flex-col gap-3">
                <div data-name="venn-item" className="flex flex-col gap-0.5">
                  <p className="text-sm font-bold text-white">
                    🧩 Light Regulation
                  </p>
                  <p className="text-xs leading-relaxed text-white/60">
                    Most platforms skip the red tape.
                  </p>
                </div>
                <div data-name="venn-item" className="flex flex-col gap-0.5">
                  <p className="text-sm font-bold text-white">
                    🪙 Crypto Payments Only
                  </p>
                  <p className="text-xs leading-relaxed text-white/60">
                    Bitcoin, ETH, USDT, SOL, and more — no banks, no middlemen.
                  </p>
                </div>
                <div data-name="venn-item" className="flex flex-col gap-0.5">
                  <p className="text-sm font-bold text-white">
                    ⚡ Instant Transactions
                  </p>
                  <p className="text-xs leading-relaxed text-white/60">
                    Withdraw in seconds, not business days.
                  </p>
                </div>
                <div data-name="venn-item" className="flex flex-col gap-0.5">
                  <p className="text-sm font-bold text-white">
                    🕶️ Privacy Built In
                  </p>
                  <p className="text-xs leading-relaxed text-white/60">
                    No ID, no docs — just wallet, wager, win.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <hr
        data-name="guide-separator"
        className="border-t border-neutral-200 my-2"
      />

      {/* Future Online Gambling Trends */}
      <h2 className="text-xl font-semibold leading-[1.3] text-[#060d17]">
        Future Online Gambling Trends
      </h2>
      <p className="text-[15px] leading-[1.6] text-black">
        So, we&apos;ve looked at the history of online gambling and how
        cryptocurrencies and decentralized technologies are revolutionizing the
        industry right now. But what does the <strong>future</strong> hold?
        Will things stay on their current trajectory, or will we see major
        changes?
      </p>

      {/* Separator dots */}
      <hr
        data-name="guide-separator"
        className="border-t-2 border-dotted border-neutral-300 my-2"
      />

      {/* Tier 1 Regulators */}
      <h3 className="text-lg font-semibold leading-[1.3] text-[#060d17]">
        Tier 1 Regulators Enable Crypto Support
      </h3>
      <div
        data-name="section-regulators"
        className="text-[15px] leading-[1.6] text-black"
      >
        <p className="mb-4">
          As already mentioned, most of today&apos;s &quot;crypto casinos&quot;
          are actually <strong>hybrid crypto-fiat</strong> sites. They are
          operated by centralized companies, but support crypto payments
          alongside fiat options, and have integrated{" "}
          <strong>blockchain-</strong>based elements like provably fair games.
        </p>
        <p className="mb-4">
          So far, this hybrid approach has only really been possible for
          operators licensed in more lenient jurisdictions like Curacao and
          Anjouan. But, as crypto becomes more mainstream, we expect even the
          strictest regulators, like those in the UK, the Netherlands, and
          Sweden, will eventually ease up and facilitate crypto payments.
        </p>
        <p>
          This will likely result in many of the biggest online gambling brands
          adding limited <strong>crypto payment options</strong>. However, they
          will most likely still be required to comply with strict KYC (Know
          Your Customer) and AML (Anti-Money Laundering) rules.
        </p>
      </div>

      {/* Separator dots */}
      <hr
        data-name="guide-separator"
        className="border-t-2 border-dotted border-neutral-300 my-2"
      />

      {/* Provably Fair Games */}
      <h3 className="text-lg font-semibold leading-[1.3] text-[#060d17]">
        Provably Fair Games Become the New Standard
      </h3>
      <div
        data-name="section-provably-fair"
        className="text-[15px] leading-[1.6] text-black"
      >
        <p className="mb-4">
          <strong>Provably fair games</strong>, on the other hand, will
          probably become common even at licensed casinos that can&apos;t
          accept crypto payments. There&apos;s no real reason why the
          technology can&apos;t be integrated into licensed casinos, assuming
          the game providers get the titles appropriately certified.
        </p>
        <p className="mb-4">
          The real stumbling block for this is that most people currently using
          traditional online casinos aren&apos;t familiar with the{" "}
          <strong>crypto space or decentralization</strong>, so there&apos;s
          little demand. But, as the general population becomes more familiar
          with blockchain and smart contracts, this will change.
        </p>
        <p>
          Importantly, as the market for provably fair games grows,{" "}
          <strong>major game providers</strong> (Pragmatic Play, Hacksaw,
          Nolimit City, etc.), will be more willing to invest in product
          development. This will give provably fair games more mainstream
          appeal, and help create even more demand.
        </p>
      </div>

      {/* Blockquote */}
      <div
        data-name="guide-blockquote"
        className="flex gap-4 items-start bg-[#f8f8f8] border-l-4 border-[#003EB6] px-[15px] py-[18px]"
      >
        <p className="text-[15px] leading-[1.6] text-[#0d0f12]">
          Importantly, as the market for provably fair games grows,{" "}
          <strong>major game providers</strong> (Pragmatic Play, Hacksaw,
          Nolimit City, etc.), will be more willing to invest in product
          development.
        </p>
      </div>

      {/* Separator dots */}
      <hr
        data-name="guide-separator"
        className="border-t-2 border-dotted border-neutral-300 my-2"
      />

      {/* Regulatory Pushback */}
      <h3 className="text-lg font-semibold leading-[1.3] text-[#060d17]">
        The Inevitable Regulatory Pushback
      </h3>
      <div
        data-name="section-regulatory"
        className="text-[15px] leading-[1.6] text-black"
      >
        <p className="mb-4">
          Here&apos;s the &quot;<em>but</em>&quot; again; many regulators are
          still struggling to get their heads around the core concepts of
          cryptocurrency and decentralization, let alone crypto gambling.
        </p>
        <p className="mb-4">
          While some jurisdictions have accepted that crypto is here to stay
          and are trying to provide clear <strong>legal frameworks</strong>,
          others are still a mess. So, in some countries, we will see
          progressive policies that make crypto adoption easier. But we are
          just as likely to see <strong>regressive policies</strong> in other
          places.
        </p>
        <p>
          A prime example is in the United States, where crypto has turned into
          something of a political football. Yep, Trump loves it, but those
          Democrats weren&apos;t so keen – and a term is only 4 years!
        </p>
      </div>

      {/* Separator dots */}
      <hr
        data-name="guide-separator"
        className="border-t-2 border-dotted border-neutral-300 my-2"
      />

      {/* AI Meets Crypto Gambling */}
      <h3 className="text-lg font-semibold leading-[1.3] text-[#060d17]">
        When AI Meets Crypto Gambling
      </h3>
      <div
        data-name="section-ai"
        className="text-[15px] leading-[1.6] text-black"
      >
        <p className="mb-4">
          Additionally, the relentless progress in the fields of{" "}
          <strong>artificial intelligence</strong> (AI),{" "}
          <strong>virtual reality</strong> (VR), and{" "}
          <strong>augmented reality</strong> (AR) will certainly play a role in
          shaping the future of crypto gambling platforms.
        </p>
        <p className="mb-4">
          In very broad terms, they offer the promise of more{" "}
          <strong>immersive</strong>, and <strong>interactive</strong> gambling
          experiences. AI, especially, will allow operators to offer{" "}
          <strong>highly personalized bonuses</strong> and products, while at
          the same time reducing operational costs. There&apos;s also potential
          for improved safer gambling tools and more effective fraud prevention
          and security.
        </p>
      </div>

      {/* Blockquote */}
      <div
        data-name="guide-blockquote"
        className="flex gap-4 items-start bg-[#f8f8f8] border-l-4 border-[#003EB6] px-[15px] py-[18px]"
      >
        <p className="text-[15px] leading-[1.6] text-[#0d0f12]">
          AI, especially, will allow operators to offer{" "}
          <strong>highly personalized bonuses</strong> and products, while at
          the same time reducing operational costs.
        </p>
      </div>

      <p className="text-[15px] leading-[1.6] text-black">
        And, given the forward-looking nature of the crypto gambling industry
        and player base, we think it&apos;s safe to say both will be pushing
        the AI envelope.
      </p>

      {/* Timeline Section */}
      <div
        data-name="guide-timeline-section"
        className="rounded-xl overflow-hidden"
        style={{
          backgroundImage:
            "url('https://stg-coinbets-staging.kinsta.cloud/wp-content/uploads/article_images/article_2/base.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          data-name="timeline-container"
          className="bg-[#11181f]/90 px-5 sm:px-10 py-10 sm:py-14"
        >
          <h3
            data-name="timeline-heading"
            className="text-center text-xl sm:text-2xl font-bold text-white mb-10"
          >
            What&apos;s Next for Crypto Gambling?
            <br />5 Trends Shaping the Future
          </h3>

          <div
            data-name="timeline-list"
            className="flex flex-col gap-8 max-w-[540px] mx-auto"
          >
            {[
              {
                img: "https://stg-coinbets-staging.kinsta.cloud/wp-content/uploads/article_images/article_2/time_line_1.svg",
                label: "Hybrid Crypto-Fiat Casinos",
              },
              {
                img: "https://stg-coinbets-staging.kinsta.cloud/wp-content/uploads/article_images/article_2/time_line_2.svg",
                label: "Provably Fair Becomes Standard",
              },
              {
                img: "https://stg-coinbets-staging.kinsta.cloud/wp-content/uploads/article_images/article_2/time_line_3.svg",
                label: "AI-Powered Personalization",
              },
              {
                img: "https://stg-coinbets-staging.kinsta.cloud/wp-content/uploads/article_images/article_2/time_line_4.svg",
                label: "VR & AR Gambling Worlds",
              },
              {
                img: "https://stg-coinbets-staging.kinsta.cloud/wp-content/uploads/article_images/article_2/time_line_5.svg",
                label: "Regulatory Tug-of-War",
              },
            ].map((item, i, arr) => (
              <div
                key={i}
                data-name="timeline-item"
                className="relative grid grid-cols-[100px_1fr] sm:grid-cols-[130px_1fr] gap-6 items-center"
              >
                {/* Image */}
                <div
                  data-name="timeline-item-image"
                  className="rounded-xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={item.img}
                    alt={item.label}
                    width={130}
                    height={130}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Dot + Line + Label */}
                <div
                  data-name="timeline-item-content"
                  className="relative pl-10 flex items-center h-full"
                >
                  {/* Dot */}
                  <div
                    data-name="timeline-dot"
                    className="absolute left-0 top-1/2 -translate-y-1/2 size-[25px] rounded-full bg-[#2b2b2b] z-2"
                  />
                  {/* Line */}
                  {i < arr.length - 1 && (
                    <div
                      data-name="timeline-line"
                      className="absolute left-[11px] top-[calc(50%+12px)] w-1 h-[80px]"
                      style={{
                        background:
                          "linear-gradient(180deg, #11181f 0%, #e6b830 100%)",
                      }}
                    />
                  )}
                  <h4 className="text-base sm:text-lg font-semibold text-[#ffd92f] leading-snug">
                    {item.label}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Export                                                         */
/* ------------------------------------------------------------------ */

export function GuideArticleBlock({ guide }: { guide: Guide }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const tocItems = useHeadingToc(contentRef);

  return (
    <div data-name="guide-article-wrapper" className="site-container py-8 sm:py-12">
      {/* Back link */}
      <div data-name="guide-back-wrapper" className="max-w-[820px] mx-auto">
        <Link
          href="/guides"
          data-name="guide-back-link"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-700 transition-colors mb-6"
        >
          <ArrowLeft className="size-4" />
          Back to Guides
        </Link>
      </div>

      {/* Badge + Meta Header */}
      <div data-name="guide-header-meta" className="flex flex-wrap items-center gap-3 mb-6 max-w-[820px] mx-auto">
        <span
          data-name="guide-badge"
          className="rounded-lg bg-[#e6b830] px-2.5 py-1 text-sm font-semibold text-[#020202]"
        >
          {guide.badge}
        </span>
        <div
          data-name="guide-meta-date"
          className="flex items-center gap-1.5 text-sm font-medium text-[#060D17]"
        >
          <Calendar className="size-[18px] text-neutral-500" />
          {guide.date}
        </div>
        <div
          data-name="guide-meta-views"
          className="flex items-center gap-1.5 text-sm font-medium text-[#060D17]"
        >
          <Eye className="size-[18px] text-neutral-500" />
          {guide.views} Views
        </div>
      </div>

      {/* Content area with TOC sidebar */}
      <div
        data-name="guide-article-section"
        className="relative flex flex-col gap-6 max-w-[820px] mx-auto"
        ref={contentRef}
      >
        {/* TOC floats outside the container on the right */}
        <div
          data-name="toc-sidebar-wrapper"
          className="absolute top-0 bottom-0 left-full ml-6 hidden xl:block"
        >
          <TableOfContents items={tocItems} />
        </div>

        {/* Content Card */}
        <GuideContent guide={guide} />

        {/* Comment Section */}
        <GuideCommentSection />
      </div>

      {/* Related Articles */}
      <RelatedArticles currentSlug={guide.slug} />
    </div>
  );
}

function RelatedArticles({ currentSlug }: { currentSlug: string }) {
  const related = guides
    .filter((g) => g.slug !== currentSlug)
    .slice(0, 4);

  return (
    <section data-name="related-articles" className="mt-12 sm:mt-16">
      <h2 data-name="related-articles-title" className="text-lg font-bold text-[#060d17] mb-6">
        Related Articles
      </h2>
      <div
        data-name="related-articles-grid"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {related.map((guide) => (
          <BlogCard
            key={guide.slug}
            image={guide.image}
            badge={guide.badge}
            title={guide.title}
            date={guide.date}
            views={guide.views}
            slug={guide.slug}
            href={`/guides/${guide.slug}`}
          />
        ))}
      </div>
    </section>
  );
}

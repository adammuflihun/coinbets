"use client";

import { useState, useEffect, useRef } from "react";

const sections = [
  {
    id: "about",
    title: "1. About CoinBets",
    content: (
      <>
        <p>
          CoinBets is an independent information platform that publishes expert
          reviews, guides, and user opinions about crypto casinos, sports
          betting, and related services.
        </p>
        <ul>
          <li>
            We <strong>do not</strong> promote, advertise, or link directly to
            any gambling sites.
          </li>
          <li>
            We <strong>do not</strong> receive payments from casinos for
            rankings, reviews, or placements.
          </li>
          <li>
            All content is for{" "}
            <strong>informational and educational purposes only</strong>.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "age-restriction",
    title: "2. Age Restriction",
    content: (
      <p>
        CoinBets is intended for individuals <strong>18 years or older</strong>,
        or the legal gambling age in your jurisdiction, whichever is higher. We
        do not knowingly collect personal data from anyone under this age.
      </p>
    ),
  },
  {
    id: "no-gambling",
    title: "3. No Gambling or Financial Services",
    content: (
      <ul>
        <li>CoinBets does not offer gambling services.</li>
        <li>
          We do not process bets, handle deposits/withdrawals, or facilitate any
          gambling transactions.
        </li>
        <li>
          We do not offer financial advice or recommend that you gamble.
        </li>
      </ul>
    ),
  },
  {
    id: "user-content",
    title: "4. User Reviews & Content",
    content: (
      <>
        <p>
          Users may submit reviews, ratings, and comments (&quot;User
          Content&quot;) under the following conditions:
        </p>
        <ul>
          <li>
            You must provide truthful, first-hand information based on your own
            experience.
          </li>
          <li>
            You must not post false, defamatory, offensive, or illegal content.
          </li>
          <li>
            You must not impersonate others or post content on behalf of a
            casino or brand.
          </li>
          <li>
            By submitting content, you grant CoinBets a{" "}
            <strong>non-exclusive, royalty-free, worldwide license</strong> to
            display, distribute, and adapt it for editorial purposes.
          </li>
        </ul>
        <p>
          CoinBets reserves the right to edit, refuse, or remove User Content at
          our discretion.
        </p>
      </>
    ),
  },
  {
    id: "no-endorsement",
    title: "5. No Endorsement",
    content: (
      <p>
        References to any casino, brand, or service on CoinBets are for
        information only. The inclusion of a brand in our rankings or reviews{" "}
        <strong>does not constitute endorsement</strong>.
      </p>
    ),
  },
  {
    id: "accuracy",
    title: "6. Accuracy of Information",
    content: (
      <>
        <p>
          We make reasonable efforts to keep our information accurate and up to
          date, but:
        </p>
        <ul>
          <li>Information may change without notice.</li>
          <li>
            We make no guarantees about the completeness, accuracy, or
            timeliness of the content.
          </li>
          <li>
            You use our site <strong>at your own risk</strong>.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "no-liability",
    title: "7. No Liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by law, CoinBets:
        </p>
        <ul>
          <li>
            Is <strong>not responsible</strong> for any losses, damages, or
            consequences resulting from your reliance on our content.
          </li>
          <li>
            Is <strong>not liable</strong> for your interactions with any
            third-party brands mentioned on our site.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "8. Intellectual Property",
    content: (
      <p>
        All original content, design elements, and branding on CoinBets are the
        property of CoinBets unless otherwise stated. You may not reproduce,
        distribute, or modify our content without permission.
      </p>
    ),
  },
  {
    id: "privacy",
    title: "9. Privacy",
    content: (
      <p>
        Our Privacy Policy explains how we handle user data, including
        user-submitted content.
      </p>
    ),
  },
  {
    id: "changes",
    title: "10. Changes to These Terms",
    content: (
      <p>
        We may update these Terms at any time. The updated version will be posted
        on this page with a revised &quot;Effective Date.&quot;
      </p>
    ),
  },
  {
    id: "contact",
    title: "11. Contact Us",
    content: (
      <p>
        If you have questions about these Terms, contact us through our contact
        form.
      </p>
    ),
  },
];

function useActiveSection() {
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: 0.1 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeId;
}

export function TermsContent() {
  const contentRef = useRef<HTMLDivElement>(null);
  const activeId = useActiveSection();

  return (
    <div data-name="terms-page" className="bg-[#f8f9fa] min-h-screen">
      {/* Header */}
      <div data-name="terms-header" className="relative bg-[#060D17] text-white overflow-hidden">
        <div
          data-name="terms-header-bg"
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero/bg-recommend.svg')" }}
        />
        <div className="relative site-container py-12 lg:py-16 text-center flex flex-col items-center">
          <p
            data-name="terms-meta"
            className="text-sm text-white/50 mb-3"
          >
            Last updated 10 August 2025
          </p>
          <h1
            data-name="terms-title"
            className="text-3xl lg:text-4xl font-bold mb-3"
          >
            Terms of Service
          </h1>
          <p
            data-name="terms-subtitle"
            className="text-base lg:text-lg text-white/70 max-w-[65ch]"
          >
            Welcome to CoinBets. By accessing or using our website, you agree to
            these Terms of Service. If you do not agree, please do not use our
            site.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-[960px] px-5 sm:px-10 py-10 lg:py-14">
        <div
          data-name="terms-layout"
          className="flex gap-10 items-start"
        >
          {/* Main content */}
          <div
            ref={contentRef}
            data-name="terms-body"
            className="flex-1 min-w-0"
          >
            <div
              data-name="terms-sections"
              className="rounded-xl bg-white border border-neutral-200 shadow-sm overflow-hidden"
            >
              {sections.map((section, i) => (
                <div
                  key={section.id}
                  id={section.id}
                  data-name={`terms-section-${section.id}`}
                  className={`px-6 lg:px-10 py-8 ${
                    i < sections.length - 1
                      ? "border-b border-neutral-100"
                      : ""
                  }`}
                  style={{ scrollMarginTop: "120px" }}
                >
                  <h2
                    data-name="section-title"
                    className="text-lg lg:text-xl font-bold text-[#060D17] mb-4"
                  >
                    {section.title}
                  </h2>
                  <div
                    data-name="section-content"
                    className="prose-terms text-[15px] leading-relaxed text-[#060D17]/80 space-y-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_strong]:text-[#060D17] [&_strong]:font-semibold"
                  >
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar TOC */}
          <nav
            data-name="terms-toc"
            className="sticky top-[80px] hidden xl:block w-[240px] shrink-0"
          >
            <div
              data-name="toc-container"
              className="border border-neutral-200 rounded-xl bg-white overflow-hidden shadow-sm"
            >
              <div
                data-name="toc-header"
                className="bg-[#060D17] px-4 py-3"
              >
                <span className="text-[13px] font-semibold text-white uppercase tracking-wide">
                  Contents
                </span>
              </div>
              <ul data-name="toc-list" className="flex flex-col py-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      data-name={`toc-link-${section.id}`}
                      className={`block px-4 py-[7px] text-[13px] transition-colors ${
                        activeId === section.id
                          ? "text-[#060D17] font-semibold bg-[#f0f4ff] border-l-2 border-[#060D17]"
                          : "text-slate-600 hover:text-[#060D17] hover:bg-neutral-50"
                      }`}
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

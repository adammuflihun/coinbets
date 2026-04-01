"use client";

import { useState, useEffect, useRef } from "react";

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: (
      <>
        <p>
          We collect minimal information necessary to operate our platform:
        </p>
        <ul>
          <li>
            <strong>Information you provide directly</strong>: When you submit a
            review, comment, or contact us, we collect the data you choose to
            share (such as your username, review content, email if provided, and
            any screenshots or attachments).
          </li>
          <li>
            <strong>Automatic data</strong>: We collect basic technical data like
            your IP address, browser type, and device information for security,
            analytics, and site functionality.
          </li>
          <li>
            <strong>Cookies</strong>: We use cookies and similar technologies to
            improve site performance and remember your preferences. You can
            disable cookies in your browser settings.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content: (
      <>
        <p>We use your information to:</p>
        <ul>
          <li>Publish and display user reviews and comments.</li>
          <li>Moderate and prevent spam, abuse, and fraud.</li>
          <li>Improve website functionality and user experience.</li>
          <li>Respond to inquiries and feedback.</li>
        </ul>
        <p>
          We <strong>do not</strong> sell, rent, or trade your personal data.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "3. Sharing Your Information",
    content: (
      <>
        <p>We may share information only in the following cases:</p>
        <ul>
          <li>
            <strong>With service providers</strong> that help us operate the
            website (e.g., hosting, analytics, anti-spam services).
          </li>
          <li>
            <strong>When required by law</strong> or to comply with legal
            processes.
          </li>
          <li>
            <strong>To protect rights and safety</strong> of CoinBets, our
            users, or others.
          </li>
        </ul>
        <p>
          We do <strong>not</strong> share data with casinos, gambling operators,
          or affiliate marketers.
        </p>
      </>
    ),
  },
  {
    id: "user-generated-content",
    title: "4. User-Generated Content",
    content: (
      <p>
        When you post reviews or comments on CoinBets, that content may be
        publicly visible. Please avoid sharing personal or sensitive information
        in public posts.
      </p>
    ),
  },
  {
    id: "data-retention",
    title: "5. Data Retention",
    content: (
      <p>
        We keep your information only as long as necessary for the purposes
        stated in this policy, or as required by law. You may request deletion of
        your account or submitted content by contacting us.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "6. Your Rights",
    content: (
      <>
        <p>
          Depending on your location, you may have rights under data protection
          laws (such as GDPR), including the right to:
        </p>
        <ul>
          <li>Access the personal data we hold about you.</li>
          <li>Request correction or deletion of your data.</li>
          <li>Object to or limit how we process your data.</li>
          <li>Withdraw consent where applicable.</li>
        </ul>
        <p>To exercise your rights, contact us through our contact form.</p>
      </>
    ),
  },
  {
    id: "security",
    title: "7. Security",
    content: (
      <p>
        We use reasonable technical and organizational measures to protect your
        information, but no system is completely secure. Use the website at your
        own risk.
      </p>
    ),
  },
  {
    id: "changes",
    title: "8. Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy at any time. The updated version will
        be posted here with a revised &quot;Effective Date.&quot;
      </p>
    ),
  },
  {
    id: "contact",
    title: "9. Contact Us",
    content: (
      <p>
        If you have questions about this Privacy Policy, contact us on our
        contact form.
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

export function PrivacyContent() {
  const contentRef = useRef<HTMLDivElement>(null);
  const activeId = useActiveSection();

  return (
    <div data-name="privacy-page" className="bg-[#f8f9fa] min-h-screen">
      {/* Header */}
      <div data-name="privacy-header" className="relative bg-[#060D17] text-white overflow-hidden">
        <div
          data-name="privacy-header-bg"
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero/bg-recommend.svg')" }}
        />
        <div className="relative site-container py-12 lg:py-16 text-center flex flex-col items-center">
          <p
            data-name="privacy-meta"
            className="text-sm text-white/50 mb-3"
          >
            Last updated 10 August 2025
          </p>
          <h1
            data-name="privacy-title"
            className="text-3xl lg:text-4xl font-bold mb-3"
          >
            Privacy Policy
          </h1>
          <p
            data-name="privacy-subtitle"
            className="text-base lg:text-lg text-white/70 max-w-[65ch]"
          >
            This Privacy Policy explains how CoinBets collects, uses, and
            protects your information when you use our website.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-[960px] px-5 sm:px-10 py-10 lg:py-14">
        <div
          data-name="privacy-layout"
          className="flex gap-10 items-start"
        >
          {/* Main content */}
          <div
            ref={contentRef}
            data-name="privacy-body"
            className="flex-1 min-w-0"
          >
            <div
              data-name="privacy-sections"
              className="rounded-xl bg-white border border-neutral-200 shadow-sm overflow-hidden"
            >
              {sections.map((section, i) => (
                <div
                  key={section.id}
                  id={section.id}
                  data-name={`privacy-section-${section.id}`}
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
            data-name="privacy-toc"
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

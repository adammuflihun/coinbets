import type { Metadata } from "next";
import { PrivacyContent } from "@/components/privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the CoinBets Privacy Policy. Learn how we collect, use, and protect your information when you use our website.",
};

export default function PrivacyPage() {
  return (
    <main data-section="main" className="flex-1">
      <PrivacyContent />
    </main>
  );
}

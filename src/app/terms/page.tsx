import type { Metadata } from "next";
import { TermsContent } from "@/components/terms-content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Terms of Service for CoinBets. Learn about our policies on user content, intellectual property, liability, and more.",
};

export default function TermsPage() {
  return (
    <main data-section="main" className="flex-1">
      <TermsContent />
    </main>
  );
}

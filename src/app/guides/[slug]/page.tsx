import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { guides } from "@/data/guides";
import { GuideArticleBlock } from "@/components/guide-article-block";
import { CoinbetIndexSeoMetatags } from "@/components/coinbet-index-seo-metatags";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  const title = guide?.title ?? "Guide";

  return {
    title: `${title} | CoinBets`,
    description:
      guide?.description ??
      "Comprehensive crypto gambling guide from CoinBets.",
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    return (
      <main data-section="guide-not-found" className="flex-1">
        <div className="site-container py-20 text-center">
          <h1 className="text-2xl font-bold text-[#060D17] mb-4">
            Guide Not Found
          </h1>
          <p className="text-base text-[#060D17]/60 mb-6">
            The guide you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/guides"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#020202] px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to Guides
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main data-section="guide-detail" className="flex-1">
      <GuideArticleBlock guide={guide} />
      <CoinbetIndexSeoMetatags />
    </main>
  );
}

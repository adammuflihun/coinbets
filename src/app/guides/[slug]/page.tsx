import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Eye } from "lucide-react";
import { guides } from "@/data/guides";
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
      {/* Header */}
      <section className="site-container pt-8 sm:pt-12">
        <Link
          href="/guides"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-700 transition-colors mb-6"
        >
          <ArrowLeft className="size-4" />
          Back to Guides
        </Link>

        <div className="max-w-3xl flex flex-col gap-5">
          <span className="self-start rounded-lg bg-neutral-100 px-2.5 py-1 text-sm font-semibold text-neutral-800">
            {guide.badge}
          </span>

          <h1 className="text-[26px] sm:text-[32px] lg:text-[38px] font-black leading-[1.15] tracking-tight text-[#060D17]">
            {guide.title}
          </h1>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5 text-sm font-medium text-[#060D17]">
              <Calendar className="size-[18px] text-neutral-500" />
              {guide.date}
            </div>
            <div className="flex items-center gap-1.5 text-sm font-medium text-[#060D17]">
              <Eye className="size-[18px] text-neutral-500" />
              {guide.views} Views
            </div>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <section className="site-container pt-6 pb-8">
        <div className="max-w-3xl h-[240px] sm:h-[340px] lg:h-[420px] rounded-2xl bg-[#1f1c1e] overflow-hidden">
          <Image
            src={guide.image}
            alt={guide.title}
            width={900}
            height={420}
            className="size-full object-cover"
          />
        </div>
      </section>

      {/* Content */}
      <section className="site-container pb-12 sm:pb-16">
        <div className="max-w-3xl">
          <p className="text-base sm:text-lg leading-relaxed text-[#060D17]/70">
            {guide.content}
          </p>
        </div>
      </section>

      <CoinbetIndexSeoMetatags />
    </main>
  );
}

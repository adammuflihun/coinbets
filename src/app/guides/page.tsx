import type { Metadata } from "next";
import { FeaturedGuide } from "@/components/featured-guide";
import { BlogCard } from "@/components/blog-card";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Guides | CoinBets",
  description:
    "Comprehensive guides on crypto gambling, sports betting strategies, blockchain basics, and how to get started with Bitcoin casinos.",
  openGraph: {
    title: "Guides | CoinBets",
    description:
      "Comprehensive guides on crypto gambling, sports betting strategies, and how to get started with Bitcoin casinos.",
  },
};

export default function GuidesPage() {
  return (
    <main data-section="guides-page" className="flex-1">
      {/* Header */}
      <section className="site-container pt-10 sm:pt-14 lg:pt-16">
        <div className="flex flex-col gap-3 max-w-2xl mb-8 sm:mb-10">
          <h1 className="text-[28px] sm:text-[34px] lg:text-[40px] font-black leading-[1.15] tracking-tight text-[#060D17]">
            Latest Coinbets Articles
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-[#060D17]/60">
            Learn about crypto betting, exclusive expert reviews, blockchain
            security, responsible gambling practices, and much more.
          </p>
        </div>

        {/* Featured guide */}
        <FeaturedGuide />
      </section>

      {/* All guides grid */}
      <section className="site-container py-10 sm:py-14 lg:py-16">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          data-name="guides-grid"
        >
          {guides.map((guide) => (
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
    </main>
  );
}

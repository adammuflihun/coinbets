import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Eye, CircleCheckBig } from "lucide-react";

const blogPosts = [
  {
    image: "/blog/blog-placeholder.png",
    badge: "Guide",
    title: "Easy Guide to Blockchain Prediction Markets 2026",
    date: "January 07, 2026",
    views: 64,
  },
  {
    image: "/blog/blog-placeholder.png",
    badge: "Guide",
    title: "Easy Guide to Blockchain Prediction Markets 2026",
    date: "January 07, 2026",
    views: 64,
  },
  {
    image: "/blog/blog-placeholder.png",
    badge: "Guide",
    title: "Easy Guide to Blockchain Prediction Markets 2026",
    date: "January 07, 2026",
    views: 64,
  },
  {
    image: "/blog/blog-placeholder.png",
    badge: "Guide",
    title: "Easy Guide to Blockchain Prediction Markets 2026",
    date: "January 07, 2026",
    views: 64,
  },
];

const features = [
  {
    title: "Guides That Actually Help",
    description:
      "Clear, no-fluff advice for crypto gamblers at every level.",
  },
  {
    title: "Expert Reviews That Go Deep",
    description: "Written by real players and pros who know the game.",
  },
  {
    title: "Articles That Unpack the Industry",
    description: "We go deeper. Casinos wish we wouldn't.",
  },
];

function BlogCard({
  image,
  badge,
  title,
  date,
  views,
}: (typeof blogPosts)[number]) {
  return (
    <Link
      href="#"
      className="group flex flex-col gap-3.5 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="h-[201px] w-full rounded-xl bg-[#1f1c1e] overflow-hidden" data-name="blog-thumbnail">
        {image && (
          <Image
            src={image}
            alt={title}
            width={280}
            height={201}
            className="size-full object-cover"
          />
        )}
      </div>

      <span className="self-start rounded-lg bg-neutral-100 px-2 py-1 text-sm font-semibold text-neutral-800">
        {badge}
      </span>

      <p className="text-base font-semibold leading-[1.4] text-[#060D17]">
        {title}
      </p>

      <div className="flex items-center justify-between" data-name="blog-meta">
        <div className="flex items-center gap-1.5 text-sm font-medium text-[#060D17]" data-name="blog-date">
          <Calendar className="size-[18px] text-neutral-500" />
          {date}
        </div>
        <div className="flex items-center gap-1.5 text-sm font-medium text-[#060D17]" data-name="blog-views">
          <Eye className="size-[18px] text-neutral-500" />
          {views} Views
        </div>
      </div>
    </Link>
  );
}

export function LatestBlog() {
  return (
    <section data-section="latest-blog" className="site-container py-8">
      {/* Dark banner */}
      <div className="flex rounded-lg border border-neutral-200 bg-[#020202] p-12 shadow-sm" data-name="blog-banner">
        {/* Left content */}
        <div className="flex flex-col gap-6 flex-1" data-name="blog-banner-text">
          <p className="text-base font-bold text-[#f8f8f8]">
            Top Expert and User Rated
          </p>
          <h2 className="text-[35px] font-black leading-[1.2] tracking-tight text-white">
            Expert Reviews &<br />
            Comprehensive Guides
          </h2>
          <Link
            href="/blog"
            className="group flex w-fit items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-[#020202] hover:bg-neutral-100 transition-colors"
          >
            Read all articles
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Divider */}
        <div className="mx-10 w-px self-stretch bg-white/20" />

        {/* Right features */}
        <div className="flex flex-col gap-6 flex-1 max-w-[364px]" data-name="blog-features">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-2.5 items-start" data-name="feature-item">
              <CircleCheckBig className="size-6 shrink-0 text-green-500 mt-0.5" />
              <div className="flex flex-col gap-3.5" data-name="feature-text">
                <p className="text-base font-bold leading-snug text-[#f8f8f8]">
                  {feature.title}
                </p>
                <p className="text-base leading-normal text-[#f8f8f8]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" data-name="blog-grid">
        {blogPosts.map((post, i) => (
          <BlogCard key={i} {...post} />
        ))}
      </div>
    </section>
  );
}

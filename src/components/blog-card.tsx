import Image from "next/image";
import Link from "next/link";
import { Calendar, Eye } from "lucide-react";

export interface BlogPost {
  image: string;
  badge: string;
  title: string;
  date: string;
  views: number;
  slug?: string;
  href?: string;
}

export function BlogCard({ image, badge, title, date, views, slug, href }: BlogPost) {
  return (
    <Link
      href={href ?? (slug ? `/expert-reviews/${slug}` : "#")}
      className="group flex flex-col gap-3.5 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
    >
      <div
        className="h-[201px] w-full rounded-xl bg-[#1f1c1e] overflow-hidden"
        data-name="blog-thumbnail"
      >
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
        <div
          className="flex items-center gap-1.5 text-sm font-medium text-[#060D17]"
          data-name="blog-date"
        >
          <Calendar className="size-[18px] text-neutral-500" />
          {date}
        </div>
        <div
          className="flex items-center gap-1.5 text-sm font-medium text-[#060D17]"
          data-name="blog-views"
        >
          <Eye className="size-[18px] text-neutral-500" />
          {views} Views
        </div>
      </div>
    </Link>
  );
}

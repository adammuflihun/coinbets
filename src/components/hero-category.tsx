import Image from "next/image";

const categories = [
  {
    icon: "/categories/icon-crypto-casinos.svg",
    title: "Crypto Casinos",
    badge: 27,
    description: "Top-Rated Crypto Casinos Reviewed",
  },
  {
    icon: "/categories/icon-sports-betting.svg",
    title: "Sports Betting",
    badge: 78,
    description: "Best Crypto Sportsbooks Ranked",
  },
  {
    icon: "/categories/icon-crypto-esport.svg",
    title: "Crypto Esport",
    badge: 78,
    description: "Leading Crypto Esports Platforms",
  },
  {
    icon: "/categories/icon-user-reviews.svg",
    title: "User Reviews",
    badge: 78,
    description: "Reviews You Can Trust",
  },
  {
    icon: "/categories/icon-expert-reviews.svg",
    title: "Expert Reviews",
    badge: 27,
    description: "Expert Reviews You Can Count On",
  },
  {
    icon: "/categories/icon-casino-index.svg",
    title: "Casino Index 52",
    badge: 52,
    description: "Crypto Casinos Ranked by Players",
  },
];

function CategoryCard({
  icon,
  title,
  badge,
  description,
}: (typeof categories)[number]) {
  return (
    <div data-name="category-card" className="flex gap-2 items-start rounded-lg border border-neutral-200 bg-white p-2.5 shadow-sm">
      <Image
        src={icon}
        alt=""
        width={32}
        height={32}
        className="size-8 shrink-0"
      />
      <div data-name="category-content" className="flex flex-1 flex-col gap-1.5 min-w-0">
        <div data-name="category-title-row" className="flex items-center justify-between gap-2">
          <p className="text-base font-medium text-neutral-900 truncate">
            {title}
          </p>
          <span className="shrink-0 rounded-lg bg-neutral-100 px-2 py-1 text-sm font-semibold text-neutral-900">
            {badge}
          </span>
        </div>
        <p className="text-sm text-neutral-600 leading-[18px]">{description}</p>
      </div>
    </div>
  );
}

export function HeroCategory() {
  return (
    <section
      data-section="hero-category"
      className="relative z-10 -mt-8 sm:-mt-10 lg:-mt-20 site-container pb-8"
    >
      <h2 className="text-base font-bold text-white mb-3">Categories</h2>

      <div data-name="category-grids">
        {/* Row 1: 4 cards */}
        <div data-name="category-row-1" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {categories.slice(0, 4).map((cat) => (
            <CategoryCard key={cat.title} {...cat} />
          ))}
        </div>

        {/* Row 2: 2 cards, left-aligned */}
        <div data-name="category-row-2" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-3.5">
          {categories.slice(4).map((cat) => (
            <CategoryCard key={cat.title} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

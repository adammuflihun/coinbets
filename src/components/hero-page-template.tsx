import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface HeroPageTemplateProps {
  tagline: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  heroImage?: string;
  contentMaxWidth?: string;
  backgroundImage?: string;
  heroObjectFit?: string;
  containerClassName?: string;
}

export function HeroPageTemplate({
  tagline,
  title,
  description,
  buttonText,
  buttonHref,
  heroImage = "/hero/user-review-header.png",
  contentMaxWidth = "max-w-[52ch]",
  backgroundImage,
  heroObjectFit = "object-contain",
  containerClassName = "relative site-container py-5 lg:py-5",
}: HeroPageTemplateProps) {
  return (
    <section
      data-section="hero"
      className="relative overflow-hidden bg-[#020202] "
    >
      {backgroundImage && (
        <div
          data-section="hero-background"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
      )}
      <div data-name="hero-container" className={containerClassName}>
        <div
          data-name="hero-layout"
          className="relative z-10 grid grid-cols-1 sm:grid-cols-2 items-center gap-0 sm:gap-4 lg:gap-5"
        >
          {/* Left: Content */}
          <div
            data-section="hero-content"
            className={`relative z-10 flex w-full flex-col gap-2 sm:gap-4 py-2 pb-6 sm:py-4 lg:py-8 ${contentMaxWidth}`}
          >
            {/* Headline */}
            <div
              data-section="hero-headline"
              className="flex flex-col gap-1.5 sm:gap-2.5 text-white"
            >
              <p className="text-xs sm:text-sm font-bold leading-relaxed uppercase tracking-wider text-white/80">
                {tagline}
              </p>
              <h1 className="font-heading text-xl sm:text-2xl lg:text-4xl font-black tracking-tight leading-[1.2]">
                {title}
              </h1>
            </div>

            {/* Description */}
            <div
              data-name="hero-description-cta"
              className="flex flex-col gap-2 sm:gap-4"
            >
              <div data-section="hero-description">
                <p className="text-xs sm:text-sm lg:text-base font-normal text-white/70 leading-relaxed sm:line-clamp-none">
                  {description}
                </p>
              </div>

              {/* CTA Button */}
              <div data-name="hero-cta">
                <Link
                  href={buttonHref}
                  className="group inline-flex items-center gap-2 rounded-lg bg-[#e6b830] px-4 py-2 sm:px-6 sm:py-3 text-sm font-bold text-[#020202] transition-all hover:bg-[#f0c840]"
                >
                  {buttonText}
                  <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Image — overlaps into content on mobile */}
          <div
            data-section="hero-illustration"
            className="absolute right-0 bottom-0 sm:relative sm:right-auto sm:bottom-auto w-[180px] sm:w-full h-[180px] sm:h-[220px] lg:h-[280px] self-end opacity-70 sm:opacity-100"
          >
            <Image
              src={heroImage}
              alt=""
              width={540}
              height={500}
              className={`absolute bottom-0 right-0 w-full h-full ${heroObjectFit} object-bottom-right`}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

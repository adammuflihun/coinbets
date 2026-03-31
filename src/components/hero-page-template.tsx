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
  heroHeight?: string;
  heroObjectFit?: string;
  heroImageClassName?: string;
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
  heroHeight = "h-[200px] sm:h-[280px] lg:h-[400px]",
  heroObjectFit = "object-contain",
  heroImageClassName = "absolute inset-0 size-full",
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
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-5"
        >
          {/* Left: Content */}
          <div
            data-section="hero-content"
            className={`flex w-full flex-col gap-4 sm:gap-5 ${contentMaxWidth}`}
          >
            {/* Headline */}
            <div
              data-section="hero-headline"
              className="flex flex-col gap-2.5 text-white"
            >
              <p className="text-sm sm:text-base font-bold leading-relaxed">
                {tagline}
              </p>
              <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-[1.2]">
                {title}
              </h1>
            </div>

            {/* Description */}
            <div
              data-name="hero-description-cta"
              className="flex flex-col gap-5"
            >
              {/* Description */}
              <div data-section="hero-description">
                <p className="text-sm sm:text-base font-normal text-white/70 leading-relaxed">
                  {description}
                </p>
              </div>

              {/* CTA Button */}
              <div data-name="hero-cta" className="pt-2 sm:pt-4">
                <Link
                  href={buttonHref}
                  className="group inline-flex items-center gap-2 rounded-lg bg-[#e6b830] px-6 py-3 text-sm sm:text-base font-bold text-[#020202] transition-all hover:bg-[#f0c840]"
                >
                  {buttonText}
                  <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Casino Illustration */}
          <div
            data-section="hero-illustration"
            className={`relative ${heroHeight}`}
          >
            <Image
              src={heroImage}
              alt="Player review card and casino screenshot"
              width={540}
              height={500}
              className={`${heroImageClassName} ${heroObjectFit}`}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

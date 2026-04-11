"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type Flickity from "flickity";

interface AboutCard {
  icon: string;
  title: string;
  text: string;
}

function CardCarousel({
  cards,
  dataName,
  cardDataName,
  imageSize,
}: {
  cards: AboutCard[];
  dataName: string;
  cardDataName: string;
  imageSize: number;
}) {
  const flickityRef = useRef<HTMLDivElement>(null);
  const flktyInstance = useRef<Flickity | null>(null);

  useEffect(() => {
    if (!flickityRef.current) return;

    let flkty: Flickity | null = null;

    import("flickity").then((mod) => {
      const Flickity = mod.default;
      if (!flickityRef.current) return;
      flkty = new Flickity(flickityRef.current, {
        cellAlign: "center",
        contain: false,
        prevNextButtons: false,
        pageDots: false,
        freeScroll: true,
        wrapAround: true,
      });
      flktyInstance.current = flkty;
    });

    return () => {
      if (flktyInstance.current) {
        flktyInstance.current.destroy();
        flktyInstance.current = null;
      }
    };
  }, []);

  return (
    <div ref={flickityRef} data-name={dataName}>
      {cards.map((card) => (
        <div
          key={card.title}
          data-name={cardDataName}
          className="w-[calc(100vw-8rem)] mr-3"
        >
          <div
            data-name={`${cardDataName}-inner`}
            className="bg-white/5 rounded-xl flex flex-col items-center px-5 pt-5 pb-8 min-h-[320px]"
          >
            <div
              data-name={`${cardDataName}-image`}
              className="relative"
              style={{ width: imageSize, height: imageSize }}
            >
              <Image src={card.icon} alt="" fill className="object-contain" />
            </div>
            <h3
              data-name={`${cardDataName}-title`}
              className="mt-5 text-xl font-bold text-white text-center"
            >
              {card.title}
            </h3>
            <p
              data-name={`${cardDataName}-text`}
              className="mt-2 text-base text-white text-center leading-[1.4] tracking-[0.15px]"
            >
              {card.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function AboutCardCarousel({
  cards,
  dataName,
  cardDataName,
  gridCols,
  imageSize = 140,
}: {
  cards: AboutCard[];
  dataName: string;
  cardDataName: string;
  gridCols: string;
  imageSize?: number;
}) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile === null) {
    return null;
  }

  if (isMobile) {
    return (
      <div data-name={`${dataName}-carousel`} className="-mx-5">
        <CardCarousel
          cards={cards}
          dataName={dataName}
          cardDataName={cardDataName}
          imageSize={imageSize}
        />
      </div>
    );
  }

  return (
    <div data-name={dataName} className={`grid ${gridCols} gap-6`}>
      {cards.map((card) => (
        <div
          key={card.title}
          data-name={cardDataName}
          className="bg-white/5 rounded-xl flex flex-col items-center px-5 pt-8 pb-8"
        >
          <div
            data-name={`${cardDataName}-image`}
            className="relative"
            style={{ width: imageSize, height: imageSize }}
          >
            <Image src={card.icon} alt="" fill className="object-contain" />
          </div>
          <h3
            data-name={`${cardDataName}-title`}
            className="mt-5 text-xl font-bold text-white text-center"
          >
            {card.title}
          </h3>
          <p
            data-name={`${cardDataName}-text`}
            className="mt-2 text-base text-white text-center leading-[1.4] tracking-[0.15px]"
          >
            {card.text}
          </p>
        </div>
      ))}
    </div>
  );
}

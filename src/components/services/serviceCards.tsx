"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility for merging tailwind classes
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardData {
  title: string;
  description: string;
  image: string;
  icon?: React.ReactNode;
}

interface ServiceCardsProps {
  cards: CardData[];
}

const ServiceCards: React.FC<ServiceCardsProps> = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-1">
        {cards.map((card, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={cn(
                "group relative h-[450px] w-full rounded-none border border-[var(--border)] bg-[var(--background)] overflow-hidden transition-all duration-500 cursor-pointer",
                "hover:border-[var(--primary)] hover:z-10 shadow-sm hover:shadow-xl dark:shadow-none",
                isActive && "border-[var(--primary)] z-10 shadow-xl"
              )}
            >
              {/* Full Card Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className={cn(
                    "object-cover transition-all duration-700 opacity-100",
                    "group-hover:scale-110 group-hover:saturate-150 group-hover:brightness-75",
                    isActive && "scale-110 saturate-150 brightness-75"
                  )}
                />
                {/* Subtle Text-Protection Gradient */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-80 transition-opacity duration-500",
                  "group-hover:opacity-100",
                  isActive && "opacity-100"
                )} />
              </div>

              {/* Content Layer */}
              <div className="relative z-20 h-full w-full p-8 flex items-center justify-center text-center">
                {/* Central Section: Title & Description Exchange */}
                <div className="relative w-full">
                  {/* Title (Hides on Hover/Active) */}
                  <div className={cn(
                    "transition-all duration-500",
                    "group-hover:opacity-0 group-hover:scale-90",
                    isActive && "opacity-0 scale-90"
                  )}>
                    <div className="w-10 h-1 bg-[var(--primary)] mx-auto mb-4" />
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight px-4 drop-shadow-lg text-center">
                      {card.title}
                    </h3>
                  </div>

                  {/* Description (Shows on Hover/Active) */}
                  <div className={cn(
                    "absolute inset-0 flex flex-col items-center justify-center translate-y-4 opacity-0 transition-all duration-500 px-4",
                    "group-hover:translate-y-0 group-hover:opacity-100",
                    isActive && "translate-y-0 opacity-100"
                  )}>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6 font-medium drop-shadow-md">
                      {card.description}
                    </p>
                    <div className="flex items-center text-[var(--accent)] text-xs font-bold uppercase tracking-[0.2em] drop-shadow-md">
                      Learn More 
                      <MoveRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Interaction Hint */}
              {!isActive && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:hidden animate-pulse">
                  <div className="w-1 h-1 rounded-full bg-[var(--primary)]" />
                  <span className="text-[8px] font-mono text-white/50 uppercase tracking-[0.3em]">
                    Tap to reveal
                  </span>
                </div>
              )}

              {/* Bottom HUD Bar */}
              <div className={cn(
                "absolute bottom-0 left-0 w-full h-1 bg-[var(--primary)] scale-x-0 transition-transform duration-500 origin-left",
                "group-hover:scale-x-100",
                isActive && "scale-x-100"
              )} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCards;


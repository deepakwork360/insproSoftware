"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import ImageContainer from "@/components/ui/image-container";

export interface Testimonial {
    image: string;
    name: string;
    position: string;
    rating: number;
    description: string;
    signature: string;
}

interface TestimonialCardProps {
    testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
    return (
        <div className="relative w-full max-w-4xl mx-auto py-8 px-4 group">
            {/* Background Decorative HUD elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-primary/20 via-border/10 to-transparent hidden md:block" />

            <div className="relative flex flex-col items-center">
                {/* Client Image - Centered and Premium */}
                <div className="relative mb-8">
                    {/* Ambient Glow */}
                    <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                    <div className="relative w-24 h-24 md:w-32 md:h-32 group-hover:scale-105 transition-transform duration-700">
                        {/* Technical HUD Frame Corners */}
                        <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary/40" />
                        <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary/40" />
                        <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-primary/40" />
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary/40" />

                        {/* Main Image Container */}
                        <div className="w-full h-full p-2 border border-border/20 bg-card/40 backdrop-blur-xl relative overflow-hidden">
                            <Image
                                src={testimonial.image || "/experience/1.png"}
                                alt={testimonial.name}
                                fill
                                className="object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700"
                            />
                            {/* Scanning line effect */}
                            <div className="absolute inset-0 w-full h-[1px] bg-primary/20 -translate-y-full group-hover:animate-[scan_3s_infinite_linear] pointer-events-none" />
                        </div>

                        {/* Technical ID Tag - Refined */}
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
                            <div className="w-4 h-[1px] bg-primary/40" />
                            <div className="bg-background border border-primary/30 px-3 py-1 text-[9px] font-mono text-primary uppercase tracking-[0.3em] whitespace-nowrap backdrop-blur-md">
                                ID_{testimonial.name.split(" ")[0].toUpperCase()}
                            </div>
                            <div className="w-4 h-[1px] bg-primary/40" />
                        </div>
                    </div>
                </div>


                {/* Rating Stars */}
                <div className="flex gap-1.5 mb-8">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={14}
                            className={`${i < testimonial.rating ? "text-primary fill-primary" : "text-border/20"} group-hover:scale-125 transition-transform duration-500`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        />
                    ))}
                </div>

                {/* Testimonial Content */}
                <div className="relative max-w-3xl text-center space-y-6">
                    {/* Large Quote Icons */}
                    <Quote size={40} className="text-primary/5 absolute -top-8 left-0 md:-left-12" />

                    <p className="text-lg md:text-2xl font-playfair font-medium text-foreground leading-[1.4] md:leading-[1.3] relative z-10 px-4">
                        "{testimonial.description}"
                    </p>

                    <div className="space-y-4 pt-6 border-t border-border/10">
                        <div className="space-y-1">
                            <h4 className="text-xl md:text-2xl font-playfair font-medium text-primary tracking-tight">
                                {testimonial.name}
                            </h4>
                            <p className="text-[9px] md:text-xs font-mono text-foreground/40 uppercase tracking-[0.4em]">
                                {testimonial.position}
                            </p>
                        </div>

                        {/* Elegant Signature */}
                        <div className="pt-2 flex flex-col items-center gap-1">
                            <span className="text-3xl md:text-4xl font-playfair italic text-foreground/10 font-light tracking-tighter select-none">
                                {testimonial.signature}
                            </span>
                            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Corner Markers */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/20" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/20" />
        </div>
    );
}

import { useSwipe } from "@/hooks/use-swipe";

export default function TestimonialCarousel({ items }: TestimonialCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);

    const next = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % items.length);
    }, [items.length]);

    const prev = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    }, [items.length]);

    const swipeHandlers = useSwipe({
        onSwipeLeft: () => handleManualNext(),
        onSwipeRight: () => handleManualPrev(),
    });

    const restartAutoPlay = useCallback(() => {
        if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
        inactivityTimerRef.current = setTimeout(() => {
            setIsAutoPlaying(true);
        }, 3000); // Resume after 3 seconds
    }, []);

    const handleManualNext = () => {
        next();
        setIsAutoPlaying(false);
        restartAutoPlay();
    };

    const handleManualPrev = () => {
        prev();
        setIsAutoPlaying(false);
        restartAutoPlay();
    };

    const handleManualSelect = (index: number) => {
        setActiveIndex(index);
        setIsAutoPlaying(false);
        restartAutoPlay();
    };

    useEffect(() => {
        if (isAutoPlaying) {
            timerRef.current = setInterval(next, 5000);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isAutoPlaying, next]);

    return (
        <div className="relative w-full overflow-hidden py-8" {...swipeHandlers}>
            {/* Active Testimonial Stage */}
            <div className="relative min-h-[500px] md:min-h-[550px] flex items-center">
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out transform
                            ${idx === activeIndex
                                ? "opacity-100 translate-x-0 scale-100 pointer-events-auto"
                                : "opacity-0 translate-x-12 scale-95 pointer-events-none"}`}
                    >
                        <TestimonialCard testimonial={item} />
                    </div>
                ))}
            </div>

            {/* Control Deck */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 mt-12 md:mt-0 relative z-20">
                {/* Pagination Controls */}
                <div className="flex items-center gap-2">
                    {items.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => handleManualSelect(i)}
                            className="group py-4 px-1"
                        >
                            <div className={`h-[2px] transition-all duration-500 rounded-full
                                ${i === activeIndex ? "w-12 bg-primary" : "w-6 bg-border/20 group-hover:bg-primary/40"}`} 
                            />
                        </button>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <div className="hidden md:flex gap-4">
                    <button
                        onClick={handleManualPrev}
                        className="w-12 h-12 md:w-14 md:h-14 border border-border/20 hover:border-primary/40 hover:bg-primary/5 transition-all flex items-center justify-center group/btn"
                    >
                        <ChevronLeft size={20} className="group-hover/btn:-translate-x-1 transition-transform" />
                    </button>
                    <button
                        onClick={handleManualNext}
                        className="w-12 h-12 md:w-14 md:h-14 border border-border/20 hover:border-primary/40 hover:bg-primary/5 transition-all flex items-center justify-center group/btn"
                    >
                        <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
}
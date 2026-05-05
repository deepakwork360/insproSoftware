"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import ImageContainer from "@/components/ui/image-container";

import { useSwipe } from "@/hooks/use-swipe";

interface PortfolioItem {
    title: string;
    description: string;
    image: string;
}

interface PortfolioSliderProps {
    items: PortfolioItem[];
}

export default function PortfolioSlider({ items }: PortfolioSliderProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);
    
    const restartAutoPlay = useCallback(() => {
        if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
        
        inactivityTimerRef.current = setTimeout(() => {
            setIsAutoPlaying(true);
            setProgress(0);
        }, 3000); // Wait 3 seconds after manual interaction to resume
    }, []);

    const nextSlide = useCallback((manual = false) => {
        setActiveIndex((prev) => (prev + 1) % items.length);
        setProgress(0);
        if (manual) {
            setIsAutoPlaying(false);
            restartAutoPlay();
        }
    }, [items.length, restartAutoPlay]);

    const prevSlide = useCallback((manual = false) => {
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
        setProgress(0);
        if (manual) {
            setIsAutoPlaying(false);
            restartAutoPlay();
        }
    }, [items.length, restartAutoPlay]);

    const swipeHandlers = useSwipe({
        onSwipeLeft: () => nextSlide(true),
        onSwipeRight: () => prevSlide(true),
    });

    // Timer Logic: Smoothly increment progress
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) return 100;
                return prev + 1;
            });
        }, 50); // 50ms * 100 = 5 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    // Switch Logic: Trigger next slide when progress hits 100
    useEffect(() => {
        if (isAutoPlaying && progress >= 100) {
            nextSlide();
        }
    }, [progress, nextSlide, isAutoPlaying]);

    const current = items[activeIndex];

    return (
        <div 
            className="w-full relative pb-12 lg:pb-24 pt-0"
            {...swipeHandlers}
        >

            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                
                {/* Left Side: Content Area */}
                <div className="w-full lg:w-[40%] space-y-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <span className="text-primary font-mono text-[10px] tracking-[0.3em] font-bold">PROJECT.0{activeIndex + 1}</span>
                            <div className="h-px flex-1 bg-border/40" />
                        </div>
                        <h3 className="text-3xl lg:text-5xl font-playfair font-medium text-foreground leading-tight">
                            {current.title}
                        </h3>
                    </div>
                    
                    <p className="text-base lg:text-lg text-foreground/60 font-poppins leading-relaxed">
                        {current.description}
                    </p>

                    {/* Navigation Controls */}
                    <div className="flex items-center gap-8 pt-4">
                        <div className="flex gap-2">
                            {items.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => { setActiveIndex(i); setProgress(0); setIsAutoPlaying(false); restartAutoPlay(); }}
                                    className={`h-1 transition-all duration-500 ${i === activeIndex ? "w-12 bg-primary" : "w-4 bg-border/40 hover:bg-border"}`}
                                />
                            ))}
                        </div>
                        <div className="flex gap-4">
                            <button onClick={() => prevSlide(true)} className="w-10 h-10 flex items-center justify-center border border-border/40 hover:border-primary hover:text-primary transition-all">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m15 18-6-6 6-6"/></svg>
                            </button>
                            <button onClick={() => nextSlide(true)} className="w-10 h-10 flex items-center justify-center border border-border/40 hover:border-primary hover:text-primary transition-all">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m9 18 6-6-6-6"/></svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side: Visual Mockup Area */}
                <div className="w-full lg:w-[60%] relative">
                    <div className="relative z-10 mx-auto max-w-[800px]">
                        <ImageContainer id={`PORTFOLIO_0${activeIndex + 1}`} className="p-2 lg:p-4 shadow-2xl rounded-none" showBackground={false}>
                            <div className="relative aspect-video lg:aspect-[16/10] overflow-hidden rounded-none bg-black w-full">
                                <Image
                                    key={current.title}
                                    src={current.image}
                                    alt={current.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </ImageContainer>
                        <div className="mt-4 h-1 lg:h-2 w-[90%] mx-auto bg-zinc-800 rounded-full opacity-50 blur-[2px]" />
                    </div>
                </div>


            </div>

            {/* Global Timer Bar */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-border/10 overflow-hidden">
                <div 
                    className={`h-full bg-primary transition-all duration-[50ms] ease-linear ${!isAutoPlaying ? "opacity-0" : "opacity-100"}`} 
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
}

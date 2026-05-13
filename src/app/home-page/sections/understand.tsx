"use client";

import { useState, useEffect, useRef } from "react";

interface CounterProps {
    value: string;
    label: string;
    id: string;
}

function Counter({ value, label, id }: CounterProps) {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    // Extract number and suffix (e.g., "350+" -> { num: 350, suffix: "+" })
    const numberMatch = value.match(/(\d+(?:\.\d+)?)/);
    const targetNumber = numberMatch ? parseFloat(numberMatch[0]) : null;
    const suffix = targetNumber !== null ? value.replace(numberMatch![0], "") : value;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible || targetNumber === null) return;

        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = targetNumber / steps;
        const intervalTime = duration / steps;

        const timer = setInterval(() => {
            countRef.current += increment;
            if (countRef.current >= targetNumber) {
                setCount(targetNumber);
                clearInterval(timer);
            } else {
                setCount(Math.floor(countRef.current));
            }
        }, intervalTime);

        return () => clearInterval(timer);
    }, [isVisible, targetNumber]);

    return (
        <div
            ref={elementRef}
            className="group relative p-8 bg-card border border-primary/20 hover:border-primary/50 transition-all duration-500 overflow-hidden"
        >
            {/* Colorful Gradient Background (Visible normally) */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-primary/[0.05] group-hover:from-primary/15 group-hover:to-primary/[0.08] transition-all duration-500 pointer-events-none" />

            {/* Corner Brackets */}
            <div className="absolute top-0 right-0 w-8 h-px bg-primary/20 group-hover:bg-primary/60 transition-all duration-500" />
            <div className="absolute top-0 right-0 w-px h-8 bg-primary/20 group-hover:bg-primary/60 transition-all duration-500" />
            
            <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-primary/40 group-hover:w-full transition-all duration-700" />

            <div className="relative z-10 space-y-2">
                <h3 className="text-4xl lg:text-5xl font-playfair font-medium text-foreground tracking-tight">
                    {targetNumber !== null ? (
                        <>
                            <span className="text-primary">{count}</span>
                            <span className="text-primary/60">{suffix}</span>
                        </>
                    ) : (
                        <span className="text-primary animate-in fade-in duration-1000">{value}</span>
                    )}
                </h3>
                <p className="text-sm lg:text-base font-playfair text-foreground/70 font-medium group-hover:text-primary transition-colors">
                    {label}
                </p>
            </div>
        </div>
    );
}

export default function Understand({ className = "" }: { className?: string }) {
    const stats = [
        { id: "01", value: "8+ Million", label: "Users Engagement" },
        { id: "02", value: "11+", label: "Years of Experience" },
        { id: "03", value: "350+", label: "Apps Delivered" },
        { id: "04", value: "Free", label: "In-depth Business Analysis" },
        { id: "05", value: "150+", label: "Websites Created" },
        { id: "06", value: "On-Time", label: "Project Delivery" },
        { id: "07", value: "85%", label: "Funding Raised" },
        { id: "08", value: "24/7", label: "Strong Support System" }
    ];

    return (
        <section className={`relative bg-emerald-50/30 dark:bg-background py-10 lg:py-20 px-6 md:px-12 lg:px-24 transition-colors duration-500 overflow-hidden ${className}`}>
            {/* 3D Background UI Elements (Light Mode Only) */}
            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/[0.04] rounded-full blur-[150px] pointer-events-none dark:hidden" />
            
            {/* Floating UI Elements */}
            <div className="absolute top-20 right-20 w-32 h-32 border border-primary/10 rounded-full dark:hidden pointer-events-none animate-bounce" style={{ animationDuration: '6s' }} />
            <div className="absolute bottom-20 left-10 w-48 h-48 border border-accent/10 rounded-full dark:hidden pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto space-y-10 lg:space-y-10">

                {/* Header Section */}
                <div className="space-y-8">
                    <div className="space-y-6">
                        {/* <div className="inline-flex items-center gap-3">
                            <div className="w-8 h-px bg-primary" />
                            <span className="text-primary text-base font-playfair font-medium">Value Proposition</span>
                        </div> */}
                        <h2 className="text-4xl md:text-5xl font-playfair font-medium text-foreground leading-[1.1]">
                            We <span className="italic text-primary">Understand</span> You, Like No one Else
                        </h2>
                    </div>
                    <p className="text-lg md:text-xl text-foreground/70 font-poppins font-light leading-relaxed max-w-5xl">
                        At Insprosoftware, we go beyond service — we focus on understanding your unique business goals and challenges.
                        Our personalized approach ensures tailored IT solutions that align perfectly with your vision.
                    </p>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                    {stats.map((stat) => (
                        <Counter
                            key={stat.id}
                            id={stat.id}
                            value={stat.value}
                            label={stat.label}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
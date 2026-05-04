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
            className="group relative p-8 bg-card border border-border/40 hover:border-primary/40 transition-all duration-500 overflow-hidden"
        >
            {/* HUD Decoration */}
            {/* <div className="absolute top-0 right-0 p-2 opacity-5 font-mono text-[8px] tracking-widest text-foreground uppercase">
                Data.Point_{id}
            </div> */}
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-700" />

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
                <p className="text-xs lg:text-sm font-poppins text-foreground/50 uppercase tracking-widest font-medium">
                    {label}
                </p>
            </div>

            {/* Corner Brackets */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
    );
}

export default function Understand() {
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
        <section className="bg-background px-6 md:px-12 lg:px-24 transition-colors duration-300">
            <div className="max-w-7xl mx-auto space-y-10 lg:space-y-10">

                {/* Header Section */}
                <div className="space-y-8">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-3">
                            <div className="w-8 h-px bg-primary" />
                            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-mono font-bold">Value Proposition</span>
                        </div>
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
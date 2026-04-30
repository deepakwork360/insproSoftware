
import React from 'react';

export interface CompDetailCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function CompDetailCard({ icon, title, description }: CompDetailCardProps) {
    return (
        <div className="group relative p-8 bg-card border border-border/50 hover:border-accent/40 transition-all duration-500 overflow-hidden">
            {/* Corner Accent - Top Right */}
            <div className="absolute top-0 right-0 w-8 h-px bg-accent/0 group-hover:bg-accent/40 transition-all duration-500" />
            <div className="absolute top-0 right-0 w-px h-8 bg-accent/0 group-hover:bg-accent/40 transition-all duration-500" />
            
            {/* Subtle Gradient Glow */}
            <div className="absolute -inset-px bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-6">
                {/* SVG Icon Container */}
                <div className="w-12 h-12 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-500">
                    {icon}
                </div>

                <div className="space-y-3">
                    {/* Title */}
                    <h3 className="text-xl font-playfair font-medium text-foreground tracking-wide group-hover:text-accent transition-colors duration-500">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-foreground/60 leading-relaxed font-poppins group-hover:text-foreground/80 transition-colors duration-500">
                        {description}
                    </p>
                </div>
            </div>
            
            {/* Bottom Progress Line */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-700 ease-in-out" />
        </div>
    );
}
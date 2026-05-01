"use client";

import React from 'react';
import Image from 'next/image';


export interface TeamProfileCardProps {
    name: string;
    role: string;
    location: string;
    imageUrl: string;
    socials?: {
        instagram?: string;
        twitter?: string;
        linkedin?: string;
    };
}

export default function TeamProfileCard({ name, role, location, imageUrl, socials }: TeamProfileCardProps) {
    return (
        <div className="group relative w-full aspect-[4/5] bg-card overflow-hidden">
            {/* Background Image */}
            <Image 
                src={imageUrl} 
                alt={name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay for Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 p-6 z-10 w-full flex justify-between items-end">
                <div className="space-y-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight leading-none">
                        {name}
                    </h3>
                    <p className="text-[10px] md:text-xs font-mono text-primary uppercase tracking-wider font-bold">
                        {role}
                    </p>
                    <p className="text-[10px] text-white/50 uppercase tracking-[0.2em]">
                        {location}
                    </p>
                </div>

                {/* HUD Social Pill */}
                <div className="flex flex-col items-center gap-4 py-4 px-2 backdrop-blur-md bg-white/5 border border-white/10 rounded-full scale-90 group-hover:scale-100 transition-transform duration-500">
                    <a href={socials?.instagram || "#"} className="text-white/60 hover:text-white transition-colors" title="Instagram">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href={socials?.twitter || "#"} className="text-white/60 hover:text-white transition-colors" title="X (Twitter)">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                    </a>
                    <a href={socials?.linkedin || "#"} className="text-white/60 hover:text-white transition-colors" title="LinkedIn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                </div>

            </div>

            {/* Corner HUD Detail (Optional, for that Inspro style) */}
            <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/20 pointer-events-none" />
        </div>
    );
}

"use client";

import React from 'react';
import Image from 'next/image';


export interface TeamProfileCardProps {
    name: string;
    role: string;
    location: string;
    imageUrl: string;
}

export default function TeamProfileCard({ name, role, location, imageUrl }: TeamProfileCardProps) {
    return (
        <div className="group relative w-full aspect-[4/5] bg-card overflow-hidden">
            {/* Background Image */}
            <Image 
                src={imageUrl} 
                alt={name} 
                fill 
                loader={({ src }) => src}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay for Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 p-6 z-10 w-full flex flex-col items-center text-center">
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

            </div>

            {/* Corner HUD Detail (Optional, for that Inspro style) */}
            <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/20 pointer-events-none" />
        </div>
    );
}

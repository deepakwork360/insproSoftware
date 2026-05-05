"use client";

import Image from "next/image";

interface PageBannerProps {
    title?: string;
    description?: string;
    imageUrl?: string;
    subtitle?: string;
    imagePosition?: string;
}

export default function PageBanner({ 
    title = "", 
    description = "", 
    imageUrl = "", 
    subtitle,
    imagePosition = "center"
}: PageBannerProps) {
    // Handle simple percentage positioning: positive = from top, negative = from bottom
    const finalPosition = imagePosition.includes('%') && !imagePosition.includes(' ')
        ? (() => {
            const val = parseFloat(imagePosition);
            return `center ${val < 0 ? 100 + val : val}%`;
        })()
        : imagePosition;

    return (
        <section className="relative w-full aspect-video md:aspect-auto md:h-[70vh] lg:h-[80vh] overflow-hidden">
            {/* Background Image with HUD Overlay */}
            <div className="absolute inset-0 z-0">
                {imageUrl && (
                    <Image 
                        src={imageUrl} 
                        alt={title} 
                        fill 
                        className="object-cover"
                        style={{ objectPosition: finalPosition }}
                        priority
                    />
                )}
                {/* Dark Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
                
            </div>

            {/* HUD Elements */}
            <div className="banner-hud-container">
                <div className="hud-line" />
                
                <div className="hud-content">
                    {subtitle && (
                        <div className="hud-badge !mb-4 animate-in fade-in slide-in-from-left duration-700">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            {subtitle}
                        </div>
                    )}

                    {title && (
                        <h1 className="banner-head-hud !text-white !text-2xl md:!text-5xl lg:!text-6xl !mb-4 max-w-4xl animate-in fade-in slide-in-from-left duration-1000 delay-100">
                            {title}
                        </h1>
                    )}

                    {description && (
                        <p className="banner-para-hud hidden md:block !text-white/70 !max-w-5xl !text-sm md:!text-base animate-in fade-in slide-in-from-left duration-1000 delay-200">
                            {description}
                        </p>
                    )}
                    
                    {/* Visual Metadata HUD Decor */}
                    {/* <div className="mt-8 flex items-center gap-6 text-[9px] font-mono text-white/30 uppercase tracking-[0.3em] animate-in fade-in duration-1000 delay-500">
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full" />
                            <span className="text-white/30">Path: Root/{title.replace(/\s+/g, '_')}</span>
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-white/30">Index: 0{Math.floor(Math.random() * 9) + 1}</span>
                        </div>
                    </div> */}
                </div>
            </div>

            {/* Bottom Border HUD Detail */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary/50 via-primary/5 to-transparent z-30" />
        </section>
    );
}

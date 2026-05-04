"use client";

import React from "react";

interface ImageContainerProps {
    children: React.ReactNode;
    id?: string | number;
    className?: string;
    showBackground?: boolean;
    showLabel?: boolean;
    padding?: string;
}

export default function ImageContainer({ 
    children, 
    id, 
    className = "", 
    showBackground = true, 
    showLabel = false,
    padding = "p-4 md:p-6"
}: ImageContainerProps) {
    return (
        <div className={`group relative ${padding} border border-border/80 dark:border-border/40 hover:border-primary/40 transition-all duration-500 overflow-hidden ${showBackground ? "bg-card/20 backdrop-blur-sm" : "bg-transparent"} ${className}`}>
            {/* HUD Decoration */}
            {showLabel && (
                <div className="absolute top-0 right-0 p-2 opacity-5 font-mono text-[8px] tracking-widest text-foreground uppercase pointer-events-none">
                    {id ? `IMG.REF_${id}` : "IMG.REF_AUTO"}
                </div>
            )}
            
            {/* Bottom Line Hover Effect */}
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-700 z-20" />

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full">
                {children}
            </div>

            {/* Corner Brackets */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-20" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-20" />
        </div>
    );
}

"use client";

import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label: string;
    isTextArea?: boolean;
    error?: string;
}

export default function InputField({ label, isTextArea, error, className, ...props }: InputFieldProps) {
    const Component = isTextArea ? "textarea" : "input";
    
    return (
        <div className="space-y-2 group">
            <div className="flex justify-between items-center">
                <label className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] font-bold">
                    {label}
                </label>
                {error && <span className="text-[8px] font-mono text-red-500 uppercase tracking-widest animate-pulse">Error.Detected</span>}
            </div>
            
            <div className="relative overflow-hidden">
                <Component
                    className={`
                        w-full bg-background/20 backdrop-blur-md border border-border/60 dark:border-border/20 
                        p-4 text-foreground font-poppins text-sm
                        placeholder:text-foreground/40 focus:outline-none focus:border-primary/50
                        transition-all duration-300
                        ${isTextArea ? "min-h-[120px] resize-none" : ""}
                        ${error ? "border-red-500/50" : ""}
                        ${className}
                    `}
                    {...props as any}
                />
                
                {/* HUD Animated Border Bottom */}
                <div className="absolute bottom-0 left-0 h-[1px] bg-primary scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-left" />
                
                {/* Subtle corner marker */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/20 group-focus-within:border-primary transition-colors" />
            </div>
        </div>
    );
}

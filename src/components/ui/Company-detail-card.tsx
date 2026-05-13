
import React from 'react';

export interface CompDetailCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    variant?: "default" | "dark" | "primary";
}

export default function CompDetailCard({ icon, title, description, variant = "default" }: CompDetailCardProps) {
    const isDark = variant === "dark";
    const isPrimary = variant === "primary";

    // Reverting to colorful default for mobile (bg-card + primary border)
    // and applying variants only from md: breakpoint up
    const baseClasses = isDark
        ? "bg-card border-primary/30 text-foreground md:bg-zinc-950 md:border-white/10 md:text-white dark:md:bg-white/[0.03] dark:md:border-white/[0.05]"
        : isPrimary
            ? "bg-card border-primary/30 text-foreground md:bg-primary md:border-primary/20 md:text-white"
            : "bg-card border-primary/30 text-foreground";

    const titleClasses = isDark || isPrimary ? "text-foreground md:text-white" : "text-foreground";
    const descClasses = isDark || isPrimary ? "text-foreground/60 md:text-white/70" : "text-foreground/60";
    const iconContainerClasses = isDark || isPrimary
        ? "text-primary bg-primary/15 ring-primary/20 md:text-white md:bg-white/10 md:ring-white/20"
        : "text-primary bg-primary/15 ring-primary/20";

    return (
        <div className={`group relative p-6 md:p-8 transition-all duration-500 overflow-hidden border hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 ${baseClasses}`}>
            {/* Corner Accent - Top Right */}
            <div className={`absolute top-0 right-0 w-8 h-px transition-all duration-500 ${isDark || isPrimary ? "bg-primary/20 md:bg-white/20 group-hover:bg-primary/60 md:group-hover:bg-white/60" : "bg-primary/20 group-hover:bg-primary/60"}`} />
            <div className={`absolute top-0 right-0 w-px h-8 transition-all duration-500 ${isDark || isPrimary ? "bg-primary/20 md:bg-white/20 group-hover:bg-primary/60 md:group-hover:bg-white/60" : "bg-primary/20 group-hover:bg-primary/60"}`} />

            {/* Colorful Gradient Background */}
            <div className={`absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${isDark ? "bg-gradient-to-br from-primary/[0.08] via-transparent to-primary/[0.05] md:from-primary/10 md:via-transparent md:to-primary/5" :
                    isPrimary ? "bg-gradient-to-br from-primary/[0.08] via-transparent to-primary/[0.05] md:from-white/10 md:via-transparent md:to-white/10" :
                        "bg-gradient-to-br from-primary/[0.08] via-transparent to-primary/[0.05] group-hover:from-primary/15 group-hover:to-primary/[0.08]"
                }`} />

            {/* Vibrant Hover Glow */}
            <div className={`absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${isDark || isPrimary ? "bg-gradient-to-br from-primary/10 via-transparent to-transparent md:from-white/10" : "bg-gradient-to-br from-primary/10 via-transparent to-transparent"
                }`} />

            <div className="relative z-10 flex flex-col gap-4 md:gap-6">
                {/* SVG Icon Container */}
                <div className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg group-hover:scale-110 transition-all duration-500 ring-1 ${iconContainerClasses} ${isDark || isPrimary ? "group-hover:bg-primary/25 md:group-hover:bg-white/20" : "group-hover:bg-primary/25"}`}>
                    <div className="scale-75 md:scale-100">
                        {icon}
                    </div>
                </div>

                <div className="space-y-1.5 md:space-y-3">
                    {/* Title */}
                    <h3 className={`text-base md:text-xl font-playfair font-medium tracking-wide transition-colors duration-500 line-clamp-1 md:line-clamp-none ${titleClasses} ${isDark || isPrimary ? "md:group-hover:text-white" : "group-hover:text-primary"}`}>
                        {title}
                    </h3>

                    {/* Description */}
                    <p className={`text-xs md:text-sm leading-relaxed font-poppins transition-colors duration-500 line-clamp-2 md:line-clamp-none ${descClasses} ${isDark || isPrimary ? "md:group-hover:text-white/90" : "group-hover:text-foreground/80"}`}>
                        {description}
                    </p>
                </div>
            </div>

            {/* Bottom Progress Line */}
            <div className={`absolute bottom-0 left-0 h-[3px] w-8 transition-all duration-700 ease-in-out group-hover:w-full ${isDark || isPrimary ? "bg-gradient-to-r from-primary/50 via-primary to-primary/50 md:bg-white" : "bg-gradient-to-r from-primary/50 via-primary to-primary/50"
                }`} />
        </div>
    );
}
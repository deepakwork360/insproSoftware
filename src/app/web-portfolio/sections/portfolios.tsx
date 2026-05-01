"use client";

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

export interface PortfolioItem {
    id: number;
    title: string;
    category: string;
    imageUrl: string;
    link: string;
}

export const webPortfolioData: PortfolioItem[] = [
    {
        id: 1,
        title: "Brosa",
        category: "E-commerce",
        imageUrl: "/portfolio/port-1.png",
        link: "https://www.brosa.com.au"
    },
    {
        id: 2,
        title: "Mdina Glass",
        category: "E-commerce",
        imageUrl: "/portfolio/mdina.png",
        link: "https://mdinaglass.com"
    },
    {
        id: 3,
        title: "QuickFinder",
        category: "Marketplace",
        imageUrl: "/portfolio/quickfinder.png",
        link: "https://quickfinder.dk"
    },
    {
        id: 4,
        title: "Bring me beauty",
        category: "E-commerce",
        imageUrl: "/portfolio/port-15.webp",
        link: "https://www.bringmebeauty.com/"
    },
    {
        id: 5,
        title: "BCUK",
        category: "Education",
        imageUrl: "/portfolio/port-3.webp",
        link: "https://bcuks.org"
    },
    {
        id: 6,
        title: "Dave Dee Wedding Discos",
        category: "Entertainment",
        imageUrl: "/portfolio/port-4.webp",
        link: "https://www.davedeeweddingdiscos.co.uk/"
    },
    {
        id: 7,
        title: "World innovators",
        category: "Web Development",
        imageUrl: "/portfolio/port-5.webp",
        link: "https://www.worldinnovators.com/"
    },
    {
        id: 8,
        title: "Eurolingua",
        category: "Education",
        imageUrl: "/portfolio/port-6.webp",
        link: "https://www.eurolingua.com/en/"
    },
    {
        id: 9,
        title: "Friday night churches",
        category: "Community",
        imageUrl: "/portfolio/port-7.webp",
        link: "https://fridaynightchurches.com/"
    },
    {
        id: 10,
        title: "Kensington Hill Media",
        category: "Media",
        imageUrl: "/portfolio/port-10.webp",
        link: "https://kensingtonhillmedia.com/"
    },
    {
        id: 11,
        title: "Blavals",
        category: "E-commerce",
        imageUrl: "/portfolio/port-11.webp",
        link: "https://www.blavals.com/"
    },
    {
        id: 12,
        title: "Khimar Online",
        category: "E-commerce",
        imageUrl: "/portfolio/port-12.webp",
        link: "https://www.khimaronline.co.uk/"
    },
    {
        id: 13,
        title: "Moon Creations",
        category: "E-commerce",
        imageUrl: "/portfolio/port-13.webp",
        link: "https://www.mooncreationsusa.com/"
    },
    {
        id: 14,
        title: "Kate Family Photo",
        category: "Portfolio",
        imageUrl: "/portfolio/port-14.webp",
        link: "https://katfamphoto.com/"
    },
    {
        id: 15,
        title: "Future Safe",
        category: "Web Development",
        imageUrl: "/portfolio/port-2.webp",
        link: "https://futuresafe.com/"
    }
];

function PortfolioCard({ item, aspectRatio = "aspect-[16/10]", className = "" }: { item: PortfolioItem, aspectRatio?: string, className?: string }) {
    const [isCentered, setIsCentered] = React.useState(false);
    const cardRef = React.useRef<HTMLAnchorElement>(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // On mobile, trigger when the card is mostly in view
                if (window.innerWidth < 768) {
                    setIsCentered(entry.isIntersecting && entry.intersectionRatio > 0.6);
                }
            },
            {
                threshold: [0, 0.6, 1],
                rootMargin: "-10% 0px -10% 0px"
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const activeState = isCentered ? "opacity-100 scale-100 translate-y-0" : "";
    const activeImgState = isCentered ? "scale-110" : "";
    const activeOverlayState = isCentered ? "opacity-90" : "";

    return (
        <Link 
            href={item.link}
            ref={cardRef}
            className={`group relative block w-full ${aspectRatio} bg-card overflow-hidden border border-border/40 ${className}`}
        >

            {/* Project Image */}
            <Image 
                src={item.imageUrl} 
                alt={item.title} 
                fill 
                className={`object-cover transition-transform duration-1000 ease-out group-hover:scale-110 ${activeImgState}`}
            />

            {/* Dark Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500 ${activeOverlayState}`} />

            {/* Center Reveal Button */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className={`w-16 h-16 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out ${activeState}`}>
                    <ArrowUpRight size={24} className="text-white" />
                </div>
            </div>

            {/* Content Overlay */}
            <div className={`absolute bottom-0 left-0 p-8 w-full z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ${isCentered ? 'translate-y-0' : ''}`}>
                <div className="space-y-1">
                    <p className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] font-bold">
                        {item.category}
                    </p>
                    <h3 className="text-xl md:text-2xl font-playfair font-medium text-white tracking-wide">
                        {item.title}
                    </h3>
                </div>
            </div>
            
            {/* HUD Corner Accents - Expand on Hover or when Centered */}
            <div className={`absolute top-4 left-4 w-6 h-6 border-t border-l border-primary/40 group-hover:w-10 group-hover:h-10 transition-all duration-500 ${isCentered ? 'w-10 h-10' : ''}`} />
            <div className={`absolute bottom-4 right-4 w-6 h-6 border-b border-r border-primary/40 group-hover:w-10 group-hover:h-10 transition-all duration-500 ${isCentered ? 'w-10 h-10' : ''}`} />
        </Link>
    );
}

interface PortfoliosProps {
    items?: PortfolioItem[];
    title?: string;
    subtitle?: string;
    showTitle?: boolean;
    aspectRatio?: string;
}

export default function Portfolios({ 
    items = webPortfolioData, 
    title = "Digital Future", 
    subtitle = "Work.Archive",
    showTitle = false,
    aspectRatio = "aspect-[16/10]"
}: PortfoliosProps) {
    return (
        <section className="py-10 px-6 md:px-12 lg:px-24 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                {showTitle && (
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
                        <div className="max-w-2xl space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-none text-primary text-[10px] uppercase tracking-[0.3em] font-mono font-bold">
                                {subtitle}
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium text-foreground leading-tight">
                                Crafting <span className="italic text-primary">{title}</span>
                            </h2>
                        </div>
                        
                        <div className="text-right">
                            <div className="text-[10px] font-mono text-foreground/30 uppercase tracking-[0.2em] mb-2">Total Deployments</div>
                            <div className="text-4xl font-playfair text-primary">{items.length}+</div>
                        </div>
                    </div>
                )}

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                    {items.map((item, index) => {
                        const colorClasses = ["card-hud-cyan", "card-hud-orchid", "card-hud-amber"];
                        const colorClass = colorClasses[index % colorClasses.length];
                        return (
                            <PortfolioCard 
                                key={item.id} 
                                item={item} 
                                aspectRatio={aspectRatio} 
                                className={colorClass}
                            />
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
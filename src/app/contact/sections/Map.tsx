"use client";

import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

export default function Map() {
    const address = "B-127, Block B, Sector 2, Noida, Uttar Pradesh 201301";
    const encodedAddress = encodeURIComponent(address);
    const mapSrc = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

    return (
        <section className="relative py-20 px-6 md:px-12 lg:px-24 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
                    <div className="space-y-2 md:space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-none text-primary text-[10px] uppercase tracking-[0.3em] font-mono font-bold">
                            Deployment.Location
                        </div>
                        <h2 className="text-3xl md:text-5xl font-playfair font-medium text-foreground leading-tight">
                            Find Us <span className="italic text-primary">On Ground</span>
                        </h2>
                    </div>
                    
                    <a 
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 text-[10px] md:text-sm font-mono uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors duration-300"
                    >
                        Open in Google Maps
                        <ExternalLink size={12} className="md:w-[14px] md:h-[14px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>

                {/* Map & Card Stack */}
                <div className="flex flex-col gap-0 md:block relative">
                    {/* Map Container */}
                    <div className="relative group w-full h-[350px] md:h-auto md:aspect-[21/9] bg-card border border-border/50 overflow-hidden">
                        {/* HUD Corners */}
                        <div className="absolute top-0 left-0 w-8 md:w-12 h-8 md:h-12 border-t-2 border-l-2 border-primary/40 z-10 pointer-events-none" />
                        <div className="absolute top-0 right-0 w-8 md:w-12 h-8 md:h-12 border-t-2 border-r-2 border-primary/40 z-10 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-8 md:w-12 h-8 md:h-12 border-b-2 border-l-2 border-primary/40 z-10 pointer-events-none" />
                        <div className="absolute bottom-0 right-0 w-8 md:w-12 h-8 md:h-12 border-b-2 border-r-2 border-primary/40 z-10 pointer-events-none" />

                        {/* Scanning Line Animation */}
                        <div className="absolute top-0 left-0 w-full h-px bg-primary/20 shadow-[0_0_15px_rgba(64,138,113,0.5)] z-10 animate-[scan_4s_linear_infinite] pointer-events-none" />

                        {/* Map Iframe with Filters - Removed Grayscale on Mobile */}
                        <iframe 
                            title="Location Map"
                            src={mapSrc}
                            className="w-full h-full grayscale-0 md:grayscale-[0.8] contrast-[1.1] md:contrast-[1.2] invert-0 group-hover:grayscale-0 transition-all duration-700 ease-in-out border-none"
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>

                    {/* Info Overlay - Stacked on Mobile, Absolute on Desktop */}
                    <div className="relative md:absolute md:bottom-8 md:left-8 md:w-96 z-20">
                        <div className="bg-card md:backdrop-blur-md md:bg-background/90 border border-primary/20 p-6 md:p-6 shadow-2xl relative overflow-hidden group/card border-t-0 md:border-t">
                            {/* HUD Accent Line */}
                            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                            
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-none bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-sm font-mono font-bold text-primary uppercase tracking-tighter">Office Headquarters</h3>
                                    <p className="text-sm text-foreground/80 font-poppins leading-relaxed">
                                        {address}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="text-[10px] font-mono text-foreground/40 uppercase">
                                        Coord: 28.5847, 77.3159
                                    </div>
                                    <div className="hidden xs:flex gap-1">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-1 h-1 bg-primary/30" />
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-[10px] font-mono text-primary animate-pulse">
                                    <Navigation size={10} />
                                    LIVE_SIGNAL
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/* Background HUD Accents */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
            
            <style jsx>{`
                @keyframes scan {
                    0% { top: 0; }
                    100% { top: 100%; }
                }
            `}</style>
        </section>
    );
}
"use client"

import Image from "next/image";
import ImageContainer from "@/components/ui/image-container";

export default function LeadingSection() {
    return (
        <section className="bg-background lg:py-4 px-6 md:px-12 lg:px-24 transition-colors duration-300 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                {/* Left Side: Image with Accent Frame */}
                <div className="w-full lg:w-1/2 relative group">
                    <ImageContainer id="ABOUT_01" className="p-2" showBackground={false}>
                        <Image
                            src="/home/about-img.webp"
                            alt="Leading Software Company in USA"
                            width={700}
                            height={800}
                            className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                        />
                    </ImageContainer>
                </div>


                {/* Right Side: Content */}
                <div className="w-full lg:w-1/2 space-y-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-3">
                            <div className="w-8 h-px bg-primary" />
                            <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-mono font-bold">
                                Leading Software Development
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium text-foreground leading-[1.1]">
                            Empowering Business Growth with <span className="italic text-primary">Intelligence</span>
                        </h2>
                        <p className="text-lg text-foreground/60 font-poppins leading-relaxed">
                            At Insprosoftware, we are a premier software development company in USA, specializing in high-performance digital solutions.
                            From responsive web design to enterprise mobile apps, we tailor our technology to drive your business forward.
                        </p>
                    </div>

                    {/* Features List */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {["Web Development", "Mobile App Dev", "Digital Marketing", "UI/UX Design"].map((item) => (
                            <li key={item} className="flex items-center gap-3 text-sm text-foreground/80 font-medium">
                                <div className="w-1.5 h-1.5 bg-primary rounded-none" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* Helpline Card - HUD Inspired */}
                    <div className="relative p-6 bg-accent/5 border border-accent/20 rounded-none group/card overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 opacity-10 group-hover/card:opacity-30 transition-opacity">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </div>
                        <div className="relative z-10 flex items-center gap-6">
                            <div className="hidden sm:flex w-12 h-12 bg-primary items-center justify-center text-white">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">Get Instant Professional Advice</p>
                                <h3 className="text-xl md:text-2xl font-mono font-medium text-foreground">
                                    Ready to Help: <span className="text-primary">+91 9990760789</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
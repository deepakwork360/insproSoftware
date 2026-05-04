"use client";

import { useState } from "react";
import Image from "next/image";
import ImageContainer from "@/components/ui/image-container";

const servicesData = [
    {
        id: "mobile-app",
        title: "Professional Mobile App Development",
        description: "Insprosoftware offers mobile app development services tailored to your business needs. Our expert team specializes in iOS, Android, and cross-platform app development.",
        points: [
            "Native iOS and Android apps",
            "Cross-platform solutions",
            "Enterprise mobile applications",
            "Healthcare & E-commerce apps"
        ],
        image: "/home/mobile-app-dev.png"
    },
    {
        id: "web-dev",
        title: "Professional Web Development",
        description: "Insprosoftware delivers innovative web development services designed to elevate your online presence. Our expert team builds responsive, scalable websites using the latest technologies.",
        points: [
            "Responsive website design",
            "E-commerce solutions",
            "Custom web applications",
            "Small business websites"
        ],
        image: "/home/web-devv.png"
    },
    {
        id: "marketing",
        title: "Strategic Digital Marketing",
        description: "Insprosoftware delivers innovative web development services designed to elevate your online presence. Our expert team builds responsive, scalable websites using the latest technologies.",
        points: [
            "Local SEO services",
            "E-commerce marketing",
            "Social media management",
            "Performance analytics"
        ],
        image: "/home/digital-marketing.png" // Replace with your actual marketing image path
    },
    {
        id: "uiux",
        title: "Professional UI/UX Design",
        description: "Create memorable user experiences with our design-first approach. We focus on usability, accessibility, and visual excellence to make your product stand out.",
        points: [
            "User Research & Personas",
            "Wireframing & Prototyping",
            "Visual Design Systems",
            "Interaction Design"
        ],
        image: "/home/ui-ux.png" // Replace with your actual design image path
    }, {
        id: "graphic-design",
        title: "Graphic Design",
        description: "Insprosoftware delivers innovative web development services designed to elevate your online presence. Our expert team builds responsive, scalable websites using the latest technologies.",
        points: [
            "Logo Design",
            "Web Design",
            "Print Design",
            "Social Media Graphics"
        ],
        image: "/home/graphic.png" // Replace with your actual design image path
    }
];

export default function DigitalServices() {
    const [activeTab, setActiveTab] = useState(0);
    const current = servicesData[activeTab];

    return (
        <section className="bg-background py-10 md:py-18 px-6 md:px-12 lg:px-24 transition-colors duration-300">
            <div className="max-w-7xl mx-auto space-y-10 lg:space-y-15">

                {/* Header */}
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-none text-primary text-[10px] uppercase tracking-widest font-mono font-bold">
                        Services
                    </div>
                    <h2 className="text-4xl md:text-5xl font-playfair font-medium text-foreground leading-tight">
                        Professional Development & <span className="italic text-primary">Digital Services</span>
                    </h2>
                    <p className="text-lg md:text-xl text-foreground/60 font-poppins leading-relaxed max-w-5xl">
                        Comprehensive software development and digital marketing services tailored for businesses in USA.
                        We deliver cutting-edge technology that drives real results.
                    </p>
                </div>

                {/* Main Interactive Grid */}
                <div className="flex flex-col lg:flex-row border border-border/40 bg-card overflow-hidden min-h-[450px] lg:min-h-[500px]">
                    
                    {/* Sidebar: Service Titles */}
                    <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-border/40 flex flex-col">
                        {servicesData.map((service, index) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveTab(index)}
                                className={`flex-1 text-left p-6 lg:p-8 transition-all duration-300 relative group flex items-center justify-between border-b last:border-0
                                    ${activeTab === index
                                        ? "bg-primary text-white border-primary"
                                        : "hover:bg-primary/5 text-foreground/70 border-border/20"}`}
                            >
                                <span className="text-sm lg:text-lg font-medium font-poppins tracking-wide">
                                    {service.title}
                                </span>

                                {/* Arrow Effect */}
                                {activeTab === index && (
                                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-primary rotate-45 z-20 hidden lg:block" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Content Area: Details & Image */}
                    <div className="flex-1 flex flex-col md:flex-row">
                        {/* Middle: Description & Points */}
                        <div className="flex-1 p-8 lg:p-12 space-y-8 bg-card/50">
                            <h3 className="text-2xl lg:text-3xl font-playfair font-medium text-foreground">
                                {current.title}
                            </h3>
                            <div className="w-16 h-px bg-primary" />
                            <p className="text-foreground/70 leading-relaxed min-h-[100px]">
                                {current.description}
                            </p>

                            <ul className="space-y-4">
                                {current.points.map((point, idx) => (
                                    <li key={idx} className="flex items-center gap-4 text-foreground/80 group">
                                        <div className="w-6 h-6 flex items-center justify-center bg-primary/10 text-primary border border-primary/20 rounded-none group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                        <span className="text-sm font-medium">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: Visual Image */}
                        <div className="w-full md:w-2/5 min-h-[350px] relative overflow-hidden">
                            <ImageContainer className="w-full h-full p-0 border-0" id={activeTab + 1} showBackground={false}>
                                <Image
                                    src={current.image}
                                    alt={current.title}
                                    fill
                                    priority
                                    className="object-cover opacity-80 group-hover:opacity-100"
                                />
                                {/* Visual Overlay to maintain HUD feel */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10" />
                            </ImageContainer>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
"use client";

import PortfolioSlider from "@/components/ui/portfolio-slider";

const portfolioData = [
    {
        title: "QuickFinder",
        description: "At Quickfinder.dk we update all companies in Denmark twice a day via CVR.DK (Danish Business Authority). All information such as name, address, zip code/city, telephone number, email and web address must therefore be changed on VIRK.DK. after which it will automatically be changed on Quickfinder.dk.",
        image: "/home/quickfinder.png"
    }, 
    {
        title: "Mdina Glasses",
        description: "Mdina Glass was set up in 1968 as Malta's first glass making company using a blend of traditional glassblowing techniques. For decades, Mdina Glass was known for primarily producing small vases, bowls and paperweights that appealed to tourists and trade export clients.",
        image: "/home/mdina.png"
    }, 
    {
        title: "Brosa Shop",
        description: "Brosa was born out of a desire to change the furniture industry for the better. Powered by a desire to upset the status quo, we started to deliver practical, trending furniture without an inflated price tag. Premium design without the premium markup.",
        image: "/home/brosa.png"
    }, 
    {
        title: "Dave Dee",
        description: "Dave Dee Discos are a team of award winning professional wedding DJ’s. Our enthusiasm, dedication and pure love for what we do is constantly evident. With years of experience in the industry, we understand that no two weddings are ever the same.",
        image: "/home/davedee.png"
    }, 
    {
        title: "Bethel Christian University",
        description: "Bethel Christian University is a Non-Profit 501 (c) (3) networking with Kingsway Fellowship International and Nations University to provide high-quality Christian education and networking opportunities globally.",
        image: "/home/bethel.png"
    },
    {
        title: "Hello Peter",
        description: "Founded as a complaints platform for consumers to share service experiences, Hellopeter has transitioned into a holistic review management and marketing platform designed to hold businesses accountable and improve service levels.",
        image: "/home/petter.png"
    },
    {
        title: "Chair Consoles",
        description: "Our 24/7 consoles and technical furniture are designed to your exact requirements. Height-adjustable consoles with professional chairs that provide every conceivable comfort for critical operations.",
        image: "/home/chair.png"
    },
];

export default function Portfolio() {
    return (
        <section className="bg-background py-10 px-6 md:px-12 lg:px-24 transition-colors duration-300">
            <div className="max-w-7xl mx-auto space-y-16 lg:space-y-0">
                
                {/* Header Section */}
                <div className="max-w-4xl space-y-8">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-3">
                            <div className="w-8 h-px bg-primary" />
                            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-mono font-bold">Showcase</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-playfair font-medium text-foreground leading-[1.1]">
                            Our <span className="italic text-primary">Portfolio</span> of Excellence
                        </h2>
                    </div>
                    <p className="text-lg lg:text-xl text-foreground/70 font-poppins font-light leading-relaxed max-w-3xl">
                        Explore Insprosoftware’s portfolio, featuring innovative IT solutions, mobile apps, web development, 
                        and digital transformation projects that drive business success with cutting-edge technology.
                    </p>
                </div>

                {/* The Slider Container */}
                <div className="relative group">
                    {/* Shadow Glow behind slider */}
                    <div className="absolute -inset-4 bg-primary/5 rounded-none blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                    
                    <PortfolioSlider items={portfolioData} />

                    {/* HUD Technical Labels */}
                    <div className="mt-6 flex justify-between items-center text-[10px] font-mono text-foreground/30 uppercase tracking-widest">
                        <div className="flex gap-4">
                            <span>S_TYPE.DYNAMIC_SLIDER</span>
                            <span>REF.7749X</span>
                        </div>
                        <div className="hidden md:block">
                            EST.2024 / INSPRO.CORE
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
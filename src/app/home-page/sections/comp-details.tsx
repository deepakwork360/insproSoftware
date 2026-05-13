"use client"

import CompDetailCard from "@/components/ui/Company-detail-card";

export default function CompanyDetails({ className = "" }: { className?: string }) {
    const details = [
        {
            title: "Trusted Company",
            description: "your trusted partner for success. Experience integrity and quality with us.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            )
        },
        {
            title: "Save Your Money",
            description: "Save more, spend smart—your financial well-being matters.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
            )
        },
        {
            title: "Get a free quote",
            description: "Request your free quote today—no strings attached!",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M9 14h6"></path><path d="M9 18h6"></path><path d="M9 10h6"></path></svg>
            )
        }, {
            title: "24/7 Fast Support",
            description: "Reliable 24/7 fast support—always here when you need us!",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
            )
        }
    ];

    return (
        <section className={`relative bg-slate-50/50 dark:bg-background py-10 lg:py-14 px-6 md:px-12 lg:px-24 transition-colors duration-500 overflow-hidden ${className}`}>
            {/* 3D Background UI Elements (Light Mode Only) */}
            <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none dark:hidden" />
            <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none dark:hidden" />

            {/* Subtle Tech Grid/Mesh for Background UI */}
            <div className="absolute inset-0 opacity-[0.03] dark:hidden pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #2563EB 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="relative z-10 max-w-[1600px] mx-auto">
                {/* <div className="mb-10 md:mb-16 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-playfair font-medium text-foreground leading-tight">
                        insprosoftware System – <span className="italic text-primary">Premier</span> Technology Partner
                    </h2>
                    <p className="text-lg md:text-xl text-foreground/60 font-poppins leading-relaxed max-w-5xl">
                        We specialize in developing high-performance, scalable, and secure software solutions tailored to your business needs.
                        With years of industry experience, we deliver cutting-edge technology that drives real results.
                    </p>
                </div> */}

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
                    {details.map((item, index) => (
                        <CompDetailCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                            variant={index % 2 === 0 ? "dark" : "primary"}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
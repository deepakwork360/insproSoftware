"use client"

import { 
    HeartPulse, 
    ShoppingBag, 
    GraduationCap, 
    Plane, 
    Truck, 
    Utensils, 
    Pizza, 
    Landmark, 
    Zap, 
    Share2 
} from "lucide-react"
import ImageContainer from "@/components/ui/image-container"

const row1 = [
    { icon: HeartPulse, title: "Healthcare", id: "IND_01" },
    { icon: ShoppingBag, title: "Ecommerce", id: "IND_02" },
    { icon: GraduationCap, title: "E-Learning", id: "IND_03" },
    { icon: Plane, title: "Travel", id: "IND_04" },
    { icon: Truck, title: "Logistics", id: "IND_05" }
]

const row2 = [
    { icon: Utensils, title: "Food", id: "IND_06" },
    { icon: Pizza, title: "Restaurant", id: "IND_07" },
    { icon: Landmark, title: "Fintech", id: "IND_08" },
    { icon: Zap, title: "On-Demand", id: "IND_09" },
    { icon: Share2, title: "Social Media", id: "IND_10" }
]

export default function Industries() {
    return (
        <section className="bg-indigo-50/30 dark:bg-background py-10 lg:py-20 px-6 md:px-12 lg:px-24 transition-colors duration-500 relative overflow-hidden">
            {/* 3D Background UI Elements (Light Mode Only) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/[0.04] rounded-full blur-[150px] pointer-events-none dark:hidden" />
            
            {/* Floating Technical Markers */}
            <div className="absolute top-10 right-[10%] w-px h-24 bg-gradient-to-b from-transparent via-primary/20 to-transparent dark:hidden pointer-events-none" />
            <div className="absolute bottom-10 left-[5%] w-px h-32 bg-gradient-to-b from-transparent via-accent/20 to-transparent dark:hidden pointer-events-none" />
            
            {/* Background Texture UI */}
            <div className="absolute inset-0 opacity-[0.02] dark:hidden pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#4F46E5 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="max-w-7xl mx-auto space-y-8 relative z-10">
                
                {/* Header Section */}
                <div className="space-y-4 mb-10">
                    <div className="space-y-2 md:space-y-4">
                        <h2 className="text-3xl md:text-5xl font-playfair font-medium text-foreground leading-[1.1]">
                            Expertise <span className="italic text-primary">Across</span> Global Sectors
                        </h2>
                    </div>
                    <p className="text-base md:text-xl text-foreground/70 font-poppins font-light leading-relaxed max-w-5xl">
                        We leverage the top 1% of software engineering talent to deliver specialized, 
                        high-performance solutions tailored to the unique demands of these core industries.
                    </p>
                </div>


                {/* Industries Grid */}
                <div className="space-y-1">
                    {/* Row 1 & 2 combined for better mobile stacking */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
                        {[...row1, ...row2].map((item, index) => (
                            <ImageContainer 
                                key={index} 
                                id={item.id} 
                                showBackground={true}
                                padding="p-8"
                                className="group flex flex-col items-center justify-center gap-4 md:gap-6 bg-card"
                            >
                                <div className="relative group-hover:scale-110 transition-transform duration-500">
                                    {/* Subtle Glow behind icon on hover */}
                                    <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    
                                    <item.icon size={32} className="text-primary/60 group-hover:text-primary transition-all duration-500 relative z-10 md:hidden" />
                                    <item.icon size={48} className="text-primary/60 group-hover:text-primary transition-all duration-500 relative z-10 hidden md:block" />
                                </div>

                                <h3 className="text-sm md:text-base font-playfair font-medium text-primary group-hover:text-primary transition-colors text-center px-2">
                                    {item.title}
                                </h3>
                            </ImageContainer>
                        ))}
                    </div>
                </div>

                {/* HUD Footer Labels */}

            </div>
        </section>
    )
}


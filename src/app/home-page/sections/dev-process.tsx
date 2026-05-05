
"use client"

import { 
    ClipboardCheck, 
    Palette, 
    Code2, 
    FlaskConical, 
    Rocket,
    ArrowRight
} from "lucide-react"
import ImageContainer from "@/components/ui/image-container"

const devData = [
    {
        icon: ClipboardCheck,
        title: "Submit",
        desc: "Share your vision and project requirements with our expert team.",
        id: "STEP_01"
    },
    {
        icon: Palette,
        title: "Design",
        desc: "We craft intuitive UI/UX mockups and technical architectures.",
        id: "STEP_02"
    },
    {
        icon: Code2,
        title: "Develop",
        desc: "Our top 1% engineers build your product using agile methodology.",
        id: "STEP_03"
    },
    {
        icon: FlaskConical,
        title: "Test",
        desc: "Rigorous QA and automated testing ensure a bug-free experience.",
        id: "STEP_04"
    },
    {
        icon: Rocket,
        title: "Launch!",
        desc: "Deploying your solution to the world with full support and scaling.",
        id: "STEP_05"
    },
]

export default function DevProcess() {
    return (
        <section className="bg-background py-10 md:py-18 px-6 md:px-12 lg:px-24 transition-colors duration-300 relative overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-12 relative z-10">
                
                {/* Header Section */}
                <div className="space-y-4 mb-10">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-3">
                            <div className="w-8 h-px bg-primary" />
                            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-mono font-bold">Workflow.Architecture</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-playfair font-medium text-foreground leading-[1.1]">
                            Our <span className="italic text-primary">Development</span> Pipeline
                        </h2>
                    </div>
                    <p className="text-lg md:text-xl text-foreground/70 font-poppins font-light leading-relaxed max-w-5xl">
                        A precision-engineered lifecycle designed to transform complex requirements into 
                        seamless digital experiences through rigorous technical excellence.
                    </p>
                </div>

                {/* Process Flow */}
                <div className="relative">
                    {/* Animated Connector Line (Desktop) */}
                    <div className="absolute top-[4.5rem] left-0 w-full h-[1px] bg-border/10 hidden lg:block overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent w-1/3 animate-[shimmer_3s_infinite_linear]" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6">
                        {devData.map((item, index) => (
                            <div key={index} className="relative group">
                                <div className="flex flex-row lg:flex-col items-start lg:items-stretch gap-6 lg:gap-10">
                                    {/* Step Icon with HUD Frame */}
                                    <div className="relative shrink-0">
                                        <div className="relative">
                                            {/* Pulsing Glow behind icon */}
                                            <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse" />
                                            
                                            <ImageContainer 
                                                id={item.id} 
                                                showBackground={true}
                                                className="w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 p-0 flex items-center justify-center bg-card/40 backdrop-blur-xl border-border/20 group-hover:border-primary/40 transition-all duration-700"
                                            >
                                                <item.icon size={28} className="text-primary/70 md:hidden transition-all duration-700 group-hover:text-primary" />
                                                <item.icon size={36} className="text-primary/70 hidden md:block transition-all duration-700 group-hover:text-primary group-hover:scale-110 group-hover:rotate-12" />
                                                
                                                {/* HUD Scanning Line Effect */}
                                                <div className="absolute inset-0 w-full h-[2px] bg-primary/5 -translate-y-full group-hover:animate-[scan_2s_infinite_linear] pointer-events-none" />
                                            </ImageContainer>
                                        </div>
                                        
                                        {/* Mobile/Tablet Connector Line */}
                                        {index !== devData.length - 1 && (
                                            <div className="absolute top-[4.5rem] left-1/2 -translate-x-1/2 w-px h-16 md:h-20 bg-gradient-to-b from-primary/30 to-transparent lg:hidden" />
                                        )}
                                    </div>

                                    {/* Content Area */}
                                    <div className="space-y-3 md:space-y-4 text-left relative pt-1 md:pt-2">
                                        <div className="flex items-center justify-start gap-3 md:gap-4">
                                            <span className="font-mono text-[9px] md:text-[10px] text-primary/40 font-bold group-hover:text-primary transition-colors">
                                                STEP_{index + 1 < 10 ? `0${index + 1}` : index + 1}
                                            </span>
                                            <div className="h-px w-4 md:w-6 bg-primary/20 group-hover:w-12 group-hover:bg-primary/50 transition-all duration-700" />
                                        </div>
                                        
                                        <div className="space-y-1 md:space-y-2">
                                            <h3 className="text-xl md:text-2xl font-playfair font-medium text-foreground tracking-wide group-hover:text-primary transition-colors duration-500">
                                                {item.title}
                                            </h3>
                                            <p className="text-xs md:text-sm text-foreground/50 leading-relaxed font-poppins font-light group-hover:text-foreground/70 transition-colors duration-500">
                                                {item.desc}
                                            </p>
                                        </div>

                                        {/* HUD Corner Detail for text area */}
                                        <div className="absolute -bottom-2 -left-2 w-1 h-1 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block" />
                                    </div>
                                </div>

                                {/* Desktop Connection Indicator */}
                                {index !== devData.length - 1 && (
                                    <div className="absolute top-[4.5rem] -right-3 z-20 hidden lg:block">
                                        <div className="flex items-center gap-1 opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-700 text-primary">
                                            <ArrowRight size={14} className="animate-[slide-right_2s_infinite]" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <style jsx>{`
                @keyframes scan {
                    from { transform: translateY(-100%); }
                    to { transform: translateY(100%); }
                }
                @keyframes shimmer {
                    from { transform: translateX(-100%); }
                    to { transform: translateX(300%); }
                }
                @keyframes slide-right {
                    0%, 100% { transform: translateX(0); opacity: 0.2; }
                    50% { transform: translateX(5px); opacity: 1; }
                }
            `}</style>
        </section>
    )
}


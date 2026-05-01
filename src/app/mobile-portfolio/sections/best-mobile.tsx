import Image from "next/image";
import { Smartphone, Sparkles, ArrowRight, Layers, Cpu } from "lucide-react";
import Link from "next/link";

export default function BestMobile() {
    return (
        <section className="py-10 md:py-16 px-6 md:px-12 lg:px-24 bg-background overflow-hidden border-t border-border/10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Side: Content */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-none text-primary text-[10px] uppercase tracking-[0.3em] font-mono font-bold">
                                <Smartphone size={12} />
                                App.Engineering
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium text-foreground leading-tight">
                                Excellence in <span className="italic text-primary">Mobile Solutions</span>
                            </h2>
                            <p className="text-base md:text-lg text-foreground/60 font-poppins leading-relaxed max-w-xl">
                                We transform your vision into high-performance mobile applications. From sleek UI/UX to robust backend integrations, our mobile solutions are engineered to deliver seamless user experiences across iOS and Android.
                            </p>
                        </div>

                        {/* Feature Points */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Layers size={20} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-mono font-bold text-foreground uppercase tracking-wider mb-1">Architecture</h3>
                                    <p className="text-xs text-foreground/50 leading-relaxed">Scalable and robust app architectures for long-term growth.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Cpu size={20} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-mono font-bold text-foreground uppercase tracking-wider mb-1">Performance</h3>
                                    <p className="text-xs text-foreground/50 leading-relaxed">Lightning-fast performance and buttery-smooth interactions.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <Link 
                                href="/contact" 
                                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.2em] hover:bg-primary/90 transition-all group"
                            >
                                Build Your App
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Side: Image with HUD Frame */}
                    <div className="relative group order-1 lg:order-2">
                        <div className="relative aspect-[3/2] w-full max-w-2xl mx-auto overflow-hidden border border-primary/20 bg-card shadow-2xl">
                            {/* HUD Corners */}
                            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/40 z-10 pointer-events-none" />
                            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary/40 z-10 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-primary/40 z-10 pointer-events-none" />
                            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/40 z-10 pointer-events-none" />
                            
                            <Image 
                                src="/portfolio/mobile.jpg" 
                                alt="Mobile App Portfolio" 
                                fill 
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

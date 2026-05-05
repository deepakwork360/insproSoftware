import Image from "next/image";
import { Smartphone, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BestWeb() {
    return (
        <section className="py-10 md:py-16 px-6 md:px-12 lg:px-24 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Side: Content */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-none text-primary text-[10px] uppercase tracking-[0.3em] font-mono font-bold">
                                <Smartphone size={12} />
                                Web.Solutions
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium text-foreground leading-tight">
                                Our Best <span className="italic text-primary">Web Portfolio</span>
                            </h2>
                            <p className="text-base md:text-lg text-foreground/60 font-poppins leading-relaxed max-w-xl">
                                At Insprosoft, we take pride in our exceptional portfolio, showcasing a diverse range of successful projects across web design, mobile app development, and digital marketing. Our portfolio reflects our commitment to delivering innovative solutions tailored to our clients' needs.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 pt-4">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Sparkles size={20} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-mono font-bold text-foreground uppercase tracking-wider mb-1">Innovation</h3>
                                    <p className="text-xs text-foreground/50 leading-relaxed">Transforming complex ideas into seamless experiences.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <Link 
                                href="/contact" 
                                className="relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.2em] transition-all duration-500 hover:bg-black hover:shadow-2xl hover:shadow-primary/20 overflow-hidden group"
                            >
                                {/* Button Glint Effect */}
                                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-1000 ease-in-out" />
                                
                                <span className="relative z-10">Start Your Project</span>
                                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
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
                                alt="Mobile Portfolio" 
                                fill 
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                priority
                            />
                        </div>


                        {/* Technical Metadata Overlay (HUD style) */}
                        {/* <div className="absolute -bottom-4 -left-4 md:-left-8 bg-background/90 backdrop-blur-md border border-primary/20 p-4 font-mono text-[10px] space-y-1 hidden md:block">
                             <div className="text-primary tracking-widest uppercase">Dev_Mode: Active</div>
                            <div className="text-foreground/40">Status: Optimized_1.0.4</div>
                           <div className="text-foreground/40">Lat: 28.5847 / Lon: 77.3159</div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

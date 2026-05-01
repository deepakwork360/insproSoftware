import Image from "next/image";
import { Target, Eye, Users } from "lucide-react";

export default function MeetTeam() {
    return (
        <section className="md:py-10 px-6 md:px-12 lg:px-24 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Side: Image with HUD Frame */}
                    <div className="relative group order-2 lg:order-1">
                        <div className="relative aspect-[4/3] w-full overflow-hidden border border-primary/20 bg-card">
                            {/* HUD Corners */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40 z-10" />
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/40 z-10" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/40 z-10" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40 z-10" />
                            
                            <Image 
                                src="/about/discussion.png.jpg" 
                                alt="Team Discussion" 
                                fill 
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            
                            {/* Scanning Line Effect */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent z-10 animate-[scan_6s_linear_infinite]" />
                        </div>
                        
                        {/* Decorative HUD Elements */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/10 -z-10 hidden md:block" />
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/5 -z-10 blur-2xl" />
                    </div>

                    {/* Right Side: Content */}
                    <div className="space-y-12 order-1 lg:order-2">
                        {/* Meet Our Team */}
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-none text-primary text-[10px] uppercase tracking-[0.3em] font-mono font-bold">
                                <Users size={12} />
                                The.Collective
                            </div>
                            <h2 className="text-4xl md:text-5xl font-playfair font-medium text-foreground leading-tight">
                                Meet Our <span className="italic text-primary">Team</span>
                            </h2>
                            <p className="text-base text-foreground/60 font-poppins leading-relaxed">
                                At Insprosoftware, our team is the heart of our success. Composed of skilled professionals with expertise in web development, mobile app development, digital marketing, and more, we’re dedicated to delivering innovative and impactful solutions.
                            </p>
                        </div>

                        {/* Mission & Vision Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                            {/* Our Mission */}
                            <div className="relative p-6 bg-card border border-border/50 group/item hover:border-primary/30 transition-all duration-500">
                                <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover/item:h-full transition-all duration-500" />
                                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary mb-4">
                                    <Target size={20} />
                                </div>
                                <h3 className="text-xl font-playfair font-medium text-foreground mb-3 uppercase tracking-wide">Our Mission</h3>
                                <p className="text-sm text-foreground/60 font-poppins leading-relaxed">
                                    To empower businesses by providing innovative digital solutions that drive growth and success, tailored to each client's unique needs.
                                </p>
                            </div>

                            {/* Our Vision */}
                            <div className="relative p-6 bg-card border border-border/50 group/item hover:border-primary/30 transition-all duration-500">
                                <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover/item:h-full transition-all duration-500" />
                                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary mb-4">
                                    <Eye size={20} />
                                </div>
                                <h3 className="text-xl font-playfair font-medium text-foreground mb-3 uppercase tracking-wide">Our Vision</h3>
                                <p className="text-sm text-foreground/60 font-poppins leading-relaxed">
                                    To deliver cutting-edge technology solutions that empower businesses to thrive in the digital era through seamless, user-centric experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


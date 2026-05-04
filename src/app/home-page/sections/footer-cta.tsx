"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, Globe, CheckCircle, ArrowRight } from "lucide-react";
import InputField from "@/components/ui/input-field";
import ImageContainer from "@/components/ui/image-container";

export default function FooterCTA() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        projectType: "",
        message: ""
    });
    
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = "Required";
        if (!formData.email.trim()) {
            newErrors.email = "Required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid format";
        }
        if (!formData.projectType.trim()) newErrors.projectType = "Required";
        if (!formData.message.trim()) newErrors.message = "Required";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: "", email: "", projectType: "", message: "" });
        
        setTimeout(() => setIsSuccess(false), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    return (
        <section className="relative bg-background py-10 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-border/10">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,153,0.1)_0%,transparent_70%)]" />
                
                {/* SVG Technical Flower Pattern */}
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] text-primary/30 animate-[spin_60s_infinite_linear]" viewBox="0 0 200 200">
                    <defs>
                        <linearGradient id="flower-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
                            <stop offset="50%" stopColor="currentColor" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                    {/* Rotating Petals */}
                    {[...Array(12)].map((_, i) => (
                        <ellipse 
                            key={i}
                            cx="100" cy="100" rx="60" ry="15" 
                            fill="none" stroke="url(#flower-grad)" strokeWidth="1.2"
                            transform={`rotate(${i * 30} 100 100)`}
                        />
                    ))}
                    {/* Inner HUD Rings */}
                    <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 4" />
                    <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.4" />
                    {/* Central Core */}
                    <circle cx="100" cy="100" r="6" fill="currentColor" className="animate-pulse" />
                </svg>
            </div>


            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    
                    {/* Left Side: Information */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-3">
                                <div className="w-8 h-px bg-primary" />
                                <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-mono font-bold">Contact Node</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-playfair font-medium text-foreground leading-[1.1]">
                                Let's Build Your <span className="italic text-primary">Future</span>
                            </h2>
                            <p className="text-lg md:text-xl text-foreground/60 font-poppins font-light leading-relaxed max-w-5xl">
                                Ready to bring your next project to life? At Insprosoftware, we turn complex ideas 
                                into powerful digital realities. Our global expertise is at your disposal.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8">
                            {/* Contact Grid Item: Phone */}
                            <div className="space-y-4 group">
                                <div className="flex items-center gap-3 text-primary">
                                    <Phone size={18} />
                                    <span className="font-mono text-[10px] uppercase tracking-widest">Voice.Channel</span>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-foreground/80 hover:text-primary transition-colors cursor-pointer">+91 9990760789</p>
                                    <p className="text-foreground/80 hover:text-primary transition-colors cursor-pointer">+91 9599408589</p>
                                    <p className="text-foreground/80 hover:text-primary transition-colors cursor-pointer">+1(469) 730-0168</p>
                                </div>
                            </div>

                            {/* Contact Grid Item: Email */}
                            <div className="space-y-4 group">
                                <div className="flex items-center gap-3 text-primary">
                                    <Mail size={18} />
                                    <span className="font-mono text-[10px] uppercase tracking-widest">Data.Stream</span>
                                </div>
                                <p className="text-foreground/80 hover:text-primary transition-colors cursor-pointer break-all">
                                    sales@insprosoftware.com
                                </p>
                            </div>

                            {/* Contact Grid Item: Office */}
                            <div className="space-y-4 group sm:col-span-2">
                                <div className="flex items-center gap-3 text-primary">
                                    <MapPin size={18} />
                                    <span className="font-mono text-[10px] uppercase tracking-widest">Physical.Coordinates</span>
                                </div>
                                <p className="text-foreground/80 font-poppins font-light leading-relaxed max-w-md">
                                    B-127, Block B, Noida Sector 2,<br />
                                    Uttar Pradesh, India - 201301
                                </p>
                            </div>
                        </div>

                        {/* Technical Metadata Footer */}
                        <div className="pt-8 border-t border-border/10 flex flex-wrap gap-6 items-center opacity-30 select-none">
                            <div className="flex items-center gap-2">
                                <Globe size={12} />
                                <span className="text-[8px] font-mono uppercase tracking-[0.3em]">Global.Deployment_Active</span>
                            </div>
                            <div className="text-[8px] font-mono uppercase tracking-[0.3em]">Server.Region: APAC-SOUTH</div>
                        </div>
                    </div>

                    {/* Right Side: Glassmorphic Contact Form */}
                    <div className="relative">
                        {/* Decorative Background for Form */}
                        <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[100px] opacity-50 pointer-events-none" />
                        
                        <ImageContainer id="CONTACT_FORM_v1" className="p-8 md:p-12 relative z-10" showBackground={true} showLabel={false}>
                            {isSuccess ? (
                                <div className="min-h-[400px] flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                                    <div className="w-20 h-20 bg-primary/10 border border-primary/20 flex items-center justify-center rounded-full">
                                        <CheckCircle size={40} className="text-primary" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-playfair font-medium text-foreground">Inquiry Initialized</h3>
                                        <p className="text-sm font-mono text-primary uppercase tracking-widest">Transmission.Successful</p>
                                    </div>
                                    <p className="text-foreground/60 font-poppins font-light max-w-xs">
                                        Our agents have received your signal. We will establish contact shortly.
                                    </p>
                                    <button 
                                        onClick={() => setIsSuccess(false)}
                                        className="text-[10px] font-mono text-primary uppercase tracking-[0.4em] underline underline-offset-8"
                                    >
                                        Send another signal
                                    </button>
                                </div>
                            ) : (
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <InputField 
                                            label="Full Name" 
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            error={errors.name}
                                            placeholder="Enter your name" 
                                        />
                                        <InputField 
                                            label="Email Address" 
                                            name="email"
                                            type="email" 
                                            value={formData.email}
                                            onChange={handleChange}
                                            error={errors.email}
                                            placeholder="email@provider.com" 
                                        />
                                    </div>
                                    <InputField 
                                        label="Project Type" 
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleChange}
                                        error={errors.projectType}
                                        placeholder="e.g. Web App, Mobile App" 
                                    />
                                    <InputField 
                                        label="Message Brief" 
                                        name="message"
                                        isTextArea 
                                        value={formData.message}
                                        onChange={handleChange}
                                        error={errors.message}
                                        placeholder="Tell us about your project vision..." 
                                    />
                                    
                                    <button 
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group relative inline-flex w-full items-center justify-center gap-6 px-12 py-5 bg-[var(--primary)] text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:bg-black hover:shadow-2xl hover:shadow-[var(--primary)]/20 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {/* Button Glint Effect */}
                                        <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-1000 ease-in-out" />
                                        
                                        <span className="relative z-10">{isSubmitting ? "Processing Signal..." : "Initialize Inquiry"}</span>
                                        {!isSubmitting && <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />}
                                    </button>

                                </form>
                            )}
                        </ImageContainer>
                    </div>

                </div>
            </div>
        </section>
    );
}
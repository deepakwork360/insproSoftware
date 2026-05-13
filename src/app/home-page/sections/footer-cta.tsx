"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Send, Globe, CheckCircle, ArrowRight, ShieldCheck } from "lucide-react";
import InputField from "@/components/ui/input-field";
import ImageContainer from "@/components/ui/image-container";
import HoldVerify from "@/components/ui/hold-verify";
import { sendInquiryEmail } from "@/app/actions/send-email";

interface FooterCTAProps {
    contactData?: {
        phoneNumbers?: string[];
        email?: string;
        address?: string;
    };
}

export default function FooterCTA({ contactData }: FooterCTAProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        projectType: "",
        message: ""
    });

    const contactNumbers = contactData?.phoneNumbers || ["+91 9990760789", "+91 9599408589", "+1(469) 730-0168"];
    const contactEmail = contactData?.email || "sales@insprosoftware.com";
    const contactAddress = contactData?.address || "B-127, Block B, Noida Sector 2,\nUttar Pradesh, India - 201301";
    
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isVerifying, setIsVerifying] = useState(false);

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

    const handleInitialSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setIsVerifying(true);
    };

    const onVerifySuccess = async () => {
        setIsSubmitting(true);
        
        try {
            const result = await sendInquiryEmail(formData);
            
            if (result.success) {
                setIsSuccess(true);
                setFormData({ name: "", email: "", projectType: "", message: "" });
            } else {
                alert(`Submission failed: ${result.error}`);
            }
        } catch (error) {
            console.error('Submission Error:', error);
            alert('A technical error occurred. Please try again later.');
        } finally {
            setIsSubmitting(false);
            setIsVerifying(false);
        }
        
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
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden opacity-40">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,153,0.15)_0%,transparent_70%)]" />
                
                {/* Technical HUD Schematic */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] flex items-center justify-center">
                    <svg className="w-full h-full text-primary/40" viewBox="0 0 200 200">
                        <defs>
                            <linearGradient id="hud-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
                                <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
                                <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
                            </linearGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Outer Slow Rotating Ring */}
                        <g className="animate-[spin_120s_infinite_linear]" filter="url(#glow)">
                            <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1 10" />
                            <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.8" />
                        </g>

                        {/* Medium Fast Counter-Rotating Ring */}
                        <g className="animate-[spin_40s_infinite_linear_reverse]" filter="url(#glow)">
                            <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="20 40" />
                            <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
                        </g>

                        {/* Inner Technical HUD Components */}
                        <g className="animate-[spin_20s_infinite_linear]" filter="url(#glow)">
                            <path d="M60 100 L40 100 M140 100 L160 100 M100 60 L100 40 M100 140 L100 160" stroke="currentColor" strokeWidth="2.5" />
                            <rect x="95" y="45" width="10" height="4" fill="currentColor" />
                            <rect x="95" y="151" width="10" height="4" fill="currentColor" />
                        </g>

                        {/* Central Pulsing Core */}
                        <circle cx="100" cy="100" r="40" fill="none" stroke="url(#hud-grad)" strokeWidth="1.5" className="animate-pulse" filter="url(#glow)" />
                        <circle cx="100" cy="100" r="4" fill="currentColor" className="animate-pulse" filter="url(#glow)" />

                        {/* Scanning "Data" Points */}
                        {[...Array(8)].map((_, i) => (
                            <circle 
                                key={i}
                                cx={100 + 60 * Math.cos(i * Math.PI / 4)} 
                                cy={100 + 60 * Math.sin(i * Math.PI / 4)} 
                                r="2.5" 
                                fill="currentColor"
                                className="animate-pulse"
                                style={{ animationDelay: `${i * 0.5}s` }}
                                filter="url(#glow)"
                            />
                        ))}
                    </svg>
                </div>
            </div>


            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    
                    {/* Left Side: Information */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                           
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
                                    <span className="font-playfair text-base font-medium text-primary">Call for Inquiry</span>
                                </div>
                                <div className="space-y-1">
                                    {contactNumbers.map((num, i) => (
                                        <p key={i} className="text-foreground/80 hover:text-primary transition-colors cursor-pointer">{num}</p>
                                    ))}
                                </div>
                            </div>

                            {/* Contact Grid Item: Email */}
                            <div className="space-y-4 group">
                                <div className="flex items-center gap-3 text-primary">
                                    <Mail size={18} />
                                    <span className="font-playfair text-base font-medium text-primary">Send Us Email</span>
                                </div>
                                <p className="text-foreground/80 hover:text-primary transition-colors cursor-pointer break-all">
                                    {contactEmail}
                                </p>
                            </div>

                            {/* Contact Grid Item: Office */}
                            <div className="space-y-4 group sm:col-span-2">
                                <div className="flex items-center gap-3 text-primary">
                                    <MapPin size={18} />
                                    <span className="font-playfair text-base font-medium text-primary">Office Address</span>
                                </div>
                                <p className="text-foreground/80 font-poppins font-light leading-relaxed max-w-md whitespace-pre-line">
                                    {contactAddress}
                                </p>
                            </div>
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
                                        <h3 className="text-2xl font-playfair font-medium text-primary">Inquiry Sent Successfully</h3>
                                    </div>
                                    <p className="text-foreground/60 font-poppins font-light max-w-xs">
                                        Our agents have received your signal. We will establish contact shortly.
                                    </p>
                                    <button 
                                        onClick={() => setIsSuccess(false)}
                                        className="text-base font-playfair text-primary hover:underline underline-offset-8 transition-all"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : isVerifying ? (
                                <div className="min-h-[400px] flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in zoom-in duration-500">
                                    <div className="w-16 h-16 bg-primary/10 border border-primary/20 flex items-center justify-center rounded-full">
                                        <ShieldCheck size={32} className={`text-primary ${isSubmitting ? 'animate-pulse' : ''}`} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-playfair font-medium text-foreground">
                                            {isSubmitting ? "Initiating Uplink..." : "Security Handshake"}
                                        </h3>
                                        <p className="text-sm text-foreground/60 font-poppins">
                                            {isSubmitting ? "Finalizing technical connection..." : "Manual verification required."}
                                        </p>
                                    </div>
                                    
                                    {!isSubmitting && (
                                        <HoldVerify 
                                            onVerify={onVerifySuccess}
                                            text="Hold to Authorize"
                                            holdDuration={2000}
                                        />
                                    )}

                                    {!isSubmitting && (
                                        <button 
                                            onClick={() => setIsVerifying(false)}
                                            className="text-xs font-poppins text-foreground/40 hover:text-primary transition-colors uppercase tracking-[0.2em]"
                                        >
                                            ← Back to form
                                        </button>
                                    )}
                                </div>
                            ) : (
                                <form className="space-y-6" onSubmit={handleInitialSubmit}>
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
                                        className="group relative inline-flex w-full items-center justify-center gap-4 md:gap-6 px-6 md:px-12 py-5 bg-[var(--primary)] text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:bg-accent hover:shadow-2xl hover:shadow-[var(--primary)]/20 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {/* Button Glint Effect */}
                                        <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-1000 ease-in-out" />
                                        
                                        <span className="relative z-10 whitespace-nowrap">{isSubmitting ? "Processing..." : "Initialize Inquiry"}</span>
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
"use client";

import { useState } from "react";
import { Send, CheckCircle, ArrowRight, ShieldCheck } from "lucide-react";
import InputField from "@/components/ui/input-field";
import ImageContainer from "@/components/ui/image-container";
import HoldVerify from "@/components/ui/hold-verify";
import { sendInquiryEmail } from "@/app/actions/send-email";

export default function FormPart() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isVerifying, setIsVerifying] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => {
                const next = { ...prev };
                delete next[name];
                return next;
            });
        }
    };

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = "Required";
        if (!formData.email.trim()) {
            newErrors.email = "Required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid format";
        }
        if (!formData.subject.trim()) newErrors.subject = "Required";
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
            const result = await sendInquiryEmail({
                ...formData,
                source: "Contact Page"
            });
            
            if (result.success) {
                setIsSuccess(true);
                setFormData({ name: "", email: "", subject: "", message: "" });
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

    return (
        <section className="md:py-10 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <ImageContainer className="p-8 md:p-12 relative z-10" showBackground={true} showLabel={false}>
                    {isSuccess ? (
                        <div className="min-h-[400px] flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                            <div className="w-20 h-20 bg-primary/10 border border-primary/20 flex items-center justify-center rounded-full text-primary">
                                <CheckCircle size={40} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-playfair font-medium text-primary">Message Sent Successfully</h3>
                                <p className="text-foreground/60 font-poppins text-sm max-w-xs mx-auto">
                                    Your message has been encrypted and sent to our team. We will respond shortly.
                                </p>
                            </div>
                            <button 
                                onClick={() => setIsSuccess(false)}
                                className="text-base font-playfair text-primary hover:underline transition-all"
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
                        <form onSubmit={handleInitialSubmit} className="space-y-8 animate-in fade-in duration-700">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <InputField 
                                    label="First Name" 
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
                                label="Subject" 
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                error={errors.subject}
                                placeholder="What is this regarding?" 
                            />

                            <InputField 
                                label="Send Your Message" 
                                name="message"
                                isTextArea 
                                value={formData.message}
                                onChange={handleChange}
                                error={errors.message}
                                placeholder="Tell us about your requirements..." 
                            />

                            <div className="pt-4">
                                <button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group relative inline-flex w-full items-center justify-center gap-6 px-12 py-5 bg-[var(--primary)] text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:bg-black hover:shadow-2xl hover:shadow-[var(--primary)]/20 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {/* Button Glint Effect */}
                                    <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-1000 ease-in-out" />
                                    
                                    <span className="relative z-10">{isSubmitting ? "Processing Signal..." : "Submit Message"}</span>
                                    {!isSubmitting && <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />}
                                </button>
                            </div>
                        </form>
                    )}
                </ImageContainer>
            </div>
        </section>
    );
}
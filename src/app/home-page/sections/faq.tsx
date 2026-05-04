"use client"

import { useState } from "react"
import { Plus, Minus, MessageSquare, Headphones } from "lucide-react"

const faqs = [
    {
        que: "What is web designing, and why is it important for businesses?",
        ans: "Web designing is the process of creating the visual and functional aspects of a website. It plays a crucial role in user experience and brand perception. A well-designed website helps businesses attract visitors, keep them engaged, and convert them into loyal customers."
    },
    {
        que: "What makes Insprosoftware's website development services unique?",
        ans: "At Insprosoftware, we offer custom-built websites that are responsive, scalable, and user-friendly. Our development process focuses on integrating the latest technologies and ensuring a smooth user experience across all devices to help businesses thrive online."
    },
    {
        que: "How can digital marketing help my business grow?",
        ans: "Digital marketing at Insprosoftware helps businesses reach their target audience through various online channels like SEO, social media, content marketing, and paid ads. We focus on driving traffic, improving conversion rates, and boosting brand visibility, which results in business growth."
    },
    {
        que: "What are the benefits of investing in graphic design services?",
        ans: "Professional graphic design enhances your brand identity and helps you stand out. At Insprosoftware, we create stunning visuals that communicate your message clearly, whether through logos, brochures, or social media content, helping you engage with your audience and build trust."
    },
    {
        que: "How does Insprosoftware approach software development?",
        ans: "At Insprosoftware, we provide end-to-end software development services, from conceptualization to deployment. We use agile methodologies and cutting-edge technologies to build secure, scalable, and efficient software solutions that align with your business objectives."
    },
    {
        que: "Why should I choose Insprosoftware for mobile app development?",
        ans: "Insprosoftware offers expert mobile app development services for both Android and iOS. We build intuitive, feature-rich apps that provide exceptional user experiences. Our team ensures your app is scalable, secure, and performs seamlessly across all devices."
    },
    {
        que: "What is the difference between website design and development?",
        ans: "Website design focuses on the visual layout and user experience, while website development involves the coding and functionality that make the site work. Both are crucial for creating a fully functional and engaging website."
    },
    {
        que: "How long does it take to develop a website?",
        ans: "The timeline for website development depends on the project’s complexity. At Insprosoftware, we work closely with our clients to define project scope and deliver timelines. Typically, a basic website can take a few weeks, while more complex projects may take several months."
    },
    {
        que: "What digital marketing strategies does Insprosoftware specialize in?",
        ans: "Insprosoftware specializes in SEO, pay-per-click (PPC) advertising, social media marketing, content creation, and email marketing. We tailor each strategy to meet your business goals, ensuring maximum ROI and long-term success."
    },
    {
        que: "Can Insprosoftware handle both web and mobile app development?",
        ans: "Yes! At Insprosoftware, we offer both web and mobile app development services. Our team ensures seamless integration between the two platforms, providing a cohesive experience for users and maximizing your digital presence across devices."
    },
]

function FAQItem({ que, ans, index, isOpen, toggle }: { que: string, ans: string, index: number, isOpen: boolean, toggle: () => void }) {
    return (
        <div className={`group border-b border-border/40 transition-all duration-700 relative ${isOpen ? "bg-primary/[0.04] backdrop-blur-sm" : "hover:bg-primary/[0.01]"}`}>
            {/* Dynamic left accent bar */}
            <div className={`absolute left-0 top-0 bottom-0 w-[3px] bg-primary transition-all duration-700 ease-out z-20 ${isOpen ? "opacity-100" : "opacity-0 h-0"}`} />
            
            <button 
                onClick={toggle}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-all relative overflow-hidden group/btn"
            >
                {/* Active background glow */}
                <div className={`absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent transition-opacity duration-700 ${isOpen ? "opacity-100" : "opacity-0"}`} />
                
                <div className="flex flex-col gap-2 md:gap-6 md:flex-row md:items-center relative z-10 pr-14">
                    <span className={`font-mono text-[9px] md:text-[10px] uppercase tracking-widest transition-colors duration-500 ${isOpen ? "text-primary" : "text-primary/40 group-hover/btn:text-primary"}`}>
                        [Q.{index + 1 < 10 ? `0${index + 1}` : index + 1}]
                    </span>
                    <h3 className={`text-base md:text-xl font-playfair font-medium transition-all duration-500 leading-tight ${isOpen ? "text-foreground md:translate-x-2" : "text-foreground/80 group-hover/btn:text-foreground"}`}>
                        {que}
                    </h3>
                </div>
                
                <div className={`absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-500 z-10 rounded-full border ${isOpen ? "bg-primary border-primary text-white rotate-180 scale-110 shadow-[0_0_20px_rgba(var(--primary),0.3)]" : "bg-background/50 border-border/40 text-primary"}`}>
                    <Plus 
                        size={20} 
                        className={`absolute transition-all duration-500 ease-out ${isOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`} 
                    />
                    <Minus 
                        size={20} 
                        className={`absolute transition-all duration-500 ease-out ${isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`} 
                    />
                </div>
            </button>
            
            <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                    <div className="px-6 md:px-8 pb-8 flex gap-4 md:gap-6 relative z-10">
                        <div className="w-px h-auto bg-primary/20 ml-[1.1rem] hidden md:block" />
                        <p className="text-sm md:text-lg text-foreground/50 font-poppins font-light leading-relaxed max-w-4xl">
                            {ans}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="bg-background py-10 px-6 md:px-12 lg:px-24 transition-colors duration-300 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24 relative z-10">
                
                {/* Header & Intro Section */}
                <div className="space-y-8">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-3">
                            <div className="w-8 h-px bg-primary" />
                            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-mono font-bold">Support.Center</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-playfair font-medium text-foreground leading-[1.1]">
                            Frequently Asked <br /><span className="italic text-primary">Questions</span>
                        </h2>
                    </div>
                    <p className="text-lg md:text-xl text-foreground/60 font-poppins font-light leading-relaxed max-w-5xl">
                        Find answers to common queries about our processes, technologies, and specialized services.
                        Our goal is to provide clarity and transparency at every step.
                    </p>
                </div>

                    {/* Support HUD Card */}
                    {/* <div className="hidden lg:flex flex-col items-end">
                        <div className="p-6 bg-card border border-border/40 space-y-4 min-w-[300px] relative group overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-700" />
                            <div className="flex items-center gap-4 text-primary">
                                <Headphones size={24} />
                                <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Live Assistance</span>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs text-foreground/40 font-mono uppercase tracking-tighter">Availability: 24/7 Global</p>
                                <p className="text-lg text-foreground font-medium font-playfair tracking-wide">Still have questions?</p>
                            </div>
                            <button className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-primary hover:text-foreground transition-colors">
                                <MessageSquare size={14} />
                                Connect with Expert
                            </button>
                        </div>
                    </div> */}
                
                {/* Accordion List */}
                <div className="border-t border-border/40 relative">
                    {/* Side decorative line */}
                    <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/40 via-primary/5 to-transparent hidden md:block" />
                    
                    {faqs.map((faq, index) => (
                        <FAQItem 
                            key={index}
                            index={index}
                            que={faq.que}
                            ans={faq.ans}
                            isOpen={openIndex === index}
                            toggle={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>

                {/* Technical Label / Footer for section */}
                {/* <div className="flex justify-between items-center text-[10px] font-mono text-foreground/30 uppercase tracking-[0.3em]">
                    <div className="flex gap-8">
                        <span className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-primary animate-pulse" />
                            Status: Optimized
                        </span>
                        <span>Layer: Support_UI</span>
                    </div>
                    <div className="hidden sm:block">
                        Query_Response_v2.0
                    </div>
                </div> */}
            </div>
        </section>
    )
}

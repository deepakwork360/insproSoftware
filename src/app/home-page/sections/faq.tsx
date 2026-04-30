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
        <div className={`group border-b border-border/40 transition-all duration-500 ${isOpen ? "bg-primary/5" : "hover:bg-primary/[0.02]"}`}>
            <button 
                onClick={toggle}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-all"
            >
                <div className="flex items-center gap-6">
                    <span className="font-mono text-[10px] text-primary/40 group-hover:text-primary transition-colors">
                        [Q.{index + 1 < 10 ? `0${index + 1}` : index + 1}]
                    </span>
                    <h3 className="text-lg md:text-xl font-playfair font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                        {que}
                    </h3>
                </div>
                <div className={`p-2 rounded-none border transition-all duration-500 ${isOpen ? "bg-primary border-primary text-white rotate-180" : "bg-transparent border-border/40 text-primary"}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
            </button>
            
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-6 md:px-8 pb-8 flex gap-6">
                    <div className="w-px h-auto bg-primary/20 ml-[1.1rem]" />
                    <p className="text-base md:text-lg text-foreground/50 font-poppins font-light leading-relaxed max-w-4xl">
                        {ans}
                    </p>
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-3">
                                <div className="w-8 h-px bg-primary" />
                                <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-mono font-bold">Support.Center</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-playfair font-medium text-foreground leading-[1.1]">
                                Frequently Asked <br /><span className="italic text-primary">Questions</span>
                            </h2>
                        </div>
                        <p className="text-lg text-foreground/60 font-poppins font-light leading-relaxed max-w-xl">
                            Find answers to common queries about our processes, technologies, and specialized services.
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
                </div>

                {/* Accordion List */}
                <div className="border-t border-border/40">
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

                {/* Technical Label */}
            </div>
        </section>
    )
}

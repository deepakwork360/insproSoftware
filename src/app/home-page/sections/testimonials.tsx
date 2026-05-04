"use client"

import TestimonialCarousel, { Testimonial } from "@/components/Testimonials/testimonials";

const testimonialData: Testimonial[] = [
    {
        image: "/testimonials/test1.png",
        name: "David Lee",
        position: "CEO of QuickFinder",
        rating: 5,
        description: "Insprosoftware delivered an exceptional e-commerce platform that significantly boosted our sales. The team’s attention to detail and technical expertise are top-notch.",
        signature: "David Lee",
    },
    {
        image: "/testimonials/test2.png",
        name: "Alice Martin",
        position: "Marketing Director at Globex Corp",
        rating: 5,
        description: "Their team transformed our outdated website into a modern, user-friendly platform. The results were immediate, with a 40% increase in user engagement.",
        signature: "Alice Martin",
    },
    {
        image: "/testimonials/test1.png",
        name: "Michael Chen",
        position: "CTO of TechSolutions Ltd",
        rating: 5,
        description: "Insprosoftware has been instrumental in our digital transformation. Their custom software solutions have optimized our workflow and improved efficiency.",
        signature: "Michael Chen",
    },
    {
        image: "/testimonials/test2.png",
        name: "Sarah Wilson",
        position: "Operations Manager at HealthPlus",
        rating: 5,
        description: "The mobile app developed by Insprosoftware is world-class. It’s robust, scalable, and our users love the intuitive interface.",
        signature: "Sarah Wilson",
    },
    {
        image: "/testimonials/test1.png",
        name: "James Rodriguez",
        position: "Founder of Startup X",
        rating: 5,
        description: "Working with Insprosoftware was a game-changer for our startup. Their ability to understand our vision and execute it flawlessly was truly impressive.",
        signature: "James Rodriguez",
    },
    {
        image: "/testimonials/test2.png",
        name: "Emily Carter",
        position: "Lead Developer at Innovate Inc",
        rating: 5,
        description: "The Insprosoftware team is highly professional and efficient. They delivered a complex project ahead of schedule with exceptional quality.",
        signature: "Emily Carter",
    }
];

export default function Testimonials() {
    return (
        <section className="bg-background py-10 px-6 md:px-12 lg:px-24 transition-colors duration-300 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-12 lg:space-y-16">

                {/* Header Section */}
                <div className="space-y-6">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-3">
                            <div className="w-8 h-px bg-primary" />
                            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-mono font-bold">Client Feedback</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-playfair font-medium text-foreground leading-[1.1]">
                            Trust Built on <span className="italic text-primary">Excellence</span>
                        </h2>
                    </div>
                    <p className="text-lg md:text-xl text-foreground/70 font-poppins font-light leading-relaxed max-w-5xl">
                        Discover what industry leaders say about their partnership with Insprosoftware.
                        We pride ourselves on delivering consistent, high-quality results.
                    </p>
                </div>


                {/* Testimonial Carousel */}
                <div className="w-full">
                    <TestimonialCarousel items={testimonialData} />
                </div>
            </div>
        </section>
    );
}
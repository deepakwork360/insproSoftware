import TestimonialCarousel, { Testimonial } from "@/components/Testimonials/testimonials";

interface TestimonialsProps {
    data?: Testimonial[];
}

const fallbackTestimonials: Testimonial[] = [
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
    }
];

export default function Testimonials({ data }: TestimonialsProps) {
    const displayTestimonials = data && data.length > 0 ? data : fallbackTestimonials;
    return (
        <section className="bg-background py-10 px-6 md:px-12 lg:px-24 transition-colors duration-300 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-1 md:space-y-1">

                {/* Header Section */}
                <div className="space-y-4">
                    <div className="space-y-4">
                        
                        <h2 className="text-3xl md:text-5xl font-playfair font-medium text-foreground leading-[1.1]">
                            Trust Built on <span className="italic text-primary">Excellence</span>
                        </h2>
                    </div>
                    <p className="text-lg md:text-xl text-foreground/70 font-poppins font-light leading-relaxed max-w-5xl">
                        Discover what industry leaders say about their partnership with Insprosoftware.
                        We pride ourselves on delivering consistent, high-quality results.
                    </p>
                </div>


                <div className="w-full">
                    <TestimonialCarousel items={displayTestimonials} />
                </div>
            </div>
        </section>
    );
}
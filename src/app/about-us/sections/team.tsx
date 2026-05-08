import TeamProfileCard from "@/components/ui/TeamProfileCard";

interface TeamProps {
    data?: {
        name: string;
        role: string;
        location: string;
        imageUrl: string;
    }[];
}

export default function Team({ data }: TeamProps) {
    // Default Fallback Data if Sanity is empty
    const fallbackMembers = [
        {
            name: "Toshika Kosako",
            role: "Co-Founder & CEO",
            location: "United States",
            imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
        },
        {
            name: "Agustin Kryger",
            role: "Co-Founder & Managing Director",
            location: "United States",
            imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
        },
        {
            name: "Samhita Bhatkar",
            role: "Director - Business Development",
            location: "United States",
            imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
        },
        {
            name: "Isaac Fayemi",
            role: "Creative Developer",
            location: "United States",
            imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
        }
    ];

    const displayMembers = data && data.length > 0 ? data : fallbackMembers;
    const teamCount = displayMembers.length;

    return (
        <section className="py-10 px-6 md:px-12 lg:px-24 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
                    <div className="max-w-2xl space-y-4">
                        {/* <div className="inline-flex items-center gap-3">
                            <div className="w-8 h-px bg-primary" />
                            <span className="text-primary text-base font-playfair font-medium">Our Architects</span>
                        </div> */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium text-foreground leading-tight">
                            Meet our <span className="italic text-primary">Team</span>
                        </h2>
                        <p className="text-base md:text-lg text-foreground/60 font-poppins leading-relaxed">
                            Driven by the top 1% of software engineering talent in India, Insprosoftware delivers robust and scalable IT solutions worldwide. From custom software and web development to mobile apps and cloud solutions.
                        </p>
                    </div>

                    <div className="hidden lg:block text-right">
                        <div className="text-sm font-playfair text-primary font-medium mb-2">Active Personnel</div>
                        <div className="text-4xl font-playfair text-primary">{teamCount.toString().padStart(2, '0')}+</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                    {displayMembers.map((member, index) => (
                        <div key={index} className="animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both" style={{ animationDelay: `${index * 100}ms` }}>
                            <TeamProfileCard {...member} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client"

import Image from "next/image"
import ImageContainer from "@/components/ui/image-container"

const list = [
    { Image: "/experience/1.png" },
    { Image: "/experience/2.png" },
    { Image: "/experience/3.png" },
    { Image: "/experience/4.png" },
    { Image: "/experience/5.png" },
    { Image: "/experience/6.png" },
    { Image: "/experience/1.png" },
    { Image: "/experience/2.png" },
    { Image: "/experience/3.png" },
    { Image: "/experience/4.png" },
    { Image: "/experience/5.png" },
    { Image: "/experience/6.png" },
]

export default function ProfessionalExp() {
    return (
        <section className="bg-background py-10 px-6 md:px-12 lg:px-24 transition-colors duration-300">
            <div className="max-w-7xl mx-auto space-y-12 lg:space-y-20">
                
                {/* Header Section */}
                <div className="space-y-8">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-3">
                            <div className="w-8 h-px bg-primary" />
                            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-mono font-bold">Partnerships</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-playfair font-medium text-foreground leading-[1.1]">
                            Experience <span className="italic text-primary">Professional</span> Excellence
                        </h2>
                    </div>
                    <p className="text-lg md:text-xl text-foreground/70 font-poppins font-light leading-relaxed max-w-5xl">
                        At Insprosoftware, we deliver professional excellence through innovative software solutions. 
                        Partner with a leading software development company in USA to transform your digital presence.
                    </p>
                </div>

                {/* Grid of Partner Logos */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1">
                    {list.map((item, index) => (
                        <ImageContainer 
                            key={index} 
                            id={index + 1} 
                            showBackground={false}
                            className="aspect-square hover:bg-primary/5 transition-colors"
                        >
                            <Image 
                                src={item.Image} 
                                alt={`experience-${index}`} 
                                width={180} 
                                height={180} 
                                className="opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 object-contain brightness-0 dark:invert"
                            />
                        </ImageContainer>
                    ))}
                </div>


            </div>
        </section>
    )
}
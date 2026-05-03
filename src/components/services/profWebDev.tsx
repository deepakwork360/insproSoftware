import Image from "next/image";
import * as Icons from "lucide-react";
import { ProfPoint } from "@/constants/services-data";

interface ProfWebDevProps {
  data: {
    title: string;
    description: string;
    image: string;
    points: ProfPoint[];
  };
}

export default function ProfWebDev({ data }: ProfWebDevProps) {
  // Helper to get Lucide icon from string name
  const getIcon = (name: string) => {
    const IconComponent = (Icons as any)[name];
    return IconComponent ? <IconComponent className="w-6 h-6" /> : <Icons.HelpCircle className="w-6 h-6" />;
  };

  return (
    <section className="px-6 md:px-12 lg:px-24 bg-[var(--background)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 space-y-6">
          <div className="inline-flex items-center gap-3">
            <div className="w-8 h-px bg-[var(--primary)]" />
            <span className="text-[var(--primary)] text-[10px] uppercase tracking-[0.4em] font-mono font-bold">
              Professional.Excellence
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-medium text-[var(--foreground)] leading-[1.1]">
            {data.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="italic text-[var(--primary)]">{data.title.split(' ').slice(-1)}</span>
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] font-light leading-relaxed max-w-2xl">
            {data.description}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Interactive Points */}
          <div className="space-y-8 relative">
            {/* Vertical Decorative Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--primary)]/40 via-[var(--primary)]/5 to-transparent hidden md:block" />

            {data.points.map((point, index) => (
              <div key={index} className="group flex gap-6 relative">
                {/* Icon Hub */}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-none border border-[var(--border)] bg-[var(--background)] flex items-center justify-center text-[var(--primary)] transition-all duration-500 group-hover:bg-[var(--primary)] group-hover:text-white group-hover:border-[var(--primary)]">
                    {getIcon(point.iconName)}
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-2 pt-1">
                  <h3 className="text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)] leading-relaxed max-w-md text-sm md:text-base font-light">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Premium Image Container */}
          <div className="relative aspect-square md:aspect-video lg:aspect-square">
            {/* HUD Decorative Frame */}
            <div className="absolute -inset-4 border border-[var(--primary)]/10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[var(--primary)] z-20" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[var(--primary)] z-20" />
            
            <div className="relative w-full h-full overflow-hidden border border-[var(--border)] shadow-2xl">
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Scan Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary)]/5 to-transparent h-1/4 w-full animate-scan pointer-events-none" />
              <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
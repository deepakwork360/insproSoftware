import * as Icons from "lucide-react";
import { TechCategory } from "@/constants/services-data";

interface CustomWebDevProps {
  data: {
    title: string;
    description: string;
    categories: TechCategory[];
  };
}

export default function CustomWebDev({ data }: CustomWebDevProps) {
  // Helper to get Lucide icon from string name
  const getIcon = (name: string) => {
    const IconComponent = (Icons as any)[name];
    return IconComponent ? <IconComponent className="w-8 h-8" /> : <Icons.HelpCircle className="w-8 h-8" />;
  };

  return (
    <section className="py-10 px-6 md:px-12 lg:px-24 bg-[var(--background)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 space-y-6">
          <div className="inline-flex items-center gap-3">
            <div className="w-8 h-px bg-[var(--primary)]" />
            <span className="text-[var(--primary)] text-[10px] uppercase tracking-[0.4em] font-mono font-bold">
              Technology.Stack
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-[var(--foreground)] leading-tight text-left">
            {data.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="italic text-[var(--primary)] text-5xl md:text-6xl">{data.title.split(' ').slice(-1)}</span>
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] font-light leading-relaxed max-w-2xl text-left">
            {data.description}
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.categories.map((tech, index) => (
            <div
              key={index}
              className="group relative p-8 border-2 border-blue-500/10 dark:border-[var(--border)] bg-[var(--background)] transition-all duration-300 hover:border-blue-600 dark:hover:border-[var(--primary)] hover:shadow-xl hover:shadow-blue-500/5 dark:hover:shadow-[var(--primary)]/5"
            >
              {/* Category Icon & Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 border border-blue-500/20 dark:border-[var(--border)] flex items-center justify-center text-[var(--primary)] bg-blue-50/50 dark:bg-[var(--primary)]/5 transition-all duration-500 group-hover:bg-[var(--primary)] group-hover:text-white group-hover:border-[var(--primary)]">
                  {getIcon(tech.iconName)}
                </div>
                <h3 className="text-xl font-bold text-[var(--foreground)] uppercase tracking-tight">
                  {tech.category}
                </h3>
              </div>

              <p className="text-[var(--muted-foreground)] text-sm mb-6 leading-relaxed">
                {tech.intro}
              </p>

              {/* Items List */}
              <div className="space-y-4">
                {tech.items.map((item, idx) => (
                  <div key={idx} className="group/item relative">
                    <div className="flex items-start justify-between">
                      <span className="text-[var(--foreground)] font-bold text-sm group-hover/item:text-[var(--primary)] transition-colors">
                        {item.name}
                      </span>
                    </div>
                    <p className="text-[var(--muted-foreground)] text-xs mt-1 font-light italic">
                      {item.desc}
                    </p>
                    <div className="absolute -left-4 top-1.5 w-1.5 h-1.5 bg-[var(--primary)] scale-0 group-hover/item:scale-100 transition-transform" />
                  </div>
                ))}
              </div>

              {/* Corner Decorative Accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-blue-500/10 dark:border-[var(--border)] group-hover:border-[var(--primary)] transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
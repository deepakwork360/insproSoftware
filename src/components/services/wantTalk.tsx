import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WantTalk() {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-[var(--background)] border-y border-[var(--border)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"></span>
            </span>
            <span className="text-[10px] font-mono text-[var(--primary)] uppercase tracking-[0.4em] font-bold">
              Ready.To.Start
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-serif font-medium text-[var(--foreground)] leading-tight max-w-2xl">
            Want to accelerate <span className="italic text-[var(--primary)]">software development</span> at your company?
          </h2>
        </div>

        {/* Right Action */}
        <div className="flex-shrink-0">
          <Link href="/contact" className="group relative inline-flex items-center gap-4 px-8 py-4 bg-[var(--primary)] text-white text-sm font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:bg-black hover:shadow-2xl hover:shadow-[var(--primary)]/20 overflow-hidden">
            {/* Button Glint Effect */}
            <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-1000 ease-in-out" />
            
            <span className="relative z-10">Let's Talk</span>
            <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
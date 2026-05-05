"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";

interface MegaMenuProps {
  label: string;
  sections?: {
    title: string;
    icon?: string;
    links: { label: string; href: string }[];
  }[];
}

const defaultSections = [
  {
    title: "Web Solutions",
    links: [
      { label: "ASP.NET Solutions", href: "/services/asp-net" },
      { label: "Python Web Solutions", href: "/services/python-web-solutions" },
      { label: "PHP Development", href: "/services/php-development" },
      { label: "Angular Development", href: "/services/angular-web-development" },
      { label: "Node.js Development", href: "/services/node-js-development" },
    ]
  },
  {
    title: "Mobile Apps",
    links: [
      { label: "Android App Development", href: "/services/android-app-development" },
      { label: "iOS App Development", href: "/services/ios-app-development" },
      { label: "React Native Apps", href: "/services/react-native-app-development" },
      { label: "Flutter Development", href: "/services/flutter-app-development" },
    ]
  },
  {
    title: "Design & Identity",
    links: [
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "Graphic Design", href: "/services/graphic-design" },
      { label: "Brand Identity", href: "/services/brand-identity-and-logo-design" },
      { label: "Design Assets", href: "/services/product-design-assets" },
    ]
  },
  {
    title: "Digital Strategy",
    links: [
      { label: "Marketing Strategy", href: "/services/marketing-design" },
      { label: "SEO Services", href: "/services/seo-services" },
      { label: "Social Media", href: "/services/social-media-marketing" },
      { label: "Email Marketing", href: "/services/email-marketing" },
    ]
  }
];

export function MegaMenu({ label = "Services", sections = defaultSections }: MegaMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150); // Small buffer to prevent flickering
  };

  return (
    <div 
      className="relative h-full flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        type="button"
        className="flex items-center gap-1.5 hover:text-primary transition-colors h-full group font-semibold text-sm"
      >
        {label}
        <Icons.ChevronDown 
          className={`w-3.5 h-3.5 transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="fixed left-0 top-[56px] w-screen h-[70vh] bg-background/95 backdrop-blur-xl border-y border-border/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] z-[999] overflow-hidden"
          >
            {/* Invisible bridge to prevent gap flickering */}
            <div className="absolute -top-4 left-0 w-full h-4 bg-transparent" />
            
            {/* Top Scan Line Detail */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="flex h-full w-full max-w-[1600px] mx-auto">
              {/* Left Side: Services Grid */}
              <div className="flex-1 p-6 lg:p-10 grid grid-cols-2 xl:grid-cols-4 gap-x-6 lg:gap-x-10 gap-y-6 lg:gap-y-8 overflow-y-auto scrollbar-hide">
                {sections?.map((category, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-6 bg-primary/20 rounded-full" />
                      <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold text-primary">
                        {category.title}
                      </h3>
                    </div>
                    <ul className="space-y-1.5">
                      {category.links.map((link, lIdx) => (
                        <li key={lIdx}>
                          <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="group/link flex items-center gap-2 text-[14px] text-foreground/60 hover:text-foreground transition-all duration-300"
                          >
                            <Icons.ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-primary" />
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Right Side: Visual Section */}
              <div className="w-[400px] relative overflow-hidden bg-muted/30 border-l border-border/40">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/banner/brand.jpg"
                    alt="Our Expertise"
                    fill
                    className="object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute inset-0 bg-primary/10" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-10 space-y-6 z-10">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-2 py-1 bg-primary/10 border border-primary/20 rounded text-[9px] font-mono uppercase tracking-widest text-primary">
                      <span className="w-1 h-1 bg-primary animate-pulse rounded-full" />
                      Digital Transformation
                    </div>
                    <h4 className="text-2xl font-playfair font-medium text-foreground">
                      Ready to <span className="italic text-primary">Innovate?</span>
                    </h4>
                    <p className="text-sm text-foreground/50 font-poppins font-light leading-relaxed">
                      Transform your business with our cutting-edge technology solutions. Let's build something extraordinary together.
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-4 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-foreground group/cta"
                    onClick={() => setIsOpen(false)}
                  >
                    Start Your Project
                    <div className="h-px w-8 bg-primary group-hover/cta:w-16 transition-all duration-500" />
                  </Link>
                </div>

                {/* HUD Corner Accents */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-primary/20" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-primary/20" />
              </div>
            </div>

            {/* Bottom HUD Metadata */}
            <div className="px-10 py-4 border-t border-border/40 bg-muted/10 flex justify-between items-center text-[9px] font-mono uppercase tracking-[0.3em] text-foreground/30">
              <div className="flex gap-8">
                <span>Ref: Inspro_Services_v2.6</span>
                <span>Layer: Navigation_Core</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                System Optimized
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

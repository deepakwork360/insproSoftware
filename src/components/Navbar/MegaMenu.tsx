"use client";

import React, { useState } from "react";
import Link from "next/link";
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

export function MegaMenu({ label, sections }: MegaMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to get icon component from string
  const getIcon = (name?: string) => {
    if (!name) return <Icons.Zap className="w-5 h-5 text-blue-500" />;
    const IconComponent = (Icons as any)[name];
    return IconComponent ? <IconComponent className="w-5 h-5 text-blue-500" /> : <Icons.Zap className="w-5 h-5 text-blue-500" />;
  };

  return (
    <div 
      className="relative h-full flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        type="button"
        className="flex items-center gap-1 hover:text-blue-500 transition-colors h-full group"
      >
        {label}
        <Icons.ChevronDown 
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-1/2 -translate-x-1/2 top-full w-[900px] bg-background border border-border shadow-2xl rounded-2xl overflow-hidden z-[999] p-8 grid grid-cols-4 gap-8"
          >
            {sections?.map((category, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center gap-2 border-b border-border pb-2">
                  {getIcon(category.icon)}
                  <h3 className="font-bold text-sm tracking-wide uppercase text-muted-foreground">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link 
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-[15px] font-medium text-foreground/70 hover:text-blue-500 hover:translate-x-1 transition-all inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* Bottom Banner/CTA in Mega Menu */}
            <div className="col-span-4 mt-4 p-4 bg-muted/50 rounded-xl flex items-center justify-between border border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Icons.Zap className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="font-bold text-sm">Explore our specialized solutions</p>
                  <p className="text-xs text-muted-foreground">Tailored strategies for your business needs.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

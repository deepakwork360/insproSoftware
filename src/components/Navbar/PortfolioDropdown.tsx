"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe, Smartphone } from "lucide-react";

export function PortfolioDropdown() {
  const [isOpen, setIsOpen] = useState(false);

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
        Portfolio
        <ChevronDown 
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
            className="absolute left-0 top-full w-[220px] bg-background border border-border shadow-2xl rounded-xl overflow-hidden z-[999] p-2"
          >
            <div className="flex flex-col gap-1">
              <Link 
                href="/web-portfolio"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group/link"
              >
                <div className="w-8 h-8 rounded-md bg-blue-500/10 flex items-center justify-center group-hover/link:bg-blue-500/20 transition-colors">
                  <Globe className="w-4 h-4 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm font-bold">Web Portfolio</p>
                  <p className="text-[10px] text-muted-foreground">Our web projects</p>
                </div>
              </Link>
              
              <Link 
                href="/mobile-portfolio"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group/link"
              >
                <div className="w-8 h-8 rounded-md bg-purple-500/10 flex items-center justify-center group-hover/link:bg-purple-500/20 transition-colors">
                  <Smartphone className="w-4 h-4 text-purple-500" />
                </div>
                <div>
                  <p className="text-sm font-bold">Mobile Portfolio</p>
                  <p className="text-[10px] text-muted-foreground">Our mobile apps</p>
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

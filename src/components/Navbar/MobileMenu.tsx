"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronRight,
  Home,
  Info,
  Briefcase,
  Layers,
  PenTool,
  MessageSquare,
  ChevronDown,
  Code,
  Smartphone,
  Palette,
  Megaphone,
  ArrowRight
} from "lucide-react";

const mobileLinks = [
  { name: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
  { name: "About Us", href: "/about-us", icon: <Info className="w-5 h-5" /> },
  {
    name: "Services",
    type: "dropdown",
    icon: <Layers className="w-5 h-5" />,
    categories: [
      {
        name: "Web Development",
        icon: <Code className="w-4 h-4" />,
        links: [
          { name: "ASP.NET Solutions", href: "/services/asp-net" },
          { name: "Python Web Solutions", href: "/services/python-web-solutions" },
          { name: "PHP Development", href: "/services/php-development" },
          { name: "Angular Development", href: "/services/angular-web-development" },
          { name: "Node.js Development", href: "/services/node-js-development" },
          { name: "SaaS Development", href: "/services/saas-web-development" },
          { name: "CMS & WordPress", href: "/services/cms-wordpress-wix" },
        ]
      },
      {
        name: "Mobile Apps",
        icon: <Smartphone className="w-4 h-4" />,
        links: [
          { name: "Mobile App Services", href: "/services/mobile-app-development" },
          { name: "Android Apps", href: "/services/android-app-development" },
          { name: "iOS Apps", href: "/services/ios-app-development" },
          { name: "React Native", href: "/services/react-native-app-development" },
          { name: "Flutter Apps", href: "/services/flutter-app-development" },
          { name: "Kotlin Android", href: "/services/kotlin-android-development" },
        ]
      },
      {
        name: "Design",
        icon: <Palette className="w-4 h-4" />,
        links: [
          { name: "UI/UX Design", href: "/services/ui-ux-design" },
          { name: "Graphic Design", href: "/services/graphic-design" },
          { name: "Brand Identity", href: "/services/brand-identity-and-logo-design" },
          { name: "Design Assets", href: "/services/product-design-assets" },
          { name: "Brochure Design", href: "/services/brochure-design" },
        ]
      },
      {
        name: "Marketing",
        icon: <Megaphone className="w-4 h-4" />,
        links: [
          { name: "Marketing Strategy", href: "/services/marketing-design" },
          { name: "SEO Services", href: "/services/seo-services" },
          { name: "PPC Management", href: "/services/ppc-services" },
          { name: "Social Media", href: "/services/social-media-marketing" },
          { name: "Email Marketing", href: "/services/email-marketing" },
        ]
      }
    ]
  },
  {
    name: "Portfolio",
    type: "dropdown",
    icon: <Briefcase className="w-5 h-5" />,
    categories: [
      {
        name: "Our Portfolios",
        icon: <Briefcase className="w-4 h-4" />,
        links: [
          { name: "Web Portfolio", href: "/web-portfolio" },
          { name: "Mobile Portfolio", href: "/mobile-portfolio" },
        ]
      }
    ]
  },
  { name: "Blog", href: "/blog", icon: <PenTool className="w-5 h-5" /> },
  { name: "Contact", href: "/contact", icon: <MessageSquare className="w-5 h-5" /> },
];

export function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeLevel1, setActiveLevel1] = useState<string | null>(null);
  const [activeLevel2, setActiveLevel2] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setActiveLevel1(null);
      setActiveLevel2(null);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted) return null;

  const menuContent = (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-[99999] md:hidden">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 dark:bg-black/90 backdrop-blur-md dark:backdrop-blur-2xl"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="absolute right-0 top-0 bottom-0 w-[90%] max-w-[450px] bg-background border-l border-border flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 flex items-center justify-between border-b border-border bg-background">
              <div className="flex flex-col">
                <span className="font-playfair font-bold text-2xl text-foreground tracking-tight">Navigation</span>
                <span className="text-[10px] font-mono text-primary uppercase tracking-widest mt-1">Innovation Hub</span>
              </div>
              <button
                onClick={onClose}
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors text-foreground border border-border"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links Container */}
            <div className="flex-1 overflow-y-auto py-6 px-4 space-y-3 bg-background">
              {mobileLinks.map((link, idx) => (
                <div key={idx} className="w-full">
                  {link.type === "dropdown" ? (
                    <div className="space-y-2">
                      <button
                        onClick={() => setActiveLevel1(activeLevel1 === link.name ? null : link.name)}
                        className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all border ${activeLevel1 === link.name ? "bg-primary/5 border-primary/20 shadow-sm" : "bg-muted/50 border-transparent"}`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${activeLevel1 === link.name ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground border border-border"}`}>
                            {link.icon}
                          </div>
                          <span className={`font-bold text-lg ${activeLevel1 === link.name ? "text-primary" : "text-foreground/80"}`}>{link.name}</span>
                        </div>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeLevel1 === link.name ? "rotate-180 text-primary" : "text-muted-foreground"}`} />
                      </button>

                      <AnimatePresence>
                        {activeLevel1 === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden space-y-2 ml-4 border-l border-border pl-2"
                          >
                            {link.categories?.map((category, cIdx) => (
                              <div key={cIdx} className="space-y-1">
                                <button
                                  onClick={() => setActiveLevel2(activeLevel2 === category.name ? null : category.name)}
                                  className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${activeLevel2 === category.name ? "bg-primary/10 text-primary" : "text-foreground/60 hover:bg-muted"}`}
                                >
                                  <div className="flex items-center gap-3">
                                    <div className={`transition-colors ${activeLevel2 === category.name ? "text-primary" : "text-muted-foreground"}`}>
                                      {category.icon}
                                    </div>
                                    <span className="font-semibold text-sm">{category.name}</span>
                                  </div>
                                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeLevel2 === category.name ? "rotate-180 text-primary" : "text-muted-foreground"}`} />
                                </button>

                                <AnimatePresence>
                                  {activeLevel2 === category.name && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      className="overflow-hidden bg-muted/40 rounded-xl ml-4"
                                    >
                                      <div className="py-2 px-2 space-y-1">
                                        {category.links.map((sub, sIdx) => (
                                          <Link
                                            key={sIdx}
                                            href={sub.href}
                                            onClick={onClose}
                                            className="flex items-center justify-between p-4 rounded-xl text-foreground/50 hover:text-primary hover:bg-background transition-all text-sm font-medium"
                                          >
                                            {sub.name}
                                            <ChevronRight className="w-3 h-3 text-muted-foreground/30" />
                                          </Link>
                                        ))}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href!}
                      onClick={onClose}
                      className="w-full flex items-center gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-all group border border-transparent hover:border-border"
                    >
                      <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                        {link.icon}
                      </div>
                      <span className="font-bold text-foreground/80 group-hover:text-foreground text-lg">{link.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-8 border-t border-border bg-muted/30">
              <Link 
                href="/contact"
                onClick={onClose}
                className="group relative inline-flex w-full items-center justify-center gap-6 px-8 py-5 bg-primary text-primary-foreground text-sm font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:bg-black hover:shadow-2xl hover:shadow-primary/20 overflow-hidden"
              >
                {/* Button Glint Effect */}
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-1000 ease-in-out" />
                
                <span className="relative z-10">Initialize Inquiry</span>
                <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
              </Link>
              <div className="mt-6 flex flex-col items-center gap-2">
                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.4em] font-mono font-bold">
                  Insprosoftware HUD
                </p>
                <div className="flex items-center gap-4 text-[8px] text-muted-foreground/40 font-mono tracking-widest uppercase">
                  <span>Version 1.2</span>
                  <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
                  <span>Adaptive System</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(menuContent, document.body);
}

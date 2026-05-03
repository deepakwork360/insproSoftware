"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  Code, 
  Smartphone, 
  Palette, 
  Megaphone, 
  Globe, 
  Cpu, 
  Zap,
  Layout,
  Search,
  Mail,
  Users
} from "lucide-react";

const serviceCategories = [
  {
    title: "Web & Software",
    icon: <Code className="w-5 h-5 text-blue-500" />,
    links: [
      { name: "ASP.NET Solutions", href: "/services/asp-net" },
      { name: "Python Web Solutions", href: "/services/python-web-solutions" },
      { name: "PHP Development", href: "/services/php-development" },
      { name: "Angular Development", href: "/services/angular-web-development" },
      { name: "Node.js Development", href: "/services/node-js-development" },
      { name: "SaaS Development", href: "/services/saas-web-development" },
      { name: "CMS & WordPress", href: "/services/cms-wordpress-wix" },
      { name: "Custom Software", href: "/services/software-development" },
    ]
  },
  {
    title: "Mobile App Development",
    icon: <Smartphone className="w-5 h-5 text-purple-500" />,
    links: [
      { name: "Mobile App Services", href: "/services/mobile-app-development" },
      { name: "Android Apps", href: "/services/android-app-development" },
      { name: "iOS Apps", href: "/services/ios-app-development" },
      { name: "IoT Solutions", href: "/services/iot-app-development" },
      { name: "Wearable Tech", href: "/services/wearable-development" },
      { name: "React Native", href: "/services/react-native-app-development" },
      { name: "Flutter Apps", href: "/services/flutter-app-development" },
      { name: "Kotlin Android", href: "/services/kotlin-android-development" },
    ]
  },
  {
    title: "Design & Branding",
    icon: <Palette className="w-5 h-5 text-pink-500" />,
    links: [
      { name: "UI/UX Design", href: "/services/ui-ux-design" },
      { name: "Graphic Design", href: "/services/graphic-design" },
      { name: "Brand Identity", href: "/services/brand-identity-and-logo-design" },
      { name: "Design Assets", href: "/services/product-design-assets" },
      { name: "Brochure Design", href: "/services/brochure-design" },
      { name: "Motion & Interaction", href: "/services/motion-and-interaction" },
    ]
  },
  {
    title: "Digital Marketing",
    icon: <Megaphone className="w-5 h-5 text-orange-500" />,
    links: [
      { name: "Marketing Strategy", href: "/services/marketing-design" },
      { name: "SEO Services", href: "/services/seo-services" },
      { name: "Local SEO", href: "/services/local-seo-services" },
      { name: "PPC Management", href: "/services/ppc-services" },
      { name: "Social Media", href: "/services/social-media-marketing" },
      { name: "Email Marketing", href: "/services/email-marketing" },
      { name: "Influencer/Affiliate", href: "/services/influencer-and-affiliated-marketing" },
    ]
  }
];

export function MegaMenu() {
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
        Services
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
            className="absolute left-1/2 -translate-x-1/2 top-full w-[900px] bg-background border border-border shadow-2xl rounded-2xl overflow-hidden z-[999] p-8 grid grid-cols-4 gap-8"
          >
            {serviceCategories.map((category, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center gap-2 border-b border-border pb-2">
                  {category.icon}
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
                        {link.name}
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
                  <Zap className="w-5 h-5 text-blue-500" />
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

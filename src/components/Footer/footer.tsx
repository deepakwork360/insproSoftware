"use client"

import Image from "next/image";
import Link from "next/link";
import { Globe, ArrowUpRight, Mail } from "lucide-react";

// Custom SVG Icons for Socials to avoid version issues
const FacebookIcon = ({ size = 18 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);
const InstagramIcon = ({ size = 18 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
);
const TwitterIcon = ({ size = 18 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
);
const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
);

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-background border-t border-border/10 pt-20 pb-10 px-6 md:px-12 lg:px-24 relative overflow-hidden">
            {/* Background HUD Detail */}
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none opacity-50" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">

                    {/* Brand Section */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="flex items-center gap-3 group cursor-pointer" onClick={scrollToTop}>
                            <div className="relative w-10 h-10">
                                <Image
                                    src="/home/logo1.png"
                                    alt="Insprosoftware Logo"
                                    fill
                                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <span className="text-xl font-playfair font-bold text-foreground tracking-tight">Insprosoftware</span>
                        </div>

                        <p className="text-sm text-foreground/50 font-poppins font-light leading-relaxed max-w-sm">
                            Delivering precision-engineered IT solutions for global leaders.
                            From custom software to digital transformation, we build the future of technology.
                        </p>

                        <div className="flex items-center gap-4">
                            {[
                                { Icon: FacebookIcon, href: "https://www.facebook.com/people/Inspro-software/61575132597560/" },
                                { Icon: InstagramIcon, href: "https://www.instagram.com/insprosoftware/?hl=en" },
                                { Icon: TwitterIcon, href: "https://x.com/InsproSoftware" },
                                { Icon: LinkedinIcon, href: "https://www.linkedin.com/company/inspro-software" }
                            ].map((social, idx) => (
                                <Link
                                    key={idx}
                                    href={social.href}
                                    className="w-10 h-10 border border-border/20 flex items-center justify-center text-foreground/40 hover:text-primary hover:border-primary/40 transition-all duration-300 group/icon"
                                >
                                    <social.Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-8">

                        {/* Company Links */}
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h4 className="text-[10px] font-mono text-primary uppercase tracking-[0.4em] font-bold">Organization</h4>
                                <div className="h-px w-8 bg-primary/30" />
                            </div>
                            <ul className="space-y-3">
                                {[
                                    { name: "Career", href: "/career" },
                                    { name: "Contact Us", href: "/contact" },
                                    { name: "Privacy Policy", href: "/privacy" },
                                    { name: "Blog", href: "/blog" },
                                    { name: "SiteMap", href: "/sitemap" }
                                ].map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-sm text-foreground/40 hover:text-foreground hover:translate-x-1 inline-flex items-center gap-1 transition-all group">
                                            {link.name}
                                            <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services Column 1 */}
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h4 className="text-[10px] font-mono text-primary uppercase tracking-[0.4em] font-bold">Solutions_01</h4>
                                <div className="h-px w-8 bg-primary/30" />
                            </div>
                            <ul className="space-y-3">
                                {[
                                    "Android App Dev",
                                    "iPhone App Dev",
                                    "iOT App Development",
                                    "React Native Dev",
                                    "Graphic Design",
                                    "Flutter App Dev"
                                ].map((service) => (
                                    <li key={service}>
                                        <Link href="#" className="text-sm text-foreground/40 hover:text-foreground transition-colors">
                                            {service}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services Column 2 */}
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h4 className="text-[10px] font-mono text-primary uppercase tracking-[0.4em] font-bold">Solutions_02</h4>
                                <div className="h-px w-8 bg-primary/30" />
                            </div>
                            <ul className="space-y-3">
                                {[
                                    "Node JS Development",
                                    "PWA Development",
                                    "Python Web Dev",
                                    "Php Development",
                                    "SaaS Application",
                                    "Motion & Interaction"
                                ].map((service) => (
                                    <li key={service}>
                                        <Link href="#" className="text-sm text-foreground/40 hover:text-foreground transition-colors">
                                            {service}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Footer Bottom Bar */}
                <div className="pt-10 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-6 text-[9px] font-mono text-foreground/20 uppercase tracking-widest">
                        <span>© 2024 Insprosoftware</span>
                        <span className="hidden md:block">|</span>
                        <span>All Rights Reserved</span>
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Status removed */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
"use client"

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import * as LucideIcons from "lucide-react";

// Custom SVG Icons for Socials to keep the premium look
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

const socialIconMap: Record<string, any> = {
    Facebook: FacebookIcon,
    Instagram: InstagramIcon,
    Twitter: TwitterIcon,
    LinkedIn: LinkedinIcon,
};

interface FooterProps {
    data?: {
        logoText?: string;
        description?: string;
        columns?: {
            title: string;
            links: { label: string; href: string }[];
        }[];
        socialLinks?: {
            platform: string;
            url: string;
            icon?: string;
        }[];
        copyrightText?: string;
    };
}

export default function Footer({ data }: FooterProps) {
    const scrollToTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Default Fallback Data
    const description = data?.description || "Delivering precision-engineered IT solutions for global leaders. From custom software to digital transformation, we build the future of technology.";
    const logoText = data?.logoText || "Insprosoftware";
    const copyrightText = data?.copyrightText || "© 2024 Insprosoftware. All rights reserved.";

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
                                    alt={`${logoText} Logo`}
                                    fill
                                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            <span className="text-xl font-playfair font-bold text-foreground tracking-tight">{logoText}</span>
                        </div>

                        <p className="text-sm text-foreground/50 font-poppins font-light leading-relaxed max-w-sm">
                            {description}
                        </p>

                        <div className="flex items-center gap-4">
                            {data?.socialLinks ? (
                                data.socialLinks.map((social, idx) => {
                                    const CustomIcon = socialIconMap[social.platform];
                                    const LucideIcon = social.icon ? (LucideIcons as any)[social.icon] : null;

                                    return (
                                        <Link
                                            key={idx}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 border border-border/20 flex items-center justify-center text-foreground/40 hover:text-primary hover:border-primary/40 transition-all duration-300 group/icon"
                                        >
                                            {CustomIcon ? (
                                                <CustomIcon size={18} />
                                            ) : LucideIcon ? (
                                                <LucideIcon size={18} />
                                            ) : (
                                                <LucideIcons.Globe size={18} />
                                            )}
                                        </Link>
                                    );
                                })
                            ) : (
                                // Fallback static socials if no data
                                [
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
                                ))
                            )}
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-8">
                        {data?.columns?.map((column, idx) => (
                            <div key={idx} className="space-y-6">
                                <div className="space-y-2">
                                    <h4 className="text-[10px] font-mono text-primary uppercase tracking-[0.4em] font-bold">
                                        {column.title}
                                    </h4>
                                    <div className="h-px w-8 bg-primary/30" />
                                </div>
                                <ul className="space-y-3">
                                    {column.links.map((link, lIdx) => (
                                        <li key={lIdx}>
                                            <Link href={link.href} className="text-sm text-foreground/40 hover:text-foreground hover:translate-x-1 inline-flex items-center gap-1 transition-all group">
                                                {link.label}
                                                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Fallback structure if no columns exist in Sanity */}
                        {!data?.columns && (
                            <div className="text-xs text-foreground/20 italic">
                                Add footer columns in Sanity to see them here.
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer Bottom Bar */}
                <div className="pt-10 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-6 text-[9px] font-mono text-foreground/20 uppercase tracking-widest">
                        <span>{copyrightText}</span>
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Status removed */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
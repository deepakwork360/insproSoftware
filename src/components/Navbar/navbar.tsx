"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { ThemeToggle } from "../ThemeToggle";

import { useTheme } from "next-themes";

import { MegaMenu } from "./MegaMenu";
import { PortfolioDropdown } from "./PortfolioDropdown";
import { MobileMenu } from "./MobileMenu";
import Image from "next/image";

export default function Navbar({ navData, settings }: { navData?: any[], settings?: any }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isLightMode = mounted && resolvedTheme === "light";

    return (
        <header 
            className={`sticky top-0 z-50 transition-all duration-500 ease-in-out ${
                isScrolled 
                ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm is-scrolled" 
                : `${isLightMode ? "bg-black md:bg-transparent" : "bg-transparent"} border-transparent`
            }`}
        >
            <div className="max-w-7xl mx-auto px-4">
                <nav className={`flex items-center justify-between h-14 transition-none ${
                    isScrolled ? "text-foreground" : "text-white"
                }`}>
                    {/* left - logo */}
                    <div className="flex gap-6">
                        <Link href="/" className="font-playfair font-bold text-xl tracking-tight relative block w-[160px] h-[40px]">
                            {/* Default Logos */}
                            <Image src="/logo/blue-black.png" alt="Logo" width={160} height={40} className="logo-img light-only default-only" priority />
                            <Image src="/logo/green-white3.png" alt="Logo" width={160} height={40} className="logo-img dark-only default-only" priority />

                            {/* Sapphire Gold */}
                            <Image src="/logo/golden-black3.png" alt="Logo" width={160} height={40} className="logo-img light-only sapphire-only" priority />
                            <Image src="/logo/golden-white3.png" alt="Logo" width={160} height={40} className="logo-img dark-only sapphire-only" priority />

                            {/* Emerald Night */}
                            <Image src="/logo/green-black.png" alt="Logo" width={160} height={40} className="logo-img light-only emerald-only" priority />
                            <Image src="/logo/green-white3.png" alt="Logo" width={160} height={40} className="logo-img dark-only emerald-only" priority />

                            {/* Royal Amethyst */}
                            <Image src="/logo/purple-black.png" alt="Logo" width={160} height={40} className="logo-img light-only purple-only" priority />
                            <Image src="/logo/purple-white3.png" alt="Logo" width={160} height={40} className="logo-img dark-only purple-only" priority />

                            {/* Crimson Slate */}
                            <Image src="/logo/red-black.png" alt="Logo" width={160} height={40} className="logo-img light-only crimson-only" priority />
                            <Image src="/logo/red-white3.png" alt="Logo" width={160} height={40} className="logo-img dark-only crimson-only" priority />

                            {/* Cyber Neon */}
                            <Image src="/logo/blue-black.png" alt="Logo" width={160} height={40} className="logo-img light-only cyber-only" priority />
                            <Image src="/logo/blue-white3.png" alt="Logo" width={160} height={40} className="logo-img dark-only cyber-only" priority />
                        </Link>
                    </div>

                    {/* center or right */}
                    <div className="flex items-center gap-8 font-semibold hidden md:flex">
                        {navData ? (
                            navData.map((link, idx) => {
                                if (link.type === "mega") {
                                    return <MegaMenu key={idx} label={link.label} sections={link.sections} />;
                                }
                                if (link.type === "dropdown") {
                                    return <PortfolioDropdown key={idx} label={link.label} links={link.dropdownLinks} />;
                                }
                                return (
                                    <Link key={idx} href={link.href || "#"} className="hover:text-primary transition-colors">
                                        {link.label}
                                    </Link>
                                );
                            })
                        ) : (
                            <>
                                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                                <Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link>
                                <MegaMenu label="Services" sections={[{ title: "Services", links: [] }]} />
                                <PortfolioDropdown label="Portfolio" links={[]} />
                                <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                                <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
                            </>
                        )}
                    </div>

                    {/* Right Side - Actions & Mobile Menu Button  */}
                    <div className="flex items-center gap-4">
                        {settings?.showThemeToggle !== false && <ThemeToggle />}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu Component */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </header>
    )
}
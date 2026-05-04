"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { ThemeToggle } from "../ThemeToggle";

import { MegaMenu } from "./MegaMenu";
import { PortfolioDropdown } from "./PortfolioDropdown";
import { MobileMenu } from "./MobileMenu";

export default function Navbar({ navData }: { navData?: any[] }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="max-w-7xl mx-auto px-4">
                <nav className="flex items-center justify-between h-14">
                    {/* left - logo */}
                    <div className="flex gap-6">
                        <Link href="/" className="font-playfair font-bold text-xl tracking-tight">Insprosoftware</Link>
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
                                    <Link key={idx} href={link.href || "#"}>
                                        {link.label}
                                    </Link>
                                );
                            })
                        ) : (
                            <>
                                <Link href="/">Home</Link>
                                <Link href="/about-us">About Us</Link>
                                <MegaMenu />
                                <PortfolioDropdown />
                                <Link href="/blog">Blog</Link>
                                <Link href="/contact">Contact Us</Link>
                            </>
                        )}
                    </div>

                    {/* Right Side - Actions & Mobile Menu Button  */}
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
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
import Link from "next/link";
import { Menu } from "lucide-react";
import { ThemeToggle } from "../ThemeToggle";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="max-w-7xl mx-auto px-4">
                <nav className="flex items-center justify-between h-14">
                    {/* left - logo */}
                    <div className="flex gap-6">
                        Logo
                    </div>

                    {/* center or right */}
                    <div className="flex items-center gap-8 font-semibold hidden md:flex">
                        <Link href="#">Home</Link>
                        <Link href="#">About Us</Link>
                        <Link href="#">Services</Link>
                        <Link href="#">Portfolio</Link>
                        <Link href="#">Blog</Link>
                        <Link href="#">Contact Us</Link>
                    </div>

                    {/* Right Side - Actions & Mobile Menu Button  */}
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <button className="md:hidden">
                            <Menu />
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}
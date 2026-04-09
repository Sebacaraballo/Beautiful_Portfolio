import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const NavBar = () => {
        const location = useLocation();
        const prefix = location.pathname === "/" ? "" : "/";
        const[isScrolled, setIsScrolled] = useState(false);
        const[isMenuOpen, setIsMenuOpen] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 10);
            };

            window.addEventListener("scroll", handleScroll);
            handleScroll();
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);
    return (
        <>
            <nav
                className={cn(
                    "fixed w-full z-[60] transition-all duration-300",
                    isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
                )}
            >
                <div className="container flex items-center justify-between pr-15">
                    <a
                        className="text-xl font-bold text-primary flex items-center"
                        href={`${prefix}#hero`}
                    >
                        <span className="relative z-10">
                            <span className="text-glow text-foreground"> Sebastian Caraballo's </span>{" "}
                            Portfolio
                        </span>
                    </a>

                    {/* desktop nav */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={`${prefix}${item.href}`}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="flex items-center">
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* mobile hamburger / close button */}
                    <button
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="md:hidden p-2 text-foreground"
                        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile full-screen overlay — sibling to nav so it isn't clipped by nav's stacking context */}
            <div
                className={cn(
                    "fixed inset-0 bg-background z-[50] flex flex-col items-center justify-center md:hidden",
                    "transition-opacity duration-300",
                    isMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                )}
            >
                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={`${prefix}${item.href}`}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="flex justify-center pt-4">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </>
    );
};
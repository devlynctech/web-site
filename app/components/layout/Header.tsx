"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "../ui/ThemeToggle";
import { useTheme } from "../providers/ThemeProvider";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const { theme } = useTheme();
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`
    fixed top-0 left-0 w-full z-50
    transition-all duration-300
    ${scrolled
                    ? "bg-light dark:bg-dark border-b border-light-border dark:border-dark-muted backdrop-blur"
                    : "bg-transparent"
                }
  `}
        >
            <div className="grid grid-cols-[auto_1fr_auto] items-center w-full py-5">

                <div className="pl-[24px] xl:pl-[60px] flex items-center">
                    <Image
                        src={theme === "dark" ? "/images/logo-dark.png" : "/images/logo-light.png"}
                        alt="Logo"
                        width={200}
                        height={100}
                    />
                </div>

                <nav className="hidden md:flex justify-center items-center gap-8">

                    <Link
                        href="#services"
                        className="text-text-muted dark:text-gray hover:text-foreground transition text-sm"
                    >
                        Services
                    </Link>

                    <Link
                        href="#how-we-work"
                        className="text-text-muted dark:text-gray hover:text-foreground transition text-sm"
                    >
                        How We Work
                    </Link>

                    <Link
                        href="#models"
                        className="text-text-muted dark:text-gray hover:text-foreground transition text-sm"
                    >
                        Models
                    </Link>

                    <Link
                        href="#why-nearshore"
                        className="text-text-muted dark:text-gray hover:text-foreground transition text-sm"
                    >
                        Why Nearshore
                    </Link>

                    <Link
                        href="#contact"
                        className="text-text-muted dark:text-gray hover:text-foreground transition text-sm"
                    >
                        Contact
                    </Link>

                    <ThemeToggle />

                </nav>

                <div className="pr-[24px] xl:pr-[60px] flex justify-end">
                    <button className="bg-orange text-white px-5 py-2 rounded-pill hover:bg-orange-light transition flex items-center gap-2">
                        Start a Project
                        <ArrowRight size={18} />
                    </button>
                </div>

            </div>
        </header>
    );
}
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "../providers/ThemeProvider";
import ThemeToggle from "../ui/ThemeToggle";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { useActiveSection } from "@/app/hooks/useActiveSection";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const { theme } = useTheme();

    const activeSection = useActiveSection([
        "services",
        "how-we-work",
        "why-nearshore",
        "models",
        "contact",
    ]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

    return (
        <header
            className={`
                fixed top-0 left-0 w-full z-50
                ${open ? "" : "transition-all duration-300"}
                ${open
                    ? "bg-light dark:bg-dark"
                    : scrolled
                        ? "bg-light dark:bg-dark border-b border-light-border dark:border-dark-muted backdrop-blur"
                        : "bg-transparent"
                }
            `}
        >

            <div className="hidden lg:grid grid-cols-[auto_1fr_auto] items-center w-full py-5">

                <div className="pl-[24px] xl:pl-[60px] flex items-center">
                    <Image
                        src={theme === "dark" ? "/images/logo-dark.png" : "/images/logo-light.png"}
                        alt="Logo"
                        width={180}
                        height={80}
                    />
                </div>

                <nav className="flex justify-center items-center gap-8">
                    <Link href="#services" className={`nav-link ${activeSection === "services" ? "nav-active" : ""}`}>Services</Link>
                    <Link href="#how-we-work" className={`nav-link ${activeSection === "how-we-work" ? "nav-active" : ""}`}>How We Work</Link>
                    <Link href="#why-nearshore" className={`nav-link ${activeSection === "why-nearshore" ? "nav-active" : ""}`}>Why Nearshore</Link>
                    <Link href="#models" className={`nav-link ${activeSection === "models" ? "nav-active" : ""}`}>Models</Link>
                    <Link href="#contact" className={`nav-link ${activeSection === "contact" ? "nav-active" : ""}`}>Contact</Link>
                    <ThemeToggle />
                </nav>

                <div className="pr-[24px] xl:pr-[60px] flex justify-end">
                    <a
                        href="#contact"
                        className="bg-orange text-white px-5 py-2 rounded-pill hover:bg-orange-light transition flex items-center gap-2"
                    >
                        Start a Project
                        <ArrowRight size={18} />
                    </a>
                </div>
            </div>

            <div className="lg:hidden flex items-center justify-between px-4 py-4">

                <Image
                    src={theme === "dark" ? "/images/logo-dark.png" : "/images/logo-light.png"}
                    alt="Logo"
                    width={140}
                    height={60}
                />

                <button onClick={() => setOpen(true)}>
                    <Menu className="text-foreground" size={26} />
                </button>
            </div>

            <div
                className={`
          fixed inset-0 z-50
          bg-light dark:bg-dark
          transition-all duration-300
          ${open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
        `}
            >
                <div className="flex justify-between items-center px-6 py-6 border-b border-light-border dark:border-dark-muted">

                    <Image
                        src={theme === "dark" ? "/images/logo-dark.png" : "/images/logo-light.png"}
                        alt="Logo"
                        width={140}
                        height={60}
                    />

                    <button onClick={() => setOpen(false)}>
                        <X size={28} />
                    </button>
                </div>

                <div className="flex flex-col h-full">
                    <nav className="flex flex-col gap-6 px-6 py-10 text-lg">
                        <Link onClick={() => setOpen(false)} href="#services" className={`mobile-link ${activeSection === "services" ? "mobile-active" : ""}`}>
                            Services
                        </Link>

                        <Link onClick={() => setOpen(false)} href="#how-we-work" className={`mobile-link ${activeSection === "how-we-work" ? "mobile-active" : ""}`}>
                            How We Work
                        </Link>

                        <Link onClick={() => setOpen(false)} href="#why-nearshore" className={`mobile-link ${activeSection === "why-nearshore" ? "mobile-active" : ""}`}    >
                            Why Nearshore
                        </Link>

                        <Link onClick={() => setOpen(false)} href="#models" className={`mobile-link ${activeSection === "models" ? "mobile-active" : ""}`}  >
                            Models
                        </Link>

                        <Link onClick={() => setOpen(false)} href="#contact" className={`mobile-link ${activeSection === "contact" ? "mobile-active" : ""}`}    >
                            Contact
                        </Link>
                    </nav>
                    <div className="px-6 pb-10 flex flex-col gap-6">

                        <div className="flex justify-center">
                            <ThemeToggle />
                        </div>

                        <a
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className="bg-orange text-white px-6 py-3 rounded-full flex items-center justify-center gap-2"
                        >
                            Start a Project
                            <ArrowRight size={18} />
                        </a>

                    </div>

                </div>
            </div>

        </header>
    );
}
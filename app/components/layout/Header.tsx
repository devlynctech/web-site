"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import useActiveSection from "@/app/hooks/useActiveSection"

export default function Header() {
    const active = useActiveSection([
        "services",
        "process",
        "why",
        "contact"
    ])

    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <header
                className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500
        ${scrolled
                        ? "bg-white/95 backdrop-blur border-b border-gray-2 py-4"
                        : "bg-transparent py-7"}
      `}
            >
                {!scrolled && <div className="absolute top-0 left-0 right-0 h-[4px] bg-orange origin-left animate-bar" />}
                <div className="max-w-[1280px] mx-auto px-4 md:px-[4rem] grid grid-cols-[auto_1fr_auto] items-center">

                    <div className="flex items-center">
                        <Image
                            src={scrolled ? "/images/Icono principal.png" : "/images/Logo.png"}
                            alt="Devlync"
                            width={scrolled ? 90 : 160}
                            height={40}
                            priority
                        />
                    </div>

                    <nav className="hidden lg:flex justify-center items-center gap-10 text-[12.5px] font-semibold">

                        <a
                            href="/#services"
                            className={`text-nav-link transition ${active === "services"
                                ? "text-orange"
                                : "text-gray-3 hover:text-ink"
                                }`}
                        >
                            Services
                        </a>

                        <a
                            href="/#process"
                            className={`text-nav-link transition ${active === "process"
                                ? "text-orange"
                                : "text-gray-3 hover:text-ink"
                                }`}
                        >
                            Process
                        </a>

                        <a
                            href="/#why"
                            className={`text-nav-link transition ${active === "why"
                                ? "text-orange"
                                : "text-gray-3 hover:text-ink"
                                }`}
                        >
                            Why Us
                        </a>


                        <a
                            href="/#contact"
                            className={`text-nav-link transition ${active === "contact"
                                ? "text-orange"
                                : "text-gray-3 hover:text-ink"
                                }`}
                        >
                            Contact
                        </a>

                    </nav>

                    <div className="flex justify-end items-center">
                        <div className="flex justify-end items-center">
                            <a
                                href="/#contact"
                                className="hidden lg:inline-flex items-center bg-ink text-white px-6 py-2 text-btn font-semibold hover:bg-orange transition"
                            >
                                Start a project
                            </a>
                            <button
                                onClick={() => setOpen(!open)}
                                className={`lg:hidden flex flex-col gap-[5px] transition ${open ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                            >
                                <span className="w-[22px] h-[2px] bg-ink"></span>
                                <span className="w-[22px] h-[2px] bg-ink"></span>
                                <span className="w-[22px] h-[2px] bg-ink"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div
                className={`
                    fixed inset-0
                    bg-white
                    z-[100]
                    flex flex-col items-center justify-center gap-10
                    transition-all duration-300
                    ${open ? "opacity-100 visible" : "opacity-0 invisible"}
                    `}
            >

                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-6 right-6 text-3xl"
                >
                    ✕
                </button>

                <a
                    onClick={() => setOpen(false)}
                    href="/#services"
                    className="text-[1.6rem] font-semibold"
                >
                    Services
                </a>

                <a
                    onClick={() => setOpen(false)}
                    href="/#process"
                    className="text-[1.6rem] font-semibold"
                >
                    Process
                </a>

                <a
                    onClick={() => setOpen(false)}
                    href="/#why"
                    className="text-[1.6rem] font-semibold"
                >
                    Why Us
                </a>
                <a
                    onClick={() => setOpen(false)}
                    href="/#contact"
                    className="mt-4 bg-ink text-white px-8 py-3 text-[1rem] font-semibold hover:bg-orange transition"
                >
                    Start a project
                </a>
            </div>
        </>
    )
}

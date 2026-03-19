"use client";

import Image from "next/image";
import { useTheme } from "../providers/ThemeProvider";

export default function Footer() {
    const { theme } = useTheme();

    return (
        <footer className="bg-light-warm dark:bg-dark border-t border-light-border dark:border-dark-muted">

            <div className="px-[24px] xl:px-[60px] py-16 grid md:grid-cols-4 gap-10">

                <div>
                    <Image
                        src={theme === "dark" ? "/images/logo-dark.png" : "/images/logo-light.png"}
                        alt="Devlync"
                        width={180}
                        height={80}
                    />

                    <p className="mt-4 text-sm text-text-muted dark:text-gray-light max-w-xs leading-relaxed">
                        Nearshore tech partner for companies in the USA and Europe.
                        Senior talent from El Salvador, CST timezone, built to ship.
                    </p>
                </div>

                <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-4 text-text-dark dark:text-offwhite">
                        Services
                    </p>

                    <ul className="space-y-3 text-sm text-text-muted dark:text-gray-light">

                        <li>
                            <a href="#services" className="hover:text-orange transition">
                                Web Development
                            </a>
                        </li>

                        <li>
                            <a href="#services" className="hover:text-orange transition">
                                Mobile Apps
                            </a>
                        </li>

                        <li>
                            <a href="#services" className="hover:text-orange transition">
                                Staff Augmentation
                            </a>
                        </li>

                        <li>
                            <a href="#services" className="hover:text-orange transition">
                                Backend / APIs
                            </a>
                        </li>

                        <li>
                            <a href="#services" className="hover:text-orange transition">
                                DevOps & Cloud
                            </a>
                        </li>

                        <li>
                            <a href="#services" className="hover:text-orange transition">
                                AI Integration
                            </a>
                        </li>

                    </ul>
                </div>

                <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-4 text-text-dark dark:text-offwhite">
                        Company
                    </p>

                    <ul className="space-y-3 text-sm text-text-muted dark:text-gray-light">

                        <li>
                            <a href="#why-nearshore" className="hover:text-orange transition">
                                About Us
                            </a>
                        </li>

                        <li>
                            <a href="#models" className="hover:text-orange transition">
                                Our Team
                            </a>
                        </li>

                        <li>
                            <a href="#how-we-work" className="hover:text-orange transition">
                                Case Studies
                            </a>
                        </li>

                        {/* <li>
                            <a href="#how-we-work" className="hver:text-orange transition">
                                Blog
                            </a>
                        </li> */}

                        <li>
                            <a href="#contact" className="hover:text-orange transition">
                                Careers
                            </a>
                        </li>

                    </ul>
                </div>

                <div>
                    <p className="text-xs tracking-[0.2em] uppercase mb-4 text-text-dark dark:text-offwhite">
                        Contact
                    </p>

                    <ul className="space-y-3 text-sm text-text-muted dark:text-gray-light">

                        <li>
                            <a href="mailto:hello@devlync.com" className="hover:text-orange transition">
                                hello@devlync.com
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-orange transition">
                                LinkedIn
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-orange transition">
                                Twitter / X
                            </a>
                        </li>

                        <li>
                            <span>San Salvador, SV</span>
                        </li>

                    </ul>
                </div>

            </div>

            <div className="border-t border-light-border dark:border-dark-muted px-[24px] xl:px-[60px] py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted dark:text-gray-light">

                <p>
                    © {new Date().getFullYear()} Devlync Tech Company. All rights reserved.
                </p>

                <p>
                    El Salvador · Nearshore · Built with{" "}
                    <span className="text-orange">♥</span>
                </p>

            </div>

        </footer>
    );
}
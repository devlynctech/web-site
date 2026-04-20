"use client"

import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-2">

            {/* MAIN FOOTER */}

            <div className="max-w-[1280px] mx-auto px-[1.6rem] md:px-[3rem] py-[5rem] md:py-[7rem]">

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                    <div className="space-y-6">

                        <Image
                            src="/images/Logo.png"
                            alt="Devlync"
                            width={160}
                            height={40}
                        />

                        <p className="text-body-sm text-gray-3 max-w-[280px] leading-[1.75]">
                            Senior nearshore engineers helping US and European teams build
                            scalable products faster — fully integrated with your team and
                            timezone.
                        </p>

                    </div>


                    <div className="space-y-5">

                        <div className="font-mono text-mono-xs uppercase tracking-[.16em] text-gray-3">
                            Services
                        </div>

                        <div className="flex flex-col gap-3">

                            <a
                                href="#services"
                                className="text-body-sm text-gray-3 hover:text-ink transition"
                            >
                                Web Development
                            </a>

                            <a
                                href="#services"
                                className="text-body-sm text-gray-3 hover:text-ink transition"
                            >
                                Mobile Development
                            </a>

                            <a
                                href="#services"
                                className="text-body-sm text-gray-3 hover:text-ink transition"
                            >
                                Staff Augmentation
                            </a>

                            <a
                                href="#services"
                                className="text-body-sm text-gray-3 hover:text-ink transition"
                            >
                                DevOps & Infrastructure
                            </a>

                        </div>

                    </div>


                    <div className="space-y-5">

                        <div className="font-mono text-mono-xs uppercase tracking-[.16em] text-gray-3">
                            Company
                        </div>

                        <div className="flex flex-col gap-3">

                            <a
                                href="#process"
                                className="text-body-sm text-gray-3 hover:text-ink transition"
                            >
                                How we work
                            </a>

                            <a
                                href="#why"
                                className="text-body-sm text-gray-3 hover:text-ink transition"
                            >
                                Why Devlync
                            </a>

                            <a
                                href="#models"
                                className="text-body-sm text-gray-3 hover:text-ink transition"
                            >
                                Engagement models
                            </a>

                            <a
                                href="#contact"
                                className="text-body-sm text-gray-3 hover:text-ink transition"
                            >
                                Contact
                            </a>

                        </div>

                    </div>


                    <div className="space-y-5">

                        <div className="font-mono text-mono-xs uppercase tracking-[.16em] text-gray-3">
                            Contact
                        </div>

                        <div className="flex flex-col gap-3 text-body-sm text-gray-3">

                            <a
                                href="mailto:hello@devlync.com"
                                className="hover:text-ink transition"
                            >
                                hello@devlync.com
                            </a>

                            <div>
                                San Salvador <br />
                                El Salvador
                            </div>

                            <a
                                href="#contact"
                                className="text-orange hover:text-orange-dark transition"
                            >
                                Start a project →
                            </a>

                        </div>

                    </div>

                </div>

            </div>


            <div className="bg-gray-1">

                <div className="max-w-[1280px] mx-auto px-[1.6rem] md:px-[3rem] py-6">

                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                        <div className="font-mono text-[.62rem] tracking-[.08em] text-gray-3">
                            © {new Date().getFullYear()} Devlync. All rights reserved.
                        </div>

                        <div className="flex items-center gap-6 text-body-xs text-gray-3">

                            <a href="#" className="hover:text-ink transition">
                                Privacy
                            </a>

                            <a href="#" className="hover:text-ink transition">
                                Terms
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    )
}
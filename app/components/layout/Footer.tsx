"use client"

import { Heart } from "lucide-react"
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
                            Nearshore tech partner for the USA and Europe. Senior talent from El Salvador CST, built to ship
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
                                Mobile Apps
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
                                Backend / APIs
                            </a>


                            <a
                                href="#services"
                                className="text-body-sm text-gray-3 hover:text-ink transition"
                            >
                                DevOps & Cloud
                            </a>


                            <a
                                href="#services"
                                className="text-body-sm text-gray-3 hover:text-ink transition"
                            >
                                AI Integration
                            </a>

                        </div>

                    </div>


                    <div className="space-y-5">

                        <div className="font-mono text-mono-xs uppercase tracking-[.16em] text-gray-3">
                            Company
                        </div>

                        <div className="flex flex-col gap-3">

                            <a
                                href="#home"
                                className="text-body-sm text-gray-3 hover:text-ink transition"
                            >
                                About
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

                            <a
                                href="https://www.linkedin.com/company/devlync-tech-company/"
                                className="hover:text-ink transition"
                                target="_blank"
                            >
                                LinkedIn
                            </a>

                            {/* <a
                                href="mailto:hello@devlync.com"
                                className="hover:text-ink transition"
                            >
                                Twitter / X
                            </a> */}


                            <div>
                                <span className="font-mono text-[0.6rem] tracking-[.12em] text-gray-3 uppercase">
                                    San Antonio, USA
                                </span>
                                <div>1530 NW Crossroad</div>
                            </div>

                            <div>
                                <span className="font-mono text-[0.6rem] tracking-[.12em] text-gray-3 uppercase">
                                    San Salvador, El Salvador
                                </span>
                                <div>World Trade Center</div>
                                <div>87 Av. Norte & C. El Mirador</div>
                            </div>

                            <div>
                                <span className="font-mono text-[0.6rem] tracking-[.12em] text-gray-3 uppercase">
                                    Madrid, Spain
                                </span>
                                <div>Paseo de la Castellana</div>
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
                            © {new Date().getFullYear()} Devlync Tech Company, S.A.S de C.V. — All rights reserved.
                        </div>

                        <div className="flex items-center gap-6 text-[.62rem] tracking-[.08em] text-gray-3">
                            Nearshore · Built with
                            <Heart className="w-[12px] h-[12px] text-orange fill-orange" />
                        </div>

                    </div>

                </div>

            </div>

        </footer>
    )
}
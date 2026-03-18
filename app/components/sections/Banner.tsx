import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Banner() {
    return (
        <section className="relative min-h-screen flex items-center bg-light-warm dark:bg-dark pt-24 overflow-hidden">
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background: `
                    radial-gradient(
                        circle at 60% 20%,
                        rgba(255,100,32,0.10) 0%,
                        rgba(255,100,32,0.05) 0%,
                        rgba(255,100,32,0.02) 50%,
                        transparent 55%
                    )
                    `,

                    WebkitMaskImage: `
                        radial-gradient(ellipse at center, black 65%, transparent 100%)
                        `,
                    maskImage: `
                        radial-gradient(ellipse at center, black 65%, transparent 100%)
                        `,
                }}
            />
            <div
                className="absolute inset-0 z-0 pointer-events-none text-black/2 dark:text-white/2"
                style={{
                    backgroundImage: `
                    linear-gradient(to right, currentColor 1px, transparent 1px),
                    linear-gradient(to bottom, currentColor 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",

                    WebkitMaskImage: `
                    radial-gradient(ellipse at center, black 50%, transparent 100%)
                    `,
                    maskImage: `
                    radial-gradient(ellipse at center, black 50%, transparent 100%)
                    `,
                }}
            />
            <div className="hidden md:block absolute right-[60px] top-[55%] -translate-y-1/2 z-0 pointer-events-none">
                <div className="animate-float">
                    <Image
                        src="/images/icon-naranja-fondo-blanco.png"
                        alt="decorative"
                        width={500}
                        height={500}
                        className="
                            w-[420px] xl:w-[480px]
                            opacity-20 dark:opacity-10
                            blur-[1px]
                            mix-blend-multiply dark:mix-blend-lighten
                        "
                        priority
                    />
                </div>
            </div>

            <div className="px-[24px] xl:px-[60px] w-full">
                <div className="flex flex-col w-full">
                    <div className="inline-flex self-start text-orange dark:text-orange-light  items-center gap-2 border border-orange bg-orange/10 dark:bg-orange/20 rounded-3xl px-3 py-1 text-sm mb-10">
                        <span className="w-2 h-2 bg-orange rounded-full"></span>
                        Nearshore Tech Partner · El Salvador · USA & Europe
                    </div>
                    <div className="max-w-[780px] ">
                        <h1 className="text-[clamp(3.2rem,7vw,6.5rem)] font-extrabold leading-[.95] tracking-[-0.04em] font-display">
                            Your dev team,
                            <em className="relative inline-block text-orange  mx-2">
                                day one
                                <span className="absolute left-0 bottom-[-0.15em] w-full h-[3px] bg-orange/20 from-orange/0 via-orange to-orange/0"></span>
                            </em>
                            ready.
                        </h1>
                    </div>
                    <div className="pt-8">
                        <p className="text-lg text-text-muted dark:text-gray-light max-w-lg">Senior Latin American developers who work in your timezone, speak your language, and ship like they're part of your team.</p>
                    </div>
                    <div className="mt-8 flex gap-4">
                        <button className="bg-orange flex items-center text-white px-6 py-2 rounded-pill hover:bg-orange-light transition">
                            Build with us
                            <ArrowRight size={18} />
                        </button>

                        <button className="border border-light-border dark:border-dark-muted px-6 py-2 rounded-pill">
                            How it works
                        </button>
                    </div>
                    <div className="grid grid-cols-2 self-start gap-[3.5rem] md:grid-cols-[auto_auto_auto_auto] mt-12">
                        <div className="flex flex-col">
                            <p className="font-display text-[2.5rem] font-extrabold text-dark dark:text-white tracking-[-0.04em] leading-[1]">50<span className="text-orange">+</span></p>
                            <p className="  text-[0.78rem] text-gray tracking-[0.06em] uppercase mt-[0.3rem]">Projects Delivered</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-display text-[2.5rem] font-extrabold text-dark dark:text-white tracking-[-0.04em] leading-[1]">8<span className="text-orange">+</span></p>
                            <p className="  text-[0.78rem] text-gray tracking-[0.06em] uppercase mt-[0.3rem]">Years Experience</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-display text-[2.5rem] font-extrabold text-dark dark:text-white  tracking-[-0.04em] leading-[1]">CST</p>
                            <p className="  text-[0.78rem] text-gray tracking-[0.06em] uppercase mt-[0.3rem]">Timezone Aligned</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-display text-[2.5rem] font-extrabold text-dark dark:text-white tracking-[-0.04em] leading-[1]">100<span className="text-orange">%</span></p>
                            <p className="  text-[0.78rem] text-gray tracking-[0.06em] uppercase mt-[0.3rem]">Senior Talent</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
"use client"

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col justify-end bg-white overflow-hidden"
        >


            <div
                className="
        hidden md:block
        absolute
        top-1/2
        right-[calc((100vw-1280px)/2-1rem)]
        -translate-y-1/2
        text-[min(52vw,600px)]
        font-extrabold
        leading-none
        text-transparent
        pointer-events-none
        select-none
        [-webkit-text-stroke:1px_rgba(10,10,10,.05)]
      "
            >
                D
            </div>

            <div className="max-w-[1280px] mx-auto w-full px-4 md:px-[3rem] pb-[4rem] md:pb-[6rem]">

                <div className="flex items-center gap-3 mb-8 md:mb-10 reveal">

                    <span className="w-[7px] h-[7px] rounded-full bg-orange animate-pulse-orange"></span>

                    <span className="font-mono text-mono-sm uppercase tracking-[.12em] text-gray-3">
                        Nearshore · El Salvador · CST Timezone
                    </span>

                </div>

                <h1
                    className="
                        font-sans
                        font-extrabold
                        text-[clamp(2.6rem,8vw,9.5rem)]
                        leading-[.9]
                        tracking-tightest
                        text-ink
                        reveal
                        "
                >
                    <span className="block">Senior devs.</span>
                    <span className="block">Your timezone.</span>
                    <span className="block text-orange">Day one.</span>
                </h1>

                <div
                    className="
                        flex flex-col lg:flex-row
                        md:items-end
                        md:justify-between
                        gap-10 md:gap-14
                        mt-12 md:mt-20
                        reveal
                    "
                >

                    <p className="lg:max-w-[440px] text-body-lg text-gray-4 font-light">
                        We embed senior Latin American engineers directly inside US and
                        European teams — timezone-aligned, senior-only, and shipping from
                        the first sprint.
                    </p>

                    <div className="flex items-center gap-6 md:gap-8">
                        <a
                            href="#contact"
                            className="
                                font-sans
                                font-semibold
                                text-btn
                                px-6 md:px-8
                                py-3
                                bg-ink
                                text-white
                                transition
                                hover:bg-orange
                                hover:-translate-y-[2px]
                                "
                        >
                            Build with us →
                        </a>

                        <a
                            href="#process"
                            className="
                                text-btn
                                border-b border-gray-2
                                pb-[2px]
                                transition
                                hover:text-orange
                                hover:border-orange
                                "
                        >
                            How it works
                        </a>

                    </div>

                </div>

                <div
                    className="
                    grid grid-cols-2 md:flex
                    border-l border-gray-2
                    mt-14 md:mt-16
                    reveal
                    "
                >

                    <div className="px-5 md:px-10 border-r border-gray-2 py-5 md:py-0">
                        <div className="font-extrabold text-stat tracking-tightest text-ink">
                            50<span className="text-orange">+</span>
                        </div>
                        <div className="font-mono text-mono-xs uppercase tracking-mono text-gray-3 mt-1">
                            Projects
                        </div>
                    </div>

                    <div className="px-5 md:px-10 border-r border-gray-2 py-5 md:py-0">
                        <div className="font-extrabold text-stat tracking-tightest text-ink">
                            8<span className="text-orange">+</span>
                        </div>
                        <div className="font-mono text-mono-xs uppercase tracking-mono text-gray-3 mt-1">
                            Years
                        </div>
                    </div>

                    <div className="px-5 md:px-10 border-r border-gray-2 py-5 md:py-0">
                        <div className="font-extrabold text-stat tracking-tightest text-ink">
                            CST
                        </div>
                        <div className="font-mono text-mono-xs uppercase tracking-mono text-gray-3 mt-1">
                            Timezone
                        </div>
                    </div>

                    <div className="px-5 md:px-10 py-5 md:py-0 border-r border-gray-2">
                        <div className="font-extrabold text-stat tracking-tightest text-ink">
                            100<span className="text-orange">%</span>
                        </div>
                        <div className="font-mono text-mono-xs uppercase tracking-mono text-gray-3 mt-1">
                            Senior
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
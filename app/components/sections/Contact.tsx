"use client"

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative bg-ink text-white py-20 md:py-40 overflow-hidden"
        >

            <div
                className="
        absolute
        right-[-3rem]
        bottom-[-3rem]
        text-[min(28vw,380px)]
        font-extrabold
        leading-none
        text-transparent
        pointer-events-none
        select-none
        [-webkit-text-stroke:1px_rgba(255,255,255,0.03)]
      "
            >
                SHIP
            </div>

            <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-24 items-center">

                <div className="reveal">

                    <div className="flex items-center gap-2 font-mono text-mono-sm uppercase tracking-[0.14em] text-orange mb-6">
                        <span className="opacity-50">//</span>
                        Start a project
                    </div>

                    <h2 className="font-sans text-[clamp(2.2rem,4vw,3.8rem)] font-bold  leading-[1] tracking-[-0.04em]">

                        Ready to build
                        <br />

                        <span className="text-orange">
                            something great?
                        </span>

                    </h2>

                    <p className="text-body-md text-white/40 mt-6 max-w-[440px] leading-[1.75]">
                        Tell us about your project we'll respond within 24 hours with a
                        concrete proposal.
                    </p>

                </div>

                <div className="flex flex-col gap-4 reveal">

                    <input
                        type="email"
                        placeholder="your@email.com"
                        className="
            bg-white/5
            border border-white/10
            px-6 py-4
            text-body-md
            outline-none
            transition
            focus:border-orange
            placeholder:text-white/25
          "
                    />

                    <input
                        type="text"
                        placeholder="Tell us about your project"
                        className="
            bg-white/5
            border border-white/10
            px-6 py-4
            text-body-md
            outline-none
            transition
            focus:border-orange
            placeholder:text-white/25
          "
                    />

                    <a
                        href="mailto:hello@devlynctech.com"
                        className="
            mt-2
            flex
            items-center
            justify-center
            gap-2
            bg-orange
            py-4
            text-btn
            font-semibold
            transition
            hover:bg-orange-dark
            hover:-translate-y-[2px]
          "
                    >
                        Send message →
                    </a>

                    <p className="text-center text-mono-sm text-white/20 font-mono mt-2">
                        Or reach us at{" "}
                        <a
                            href="mailto:hello@devlynctech.com"
                            className="text-orange hover:underline"
                        >
                            hello@devlynctech.com
                        </a>
                    </p>

                </div>

            </div>

        </section>
    )
}
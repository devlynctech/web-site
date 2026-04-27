"use client"

const testimonials = [
    {
        text: "Devlync became an extension of our team from day one. Sharp, proactive, and shipped faster than our internal team.",
        name: "Marcus Reid",
        role: "CTO · Fintech Startup, Austin TX",
    },
    {
        text: "We needed a full React Native app in 3 months. Devlync delivered in 11 weeks, on budget. Timezone alignment made every standup feel local.",
        name: "Sofia Larsen",
        role: "VP Product · SaaS Platform, New York",
    },
    {
        text: "The quality was exceptional clean, documented, reviewed. We've worked with offshore before. This is completely different.",
        name: "James Kim",
        role: "Engineering Lead · E-commerce, Chicago",
    },
    {
        text: "Cost savings were real but what surprised me was how much faster we moved. Devs that overlap all day changed everything.",
        name: "Amanda Lowe",
        role: "CEO · Digital Agency, Miami",
    },
]

export default function Testimonials() {
    const items = [...testimonials, ...testimonials]

    return (
        <section className="bg-ink py-20 md:py-32 overflow-hidden">

            {/* HEADER */}
            <div className="max-w-[1280px] mx-auto px-6 lg:px-12 mb-16 reveal">

                <div className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-orange mb-6">
                    <span className="opacity-50">//</span>
                    Client Stories
                </div>

                <h2 className="font-sans font-bold text-[clamp(2.2rem,4vw,3.8rem)] leading-[1] tracking-[-0.04em] text-white">
                    What our clients <span className="text-orange">say.</span>
                </h2>

            </div>

            {/* SLIDER */}
            <div className="overflow-hidden">

                <div
                    className="
                    flex gap-[2px]
                    animate-testimonials
                    lg:pl-[calc((100vw-1280px)/2+3rem)]
                    "
                >

                    {items.map((t, i) => (
                        <div
                            key={i}
                            className="
              min-w-[520px]
              md:min-w-[620px]
              lg:min-w-[700px]
              bg-white/[0.03]
              border border-white/[0.06]
              p-12
              transition
              hover:border-orange
              hover:bg-orange/[0.04]
              "
                        >

                            <div className="font-mono text-[0.7rem] tracking-[0.3em] text-orange mb-8">
                                ★ ★ ★ ★ ★
                            </div>

                            <p className="text-[0.95rem] leading-[1.75] text-white/70 mb-10">
                                “{t.text}”
                            </p>

                            <div className="text-[0.82rem] font-semibold text-white">
                                {t.name}
                            </div>

                            <div className="font-mono text-[0.65rem] tracking-[0.06em] text-white/25 mt-1">
                                {t.role}
                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}
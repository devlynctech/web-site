"use client"

const reasons = [
    {
        id: "01 —",
        title: "Same Timezone",
        desc: "CST, aligned with US hours. Real-time standups, instant Slack replies, zero async lag. Your team, not a vendor.",
    },
    {
        id: "02 —",
        title: "Senior Only",
        desc: "Every engineer has 5+ years of production experience. No juniors, no bait-and-switch after contracts are signed.",
    },
    {
        id: "03 —",
        title: "40–60% Cost Savings",
        desc: "Same caliber engineers, dramatically better cost structure. No benefits, equity, or HR overhead.",
    },
    {
        id: "04 —",
        title: "Agile & Transparent",
        desc: "Weekly demos, sprint metrics, daily standups. You always know exactly what's being built and when it ships.",
    },
    {
        id: "05 —",
        title: "Scale on Demand",
        desc: "Add engineers this sprint, scale back next quarter. Flex with your roadmap — no long-term commitment.",
    },
    {
        id: "06 —",
        title: "El Salvador Hub",
        desc: "Latin America's fastest-growing tech hub. Strong English, US cultural alignment, thriving developer ecosystem.",
    },
]

export default function Why() {
    return (
        <section id="why" className="bg-white py-20 md:py-32">

            <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

                <div className="reveal">

                    <div className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-orange mb-6">
                        <span className="opacity-50">//</span>
                        Why Devlync
                    </div>

                    <h2 className="font-sans font-bold text-[clamp(2.2rem,4vw,3.8rem)] leading-[1] tracking-[-0.04em]">
                        The nearshore
                        <br />
                        <span className="text-orange">advantage.</span>
                    </h2>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 reveal-group">

                    {reasons.map((item, i) => (
                        <div
                            key={i}
                            className="
                relative
                p-10
                border border-gray-2
                -ml-[1px] -mt-[1px]
                transition
                hover:bg-gray-1
                group
              "
                        >

                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-orange scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>

                            <div className="font-mono text-[0.6rem] tracking-[0.12em] text-orange mb-5">
                                {item.id}
                            </div>

                            <div className="font-semibold text-[1rem] tracking-[-0.02em] text-ink mb-2">
                                {item.title}
                            </div>

                            <p className="text-[0.82rem] text-gray-3 leading-[1.75]">
                                {item.desc}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}
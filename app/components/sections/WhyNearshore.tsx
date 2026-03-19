"use client";

const items = [
    {
        number: "01",
        title: "Same Timezone",
        desc: "CST — aligned with US business hours. Real-time standups, instant Slack replies, no async lag. Your team, not a vendor.",
    },
    {
        number: "02",
        title: "Senior-Only Talent",
        desc: "Every developer at Devlync has 5+ years of production experience. No juniors, no bait-and-switch after contracts are signed.",
    },
    {
        number: "03",
        title: "40–60% Cost Savings",
        desc: "Compared to US-based hires. Same caliber of engineer, dramatically better cost structure. No benefits, equity, or HR headaches.",
    },
    {
        number: "04",
        title: "Agile & Transparent",
        desc: "Weekly demos, sprint velocity metrics, daily standups. You always know what's being built and when it ships.",
    },
    {
        number: "05",
        title: "Scale on Demand",
        desc: "Add 3 engineers this sprint, drop to 1 next quarter. We flex with your roadmap — no long-term headcount commitment.",
    },
    {
        number: "06",
        title: "El Salvador Hub",
        desc: "Latin America's fastest growing tech hub. Strong English, US cultural alignment, and a thriving developer ecosystem.",
    },
];

export default function WhyNearshore() {
    return (
        <section id="why-nearshore" className="py-10 md:py-24 bg-light-warm dark:bg-dark">

            <div className="px-4 md:px-[24px] xl:px-[60px]">

                <div className="mb-16">

                    <p className="text-xs tracking-[0.2em] text-orange uppercase mb-4 font-bold">
                        Why Devlync
                    </p>

                    <h2 className="
                                font-display
                                font-extrabold
                                text-[clamp(2rem,4vw,3.2rem)]
                                leading-[1.05]
                                tracking-[-0.03em]
                                text-offwhite
                                max-w-[620px] 
                                text-text-dark dark:text-offwhite
                        ">
                        The nearshore
                        <span className="block text-orange">
                            advantage.
                        </span>
                    </h2>

                </div>

                <div className="grid md:grid-cols-2 gap-6">

                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="
                                group
                                p-8
                                rounded-[20px]
                                border border-light-border dark:border-dark-muted
                                bg-light dark:bg-dark-subtle
                                transition-all duration-300
                                hover:border-orange/40
                                hover:bg-light-warm dark:hover:bg-dark-mid
                                "
                        >

                            <span className="
                                    font-display
                                    text-xs font-semibold tracking-[0.2em]
                                    text-orange mb-4 block
                                ">
                                {item.number}
                            </span>

                            <h3 className="
                                font-display
                                text-[1.05rem]
                                font-bold
                                text-foreground
                                mb-2
                                tracking-[-0.02em]

                            ">
                                {item.title}
                            </h3>

                            <p className="
                            font-display
                                mt-3
                                text-sm
                                text-text-muted dark:text-gray
                                
                            ">
                                {item.desc}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}
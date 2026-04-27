"use client"

const steps = [
    {
        id: "01",
        title: "Discovery",
        body: "We understand your project, stack, team, and goals. No templates a real conversation about what you need.",
    },
    {
        id: "02",
        title: "Team Matching",
        body: "We hand-pick senior engineers for your specific context. You interview and approve every single person.",
    },
    {
        id: "03",
        title: "Integration",
        body: "Your devs join Slack, standups, and sprints on day one. Real teammates not a vendor sending updates.",
    },
    {
        id: "04",
        title: "Ship & Scale",
        body: "Continuous delivery, sprint metrics, full transparency. Scale capacity up or down, any time.",
    },
]

export default function Process() {
    return (
        <section id="process" className="py-20 md:py-32 bg-white">

            <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

                <div className="reveal">
                    <div className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-orange mb-6">
                        <span className="opacity-50">//</span>
                        Process
                    </div>

                    <h2 className="font-sans font-bold text-[clamp(2.2rem,4vw,3.8rem)] leading-[1] tracking-[-0.04em]">
                        From kickoff
                        <br />
                        to <span className="text-orange">shipped.</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-20 mt-20">

                    <div className="flex flex-col reveal">

                        {steps.map((step, i) => (
                            <div
                                key={i}
                                className="
                grid grid-cols-[48px_1fr]
                gap-6
                py-8
                border-b border-gray-2
                first:border-t
                "
                            >
                                <div className="font-mono text-[0.65rem] tracking-[0.1em] text-gray-3 pt-[2px]">
                                    {step.id}
                                </div>

                                <div>
                                    <div className="font-semibold text-[1.05rem] tracking-[-0.02em] text-ink mb-1">
                                        {step.title}
                                    </div>

                                    <p className="text-[0.82rem] text-gray-3 leading-[1.75]">
                                        {step.body}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>

                    <div className="flex flex-col gap-10 pt-4 reveal">

                        <div className="font-extrabold text-[clamp(3rem,5vw,5.5rem)] leading-[.9] tracking-[-0.05em]">

                            <div>NOT A</div>

                            <div className="text-orange">
                                VENDOR.
                            </div>

                            <div
                                className="
                text-transparent
                [-webkit-text-stroke:1.5px_var(--gray-2)]
                "
                            >
                                A TEAM.
                            </div>

                        </div>

                        <div className="font-mono text-[0.7rem] text-gray-3 tracking-[0.1em] leading-[2]">

                            <div><span className="text-orange">→</span> Slack integration</div>
                            <div><span className="text-orange">→</span> Daily standups</div>
                            <div><span className="text-orange">→</span> Sprint planning</div>
                            <div><span className="text-orange">→</span> Your tools, your workflow</div>
                            <div><span className="text-orange">→</span> CST timezone, all day</div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}
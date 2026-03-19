"use client";

const models = [
    {
        tag: "Staff Augmentation",
        title: "Embed a Developer",
        desc: "One or more senior engineers join your team. You manage them directly within your tools and workflow.",
        features: [
            "From 1 to 10+ engineers",
            "Flexible monthly contract",
            "Full-time dedication",
            "Direct communication",
            "Your tools, your standup",
        ],
        highlight: false,
    },
    {
        tag: "Most Popular",
        title: "Dedicated Team",
        desc: "A complete, managed development team: devs, QA, and PM. We handle delivery, you get results.",
        features: [
            "Full cross-functional team",
            "Sprint-based delivery",
            "Weekly demos & reports",
            "Technical leadership included",
            "Scale anytime",
        ],
        highlight: true,
    },
    {
        tag: "Project-Based",
        title: "Fixed Scope",
        desc: "You have a well-defined project. We scope, estimate, build, and deliver at a fixed price and timeline.",
        features: [
            "Fixed price, no surprises",
            "Discovery & architecture included",
            "Milestone-based delivery",
            "Post-launch support",
            "Full IP transfer",
        ],
        highlight: false,
    },
];

export default function Models() {
    return (
        <section id="models" className="py-10 md:py-24 bg-light-warm dark:bg-dark">

            <div className="px-4 md:px-[24px] xl:px-[60px]">

                <div className="mb-16">
                    <p className="text-xs tracking-[0.2em] text-orange uppercase mb-4 font-bold">
                        Engagement
                    </p>

                    <h2 className="font-display font-extrabold text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] tracking-[-0.03em] text-offwhite max-w-[620px] text-text-dark dark:text-offwhite
                        ">
                        Choose how
                        <br />
                        we <span className="text-orange">work</span>
                        <br />
                        <span className="text-orange">together.</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">

                    {models.map((model, i) => (
                        <div
                            key={i}
                            className={`relative rounded-[24px] p-8 transition-all duration-300 border font-medium font-display
                                ${model.highlight
                                    ? "bg-orange text-white border-orange shadow-orange-heavy"
                                    : "bg-light dark:bg-dark-subtle border-light-border dark:border-dark-muted"
                                }
                            hover:-translate-y-1`}
                        >

                            <p className={`text-xs tracking-[0.2em] uppercase mb-4 font-display
                                ${model.highlight
                                    ? "text-white/80"
                                    : "text-orange"
                                }
                                `}>
                                {model.tag}
                            </p>

                            <h3 className={`font-extrabold text-[1.5rem] mb-3 font-display
                                ${model.highlight
                                    ? "text-white"
                                    : "text-text-dark dark:text-offwhite"
                                }
                                `}>
                                {model.title}
                            </h3>

                            <p className={`text-sm mb-6 max-w-md font-display
                                    ${model.highlight
                                    ? "text-white/90"
                                    : "text-text-muted dark:text-gray-light"
                                }
                                `}>
                                {model.desc}
                            </p>

                            <ul className="space-y-3">
                                {model.features.map((f, idx) => (
                                    <li
                                        key={idx}
                                        className={`text-sm flex items-start gap-2 font-display
                                            ${model.highlight
                                                ? "text-white/90"
                                                : "text-text-muted dark:text-gray-light"
                                            }
                                        `}
                                    >
                                        <span className={`mt-[6px] w-1.5 h-1.5 rounded-full
                                            ${model.highlight ? "bg-white" : "bg-orange"}
                                            `} />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

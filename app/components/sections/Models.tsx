"use client"

const models = [
    {
        tag: "Staff Augmentation",
        title: "Embed a Dev",
        desc: "One or more senior engineers join your team. You manage them directly inside your tools and workflow.",
        features: [
            "From 1 to 10+ engineers",
            "Flexible monthly contract",
            "Full-time dedication",
            "Your standup, your tools",
        ],
    },
    {
        tag: "Most Popular",
        title: "Dedicated Team",
        desc: "A complete managed team: devs, QA, and PM. We handle delivery you get results.",
        featured: true,
        features: [
            "Full cross-functional team",
            "Sprint-based delivery",
            "Weekly demos & reports",
            "Scale anytime",
        ],
    },
    {
        tag: "Project-Based",
        title: "Fixed Scope",
        desc: "Well-defined project? We scope, estimate, build, and deliver fixed price, fixed timeline.",
        features: [
            "Fixed price, no surprises",
            "Discovery included",
            "Milestone delivery",
            "Full IP transfer",
        ],
    },
]

export default function Models() {
    return (
        <section id="models" className="bg-gray-1 py-20 md:py-32">

            <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

                <div className="reveal">

                    <div className="flex items-center gap-2 font-mono text-mono-sm uppercase tracking-[0.14em] text-orange mb-6">
                        <span className="opacity-50">//</span>
                        Engagement
                    </div>

                    <h2 className="font-sans font-bold text-h2 leading-[1] tracking-[-0.04em]">
                        Choose how we
                        <br />
                        <span className="text-orange">work together.</span>
                    </h2>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-6 mt-16 reveal-group">

                    {models.map((model, i) => (
                        <div
                            key={i}
                            className={`
                                p-6
                                lg:p-10
                                border border-gray-2
                                transition
                                relative
                                ${model.featured
                                    ? "bg-orange text-white border-orange shadow-[0_20px_50px_rgba(255,100,32,0.25)]"
                                    : "bg-white hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                                }
                            `}
                        >

                            <div
                                className={`
                font-mono text-[0.6rem] uppercase tracking-[0.14em] mb-7
                ${model.featured
                                        ? "text-white/70"
                                        : "text-gray-3"
                                    }
                `}
                            >
                                {model.tag}
                            </div>

                            <div
                                className={`
                text-[1.5rem] font-bold tracking-[-0.03em] mb-3
                ${model.featured
                                        ? "text-white"
                                        : "text-ink"
                                    }
                `}
                            >
                                {model.title}
                            </div>

                            <p
                                className={`
                text-body-sm leading-[1.75] mb-8
                ${model.featured
                                        ? "text-white/80"
                                        : "text-gray-3"
                                    }
                `}
                            >
                                {model.desc}
                            </p>

                            <ul className="flex flex-col gap-3">

                                {model.features.map((f, idx) => (
                                    <li
                                        key={idx}
                                        className={`
                    flex gap-3 text-[0.78rem] leading-[1.6]
                    ${model.featured
                                                ? "text-white/90"
                                                : "text-gray-4"
                                            }
                    `}
                                    >
                                        <span
                                            className={`
                      text-[0.7rem] mt-[2px]
                      ${model.featured
                                                    ? "text-white/70"
                                                    : "text-orange"
                                                }
                      `}
                                        >
                                            →
                                        </span>

                                        {f}

                                    </li>
                                ))}

                            </ul>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}
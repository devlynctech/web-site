"use client"

const techs = [
    { name: "React", hi: true },
    { name: "Node.js", hi: true },
    { name: "React Native", hi: true },
    { name: "Next.js", hi: true },
    { name: "TypeScript", hi: true },

    { name: "Vue.js" },
    // { name: "Python" },
    // { name: "Flutter" },
    // { name: "Go" },
    // { name: "PostgreSQL" },
    // { name: "MongoDB" },
    // { name: "GraphQL" },

    // { name: "AWS" },
    // { name: "GCP" },
    // { name: "Docker" },
    // { name: "Kubernetes" },
    // { name: "Terraform" },

    // { name: "OpenAI API" },
    // { name: "Stripe" },
    // { name: "Firebase" },
    // { name: "Supabase" },
    // { name: "Figma" },
]

export default function Technologies() {
    return (
        <section className="bg-gray-1 py-20 md:py-32">

            <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

                <div className="reveal">

                    <div className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-orange mb-6">
                        <span className="opacity-50">//</span>
                        Technologies
                    </div>

                    <h2 className="font-sans font-bold text-[clamp(2.2rem,4vw,3.8rem)] leading-[1] tracking-[-0.04em]">
                        We speak
                        <br />
                        <span className="text-orange">your stack.</span>
                    </h2>

                </div>

                <div className="flex flex-wrap gap-2 md:gap-3 mt-16 reveal-group">

                    {techs.map((tech, i) => (
                        <span
                            key={i}
                            className={`
                                font-mono text-[0.65rem] uppercase tracking-[0.08em]
                                px-4 py-2
                                border border-gray-2
                                transition-all duration-200
                                cursor-default

                                ${tech.hi
                                    ? "bg-ink text-white border-ink"
                                    : "bg-white text-gray-4 hover:bg-ink hover:text-white hover:border-ink"}
                            `}
                        >
                            {tech.name}
                        </span>
                    ))}

                </div>

            </div>

        </section>
    )
}
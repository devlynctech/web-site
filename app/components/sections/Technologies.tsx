"use client";

const techs = [
    "React", "Node.js", "React Native", "Next.js", "TypeScript",
    "Vue.js", "Python", "Flutter", "Go", "PostgreSQL",
    "MongoDB", "GraphQL", "AWS", "GCP", "Docker",
    "Kubernetes", "Terraform", "OpenAI API", "Stripe",
    "Firebase", "Supabase", "Figma"
];

export default function Technologies() {
    return (
        <section className="py-10 md:py-24 bg-light-border dark:bg-dark">

            <div className="px-4 md:px-[24px] xl:px-[60px]">

                <div className="mb-12">

                    <p className="text-xs tracking-[0.2em] text-orange uppercase mb-4 font-bold">
                        Technologies
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
                        We speak
                        <span className="text-orange"> your</span>
                        <br />
                        <span className="text-orange">stack.</span>
                    </h2>

                </div>

                {/* CHIPS */}
                <div className="flex flex-wrap gap-3">

                    {techs.map((tech, i) => {
                        const highlighted = i < 5;

                        return (
                            <span
                                key={i}
                                className={`
                                    px-4 py-2 rounded-full text-sm
                                    border transition-all duration-300
                                    font-medium
                                    cursor-pointer
                                    ${highlighted
                                        ? "border-orange text-orange dark:text-orange-light bg-orange/5 dark:bg-orange/20"
                                        : "border-light-border dark:border-dark-muted text-text-muted dark:text-gray-light bg-light dark:bg-dark-subtle hover:border-orange hover:text-orange hover:dark:text-orange-light hover:bg-orange/5 hover:dark:bg-orange/20"
                                    }

                                    hover:border-orange hover:text-orange hover:bg-orange/10
                                    `}
                            >
                                {tech}
                            </span>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}
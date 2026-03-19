"use client";

import Image from "next/image";

const steps = [
    {
        number: "01",
        title: "Discovery Call",
        desc: "We understand your project, team, timeline, and goals. No fluff — straight to what matters.",
    },
    {
        number: "02",
        title: "Team Matching",
        desc: "We hand-pick the right senior engineers for your stack. You interview, approve, done.",
    },
    {
        number: "03",
        title: "Integration",
        desc: "Your new devs join your Slack, standups, and sprints. They work like teammates — because they are.",
    },
    {
        number: "04",
        title: "Ship & Scale",
        desc: "Continuous delivery, agile sprints, transparent metrics. Add or remove capacity anytime.",
    },
];

export default function HowWeWork() {
    return (
        <section id="how-we-work" className="py-10 md:py-24 bg-light-warm dark:bg-dark">
            <div className="px-4 md:px-[24px] xl:px-[60px]">

                <div className="grid lg:grid-cols-2 gap-16 items-end">

                    <div>

                        <div className="mb-12">
                            <p className="text-xs tracking-[0.2em] text-orange uppercase mb-4 font-bold">
                                Process
                            </p>

                            <h2 className="font-display
                                font-extrabold
                                text-[clamp(2rem,4vw,3.2rem)]
                                leading-[1.05]
                                tracking-[-0.03em]
                                text-offwhite
                                max-w-[620px] 
                                text-text-dark dark:text-offwhite
                            ">
                                From kickoff to
                                <em className="block text-orange">
                                    shipped.
                                </em>
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {steps.map((step, i) => (
                                <div
                                    key={i}
                                    className="group border-b border-light-border dark:border-dark-muted pb-6"
                                >
                                    <div className="grid grid-cols-[80px_1fr] md:grid-cols-[90px_1fr] items-start gap-6">

                                        <span className="text-[2.5rem] md:text-[3rem] font-extrabold font-display text-orange/30 dark:text-orange/20 group-hover:text-orange/60 dark:group-hover:text-orange/50">
                                            {step.number}
                                        </span>


                                        <div>

                                            <div className="flex items-center gap-2">
                                                <h3 className="font-semibold text-text-dark dark:text-offwhite">
                                                    {step.title}
                                                </h3>

                                            </div>

                                            <p className="mt-2  text-sm text-text-muted dark:text-gray-light ">
                                                {step.desc}
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className="
                        relative
                        h-[420px]
                        rounded-[24px]
                        border border-light-border dark:border-dark-muted
                        bg-light dark:bg-dark-mid
                        overflow-hidden
                        flex items-center justify-center
                        ">

                        <div className="
                                absolute inset-0
                                dark:bg-[radial-gradient(circle_at_center,rgba(255,100,32,0.2),transparent_70%)]
                            " />

                        <Image
                            src="/images/icon-naranja-fondo-blanco.png"
                            alt="process"
                            width={320}
                            height={320}
                            className="relative z-10 opacity-70 animate-float"
                        />
                    </div>
                </div>
            </div>
        </section >
    );
}
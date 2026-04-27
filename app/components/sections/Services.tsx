"use client"

const services = [
    {
        id: "01",
        title: "Web Development",
        desc: "React, Vue, Next.js. From product MVPs to enterprise SaaS performant, scalable, and built to last.",
    },
    {
        id: "02",
        title: "Mobile Development",
        desc: "Cross-platform iOS & Android with React Native and Flutter. Native performance, one codebase.",
    },
    {
        id: "03",
        title: "Staff Augmentation",
        desc: "Embed senior engineers inside your team in days not months. No HR, no overhead, no risk.",
    },
    {
        id: "04",
        title: "Backend & APIs",
        desc: "Scalable services and microservices. Node.js, Python, Go, PostgreSQL architected for growth.",
    },
    {
        id: "05",
        title: "DevOps & Cloud",
        desc: "CI/CD, containers, AWS/GCP/Azure. The infrastructure that lets fast teams move even faster.",
    },
    {
        id: "06",
        title: "AI Integration",
        desc: "GPT integrations, automation pipelines, intelligent workflows. Practical AI that actually ships.",
    },
]

export default function Services() {
    return (
        <section id="services" className="bg-ink text-white py-20 md:py-32">

            <div className="max-w-[1280px] mx-auto px-6 lg:px-12">

                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20 reveal">

                    <div>
                        <div className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-orange mb-6">
                            <span className="opacity-50">//</span>
                            What we build
                        </div>

                        <h2 className="font-sans font-bold text-[clamp(2.2rem,4vw,3.8rem)] leading-[1] tracking-[-0.04em]">
                            End-to-end tech,
                            <br />
                            <span className="text-orange">your way.</span>
                        </h2>
                    </div>

                    <a
                        href="#contact"
                        className="font-sans text-[0.82rem] border-b border-white/10 pb-[2px] text-white/40 hover:text-orange hover:border-orange transition"
                    >
                        All services →
                    </a>

                </div>

                <div className="flex flex-col">

                    {services.map((service) => (
                        <a
                            key={service.id}
                            href="#contact"
                            className="
                                grid 
                                md:grid-cols-[80px_1fr_60px]
                                grid-cols-[40px_1fr]
                                items-center gap-8
                                py-9
                                border-t border-white/10
                                last:border-b
                                relative
                                overflow-hidden
                                group
                                transition
                                hover:pl-5
                                reveal
                                "
                        >

                            <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-orange scale-y-0 origin-bottom transition group-hover:scale-y-100"></span>

                            <span className="font-mono text-[0.7rem] tracking-[0.08em] text-white/20">
                                {service.id}
                            </span>

                            <div>
                                <div className="font-sans font-semibold text-[clamp(1.2rem,2vw,1.7rem)] tracking-[-0.03em] group-hover:text-orange transition">
                                    {service.title}
                                </div>

                                <div className="text-[0.82rem] text-white/35 leading-[1.7] mt-2 max-w-[520px]">
                                    {service.desc}
                                </div>
                            </div>

                            <span className="hidden md:block text-[1.4rem] text-white/15 text-right transition group-hover:text-orange group-hover:translate-x-1 group-hover:-translate-y-1">
                                ↗
                            </span>

                        </a>
                    ))}

                </div>

            </div>

        </section>
    )
}
"use client";

import { ArrowRight, BrainCircuit, CloudCog, Code, Codesandbox, Globe, Server, TabletSmartphone, Users } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
    {
        title: "Web Development",
        description:
            "Responsive, performant web applications built with React, Vue, Next.js and modern frameworks. From landing pages to complex SaaS platforms.",
        icon: <Globe />,
    },
    {
        title: "Mobile Development",
        description:
            "Cross-platform iOS & Android apps with React Native and Flutter. Native performance, one codebase, faster delivery.",
        icon: <TabletSmartphone />,
    },
    {
        title: "Staff Augmentation",
        description:
            "Embed pre-vetted senior developers directly into your team. Scale up in days, not months — without the hiring overhead.",
        icon: <Users />,
    },
    {
        title: "Backend Engineering",
        description:
            "Scalable APIs, microservices, and database architecture. Node.js, Python, Go, PostgreSQL, MongoDB — built for growth.",
        icon: <Code />,
    },
    {
        title: "DevOps & Cloud",
        description:
            "CI/CD pipelines, containerization, AWS/GCP/Azure infrastructure. We set up the systems that let your team move fast.",
        icon: <CloudCog />,
    },
    {
        title: "AI Integration",
        description:
            "Practical AI features: GPT integrations, automation workflows, data pipelines, and intelligent product features that ship.",
        icon: <BrainCircuit />,
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-10 md:py-24 px-4 lg:px-15 bg-light dark:bg-dark mx-auto">

            <div className="flex items-center justify-between mb-12">

                <div>
                    <p className="text-[0.75rem] tracking-[0.2em] uppercase text-orange mb-4 font-bold">
                        What we build
                    </p>

                    <h2 className="font-display
                        font-extrabold
                        text-[clamp(2rem,4vw,3.2rem)]
                        leading-[1.05]
                        tracking-[-0.03em]
                        text-offwhite
                        max-w-[620px] text-text-dark dark:text-offwhite">
                        End-to-end tech,
                        <em className="text-orange"> your way.</em>
                    </h2>
                </div>

                <button className="hidden md:flex items-center gap-2 border border-light-border dark:border-dark-muted px-6 py-3 rounded-pill text-sm">
                    View all services
                    <ArrowRight size={16} />
                </button>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border border-light-border dark:border-dark-muted rounded-card overflow-hidden">

                {services.map((service, i) => (
                    <ServiceCard key={i} {...service} />
                ))}

            </div>

        </section>
    );
}
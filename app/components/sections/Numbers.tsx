"use client";

export default function Numbers() {
    const stats = [
        {
            number: "50",
            suffix: "+",
            label: ["Projects", "delivered"],
        },
        {
            number: "8",
            suffix: "+",
            label: ["Years", "operating"],
        },
        {
            number: "100",
            suffix: "%",
            label: ["Senior", "talent only"],
        },
        {
            number: "40",
            suffix: "%",
            label: ["Avg cost", "savings"],
        },
    ];

    return (
        <section className="bg-ink text-white py-0">
            <div className="max-w-[1280px] mx-auto border-t border-white/10 border-l border-white/10">

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">

                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="
                p-10 md:p-14
                border-b border-r border-white/10
                transition
                hover:bg-orange/5
              "
                        >
                            <div className="text-[clamp(2.8rem,4vw,4.5rem)] font-extrabold leading-none tracking-[-0.05em]">
                                {stat.number}
                                <sup className="text-orange text-[0.45em] align-super">
                                    {stat.suffix}
                                </sup>
                            </div>

                            <div className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-white/40 leading-relaxed">
                                {stat.label[0]}
                                <br />
                                {stat.label[1]}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
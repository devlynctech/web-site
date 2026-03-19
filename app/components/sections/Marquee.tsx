"use client";

const items = [
    "WEB DEVELOPMENT",
    "MOBILE APPS",
    "STAFF AUGMENTATION",
    "DEVOPS",
    "UI / UX DESIGN",
    "BACKEND ENGINEERING",
    "CLOUD INFRASTRUCTURE",
    "AI INTEGRATION",
    "NEARSHORE DEVELOPMENT",
];

export default function Marquee() {
    return (
        <div className="w-full overflow-hidden border-y border-light-border dark:border-dark-muted bg-light-mid dark:bg-dark-mid">

            <div className="flex w-max animate-marquee gap-10 py-6">

                {[...items, ...items].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 whitespace-nowrap">

                        <span className="w-1.5 h-1.5 bg-orange rounded-full"></span>

                        <span className="text-xs tracking-[0.2em] text-gray uppercase">
                            {item}
                        </span>


                    </div>
                ))}

            </div>
        </div>
    );
}
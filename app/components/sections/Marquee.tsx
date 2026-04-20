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
        <div className="w-full overflow-hidden  bg-ink">

            <div className="flex w-max animate-marquee gap-10 py-4 border-b border-white">

                {[...items, ...items].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 whitespace-nowrap">

                        <span className="w-1.5 h-1.5 bg-orange rounded-full"></span>

                        <span className="  font-mono
                            font-light
                            text-[0.65rem]
                            uppercase
                            tracking-label
                            text-white/80">
                            {item}
                        </span>


                    </div>
                ))}

            </div>
        </div>
    );
}
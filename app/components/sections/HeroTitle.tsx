"use client"

import { useEffect, useState } from "react"

const slides = [
    {
        l1: "Senior devs.",
        l2: "Your time zone.",
        l3: "Day one."
    },
    { l1: "Elite teams.", l2: "Zero overhead.", l3: "Ship faster." },
    { l1: "Dedicated.", l2: "Embedded.", l3: "Yours to keep." },
    { l1: "Always on.", l2: "Fast response.", l3: "24hr support." },
    { l1: "AI-powered.", l2: "Future-ready.", l3: "Built to scale." },
    { l1: "Cyber secure.", l2: "Zero exposure.", l3: "Ship with trust." },
]

export default function HeroTitle() {

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((i) => (i + 1) % slides.length)
        }, 4200)

        return () => clearInterval(interval)
    }, [])

    const slide = slides[index]

    return (
        <h1
            className="
    font-sans
    font-extrabold
    text-[clamp(2.6rem,7vw,8.5rem)]
    leading-[.9]
    tracking-tightest
    text-ink
    reveal
    pb-[0.15em]
  "
        >
            <span key={slide.l1} className="block animate-hero">
                {slide.l1}
            </span>

            <span
                key={slide.l2}
                className="block animate-hero"
                style={{ animationDelay: "0.3s" }}
            >
                {slide.l2}
            </span>

            <span
                key={slide.l3}
                className="block text-orange animate-hero"
                style={{ animationDelay: "0.5s" }}
            >
                {slide.l3}
            </span>
        </h1>
    )
}
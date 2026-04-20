"use client"

import { useEffect } from "react"

export default function useReveal() {

    useEffect(() => {

        const io = new IntersectionObserver(
            entries => {
                entries.forEach(e => {
                    if (e.isIntersecting) {
                        e.target.classList.add("visible")
                    }
                })
            },
            { threshold: 0.08 }
        )

        const elements = document.querySelectorAll(".reveal, .reveal-group")

        elements.forEach(el => io.observe(el))

        return () => io.disconnect()

    }, [])

}
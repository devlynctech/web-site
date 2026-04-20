"use client"

import { useEffect } from "react"

export default function Cursor() {
    useEffect(() => {
        const dot = document.getElementById("cursor-dot")
        const ring = document.getElementById("cursor-ring")

        if (!dot || !ring) return

        let mx = 0
        let my = 0
        let rx = 0
        let ry = 0

        const move = (e: MouseEvent) => {
            mx = e.clientX
            my = e.clientY
        }

        document.addEventListener("mousemove", move)

        const animate = () => {
            dot.style.left = `${mx}px`
            dot.style.top = `${my}px`

            rx += (mx - rx) * 0.13
            ry += (my - ry) * 0.13

            ring.style.left = `${rx}px`
            ring.style.top = `${ry}px`

            requestAnimationFrame(animate)
        }

        animate()

        const hoverElements = document.querySelectorAll(
            "a, button, input, textarea, .cursor-hover"
        )

        hoverElements.forEach(el => {
            el.addEventListener("mouseenter", () =>
                document.body.classList.add("cursor-hovering")
            )
            el.addEventListener("mouseleave", () =>
                document.body.classList.remove("cursor-hovering")
            )
        })

        return () => {
            document.removeEventListener("mousemove", move)
        }
    }, [])

    return (
        <>
            <div id="cursor-dot" />
            <div id="cursor-ring" />
        </>
    )
}
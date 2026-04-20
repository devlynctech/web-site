"use client"

import { useEffect, useState } from "react"

export default function useActiveSection(ids: string[]) {

    const [active, setActive] = useState("")

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id)
                    }
                })

            },
            { threshold: 0.5 }
        )

        ids.forEach(id => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()

    }, [ids])

    return active
}
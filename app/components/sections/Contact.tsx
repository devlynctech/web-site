"use client"

import { FormEvent, useState } from "react"
import { CheckCircle, LoaderCircle, Mail, Send } from "lucide-react"

type FormState = "idle" | "sending" | "success" | "error"
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const initialForm = {
    name: "",
    email: "",
    company: "",
    phone: "",
    project: "",
}

export default function Contact() {
    const [form, setForm] = useState(initialForm)
    const [status, setStatus] = useState<FormState>("idle")
    const [message, setMessage] = useState("")

    const updateField = (field: keyof typeof initialForm, value: string) => {
        setForm((current) => ({ ...current, [field]: value }))
    }

    const validateForm = () => {
        const name = form.name.trim()
        const email = form.email.trim()
        const company = form.company.trim()
        const phone = form.phone.trim()
        const project = form.project.trim()

        if (name.length < 2) {
            return "Please enter your name."
        }

        if (name.length > 80) {
            return "Name must be 80 characters or less."
        }

        if (!EMAIL_PATTERN.test(email)) {
            return "Please enter a valid email address."
        }

        if (email.length > 120) {
            return "Email must be 120 characters or less."
        }

        if (company.length > 120) {
            return "Company must be 120 characters or less."
        }

        if (phone.length > 30) {
            return "Phone must be 30 characters or less."
        }

        if (project.length < 20) {
            return "Please tell us a little more about your project."
        }

        if (project.length > 2000) {
            return "Project brief must be 2000 characters or less."
        }

        return ""
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const validationMessage = validateForm()

        if (validationMessage) {
            setStatus("error")
            setMessage(validationMessage)
            return
        }

        setStatus("sending")
        setMessage("")

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.message || "We could not send your message.")
            }

            setForm(initialForm)
            setStatus("success")
            setMessage("Thanks. We received your message and will reply within 24 hours.")
        } catch (error) {
            setStatus("error")
            setMessage(error instanceof Error ? error.message : "We could not send your message.")
        }
    }

    return (
        <section
            id="contact"
            className="relative bg-ink text-white py-20 md:py-32 overflow-hidden"
        >
            <div
                className="
                    absolute
                    right-[-3rem]
                    bottom-[-3rem]
                    text-[min(28vw,380px)]
                    font-extrabold
                    leading-none
                    text-transparent
                    pointer-events-none
                    select-none
                    [-webkit-text-stroke:1px_rgba(255,255,255,0.03)]
                "
            >
                SHIP
            </div>

            <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-20 items-start">
                <div className="reveal">
                    <div className="flex items-center gap-2 font-mono text-mono-sm uppercase tracking-[0.14em] text-orange mb-6">
                        <span className="opacity-50">//</span>
                        Start a project
                    </div>

                    <h2 className="font-sans text-[clamp(2.2rem,4vw,3.8rem)] font-bold leading-[1]">
                        Ready to build
                        <br />
                        <span className="text-orange">something great?</span>
                    </h2>

                    <p className="text-body-md text-white/50 mt-6 max-w-[460px] leading-[1.75]">
                        Tell us what you are building. We will review the context and reply
                        with clear next steps, timing, and the right team profile.
                    </p>

                    <div className="mt-10 space-y-4 text-body-sm text-white/55">
                        <a
                            href="mailto:hello@devlynctech.com"
                            className="inline-flex items-center gap-3 text-white hover:text-orange transition"
                        >
                            <Mail className="h-4 w-4 text-orange" />
                            hello@devlynctech.com
                        </a>

                        <div className="grid gap-3 pt-4 font-mono text-mono-xs uppercase tracking-[.12em] text-white/30">
                            <span>San Antonio, USA</span>
                            <span>San Salvador, El Salvador</span>
                            <span>Madrid, Spain</span>
                        </div>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="reveal grid gap-4 border border-white/10 bg-white/[0.03] p-5 md:p-7"
                >
                    <div className="grid md:grid-cols-2 gap-4">
                        <label className="grid gap-2">
                            <span className="font-mono text-mono-xs uppercase tracking-[.14em] text-white/40">
                                Name
                            </span>
                            <input
                                required
                                minLength={2}
                                maxLength={80}
                                value={form.name}
                                onChange={(event) => updateField("name", event.target.value)}
                                autoComplete="name"
                                className="h-12 bg-white/5 border border-white/10 px-4 text-body-sm outline-none transition focus:border-orange placeholder:text-white/25"
                                placeholder="Your name"
                            />
                        </label>

                        <label className="grid gap-2">
                            <span className="font-mono text-mono-xs uppercase tracking-[.14em] text-white/40">
                                Work email
                            </span>
                            <input
                                required
                                type="email"
                                maxLength={120}
                                value={form.email}
                                onChange={(event) => updateField("email", event.target.value)}
                                autoComplete="email"
                                className="h-12 bg-white/5 border border-white/10 px-4 text-body-sm outline-none transition focus:border-orange placeholder:text-white/25"
                                placeholder="you@company.com"
                            />
                        </label>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <label className="grid gap-2">
                            <span className="font-mono text-mono-xs uppercase tracking-[.14em] text-white/40">
                                Company
                            </span>
                            <input
                                value={form.company}
                                maxLength={120}
                                onChange={(event) => updateField("company", event.target.value)}
                                autoComplete="organization"
                                className="h-12 bg-white/5 border border-white/10 px-4 text-body-sm outline-none transition focus:border-orange placeholder:text-white/25"
                                placeholder="Company name"
                            />
                        </label>

                        <label className="grid gap-2">
                            <span className="font-mono text-mono-xs uppercase tracking-[.14em] text-white/40">
                                Phone
                            </span>
                            <input
                                value={form.phone}
                                maxLength={30}
                                onChange={(event) => updateField("phone", event.target.value)}
                                autoComplete="tel"
                                className="h-12 bg-white/5 border border-white/10 px-4 text-body-sm outline-none transition focus:border-orange placeholder:text-white/25"
                                placeholder="+1 000 000 0000"
                            />
                        </label>
                    </div>

                    <label className="grid gap-2">
                        <span className="font-mono text-mono-xs uppercase tracking-[.14em] text-white/40">
                            Project brief
                        </span>
                        <textarea
                            required
                            minLength={20}
                            maxLength={2000}
                            value={form.project}
                            onChange={(event) => updateField("project", event.target.value)}
                            rows={6}
                            className="resize-none bg-white/5 border border-white/10 px-4 py-3 text-body-sm outline-none transition focus:border-orange placeholder:text-white/25"
                            placeholder="What do you want to build, improve, or launch?"
                        />
                    </label>

                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="mt-2 inline-flex h-12 items-center justify-center gap-2 bg-orange px-6 text-btn font-semibold text-white transition hover:bg-orange-dark disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        {status === "sending" ? (
                            <LoaderCircle className="h-4 w-4 animate-spin" />
                        ) : status === "success" ? (
                            <CheckCircle className="h-4 w-4" />
                        ) : (
                            <Send className="h-4 w-4" />
                        )}
                        Send message
                    </button>

                    {message && (
                        <p
                            role={status === "error" ? "alert" : "status"}
                            className={`text-center text-body-sm ${
                                status === "error" ? "text-orange" : "text-white/55"
                            }`}
                        >
                            {message}
                        </p>
                    )}
                </form>
            </div>
        </section>
    )
}

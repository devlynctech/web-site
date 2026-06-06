import { NextResponse } from "next/server"

const CONTACT_EMAIL = "hello@devlynctech.com"
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type ContactPayload = {
    name?: string
    email?: string
    company?: string
    phone?: string
    project?: string
}

const escapeHtml = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")

const validateContactPayload = ({
    name,
    email,
    company,
    phone,
    project,
}: {
    name?: string
    email?: string
    company?: string
    phone?: string
    project?: string
}) => {
    if (!name || name.length < 2) {
        return "Please enter your name."
    }

    if (name.length > 80) {
        return "Name must be 80 characters or less."
    }

    if (!email || !EMAIL_PATTERN.test(email)) {
        return "Please enter a valid email address."
    }

    if (email.length > 120) {
        return "Email must be 120 characters or less."
    }

    if (company && company.length > 120) {
        return "Company must be 120 characters or less."
    }

    if (phone && phone.length > 30) {
        return "Phone must be 30 characters or less."
    }

    if (!project || project.length < 20) {
        return "Please tell us a little more about your project."
    }

    if (project.length > 2000) {
        return "Project brief must be 2000 characters or less."
    }

    return ""
}

export async function POST(request: Request) {
    let payload: ContactPayload

    try {
        payload = (await request.json()) as ContactPayload
    } catch {
        return NextResponse.json(
            { message: "Invalid request body." },
            { status: 400 }
        )
    }

    const name = payload.name?.trim()
    const email = payload.email?.trim()
    const company = payload.company?.trim()
    const phone = payload.phone?.trim()
    const project = payload.project?.trim()

    const validationMessage = validateContactPayload({
        name,
        email,
        company,
        phone,
        project,
    })

    if (validationMessage) {
        return NextResponse.json(
            { message: validationMessage },
            { status: 400 }
        )
    }

    const validName = name as string
    const validEmail = email as string
    const validProject = project as string

    const apiKey = process.env.RESEND_API_KEY
    const from = process.env.CONTACT_EMAIL_FROM || "Devlync Website <onboarding@resend.dev>"
    const to = process.env.CONTACT_EMAIL_TO || CONTACT_EMAIL

    if (!apiKey) {
        return NextResponse.json(
            { message: "Email service is not configured yet. Please contact hello@devlynctech.com directly." },
            { status: 500 }
        )
    }

    const html = `
        <h2>New Devlync contact request</h2>
        <p><strong>Name:</strong> ${escapeHtml(validName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(validEmail)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Project:</strong></p>
        <p>${escapeHtml(validProject).replace(/\n/g, "<br />")}</p>
    `

    const text = [
        "New Devlync contact request",
        `Name: ${validName}`,
        `Email: ${validEmail}`,
        `Company: ${company || "Not provided"}`,
        `Phone: ${phone || "Not provided"}`,
        "",
        "Project:",
        validProject,
    ].join("\n")

    const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            from,
            to,
            reply_to: validEmail,
            subject: `New project request from ${validName}`,
            html,
            text,
        }),
    })

    if (!response.ok) {
        const errorBody = await response.text()
        console.error("Resend contact email failed", {
            status: response.status,
            body: errorBody,
            from,
            to,
        })

        const fallbackMessage = "We could not send your message. Please email hello@devlynctech.com directly."
        let resendMessage = ""

        try {
            const parsedError = JSON.parse(errorBody) as {
                message?: string
                error?: { message?: string }
            }
            resendMessage = parsedError.message || parsedError.error?.message || ""
        } catch {
            resendMessage = errorBody
        }

        return NextResponse.json(
            {
                message: resendMessage
                    ? `${fallbackMessage} Resend: ${resendMessage}`
                    : fallbackMessage,
            },
            { status: 502 }
        )
    }

    return NextResponse.json({ message: "Message sent." })
}

import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Privacy Policy | Devlync",
    description: "Privacy Policy for Devlync Tech Company.",
}

const sections = [
    {
        title: "Information We Collect",
        body: "We collect information that you provide directly to us through our contact forms, newsletter subscriptions, and service requests. This may include your name, email address, phone number, and details about your organization or company.",
    },
    {
        title: "How We Use Your Information",
        body: "We use your information to provide our services, respond to your inquiries, process requests, and send updates related to our products and services. We do not use your data for purposes other than those described in this policy.",
    },
    {
        title: "Data Sharing",
        body: "We do not sell or rent your personal data to third parties. We may only share information with trusted service providers who help us operate our platform, always under strict confidentiality agreements and only to the extent necessary to provide our services.",
    },
    {
        title: "Cookies and Tracking",
        body: "Our website uses cookies to improve the user experience, analyze traffic, and personalize content. You may manage your cookie preferences through your browser settings. By continuing to browse our site, you agree to the use of cookies in accordance with this policy.",
    },
    {
        title: "SMS Communications",
        body: "By providing your mobile phone number and agreeing to receive text messages from us, you consent to receive informational and commercial SMS communications, including confirmations, reminders, status updates, and customer service notifications. Reply STOP to unsubscribe at any time. Reply HELP for assistance. Message and data rates may apply. Message frequency may vary.",
    },
    {
        title: "Data Security",
        body: "We implement reasonable technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of data transmission over the Internet can be guaranteed to be completely secure.",
    },
    {
        title: "Your Rights",
        body: "You have the right to access, correct, or request the deletion of your personal information at any time. If you would like to exercise any of these rights, please contact us through the channels listed at the end of this page.",
    },
    {
        title: "Changes to This Policy",
        body: "We reserve the right to update this Privacy Policy at any time. We will notify you of significant changes by publishing the updated version on this page with the corresponding update date.",
    },
]

export default function TermsAndConditionsPage() {
    return (
        <div className="bg-white text-ink">
            <section className="border-b border-gray-2 pt-36 pb-16">
                <div className="max-w-[980px] mx-auto px-6 lg:px-12">
                    <Link
                        href="/"
                        className="font-mono text-mono-xs uppercase tracking-[.16em] text-orange hover:text-orange-dark transition"
                    >
                        Back to home
                    </Link>

                    <h1 className="mt-8 font-sans text-[clamp(2.4rem,5vw,5rem)] font-bold leading-[1]">
                        Privacy Policy
                    </h1>

                    <p className="mt-6 font-mono text-mono-sm uppercase tracking-[.14em] text-gray-3">
                        Last updated: June 2026
                    </p>
                </div>
            </section>

            <section className="py-14 md:py-20">
                <div className="max-w-[980px] mx-auto px-6 lg:px-12 grid gap-10">
                    {sections.map((section) => (
                        <article key={section.title} className="border-b border-gray-2 pb-8">
                            <h2 className="text-[1.35rem] md:text-[1.75rem] font-semibold">
                                {section.title}
                            </h2>
                            <p className="mt-4 text-body-md text-gray-4 leading-[1.85]">
                                {section.body}
                            </p>
                        </article>
                    ))}

                    <article className="bg-ink text-white p-6 md:p-8">
                        <h2 className="text-[1.35rem] md:text-[1.75rem] font-semibold">
                            Contact Us
                        </h2>
                        <p className="mt-4 text-body-md text-white/55 leading-[1.8]">
                            If you have any questions about this policy or how we handle your
                            personal data, please contact us.
                        </p>

                        <div className="mt-6 grid gap-5 text-body-sm text-white/65">
                            <a
                                href="mailto:hello@devlynctech.com"
                                className="text-orange hover:text-white transition"
                            >
                                hello@devlynctech.com
                            </a>

                            <div>
                                <span className="font-mono text-mono-xs uppercase tracking-[.14em] text-white/35">
                                    San Antonio, USA
                                </span>
                                <div>1530 NW Crossroad</div>
                            </div>

                            <div>
                                <span className="font-mono text-mono-xs uppercase tracking-[.14em] text-white/35">
                                    San Salvador, El Salvador
                                </span>
                                <div>World Trade Center</div>
                                <div>87 Av. Norte & C. El Mirador</div>
                            </div>

                            <div>
                                <span className="font-mono text-mono-xs uppercase tracking-[.14em] text-white/35">
                                    Madrid, Spain
                                </span>
                                <div>Paseo de la Castellana</div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    )
}

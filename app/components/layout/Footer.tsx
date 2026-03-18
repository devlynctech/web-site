import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-light-mid dark:bg-dark-mid border-t border-light-border dark:border-dark-muted">
            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="flex flex-col md:flex-row justify-between gap-10">

                    {/* Brand */}
                    <div>
                        <h3 className="text-lg font-semibold text-text-dark dark:text-offwhite">
                            Brand
                        </h3>
                        <p className="mt-3 text-sm text-text-muted dark:text-gray max-w-sm">
                            Modern platform built with Next.js and Tailwind.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-12 text-sm">

                        <div className="flex flex-col gap-2">
                            <span className="font-semibold text-text-dark dark:text-offwhite">
                                Product
                            </span>
                            <Link href="#">Features</Link>
                            <Link href="#">Pricing</Link>
                        </div>

                        <div className="flex flex-col gap-2">
                            <span className="font-semibold text-text-dark dark:text-offwhite">
                                Company
                            </span>
                            <Link href="#">About</Link>
                            <Link href="#">Contact</Link>
                        </div>

                    </div>
                </div>

                <div className="mt-10 text-sm text-gray-light text-center">
                    © {new Date().getFullYear()} Brand. All rights reserved.
                </div>

            </div>
        </footer>
    );
}
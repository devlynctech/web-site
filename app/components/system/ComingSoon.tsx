"use client";

export default function ComingSoon() {
    return (
        <div className="h-dvh flex items-center justify-center bg-light-warm dark:bg-dark px-4">

            <div className="text-center max-w-2xl w-full">

                <div className="inline-flex self-center items-center gap-2 border border-orange/30 bg-orange/10 text-orange rounded-3xl px-4 py-1 text-sm">
                    <span className="w-2 h-2 bg-orange rounded-full animate-pulse"></span>
                    Coming Soon
                </div>

                <h1 className="mt-8 font-display font-extrabold leading-[.95] tracking-[-0.04em] text-[clamp(2rem,6vw,5rem)] text-text-dark dark:text-offwhite">
                    We’re building something
                    <span className="block text-orange mt-2">
                        awesome
                    </span>
                </h1>

                <p className="mt-6 text-text-muted dark:text-gray text-lg">
                    Our website is currently under construction.
                    We’ll be live very soon.
                </p>

                <div className="mt-10 flex justify-center gap-2">
                    <span className="w-3 h-3 bg-orange rounded-full animate-bounce"></span>
                    <span className="w-3 h-3 bg-orange rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-3 h-3 bg-orange rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>

            </div>
        </div>
    );
}
"use client";

import { ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="relative py-10 md:py-32 overflow-hidden bg-dark">

            <div className="
  absolute inset-0
  bg-[radial-gradient(circle_at_50%_60%,rgba(255,100,32,0.25),transparent_40%)]
  opacity-50
"/>

            <div className="relative z-10 px-4 md:px-[24px] xl:px-[60px] text-center max-w-3xl mx-auto">

                <h2 className="
          font-display font-extrabold
          text-[clamp(2rem,6vw,4rem)]
          leading-[1]
          tracking-[-0.04em]
          text-offwhite
        ">
                    Ready to build
                    <br />
                    <span className="text-orange">
                        something great?
                    </span>
                </h2>

                <p className="
          mt-6
          text-gray
          text-base md:text-lg
          max-w-xl mx-auto
        ">
                    Tell us about your project — we’ll get back within 24 hours
                    with a concrete proposal.
                </p>

                <div className="mt-10 flex justify-center">
                    <a
                        href="mailto:hello@devlync.com"
                        className="
              inline-flex items-center gap-2
              bg-orange text-white
              px-6 py-3
              rounded-full
              font-medium
              transition-all duration-300
              hover:bg-orange-light
              hover:scale-105
              shadow-[0_10px_40px_rgba(255,100,32,0.35)]
            "
                    >
                        Get in touch

                        <span className="transition-transform group-hover:translate-x-1">
                            <ArrowRight size={18} />
                        </span>
                    </a>

                </div>

                <p className="mt-4 text-sm text-gray-light">
                    Or email us directly:
                    <a
                        href="mailto:hello@devlync.com"
                        className="text-orange ml-1 hover:underline"
                    >
                        hello@devlync.com
                    </a>
                </p>

            </div>

        </section>
    );
}

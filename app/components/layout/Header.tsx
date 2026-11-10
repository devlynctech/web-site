"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useActiveSection from "@/app/hooks/useActiveSection";
const links = [
  { href: "/#services", label: "Services", section: "services" },
  { href: "/#process", label: "Process", section: "process" },
  { href: "/#why", label: "Why Us", section: "why" },
  { href: "/#contact", label: "Contact", section: "contact" },
  { href: "/faqs", label: "FAQs", section: "" },
  { href: "/blog", label: "Blog", section: "" },
];
export default function Header() {
  const active = useActiveSection(["services", "process", "why", "contact"]);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", close);
    };
  }, [open]);
  const isActive = (item: (typeof links)[number]) =>
    item.section
      ? pathname === "/" && active === item.section
      : pathname.startsWith(item.href);
  return (
    <>
      <header
        className={
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 " +
          (scrolled
            ? "bg-white/95 backdrop-blur border-b border-gray-2 py-4"
            : "bg-transparent py-7")
        }
      >
        {!scrolled && (
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-orange origin-left animate-bar" />
        )}
        <div className="max-w-[1280px] mx-auto px-4 md:px-[4rem] grid grid-cols-[auto_1fr_auto] items-center">
          <Link href="/" aria-label="Devlync home">
            <Image
              src={
                scrolled ? "/images/Icono principal.png" : "/images/Logo.png"
              }
              alt="Devlync"
              width={scrolled ? 90 : 160}
              height={40}
              priority
            />
          </Link>
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex justify-center items-center gap-6 text-[12.5px] font-semibold"
          >
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item) ? "page" : undefined}
                className={
                  "transition " +
                  (isActive(item)
                    ? "text-orange"
                    : "text-gray-4 hover:text-ink")
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex justify-end items-center">
            <Link
              href="/#contact"
              className="hidden lg:inline-flex bg-ink text-white px-6 py-2 text-btn font-semibold hover:bg-orange transition"
            >
              Start a project
            </Link>
            <button
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen(!open)}
              className="lg:hidden z-[110] flex flex-col gap-[5px] p-2"
            >
              {open ? (
                <span className="text-2xl">×</span>
              ) : (
                <>
                  <span className="w-[22px] h-[2px] bg-ink" />
                  <span className="w-[22px] h-[2px] bg-ink" />
                  <span className="w-[22px] h-[2px] bg-ink" />
                </>
              )}
            </button>
          </div>
        </div>
        {open && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="lg:hidden flex flex-col gap-5 bg-white px-6 pt-8 pb-4 max-h-[80dvh] overflow-y-auto"
          >
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item) ? "page" : undefined}
                className={
                  "text-lg font-semibold " +
                  (isActive(item) ? "text-orange" : "text-ink")
                }
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="bg-ink text-white p-4 text-sm"
            >
              Start a project ↗
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}

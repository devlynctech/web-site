"use client";

import { useTheme } from "../providers/ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex items-center justify-center w-10 h-10 rounded-pill border border-light-border dark:border-dark-muted transition hover:bg-light-warm dark:hover:bg-dark-subtle"
        >
            {theme === "dark" ? (
                <Sun
                    size={22}
                    className="text-offwhite transition-transform duration-300 rotate-0"
                />
            ) : (
                <Moon size={22} className="text-text-dark transition-transform duration-300 rotate-0" />
            )}
        </button>
    );
}
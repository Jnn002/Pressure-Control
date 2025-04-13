import { useEffect, useState } from "react";
import { Theme } from "@/contexts/ThemeEnum";

export const useBrowserTheme = () => {
    const [theme, setTheme] = useState<Theme>(() => {
        const storedTheme: string | null = localStorage.getItem("theme");
        if (!storedTheme) {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            return prefersDark ? Theme.Dark : Theme.Light;
        }
        if (storedTheme === Theme.Dark || storedTheme === Theme.Light) {
            return storedTheme as Theme;
        }
        return Theme.Light;
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (e: MediaQueryListEvent) => {
            setTheme(e.matches ? Theme.Dark : Theme.Light);
        };
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === Theme.Light ? Theme.Dark : Theme.Light));
    };

    return { theme, toggleTheme };
};

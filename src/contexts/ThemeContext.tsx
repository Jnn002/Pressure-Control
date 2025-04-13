import { createContext } from "react";
import { useBrowserTheme } from "@/hooks/useBrowserTheme";
import { Theme } from "@/contexts/ThemeEnum";

export interface ThemeContextState {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextState>({ theme: Theme.Light, toggleTheme: () => {} });

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const { theme, toggleTheme } = useBrowserTheme();

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeContextProvider };

import React from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

export const useThemeContext = () => {
    const context = React.useContext(ThemeContext);
    if (!context) throw new Error("useTheme debe ser usado dentro de un ThemeContextProvider");
    return context;
};

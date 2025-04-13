import React from "react";
import { LogContext } from "@/contexts/LogContext";

export const useLogContext = () => {
    const context = React.useContext(LogContext);
    if (!context) throw new Error("useLogContext debe ser usado dentro de un LogContextProvider");
    return context;
};

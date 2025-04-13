import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeContextProvider } from "@/contexts/ThemeContext";
import { LogContextProvider } from "@/contexts/LogContext";
import App from "@/App";
import { HelmetProvider } from "react-helmet-async";

import "@/styles.css";

const basename = import.meta.env.MODE === "development" ? "/" : "/MiPresion";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <HelmetProvider>
            <ThemeContextProvider>
                <LogContextProvider>
                    <Router basename={basename}>
                        <Routes>
                            <Route path="*" element={<App />} />
                        </Routes>
                    </Router>
                </LogContextProvider>
            </ThemeContextProvider>
        </HelmetProvider>
    </React.StrictMode>
);

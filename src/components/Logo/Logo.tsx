import React from "react";
import Favicon from "@/assets/svg/faviconh.svg?react";

import styles from "./Logo.module.css";

const Logo = React.memo(() => {
    return (
        <div className={`${styles.titleContainer}`}>
            <Favicon className={styles.logo} width="1.875rem" height="1.875rem" />
            <div className={`${styles.appTitle}`}>
                <h1>PresiónUMG</h1>
                <span>Registro de presión sanguínea</span>
            </div>
        </div>
    );
});

export default Logo;
//TODO: <span>v.{import.meta.env.VITE_APP_VERSION}</span>

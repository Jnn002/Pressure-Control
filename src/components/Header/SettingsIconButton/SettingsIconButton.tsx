import { useNavigate } from "react-router-dom";
import { useThemeContext } from "@/hooks/useTheme";
import { Theme } from "@/contexts/ThemeEnum";

import burger_white from "@/assets/svg/burger_white.svg";
import burger from "@/assets/svg/burger.svg";

import styles from "./SettingsIconButton.module.css";

const SettingsIconButton = () => {
    const navigate = useNavigate();
    const { theme } = useThemeContext();

    return (
        <button
            onClick={() => navigate("/settings")}
            aria-label={"Ícono de ajustes"}
            role="button"
            className={styles.settingsIconButton}
        >
            <img src={theme === Theme.Dark ? burger_white : burger} className={styles.menuIcon}></img>
        </button>
    );
};

export default SettingsIconButton;

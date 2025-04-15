import { useNavigate } from "react-router-dom";
import { useThemeContext } from "@/hooks/useTheme";
import { Theme } from "@/contexts/ThemeEnum";
import ChartIcon from "@/assets/svg/chart_black.svg";
import ChartIconWhite from "@/assets/svg/chart_white.svg";
import styles from "./StatsIconButton.module.css";

const StatsIconButton = () => {
    const navigate = useNavigate();
    const { theme } = useThemeContext();

    return (
        <button
            onClick={() => navigate("/stats")}
            aria-label="Ver estadísticas"
            role="button"
            className={`${styles.statsIconButton} stats-button-mobile`}
        >
            <img src={theme === Theme.Dark ? ChartIconWhite : ChartIcon} className={styles.statsIcon} />
        </button>
    );
};

export default StatsIconButton;

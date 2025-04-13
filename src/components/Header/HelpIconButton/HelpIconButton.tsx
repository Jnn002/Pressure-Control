import { useNavigate } from "react-router-dom";
import HelpIcon from "@/assets/svg/help.svg?react";

import styles from "./HelpIconButton.module.css";

const HelpIconButton = () => {
    const navigate = useNavigate();
    return (
        <button
            onClick={() => navigate("/help")}
            aria-label={"Ícono de ayuda"}
            role="button"
            className={styles.helpIconButton}
        >
            <HelpIcon width="1.5rem" height="1.5rem" />
        </button>
    );
};

export default HelpIconButton;

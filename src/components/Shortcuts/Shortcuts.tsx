import { useNavigate } from "react-router-dom";
import QuestionIcon from "@/assets/svg/question_gray.svg?react";

import styles from "./Shortcuts.module.css";

const Shortcuts = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.shortcutsContainer} onTouchMove={e => e.stopPropagation()}>
            <div className={styles.content} onTouchMove={e => e.stopPropagation()}>
                <h2 className={styles.title}>Consejos</h2>

                <span className={styles.rowTitle}></span>
                <div className={styles.row} onClick={() => navigate("/help/measurementguide")}>
                    <QuestionIcon width="1.25rem" height="1.25rem" />
                    <span>¿Cómo me tomo la presión?</span>
                </div>

                <span className={styles.rowTitle}></span>
                <div className={styles.row} onClick={() => navigate("/help/arrythmia")}>
                    <QuestionIcon width="1.25rem" height="1.25rem" />
                    <span style={{ fontSize: "0.7rem" }}>¿Qué es Arritmia?</span>
                </div>

                <span className={styles.rowTitle}></span>
                <span className={styles.rowTitle}></span>
            </div>
        </div>
    );
};

export default Shortcuts;

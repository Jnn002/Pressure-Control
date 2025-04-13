import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Logo from "@/components/Logo/Logo";
import QuestionIcon from "@/assets/svg/question_gray.svg?react";
import WarningIcon from "@/assets/svg/warning_gray.svg?react";
import ChartIcon from "@/assets/svg/chart_gray.svg?react";
import StorageIcon from "@/assets/svg/database_gray.svg?react";
import Seo from "../SEO/SEO";

import styles from "./Help.module.css";

const Help = ({ onClose }: { onClose: () => void }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const isChildRoute = location.pathname !== "/help";

    return (
        <>
            <Seo title="Ayuda" />

            <div className={styles.helpContainer} onTouchMove={e => e.stopPropagation()}>
                <div className={styles.header}>
                    <Logo />
                    <button onClick={onClose} className={`${styles.closeButton} ${styles.button}`}>
                        Cerrar
                    </button>
                </div>
                <div className={styles.content} onTouchMove={e => e.stopPropagation()}>
                    {!isChildRoute && (
                        <>
                            <h2 className={styles.title}>Ayuda</h2>

                            <span className={styles.rowTitle}></span>
                            <button
                                className={`${styles.row}  ${styles.button}`}
                                onClick={() => navigate("/help/measurementguide")}
                            >
                                <QuestionIcon width="1.25rem" height="1.25rem" />
                                <span>¿Cómo me tomo la presión?</span>
                            </button>

                            <span className={styles.rowTitle}></span>
                            <button
                                className={`${styles.row}  ${styles.button}`}
                                onClick={() => navigate("/help/arrythmia")}
                            >
                                <QuestionIcon width="1.25rem" height="1.25rem" />
                                <span>¿Qué es Arritmia?</span>
                            </button>

                            <span className={styles.rowTitle}></span>
                            <button
                                className={`${styles.row}  ${styles.button}`}
                                onClick={() => navigate("/help/outofrangevalues")}
                            >
                                <WarningIcon width="1.25rem" height="1.25rem" />
                                <span>¿Qué es "Valores fuera de rango"?</span>
                            </button>

                            <span className={styles.rowTitle}></span>
                            <button
                                className={`${styles.row}  ${styles.button}`}
                                onClick={() => navigate("/help/bloodpressurelevels")}
                            >
                                <ChartIcon width="1.25rem" height="1.25rem" />
                                <span>Tabla de niveles de presión</span>
                            </button>

                            <span className={styles.rowTitle}></span>
                            <button
                                className={`${styles.row}  ${styles.button}`}
                                onClick={() => navigate("/help/storage")}
                            >
                                <StorageIcon width="1.25rem" height="1.25rem" />
                                <span>¿Dónde se guardan mis datos?</span>
                            </button>
                            <span className={styles.rowTitle}></span>
                            <span className={styles.rowTitle}></span>
                        </>
                    )}
                    <Outlet />
                </div>
            </div>
        </>
    );
};
export default Help;

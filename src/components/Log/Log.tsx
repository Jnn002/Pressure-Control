import { LogData } from "@/components/AddEditLog/AddEditLog";

import { useThemeContext } from "@/hooks/useTheme";
import { useLogContext } from "@/hooks/useLogContext";
import { categoryType, getCategory } from "@/utils/getCategory";
import getPNGIconPath from "@/utils/getPNGIconPath";

import WarningIcon from "@/assets/svg/warning.svg?react";
import ClockIcon from "@/assets/svg/clock_gray.svg?react";

import styles from "./Log.module.css";

const styleByCategory = {
    [categoryType.HIPOTENSION]: styles["levelLow"],
    [categoryType.NORMAL]: styles["levelNormal"],
    [categoryType.NORMAL_ELEVATED]: styles["levelElevated"],
    [categoryType.STAGE_1]: styles["levelStage1"],
    [categoryType.STAGE_2]: styles["levelStage2"],
    [categoryType.STAGE_3]: styles["levelStage3"],
    [categoryType.SYSTOLIC_AISOLATED]: styles["levelAisolated"],
    [categoryType.OUT_OF_RANGE]: styles["levelError"]
};

const Log = ({ id, date, systolic, diastolic, pulse, medicine, notes, arrhythmia }: LogData) => {
    const { theme } = useThemeContext();
    const { setSelectedLogId } = useLogContext();

    const category = getCategory(systolic, diastolic);

    return (
        <button className={styles.logContainer} onClick={() => setSelectedLogId(id)}>
            <section className={styles.row}>
                <span className={`${styles.level} ${styleByCategory[category.value]}`} title="Nivel">
                    {category.value}{" "}
                    {category.value == categoryType.OUT_OF_RANGE ? (
                        <WarningIcon width="1.25rem" height="1.25rem" />
                    ) : (
                        ""
                    )}
                </span>
                <span className={styles.date} title="Hora">
                    <ClockIcon width="1rem" height="1rem" /> {date}
                </span>
            </section>
            <section className={styles.row}>
                <div className={styles.mmhgContainer}>
                    <span className={styles.mmhg} title="Presión sistólica">
                        {systolic}
                    </span>
                    <span className={styles.mmhg}>/</span>
                    <span className={styles.mmhg} title="Presión diastólica">
                        {diastolic}
                    </span>{" "}
                    <span className={styles.leyend} title="Milímetros de mercurio">
                        mmHg
                    </span>
                </div>
                <div className={styles.bpmContainer}>
                    <div className={styles.iconsContainer}>
                        <img
                            className={styles.icon}
                            width="19"
                            height="19"
                            src={arrhythmia ? getPNGIconPath("heart") : getPNGIconPath("heart", theme)}
                            alt={`Ícono ${arrhythmia ? "arritmia" : "no arritmia"}`}
                            title={`${arrhythmia ? "Arritmia" : "No arritmia"}`}
                        />
                        <img
                            className={styles.icon}
                            width="19"
                            height="19"
                            src={medicine ? getPNGIconPath("pill") : getPNGIconPath("pill", theme)}
                            alt={`Ícono píldora ${medicine ? "" : "no "}tomada`}
                            title={`Píldora ${medicine ? "" : "no "}tomada`}
                        />
                        <img
                            className={styles.icon}
                            width="19"
                            height="19"
                            src={notes ? getPNGIconPath("pencil") : getPNGIconPath("pencil", theme)}
                            alt={`Ícono ${notes ? "hay" : "no hay"} notas`}
                            title={`${notes ? "Hay" : "No hay"} notas`}
                        />
                    </div>
                    {Number(pulse) > 0 && (
                        <div className={styles.pulseContainer}>
                            <span className={styles.bpm} title="Pulso">
                                {pulse}
                            </span>
                            <div className={styles.leyendContainer}>
                                <span className={styles.leyend}>Pulso</span>
                                <span className={styles.leyendSmaller}>BPM</span>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </button>
    );
};

export default Log;

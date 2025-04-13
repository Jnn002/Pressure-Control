import Logo from "@/components/Logo/Logo";
import OutOfRangeValues from "@/components/OutOfRangeValues/OutOfRangeValues";
import BloodPressureLevels from "@/components/BloodPressureLevels/BloodPressureLevels";
import Seo from "@/components/SEO/SEO";

import styles from "./OutOfRangeValuesWrapper.module.css";

const OutOfRangeValuesWrapper = ({ onClose }: { onClose: () => void }) => {
    return (
        <>
            <Seo title="Ayuda - ¿Qué es “Valores fuera de rango”?" />
            <section className={styles.outOfRangeValuesWrapperContainer} onTouchMove={e => e.stopPropagation()}>
                <div className={styles.header}>
                    <Logo />
                    <button onClick={onClose} className={`${styles.closeButton} ${styles.button}`}>
                        Cerrar
                    </button>
                </div>
                <div className={styles.content} onTouchMove={e => e.stopPropagation()}>
                    <OutOfRangeValues />
                    <BloodPressureLevels />
                </div>
            </section>
        </>
    );
};
export default OutOfRangeValuesWrapper;

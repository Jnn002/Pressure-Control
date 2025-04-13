import Logo from "@/components/Logo/Logo";
import BloodPressureLevels from "@/components/BloodPressureLevels/BloodPressureLevels";
import Seo from "@/components/SEO/SEO";

import styles from "./BloodPressureLevelsWrapper.module.css";

const BloodPressureLevelsWrapper = ({ onClose }: { onClose: () => void }) => {
    return (
        <>
            <Seo title="Ayuda - Tabla de niveles de presión arterial" />
            <section className={styles.bloodPressureLevelsWrapperContainer} onTouchMove={e => e.stopPropagation()}>
                <div className={styles.header}>
                    <Logo />
                    <button onClick={onClose} className={`${styles.closeButton} ${styles.button}`}>
                        Cerrar
                    </button>
                </div>
                <div className={styles.content} onTouchMove={e => e.stopPropagation()}>
                    <BloodPressureLevels />
                </div>
            </section>
        </>
    );
};
export default BloodPressureLevelsWrapper;

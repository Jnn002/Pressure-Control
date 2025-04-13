import Logo from "@/components/Logo/Logo";
import Arrythmia from "@/components/Arrythmia/Arrythmia";
import Seo from "@/components/SEO/SEO";

import styles from "./ArrythmiaWrapper.module.css";

const ArrythmiaWrapper = ({ onClose }: { onClose: () => void }) => {
    return (
        <>
            <Seo title='Ayuda - ¿Qué es "Arritmia (latido irregular)"?' />
            <section className={styles.arrythmiaWrapperContainer} onTouchMove={e => e.stopPropagation()}>
                <div className={styles.header}>
                    <Logo />
                    <button onClick={onClose} className={`${styles.closeButton} ${styles.button}`}>
                        Cerrar
                    </button>
                </div>
                <div className={styles.content} onTouchMove={e => e.stopPropagation()}>
                    <Arrythmia />
                </div>
            </section>
        </>
    );
};
export default ArrythmiaWrapper;

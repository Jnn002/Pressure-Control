import Logo from "@/components/Logo/Logo";
import Stats from "@/components/Stats/Stats";
import Seo from "@/components/SEO/SEO";
import styles from "./StatsWrapper.module.css";

const StatsWrapper = ({ onClose }: { onClose: () => void }) => {
    return (
        <>
            <Seo title="Estadísticas de Presión Arterial" />
            <section className={styles.statsWrapperContainer} onTouchMove={e => e.stopPropagation()}>
                <div className={styles.header}>
                    <Logo />
                    <button onClick={onClose} className={`${styles.closeButton} ${styles.button}`}>
                        Cerrar
                    </button>
                </div>
                <div className={styles.content} onTouchMove={e => e.stopPropagation()}>
                    <Stats />
                </div>
            </section>
        </>
    );
};

export default StatsWrapper;

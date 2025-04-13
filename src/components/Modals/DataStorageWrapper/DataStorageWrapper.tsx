import Logo from "@/components/Logo/Logo";
import DataStorage from "@/components/DataStorage/DataStorage";
import Seo from "@/components/SEO/SEO";

import styles from "./DataStorageWrapper.module.css";

const DataStorageWrapper = ({ onClose }: { onClose: () => void }) => {
    return (
        <>
            <Seo title="Ayuda - ¿Dónde se guardan mis datos?" />
            <section className={styles.dataStorageWrapperContainer} onTouchMove={e => e.stopPropagation()}>
                <div className={styles.header}>
                    <Logo />
                    <button onClick={onClose} className={`${styles.closeButton} ${styles.button}`}>
                        Cerrar
                    </button>
                </div>
                <div className={styles.content} onTouchMove={e => e.stopPropagation()}>
                    <DataStorage />
                </div>
            </section>
        </>
    );
};
export default DataStorageWrapper;

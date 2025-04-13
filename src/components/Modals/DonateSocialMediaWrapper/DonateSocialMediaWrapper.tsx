import Logo from "@/components/Logo/Logo";
import Seo from "@/components/SEO/SEO";

import styles from "./DonateSocialMediaWrapper.module.css";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import Donate from "@/components/Donate/Donate";

const ArrythmiaWrapper = ({ onClose }: { onClose: () => void }) => {
    return (
        <>
            <Seo title="Donaciones y Redes de Contacto" />
            <section className={styles.arrythmiaWrapperContainer} onTouchMove={e => e.stopPropagation()}>
                <div className={styles.header}>
                    <Logo />
                    <button onClick={onClose} className={`${styles.closeButton} ${styles.button}`}>
                        Cerrar
                    </button>
                </div>
                <div className={styles.content} onTouchMove={e => e.stopPropagation()}>
                    <SocialMedia />
                    <Donate />
                </div>
            </section>
        </>
    );
};
export default ArrythmiaWrapper;

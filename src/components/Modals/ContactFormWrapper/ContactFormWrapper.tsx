import ContactForm from "@/components/ContactForm/ContactForm";
import Logo from "@/components/Logo/Logo";
import Seo from "@/components/SEO/SEO";

import styles from "./ContactFormWrapper.module.css";

interface ContactFormWrapperProps {
    onClose: () => void;
}

const ContactFormWrapper = ({ onClose }: ContactFormWrapperProps) => {
    return (
        <>
            <Seo title="Contacto" />
            <div className={styles.contactFormWrapperContainer} onTouchMove={e => e.stopPropagation()}>
                <div className={styles.header}>
                    <Logo />
                    <button onClick={onClose} className={`${styles.closeButton} ${styles.button}`}>
                        Cerrar
                    </button>
                </div>
                <div className={styles.content} onTouchMove={e => e.stopPropagation()}>
                    <ContactForm />
                </div>
            </div>
        </>
    );
};

export default ContactFormWrapper;

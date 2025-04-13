import { useNavigate } from "react-router-dom";
import AddButton from "@/components/AddButton/AddButton";
import styles from "./Footer.module.css";

interface FooterProps {
    onAddClick: () => void;
}

const Footer = ({ onAddClick }: FooterProps) => {
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.footerSpacer} />
            <footer className={styles.footer}>
                <div className={styles.buttonContainer}>
                    <button
                        className={styles.statsButton}
                        onClick={() => navigate("/stats")}
                        aria-label="Ver estadísticas"
                    >
                        <div className={styles.statsButtonContent}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                width="24"
                                height="24"
                            >
                                <path d="M8 17a1 1 0 01-1-1v-5a1 1 0 112 0v5a1 1 0 01-1 1zm4 0a1 1 0 01-1-1V7a1 1 0 112 0v9a1 1 0 01-1 1zm4 0a1 1 0 01-1-1v-7a1 1 0 112 0v7a1 1 0 01-1 1z" />
                            </svg>
                            <span>Estadísticas</span>
                        </div>
                    </button>
                </div>
                <div className={styles.buttonContainer}>
                    <AddButton onClick={onAddClick} />
                </div>
            </footer>
        </>
    );
};

export default Footer;

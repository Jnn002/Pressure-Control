import { useNavigate } from "react-router-dom";
import { useThemeContext } from "@/hooks/useTheme";
import { Theme } from "@/contexts/ThemeEnum";
import PdfIcon from "@/assets/svg/pdf.svg";
import PdfIconWhite from "@/assets/svg/pdf_white.svg";

import styles from "./GeneratePDFIconButton.module.css";

const GeneratePDFIconButton = () => {
    const { theme } = useThemeContext();
    const navigate = useNavigate();
    return (
        <button
            onClick={() => navigate("/settings/exportpdf")}
            aria-label={"Ícono de exportar a PDF"}
            role="button"
            className={styles.generatePDFIconButton}
        >
            <img src={theme === Theme.Dark ? PdfIconWhite : PdfIcon} className={styles.pdfIcon}></img>
        </button>
    );
};

export default GeneratePDFIconButton;

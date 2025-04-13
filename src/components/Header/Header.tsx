import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo/Logo";
import StatsIconButton from "./StatsIconButton/StatsIconButton";
import GeneratePDFIconButton from "./GeneratePDFIconButton/GeneratePDFIconButton";
import SettingsIconButton from "./SettingsIconButton/SettingsIconButton";
import ToggleThemeIconButton from "./ToggleThemeIconButton/ToggleThemeIconButton";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <div className={styles.iconsRightContainer}>
                <StatsIconButton />
                <GeneratePDFIconButton />
                <ToggleThemeIconButton />
                <SettingsIconButton />
            </div>
        </header>
    );
};

export default Header;

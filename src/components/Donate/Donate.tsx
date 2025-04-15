import { useEffect } from "react";
import { useThemeContext } from "@/hooks/useTheme";
import { copyToClipboard } from "@/utils/copyToClipboard";
import { Theme } from "@/contexts/ThemeEnum";

import copy from "@/assets/copy.png";
import banco_industrial from "@/assets/banco_industrial.png";
import banco_industrial_black from "@/assets/banco_industrial.png";

import styles from "./Donate.module.css";

const DONATE_TITLES = ["Apoyar el proyecto"];

const DONATE_EMOJIS = ["💖", "❤️"];

const DONATE_MESSAGES: string[] = [
    "¡Tu apoyo hace posible que este proyecto siga creciendo!",
    "Cada contribución cuenta para hacer la diferencia",
    "Gracias por creer en nuestro proyecto",
    "Tu generosidad impulsa nuestro desarrollo",
    "Con tu ayuda, podemos lograr grandes cosas",
    "¡Gracias por ser parte de nuestra comunidad!",
    "Tu donación nos ayuda a seguir innovando",
    "Juntos podemos hacer que este proyecto sea aún mejor"
];

const getRandomIndex = (itemsArray: string[]) => {
    return Math.floor(Math.random() * itemsArray.length);
};

const Donate = () => {
    const { theme } = useThemeContext();
    const bankAccount = "01233456789";
    useEffect(() => {
        const images = [banco_industrial_black, banco_industrial, copy];
        images.forEach(image => {
            new Image().src = image;
        });
    }, []);

    const handleTheterClick = () => {
        copyToClipboard(bankAccount);
    };

    return (
        <div className={styles.donateContainer}>
            <h3>{DONATE_TITLES[getRandomIndex(DONATE_TITLES)]}</h3>
            <span>
                {DONATE_EMOJIS[getRandomIndex(DONATE_EMOJIS)]} {DONATE_MESSAGES[getRandomIndex(DONATE_MESSAGES)]}
            </span>
            <div className={styles.walletContainer}>
                <div className={styles.walletColumn}>
                    <img
                        src={theme === Theme.Dark ? banco_industrial_black : banco_industrial}
                        width={100}
                        height={40.61}
                        alt="Banco Industrial banner"
                        className={styles.platformLogo}
                    />
                    <button className={styles.bankAcc} onClick={handleTheterClick}>
                        <div title="Donar">
                            <p>Número de cuenta</p>
                        </div>
                        <div>
                            <span title="Click para copiar número de cuenta">&nbsp;&nbsp;{bankAccount}</span>
                            <img
                                src={copy}
                                alt="Copy icon"
                                title="Copiar número de cuenta"
                                width="1rem"
                                height="1rem"
                                className={styles.copyIcon}
                            />
                        </div>
                    </button>
                </div>
                <div className={styles.walletColumn}>
                    <img
                        src={theme === Theme.Dark ? banco_industrial_black : banco_industrial}
                        width={100}
                        height={40.61}
                        alt="Banco Industrial banner"
                        className={styles.platformLogo}
                    />
                    <button className={styles.bankAcc} onClick={handleTheterClick}>
                        <div title="Donar">
                            <p>Número de cuenta</p>
                        </div>
                        <div>
                            <span title="Click para copiar número de cuenta">&nbsp;&nbsp;{bankAccount}</span>
                            <img
                                src={copy}
                                alt="Copy icon"
                                title="Copiar número de cuenta"
                                width="0.25rem"
                                height="0.25rem"
                                className={styles.copyIcon}
                            />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Donate;

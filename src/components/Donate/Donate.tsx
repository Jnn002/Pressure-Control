import { useEffect } from "react";
import { useThemeContext } from "@/hooks/useTheme";
import { copyToClipboard } from "@/utils/copyToClipboard";
import { Theme } from "@/contexts/ThemeEnum";

import copy from "@/assets/copy.png";
import banco_industrial from "@/assets/banco_industrial.png";
import banco_industrial_black from "@/assets/banco_industrial.png";

import styles from "./Donate.module.css";

const DONATE_TITLES = ["Donar ahora", "Apoyar el proyecto", "Contribuir"];

const DONATE_EMOJIS = ["💖", "❤️"];

const DONATE_MESSAGES = [
    "¡Tu apoyo es vital para mantener esta app viva! Cada donación, por pequeña que sea, me permite seguir ofreciendo herramientas gratuitas que hacen tu vida más fácil. ¡Gracias por ser parte de esto!",
    "¿Te gusta esta app? ¡Ayúdame a mantenerla gratis para todos! Tu donación no solo me inspira, sino que también me da los recursos para seguir mejorando y creando contenido útil.",
    "¿Esta app te ha ayudado? ¡Imaginate lo que podríamos lograr juntos! Tu donación es una inversión en más herramientas gratuitas y de calidad para todos.",
    "¿Te gustaría ver más proyectos como este? ¡Tu donación lo hace posible! Cada aporte me acerca un paso más a seguir creando soluciones que beneficien a todos.",
    "¿Te ha sido útil esta app? ¡Tu generosidad puede cambiar todo! Con tu donación, puedo dedicar más tiempo y recursos a mejorar y expandir esta herramienta para vos y muchos más.",
    "¿Te gusta lo que hago? ¡Tu apoyo es mi combustible! Cada donación, por pequeña que sea, me motiva a seguir creando y compartiendo herramientas que hacen la diferencia.",
    "¿Te ha servido esta app? ¡Ayúdame a seguir ayudando! Tu donación no solo me permite mantener este proyecto, sino también crear nuevos que beneficien a más personas como vos.",
    "¿Te gustaría que esta app siga creciendo? ¡Tu donación es clave! Con tu apoyo, puedo seguir desarrollando y mejorando herramientas que hacen tu vida más sencilla.",
    "¿Te ha gustado esta app? ¡Tu donación es un voto de confianza! Me ayuda a seguir trabajando en proyectos que te benefician a vos y a miles de usuarios más.",
    "¿Te ha resultado útil esta app? ¡Tu apoyo es invaluable! Con tu donación, puedo seguir ofreciendo herramientas gratuitas y de calidad que mejoran tu día a día.",
    "¿Te gusta lo que hago? ¡Tu donación es mi mayor recompensa! Me ayuda a seguir creando y compartiendo herramientas que hacen la diferencia en la vida de las personas.",
    "¿Te ha servido esta app? ¡Tu donación es un gesto que vale oro! Me permite seguir trabajando en proyectos que benefician a todos, incluido vos.",
    "¿Te gustaría que esta app siga mejorando? ¡Tu donación lo hace posible! Cada aporte me acerca un paso más a ofrecerte herramientas aún más útiles y eficientes.",
    "¿Te ha gustado esta app? ¡Tu donación es un abrazo de apoyo! Me motiva a seguir creando y compartiendo soluciones que hacen tu vida más fácil.",
    "¿Te ha resultado útil esta app? ¡Tu donación es un gesto de gratitud que me inspira a seguir trabajando en proyectos que benefician a todos."
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

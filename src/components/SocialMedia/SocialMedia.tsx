import { useEffect } from "react";

import umg from "@/assets/favicon_120x121.png";
import gmail from "@/assets/gmail.png";
import github from "@/assets/github.png";
import linkedin from "@/assets/linkedin.png";
import twitter from "@/assets/twitter.png";

import styles from "./SocialMedia.module.css";
const SocialMedia = () => {
    useEffect(() => {
        const images = [umg, gmail, github, linkedin, twitter];
        images.forEach(image => {
            new Image().src = image;
        });
    }, []);

    const handleImageClick = () => {
        window.open("http://google.com", "_blank", "noopener,noreferrer");
    };

    return (
        <div className={styles.socialMediaContainer}>
            <h4 className={`${styles.title}`}>Grupo 1</h4>
            <div className={styles.socialMediaContent}>
                <div className={styles.socialMediaContentWrapper}>
                    <div className={styles.pictureContainer}>
                        <img src={umg} alt="Grupo 1" title="Ir a" width={100} onClick={handleImageClick} />
                    </div>

                    <div className={styles.linksContainer}>
                        <a href="mailto:test@gmail.com">
                            <img src={gmail} alt="Logo de Gmail" title="Correo a Grupo 1" width={16} />
                            Gmail
                        </a>
                        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="Logo de Github" title="Ir al Github de Grupo 1" width={16} />
                            Github
                        </a>
                        <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="Logo de LinkedIn" title="Ir al LinkedIn de Grupo 1" width={16} />
                            LinkedIn
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="Logo de X (Twitter)" title="Ir al Twitter de Grupo 1" width={16} />X
                            (Twitter)
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;

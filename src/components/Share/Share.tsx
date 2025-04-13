import {
    FacebookIcon,
    FacebookShareButton,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
    XIcon
} from "react-share";

import styles from "./Share.module.css";

const Share = () => {
    const shareUrl = "https://google.com";
    const title = "Registro de presión sanguínea";

    return (
        <div className={styles.shareContainer}>
            <div className={styles.shareNetwork}>
                <FacebookShareButton url={shareUrl} className={styles.shareNetworkButton}>
                    <FacebookIcon size={24} round />
                </FacebookShareButton>
            </div>

            <div className={styles.shareNetwork}>
                <WhatsappShareButton url={shareUrl} title={title} separator=":: " className={styles.shareNetworkButton}>
                    <WhatsappIcon size={24} round />
                </WhatsappShareButton>
            </div>

            <div className={styles.shareNetwork}>
                <TwitterShareButton url={shareUrl} title={title} className={styles.shareNetworkButton}>
                    <XIcon size={24} round />
                </TwitterShareButton>
            </div>
        </div>
    );
};

export default Share;

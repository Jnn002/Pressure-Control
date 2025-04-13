import AddButton from "@/components/AddButton/AddButton";

import styles from "./NoLogsMessage.module.css";

const NoLogsMessage = ({ onAddClicked, noGap }: { onAddClicked: () => void; noGap?: boolean }) => {
    return (
        <div className={`${styles.NoLogsMessageContainer} ${noGap && styles.noGap}`}>
            <span>Aún no se agregaron mediciones</span>
            <div className={styles.buttonContainer} onClick={onAddClicked}>
                <AddButton onClick={() => null} />
                <span>Agregar una medición</span>
            </div>
        </div>
    );
};

export default NoLogsMessage;

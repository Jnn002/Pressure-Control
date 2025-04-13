import AddButton from "@/components/AddButton/AddButton";
import styles from "./FloatingButtons.module.css";

//TODO: CHECK SHARE
interface FloatingButtonsProps {
    onClick: () => void;
}

const FloatingButtons = ({ onClick }: FloatingButtonsProps) => {
    return (
        <div className={styles.bottomContainer}>
            <div className={styles.buttonContainer}>
                <AddButton onClick={onClick} />
            </div>
        </div>
    );
};

export default FloatingButtons;

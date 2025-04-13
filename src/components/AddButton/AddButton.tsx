import styles from "./AddButton.module.css";

interface AddButtonProps {
    onClick: () => void;
}

const AddButton = ({ onClick }: AddButtonProps) => {
    return (
        <button className={styles.addButton} onClick={onClick}>
            <span className="visually-hidden">Agregar</span>
        </button>
    );
};

export default AddButton;

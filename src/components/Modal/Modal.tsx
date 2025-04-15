import { useBodyLock } from "@/hooks/useBodyLock";

import styles from "./Modal.module.css";
import { useEffect, useRef } from "react";

interface ModalProps {
    isOpen: boolean;
    fullscreen?: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ isOpen, fullscreen, onClose, children }: ModalProps) => {
    const focusable = useRef<HTMLDivElement>(null);

    useBodyLock(isOpen);

    useEffect(() => {
        if (isOpen) {
            focusable.current?.focus();
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleContentClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <div
            id={`Modal_${Math.random().toString(36).substr(2, 9)}`}
            className={styles.modal}
            onClick={onClose}
            onTouchMove={handleTouchMove}
        >
            <div
                className={`${styles.content} ${fullscreen ? styles.fullscreen : ""}`}
                onClick={handleContentClick}
                onTouchMove={e => e.stopPropagation()}
                tabIndex={0}
                ref={focusable}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;

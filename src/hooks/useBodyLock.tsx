import { useEffect } from "react";

let modalsOpen = 0;

const lockBody = () => {
    if (modalsOpen === 0) {
        document.body.style.overflow = "hidden";
        document.body.style.position = "fixed";
        document.body.style.width = "100%";
    }
    modalsOpen++;
};

const unlockBody = () => {
    if (modalsOpen > 0) {
        modalsOpen--;
        if (modalsOpen === 0) {
            document.body.style.overflow = "";
            document.body.style.position = "";
            document.body.style.width = "";
        }
    }
};

export const useBodyLock = (isOpen: boolean) => {
    useEffect(() => {
        if (isOpen) {
            lockBody();
        }

        return () => {
            if (isOpen) {
                unlockBody();
            }
        };
    }, [isOpen]);
};

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HeartRateMeasurement } from "@/components/HeartRateMeasurement/HeartRateMeasurement";
import Logo from "@/components/Logo/Logo";
import Seo from "@/components/SEO/SEO";
import styles from "./HeartRateMeasurementWrapper.module.css";

interface HeartRateMeasurementWrapperProps {
    onClose: () => void;
}

const HeartRateMeasurementWrapper: React.FC<HeartRateMeasurementWrapperProps> = ({ onClose }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const previousFormData = location.state?.previousFormData;

    const handleMeasurementComplete = (bpm: number) => {
        navigate("/addedit", {
            state: {
                measuredPulse: bpm,
                fromMeasurement: true,
                previousFormData: previousFormData
            },
            replace: true
        });
    };

    return (
        <>
            <Seo title="Heart Rate Measurement" />
            <section className={styles.container} onTouchMove={e => e.stopPropagation()}>
                <div className={styles.header}>
                    <Logo />
                    <button
                        onClick={() => {
                            navigate("/addedit", {
                                state: { previousFormData },
                                replace: true
                            });
                        }}
                        className={`${styles.closeButton} ${styles.button}`}
                    >
                        Cerrar
                    </button>
                </div>
                <div className={styles.content} onTouchMove={e => e.stopPropagation()}>
                    <HeartRateMeasurement onMeasurementComplete={handleMeasurementComplete} />
                </div>
            </section>
        </>
    );
};

export default HeartRateMeasurementWrapper;

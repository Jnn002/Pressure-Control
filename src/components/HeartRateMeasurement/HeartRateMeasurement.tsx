import React, { useState, useRef, useEffect } from "react";
import styles from "./HeartRateMeasurement.module.css";

interface HeartRateMeasurementProps {
    onMeasurementComplete?: (bpm: number) => void;
}

export const HeartRateMeasurement: React.FC<HeartRateMeasurementProps> = ({ onMeasurementComplete }) => {
    const [isRecording, setIsRecording] = useState(false);
    const [heartRate, setHeartRate] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [progress, setProgress] = useState(0);

    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const frameDataArray = useRef<number[]>([]);
    const mediaStreamRef = useRef<MediaStream | null>(null);
    const intervalRef = useRef<number | null>(null);

    const startMeasurement = async () => {
        try {
            setError(null);
            setHeartRate(null);
            setProgress(0);
            frameDataArray.current = [];

            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: "environment",
                    width: { ideal: 320 },
                    height: { ideal: 240 }
                }
            });

            mediaStreamRef.current = stream;

            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                await videoRef.current.play();
                setIsRecording(true);

                let timeElapsed = 0;
                intervalRef.current = window.setInterval(() => {
                    timeElapsed += 100;
                    const newProgress = Math.min((timeElapsed / 10000) * 100, 100);
                    setProgress(newProgress);

                    if (timeElapsed >= 10000) {
                        calculateHeartRate();
                    } else {
                        captureFrame();
                    }
                }, 100);
            }
        } catch (err) {
            console.error("Error al accesar a la camara:", err);
            setError("No se puede acceder a la cámara. Asegúrate de haber dado permisos para usarla.");
        }
    };

    const captureFrame = () => {
        if (!videoRef.current || !canvasRef.current) return;

        const context = canvasRef.current.getContext("2d");
        if (!context) return;

        try {
            context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);

            const imageData = context.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height);

            let totalRed = 0;
            for (let i = 0; i < imageData.data.length; i += 4) {
                totalRed += imageData.data[i];
            }
            const averageRed = totalRed / (imageData.data.length / 4);

            frameDataArray.current.push(averageRed);
            console.log("Frame capturado, valor:", averageRed);
        } catch (error) {
            console.error("Frame capturado error:", error);
        }
    };

    const calculateHeartRate = () => {
        try {
            const data = frameDataArray.current;
            console.log("Calculando bpm de", data.length, "muestras");

            let peaks = 0;
            for (let i = 1; i < data.length - 1; i++) {
                if (data[i] > data[i - 1] && data[i] > data[i + 1]) {
                    peaks++;
                }
            }

            const bpm = Math.round(peaks * 6);
            console.log("Peaks detectadso:", peaks, "BPM calculado:", bpm);

            if (bpm >= 40 && bpm <= 200) {
                setHeartRate(bpm);
                onMeasurementComplete?.(bpm);
            } else {
                setError(
                    "Medición inválida. Por favor intenta de nuevo y asegúrate de cubrir completamente la cámara con tu dedo."
                );
            }
        } catch (error) {
            console.error("Calculo de pulso erroneo:", error);
            setError("Ha ocurrido un error al calcular tu pulso. Por favor intenta de nuevo.");
        } finally {
            stopMeasurement();
        }
    };

    const stopMeasurement = () => {
        setIsRecording(false);

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        if (mediaStreamRef.current) {
            mediaStreamRef.current.getTracks().forEach(track => {
                track.stop();
            });
            mediaStreamRef.current = null;
        }

        if (videoRef.current) {
            videoRef.current.srcObject = null;
        }
    };

    useEffect(() => {
        return () => {
            stopMeasurement();
        };
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.measurementArea}>
                <video ref={videoRef} className={styles.video} autoPlay playsInline muted />
                <canvas ref={canvasRef} className={styles.canvas} width="320" height="240" />
                {isRecording && (
                    <div className={styles.progressOverlay}>
                        <div className={styles.progressBar} style={{ width: `${progress}%` }} />
                        <span className={styles.progressText}>{Math.round(progress)}%</span>
                    </div>
                )}
            </div>

            {error && <div className={styles.error}>{error}</div>}

            <div className={styles.controls}>
                {!isRecording ? (
                    <button onClick={startMeasurement} className={styles.startButton} disabled={isRecording}>
                        Iniciar Medición
                    </button>
                ) : (
                    <button onClick={stopMeasurement} className={styles.stopButton}>
                        Detener Medición
                    </button>
                )}
            </div>

            {heartRate && (
                <div className={styles.result}>
                    <h3>Your Heart Rate:</h3>
                    <p>{heartRate} BPM</p>
                </div>
            )}

            <div className={styles.instructions}>
                <h3>Cómo medir mi pulso:</h3>
                <ol>
                    <li>Coloca tu dedo suavemente sobre la camera antes de iniciar</li>
                    <li>Asegurate de cubrir bien el lente de la camára con tu dedo</li>
                    <li>Manten tu dedo en esa posición hasta que termine la medición</li>
                    <li>Mantén tu dedo firme, si cambias la presión de tu dedo, la medición será menos precisa</li>
                </ol>
            </div>
        </div>
    );
};

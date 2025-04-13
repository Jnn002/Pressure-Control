import React, { useCallback, useEffect, useState } from "react";
import { useLogContext } from "@/hooks/useLogContext";
import { useThemeContext } from "@/hooks/useTheme";
import BloodPressureLevels from "@/components/BloodPressureLevels/BloodPressureLevels";
import { formatToISODateString } from "@/utils/formatDateUtils";
import { categoryType, getCategory } from "@/utils/getCategory";
import getPNGIconPath from "@/utils/getPNGIconPath";
import { Theme } from "@/contexts/ThemeEnum";
import Seo from "../SEO/SEO";
import { useNavigate, useLocation } from "react-router-dom";

import WarningIcon from "@/assets/svg/warning.svg?react";

import styles from "./AddEditLog.module.css";

export interface LogData {
    id: string;
    systolic: number | string;
    diastolic: number | string;
    pulse: number | string;
    medicine: boolean;
    notes: string;
    date: string;
    arrhythmia: boolean;
    posture: string;
    deviceLocation: string;
}

interface AddEditLogProps {
    onClose: () => void;
}

const AddEditLog = ({ onClose }: AddEditLogProps) => {
    const location = useLocation();
    const navigate = useNavigate();

    // Get the measured pulse and previous form data from location state
    const measuredPulse = location.state?.measuredPulse;
    const fromMeasurement = location.state?.fromMeasurement;
    const previousFormData = location.state?.previousFormData;

    const [data, setData] = useState<LogData>(() => {
        // If we have previous form data, use it as initial state
        if (previousFormData) {
            return {
                ...previousFormData,
                pulse: measuredPulse || previousFormData.pulse
            };
        }

        // Otherwise use default initial state
        return {
            id: "",
            systolic: "",
            diastolic: "",
            pulse: measuredPulse || "",
            date: formatToISODateString(),
            medicine: false,
            arrhythmia: false,
            notes: "",
            posture: "",
            deviceLocation: ""
        };
    });
    const { theme } = useThemeContext();
    const [showOutOfRangeMessage, setShowOutOfRangeMessage] = useState(false);
    const { selectedLogId, setSelectedLogId, getLogById, addLog, updateLog, deleteLog } = useLogContext();

    const datePickerRef = React.useRef(null);
    const systolicRef = React.useRef(null);
    const diastolicRef = React.useRef(null);
    const pulseRef = React.useRef(null);

    // Effect to handle measured pulse updates
    useEffect(() => {
        if (measuredPulse && fromMeasurement) {
            setData(prevData => ({
                ...prevData,
                pulse: measuredPulse
            }));
            // Clear the location state but keep the modal open
            navigate(".", {
                replace: true,
                state: {}
            });
        }
    }, [measuredPulse, fromMeasurement, navigate]);

    const handleSubmit = () => {
        if (!data.systolic || data.systolic === "0") {
            alert("Please enter systolic pressure");
            if (systolicRef.current) (systolicRef.current as HTMLInputElement).focus();
            return;
        }
        if (!data.diastolic || data.diastolic === "0") {
            alert("Please enter diastolic pressure");
            if (diastolicRef.current) (diastolicRef.current as HTMLInputElement).focus();
            return;
        }
        if (Number(data.diastolic) >= Number(data.systolic)) {
            alert("Diastolic pressure cannot be greater than or equal to systolic pressure");
            if (diastolicRef.current) (diastolicRef.current as HTMLInputElement).focus();
            return;
        }
        if (!data.date) {
            data.date = new Date().toISOString().slice(0, 16);
        }

        if (hasOutOfRangeValues()) {
            const wantToSaveAnyway = confirm("Values out of range. Continue?");
            if (wantToSaveAnyway == false) {
                setShowOutOfRangeMessage(true);
                return;
            }
        }

        if (!data.id) {
            addLog(data);
        } else {
            updateLog(data);
        }

        onClose();
    };

    const hasOutOfRangeValues = useCallback(
        (systolic = data.systolic, diastolic = data.diastolic) => {
            const category = getCategory(systolic, diastolic);
            return category.value === categoryType.OUT_OF_RANGE;
        },
        [data.systolic, data.diastolic]
    );

    const handleDelete = () => {
        if (window.confirm("¿Eliminar esta medición?")) {
            deleteLog(data.id);
            onClose();
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSubmit();
        }
    };

    const handleFocus = (inputRef: React.RefObject<HTMLInputElement>) => {
        if (inputRef.current) {
            inputRef.current.select();
        }
    };

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedData = { ...data };

        type LogDataNumberKeys = "systolic" | "diastolic" | "pulse";

        const numValue = Number(event.target.value);
        if (isNaN(numValue) || numValue < 0 || numValue > 500) {
            updatedData[event.target.name as LogDataNumberKeys] = "";
        } else {
            updatedData[event.target.name as LogDataNumberKeys] = Math.floor(numValue);
        }

        setData(updatedData);
    };

    const handleMeasureHeartRate = () => {
        // Store current form data before navigating
        navigate("/measure-heart-rate", {
            state: {
                previousFormData: data // Pass the current form data
            }
        });
    };

    useEffect(() => {
        if (!data.date && datePickerRef.current) {
            (datePickerRef.current as HTMLInputElement).value = formatToISODateString();
        }

        let systolicNum: number;
        let diastolicNum: number;
        try {
            systolicNum = Number(data.systolic);
            diastolicNum = Number(data.diastolic);
            if (systolicNum > 0 && diastolicNum > 0) {
                setShowOutOfRangeMessage(hasOutOfRangeValues(systolicNum, diastolicNum));
            }
        } catch (error) {
            console.error("AddEditLog error:", { error });
        }
    }, [data.date, data.systolic, data.diastolic, hasOutOfRangeValues]);

    useEffect(() => {
        if (selectedLogId) {
            const logToUpdate = getLogById(selectedLogId);
            logToUpdate && setData(logToUpdate);
        }

        return () => setSelectedLogId("");
    }, [selectedLogId, getLogById, setSelectedLogId]);

    return (
        <>
            <Seo title={data.id ? "Edit Measurement" : "Add Measurement"} />

            <div className={styles.addEditLogContainer}>
                <div className={styles.header}>
                    <button className={`${styles.coloredButton} ${styles.button}`} onClick={onClose}>
                        Cancelar
                    </button>
                    {data.id && (
                        <button className={`${styles.coloredButton} ${styles.button}`} onClick={handleDelete}>
                            Eliminar
                        </button>
                    )}
                    <button className={`${styles.addButton} ${styles.button}`} onClick={handleSubmit}>
                        {data.id ? "Actualizar" : "Agregar"}
                    </button>
                </div>
                <div className={styles.content}>
                    <h2 id="top">{data.id ? "Actualizar" : "Agregar"} Medición</h2>

                    <div className={styles.row}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="systolic">Sistólica</label>
                            <input
                                type="number"
                                id="systolic"
                                name="systolic"
                                ref={systolicRef}
                                placeholder="120"
                                min={1}
                                max={999}
                                value={data.systolic}
                                onKeyDown={handleKeyDown}
                                onFocus={() => handleFocus(systolicRef)}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="diastolic">Diastólica</label>
                            <input
                                type="number"
                                id="diastolic"
                                name="diastolic"
                                ref={diastolicRef}
                                placeholder="80"
                                min={1}
                                max={999}
                                value={data.diastolic}
                                onKeyDown={handleKeyDown}
                                onFocus={() => handleFocus(diastolicRef)}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="pulse">Pulse</label>
                            <div className={styles.pulseContainer}>
                                <input
                                    type="number"
                                    id="pulse"
                                    name="pulse"
                                    ref={pulseRef}
                                    placeholder="75"
                                    min={1}
                                    max={999}
                                    value={data.pulse}
                                    onKeyDown={handleKeyDown}
                                    onFocus={() => handleFocus(pulseRef)}
                                    onChange={handleOnChange}
                                />
                                <button className={styles.cameraButton} onClick={handleMeasureHeartRate} type="button">
                                    Usar cámara
                                </button>
                            </div>
                        </div>
                    </div>
                    {showOutOfRangeMessage && (
                        <div className={styles.outOfRangeMessageContainer}>
                            <WarningIcon width="1rem" height="1rem" />
                            <span>Valores fuera de rango.</span>
                            <a href="/help/outofrangevalues">¿Qué significa?</a>
                        </div>
                    )}
                    <div className={`${styles.row} ${styles.column}`}>
                        <div className={`${styles.inputContainer} ${styles.fullWidth}`}>
                            <label htmlFor="date">Fecha</label>
                            <div className={styles.dateContainer}>
                                <input
                                    type="datetime-local"
                                    id="date"
                                    ref={datePickerRef}
                                    onChange={e => setData({ ...data, date: e.target.value })}
                                    value={data.date}
                                />
                            </div>
                        </div>
                        <div className={`${styles.inputContainer} ${styles.fullWidth}`}>
                            <label className={styles.iconLabel} htmlFor="medicine">
                                Medicina
                                <div className={styles.iconContainer}>
                                    <input
                                        type="checkbox"
                                        id="medicine"
                                        onChange={e => setData({ ...data, medicine: e.target.checked })}
                                        checked={data.medicine}
                                    />
                                    <img
                                        className={styles.icon}
                                        width="16"
                                        height="16"
                                        src={data?.medicine ? getPNGIconPath("pill") : getPNGIconPath("pill", theme)}
                                        alt={`Ícono píldora ${data?.medicine ? "" : "no "}tomada`}
                                        title={`Píldora ${data?.medicine ? "" : "no "}tomada`}
                                    />
                                </div>
                            </label>
                        </div>
                        <div className={`${styles.inputContainer} ${styles.fullWidth}`}>
                            <label className={styles.iconLabel} htmlFor="arrhythmia">
                                Arritmia (latido irregular)
                                <div className={styles.iconContainer}>
                                    <input
                                        type="checkbox"
                                        id="arrhythmia"
                                        onChange={e => setData({ ...data, arrhythmia: e.target.checked })}
                                        checked={data.arrhythmia}
                                    />
                                    <img
                                        className={styles.icon}
                                        width="16"
                                        height="16"
                                        src={
                                            data?.arrhythmia ? getPNGIconPath("heart") : getPNGIconPath("heart", theme)
                                        }
                                        alt={`Ícono píldora ${data?.arrhythmia ? "" : "no "}tomada`}
                                        title={`Arritmia ${data?.arrhythmia ? "" : "no "}detectada`}
                                    />
                                </div>
                            </label>
                        </div>
                        <div className={`${styles.inputContainer} ${styles.fullWidth}`}>
                            <label className={styles.iconLabel} htmlFor="posture">
                                Postura
                            </label>
                            <div className={styles.iconContainer}>
                                <select
                                    id="posture"
                                    onChange={e => setData({ ...data, posture: e.target.value })}
                                    value={data.posture}
                                >
                                    <option value="">Seleccionar postura</option>
                                    <option value="parado">Parado</option>
                                    <option value="sentado">Sentado</option>
                                    <option value="acostado">Acostado</option>
                                </select>
                            </div>
                        </div>
                        <div className={`${styles.inputContainer} ${styles.fullWidth}`}>
                            <label className={styles.iconLabel} htmlFor="location">
                                Ubicación del medidor
                            </label>
                            <div className={styles.iconContainer}>
                                <select
                                    id="location"
                                    onChange={e => setData({ ...data, deviceLocation: e.target.value })}
                                    value={data.deviceLocation}
                                >
                                    <option value="">Seleccionar ubicación</option>
                                    <option value="b_derecho">Brazo derecho</option>
                                    <option value="b_izquierdo">Brazo izquierdo</option>
                                    <option value="m_derecha">Muñeca derecha</option>
                                    <option value="m_izquierda">Muñeca izquierda</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.row} ${styles.column}`}>
                        <div className={styles.inputContainer}>
                            <textarea
                                id="notes"
                                placeholder="Notas"
                                rows={4}
                                autoComplete="off"
                                maxLength={250}
                                onChange={e => setData({ ...data, notes: e.target.value })}
                                value={data.notes}
                                className={
                                    data?.notes
                                        ? styles.hasContent
                                        : theme === Theme.Dark
                                        ? styles.emptyDark
                                        : styles.emptyLight
                                }
                            />
                        </div>
                    </div>

                    <BloodPressureLevels />

                    <a className={styles.backToTop} href="#top"></a>
                </div>
            </div>
        </>
    );
};

export default AddEditLog;

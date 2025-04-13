import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addDays, subSeconds, isAfter, isBefore } from "date-fns";
import { usePDF } from "@react-pdf/renderer";
import PDFReport from "@/components/PDFReport/PDFReport";
import { useLogContext } from "@/hooks/useLogContext";
import { filterLogsByDateRange } from "@/utils/filterLogsByDateRange";
import { getOldestAndLatestLogDates } from "@/utils/getOldestAndLatestLogDate";
import NoLogsMessage from "@/components/NoLogsMessage/NoLogsMessage";
import { LogData } from "@/components/AddEditLog/AddEditLog";

import styles from "./ExportPDFReport.module.css";

const Generator = ({
    from,
    to,
    logs,
    onDownloadClick
}: {
    from: string;
    to: string;
    logs: LogData[];
    onDownloadClick?: () => void;
}) => {
    const [instance] = usePDF({ document: <PDFReport logs={logs} /> });
    const [buttonText, setButtonText] = useState("Listo!");

    useEffect(() => {
        if (!instance.error && !instance.loading && instance.url) {
            setTimeout(() => setButtonText("Descargar PDF"), 1500);
        }
    }, [instance]);

    if (instance.loading) return <div>Generando...</div>;

    if (instance.error) {
        alert("Error al generar el PDF... Por favor, reintente");
        console.error(instance.error);
        return null;
    }

    const fileName = `${from}_${to}_Reporte_MiPresión.pdf`;

    return (
        <a href={instance.url!} download={fileName} onClick={() => setTimeout(() => onDownloadClick!(), 10)}>
            {buttonText}
        </a>
    );
};

const ExportPDFReport = () => {
    const [shouldGenerate, setShouldGenerate] = useState(false);
    const { logs } = useLogContext();
    const [oldestLatest] = useState(() => {
        if (logs.length === 0) {
            return { oldestLogDate: "", latestLogDate: "" };
        }
        return getOldestAndLatestLogDates(logs);
    });
    const [userFrom, setUserFrom] = useState(oldestLatest.oldestLogDate);
    const [userTo, setUserTo] = useState(oldestLatest.latestLogDate);
    const [filteredLogs, setFilteredLogs] = useState<LogData[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (logs.length > 0) {
            if (isBefore(new Date(userFrom), new Date(oldestLatest.oldestLogDate))) {
                setUserFrom(oldestLatest.oldestLogDate);
            }
            if (isAfter(new Date(userTo), new Date(oldestLatest.latestLogDate))) {
                setUserTo(oldestLatest.latestLogDate);
            }
            if (isAfter(new Date(userFrom), new Date(userTo)) || isBefore(new Date(userTo), new Date(userFrom))) {
                setUserFrom(userTo);
                setUserTo(userFrom);
            }
        }
    }, [userFrom, userTo, logs.length, oldestLatest.latestLogDate, oldestLatest.oldestLogDate]);

    useEffect(() => {
        if (logs.length > 0) {
            const updatedTo = subSeconds(addDays(new Date(userTo), 1), 1); // 1 second before the next day
            const filteredLogs = filterLogsByDateRange(
                new Date(userFrom).toISOString().substring(0, 19),
                updatedTo.toISOString().substring(0, 19),
                logs
            );
            setFilteredLogs(filteredLogs);
            setShouldGenerate(false);
        }
    }, [userFrom, userTo, logs.length, logs]);

    const handleClick = () => {
        setShouldGenerate(true);
    };

    const renderGenerator = () => {
        return (
            <Generator
                from={userFrom}
                to={userTo}
                logs={filteredLogs}
                onDownloadClick={() => setShouldGenerate(false)}
            />
        );
    };

    return (
        <div className={styles.exportPDFReportContainer}>
            <h2 className={styles.title}>Exportar a PDF</h2>

            {logs.length === 0 ? (
                <NoLogsMessage onAddClicked={() => navigate("/addedit")} noGap />
            ) : (
                <>
                    <p>Seleccioná el rango de fechas que querés exportar:</p>

                    <div className={styles.dateRangeContainer}>
                        <div>
                            <label className={styles.label}>Desde:</label>
                            <input
                                type="date"
                                min={oldestLatest.oldestLogDate}
                                max={oldestLatest.latestLogDate}
                                value={userFrom}
                                onChange={e => setUserFrom(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className={styles.label}>Hasta:</label>
                            <input
                                type="date"
                                min={oldestLatest.oldestLogDate}
                                max={oldestLatest.latestLogDate}
                                value={userTo}
                                onChange={e => setUserTo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={styles.buttonContainer}>
                        {shouldGenerate ? (
                            renderGenerator()
                        ) : filteredLogs.length > 0 ? (
                            <button onClick={handleClick}>Generar PDF</button>
                        ) : (
                            <p className={styles.noLogsInDateRangeMessage}>
                                No se realizaron mediciones en el rango de fechas seleccionado.
                            </p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default ExportPDFReport;

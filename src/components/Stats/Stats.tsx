import { useLogContext } from "@/hooks/useLogContext";
import { useThemeContext } from "@/hooks/useTheme";
import { useMemo } from "react";
import { Bar, Line } from "react-chartjs-2";
import { categoryType, getCategory } from "@/utils/getCategory";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import styles from "./Stats.module.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const Stats = () => {
    const { logs } = useLogContext();
    const { theme } = useThemeContext();

    const isDarkMode = theme === "dark";

    const gridColor = isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)";
    const textColor = isDarkMode ? "rgba(255, 255, 255, 0.8)" : "var(--text-color)";

    const stats = useMemo(() => {
        if (logs.length === 0) {
            return {
                avgSystolic: 0,
                avgDiastolic: 0,
                avgPulse: 0,
                distribution: {
                    [categoryType.NORMAL]: 0,
                    [categoryType.NORMAL_ELEVATED]: 0,
                    [categoryType.STAGE_1]: 0,
                    [categoryType.STAGE_2]: 0,
                    [categoryType.OUT_OF_RANGE]: 0
                }
            };
        }

        const systolicSum = logs.reduce((acc, log) => acc + Number(log.systolic), 0);
        const diastolicSum = logs.reduce((acc, log) => acc + Number(log.diastolic), 0);
        const pulseSum = logs.reduce((acc, log) => acc + Number(log.pulse), 0);

        // Calcular distribución por categorías
        const distribution = logs.reduce(
            (acc, log) => {
                const category = getCategory(Number(log.systolic), Number(log.diastolic));
                acc[category.value] = (acc[category.value] || 0) + 1;
                return acc;
            },
            {
                [categoryType.NORMAL]: 0,
                [categoryType.NORMAL_ELEVATED]: 0,
                [categoryType.STAGE_1]: 0,
                [categoryType.STAGE_2]: 0,
                [categoryType.OUT_OF_RANGE]: 0
            }
        );

        return {
            avgSystolic: Number((systolicSum / logs.length).toFixed(1)),
            avgDiastolic: Number((diastolicSum / logs.length).toFixed(1)),
            avgPulse: Number((pulseSum / logs.length).toFixed(0)),
            distribution
        };
    }, [logs]);

    // Datos para el gráfico de barras de distribución por categoría
    const categoryData = {
        labels: ["Normal", "Elevada", "Hipertensión 1", "Hipertensión 2", "Fuera de Rango"],
        datasets: [
            {
                label: "Cantidad de mediciones",
                data: [
                    stats.distribution[categoryType.NORMAL],
                    stats.distribution[categoryType.NORMAL_ELEVATED],
                    stats.distribution[categoryType.STAGE_1],
                    stats.distribution[categoryType.STAGE_2],
                    stats.distribution[categoryType.OUT_OF_RANGE]
                ],
                backgroundColor: ["#4CAF50", "#FFC107", "#FF9800", "#F44336", "#9E9E9E"]
            }
        ]
    };

    const trendData = useMemo(() => {
        const lastTenLogs = [...logs]
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 10)
            .reverse();

        return {
            labels: lastTenLogs.map(log => new Date(log.date).toLocaleDateString()),
            datasets: [
                {
                    label: "Sistólica",
                    data: lastTenLogs.map(log => log.systolic),
                    borderColor: "#F44336",
                    tension: 0.3,
                    fill: false
                },
                {
                    label: "Diastólica",
                    data: lastTenLogs.map(log => log.diastolic),
                    borderColor: "#2196F3",
                    tension: 0.3,
                    fill: false
                }
            ]
        };
    }, [logs]);

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: "Distribución por Categoría",
                color: textColor,
                font: {
                    size: 16
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1,
                    color: textColor
                },
                grid: {
                    color: gridColor
                }
            },
            x: {
                ticks: {
                    color: textColor
                },
                grid: {
                    color: gridColor
                }
            }
        }
    };

    const trendOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
                labels: {
                    color: textColor
                }
            },
            title: {
                display: true,
                text: "Tendencia últimas 10 mediciones",
                color: textColor,
                font: {
                    size: 16
                }
            }
        },
        scales: {
            y: {
                min: 40,
                max: 200,
                ticks: {
                    color: textColor
                },
                grid: {
                    color: gridColor
                }
            },
            x: {
                ticks: {
                    color: textColor,
                    maxRotation: 45,
                    minRotation: 45
                },
                grid: {
                    color: gridColor
                }
            }
        }
    };

    if (logs.length === 0) {
        return (
            <div className={styles.noDataContainer}>
                <p>No hay mediciones registradas</p>
            </div>
        );
    }

    return (
        <div className={styles.statsContainer}>
            <h2 className={styles.title}>Estadísticas de Presión Arterial</h2>

            <div className={styles.averagesGrid}>
                <div className={styles.statCard}>
                    <h3>Promedio Sistólica</h3>
                    <div className={styles.value}>
                        <span className={styles.number}>{stats.avgSystolic}</span>
                        <span className={styles.unit}>mmHg</span>
                    </div>
                </div>

                <div className={styles.statCard}>
                    <h3>Promedio Diastólica</h3>
                    <div className={styles.value}>
                        <span className={styles.number}>{stats.avgDiastolic}</span>
                        <span className={styles.unit}>mmHg</span>
                    </div>
                </div>

                <div className={`${styles.statCard} ${styles.pulseCard}`}>
                    <h3>Promedio Pulso</h3>
                    <div className={styles.value}>
                        <span className={styles.number}>{stats.avgPulse}</span>
                        <span className={styles.unit}>BPM</span>
                    </div>
                </div>
            </div>

            <div className={styles.chartsGrid}>
                <div className={styles.chartCard}>
                    <Bar data={categoryData} options={chartOptions} />
                </div>

                <div className={styles.chartCard}>
                    <Line data={trendData} options={trendOptions} />
                </div>
            </div>
        </div>
    );
};

export default Stats;

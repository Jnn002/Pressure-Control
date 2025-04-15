import styles from "./BloodPressureLevels.module.css";

const BloodPressureLevels = () => {
    return (
        <div>
            <h2 className={styles.title}>Niveles de Presión Sanguínea</h2>
            <div className={styles.columnHeaders}>
                <span>Nivel</span>
                <span>Sistólica</span>
                <span>Diastólica</span>
            </div>
            <div className={`${styles.row} ${styles.rowTop} ${styles.levelLow}`}>
                <span>Hipotensión</span>
                <span>&lt; 90</span>
                <span>&lt; 60</span>
            </div>
            <div className={`${styles.row} ${styles.levelNormal}`}>
                <span>Normal</span>
                <span>90 - 130</span>
                <span>60 - 85</span>
            </div>
            <div className={`${styles.row} ${styles.levelElevated}`}>
                <span>Elevada</span>
                <span>130 - 139</span>
                <span>85 - 89</span>
            </div>
            <div className={`${styles.row} ${styles.levelStage1}`}>
                <span>Hipertensión Grado 1</span>
                <span>140 - 159</span>
                <span>90 - 99</span>
            </div>
            <div className={`${styles.row} ${styles.levelStage2}`}>
                <span>Hipertensión Grado 2</span>
                <span>160 - 179</span>
                <span>100 - 109</span>
            </div>
            <div className={`${styles.row} ${styles.levelStage3}`}>
                <span>Hipertensión Grado 3</span>
                <span>&ge; 180</span>
                <span>&ge; 110</span>
            </div>
            <div className={`${styles.row} ${styles.rowBottom} ${styles.levelAisolated}`}>
                <span>Sistólica Aislada</span>
                <span>&ge; 140</span>
                <span>&lt; 90</span>
            </div>
            <div className={`${styles.source}`}>
                <span>Fuente 1:&nbsp;</span>
                <a
                    href="https://www.who.int/es/news-room/fact-sheets/detail/hypertension"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    2023 - Hipertensi&oacute;n, Organización Mundial de la Salud.
                </a>
            </div>
            <div className={`${styles.source}`}>
                <span>Fuente 2:&nbsp;</span>
                <a
                    href="https://www.paho.org/es/hearts-americas/hearts-americas-medicion-presion-arterial"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    2022 - Medición de la presión arterial, Organización Panamericana de la Salud.
                </a>
            </div>
            <div className={`${styles.source}`}>
                <span>Fuente 3:&nbsp;</span>
                <a
                    href="https://tusalud.com.gt/aprende/hipertension-todo-lo-que-se-necesita-saber-de-ella"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    2024 - Hipertensión arterial, Tusalud.
                </a>
            </div>
            <div className={`${styles.disclaimer}`}>
                <span>
                    La clasificación puede variar dependiendo de la edad, género, país, etc. Consulte a un profesional
                    de la salud para obtener un diagnóstico preciso.
                </span>
            </div>
        </div>
    );
};

export default BloodPressureLevels;

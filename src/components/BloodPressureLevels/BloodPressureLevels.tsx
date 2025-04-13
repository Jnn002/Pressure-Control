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
            <div className={`${styles.row} ${styles.rowTop} ${styles.levelNormal}`}>
                <span>Normal</span>
                <span>&lt; 130</span>
                <span>&lt; 85</span>
            </div>
            <div className={`${styles.row} ${styles.levelElevated}`}>
                <span>Elevada</span>
                <span>130 - 139</span>
                <span>85 - 89</span>
            </div>
            <div className={`${styles.row} ${styles.levelStage1}`}>
                <span>Nivel 1</span>
                <span>140 - 159</span>
                <span>90 - 99</span>
            </div>
            <div className={`${styles.row} ${styles.levelStage2}`}>
                <span>Nivel 2</span>
                <span>160 - 179</span>
                <span>100 - 109</span>
            </div>
            <div className={`${styles.row} ${styles.levelStage3}`}>
                <span>Nivel 3</span>
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
                    href="https://www.argentina.gob.ar/sites/default/files/salud-guia-practica-clinica-nacional-hta-2024.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    2024 - Guía Práctica Clínica Nacional de Hipertensi&oacute;n Arterial, Ministerio de Salud de la
                    Nación Argentina.
                </a>
            </div>
            <div className={`${styles.source}`}>
                <span>Fuente 2:&nbsp;</span>
                <a
                    href="https://www.argentina.gob.ar/sites/default/files/bancos/2021-04/interpretacion-uso-nuevas-tablas-referencia-de-presion-arterial-prosane-2020.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    2020 - Programa Nacional de Salud Escolar (PROSANE), Ministerio de Salud de la Nación Argentina.
                </a>
            </div>
            <div className={`${styles.source}`}>
                <span>Fuente 3:&nbsp;</span>
                <a
                    href="https://servicios.infoleg.gob.ar/infolegInternet/anexos/75000-79999/76388/norma.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    2002 - Ministerio de Salud de la Nación Argentina.
                </a>
            </div>
            <div className={`${styles.disclaimer}`}>
                <span>
                    La clasificación puede variar dependiendo de la edad, género, país, etc. Siempre consulte a un
                    profesional de la salud para saber más.
                </span>
            </div>
        </div>
    );
};

export default BloodPressureLevels;

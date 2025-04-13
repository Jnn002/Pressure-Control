import { Link } from "react-router-dom";

import styles from "./OutOfRangeValues.module.css";

const OutOfRangeValues = () => {
    return (
        <div className={styles.outOfRangeValuesContainer}>
            <h2 className={styles.title}>¿Por qué aparece el mensaje "Valores fuera de rango"?</h2>

            <p>
                El mensaje "Valores fuera de rango" significa que los valores que ingresaste no se encuentran dentro de
                los rangos definidos en la tabla de niveles de presión arterial. Esto puede suceder porque:
            </p>

            <ul>
                <li>
                    <strong>Los valores son demasiado altos o demasiado bajos</strong>: Los niveles de presión arterial
                    que evaluamos están basados en rangos establecidos por guías médicas comunes. Si tu medición supera
                    estos límites, no podemos asignarle un nivel.
                </li>
                <li>
                    <strong>Posibles errores al ingresar los datos:</strong> Es importante asegurarte de que los valores
                    que ingreses sean correctos y representen una medición real. A veces, un error al escribir puede dar
                    lugar a este mensaje.
                </li>
            </ul>

            <p>
                Si estás seguro de que los valores son correctos, es recomendable consultar con un profesional de la
                salud para obtener una evaluación precisa. Si tenés dudas, también podés revisar la guía sobre{" "}
                <Link to="/help/measurementguide">cómo tomar una medición de presión arterial correctamente</Link>.
            </p>
        </div>
    );
};

export default OutOfRangeValues;

import styles from "./BloodPressureMeasurementGuide.module.css";

const BloodPressureMeasurementGuide = () => {
    return (
        <div className={styles.bloodPressureMeasurementGuideContainer}>
            <h2 className={styles.title}>Procedimiento de toma de presión</h2>

            <p>
                Medir la presión arterial es sencillo pero <strong>muy importante</strong> para tu salud. A continuación
                se explica cómo hacerlo correctamente:
            </p>

            <h3>1. Preparación</h3>
            <ul>
                <li>
                    <strong>Evita ciertos consumos:</strong> No tomes café, mate, no fumes ni hagas ejercicio al menos{" "}
                    <strong>30 minutos antes</strong> de la medición.
                </li>
                <li>
                    <strong>Reposo:</strong> Permanece sentado y relajado durante al menos <strong>5 minutos</strong>{" "}
                    antes de tomar la medición.
                </li>
            </ul>

            <h3>2. Postura</h3>
            <ul>
                <li>
                    <strong>Siéntate correctamente:</strong> Siéntate con la <strong>espalda apoyada</strong> en la
                    silla, ambos <strong>pies en el suelo</strong> y sin cruzar las piernas.
                </li>
                <li>
                    <strong>Brazo:</strong> Apoya el brazo desnudo sobre una superficie, con la{" "}
                    <strong>palma hacia arriba</strong>, asegurándote de que el punto medio del brazo esté a la altura
                    del corazón.
                </li>
            </ul>

            <h3>3. Elección y colocación del manguito</h3>
            <ul>
                <li>
                    <strong>Tamaño adecuado:</strong> El manguito debe cubrir entre el <strong>80% y el 100%</strong> de
                    la circunferencia de tu brazo.
                </li>
                <li>
                    <strong>Posición:</strong> Coloca el borde inferior del manguito unos{" "}
                    <strong>2 cm por encima del pliegue del codo.</strong>
                </li>
            </ul>

            <h3>4. Medición</h3>
            <ul>
                <li>
                    <strong>Tensiómetro automático (oscilométrico):</strong>
                    <ul>
                        <li>Presiona el botón y espera a que el aparato te dé la lectura.</li>
                        <li>
                            Anota la cifra tal cual aparece, <strong>sin redondear</strong>.
                        </li>
                        <li>
                            Espera <strong>30 segundos</strong> y repite la operación si no se hace automáticamente.
                        </li>
                        <li>
                            <strong>Promedia ambas mediciones y registra el valor final</strong>.
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Tensiómetro aneroide:</strong>
                    <ul>
                        <li>
                            Coloca el estetoscopio sobre la arteria del brazo, asegurándote de que no quede cubierto por
                            el manguito.
                        </li>
                        <li>Infla el manguito hasta que el pulso desaparezca y luego añade 20–30 mmHg más.</li>
                        <li>
                            Desinfla lentamente (2 mmHg por segundo) y presta atención al momento en que aparecen los
                            ruidos de Korotkoff.
                        </li>
                        <li>
                            Realiza al menos dos mediciones y calcula el promedio. Si la diferencia entre mediciones es
                            mayor a 10 mmHg en la presión sistólica o 5 mmHg en la diastólica, realiza una medición
                            adicional.
                        </li>
                    </ul>
                </li>
            </ul>

            <h3>5. Registro</h3>
            <ul>
                <li>
                    Anota en tu historial médico el brazo en el que se tomó la medición y los valores promedio
                    obtenidos.
                </li>
            </ul>

            <h3>Puntos clave adicionales</h3>
            <ul>
                <li>
                    <strong>Medición inicial:</strong> En tu primera consulta, mide la presión en{" "}
                    <strong>ambos brazos</strong> y utiliza el brazo con la lectura más alta para futuras mediciones.
                </li>
                <li>
                    <strong>Tensiómetros validados:</strong> Utiliza siempre{" "}
                    <strong>tensiómetros automáticos validados</strong> para mayor precisión.
                </li>
                <li>
                    <strong>Pseudohipertensión:</strong> Si eres una persona mayor y sospechas que tus lecturas son más
                    altas de lo real debido a la rigidez arterial (pseudohipertensión), consulta a un profesional.
                </li>
            </ul>

            <h3>¿Cuándo debes medir tu presión arterial?</h3>
            <ul>
                <li>
                    <strong>Rastreo:</strong> Se recomienda realizar una medición de la presión arterial{" "}
                    <strong>al menos una vez al año</strong>, y con mayor frecuencia si tienes factores de riesgo.
                </li>
                <li>
                    <strong>Monitoreo domiciliario (MDPA):</strong> Se recomienda para confirmar la hipertensión o para
                    el seguimiento del tratamiento. Realiza las mediciones preferiblemente antes del desayuno y la cena.
                    Toma <strong>dos mediciones por la mañana y dos por la noche durante al menos 3 días</strong> (lo
                    ideal es 7), y promedia los valores excluyendo los del primer día.
                </li>
            </ul>

            <br />
        </div>
    );
};

export default BloodPressureMeasurementGuide;

import { useLogContext } from "@/hooks/useLogContext";
import generateLinkOrSpan from "@/utils/generateLinkOrSpan";

import styles from "./News.module.css";

const News = () => {
    const { logs } = useLogContext();

    return (
        <div className={styles.newsContainer}>
            <h3 className={styles.title}>¿Que hay de nuevo?</h3>

            <ul>
                <li className={styles.newVersion}>
                    <strong>v.3.6.5</strong>
                    <ul>
                        <li>
                            <strong>Se agregan íconos para compartir</strong> la aplicación en redes sociales.
                        </li>
                        <li>
                            <strong>Se mejoran validaciones</strong> que detectan valores fuera de rango al{" "}
                            {generateLinkOrSpan("/addedit", "agregar una medición")}.
                        </li>
                    </ul>
                </li>

                <li className={styles.newVersion}>
                    <strong>v.3.5.0</strong>
                    <ul>
                        <li>
                            <strong>Se agrega nueva funcionalidad</strong> que permite registrar{" "}
                            <strong>postura corporal</strong> y <strong>ubicación del medidor</strong> (tensiómetro) al{" "}
                            {generateLinkOrSpan("/addedit", "agregar una medición")}.
                        </li>
                        <li>
                            <strong>Se mejora navegación por teclado</strong> en toda la aplicación.
                        </li>
                    </ul>
                </li>

                <li className={styles.newVersion}>
                    <strong>v.3.4.8</strong>
                    <ul>
                        <li>
                            Al {generateLinkOrSpan("/addedit", "agregar una medición")}, ya no es obligatorio ingresar
                            el pulso.
                        </li>
                        <li>
                            <strong>Se realizaron pequeñas mejoras</strong> en el diseño de la lista de mediciones.
                        </li>
                        <li>
                            <strong>Se realizaron pequeñas mejoras</strong> en las validaciones de los valores
                            ingresados al {generateLinkOrSpan("/addedit", "agregar una medición")}.
                        </li>
                    </ul>
                </li>

                <li className={styles.newVersion}>
                    <strong>v.3.4.1</strong>
                    <ul>
                        <li>
                            <strong>Se agregó columna "Arritmia"</strong> al{" "}
                            {generateLinkOrSpan("/settings/exportpdf", "reporte PDF", logs.length > 0)}.
                        </li>
                    </ul>
                </li>

                <li className={styles.newVersion}>
                    <strong>v.3.4.0</strong>
                    <ul>
                        <li>
                            <strong>Se agregó ícono en la cabecera</strong> que lleva a la pantalla de{" "}
                            {generateLinkOrSpan("/settings/exportpdf", "generación de reportes PDF", logs.length > 0)}.
                        </li>
                        <li>
                            <strong>Se mejoró el diseño</strong> de la pantalla de{" "}
                            {generateLinkOrSpan("/settings/exportpdf", "generación de reportes PDF", logs.length > 0)}.
                        </li>
                        <li>
                            <strong>Se actualizaron</strong> los accesos de la pantalla de inicio:
                            <ul>
                                <li>
                                    <strong>Se agregó acceso</strong> a la sección en la ayuda que explica{" "}
                                    {generateLinkOrSpan("/help/arrythmia", "qué es Arritmia (latido irregular)")}.
                                </li>
                                <li>
                                    <strong>Se agregó acceso</strong> directo para cambiar entre tema claro/oscuro.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li className={styles.newVersion}>
                    <strong>v.3.3.2</strong>
                    <ul>
                        <li>
                            <strong>Se agregó sección en la ayuda</strong> que explica{" "}
                            {generateLinkOrSpan("/help/arrythmia", "qué es Arritmia (latido irregular)")}.
                        </li>
                    </ul>
                </li>

                <li className={styles.newVersion}>
                    <strong>v.3.3.0</strong>
                    <ul>
                        <li>
                            <strong>Se agregó nueva funcionalidad</strong> que permite{" "}
                            {generateLinkOrSpan("/addedit", "registrar arritmia en las mediciones")}.
                        </li>
                        <li>
                            Se hicieron ajustes generales que permiten que{" "}
                            <strong>cuando se agrande el tamaño del texto todo se vea correctamente</strong>.
                        </li>
                        <li>
                            Se hicieron ajustes generales que permiten que{" "}
                            <strong>en pantallas grandes se pueda hacer zoom</strong>.
                        </li>
                    </ul>
                </li>

                <li className={styles.newVersion}>
                    <strong>v.3.2.0</strong>
                    <ul>
                        <li>
                            El {generateLinkOrSpan("/settings/exportpdf", "reporte PDF", logs.length > 0)}{" "}
                            <strong>ahora incluye los valores promedio</strong> (sistólica, diastólica, pulso) del rango
                            de fechas seleccionado.
                        </li>
                    </ul>
                </li>

                <li className={styles.newVersion}>
                    <strong>v.3.0.0</strong>
                    <ul>
                        <li>
                            <strong>Nueva funcionalidad</strong>: Selección de rango de fechas durante la{" "}
                            {generateLinkOrSpan("/settings/exportpdf", "generación de reportes PDF", logs.length > 0)}.
                        </li>
                        <li>Mejoras en la consistencia visual general de la aplicación.</li>
                    </ul>
                </li>

                <li className={styles.newVersion}>
                    <strong>v.2.2.0</strong>
                    <ul>
                        <li>
                            <strong>Nuevos componentes</strong>:
                            <ul>
                                <li>
                                    <strong>Shortcuts</strong>: Accesos rápidos para mejorar la usabilidad de los nuevos
                                    usuarios.
                                </li>
                                <li>
                                    <strong>DataStorage</strong>: Sección de la ayuda que explica{" "}
                                    {generateLinkOrSpan("/help/storage", "dónde se almacenan los datos")}.
                                </li>
                            </ul>
                        </li>
                        <li>Validación de entrada para restablecer valores de presión arterial inválidos.</li>
                    </ul>
                </li>

                <li className={styles.newVersion}>
                    <strong>v.2.1.1</strong>
                    <ul>
                        <li>
                            <strong>Nueva funcionalidad</strong>: Detección de mediciones fuera de rango con icono de
                            advertencia y mensaje de alerta al guardar.
                        </li>
                        <li>
                            Mejoras en los estilos de los componentes{" "}
                            {generateLinkOrSpan("/settings", "SocialMedia y Donate")}.
                        </li>
                    </ul>
                </li>

                <li className={styles.newVersion}>
                    <strong>v.1.3.0</strong>
                    <ul>
                        <li>
                            <strong>Nueva funcionalidad</strong>:{" "}
                            {generateLinkOrSpan("/settings/exportpdf", "Exportación de datos a PDF", logs.length > 0)}.
                        </li>
                        <li>Mejoras en la optimización de imágenes y favicons.</li>
                    </ul>
                </li>

                <li className={styles.newVersion}>
                    <strong>v.1.1.1</strong>
                    <ul>
                        <li>
                            <strong>Nuevos componentes</strong>:
                            <ul>
                                <li>
                                    <strong>About</strong>: Información sobre la aplicación (luego renombrado a{" "}
                                    <strong>Help</strong>).
                                </li>
                                <li>
                                    <strong>ContactForm</strong>:{" "}
                                    {generateLinkOrSpan("/settings/contact", "Formulario de contacto")} para feedback.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Mejoras en la organización del código y optimizaciones sugeridas por{" "}
                            <strong>Lighthouse</strong> para SEO y un rendimiento mejorado.
                        </li>
                    </ul>
                </li>

                <li className={styles.newVersion}>
                    <strong>v.1.0.0</strong>
                    <ul>
                        <li>
                            <strong>Lanzamiento inicial</strong>:
                            <ul>
                                <li>
                                    Componentes básicos: <strong>Header</strong>, <strong>Log</strong>,{" "}
                                    <strong>LogsList</strong>, <strong>AddButton</strong>.
                                </li>
                                <li>Soporte para modo oscuro y temas personalizados.</li>
                                <li>
                                    Uso de <strong>TypeScript</strong> para tipado seguro.
                                </li>
                                <li>
                                    Estructura inicial del proyecto con <strong>Vite</strong> y <strong>React</strong>.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default News;
//TODO: drop

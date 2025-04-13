import generateLinkOrSpan from "@/utils/generateLinkOrSpan";

import styles from "./Arrythmia.module.css";

const Arrythmia = () => {
    return (
        <section className={styles.arrythmiaContainer}>
            <h2 className={styles.title}>¿Qué es una arritmia o un latido irregular?</h2>
            <p>
                El corazón es como un motor que late de manera constante y rítmica para bombear sangre a todo el cuerpo.
                Una <strong>arritmia</strong> ocurre cuando este ritmo se altera, es decir, cuando el corazón late
                demasiado rápido, demasiado lento o de manera irregular. Esto puede sentirse como si el corazón "se
                saltara un latido", "aleteara" o "palpitara" de forma extraña.
            </p>

            <h3>¿Es grave?</h3>
            <p>
                No siempre. Muchas personas experimentan arritmias en algún momento de sus vidas, y a menudo son
                inofensivas. Sin embargo, en algunos casos, pueden ser señal de un problema cardíaco más serio que
                requiere atención médica.
            </p>

            <h3>¿Qué lo causa?</h3>
            <p>Las arritmias pueden ocurrir por diversas razones, como:</p>
            <ul>
                <li>Estrés o ansiedad.</li>
                <li>Consumo excesivo de cafeína o alcohol.</li>
                <li>Problemas en el sistema eléctrico del corazón.</li>
                <li>Enfermedades cardíacas, presión arterial alta o diabetes.</li>
                <li>Cambios en los niveles de electrolitos (como el potasio o el magnesio) en la sangre.</li>
            </ul>

            <h3>¿Cómo se siente?</h3>
            <p>Algunas personas no notan nada, pero otras pueden sentir:</p>
            <ul>
                <li>Palpitaciones (como si el corazón latiera muy fuerte o rápido).</li>
                <li>Mareos o aturdimiento.</li>
                <li>Falta de aire.</li>
                <li>Dolor en el pecho.</li>
                <li>Cansancio extremo.</li>
            </ul>

            <h3>¿Qué debo hacer si siento esto?</h3>
            <p>
                Si notas latidos irregulares o síntomas como los mencionados, es importante que lo comentes con un
                médico. Aunque no siempre es grave, es mejor descartar cualquier problema de salud.
            </p>

            <p>
                En esta aplicación, podés seleccionar la opción <strong>"Arritmia (latido irregular)"</strong> cuando
                estés {generateLinkOrSpan("/addedit", "agregando o editando una medición")} para registrar esta
                información y compartirla con tu médico en tu próxima consulta.
            </p>
        </section>
    );
};

export default Arrythmia;

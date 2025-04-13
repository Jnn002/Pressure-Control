import { Helmet } from "react-helmet-async";

const Seo = ({
    title = "Presion Arterial",
    description = "App web gratuita para registrar y analizar tu presión arterial. Registro y monitoreo gratuito con exportación a PDF.",
    keywords = "presión arterial, salud cardiovascular, registro médico, hipertensión, app salud, monitoreo gratuito, webapp, gratuita, bienestar"
}: {
    title?: string;
    description?: string;
    keywords?: string;
}) => {
    const defaultTitle = "Presion Arterial - Grupo 1 UMG";
    const fullTitle = title ? title + " - Grupo 1 UMG" : defaultTitle;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta property="og:title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
            <meta name="keywords" content={keywords} />
        </Helmet>
    );
};

export default Seo;

import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLogContext } from "@/hooks/useLogContext";
import AddEditLog from "@/components/AddEditLog/AddEditLog";
import FloatingButtons from "@/components/FloatingButtons/FloatingButtons";
import Header from "@/components/Header/Header";
import LogsList from "@/components/LogsList/LogsList";
import Modal from "@/components/Modal/Modal";
import Shortcuts from "@/components/Shortcuts/Shortcuts";
import Help from "@/components/Help/Help";
import NoLogsMessage from "@/components/NoLogsMessage/NoLogsMessage";
import Settings from "@/components/Settings/Settings";
import Seo from "@/components/SEO/SEO";
import ContactFormWrapper from "@/components/Modals/ContactFormWrapper/ContactFormWrapper";
import BloodPressureLevelsWrapper from "@/components/Modals/BloodPressureLevelsWrapper/BloodPressureLevelsWrapper";
import ExportPDFReportWrapper from "@/components/Modals/ExportPDFReportWrapper/ExportPDFReportWrapper";
import BloodPressureMeasurementGuideWrapper from "@/components/Modals/BloodPressureMeasurementGuideWrapper/BloodPressureMeasurementGuideWrapper";
import OutOfRangeValuesWrapper from "@/components/Modals/OutOfRangeValuesWrapper/OutOfRangeValuesWrapper";
import DataStorageWrapper from "@/components/Modals/DataStorageWrapper/DataStorageWrapper";
import ArrythmiaWrapper from "@/components/Modals/ArrythmiaWrapper/ArrythmiaWrapper";
import DonateSocialMediaWrapper from "@/components/Modals/DonateSocialMediaWrapper/DonateSocialMediaWrapper";
import HeartRateMeasurementWrapper from "@/components/Modals/HeartRateMeasurementWrapper/HeartRateMeasurementWrapper";
import StatsWrapper from "@/components/Modals/StatsWrapper/StatsWrapper";
import Stats from "@/components/Stats/Stats";

const App = () => {
    const { selectedLogId, setSelectedLogId, logs } = useLogContext();
    const navigate = useNavigate();
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);

    function LocationTracker() {
        const location = useLocation();

        useEffect(() => {}, [location]);

        return null;
    }

    useEffect(() => {
        if (selectedLogId) {
            navigate("/addedit");
        }
    }, [selectedLogId, navigate]);

    // Manejar cambios de tamaño de ventana
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1200);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleCloseModal = (to = "/") => {
        if (typeof to !== "string") {
            to = "/";
        }
        setSelectedLogId("");
        navigate(to);
    };

    return (
        <main>
            <Seo />

            <Header />

            {/* Renderizado condicional de Stats para desktop */}
            {isDesktop && logs.length > 0 && (
                <div className="stats-container-desktop">
                    <Stats />
                </div>
            )}

            {logs.length > 0 ? (
                <>
                    <LogsList />
                    <FloatingButtons onClick={() => navigate("/addedit")} />
                </>
            ) : (
                <div style={{ marginTop: "2rem" }}>
                    <NoLogsMessage onAddClicked={() => navigate("/addedit")} />
                    <Shortcuts />
                </div>
            )}

            <Routes>
                <Route
                    path="/addedit"
                    element={
                        <Modal onClose={() => handleCloseModal()} isOpen={true}>
                            <AddEditLog onClose={() => handleCloseModal()} />
                        </Modal>
                    }
                />

                <Route
                    path="/help"
                    element={
                        <Modal onClose={() => handleCloseModal()} isOpen={true}>
                            <Help onClose={() => handleCloseModal()} />
                        </Modal>
                    }
                >
                    <Route
                        path="measurementguide"
                        element={
                            <Modal onClose={() => handleCloseModal("/help")} isOpen={true}>
                                <BloodPressureMeasurementGuideWrapper onClose={() => handleCloseModal("/help")} />
                            </Modal>
                        }
                    />

                    <Route
                        path="outofrangevalues"
                        element={
                            <Modal onClose={() => handleCloseModal("/help")} isOpen={true}>
                                <OutOfRangeValuesWrapper onClose={() => handleCloseModal("/help")} />
                            </Modal>
                        }
                    />

                    <Route
                        path="arrythmia"
                        element={
                            <Modal onClose={() => handleCloseModal("/help")} isOpen={true}>
                                <ArrythmiaWrapper onClose={() => handleCloseModal("/help")} />
                            </Modal>
                        }
                    />

                    <Route
                        path="bloodpressurelevels"
                        element={
                            <Modal onClose={() => handleCloseModal("/help")} isOpen={true}>
                                <BloodPressureLevelsWrapper onClose={() => handleCloseModal("/help")} />
                            </Modal>
                        }
                    />

                    <Route
                        path="storage"
                        element={
                            <Modal onClose={() => handleCloseModal("/help")} isOpen={true}>
                                <DataStorageWrapper onClose={() => handleCloseModal("/help")} />
                            </Modal>
                        }
                    />
                </Route>

                <Route
                    path="/settings"
                    element={
                        <Modal onClose={() => handleCloseModal()} isOpen={true} className="settings-modal">
                            <Settings onClose={() => handleCloseModal()} />
                        </Modal>
                    }
                >
                    <Route
                        path="exportpdf"
                        element={
                            <Modal onClose={() => handleCloseModal("/settings")} isOpen={true}>
                                <ExportPDFReportWrapper onClose={() => handleCloseModal("/settings")} />
                            </Modal>
                        }
                    />

                    <Route
                        path="donate"
                        element={
                            <Modal onClose={() => handleCloseModal("/settings")} isOpen={true}>
                                <DonateSocialMediaWrapper onClose={() => handleCloseModal("/settings")} />
                            </Modal>
                        }
                    />

                    <Route
                        path="contact"
                        element={
                            <Modal onClose={() => handleCloseModal("/settings")} isOpen={true}>
                                <ContactFormWrapper onClose={() => handleCloseModal("/settings")} />
                            </Modal>
                        }
                    />
                </Route>

                <Route
                    path="/measure-heart-rate"
                    element={
                        <Modal onClose={() => handleCloseModal("/addedit")} isOpen={true}>
                            <HeartRateMeasurementWrapper onClose={() => handleCloseModal("/addedit")} />
                        </Modal>
                    }
                />

                {/* Ruta de Stats solo visible en mobile */}
                {!isDesktop && (
                    <Route
                        path="/stats"
                        element={
                            <Modal onClose={() => handleCloseModal()} isOpen={true}>
                                <StatsWrapper onClose={() => handleCloseModal()} />
                            </Modal>
                        }
                    />
                )}
            </Routes>
        </main>
    );
};

export default App;

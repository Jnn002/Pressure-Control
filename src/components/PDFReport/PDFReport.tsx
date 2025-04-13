import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { LogData } from "@/components/AddEditLog/AddEditLog";
import { getCategory } from "@/utils/getCategory";
import { formatToShortDateWithTimeString } from "@/utils/formatDateUtils";

import favicon120 from "@/assets/favicon_120x121.png";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "20px 10px 100px 10px"
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    textSmall: {
        fontSize: 10
    },
    textMedium: {
        fontSize: 12
    },
    textNormal: {
        fontSize: 14
    },
    textLarge: {
        fontSize: 16
    },
    textXLarge: {
        fontSize: 24
    },
    table: {
        display: "flex",
        width: "100%",
        padding: 5
    },
    tableHeaderCell: {
        textAlign: "center",
        border: "1px solid #555"
    },
    tableRow: {
        display: "flex",
        flexDirection: "row",
        padding: 5,
        width: "100%"
    },
    borderGray: {
        border: "1px solid #555"
    },
    header: {
        display: "flex",
        flexDirection: "column"
    },
    headerRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headerLogo: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end"
    },
    headerLogoImage: {
        width: 40,
        height: 40,
        borderRadius: "25%",
        marginRight: "5px"
    },
    headerLogoText: {
        display: "flex",
        flexDirection: "column"
    },
    headerRight: {
        display: "flex",
        justifyContent: "flex-end",
        height: "100%"
    },
    link: {
        fontSize: 10,
        color: "#00F"
    },
    footer: {
        fontSize: 10,
        marginTop: "10px",
        width: "100%",
        textAlign: "center"
    }
});

const PDFReport = ({ logs }: { logs: LogData[] }) => {
    const tableTitle = `Reporte de mediciones - ${formatToShortDateWithTimeString()}`;
    let totalSystolic = 0;
    let totalDiastolic = 0;
    let totalValidPulse = 0;
    let sumPulse = 0;
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <View fixed style={styles.header} id="header">
                        <View style={styles.headerRow}>
                            <View style={styles.headerLogo}>
                                <Image src={favicon120} style={styles.headerLogoImage} />
                                <View style={styles.headerLogoText}>
                                    <Text style={styles.textXLarge}>MiPresión</Text>
                                    <Text style={styles.textSmall}>Registro de Presión Sanguínea</Text>
                                </View>
                            </View>
                            <View style={styles.headerRight}>
                                <Text style={styles.textSmall}>Grupo 1</Text>
                                <Text style={styles.link}>https://google.com</Text>
                            </View>
                        </View>
                        <Text style={{ ...styles.textLarge, margin: "15px 0" }}>{tableTitle}</Text>
                    </View>

                    <View style={{ ...styles.table, ...styles.borderGray }}>
                        <View style={styles.tableRow} id="tableHeader">
                            <View style={{ ...styles.tableHeaderCell, textAlign: "left", width: "12%" }}>
                                <Text style={styles.textMedium}>Fecha</Text>
                            </View>
                            <View style={{ ...styles.tableHeaderCell, width: "7%" }}>
                                <Text style={styles.textMedium}>Hora</Text>
                            </View>
                            <View style={{ ...styles.tableHeaderCell, width: "6%" }}>
                                <Text style={styles.textMedium}>Sis.</Text>
                            </View>
                            <View style={{ ...styles.tableHeaderCell, width: "6%" }}>
                                <Text style={styles.textMedium}>Dia.</Text>
                            </View>
                            <View style={{ ...styles.tableHeaderCell, width: "8%" }}>
                                <Text style={styles.textMedium}>Pulso</Text>
                            </View>
                            <View style={{ ...styles.tableHeaderCell, width: "10%" }}>
                                <Text style={styles.textMedium}>Arritmia</Text>
                            </View>
                            <View style={{ ...styles.tableHeaderCell, width: "12%" }}>
                                <Text style={styles.textMedium}>Medicina</Text>
                            </View>
                            <View style={{ ...styles.tableHeaderCell, width: "10%" }}>
                                <Text style={styles.textMedium}>Nivel</Text>
                            </View>
                            <View style={{ ...styles.tableHeaderCell, width: "29%" }}>
                                <Text style={styles.textMedium}>Notas</Text>
                            </View>
                        </View>

                        {logs.map(({ date, systolic, diastolic, pulse, medicine, notes, arrhythmia }, index) => {
                            const onlyDDMMYYYYDate = formatToShortDateWithTimeString(new Date(date)).split(" ")[0];
                            const time = date.split("T")[1].substring(0, 5);
                            const category = getCategory(systolic, diastolic).value;
                            totalSystolic += Number(systolic);
                            totalDiastolic += Number(diastolic);
                            if (pulse && pulse !== 0) {
                                totalValidPulse++;
                                sumPulse += Number(pulse);
                            }

                            return (
                                <View key={index}>
                                    <View
                                        wrap={false}
                                        style={{
                                            ...styles.tableRow,
                                            backgroundColor: index % 2 === 0 ? "transparent" : "#CCC"
                                        }}
                                    >
                                        <View style={{ width: "12%", textAlign: "left" }}>
                                            <Text style={styles.textMedium}>{onlyDDMMYYYYDate}</Text>
                                        </View>
                                        <View style={{ width: "7%", textAlign: "center" }}>
                                            <Text style={styles.textMedium}>{time}</Text>
                                        </View>
                                        <View style={{ width: "6%", textAlign: "center" }}>
                                            <Text style={styles.textMedium}>{systolic}</Text>
                                        </View>
                                        <View style={{ width: "6%", textAlign: "center" }}>
                                            <Text style={styles.textMedium}>{diastolic}</Text>
                                        </View>
                                        <View style={{ width: "8%", textAlign: "center" }}>
                                            <Text style={styles.textMedium}>{pulse}</Text>
                                        </View>
                                        <View style={{ width: "10%", textAlign: "center" }}>
                                            <Text style={styles.textMedium}>{arrhythmia ? "Si" : "No"}</Text>
                                        </View>
                                        <View style={{ width: "12%", textAlign: "center" }}>
                                            <Text style={styles.textMedium}>{medicine ? "Si" : "No"}</Text>
                                        </View>
                                        <View style={{ width: "10%", textAlign: "center" }}>
                                            <Text style={styles.textMedium}>{category}</Text>
                                        </View>
                                        <View style={{ width: "29%", textAlign: "left" }}>
                                            <Text style={styles.textMedium}>{notes}</Text>
                                        </View>
                                    </View>
                                </View>
                            );
                        })}

                        <View wrap={false} style={{ ...styles.tableRow }}>
                            <View style={{ width: "19%", textAlign: "center", backgroundColor: "#CCC" }}>
                                <Text style={styles.textMedium}>Promedios:</Text>
                            </View>
                            <View style={{ width: "6%", textAlign: "center", backgroundColor: "#CCC" }}>
                                <Text style={styles.textMedium}>{Math.round(totalSystolic / logs.length)}</Text>
                            </View>
                            <View style={{ width: "6%", textAlign: "center", backgroundColor: "#CCC" }}>
                                <Text style={styles.textMedium}>{Math.round(totalDiastolic / logs.length)}</Text>
                            </View>
                            {totalValidPulse === 0 ? (
                                <View style={{ width: "69%" }}>
                                    <Text></Text>
                                </View>
                            ) : (
                                <>
                                    <View style={{ width: "8%", textAlign: "center", backgroundColor: "#CCC" }}>
                                        <Text style={styles.textMedium}>{Math.round(sumPulse / totalValidPulse)}</Text>
                                    </View>
                                    <View style={{ width: "61%" }}>
                                        <Text></Text>
                                    </View>
                                </>
                            )}
                        </View>
                    </View>

                    <Text
                        fixed
                        style={styles.footer}
                        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
                    />
                </View>
            </Page>
        </Document>
    );
};

export default PDFReport;

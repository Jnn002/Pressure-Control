import { useContext } from "react";
import Log from "@/components/Log/Log";
import { LogContext } from "@/contexts/LogContext";
import { formatToDayMonth, formatToTimeOnly } from "@/utils/formatDateUtils";
import { isAfter } from "date-fns";

import styles from "./LogsList.module.css";

const LogsList = () => {
    const { logs } = useContext(LogContext);
    let lastDateWithoutTime = new Date();
    let lastYear = 0;
    return (
        <section className={styles.logsListContainer}>
            {logs.map((log, index) => {
                if (index === 0) {
                    lastDateWithoutTime = new Date(log.date.substring(0, 10));
                    lastYear = new Date(log.date).getFullYear();
                }

                const dateToShow = formatToDayMonth(new Date(log.date));
                const yearToShow = new Date(log.date).getFullYear();
                const timeToShow = formatToTimeOnly(new Date(log.date));

                const currentDateWithoutTime = new Date(log.date.substring(0, 10));
                let shouldShowDateHeader = isAfter(lastDateWithoutTime, currentDateWithoutTime);

                if (index === 0) {
                    if (logs.length == 1) {
                        shouldShowDateHeader = true;
                    } else {
                        const nextDateWithoutTime = new Date(logs[1].date.substring(0, 10));
                        if (nextDateWithoutTime !== currentDateWithoutTime) {
                            shouldShowDateHeader = true;
                        }
                    }
                }

                if (shouldShowDateHeader) {
                    lastDateWithoutTime = currentDateWithoutTime;
                }

                const shouldShowYearHeader = yearToShow !== lastYear;
                if (shouldShowYearHeader) lastYear = yearToShow;

                return shouldShowYearHeader || shouldShowDateHeader ? (
                    <div key={log.id} className={styles.dateYearContainer}>
                        {shouldShowYearHeader && (
                            <h2 key={log.date + yearToShow} className={styles.yearHeader}>
                                {yearToShow}
                            </h2>
                        )}
                        {shouldShowDateHeader && (
                            <h2 key={log.date} className={styles.dayHeader}>
                                {dateToShow}
                            </h2>
                        )}
                        <Log {...log} date={timeToShow} />
                    </div>
                ) : (
                    <Log key={log.id} {...log} date={timeToShow} />
                );
            })}
        </section>
    );
};

export default LogsList;

import { LogData } from "@/components/AddEditLog/AddEditLog";

export const getOldestAndLatestLogDates = (logs: LogData[]) => {
    const oldestLogDate = logs[logs.length - 1].date.substring(0, 10);
    const latestLogDate = logs.length > 1 ? logs[0].date.substring(0, 10) : oldestLogDate;

    return {
        oldestLogDate,
        latestLogDate
    };
};

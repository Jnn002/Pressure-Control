import { LogData } from "@/components/AddEditLog/AddEditLog";

export const filterLogsByDateRange = (from: string, to: string, logs: LogData[]) => {
    return logs.filter(log => {
        const logDate = new Date(log.date);
        const fromDate = new Date(from);
        const toDate = new Date(to);
        return logDate >= fromDate && logDate <= toDate;
    });
};

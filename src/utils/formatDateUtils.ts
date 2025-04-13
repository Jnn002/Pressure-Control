import { format } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import { es } from "date-fns/locale";

/* Returns datetime in ISO format: 2025-01-19T15:26:57 */
const formatToISODateString = (date = new Date()) => {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return formatInTimeZone(date, userTimeZone, "yyyy-MM-dd'T'HH:mm:ss");
};

/* Returns datetime in format: 19/01/2025 15:26 */
const formatToShortDateWithTimeString = (date = new Date()) => {
    return format(date, "dd/MM/yyyy HH:mm");
};

/* Returns only date in format: 2025-05-01 */
const formatToShortDateWithoutTimeString = (date = new Date()) => {
    return format(date, "yyyy-MM-dd");
};

/* Returns only date in format: 19 de enero (Depends on locale, default: es)*/
const formatToDayMonth = (date = new Date(), locale = es) => {
    return format(date, "dd 'de' MMMM", { locale });
};

/* Returns only time in format: 15:26 */
const formatToTimeOnly = (date = new Date()) => {
    return format(date, "HH:mm");
};

export {
    formatToISODateString,
    formatToShortDateWithTimeString,
    formatToShortDateWithoutTimeString,
    formatToDayMonth,
    formatToTimeOnly
};

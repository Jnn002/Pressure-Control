import { format } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import { es } from "date-fns/locale";

const formatToISODateString = (date = new Date()) => {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return formatInTimeZone(date, userTimeZone, "yyyy-MM-dd'T'HH:mm:ss");
};

const formatToShortDateWithTimeString = (date = new Date()) => {
    return format(date, "dd/MM/yyyy HH:mm");
};

const formatToShortDateWithoutTimeString = (date = new Date()) => {
    return format(date, "yyyy-MM-dd");
};

const formatToDayMonth = (date = new Date(), locale = es) => {
    return format(date, "dd 'de' MMMM", { locale });
};

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

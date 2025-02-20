import { format, parseISO } from "date-fns";

export function Date({dateString}) {
    const date = parseISO(dateString);

    return <time dateTime={dateString}> {format(date, 'MMMM d, yyyy')}</time>
}
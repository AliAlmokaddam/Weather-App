import moment from 'moment';

export function formatForecastDate(date: Date): string {
    const m = moment(date);
    const isToday = m.isSame(moment(), 'day');

    return isToday ? 'Today' : m.format('ddd, MMM DD');
}
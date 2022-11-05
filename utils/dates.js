import dayjs from 'dayjs';

/**
 * returns a 2 dimensional matrix of the current month
 * @param {Number} month - month number from 0 to 11
 */

export const getMonth = (month = dayjs().month()) => { // returns present if we don't pass anything to dayjs()
    const year = dayjs().year();
    const firstDayOfMonth = dayjs(new Date(year, month, 1)).day(); 
    let currentMonthCount = 0 - firstDayOfMonth;
    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            return dayjs(new Date(year, month, currentMonthCount));
        });
    });
    return daysMatrix;
} 
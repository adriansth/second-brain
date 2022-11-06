// utils 
import dayjs from 'dayjs';

const INITIAL_STATE = {
    calendarMonthIndex: dayjs().month(), // month num from 0 to 11 
}

const calendarReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        // this action increments the month index by 1
        case "INCREMENT_MONTH":
            return {
                ...state,
                calendarMonthIndex: state.calendarMonthIndex + 1,
            };
        // this action decrements the month index by 1
        case "DECREMENT_MONTH":
            return {
                ...state,
                calendarMonthIndex: state.calendarMonthIndex - 1,
            };
        // this action resets the month index to today's 
        case "RESET_MONTH":
            return {
                ...state,
                calendarMonthIndex: dayjs().month(),
            };
        // the default value is today's month index
        default:
            return {
                ...state,
                calendarMonthIndex: dayjs().month(),
            };
    }
}

export default calendarReducer;
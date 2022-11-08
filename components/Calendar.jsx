//redux
import { useSelector } from 'react-redux';
// utils
import { getMonth } from '../utils/dates';
// components
import CalendarHeader from '../components/CalendarHeader';
import CalendarMonth from '../components/CalendarMonth';

export default function Calendar() {

    const calendarMonthIndex = useSelector(state => state.calendarMonthIndex); // bring the calendar index state

    return(
        <div className='w-[80%] lg:w-[85%] h-[92%]'>
            <div className='w-full h-full'>
                <CalendarHeader />
                <div className='w-full h-full flex items-center justify-center'>
                    <CalendarMonth month={getMonth(calendarMonthIndex)} />
                </div>
            </div>
        </div>
    );
}
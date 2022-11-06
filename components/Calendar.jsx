//redux
import { useSelector } from 'react-redux';
// hooks 
import { useState } from 'react';
// utils
import { getMonth } from '../utils/dates';
// components
import CalendarHeader from '../components/CalendarHeader';
import CalendarMonth from '../components/CalendarMonth';
import CalendarSidebar from '../components/CalendarSidebar';

export default function Calendar() {

    const {calendarMonthIndex} = useSelector(state => state.calendarMonthIndex); // bring the calendar index state
    const [currentMonth, setCurrentMonth] = useState(getMonth(calendarMonthIndex)); // get the month matrix depending on global calendar index state

    return(
        <div className='w-[80%] lg:w-[85%] h-[92%]'>
            <div className='w-full h-full'>
                <CalendarHeader />
                <div className='w-full h-full flex items-center justify-center'>
                    <CalendarMonth month={currentMonth} />
                </div>
            </div>
        </div>
    );
}
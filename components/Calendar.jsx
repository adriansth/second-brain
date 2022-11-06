import { useState, useEffect, useContext } from 'react';
// components
import CalendarHeader from '../components/CalendarHeader';
import CalendarMonth from '../components/CalendarMonth';
import CalendarSidebar from '../components/CalendarSidebar';
// utils
import { getMonth } from '../utils/dates';

export default function Calendar() {

    const [currentMonth, setCurrentMonth] = useState(getMonth());

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
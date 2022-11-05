import { useState, useEffect } from 'react';
// components
import CalendarHeader from '../components/CalendarHeader';
import CalendarMonth from '../components/CalendarMonth';
import CalendarSidebar from '../components/CalendarSidebar';
// utils
import { getMonth } from '../utils/dates';

export default function Calendar() {

    const [currentMonth, setCurrentMonth] = useState([]);
    
    useEffect(() => {
        setCurrentMonth(getMonth());
    }, []);

    return(
        <div className='w-full h-screen'>
            <div className='w-full h-screen'>
                <div className='w-full flex items-center justify-center'>
                    <CalendarMonth month={currentMonth} />
                </div>
            </div>
        </div>
    );
}
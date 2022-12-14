import React from 'react';
import CalendarDay from './CalendarDay';

export default function CalendarMonth({ month }) {

    return(
        <div className='flex-1 min-h-full grid grid-cols-7 grid-rows-5 shadow-xl'>
            {month.map((row, i) => (
                <React.Fragment key={i}>
                    {row.map((day, idx) => (
                        <CalendarDay day={day} key={idx} rowIdx={i} />
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
}
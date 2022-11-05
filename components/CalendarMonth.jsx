import CalendarDay from './CalendarDay';

export default function CalendarMonth({ month }) {
    return(
        <div className='w-full grid grid-rows-4 grid-cols-7'>
            {month.map((row, i) => (
                <div key={i}>
                    {row.map((day, idx) => (
                        <CalendarDay day={day} key={idx} rowIdx={i} />
                    ))}
                </div>
            ))}
        </div>
    );
}
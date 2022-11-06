export default function CalendarDay({ day, rowIdx }) {
    return(
        <div className='border flex flex-col'>
            <div className='flex flex-col items-center'>
                {
                    rowIdx === 0 && 
                    <p className='text-xs mt-1'>{day.format('ddd').toUpperCase()}</p>                
                }
                <p className='text-xs p-1 my-1 text-center'>
                    {day.format('DD')}
                </p>
            </div>
        </div>
    );
}
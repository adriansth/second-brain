import dayjs from 'dayjs';

export default function CalendarDay({ day, rowIdx }) {

    const getCurrentDayClass = () => {
       if (day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")) {
           return 'bg-red-400 text-white rounded-full w-7 font-bold'
       } else {
           return "";
       }
    }

    return(
        <div className='border flex flex-col'>
            <div className='flex flex-col items-center'>
                {
                    rowIdx === 0 && 
                    <p className='mt-1 font-bold text-blue-400'>{day.format('ddd').toUpperCase()}</p>                
                }
                <p className={`text-xs p-1 my-1 text-center ${getCurrentDayClass()}`}>
                    {day.format('DD')}
                </p>
            </div>
        </div>
    );
}
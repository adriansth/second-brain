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
                    <p className='font-bold text-blue-400 border-b w-full text-center bg-gray-100'>{day.format('ddd').toUpperCase()}</p>                
                }
                <div className='w-full pr-3 flex justify-end'>
                    <p className={`text-xs p-1 my-1 text-center ${getCurrentDayClass()}`}>
                        {day.format('D')}
                    </p>
                </div>
            </div>
        </div>
    );
}
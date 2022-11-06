import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import dayjs from "dayjs";
// redux 
import { useDispatch, useSelector } from "react-redux";

export default function CalendarHeader() {

    const dispatch = useDispatch(); // alias
    const calendarMonthIndex = useSelector(state => state.calendarMonthIndex);

    // increment month index dispatch 
    const incrementMonthIndex = () => {
        dispatch({type: "INCREMENT_MONTH"}); 
    }

    // decrement month index dispatch
    const decrementMonthIndex = () => {
        dispatch({type: "DECREMENT_MONTH"});
    }

    // reset month index dispatch
    const resetMonthIndex = () => {
        dispatch({type: "RESET_MONTH"});
    }

    return(
        <div className='px-4 py-2 flex justify-between items-center'>
            {/* month name */}
            <h2 className='font-bold text-gray-700'>
                {dayjs().month(calendarMonthIndex).format("MMMM")}
            </h2>
            {/* month selector */}
            <div className='flex items-center px-4 py-2 gap-x-3'>
                <button 
                    className='text-sm p-2 border hover:bg-blue-400 hover:text-white cursor-pointer rounded-lg text-gray-700 font-bold'
                    onClick={resetMonthIndex} 
                >
                    Today
                </button>
                <button 
                    className='border p-2 rounded-lg hover:bg-blue-400 hover:text-white cursor-pointer text-gray-700'
                    onClick={decrementMonthIndex}   
                >
                    <ChevronLeftIcon className='w-5' />
                </button>
                <button 
                    className='border p-2 rounded-lg hover:bg-blue-400 hover:text-white cursor-pointer text-gray-700'
                    onClick={incrementMonthIndex}
                >
                    <ChevronRightIcon className='w-5' />
                </button>
            </div>
        </div>
    );
}
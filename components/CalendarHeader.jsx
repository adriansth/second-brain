import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
// redux 
import { useDispatch, useSelector } from "react-redux";

export default function CalendarHeader() {

    const dispatch = useDispatch(); // alias

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
        <div className='px-4 py-2 flex items-center gap-x-3'>
            <button 
                className='text-sm p-2 border hover:bg-blue-400 hover:text-white cursor-pointer rounded-lg'
               onClick={resetMonthIndex} 
            >
                Today
            </button>
            <button 
                className='border p-2 rounded-lg hover:bg-blue-400 hover:text-white cursor-pointer'
                onClick={decrementMonthIndex}   
            >
                <ChevronLeftIcon className='w-5' />
            </button>
            <button 
                className='border p-2 rounded-lg hover:bg-blue-400 hover:text-white cursor-pointer'
                onClick={incrementMonthIndex}
            >
                <ChevronRightIcon className='w-5' />
            </button>
        </div>
    );
}
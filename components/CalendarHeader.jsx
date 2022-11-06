import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function CalendarHeader() {
    return(
        <div className='px-4 py-2 flex items-center gap-x-3'>
            <button className='text-sm p-2 border hover:bg-blue-400 hover:text-white cursor-pointer rounded-lg'>Today</button>
            <button className='border p-2 rounded-lg hover:bg-blue-400 hover:text-white cursor-pointer'>
                <ChevronLeftIcon className='w-5' />
            </button>
            <button className='border p-2 rounded-lg hover:bg-blue-400 hover:text-white cursor-pointer'>
                <ChevronRightIcon className='w-5' />
            </button>
        </div>
    );
}
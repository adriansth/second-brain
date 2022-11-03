import { Bars3Icon } from '@heroicons/react/24/outline';
import { BeakerIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
    return(
        <div className='w-full flex border-b'>
            <div className='w-[10%] lg:w-[15%] border-r p-5 flex items-center justify-center sm:justify-start'>
                <BeakerIcon className='w-7 text-blue-400' />
            </div>
            <div className='w-[80%] p-5 flex items-center'>
                <Bars3Icon className='w-5 hover:text-blue-400 cursor-pointer' />
            </div>
        </div>
    );
}
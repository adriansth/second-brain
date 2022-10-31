import { Bars3Icon } from '@heroicons/react/24/outline';

export default function Navbar() {
    return(
        <div className='w-full flex border-b'>
            <div className='w-[20%] lg:w-[15%] border-r p-3'>
                <span>Logo</span>
            </div>
            <div className='w-[80%] p-5'>
                <Bars3Icon className='w-5 hover:text-blue-400 cursor-pointer' />
            </div>
        </div>
    );
}
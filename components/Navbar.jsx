import { Bars3Icon, BeakerIcon } from '@heroicons/react/24/outline';

import Link from 'next/link';

export default function Navbar() {
    return(
        <div className='w-full h-[50px] flex border-b'>
            <div className='w-[10%] lg:w-[15%] border-r p-5 flex items-center justify-center sm:justify-start'>
                <Link href='/'>
                    <BeakerIcon className='w-7 text-blue-400' />
                </Link>
            </div>
            <div className='w-[80%] p-5 flex items-center'>
                <Bars3Icon className='w-5 hover:text-blue-400 cursor-pointer' />
            </div>
        </div>
    );
}
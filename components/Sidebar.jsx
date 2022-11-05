import { UserCircleIcon, ViewColumnsIcon, RectangleGroupIcon, CalendarDaysIcon, DocumentTextIcon,Cog6ToothIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Sidebar() {
    return(
        <div className='p-5 w-[10%] sm:w-[15%] h-screen flex flex-col border-r gap-y-5 text-xs lg:text-md'>
            <div className='flex justify-center items-center sm:justify-start gap-x-2 hover:text-blue-400 text-gray-700'>
                <UserCircleIcon className='w-5' />
                <Link href="/profile" className='hidden sm:block'>Profile</Link>
            </div>
            <div className='flex justify-center items-center sm:justify-start gap-x-2 hover:text-blue-400 text-gray-700'>
                <RectangleGroupIcon className='w-5' />
                <Link href="/dashboard" className='hidden sm:block'>Dashboard</Link>
            </div>
            <div className='flex justify-center items-center sm:justify-start gap-x-2 hover:text-blue-400 text-gray-700'>
                <ViewColumnsIcon className='w-5' />
                <Link href="/tasklist" className='hidden sm:block'>Task List</Link>
            </div>
            <div className='flex justify-center items-center sm:justify-start gap-x-2 hover:text-blue-400 text-gray-700'>
                <CalendarDaysIcon className='w-5' />
                <Link href="/calendar" className='hidden sm:block'>Calendar</Link>
            </div>
            <div className='flex justify-center items-center sm:justify-start gap-x-2 hover:text-blue-400 text-gray-700'>
                <DocumentTextIcon className='w-5' />
                <Link href="/documents" className='hidden sm:block'>Documents</Link>
            </div>
            <div className='flex justify-center items-center sm:justify-start gap-x-2 hover:text-blue-400 text-gray-700'>
                <Cog6ToothIcon className='w-5' />
                <Link href="/settings" className='hidden sm:block'>Settings</Link>
            </div>
        </div>
    );
}
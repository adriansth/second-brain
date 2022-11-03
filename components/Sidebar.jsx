import { UserCircleIcon, ViewColumnsIcon, RectangleGroupIcon, CalendarDaysIcon, DocumentTextIcon,Cog6ToothIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {
    return(
        <div className='p-5 w-[10%] sm:w-[15%] h-screen flex flex-col border-r gap-y-5 text-xs lg:text-md'>
            <div className='flex justify-center items-center sm:justify-start gap-x-2 hover:text-blue-400 text-gray-700'>
                <UserCircleIcon className='w-5' />
                <a href="#" className='hidden sm:block'>Profile</a>
            </div>
            <div className='flex justify-center items-center sm:justify-start gap-x-2 hover:text-blue-400 text-gray-700'>
                <RectangleGroupIcon className='w-5' />
                <a href="#" className='hidden sm:block'>Dashboard</a>
            </div>
            <div className='flex justify-center items-center sm:justify-start gap-x-2 hover:text-blue-400 text-gray-700'>
                <ViewColumnsIcon className='w-5' />
                <a href="#" className='hidden sm:block'>Task List</a>
            </div>
            <div className='flex justify-center items-center sm:justify-start gap-x-2 hover:text-blue-400 text-gray-700'>
                <CalendarDaysIcon className='w-5' />
                <a href="#" className='hidden sm:block'>Calendar</a>
            </div>
            <div className='flex justify-center items-center sm:justify-start gap-x-2 hover:text-blue-400 text-gray-700'>
                <DocumentTextIcon className='w-5' />
                <a href="#" className='hidden sm:block'>Documents</a>
            </div>
            <div className='flex justify-center items-center sm:justify-start gap-x-2 hover:text-blue-400 text-gray-700'>
                <Cog6ToothIcon className='w-5' />
                <a href="#" className='hidden sm:block'>Settings</a>
            </div>
        </div>
    );
}
import { UserCircleIcon, ViewColumnsIcon, RectangleGroupIcon, CalendarDaysIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {
    return(
        <div className='p-5 w-[15%] h-screen flex flex-col border-r gap-y-5'>
            <div className='flex gap-x-2 hover:text-blue-400'>
                <UserCircleIcon className='w-5' />
                <a href="#">Profile</a>
            </div>
            <div className='flex gap-x-2 hover:text-blue-400'>
                <RectangleGroupIcon className='w-5' />
                <a href="#">Dashboard</a>
            </div>
            <div className='flex gap-x-2 hover:text-blue-400'>
                <ViewColumnsIcon className='w-5' />
                <a href="#">Task List</a>
            </div>
            <div className='flex gap-x-2 hover:text-blue-400'>
                <CalendarDaysIcon className='w-5' />
                <a href="#">Calendar</a>
            </div>
            <div className='flex gap-x-2 hover:text-blue-400'>
                <Cog6ToothIcon className='w-5' />
                <a href="#">Settings</a>
            </div>
        </div>
    );
}
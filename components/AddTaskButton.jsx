import { PlusIcon } from '@heroicons/react/24/outline';

export default function AddTaskButton() {
    return(
        <div className='h-9 bg-white shadow-lg border rounded-lg m-5 flex justify-center items-center cursor-pointer hover:bg-blue-100'>
            <PlusIcon className='w-5' />
        </div>
    );
}
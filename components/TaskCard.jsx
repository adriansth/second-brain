import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

export default function TaskCard(props) {
    return(
        <div className='p-5 border shadow-lg rounded-lg hover:bg-blue-100 cursor-pointer w-full select-none'>
            {/* Title and status */}
            <div className='mb-3 flex items-center justify-between'>
                <h3 className='text-2xl font-bold'>{props.title}</h3>
                <div className='flex flex-col items-center justify-center'>
                    <EllipsisHorizontalIcon className='w-7' />
                </div>
            </div>
            <p className='text-md text-gray-700 pb-3'>{props.description}</p>
            <p className='text-xs text-gray-400 text-gray-400'>{props.createdAt}</p>
        </div>
    );
}
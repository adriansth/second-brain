import { useState } from 'react';

// icons
import { EllipsisHorizontalCircleIcon } from '@heroicons/react/24/outline';

export default function TaskCard(props) {

    const [optsOpen, setOptsOpen] = useState(false);

    const handleClick = () => {
        if (!optsOpen) {
            setOptsOpen(true);
        }
    }

    const handleMouseLeave = () => {
        setOptsOpen(false);
    }

    return(
        <div>
            <div className='p-5 border shadow-lg rounded-lg cursor-pointer w-full select-none border bg-white relative'>
                {/* title and status */}
                <div className='mb-3 flex items-center justify-between'>
                    <h3 className='font-bold text-xs md:text-md'>{props.title}</h3>
                    {/* options button */}
                    <EllipsisHorizontalCircleIcon className='w-5 hover:text-blue-500' onClick={handleClick} />
                </div>
                <p className='text-xs md:text-md text-gray-700 pb-3'>{props.description}</p>
                <p className='hidden md:block text-xs text-gray-400 text-gray-400'>{props.createdAt}</p>
                {/* options dropdown */}
                {
                    optsOpen && (
                        <div className='border bg-white w-[100px] rounded-lg shadow-lg bg-gray-100 absolute top-5 right-0' onMouseLeave={handleMouseLeave}>
                            <p className='text-xs p-2 border-b hover:bg-gray-200 cursor-pointer font-bold text-red-400'>Delete</p>
                            <p className='text-xs p-2 hover:bg-gray-200 cursor-pointer font-bold'>Highlight</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
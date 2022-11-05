import { useState } from 'react';
import axios from 'axios';
// icons
import { EllipsisHorizontalCircleIcon, ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';

export default function TaskCard(props) {

    const [optsOpen, setOptsOpen] = useState(false);

    // open new task form
    const handleClick = () => {
        if (!optsOpen) {
            setOptsOpen(true);
        }
    }

    // close new task form
    const handleMouseLeave = () => {
        setOptsOpen(false);
    }

    // update task: to do -> doing -> done
    const updateTaskRight = () => {
        if (props.status === 'pending') {
            axios.patch(`http://localhost:8080/api/tasks/doing/${props.id}`)
                .catch(err => console.log(err));
        } else if (props.status === 'doing') {
            axios.patch(`http://localhost:8080/api/tasks/done/${props.id}`)
                .catch(err => console.log(err));
        }
    }

    // update task: done -> doing -> to do
    const updateTaskLeft = () => {
        if (props.status === 'done') {
            axios.patch(`http://localhost:8080/api/tasks/doing/${props.id}`)
                .catch(err => console.log(err));
        } else if (props.status === 'doing') {
            axios.patch(`http://localhost:8080/api/tasks/pending/${props.id}`)
                .catch(err => console.log(err));
        }
    }

    // delete task
    const deleteTask = () => {
        axios.patch(`http://localhost:8080/api/tasks/delete/${props.id}`)
            .catch((err) => console.log(err));
    }

    return(
            <div className='p-5 border shadow-lg rounded-lg cursor-pointer w-full select-none border bg-white relative'>
                {/* title and status */}
                <div className='mb-3 flex items-center justify-between'>
                    <h3 className='font-bold text-xs md:text-md'>{props.title}</h3>
                    {/* options button */}
                    <EllipsisHorizontalCircleIcon className='w-5 hover:text-blue-500' onClick={handleClick} />
                </div>
                <p className='text-xs md:text-md text-gray-700 pb-3'>{props.description}</p>
                <div className='flex justify-between'>
                    <p className='hidden md:block text-xs text-gray-400 text-gray-400'>{props.createdAt}</p>
                    <div className='flex text-blue-400'>
                        <div className='w-5'>
                            <ArrowLeftCircleIcon onClick={updateTaskLeft} />
                        </div>
                        <div className='w-5'>
                            <ArrowRightCircleIcon onClick={updateTaskRight} />
                        </div>
                    </div>
                </div>
                {/* options dropdown */}
                {
                    optsOpen && (
                        <div className='border bg-white w-[100px] rounded-lg shadow-lg bg-gray-100 absolute top-5 right-0' onMouseLeave={handleMouseLeave}>
                            <p 
                                className='text-xs p-2 border-b hover:bg-gray-200 cursor-pointer font-bold text-red-400'
                                onClick={deleteTask}
                            >Delete</p>
                            <p className='text-xs p-2 hover:bg-gray-200 cursor-pointer font-bold'>Highlight</p>
                        </div>
                    )
                }
            </div>
    );
}
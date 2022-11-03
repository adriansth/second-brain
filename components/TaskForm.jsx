import { useState } from 'react';
// icons 
import { CheckIcon } from '@heroicons/react/24/outline';
import axios from 'axios';

export default function TaskForm() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title) {
            axios.post('http://localhost:8080/api/tasks', {
                title: title,
                description: description
            });
        }
        setTitle('');
        setDescription('');
    }

    return(
        <div className='flex flex-col items-center'>
            <div className='border shadow-lg rounded-lg cursor-pointer w-full select-none border bg-white relative'>
                {/* title of form */}
                <div>
                    <h3 className='text-sm font-bold text-gray-700 p-3 border-b'>Add new task</h3>
                    <form action="submit" onSubmit={handleSubmit}>
                        {/* title input */}
                        <div className='flex flex-col gap-y-3 p-3'>
                            <label htmlFor="title" className='text-sm font-bold text-gray-700' required>Title</label>
                            <input 
                                type="text" 
                                id='title' 
                                className='border w-full rounded-lg focus:outline-none p-2 text-xs text-gray-700 selection:bg-gray-200' 
                                onChange={(e) => setTitle(e.target.value)}   
                            />
                        </div>
                        {/* description input */}
                        <div className='flex flex-col gap-y-3 p-3'>
                            <label htmlFor="description" className='text-sm font-bold text-gray-700'>Description</label>
                            <textarea 
                                type="text" 
                                id='description'
                                className='border w-full rounded-lg focus:outline-none p-2 text-xs text-gray-700 selection:bg-gray-200'
                                onChange={(e) => setDescription(e.target.value)}   
                            />
                        </div>
                        <div className='w-full flex justify-end'>
                            <button type='submit' className='flex justify-center items-center gap-x-2 border rounded-lg p-3 hover:bg-blue-100 m-3'>
                                <CheckIcon className='w-5' />
                                <span className='text-sm'>Done</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
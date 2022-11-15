import { useEffect, useState } from 'react';
import axios from 'axios';
// icons
import { XMarkIcon } from '@heroicons/react/24/solid';
// redux 
import { useSelector, useDispatch } from 'react-redux';
import dayjs from 'dayjs';

export default function EventForm() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [color, setColor] = useState('');

    const dispatch = useDispatch();

    const closeModal = (e) => {
        e.preventDefault();
        dispatch({type: "CLOSE_EVENT_MODAL_FORM"});
    }

    const addEvent = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/events/', {
            title: title,
            description: description,
            hour: hour,
            minute: minute,
            day: dayjs().format('D'),
            month: dayjs().format('M'),
            year: dayjs().format('YYYY'),
            color: color,
        })
        .then(() => dispatch({type: 'CLOSE_EVENT_MODAL_FORM'}))
        .catch((err) => console.log(err));
    }

    return(
        <div className='w-[50%] h-full bg-white absolute top-[50px] right-0 border shadow-xl p-10'>
            <form action="submit" className='flex flex-col gap-y-10' onSubmit={addEvent}>
                <div className='w-full flex justify-between border-b pb-10'>
                    <h2 className='font-bold text-gray-700'>Add new event</h2>
                    <XMarkIcon 
                        className='w-5 hover:text-red-400 cursor-pointer'
                        onClick={closeModal}
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="title" className='font-bold text-gray-700'>Title</label>
                    <input 
                        type="text" 
                        id='title' 
                        className='border p-3 text-gray-700'
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className='flex flex-col gap-y-5'>
                    <label htmlFor="description" className='font-bold text-gray-700'>Description</label>
                    <textarea 
                        type="text"
                        id='description'
                        className='border p-3 text-gray-700'
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className='flex flex-col gap-y-5'>
                    <label htmlFor="hour" className='font-bold text-gray-700'>Hour</label>
                    <input 
                        type="text" 
                        id='hour' 
                        className='border p-3 text-gray-700'
                        onChange={(e) => setHour(e.target.value)}
                    />
                </div>
                <div className='flex flex-col gap-y-5'>
                    <label htmlFor="minute" className='font-bold text-gray-700'>Minute</label>
                    <input 
                        type="text" 
                        id='minute' 
                        className='border p-3 text-gray-700'
                        onChange={(e) => setMinute(e.target.value)}
                    />
                </div>
                <div className='flex flex-col gap-y-5'>
                    <label htmlFor="color" className='font-bold text-gray-700'>Color</label>
                    <input 
                        type="text"
                        id='color'
                        className='border p-3 text-gray-700'
                        onChange={(e) => setColor(e.target.value)}
                    />
                </div>
                <button 
                    type='submit' 
                    className='font-bold text-gray-700 p-2 border hover:bg-blue-400 hover:text-white'
                >
                    Done
                </button>
            </form>
        </div>
    )
}
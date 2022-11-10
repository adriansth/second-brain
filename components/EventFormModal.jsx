// icons
import { XMarkIcon } from '@heroicons/react/24/solid';
// redux 
import { useSelector, useDispatch } from 'react-redux';

export default function EventForm() {

    const dispatch = useDispatch();
    const newEventModalFormIsOpen = useSelector(state => state.newEventModalFormIsOpen);

    const closeModal = (e) => {
        e.preventDefault();
        dispatch({type: "CLOSE_EVENT_MODAL_FORM"});
    }

    return(
        <div className='w-[50%] h-full bg-white absolute top-[50px] right-0 border shadow-xl p-10'>
            <form action="submit" className='flex flex-col gap-y-10'>
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
                        className='border p-3'
                    />
                </div>
                <div className='flex flex-col gap-y-5'>
                    <label htmlFor="description" className='font-bold text-gray-700'>Description</label>
                    <textarea 
                        type="text"
                        id='description'
                        className='border p-3'
                    />
                </div>
                <div className='flex flex-col gap-y-5'>
                    <label htmlFor="hour" className='font-bold text-gray-700'>Hour</label>
                        <input 
                            type="text" 
                            id='hour' 
                            className='border p-3'
                    />
                </div>
                <div className='flex flex-col gap-y-5'>
                    <label htmlFor="minute" className='font-bold text-gray-700'>Minute</label>
                        <input 
                            type="text" 
                            id='minute' 
                            className='border p-3'
                    />
                </div>
            </form>
        </div>
    )
}
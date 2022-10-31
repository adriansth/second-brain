import { useState } from 'react'; 
import axios from 'axios';

export default function NewTaskModal({ open }) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // post method
        axios.post('http://localhost:4000/api/tasks', {
            title: title,
            description: description,
        }).then(() => {
            // return everything back to normal
            setTitle('');
            setDescription('');
        }).catch((err) => console.log(err));
    }

    return(
        <div className=''>
            <div className='flex justify-between border-b px-10 py-10'>
                <h1 className='text-xl font-bold text-gray-700 select-none'>Add new task</h1>
            </div>
            <form onSubmit={handleSubmit} action="submit" className='flex flex-col gap-y-10 mt-10 px-10'>
                <div className='flex flex-col gap-y-5'>
                    <label htmlFor="title" className='w-[20%] select-none font-bold text-gray-700' required>Title</label>
                    <input 
                        type="text" id='title' 
                        className='border focus:outline-none rounded-lg w-[50%] text-gray-700 p-3 selection:bg-gray-300' 
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='flex flex-col gap-y-5'>
                    <label htmlFor="description" className='select-none text-gray-700 font-bold' required>Description</label>
                    <textarea 
                        type="text" id='description' 
                        className='border focus:outline-none rounded-lg w-[50%] text-gray-700 p-3 h-[400px] selection:bg-gray-300' 
                        maxLength='1000' 
                        onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button type='submit' className='p-5 border rounded-lg w-[20%] shadow-lg bg-blue-100 hover:bg-blue-300 font-bold'>Submit</button>
            </form>
        </div>
    );
}
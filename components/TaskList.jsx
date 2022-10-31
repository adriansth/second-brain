import axios from 'axios';
import { useState, useEffect } from 'react';

import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

import TaskCard from './TaskCard';
import AddTaskButton from './AddTaskButton';

export default function TaskList() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/tasks')
            .then((res) => setTasks(res.data.data));
    }, [tasks]);

    return(
        <div className='w-[80%] lg:w-[85%] flex pt-5 select-none bg-gray-100'>
            {/* to do */}
            <div className='w-1/3 border-r'>
                <div className='ml-5 text-gray-700 font-bold flex justify-between mr-5'>
                    <h2>To Do</h2>
                    <EllipsisHorizontalIcon className='w-7 hover:text-sky-500 cursor-pointer' />
                </div>
                {
                    tasks.filter(task => task.status === 'pending').map(filteredTask => (
                        <div key={filteredTask.id} className='m-5'>
                            <TaskCard key={filteredTask.id} title={filteredTask.title} description={filteredTask.description} createdAt={filteredTask.createdAt} status={filteredTask.status} />
                        </div>
                    ))
                }
                <AddTaskButton />
            </div>
            {/* in progress */}
            <div className='w-1/3 border-r'>
                <div className='ml-5 text-gray-700 font-bold flex justify-between mr-5'>
                    <h2>In Progress</h2>
                    <EllipsisHorizontalIcon className='w-7 hover:text-sky-500 cursor-pointer' />
                </div>
                {
                    tasks.filter(task => task.status === 'doing').map(filteredTask => (
                        <div key={filteredTask.id} className='m-5'>
                            <TaskCard key={filteredTask.id} title={filteredTask.title} description={filteredTask.description} createdAt={filteredTask.createdAt} status={filteredTask.status} />
                        </div>
                    ))
                }
            </div>
            {/* done */}
            <div className='w-1/3'>
                <div className='ml-5 text-gray-700 font-bold flex justify-between mr-5'>
                    <h2>Done</h2>
                    <EllipsisHorizontalIcon className='w-7 hover:text-sky-500 cursor-pointer' />
                </div>
                {
                    tasks.filter(task => task.status === 'done').map(filteredTask => (
                        <div key={filteredTask.id} className='m-5'>
                            <TaskCard key={filteredTask.id} title={filteredTask.title} description={filteredTask.description} createdAt={filteredTask.createdAt} status={filteredTask.status} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
import axios from 'axios';
import { useState, useEffect } from 'react';

// icons
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { PlusIcon } from '@heroicons/react/24/outline';

// components
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';

export default function TaskList() {

    const [tasks, setTasks] = useState([]);
    const [newTaskOpen, setNewTaskOpen] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8080/api/tasks')
            .then((res) => setTasks(res.data.data));
    }, [tasks]);

    const addTask = (e) => {
        e.preventDefault();
        if (!newTaskOpen) {
            setNewTaskOpen(true);
        } else {
            setNewTaskOpen(false);
        }
    }

    return(
        <div className='w-[80%] lg:w-[85%] h-screen'>
            <div className='w-full flex pt-5 select-none bg-gray-100 h-screen'>
                {/* to do */}
                <div className='w-1/3 border-r' onMouseLeave={() => setNewTaskOpen(false)}>
                    <div className='ml-5 text-gray-700 font-bold flex justify-between mr-5'>
                        <h2>To Do</h2>
                        <div className='flex'>
                            <PlusIcon 
                                className='w-7 hover:text-sky-500 cursor-pointer'
                                onClick={addTask}
                            />
                            <EllipsisHorizontalIcon className='w-7 hover:text-sky-500 cursor-pointer' />
                        </div>
                    </div>
                    {/* new task form */}
                    {
                        newTaskOpen && 
                        <div className='m-5'>
                            <TaskForm />
                        </div>
                    }
                    {
                        tasks.filter(task => task.status === 'pending').map(filteredTask => (
                            <div key={filteredTask.id} className='m-5'>
                                {
                                    filteredTask.title && 
                                    <TaskCard key={filteredTask.id} id={filteredTask.id} title={filteredTask.title} description={filteredTask.description} createdAt={filteredTask.createdAt} status={filteredTask.status} />
                                }
                            </div>
                        ))
                    }
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
                                {
                                    filteredTask.title && 
                                    <TaskCard key={filteredTask.id} id={filteredTask.id} title={filteredTask.title} description={filteredTask.description} createdAt={filteredTask.createdAt} status={filteredTask.status} />
                                }
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
                                {
                                    filteredTask.title && 
                                    <TaskCard key={filteredTask.id} id={filteredTask.id} title={filteredTask.title} description={filteredTask.description} createdAt={filteredTask.createdAt} status={filteredTask.status} />
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
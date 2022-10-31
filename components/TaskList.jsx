import axios from 'axios';
import { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

// icons
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { PlusIcon } from '@heroicons/react/24/outline';

// components
import TaskCard from './TaskCard';
import NewTaskModal from './NewTaskModal';

export default function TaskList() {

    const [tasks, setTasks] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:4000/api/tasks')
            .then((res) => setTasks(res.data.data));
    }, [tasks]);

    const handleRequestClose = (e) => {
        e.preventDefault();
        setModalIsOpen(false);
    } 

    return(
        <div className='w-[80%] lg:w-[85%] h-screen'>
            <div className='w-full flex pt-5 select-none bg-gray-100 h-screen'>
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
                    {/* add task button */}
                    <div 
                        className='h-9 bg-white shadow-lg border rounded-lg m-5 flex justify-center items-center cursor-pointer hover:bg-blue-100'
                        onClick={() => setModalIsOpen(true)}
                    >
                        <PlusIcon className='w-5' />
                    </div>
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
                {/* new task modal */}
                <ReactModal className=''
                    isOpen={modalIsOpen} 
                    onRequestClose={handleRequestClose}
                    style={{ 
                        overlay: {
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        },
                        content: {
                            padding: '0',
                        }
                     }}
                >
                    <NewTaskModal />
                </ReactModal>
        </div>
    );
}
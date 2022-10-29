import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Todo() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/tasks')
            .then((res) => setTasks(res.data.data));
    }, []);

    return(
        <div>
            <h2 className='text-5xl font-bold'>Tasks</h2>
            {
                tasks.map((task) => (
                    <div key={task.id}>
                        <h3 className='font-bold text-xl'>{task.title}</h3>
                        <p className='text-lg'>{task.description}</p>
                        <p className='text-xs'>{task.createdAt}</p>
                    </div>
                ))
            }
        </div>
    );
}
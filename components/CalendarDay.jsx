import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import axios from 'axios';
// icons 
import { PlusIcon } from '@heroicons/react/24/outline';
// redux 
import { useSelector, useDispatch } from 'react-redux';

export default function CalendarDay({ day, rowIdx }) {

    const [filteredEvents, setFilteredEvents] = useState([]);

    const dispatch = useDispatch();
    const newEventModalIsOpen = useSelector(state => state.newEventModalIsOpen);

    const openNewEventModalForm = () => {
        if (!newEventModalIsOpen) {
            dispatch({type: "OPEN_EVENT_MODAL_FORM"});
        }
    }

    const getCurrentDayClass = () => {
       if (day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")) {
           return 'bg-red-400 text-white rounded-full w-7'
       } else {
           return "";
       }
    }

    /*
    const getEventsByDate = (date) => {
        const d = date.format('D');
        const m = date.format('M');
        const y = date.format("YYYY");
        axios.get(`http://localhost:8080/api/events/${d}/${m}/${y}`)
            .then((res) => {
                return(res.data.data)
            }
        );
    }
    */

    useEffect(() => {
        const d = day.format('D');
        const m = day.format('M');
        const y = day.format("YYYY");
        axios.get(`http://localhost:8080/api/events/${d}/${m}/${y}`)
            .then((res) => {
                setFilteredEvents(res.data.data);
            })
            .catch((err) => console.log(err));
    }, [filteredEvents]);

    return(
        <div className='border flex flex-col select-none min-h-full'>
            <div className='flex flex-col items-center'>
                {
                    rowIdx === 0 && 
                    <p className='font-bold text-white border-b w-full text-center bg-blue-400'>{day.format('ddd').toUpperCase()}</p>                
                }
                <div className='w-full pr-3 flex justify-end border-b bg-gray-100'>
                    <p className={`text-xs p-1 my-1 text-center font-bold ${getCurrentDayClass()}`}>
                        {day.format('D')}
                    </p>
                </div>
                <div className='flex justify-end w-full h-full'>
                    <div className='w-7 p-1 mx-1'>
                        <PlusIcon 
                            className='w-5 p-1 hover:bg-blue-400 hover:text-white cursor-pointer rounded-full'
                            onClick={openNewEventModalForm}
                        />
                    </div>
                </div>
                <div className='w-full px-3'>
                    {
                        filteredEvents.map((event) => (
                            <p 
                                key={event.id}
                                className='text-[10px] font-bold text-start bg-blue-400 my-1 text-white p-[3px] rounded-lg hover:opacity-[70%] cursor-pointer'
                            >
                                {event.title}
                            </p>
                        ))
                    } 
                </div>
           </div>
        </div>
    );
}
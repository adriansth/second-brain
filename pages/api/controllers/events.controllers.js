const { Event } = require('../models/event.model');

// get all events 
const getAllEvents = async (req, res) => {
    try {
        const events = await Event.findAll();
        res.status(200).json({
            status: 'success',
            message: 'Obtained all events.',
            data: events,
        });
    } catch (err) {
        console.log(err);
    }
} 

// get an event by id
const getEventById = async (req, res) => {
    try {
        const id = req.params;
        const event = await Event.findOne({ where: { id } });
        if (!event) {
            return res.status(404).json({
                status: 'error',
                message: 'No event found with given id.',
            });
        } else {
            return res.status(200).json({
                status: 'success',
                message: 'Obtained event.',
                data: event,
            })
        }
    } catch (err) {
        console.log(err);
    }
}

// create a new event 
const createEvent = async (req, res) => {
    try {
        const { title, description, month, day, year, hour, minute } = req.body;
        const newEvent = await Event.create({
            title, 
            description, 
            month, 
            day, 
            year, 
            hour, 
            minute
        });
        if (!title || !month || !day || !year ) {
            return res.status(400).json({
                status: 'error',
                message: 'Title, month, day and year must not be empty.',
            });
        }
        return res.status(201).json({
            status: 'success',
            message: 'Successfully created event.',
            data: newEvent,
        });
    } catch (err) {
        console.log(err);
    }
}

// delete an event (update to deleted)
const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await Event.findOne({ where: { id, status: 'active' } });
        if (!event) {
            return res.status(404).json({
                status: 'error',
                message: 'No event found with the given id.',
            });
        } else {
            await event.update({ status: 'deleted' });
            res.status(200).json({
                status: 'success',
                message: 'Successfully deleted event.',
                data: event,
            });
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports ={
    getAllEvents, 
    getEventById,
    createEvent,
    deleteEvent,
};
const express = require('express');

const {
    getAllEvents,
    getEventById,
    getEventByDate,
    createEvent,
    deleteEvent
} = require('../controllers/events.controllers');

const router = express.Router();

router.get('/', getAllEvents);
router.get('/:id', getEventById);
router.get('/:day/:month/:year', getEventByDate);
router.post('/', createEvent);
router.patch('/delete/:id', deleteEvent);

module.exports = { eventRouter: router };
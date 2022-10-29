const express = require('express');

const { 
    getAllTasks,
    getTaskById,
    createTask,
    taskPending,
    taskDoing,
    taskCompleted,
    deleteTask,
} = require('../controllers/tasks.controllers');

const router = express.Router();

router
    .get('/', getAllTasks)
    .get('/:id', getTaskById)
    .post('/', createTask)
    .patch('/:id', taskPending)
    .patch('/:id', taskDoing)
    .patch('/:id', taskCompleted)
    .patch('/:id', deleteTask);

module.exports = { taskRouter: router };
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

router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.post('/', createTask);
router.patch('/pending/:id', taskPending);
router.patch('/doing/:id', taskDoing);
router.patch('/done/:id', taskCompleted);
router.patch('/delete/:id', deleteTask);

module.exports = { taskRouter: router };
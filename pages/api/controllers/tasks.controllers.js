const { Task } = require('../models/task.model');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.status(200).json({
            status: 'success',
            message: 'Obtained all tasks.',
            data: tasks,
        });
    } catch (err) {
        console.log(err);
    }
}

const getTaskById = async (req, res) => {
    try {
        const id = req.params;
        const task = await Task.findOne({where: { id } });
        if (!task) {
            return res.status(404).json({
                status: 'error',
                message: 'No task found with given id.',
            });
        } else {
            return res.status(200).json({
                status: 'success',
                message: 'Obtained task.',
                data: task,
            });
        }
    } catch (err) {
        console.log(err);
    }
}

const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        const date = Date.now();
        const newTask = await Task.create({ date, title, description });
        return res.status(201).json({
            status: 'success',
            message: 'Successfully created task.',
            data: newTask,
        });
    } catch (err) {
        console.log(err);
    }
}

const taskPending = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findOne({ where: { id, status: 'doing' || 'completed' } });
        if (!task) {
            res.status(404).json({
                status: 'error',
                message: 'No task found with the given id.',
            });
        } else {
            await task.update({ status: 'pending' });
            res.status(200).json({
                status: 'success',
                message: 'Successfully updated task.',
                data: task,
            });
        }
    } catch (err) {
        console.log(err);
    }
}

const taskDoing = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findOne({ where: { id, status: 'pending' || 'completed' } });
        if (!task) {
            res.status(404).json({
                status: 'error',
                message: 'No task found with the given id.',
            });
        } else {
            await task.update({ status: 'doing' });
            res.status(200).json({
                status: 'success',
                message: 'Successfully updated task.',
                data: task,
            });
        }
    } catch (err) {
        console.log(err);
    }
}

const taskCompleted = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findOne({ where: { id, status: 'pending' || 'doing' } });
        if (!task) {
            res.status(404).json({
                status: 'error',
                message: 'No task found with the given id.',
            });
        } else {
            await task.update({ status: 'done' });
            res.status(200).json({
                status: 'success',
                message: 'Successfully updated task.',
                data: task,
            });
        }
    } catch (err) {
        console.log(err);
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findOne({ where: { id, status: 'pending' || 'doing' || 'done' } });
        if (!task) {
            res.status(404).json({
                status: 'error',
                message: 'No task found with the given id.',
            });
        } else {
            await task.update({ status: 'deleted' });
            res.status(200).json({
                status: 'success',
                message: 'Successfully deleted task.',
                data: task,
            });
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = { 
    getAllTasks,
    getTaskById,
    createTask,
    taskPending,
    taskDoing,
    taskCompleted,
    deleteTask,
}

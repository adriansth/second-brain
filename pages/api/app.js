const { taskRouter } = require('./routers/tasks.routers');
const { userRouter } = require('./routers/users.routers');
const express = require('express');
const cors = require('cors');
const app = express(); // Initialize app with Express.

// Enable CORS
app.use(cors());

// Enable incoming JSON data
app.use(express.json());

// Endpoints 
app.use('/api/tasks', taskRouter);
app.use('/api/users', userRouter);

module.exports = { app };
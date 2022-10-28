const express = require('express');
const cors = require('cors');
const app = express(); // Initialize app with Express.

// Enable CORS
app.use(cors());

// Enable incoming JSON data
app.use(express.json());

// Get all to-do's
app.get('/', (req, res) => {
    res.send('Todos GET Request');
});

// Get one to-do
app.get('/:id', (req, res) => {
    res.send('Todo GET Request');
});

// Post a to-do
app.post('/', (req, res) => {
    res.send('Todo POST Request');
});

// Delete a to-do
app.put('/', (req, res) => {
    res.send('Todo DELETE Request');
});

// Update a to-do
app.put('/', (req, res) => {
    res.send('Todo UPDATE Request');
});

module.exports = { app };
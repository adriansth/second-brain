const { DataTypes, INTEGER } = require('sequelize');
const { db } = require('../utils/database');
const { User } = require('./user.model'); 

const Task = db.define('task', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pending',
    },
});

module.exports = { Task };
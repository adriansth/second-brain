const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

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
        defaultValue: 'pending', // pending, doing, done, deleted
    },
});

module.exports = { Task };
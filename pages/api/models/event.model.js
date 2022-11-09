const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Event = db.define('event', {
    id: { // integer
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    title: { // string
        type: DataTypes.STRING,
        allowNull: false,
    },
    month: { // integer from 0 to 11 
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    day: { // integer from 0 to 31
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    year: { // integer from 2022 to 3000
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    hour: { // integer from 0 to 24
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    minute: { // integer from 0 to 59
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    status: { // string
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active', // active, deleted
    },
});

module.exports = { Event };
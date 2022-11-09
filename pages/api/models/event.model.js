const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Event = db.define('event', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hour: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active', // active, deleted
    },
});

module.exports = { Event };
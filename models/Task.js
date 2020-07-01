const Sequelize = require("sequelize");
const sequelize = require("../models/database");

const Task = sequelize.define('todo',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    task: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Task;
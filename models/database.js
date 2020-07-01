const Sequelize = require("sequelize");

const sequelize = new Sequelize('tasks','root',null,{
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = sequelize;
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('database', 'root', 'abc@123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
const Sequelize = require('sequelize');

const sequelize = require('../database');

const Address = sequelize.define('address', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  adress: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pin: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  helpline:{
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Address;

const Sequelize = require('sequelize');

const sequelize = require('../database');

const Users = sequelize.define('comp_login', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  Username: Sequelize.STRING,
  Password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Permissions: {
    type: Sequelize.STRING,
  },
  Block: {
    type: Sequelize.INTEGER,
  },
  Mobileno:{
    type: Sequelize.STRING,
  }
});

module.exports = Users;

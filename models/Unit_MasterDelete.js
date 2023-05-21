const Sequelize = require('sequelize');

const sequelize = require('../database');

const Unit_MasterDelete = sequelize.define('unit_delete', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  cid: {
    type: Sequelize.STRING,
    allowNull: false,
    
  },
  user: {
    type:Sequelize.STRING,
  },
  ip: {
    type: Sequelize.STRING,
  },
  block: {
    type: Sequelize.BOOLEAN,
  },
});

module.exports = Unit_MasterDelete;

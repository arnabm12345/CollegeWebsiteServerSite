const Sequelize = require('sequelize');

const sequelize = require('../database');

const Group_Master = sequelize.define('group', {
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

module.exports = Group_Master;

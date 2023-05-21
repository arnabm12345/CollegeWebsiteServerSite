const Sequelize = require('sequelize');

const sequelize = require('../database');

const Item_Master = sequelize.define('item', {
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
  grid:{
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  uid:{
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  ip: {
    type: Sequelize.STRING,
  },
  block: {
    type: Sequelize.BOOLEAN,
  },
});

module.exports = Item_Master;

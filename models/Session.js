const Sequelize = require('sequelize');

const sequelize = require('../database');

const Session = sequelize.define('session_tbl', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  Username: Sequelize.STRING,
  session: {
    type: Sequelize.STRING,
    allowNull: false
  },
  st_dt: {
    type: Sequelize.STRING,
  },
  end_dt: {
    type: Sequelize.STRING,
  },
  Block:{
    type: Sequelize.STRING,
  },
  IP:{
    type: Sequelize.STRING,
  }
});

module.exports = Session;

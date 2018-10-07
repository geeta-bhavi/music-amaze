const Sequelize = require('sequelize');
const User = require('./User');
const Track = require('./Track');

/**
 * Load sequelize handle
 */
const sequelizeHandle = require('../config/sequelize');

// User_Statistics model schema
const schemaDefinition = {
  STAT_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
    autoIncrement: true,
    get() {
      return this.getDataValue('STAT_ID');
    },
    set(val) {
      this.setDataValue('STAT_ID', val);
    }
  },
  USER_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    get() {
      return this.getDataValue('USER_ID');
    },
    set(val) {
      this.setDataValue('USER_ID', val);
    }
  },
  TRACK_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    get() {
      return this.getDataValue('TRACK_ID');
    },
    set(val) {
      this.setDataValue('TRACK_ID', val);
    }
  },
  LIKED: {
    type: Sequelize.STRING,
    get() {
      return this.getDataValue('LIKED');
    },
    set(val) {
      this.setDataValue('LIKED', val);
    }
  },
  DISLIKED: {
    type: Sequelize.STRING,
    get() {
      return this.getDataValue('DISLIKED');
    },
    set(val) {
      this.setDataValue('DISLIKED', val);
    }
  },
  PLAYED: {
    type: Sequelize.INTEGER,
    get() {
      return this.getDataValue('PLAYED');
    },
    set(val) {
      this.setDataValue('PLAYED', val);
    }
  }
}

// Define the User_Statistics model.
const User_Statistics = sequelizeHandle.define('User_Statistics', schemaDefinition);
module.exports = User_Statistics;

const Sequelize = require('sequelize');

/**
 * Load sequelize handle
 */
const sequelizeHandle = require('../config/sequelize');

// User_Statistics model schema
const schemaDefinition = {
  ALBUM_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    get() {
      return this.getDataValue('ALBUM_ID');
    },
    set(val) {
      this.setDataValue('ALBUM_ID', val);
    }
  },
  LATITUDE: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    primaryKey: true,
    get() {
      return this.getDataValue('LATITUDE');
    },
    set(val) {
      this.setDataValue('LATITUDE', val);
    }
  },
  LONGITUDE: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    primaryKey: true,
    get() {
      return this.getDataValue('LONGITUDE');
    },
    set(val) {
      this.setDataValue('LONGITUDE', val);
    }
  },
  ADDRESS: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
    get() {
      return this.getDataValue('ADDRESS');
    },
    set(val) {
      this.setDataValue('ADDRESS', val);
    }
  },
  LOCATION_COUNT: {
    type: Sequelize.INTEGER,
    get() {
      return this.getDataValue('LOCATION_COUNT');
    },
    set(val) {
      this.setDataValue('LOCATION_COUNT', val);
    }
  }
}

// Define the Location_Stat model.
const Location_Stat = sequelizeHandle.define('Location_Stat', schemaDefinition);
module.exports = Location_Stat;

const Sequelize = require('sequelize');
/**
 * Load sequelize handle
 */
const sequelizeHandle = require('../config/sequelize');

// Track model schema
const schemaDefinition = {
  ARTIST_ID: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false,
    primaryKey: true,
    get() {
      return this.getDataValue('ARTIST_ID');
    },
    set(val) {
      this.setDataValue('ARTIST_ID', val);
    }
  },
  FIRST_NAME: {
    type: Sequelize.STRING,
    get() {
      return this.getDataValue('FIRST_NAME');
    },
    set(val) {
      this.setDataValue('FIRST_NAME', val);
    }
  },
  LAST_NAME: {
    type: Sequelize.STRING,
    get() {
      return this.getDataValue('LAST_NAME');
    },
    set(val) {
      this.setDataValue('LAST_NAME', val);
    }
  },
  STAGE_NAME: {
    type: Sequelize.STRING,
    get() {
      return this.getDataValue('STAGE_NAME');
    },
    set(val) {
      this.setDataValue('STAGE_NAME', val);
    }
  }
}

// Define the Artist model.
const Artist = sequelizeHandle.define('Artist', schemaDefinition);

module.exports = Artist;

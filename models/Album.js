const Sequelize = require('sequelize');

const Track = require('./Track');
/**
 * Load sequelize handle
 */
const sequelizeHandle = require('../config/sequelize');

// Track model schema
const schemaDefinition = {
  ALBUM_ID: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false,
    primaryKey: true,
    get() {
      return this.getDataValue('ALBUM_ID');
    },
    set(val) {
      this.setDataValue('ALBUM_ID', val);
    }
  },
  ALBUM_NAME: {
    type: Sequelize.STRING,
    get() {
      return this.getDataValue('ALBUM_NAME');
    },
    set(val) {
      this.setDataValue('ALBUM_NAME', val);
    }
  },
  ALBUM_ART: {
    type: Sequelize.BLOB('long'),
    get() {
      return this.getDataValue('ALBUM_ART').toString('utf8');;
    },
    set(val) {
      this.setDataValue('ALBUM_ART', val);
    }
  },
  NUMBER_OF_TRACKS: {
    type: Sequelize.INTEGER,
    get() {
      return this.getDataValue('NUMBER_OF_TRACKS');
    },
    set(val) {
      this.setDataValue('NUMBER_OF_TRACKS', val);
    }
  },
  YEAR_RELEASED: {
    type: Sequelize.INTEGER,
    get() {
      return this.getDataValue('YEAR_RELEASED');
    },
    set(val) {
      this.setDataValue('YEAR_RELEASED', val);
    }
  }
}

// Define the Album model.
const Album = sequelizeHandle.define('Album', schemaDefinition);

module.exports = Album;

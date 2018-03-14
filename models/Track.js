const Sequelize = require('sequelize');
const Album = require('./Album');
const Artist = require('./Artist');

/**
 * Load sequelize handle
 */
const sequelizeHandle = require('../config/sequelize');

// Track model schema
const schemaDefinition = {
  TRACK_ID: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false,
    primaryKey: true,
    get() {
      return this.getDataValue('TRACK_ID');
    },
    set(val) {
      this.setDataValue('TRACK_ID', val);
    }
  },
  TRACK_NAME: {
    type: Sequelize.STRING,
    get() {
      return this.getDataValue('TRACK_NAME');
    },
    set(val) {
      this.setDataValue('TRACK_NAME', val);
    }
  },
  TRACK_TIME: {
    type: Sequelize.INTEGER,
    get() {
      return this.getDataValue('TRACK_TIME');
    },
    set(val) {
      this.setDataValue('TRACK_TIME', val);
    }
  },
  TRACK_SOURCE: {
    type: Sequelize.STRING,
    get() {
      return this.getDataValue('TRACK_SOURCE');
    },
    set(val) {
      this.setDataValue('TRACK_SOURCE', val);
    }
  },
  SIZE: {
    type: Sequelize.INTEGER,
    get() {
      return this.getDataValue('SIZE');
    },
    set(val) {
      this.setDataValue('SIZE', val);
    }
  },
  GENRE: {
    type: Sequelize.STRING,
    get() {
      return this.getDataValue('GENRE');
    },
    set(val) {
      this.setDataValue('GENRE', val);
    }
  },
  SIZE: {
    type: Sequelize.INTEGER,
    get() {
      return this.getDataValue('SIZE');
    },
    set(val) {
      this.setDataValue('SIZE', val);
    }
  },
  NUMBER_OF_PLAYS: {
    type: Sequelize.BIGINT,
    get() {
      return this.getDataValue('NUMBER_OF_PLAYS');
    },
    set(val) {
      this.setDataValue('NUMBER_OF_PLAYS', val);
    }
  },
  LIKES: {
    type: Sequelize.BIGINT,
    get() {
      return this.getDataValue('LIKES');
    },
    set(val) {
      this.setDataValue('LIKES', val);
    }
  },
  ARTIST_ID: {
    type: Sequelize.INTEGER,
    get() {
      return this.getDataValue('ARTIST_ID');
    },
    set(val) {
      this.setDataValue('ARTIST_ID', val);
    }
  },
  ALBUM_ID: {
    type: Sequelize.INTEGER,
    get() {
      return this.getDataValue('ALBUM_ID');
    },
    set(val) {
      this.setDataValue('ALBUM_ID', val);
    }
  },
  TRACK_NUM: {
    type: Sequelize.INTEGER,
    get() {
      return this.getDataValue('TRACK_NUM');
    },
    set(val) {
      this.setDataValue('TRACK_NUM', val);
    }
  }
}

// Define the Track model.
const Track = sequelizeHandle.define('Track', schemaDefinition);

Track.belongsTo(Album, {foreignKey: 'ALBUM_ID'});
Track.belongsTo(Artist, {foreignKey: 'ARTIST_ID'});

module.exports = Track;

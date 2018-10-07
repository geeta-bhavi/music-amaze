const Sequelize = require('sequelize');
const Playlist = require('./Playlist');
const Track = require('./Track');
/**
 * Load sequelize handle
 */
const sequelizeHandle = require('../config/sequelize');

// Playlists_Tracks model schema
const schemaDefinition = {
  PLAYLISTTRACK_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
    autoIncrement: true,
    get() {
      return this.getDataValue('PLAYLISTTRACK_ID');
    },
    set(val) {
      this.setDataValue('PLAYLISTTRACK_ID', val);
    }
  },
  PLAYLIST_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    get() {
      return this.getDataValue('PLAYLIST_ID');
    },
    set(val) {
      this.setDataValue('PLAYLIST_ID', val);
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
  ORDER: {
    type: Sequelize.INTEGER,
    get() {
      return this.getDataValue('ORDER');
    },
    set(val) {
      this.setDataValue('ORDER', val);
    }
  }
}

// Define the Playlists_Tracks model.
const Playlists_Tracks = sequelizeHandle.define('Playlists_Tracks', schemaDefinition);

//Playlists_Tracks.belongsTo(Playlist, {foreignKey: 'PLAYLIST_ID'});
//Playlists_Tracks.belongsTo(Track, {foreignKey: 'TRACK_ID'});

module.exports = Playlists_Tracks;

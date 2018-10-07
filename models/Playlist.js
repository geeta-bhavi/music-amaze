const Sequelize = require('sequelize');
const User = require('./User');
const Playlists_Tracks = require('./Playlists_Tracks');
/**
 * Load sequelize handle
 */
const sequelizeHandle = require('../config/sequelize');

// Playlist model schema
const schemaDefinition = {
  PLAYLIST_ID: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    get() {
      return this.getDataValue('PLAYLIST_ID');
    },
    set(val) {
      this.setDataValue('PLAYLIST_ID', val);
    }
  },
  PLAYLIST_NAME: {
    type: Sequelize.STRING,
    get() {
      return this.getDataValue('PLAYLIST_NAME');
    },
    set(val) {
      this.setDataValue('PLAYLIST_NAME', val);
    }
  },
  USER_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    get() {
      return this.getDataValue('USER_ID');
    },
    set(val) {
      this.setDataValue('USER_ID', val);
    }
  }
}

// Define the Playlist model.
const Playlist = sequelizeHandle.define('Playlist', schemaDefinition);

Playlist.belongsTo(User, {foreignKey: 'USER_ID'});
Playlist.hasOne(Playlists_Tracks, {foreignKey: 'PLAYLIST_ID'});

module.exports = Playlist;

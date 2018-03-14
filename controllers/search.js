const Sequelize = require('../config/sequelize');

const Track = require('../models/Track');
const Album = require('../models/Album');
const Artist = require('../models/Artist');

const Op = Sequelize.Op;


/**
 * getTracks method
 */

const getTracks = (searchString) => {
  return new Promise((resolve, reject) => {
    Track.findAll({
      attributes: ['TRACK_ID', 'TRACK_NAME', 'TRACK_TIME', 'TRACK_SOURCE', 'GENRE', 'ARTIST_ID', 'ALBUM_ID', 'TRACK_NUM'],
      where: {
        TRACK_NAME: {
          [Op.like]: '%' + searchString + '%'
        }
      },
      include: [{
        model: Artist,
        attributes: ['STAGE_NAME']
      }],
      limit: 10
    }).then(results => {
      var data = results.map((r) => {
        var obj = r.dataValues;
        obj.ARTIST_NAME = r.Artist.dataValues.STAGE_NAME;
        return obj;
      });
      resolve(data);
    }).catch(err => {
      console.log(err);
      reject('There is some problem with server getting search results');
    });
  });
}

/**
 * getAlbums method
 */

const getAlbums = (searchString) => {
  return new Promise((resolve, reject) => {

    Sequelize.query("SELECT DISTINCT(ALBUM.ALBUM_ID), ALBUM.ALBUM_NAME, ARTIST.STAGE_NAME FROM ALBUM as ALBUM, TRACK as TRACK, ARTIST as ARTIST where ALBUM.ALBUM_ID = TRACK.ALBUM_ID and TRACK.ARTIST_ID = ARTIST.ARTIST_ID and ALBUM.ALBUM_NAME like :search_name limit 10", {
        replacements: {
          search_name: '%' + searchString + '%'
        },
        type: Sequelize.QueryTypes.SELECT
      })
      .then(function(data) {
        resolve(data);
      }).catch(error => {
        console.log(err);
        reject('There is some problem with server getting search results');
      });
  });
}

/**
 * getTracks method
 */

const getArtists = (searchString) => {
  return new Promise((resolve, reject) => {
    Artist.findAll({
      attributes: ['ARTIST_ID', 'STAGE_NAME'],
      where: {
        STAGE_NAME: {
          [Op.like]: '%' + searchString + '%'
        }
      },
      limit: 10
    }).then(results => {
      var data = results.map((r) => {
        var obj = r.dataValues;
        return obj;
      });
      resolve(data);
    }).catch(err => {
      console.log(err);
      reject('There is some problem with server getting search results');
    });
  })
}

/**
 * GET /search/:searchString
 * search results
 */

exports.search = (req, res, next) => {
  const searchString = req.params.searchString;

  var tracks = getTracks(searchString);
  var albums = getAlbums(searchString);
  var artists = getArtists(searchString);

  Promise.all([tracks, albums, artists]).then((results) => {
    const songs = results[0];
    const albums = results[1];
    const artists = results[2];
    const showTracks = (songs.length === 0) ? 'hide' : '';
    const showAlbums = (albums.length === 0) ? 'hide' : '';
    const showArtists = (artists.length === 0) ? 'hide' : '';
    res.render('partials/search', {
      layout: false,
      songs: songs,
      showTracks: showTracks,
      albums: albums,
      showAlbums: showAlbums,
      artists: artists,
      showArtists: showArtists
    });
  }, (errorMessage) => {
    //not able to get tracks
    res.status(500).send(errorMessage);
  });
}

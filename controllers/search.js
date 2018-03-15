const Sequelize = require('../config/sequelize');

const Track = require('../models/Track');
const Album = require('../models/Album');
const Artist = require('../models/Artist');

const Op = Sequelize.Op;


/**
 * getTracks method
 */

const getTracks = (searchString, limit) => {
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
      limit: limit
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

const getAlbums = (searchString, limit) => {
  return new Promise((resolve, reject) => {

    Sequelize.query("SELECT DISTINCT(ALBUM.ALBUM_ID), ALBUM.ALBUM_NAME, ARTIST.STAGE_NAME FROM ALBUM as ALBUM, TRACK as TRACK, ARTIST as ARTIST where ALBUM.ALBUM_ID = TRACK.ALBUM_ID and TRACK.ARTIST_ID = ARTIST.ARTIST_ID and ALBUM.ALBUM_NAME like :search_name limit :limit", {
        replacements: {
          search_name: '%' + searchString + '%',
          limit: limit
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

const getArtists = (searchString, limit) => {
  return new Promise((resolve, reject) => {
    Artist.findAll({
      attributes: ['ARTIST_ID', 'STAGE_NAME'],
      where: {
        STAGE_NAME: {
          [Op.like]: '%' + searchString + '%'
        }
      },
      limit: limit
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
 * POST /search/:searchString
 * search results
 */

exports.search = (req, res, next) => {
  const searchString = req.params.searchString;

  var tracks = getTracks(searchString, 8);
  var albums = getAlbums(searchString, 10);
  var artists = getArtists(searchString, 10);

  Promise.all([tracks, albums, artists]).then((results) => {
    const songs = results[0];
    const albums = results[1];
    const artists = results[2];
    const showTracks = (songs.length === 0) ? 'hide' : '';
    const showAlbums = (albums.length === 0) ? 'hide' : '';
    const showArtists = (artists.length === 0) ? 'hide' : '';
    if (songs.length === 0 && albums.length === 0 && artists.length === 0) {
      res.send(`<h3 class="text-center">No matches found for "<span class='searchStr'>${searchString}</span>"</h3>`);
    } else {
      res.render('partials/search', {
        layout: false,
        songs: songs,
        showTracks: showTracks,
        albums: albums,
        showAlbums: showAlbums,
        artists: artists,
        showArtists: showArtists,
        searchStr: searchString,
        seeAllTracks: (songs.length < 8) ? 'hide' : '',
        seeAllAlbums: (albums.length < 10) ? 'hide' : '',
        seeAllArtists: (artists.length < 10) ? 'hide' : ''
      });
    }

  }, (errorMessage) => {
    //not able to get tracks
    res.status(500).send(errorMessage);
  });
}

/**
 * POST /search/:category/:searchString
 * search results by category
 */

exports.searchByCategory = (req, res, next) => {
  const searchString = req.params.searchString;
  const category = req.params.category;

  var tracks = '';
  var albums = '';
  var artists = '';

  if (category === 'tracks') {
    tracks = getTracks(searchString, 5000);
    tracks.then((tracks) => {
      res.render('partials/search', {
        layout: false,
        songs: tracks,
        showTracks: '',
        showAlbums: 'hide',
        showArtists: 'hide',
        searchStr: searchString,
        seeAllTracks: 'hide'
      });
    }, (errorMessage) => {
      //not able to get tracks
      res.status(500).send(errorMessage);
    });
  }
  if (category === 'albums') {
    albums = getAlbums(searchString, 5000);
    albums.then((albums) => {
      res.render('partials/search', {
        layout: false,
        showTracks: 'hide',
        albums: albums,
        showAlbums: '',
        showArtists: 'hide',
        searchStr: searchString,
        seeAllAlbums: 'hide'
      });
    }, (errorMessage) => {
      //not able to get albums
      res.status(500).send(errorMessage);
    });

  }
  if (category === 'artists') {
    artists = getArtists(searchString, 5000);
    artists.then((artists) => {
      res.render('partials/search', {
        layout: false,
        showTracks: 'hide',
        showAlbums: 'hide',
        artists: artists,
        showArtists: '',
        searchStr: searchString,
        seeAllArtists: 'hide'
      });
    }, (errorMessage) => {
      //not able to get artists
      res.status(500).send(errorMessage);
    });
  }
}

/**
 * GET /search/:searchString
 * search results
 */

exports.searchGet = (req, res, next) => {
  const searchString = req.params.searchString;

  var tracks = getTracks(searchString, 8);
  var albums = getAlbums(searchString, 10);
  var artists = getArtists(searchString, 10);

  Promise.all([tracks, albums, artists]).then((results) => {
    const songs = results[0];
    const albums = results[1];
    const artists = results[2];
    const showTracks = (songs.length === 0) ? 'hide' : '';
    const showAlbums = (albums.length === 0) ? 'hide' : '';
    const showArtists = (artists.length === 0) ? 'hide' : '';
    if (songs.length === 0 && albums.length === 0 && artists.length === 0) {
      res.send(`<h3 class="text-center">No matches found for "<span class='searchStr'>${searchString}</span>"</h3>`);
    } else {
      res.render('user/home', {
        songs: songs,
        showTracks: showTracks,
        albums: albums,
        showAlbums: showAlbums,
        artists: artists,
        showArtists: showArtists,
        searchStr: searchString,
        seeAllTracks: (songs.length < 8) ? 'hide' : '',
        seeAllAlbums: (albums.length < 10) ? 'hide' : '',
        seeAllArtists: (artists.length < 10) ? 'hide' : ''
      });
    }

  }, (errorMessage) => {
    //not able to get tracks
    res.status(500).send(errorMessage);
  });
}

/**
 * GET /search/:category/:searchString
 * search results by category
 */

exports.searchByCategoryGet = (req, res, next) => {
  const searchString = req.params.searchString;
  const category = req.params.category;

  var tracks = '';
  var albums = '';
  var artists = '';

  if (category === 'tracks') {
    tracks = getTracks(searchString, 5000);
    tracks.then((tracks) => {
      res.render('user/home', {
        songs: tracks,
        showTracks: '',
        showAlbums: 'hide',
        showArtists: 'hide',
        searchStr: searchString,
        seeAllTracks: 'hide'
      });
    }, (errorMessage) => {
      //not able to get tracks
      res.status(500).send(errorMessage);
    });
  }
  if (category === 'albums') {
    albums = getAlbums(searchString, 5000);
    albums.then((albums) => {
      res.render('partials/search', {
        layout: false,
        showTracks: 'hide',
        albums: albums,
        showAlbums: '',
        showArtists: 'hide',
        searchStr: searchString,
        seeAllAlbums: 'hide'
      });
    }, (errorMessage) => {
      //not able to get albums
      res.status(500).send(errorMessage);
    });

  }
  if (category === 'artists') {
    artists = getArtists(searchString, 5000);
    artists.then((artists) => {
      res.render('partials/search', {
        layout: false,
        showTracks: 'hide',
        showAlbums: 'hide',
        artists: artists,
        showArtists: '',
        searchStr: searchString,
        seeAllArtists: 'hide'
      });
    }, (errorMessage) => {
      //not able to get artists
      res.status(500).send(errorMessage);
    });
  }
}

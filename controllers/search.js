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
 * getArtists method
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
        showTracksTab: showTracks,
        albums: albums,
        showAlbums: showAlbums,
        showAlbumsTab: showAlbums,
        artists: artists,
        showArtists: showArtists,
        showArtistsTab: showArtists,
        searchStr: searchString,
        searchHome: 'active',
        seeAllTracks: (songs.length < 8) ? 'hide' : '',
        seeAllAlbums: (albums.length < 10) ? 'hide' : '',
        seeAllArtists: (artists.length < 10) ? 'hide' : ''
      });
    }

  }, (errorMessage) => {
    //not able to get tracks
    return res.status(500).send({msg: errorMessage});
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
        searchTrack: 'active',
        showAlbums: 'hide',
        showArtists: 'hide',
        searchStr: searchString,
        seeAllTracks: 'hide'
      });
    }, (errorMessage) => {
      //not able to get tracks
      return res.status(500).send({msg: errorMessage});
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
        searchAlbum: 'active',
        showArtists: 'hide',
        searchStr: searchString,
        seeAllAlbums: 'hide'
      });
    }, (errorMessage) => {
      //not able to get albums
      return res.status(500).send({msg: errorMessage});
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
        searchArtists: 'active',
        searchStr: searchString,
        seeAllArtists: 'hide'
      });
    }, (errorMessage) => {
      //not able to get artists
      return res.status(500).send({msg: errorMessage});
    });
  }
}

/**
 * GET /search/:searchString
 * search results
 */

exports.searchGet = (req, res, next) => {
  var searchString = req.params.searchString;

  searchString = decodeURIComponent(searchString);

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
        title: 'Music Home - Music Amaze',
        userName: req.user.username,
        songs: songs,
        showTracks: showTracks,
        albums: albums,
        showAlbums: showAlbums,
        artists: artists,
        showArtists: showArtists,
        searchStr: searchString,
        searchHome: 'active',
        seeAllTracks: (songs.length < 8) ? 'hide' : '',
        seeAllAlbums: (albums.length < 10) ? 'hide' : '',
        seeAllArtists: (artists.length < 10) ? 'hide' : ''
      });
    }

  }, (errorMessage) => {
    //not able to get tracks
    return res.status(500).send({msg: errorMessage});
  });
}

/**
 * GET /search/:category/:searchString
 * search results by category
 */

exports.searchByCategoryGet = (req, res, next) => {
  var searchString = req.params.searchString;
  const category = req.params.category;

  searchString = decodeURIComponent(searchString);

  var tracks = '';
  var albums = '';
  var artists = '';

  if (category === 'tracks') {
    tracks = getTracks(searchString, 5000);
    tracks.then((tracks) => {
      res.render('user/home', {
        title: 'Music Home - Music Amaze',
        userName: req.user.username,
        songs: tracks,
        showTracks: '',
        searchTrack: 'active',
        showAlbums: 'hide',
        showArtists: 'hide',
        searchStr: searchString,
        seeAllTracks: 'hide'
      });
    }, (errorMessage) => {
      //not able to get tracks
      return res.status(500).send({msg: errorMessage});
    });
  }
  if (category === 'albums') {
    albums = getAlbums(searchString, 5000);
    albums.then((albums) => {
      res.render('user/home', {
        title: 'Music Home - Music Amaze',
        userName: req.user.username,
        showTracks: 'hide',
        albums: albums,
        showAlbums: '',
        searchAlbum: 'active',
        showArtists: 'hide',
        searchStr: searchString,
        seeAllAlbums: 'hide'
      });
    }, (errorMessage) => {
      //not able to get albums
      return res.status(500).send({msg: errorMessage});
    });

  }
  if (category === 'artists') {
    artists = getArtists(searchString, 5000);
    artists.then((artists) => {
      res.render('user/home', {
        title: 'Music Home - Music Amaze',
        userName: req.user.username,
        showTracks: 'hide',
        showAlbums: 'hide',
        artists: artists,
        showArtists: '',
        searchArtists: 'active',
        searchStr: searchString,
        seeAllArtists: 'hide'
      });
    }, (errorMessage) => {
      //not able to get artists
      return res.status(500).send({msg: errorMessage});
    });
  }
}

const Sequelize = require('sequelize');
const crypto = require('crypto');
const parseString = require('xml2js').parseString;
const request = require("request");

const Track = require('../models/Track');
const Album = require('../models/Album');
const Artist = require('../models/Artist');

const Op = Sequelize.Op;
var album = {};
var artist = {};


/**
 * getTopTrending method
 */
exports.getTopTrending = () => {

  return new Promise(function(resolve, reject) {
    Track.findAll({
      attributes: ['TRACK_ID', 'TRACK_NAME', 'TRACK_TIME', 'TRACK_SOURCE', 'GENRE', 'ARTIST_ID', 'ALBUM_ID'],
      where: {
        [Op.and]: [{
            NUMBER_OF_PLAYS: {
              [Op.ne]: null
            }
          },
          {
            LIKES: {
              [Op.ne]: null
            }
          }
        ]
      },
      include: [{
        model: Album,
        attributes: ['ALBUM_NAME', 'ALBUM_ART']
      },
      {
        model: Artist,
        attributes: ['STAGE_NAME']
      }],
      order: [
        ['NUMBER_OF_PLAYS', 'DESC'],
        ['LIKES', 'DESC'],
      ],
      limit: 10

    }).then(results => {
      //var data = results.map((r) => (r.dataValues));
      var data = results.map((r) => {
        var obj = r.dataValues;
        obj.Album_NAME = r.Album.dataValues.ALBUM_NAME;
        obj.ARTIST_NAME = r.Artist.dataValues.STAGE_NAME;
        return obj;
      });
      resolve(data);
    })
  });
}

/**
 * getArtistTracks method
 */

const getArtistTracks = (artistId, auth) => {
  return new Promise((resolve, reject) => {
    Track.findAll({
      attributes: ['TRACK_ID', 'TRACK_NAME', 'TRACK_TIME', 'TRACK_SOURCE', 'ARTIST_ID', 'ALBUM_ID'],
      where: {
        ARTIST_ID: artistId
      },
      include: [{
          model: Album,
          attributes: ['ALBUM_NAME']
        },
        {
          model: Artist,
          attributes: ['STAGE_NAME']
        }
      ]
    }).then(results => {
      const trackId = results[0].dataValues.TRACK_ID;
      album.albumId = results[0].dataValues.ALBUM_ID; /* we will make first album as the cover art*/
      artist.artistName = results[0].Artist.dataValues.STAGE_NAME;
      var data = results.map((r) => {
        var obj = r.dataValues;
        obj.trackTime = fancyTimeFormat(r.dataValues.TRACK_TIME);
        obj.artistalbum = r.Album.dataValues.ALBUM_NAME;
        var trackSrc = r.dataValues.TRACK_SOURCE;
        /* replace old auth with new */
        trackSrc = trackSrc.replace('a538266a2ea125ce06cf34fff192f47c', auth);
        r.dataValues.TRACK_SOURCE = trackSrc;
        /* pass highlight parameters to the selected track */
        if (parseInt(r.dataValues.TRACK_ID) === parseInt(trackId)) {
          album.trackSource = r.dataValues.TRACK_SOURCE;
          obj.highlight = 'highlight';
          obj.soundIcon = 'fi-sound';
        }
        return obj;
      });
      resolve(data);

    });

  });
}

/**
 * getTracks method
 */

const getTracks = (albumId, trackId, auth) => {
  return new Promise((resolve, reject) => {
    Track.findAll({
      attributes: ['TRACK_ID', 'TRACK_NAME', 'TRACK_TIME', 'TRACK_SOURCE', 'GENRE', 'ARTIST_ID', 'ALBUM_ID', 'TRACK_NUM'],
      where: {
        ALBUM_ID: albumId
      },
      include: [{
          model: Album,
          attributes: ['ALBUM_NAME', 'YEAR_RELEASED']
        },
        {
          model: Artist,
          attributes: ['STAGE_NAME']
        }
      ],
      order: [
        ['TRACK_NUM', 'ASC']
      ],
    }).then(results => {
      if (trackId === undefined) {
        trackId = results[0].dataValues.TRACK_ID;
      }

      album.albumName = results[0].Album.dataValues.ALBUM_NAME;
      album.albumId = results[0].dataValues.ALBUM_ID;
      album.artistName = results[0].Artist.dataValues.STAGE_NAME;
      album.genre = results[0].GENRE;
      album.yearReleased = results[0].Album.dataValues.YEAR_RELEASED;
      album.separator = '';

      if (album.genre === null) {
        album.genre = '';
      }
      if (album.yearReleased === 0) {
        album.yearReleased = '';
      }
      if ((album.genre && album.yearReleased) !== '') {
        album.separator = ' .';
      }

      var data = results.map((r) => {
        var obj = r.dataValues;
        var trackSrc = r.dataValues.TRACK_SOURCE;
        obj.trackTime = fancyTimeFormat(r.dataValues.TRACK_TIME);
        /* replace old auth with new */
        trackSrc = trackSrc.replace('a538266a2ea125ce06cf34fff192f47c', auth);
        r.dataValues.TRACK_SOURCE = trackSrc;
        /* pass highlight parameters to the selected track */
        if (parseInt(r.dataValues.TRACK_ID) === parseInt(trackId)) {
          album.trackSource = r.dataValues.TRACK_SOURCE;
          obj.highlight = 'highlight';
          obj.soundIcon = 'fi-sound';
        }
        return obj;
      });
      resolve(data);
    });

  });
}

/**
 * fancyTimeFormat method
 */
function fancyTimeFormat(time) {
  // Hours, minutes and seconds
  var mins = ~~((time % 3600) / 60);
  var secs = time % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  var ret = '';
  ret += '' + (mins < 10 ? '0' : '');
  ret += '' + mins + ':' + (secs < 10 ? '0' : '');
  ret += '' + secs;
  return ret;
}

/**
 * Get Auth method
 */
const getAuth = () => {
  return new Promise((resolve, reject) => {

    const time = ~~(new Date() / 1000);
    const hash = crypto.createHash('sha256').update('testpassword').digest('hex');
    const passphrase = crypto.createHash('sha256').update(time + hash).digest('hex');

    const url =
      'http://music.lannysport.net/server/xml.server.php?action=handshake&auth=' + passphrase + '&timestamp=' + time + '&version=350001&user=vaibhav';
    request.get(url, (error, response, body) => {
      if (error) {
        reject('Unable to connect to lannysport server');
      } else {
        parseString(body, function(err, result) {
          if (err) {
            reject('Unable to get authentication');
          }
          resolve({
            auth: result.root.auth[0],
            maxAge: ~~(new Date(result.root.session_expire[0]) / 1000)
          });
        });
      }

    });
  });
}


/**
 * GET /play/album/:albumId/track/:id
 *  GET /play/album/:albumId
 * Get tracks for Album
 */

exports.getAlbumTracks = (req, res, next) => {
  const trackId = req.params.trackId;
  const albumId = req.params.albumId;

  var auth = getAuth();
  auth.then((authObj) => {
    var cookie = req.cookies.auth;
    // console.log(req.cookies.auth);
    if (cookie === undefined) {
      res.cookie('auth', authObj.auth, {
        maxAge: authObj.maxAge,
        httpOnly: true
      });
    } else {
      // console.log('cookie exists', cookie);
    }
    var tracks = getTracks(albumId, trackId, authObj.auth);
    tracks.then((albumTracks) => {
      res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
      res.render('music/play', {
        displaySearch: 'hide',
        title: `${album.albumName} - Music Amaze`,
        userName: req.user.username,
        album: album,
        albumTracks: albumTracks
      });
    });
  }, (errorMessage) => { //not able to get authentication
    console.log(errorMessage);
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.render('music/play', {
      displaySearch: 'hide',
      title: 'Music Amaze',
      userName: req.user.username
    });
  });
}

/**
 * GET /play/artist/:artistId
 * Get tracks of Artists
 */

exports.getArtistTracks = (req, res, next) => {
  const artistId = req.params.artistId;

  var auth = getAuth();
  auth.then((authObj) => {
    var cookie = req.cookies.auth;
    console.log(req.cookies.auth);
    if (cookie === undefined) {
      res.cookie('auth', authObj.auth, {
        maxAge: authObj.maxAge,
        httpOnly: true
      });
    } else {
      console.log('cookie exists', cookie);
    }
    var tracks = getArtistTracks(artistId, authObj.auth);
    tracks.then((artistTracks) => {
      res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
      res.render('music/play', {
        displaySearch: 'hide',
        title: `${artist.artistName} - Music Amaze`,
        userName: req.user.username,
        album: album,
        artist: artist,
        albumTracks: artistTracks
      });
    });

  }, (errorMessage) => { //not able to get authentication
    console.log(errorMessage);
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.render('music/play', {
      displaySearch: 'hide',
      title: 'Music Amaze',
      userName: req.user.username
    });
  });
}

exports.updatePlayCount = (req, res, next) => {
  const trackId = req.params.trackId;

  Track.findById(trackId).then(track => {
    track.NUMBER_OF_PLAYS = track.NUMBER_OF_PLAYS + 1;

    track.save()
      .then(() => {
        res.send({
          msg: 'Play count updated'
        })
      }).catch(err => {
        res.send('Error updating play count');
      });
  });
}

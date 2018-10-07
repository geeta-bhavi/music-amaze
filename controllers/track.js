const Sequelize = require('sequelize');
const crypto = require('crypto');
const parseString = require('xml2js').parseString;
const request = require("request");
const raccoon = require('raccoon');

const Track = require('../models/Track');
const Album = require('../models/Album');
const Artist = require('../models/Artist');
const User_Statistics = require('../models/User_Statistics');
const Location_Stat = require('../models/Location_Stat');

const Op = Sequelize.Op;
var album = {};
var artist = {};


/**
 * getTopTrending method
 */
const getTopTrending = exports.getTopTrending =  (limit, auth, userId) => {

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
          attributes: ['ALBUM_NAME']
        },
        {
          model: Artist,
          attributes: ['STAGE_NAME']
        }
      ],
      order: [
        ['NUMBER_OF_PLAYS', 'DESC'],
        ['LIKES', 'DESC'],
      ],
      limit: limit

    }).then(results => {
      //var data = results.map((r) => (r.dataValues));
      const trackId = results[0].dataValues.TRACK_ID;;
      album.albumId = results[0].dataValues.ALBUM_ID;

      var data = results.map((r) => {
        var obj = r.dataValues;
        obj.Album_NAME = r.Album.dataValues.ALBUM_NAME;
        obj.ARTIST_NAME = r.Artist.dataValues.STAGE_NAME;

        if (auth !== null && userId !== null) {

          obj.trackTime = fancyTimeFormat(r.dataValues.TRACK_TIME);
          obj.artistalbum = r.Album.dataValues.ALBUM_NAME;
          obj.artistName = r.Artist.dataValues.STAGE_NAME;
          var trackSrc = r.dataValues.TRACK_SOURCE;
          trackSrc = trackSrc.replace('a538266a2ea125ce06cf34fff192f47c', auth);
          r.dataValues.TRACK_SOURCE = trackSrc;
          if (parseInt(r.dataValues.TRACK_ID) === parseInt(trackId)) {
            album.trackSource = r.dataValues.TRACK_SOURCE;
            obj.artistName = r.Artist.dataValues.STAGE_NAME;
            obj.highlight = 'highlight';
            obj.soundIcon = 'fi-sound';
          }

          obj.like = '';
          obj.dislike = '';
          obj.chart = 'show';
          const user_stats = getUserLikeDislike(userId, parseInt(r.dataValues.TRACK_ID));

          return user_stats.then((user_stat) => {

            if (user_stat !== null) {
              obj.like = (user_stat.LIKED !== '' && user_stat.LIKED !== null) ? user_stat.LIKED : '';
              obj.dislike = (user_stat.DISLIKED !== '' && user_stat.DISLIKED !== null) ? user_stat.DISLIKED : '';
            }
            return obj;
          });

        } else {
          return obj;
        }

      });
      Promise.all(data).then(results => {
        resolve(results);
      });
    }).catch(err => {
      console.log(err);
      reject('There is some problem with server getting top trending tracks');
    });
  });
}

/**
 * getRecommendations method
 */
exports.getRecommendations = (curUserId, noOfRecs) => {
  return new Promise(function(resolve, reject) {

    raccoon.updateSequence(curUserId, '1', {
      updateWilson: false
    }).then(() => {
      raccoon.recommendFor(curUserId, noOfRecs).then((trackIds) => {

        Track.findAll({
          attributes: ['TRACK_ID', 'TRACK_NAME', 'TRACK_TIME', 'TRACK_SOURCE', 'GENRE', 'ARTIST_ID', 'ALBUM_ID'],
          where: {
            TRACK_ID: {
              [Op.in]: trackIds
            }
          },
          include: [{
              model: Album,
              attributes: ['ALBUM_NAME']
            },
            {
              model: Artist,
              attributes: ['STAGE_NAME']
            }
          ],
          limit: noOfRecs
        }).then(results => {
          //var data = results.map((r) => (r.dataValues));
          var data = results.map((r) => {
            var obj = r.dataValues;
            obj.Album_NAME = r.Album.dataValues.ALBUM_NAME;
            obj.ARTIST_NAME = r.Artist.dataValues.STAGE_NAME;
            return obj;
          });
          resolve(data);
        }).catch(err => {
          console.log(err);
          reject('There is some problem with server getting recommended tracks');
        });

      }).catch(err => {
        console.log(err);
        reject('There is some problem with raccoon');
      });

    });

  });
}

/**
* getMostPlayedTracks method
*/
const getMostPlayedTracks  = (userId, limit, auth) => {
  return new Promise(function(resolve, reject) {

    Track.findAll({
      attributes: ['TRACK_ID', 'TRACK_NAME', 'TRACK_TIME', 'TRACK_SOURCE', 'GENRE', 'ARTIST_ID', 'ALBUM_ID'],
      include: [{
          model: Album,
          attributes: ['ALBUM_NAME']
        },
        {
          model: Artist,
          attributes: ['STAGE_NAME']
        }
      ],
      order: [
        ['NUMBER_OF_PLAYS', 'DESC']
      ],
      limit: limit
    }).then(tracks => {

      const trackId = tracks[0].dataValues.TRACK_ID;

      var track = tracks.map((r) => {
        var obj = r.dataValues;
        obj.Album_NAME = r.Album.dataValues.ALBUM_NAME;
        obj.ARTIST_NAME = r.Artist.dataValues.STAGE_NAME;

        if(auth !== null) {
          obj.trackTime = fancyTimeFormat(r.dataValues.TRACK_TIME);
          obj.artistalbum = r.Album.dataValues.ALBUM_NAME;
          obj.artistName = r.Artist.dataValues.STAGE_NAME;
          var trackSrc = r.dataValues.TRACK_SOURCE;
          trackSrc = trackSrc.replace('a538266a2ea125ce06cf34fff192f47c', auth);
          r.dataValues.TRACK_SOURCE = trackSrc;
          if (parseInt(r.dataValues.TRACK_ID) === parseInt(trackId)) {
            album.albumId = r.dataValues.ALBUM_ID;
            album.trackSource = r.dataValues.TRACK_SOURCE;
            obj.artistName = r.Artist.dataValues.STAGE_NAME;
            obj.highlight = 'highlight';
            obj.soundIcon = 'fi-sound';
          }

          obj.like = '';
          obj.dislike = '';
          obj.chart = 'show';
          const user_stats = getUserLikeDislike(userId, parseInt(r.dataValues.TRACK_ID));

          return user_stats.then((user_stat) => {

            if (user_stat !== null) {
              obj.like = (user_stat.LIKED !== '' && user_stat.LIKED !== null) ? user_stat.LIKED : '';
              obj.dislike = (user_stat.DISLIKED !== '' && user_stat.DISLIKED !== null) ? user_stat.DISLIKED : '';
            }
            return obj;
          });
        }
        else {
          return obj;
        }

      });

      Promise.all(track).then(results => {
        resolve([results, album]);
      });

    }).catch(err => {
      console.log(err);
      reject('There is some problem with getting most played tracks');
    });

  });
}

/**
* getMostLikedTracks method
*/
const getMostLikedTracks  = (userId, limit, auth) => {
  return new Promise(function(resolve, reject) {

    Track.findAll({
      attributes: ['TRACK_ID', 'TRACK_NAME', 'TRACK_TIME', 'TRACK_SOURCE', 'GENRE', 'ARTIST_ID', 'ALBUM_ID'],
      include: [{
          model: Album,
          attributes: ['ALBUM_NAME']
        },
        {
          model: Artist,
          attributes: ['STAGE_NAME']
        }
      ],
      order: [
        ['LIKES', 'DESC']
      ],
      limit: limit
    }).then(tracks => {

      const trackId = tracks[0].dataValues.TRACK_ID;

      var track = tracks.map((r) => {
        var obj = r.dataValues;
        obj.Album_NAME = r.Album.dataValues.ALBUM_NAME;
        obj.ARTIST_NAME = r.Artist.dataValues.STAGE_NAME;

        if(auth !== null) {
          obj.trackTime = fancyTimeFormat(r.dataValues.TRACK_TIME);
          obj.artistalbum = r.Album.dataValues.ALBUM_NAME;
          obj.artistName = r.Artist.dataValues.STAGE_NAME;
          var trackSrc = r.dataValues.TRACK_SOURCE;
          trackSrc = trackSrc.replace('a538266a2ea125ce06cf34fff192f47c', auth);
          r.dataValues.TRACK_SOURCE = trackSrc;
          if (parseInt(r.dataValues.TRACK_ID) === parseInt(trackId)) {
            album.albumId = r.dataValues.ALBUM_ID;
            album.trackSource = r.dataValues.TRACK_SOURCE;
            obj.artistName = r.Artist.dataValues.STAGE_NAME;
            obj.highlight = 'highlight';
            obj.soundIcon = 'fi-sound';
          }

          obj.like = '';
          obj.dislike = '';
          obj.chart = 'show';
          const user_stats = getUserLikeDislike(userId, parseInt(r.dataValues.TRACK_ID));

          return user_stats.then((user_stat) => {

            if (user_stat !== null) {
              obj.like = (user_stat.LIKED !== '' && user_stat.LIKED !== null) ? user_stat.LIKED : '';
              obj.dislike = (user_stat.DISLIKED !== '' && user_stat.DISLIKED !== null) ? user_stat.DISLIKED : '';
            }
            return obj;
          });
        }
        else {
          return obj;
        }

      });

      Promise.all(track).then(results => {
        resolve([results, album]);
      });

    }).catch(err => {
      console.log(err);
      reject('There is some problem with getting most played tracks');
    });

  });
}


/**
 * getMostPlayed method
 */
exports.getMostPlayed  = (userId, limit, auth) => {

  return new Promise(function(resolve, reject) {
    User_Statistics.findAll({
      attributes: ['TRACK_ID'],
      where: {
        USER_ID: userId,
        PLAYED: {
          [Op.ne]: null
        }
      },
      order: [
        ['PLAYED', 'DESC']
      ],
      limit: limit

    }).then(results => {

      if (results.length > 0) {
        var trackIds = results.map((r) => (r.dataValues.TRACK_ID));

        Track.findAll({
          attributes: ['TRACK_ID', 'TRACK_NAME', 'TRACK_TIME', 'TRACK_SOURCE', 'GENRE', 'ARTIST_ID', 'ALBUM_ID'],
          where: {
            TRACK_ID: {
              [Op.in]: trackIds
            }
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
        }).then(tracks => {

          const trackId = trackIds[0];

          var track = tracks.map((r) => {
            var obj = r.dataValues;
            obj.Album_NAME = r.Album.dataValues.ALBUM_NAME;
            obj.ARTIST_NAME = r.Artist.dataValues.STAGE_NAME;

            if(auth !== null) {
              obj.trackTime = fancyTimeFormat(r.dataValues.TRACK_TIME);
              obj.artistalbum = r.Album.dataValues.ALBUM_NAME;
              obj.artistName = r.Artist.dataValues.STAGE_NAME;
              var trackSrc = r.dataValues.TRACK_SOURCE;
              trackSrc = trackSrc.replace('a538266a2ea125ce06cf34fff192f47c', auth);
              r.dataValues.TRACK_SOURCE = trackSrc;
              if (parseInt(r.dataValues.TRACK_ID) === parseInt(trackId)) {
                album.albumId = r.dataValues.ALBUM_ID;
                album.trackSource = r.dataValues.TRACK_SOURCE;
                obj.artistName = r.Artist.dataValues.STAGE_NAME;
                obj.highlight = 'highlight';
                obj.soundIcon = 'fi-sound';
              }

              obj.like = '';
              obj.dislike = '';
              obj.chart = 'show';
              const user_stats = getUserLikeDislike(userId, parseInt(r.dataValues.TRACK_ID));

              return user_stats.then((user_stat) => {

                if (user_stat !== null) {
                  obj.like = (user_stat.LIKED !== '' && user_stat.LIKED !== null) ? user_stat.LIKED : '';
                  obj.dislike = (user_stat.DISLIKED !== '' && user_stat.DISLIKED !== null) ? user_stat.DISLIKED : '';
                }
                return obj;
              });
            }
            else {
              return obj;
            }

          });

          Promise.all(track).then(results => {
            var sortedPlaylists = results.sort(function(a, b) {
              return trackIds.indexOf(a.TRACK_ID) > trackIds.indexOf(b.TRACK_ID) ? 1 : -1;
            });
            resolve([sortedPlaylists, album]);
          });

        }).catch(err => {
          console.log(err);
          reject('There is some problem with getting tracks with user stat');
        });

      } else {
        reject('<h4>There are no played tracks yet!</h4>');
      }


    }).catch(err => {
      console.log(err);
      reject('There is some problem with getting Played from user stat');
    });

  });
}

/**
 * get Album cover
 */

exports.getAlbumId = (trackId) => {

  return new Promise(function(resolve, reject) {

    Track.findOne({
      attributes: ['ALBUM_ID'],
      where: {
        TRACK_ID: trackId
      }
    }).then(results => {
      var data = results.dataValues.ALBUM_ID;
      resolve(data);
    }).catch(err => {
      console.log(err);
      reject('There is some problem getting album id');
    });
  });
}

/**
 * getArtistTracks method
 */

const getArtistTracks = (artistId, auth, userId) => {
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

        const user_stats = getUserLikeDislike(userId, parseInt(r.dataValues.TRACK_ID));

        return user_stats.then((user_stat) => {

          if (user_stat !== null) {
            obj.like = (user_stat.LIKED !== '' && user_stat.LIKED !== null) ? user_stat.LIKED : '';
            obj.dislike = (user_stat.DISLIKED !== '' && user_stat.DISLIKED !== null) ? user_stat.DISLIKED : '';
          }
          return obj;
        });
      });
      Promise.all(data).then(results => {
        resolve(results);
      });

    });

  });
}

/**
 * getTracks method
 */

const getTracks = (albumId, trackId, auth, userId) => {
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
        const user_stats = getUserLikeDislike(userId, parseInt(r.dataValues.TRACK_ID));

        return user_stats.then((user_stat) => {

          if (user_stat !== null) {
            obj.like = (user_stat.LIKED !== '' && user_stat.LIKED !== null) ? user_stat.LIKED : '';
            obj.dislike = (user_stat.DISLIKED !== '' && user_stat.DISLIKED !== null) ? user_stat.DISLIKED : '';
          }
          return obj;
        });
      });
      Promise.all(data).then(results => {
        resolve(results);
      });
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
 * getAuth method
 */
exports.getAuth = () => {
  return getAuth();
}

/**
 * get track info for all the tracks of a playlist
 */
exports.getTrackInfo = (trackIds, auth, userId) => {
  return new Promise((resolve, reject) => {
    Track.findAll({
      attributes: ['TRACK_ID', 'TRACK_NAME', 'TRACK_TIME', 'TRACK_SOURCE', 'ARTIST_ID', 'ALBUM_ID'],
      where: {
        TRACK_ID: {
          [Op.in]: trackIds
        }
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

      const trackId = trackIds[0];


      var data = results.map((r) => {
        var obj = r.dataValues;

        obj.trackTime = fancyTimeFormat(r.dataValues.TRACK_TIME);
        obj.artistalbum = r.Album.dataValues.ALBUM_NAME;
        obj.artistName = r.Artist.dataValues.STAGE_NAME;
        var trackSrc = r.dataValues.TRACK_SOURCE;
        trackSrc = trackSrc.replace('a538266a2ea125ce06cf34fff192f47c', auth);
        r.dataValues.TRACK_SOURCE = trackSrc;
        if (parseInt(r.dataValues.TRACK_ID) === parseInt(trackId)) {
          album.trackSource = r.dataValues.TRACK_SOURCE;
          obj.artistName = r.Artist.dataValues.STAGE_NAME;
          obj.highlight = 'highlight';
          obj.soundIcon = 'fi-sound';
        }

        obj.like = '';
        obj.dislike = '';
        const user_stats = getUserLikeDislike(userId, parseInt(r.dataValues.TRACK_ID));

        return user_stats.then((user_stat) => {

          if (user_stat !== null) {
            obj.like = (user_stat.LIKED !== '' && user_stat.LIKED !== null) ? user_stat.LIKED : '';
            obj.dislike = (user_stat.DISLIKED !== '' && user_stat.DISLIKED !== null) ? user_stat.DISLIKED : '';
          }
          return obj;
        });

      });

      Promise.all(data).then(results => {
        var sortedPlaylists = results.sort(function(a, b) {
          return trackIds.indexOf(a.TRACK_ID) > trackIds.indexOf(b.TRACK_ID);
        });

        if (sortedPlaylists.length > 0) {
          album.albumId = sortedPlaylists[0].ALBUM_ID;
          resolve([sortedPlaylists, album]);
        } else {
          reject('There are no tracks added to this playlist');
        }
      });


    }).catch(err => {
      console.log(err);
      reject(err);
    })
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
    var tracks = getTracks(albumId, trackId, authObj.auth, req.user.userId);
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
  }).catch(err => { //not able to get authentication
    console.log(err);
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
    //console.log(req.cookies.auth);
    if (cookie === undefined) {
      res.cookie('auth', authObj.auth, {
        maxAge: authObj.maxAge,
        httpOnly: true
      });
    } else {
      //console.log('cookie exists', cookie);
    }
    var tracks = getArtistTracks(artistId, authObj.auth, req.user.userId);
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

  }).catch(err => { //not able to get authentication
    console.log(err);
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.render('music/play', {
      displaySearch: 'hide',
      title: 'Music Amaze',
      userName: req.user.username
    });
  });
}

/**
* get lat long
*/
const getLatLong = (ip) => {
  return new Promise((resolve, reject) => {
    const url = `http://api.db-ip.com/v2/free/${ip}`;
    request.get(url, (error, response, body) => {
      if (error) {
        reject('Unable to DB IP server');
      } else {
          const resp = JSON.parse(body)
          const state = resp.stateProv;
          const city = resp.city;

          const googleUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}, ${state}&key=${process.env.GOOGLE_API_KEY}`;
          request.get(googleUrl, (err, gresponse, gbody) => {
            if (err) {
              reject('Unable to Google server');
            } else {

              const gresp = JSON.parse(gbody);
              const address = `${city}, ${state}`;
              if(gresp.status === 'OK') {
                resolve([gresp.results[0].formatted_address,
                        gresp.results[0].geometry.location.lat,
                        gresp.results[0].geometry.location.lng]);
              } else {
                reject('some problem with fetching lat and long');
              }
            }
          });
      }

    });
  });
}
/**
 * POST /update/playCount/:trackId
 * Update play count on play page
 */
exports.updatePlayCount = (req, res, next) => {
  var ip = (req.headers['x-forwarded-for'] || '').split(',').pop() ||
           req.connection.remoteAddress ||
           req.socket.remoteAddress ||
           req.connection.socket.remoteAddress;
  if(ip.indexOf('::') === 0) {
    var os = require( 'os' );
    var networkInterfaces = os.networkInterfaces();
    var data = networkInterfaces.en0.map((r) => {
      if(r.family === 'IPv6') {
        if(r.address) {
          ip = r.address;
          return r.address;
        }
      } else {
        return '';
      }
    })
  }

  console.log(`ip: ${ip}`);

  const trackId = req.params.trackId;
  const curUserId = req.user.userId;

  Track.findById(trackId).then(track => {
    track.NUMBER_OF_PLAYS = track.NUMBER_OF_PLAYS + 1;

    const albumId = track.ALBUM_ID;

    track.save()
      .then(() => {

        User_Statistics.findOne({
          attributes: ['USER_ID', 'TRACK_ID', 'PLAYED'],
          where: {
            TRACK_ID: trackId,
            USER_ID: curUserId
          }
        }).then(user_stat => {

          if (user_stat !== null) {
            user_stat.PLAYED = user_stat.PLAYED + 1;
          } else {
            user_stat = new User_Statistics({
              USER_ID: curUserId,
              TRACK_ID: trackId,
              PLAYED: 1
            });
          }

          const latlng = getLatLong(ip);
          latlng.then((llng) => {

            Location_Stat.findOne({
              attributes: ['ALBUM_ID', 'LATITUDE', 'LONGITUDE', 'ADDRESS', 'LOCATION_COUNT'],
              where: {
                ALBUM_ID: albumId,
                ADDRESS: llng[0]
              }
            }).then(result => {
              if(result === null) {
                const location_stat = new Location_Stat({
                    ALBUM_ID: albumId,
                    LATITUDE: llng[1],
                    LONGITUDE: llng[2],
                    ADDRESS: llng[0],
                    LOCATION_COUNT: 1
                  });

                  location_stat.save()
                  .then(() => {
                  }).catch(err => {
                    console.log(err);
                  });
              } else {
                var count = result.LOCATION_COUNT;
                count = (count === null) ? 1 : count + 1;
                result.LOCATION_COUNT = count;
                result.save()
                .then((resu) => {
                }).catch(err => {
                  console.log(err);
                });

              }
            })

           });

          user_stat.save()
            .then(() => {
              res.send({
                msg: 'Play count updated'
              })
            }).catch(err => {
              console.log(err)
              return res.status(500).send('Error updating play count');
            });


        }).catch(err => {
          console.log(err)
          return res.status(500).send({
            msg: 'User stat not found'
          })
        });
      });


  });
}

/**
 * POST /user/likeDislike
 * user likes or unlikes a song
 */
exports.updateUserLikes = (req, res, next) => {

  const trackId = parseInt(req.body.trackId);
  const curUserId = req.user.userId;
  const like = (req.body.like == 'true');
  const dislike = (req.body.dislike === '') ? '' : (req.body.dislike == 'true');

  if (like) {
    raccoon.liked(curUserId, trackId);
  } else {
    raccoon.unliked(curUserId, trackId);
  }

  if (dislike === false) {
    raccoon.undisliked(curUserId, trackId);
  }

  Track.findById(trackId).then(track => {
      track.LIKES = (like) ? track.LIKES + 1 : (track.LIKES >= 1) ? track.LIKES - 1 : 0;

      track.save()
        .then(() => {

          User_Statistics.findOne({
            attributes: ['USER_ID', 'TRACK_ID', 'LIKED', 'DISLIKED'],
            where: {
              TRACK_ID: trackId,
              USER_ID: curUserId
            }
          }).then(user_stat => {

            if (user_stat !== null) {
              user_stat.LIKED = like.toString();
              if (dislike === false) {
                user_stat.DISLIKED = dislike.toString();
              }

              user_stat.save()
                .then(() => {
                  res.send({
                    msg: 'Like/Dislike count updated'
                  })
                })
                .catch(err => {
                  return res.status(500).send({
                    msg: 'User stat not updated'
                  })
                })
            } else {
              const user_stat = new User_Statistics({
                USER_ID: curUserId,
                TRACK_ID: trackId,
                LIKED: like.toString(),
                DISLIKED: (dislike === false) ? dislike.toString() : ''
              });


              user_stat.save()
                .then(() => {
                  res.send({
                    msg: 'User stat created'
                  })
                });
            }
          }).catch(err => {
            return res.status(500).send({
              msg: 'User stat not found'
            })
          })

        })
        .catch(err => {
          return res.status(500).send({
            msg: 'Error saving track'
          })
        });
    })
    .catch(err => {
      return res.status(500).send({
        msg: 'Error getting track'
      });
    });
}

/**
 * POST /user/dislikeUndislike
 * user dislikes or undislikes a song
 */
exports.updateUserDisLikes = (req, res, next) => {

  const trackId = parseInt(req.body.trackId);
  const curUserId = req.user.userId;
  const dislike = (req.body.dislike == 'true');
  const like = (req.body.like === '') ? '' : (req.body.like == 'true');

  if (dislike) {
    raccoon.disliked(curUserId, trackId);
  } else {
    raccoon.undisliked(curUserId, trackId);
  }

  if (like === false) {
    raccoon.unliked(curUserId, trackId);
  }

  Track.findById(trackId).then(track => {
    track.DISLIKES = (dislike) ? track.DISLIKES + 1 : (track.DISLIKES >= 1) ? track.DISLIKES - 1 : 0;

    track.save()
      .then(() => {
        User_Statistics.findOne({
          attributes: ['USER_ID', 'TRACK_ID', 'LIKED', 'DISLIKED'],
          where: {
            TRACK_ID: trackId,
            USER_ID: curUserId
          }
        }).then(user_stat => {

          if (user_stat !== null) {
            user_stat.DISLIKED = dislike.toString();
            if (like === false) {
              user_stat.LIKED = like.toString();
            }

            user_stat.save()
              .then(() => {
                res.send({
                  msg: 'Like/Dislike count updated'
                })
              })
              .catch(err => {
                return res.status(500).send({
                  msg: 'User stat not updated'
                })
              })
          } else {
            const user_stat = new User_Statistics({
              USER_ID: curUserId,
              TRACK_ID: trackId,
              LIKED: (like === false) ? like.toString() : '',
              DISLIKED: dislike.toString()
            });


            user_stat.save()
              .then(() => {
                res.send({
                  msg: 'User stat created'
                })
              });
          }
        }).catch(err => {
          return res.status(500).send({
            msg: 'User stat not found'
          })
        })

      }).catch(err => {
        return res.status(500).send({
          msg: 'Error saving track'
        })
      });
  }).catch(err => {
    res.send('Error getting track');
  });
}

/**
 * get user like or dislike
 */
exports.getUserLikeDislike = (userId, trackId) => {
  getUserLikeDislike(userId, trackId);
}

const getUserLikeDislike = (userId, trackId) => {
  return new Promise((resolve, reject) => {
    User_Statistics.findOne({
      attributes: ['LIKED', 'DISLIKED'],
      where: {
        TRACK_ID: trackId,
        USER_ID: userId
      }
    }).then(user_stat => {
      resolve(user_stat);
    }).catch(err => {
      console.log(err);
      reject('Unable to get user stat');
    })
  });
}

/**
 * GET /play/top50
 */
exports.getTop50 = (req, res, next) => {
  const curUserId = req.user.userId;

  var auth = getAuth();
  auth.then((authObj) => {
    var cookie = req.cookies.auth;
    // console.log(req.cookies.auth);
    if (cookie === undefined) {
      res.cookie('auth', authObj.auth, {
        maxAge: authObj.maxAge,
        httpOnly: true
      });
    }

    const recs = getTopTrending(50, authObj.auth, curUserId);

    recs.then((topTrending) => {
      const chartName = 'Top 50';
      res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
      res.render('music/play', {
        displaySearch: 'hide',
        title: `Top 50 - Music Amaze`,
        userName: req.user.username,
        album: album,
        artist: {},
        albumTracks: topTrending,
        chartName: chartName
      });

    })

  }).catch(err => {
    console.log(err);
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.render('music/play', {
      displaySearch: 'hide',
      title: 'Music Amaze',
      userName: req.user.username,
      errorMessage: err
    });
  });
}

/**
* GET /play/mostPlayedByAll
*/
exports.getMostPlayedByAll = (req, res, next) => {

  const userId = req.user.userId;

  var auth = getAuth();
  auth.then((authObj) => {
    var cookie = req.cookies.auth;
    // console.log(req.cookies.auth);
    if (cookie === undefined) {
      res.cookie('auth', authObj.auth, {
        maxAge: authObj.maxAge,
        httpOnly: true
      });
    }

    const recs = getMostPlayedTracks(userId, 50, authObj.auth);

    recs.then((results) => {

      const chartName = 'Most Played';
      res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
      res.render('music/play', {
        displaySearch: 'hide',
        title: `Most Played - Music Amaze`,
        userName: req.user.username,
        album: results[1],
        artist: {},
        albumTracks: results[0],
        chartName: chartName
      });

    }).catch((msg) => {
      console.log(msg);
      res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
      res.render('music/play', {
        displaySearch: 'hide',
        title: 'Music Amaze',
        userName: req.user.username,
        errorMessage: msg
      })
    });
  });
}

/**
* GET /play/mostLikedByAll
*/
exports.getMostLikedByAll = (req, res, next) => {

  const userId = req.user.userId;

  var auth = getAuth();
  auth.then((authObj) => {
    var cookie = req.cookies.auth;
    // console.log(req.cookies.auth);
    if (cookie === undefined) {
      res.cookie('auth', authObj.auth, {
        maxAge: authObj.maxAge,
        httpOnly: true
      });
    }

    const recs = getMostLikedTracks(userId, 50, authObj.auth);

    recs.then((results) => {

      const chartName = 'Most Liked';
      res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
      res.render('music/play', {
        displaySearch: 'hide',
        title: `Most Liked - Music Amaze`,
        userName: req.user.username,
        album: results[1],
        artist: {},
        albumTracks: results[0],
        chartName: chartName
      });

    }).catch((msg) => {
      console.log(msg);
      res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
      res.render('music/play', {
        displaySearch: 'hide',
        title: 'Music Amaze',
        userName: req.user.username,
        errorMessage: msg
      })
    });
  });
}



/**
 * TODO: Please remove this later
 */
exports.feedRaccoon = (req, res, next) => {
  const redisClient = require('./config/redisclient');

  /**
   * clear db keys
   */
  redisClient.flushall();

  User_Statistics.findAll({
    attributes: ['USER_ID', 'TRACK_ID', 'LIKED', 'DISLIKED']
  }).then(results => {
    var data = results.map((r) => {

      var obj = r.dataValues;
      var userId = r.dataValues.USER_ID;
      var trackId = r.dataValues.TRACK_ID;

      if (r.dataValues.LIKED == 'true') {
        raccoon.liked(userId, trackId);
      } else if (r.dataValues.LIKED == 'false') {
        raccoon.unliked(userId, trackId);
      }

      if (r.dataValues.DISLIKED == 'true') {
        raccoon.disliked(userId, trackId);
      } else if (r.dataValues.DISLIKED == 'false') {
        raccoon.undisliked(userId, trackId);
      }

      return obj;
    });
    next();
  }).catch(err => {
    console.log(err);
  })

}

/**
 * TODO: Please remove this later
 */

exports.getRaccoon = (req, res, next) => {
  raccoon.allWatchedFor('1001').then((results) => {
    console.log('Liked');
    console.log(results);
    //next();
    raccoon.updateSequence('1001', '1', {
      updateWilson: false
    }).then(() => {
      raccoon.recommendFor('1001', 10).then((trackIds) => {
        console.log('recs');
        console.log(trackIds);
      });
      next();
    });

  });
}

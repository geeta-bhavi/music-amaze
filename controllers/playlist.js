const passport = require('passport');
const Sequelize = require('sequelize');
const _ = require('underscore');

const User = require('../models/User');
const Playlist = require('../models/Playlist');
const Playlists_Tracks = require('../models/Playlists_Tracks');
const track = require('../controllers/track');

/*
 * get Playlist tracks method
 */

const getPlaylistsTracks = (playlistId) => {
  return new Promise((resolve, reject) => {
    Playlists_Tracks
      .findAndCountAll({
        attributes: ['TRACK_ID', 'ORDER'],
        where: {
          PLAYLIST_ID: playlistId
        },
        order: [
          ['PLAYLISTTRACK_ID', 'ASC']
        ]
      }).then(results => {
        var count = results.count;
        var data = results.rows.map((r) => (r.dataValues));
        resolve([data, count]);
      }).catch(err => {
        console.log(err);
        reject('There is some problem with server getting playlist tracks');
      });
  });
}

/**
 * getPlaylistsTrackCount method
 */

const getPlaylistsTrackCount = (playlistId) => {

  return new Promise((resolve, reject) => {

    Playlists_Tracks.count({
      where: {
        PLAYLIST_ID: playlistId
      }
    }).then(count => {
      resolve(count);
    }).catch(err => {
      console.log(err);
      reject('There is some problem with server getting playlists');
    });

  });

}

/**
 * getPlaylistsCount method
 */

exports.getPlaylistsCount = (userId) => {

  return new Promise((resolve, reject) => {

    Playlist.count({
      where: {
        USER_ID: userId
      }
    }).then(count => {
      resolve(count);
    }).catch(err => {
      console.log(err);
      reject('There is some problem with server getting playlists');
    });

  });
}


/**
 * getPlaylists method
 */
exports.getPlaylists = (limit, userId) => {
  return new Promise((resolve, reject) => {
    Playlist.findAndCountAll({
      attributes: ['PLAYLIST_ID', 'PLAYLIST_NAME'],
      where: {
        USER_ID: userId
      },
      order: [
        ['PLAYLIST_ID', 'DESC']
      ],
      limit: limit
    }).then(results => {
      var count = results.count;
      var data = results.rows.map((r,index) => {
        var obj = r.dataValues;
        r.dataValues.PLAYLIST_NAME = decodeURIComponent(r.dataValues.PLAYLIST_NAME);
        var trackCount = getPlaylistsTracks(r.dataValues.PLAYLIST_ID);
        return trackCount.then((data) => {
          obj.trackCount = data[1];
          var trackId = (data[0].length > 0) ? data[0][0].TRACK_ID : null;
          if (data[0][index] !== undefined && data[0][index].ORDER !== undefined) {
            var sorted = data[0].sort(function(a, b) {
              return a.ORDER - b.ORDER;
            });
            trackId = sorted[0].TRACK_ID;
          }
          if (trackId !== null) {
            var albumId = track.getAlbumId(trackId);
            return albumId.then(data => {
              obj.albumId = data;
              return obj;
            });
          } else {
            return obj;
          }
        });
      });
      Promise.all(data).then(results => {
        resolve([results, count]);
      });

    }).catch(err => {
      console.log(err);
      reject('There is some problem with server getting playlists');
    });
  })
}

/** POST /play/playlist/:playlistId
 * check if playlist is empty or has track ids
 */
exports.getPlaylistTrackCount = (req, res, next) => {
  const playlistId = req.params.playlistId;

  const trackCount = getPlaylistsTrackCount(playlistId);
  trackCount
    .then(count => {
      return res.send({
        msg: count
      });
    }).catch(err => {
      console.log(err);
      return res.status(500).send({
        msg: 'There is some problem with server getting playlist track count'
      });
    });
}

/**
 * Get related info of tracks of playlist
 */
const getTrackInfo = (req, res, playlistId) => {
  return new Promise((resolve, reject) => {

    const playlistTracks = getPlaylistsTracks(playlistId);

    playlistTracks.then(results => {
        var data = results[0].map((r) => {
          var obj = r;
          if (r.ORDER === null) {
            obj = r.TRACK_ID;
          }
          return obj;
        });

        if (data[0].ORDER !== undefined) {
          var sorted = data.sort(function(a, b) {
            return a.ORDER - b.ORDER;
          });
          data = sorted.map((r) => {
            return r.TRACK_ID;
          });
        }

        var auth = track.getAuth();
        auth.then((authObj) => {
          var cookie = req.cookies.auth;
          if (cookie === undefined) {
            res.cookie('auth', authObj.auth, {
              maxAge: authObj.maxAge,
              httpOnly: true
            });
          } else {
            //console.log('cookie exists');
          }

          const trackInfo = track.getTrackInfo(data, authObj.auth, req.user.userId);
          trackInfo.then(data => {
            resolve(data);
          }).catch(err => {
            console.log(err);
            reject(err);
          })
        }).catch(err => {
          console.log(err);
          reject(err);
        });

      })
      .catch(err => {
        console.log(err);
        reject('There is some problem with server getting track info of playlists');
      });

  });
}



/** GET /play/playlist/:playlistId
 * get Playlist tracks
 */
exports.getPlaylistTracks = (req, res, next) => {
  const playlistId = req.params.playlistId;

  const playlistTracks = getTrackInfo(req, res, playlistId);

  playlistTracks.then(tracks => {
    Playlist.findById(playlistId)
      .then(playlist => {
        const playlistName = decodeURIComponent(playlist.dataValues.PLAYLIST_NAME);
        res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
        res.render('music/play', {
          displaySearch: 'hide',
          title: `${playlistName} - Music Amaze`,
          userName: req.user.username,
          album: tracks[1],
          artist: {},
          albumTracks: tracks[0],
          playlistName: playlistName,
          playlistId: playlistId
        });

      }).catch(err => {
        console.log(err);
        res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
        res.render('music/play', {
          displaySearch: 'hide',
          title: 'Music Amaze',
          userName: req.user.username
        });
      });
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
 * POST /play/playlist/rearrangeData
 */

exports.rearrangePlaylistracks = (req, res, next) => {
  const playlistId = req.body.playlistId;
  const sortedIds = req.body.sortedIds;


  Playlists_Tracks.findAll({
      where: {
        PLAYLIST_ID: playlistId
      }
    })
    .then(playlist_tracks => {
      _.each(sortedIds, function(index, value, list) {
        Playlists_Tracks.update({
          ORDER: index
        }, {
          where: {
            PLAYLIST_ID: playlistId,
            TRACK_ID: value
          }
        })
      });
      res.send({
        msg: 'rearranged playlist'
      })

    }).catch(err => {
      console.log(err);
    })

}

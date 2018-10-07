const passport = require('passport');
const Sequelize = require('sequelize');

const User = require('../models/User');
const Playlist = require('../models/Playlist');
const Playlists_Tracks = require('../models/Playlists_Tracks');
const track = require('../controllers/track');
const playlist = require('../controllers/playlist');

const Op = Sequelize.Op;


/**
 * GET /login
 * Login page.
 */
exports.getLogin = (req, res) => {
  if (req.user) {
    return res.redirect('/user/home');
  }
  res.render('user/login', {
    title: 'Login - Music Amaze',
    header: 'Login'
  });
};

/**
 * POST /login
 * Sign in using email and password.
 */
exports.postLogin = (req, res, next) => {
  req.assert('password', 'Password cannot be blank').notEmpty();

  const errors = req.validationErrors();
  if (errors) {
    return res.status(400).send(errors);
  }
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return res.status(401).send({
        msg: err
      });
    }
    if (!user) {
      return res.status(401).send(info);
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }

      return res.send(user);
    });
  })(req, res, next);
};

/**
 * GET /logout
 * Log out.
 */
exports.logout = (req, res) => {
  req.logout();
  res.clearCookie('auth', {
    httpOnly: true
  });
  res.redirect('/');
};

/**
 * GET /signup
 * Signup page.
 */
exports.getSignup = (req, res) => {
  if (req.user) {
    return res.redirect('/user/home');
  }
  res.render('user/signup', {
    title: 'Create Account - Music Amaze',
    header: 'Create Account'
  });
};

/**
 * GET /user/home
 * User Home page.
 */
exports.getUserHome = (req, res) => {
  const curUserId = req.user.userId;

  //const topTrendingTracks = track.getTopTrending(10);
  const playlists = playlist.getPlaylists(9, curUserId);
  const recommendations = track.getRecommendations(curUserId, 10);

  Promise.all([ /*topTrendingTracks,*/ playlists, recommendations]).then((results) => {
    //const topTrending = results[0];
    const playlists = results[0];
    const recommendations = results[1];
    var showRecs = 'hide';
    if (recommendations.length > 0) {
      showRecs = '';
    }

    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.render('user/home', {
      title: 'Music Home - Music Amaze',
      userName: req.user.username,
      //topTrendingTracks: topTrending,
      playlists: playlists[0],
      recommendations: recommendations,
      showRecs: showRecs,
      seeAllPlaylists: (playlists[1] <= 9) ? 'hide' : '',
      //trendingCount: 10,
      showMostPlayed: 'hide',
      showTopTrending: 'hide',
      unhighlight: 'active'
    });

  });


};

/**
 * GET /user/editProfile
 * User Home page.
 */
exports.getEditProfile = (req, res) => {
  res.render('user/editProfile', {
    title: 'Edit Profile - Music Amaze',
    header: 'Edit Profile',
    userName: req.user.username,
    email: req.user.email
  });
};

/**
 * POST /user/editProfile
 * Update profile information.
 */
exports.postEditProfile = (req, res, next) => {
  req.assert('email', 'Please enter a valid email address.').isEmail();
  req.sanitize('email').normalizeEmail({
    gmail_remove_dots: false
  });

  const errors = req.validationErrors();
  const curUserId = req.user.userId;
  const Op = Sequelize.Op;

  if (errors) {
    return res.status(400).send(errors);
  }

  User.findById(curUserId).then(user => {

    user.email = req.body.email;
    user.username = req.body.username;

    User.findOne({
      where: {
        email: user.email,
        userId: {
          [Op.not]: curUserId
        }
      }
    }).then(userWithEmail => {

      if ((userWithEmail !== null) && (JSON.stringify(userWithEmail) !== JSON.stringify(user))) {
        return res.status(400).send({
          msg: 'The email address you have entered is already associated with an account'
        });
      } else {
        User.findOne({
          where: {
            username: user.username,
            userId: {
              [Op.not]: curUserId
            }
          }
        }).then(userWithName => {
          if ((userWithName !== null) && (JSON.stringify(userWithName) !== JSON.stringify(user))) {
            return res.status(400).send({
              msg: 'The username is already in use'
            });
          } else {
            user.save()
              .then(() => {
                res.send({
                  msg: 'Profile saved'
                })
              });
          }
        });
      }
    });
  });

}

/**
 * GET /forgotPassword
 * Forgot Password page.
 */
exports.getForgot = (req, res) => {
  if (req.isAuthenticated()) {
    return res.redirect('/user/home');
  }
  res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  res.render('user/forgotPassword', {
    title: 'Reset Password - Music Amaze',
    header: 'Reset Password'
  });
};

/**
 * POST /forgotPassword
 */
exports.postForgot = (req, res, next) => {

  const newPwd = req.body.newPassword;
  const user = req.body.user;

  if (user !== null) {

    User.findById(user.userId).then(retUser => {
      if (retUser !== null) {
        //const hashedPwd = retUser.encryptPassword(newPwd);
        retUser.password = newPwd;
        retUser
          .update({
            password: newPwd
          }, {
            where: {
              userId: user.userId
            }
          }).then(user => {
            return res.send({
              msg: 'Password Updated!'
            });
          });
      }
    });
  }
}

/**
 * POST verify username
 */
exports.postVerifyUser = (req, res, next) => {
  User.findOne({
      where: {
        username: req.body.username
      }
    })
    .then(user => {
      if (!user) {
        return res.status(401).send({
          msg: 'Username does not exist!'
        });
      }
      return res.send(user);
    });
}

/**
 * POST /signup
 * Create a new local account.
 */
exports.postSignup = (req, res, next) => {
  req.assert('email', 'Email is not valid').isEmail();
  req.sanitize('email').normalizeEmail({
    gmail_remove_dots: false
  });

  const errors = req.validationErrors();

  if (errors) {
    return res.status(400).send(errors);
  }

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });

  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(existingUser => {

    if (existingUser) {
      return res.status(400).send({
        msg: 'Account with that email address already exists.'
      });
    } else {
      User.findOne({
        where: {
          username: req.body.username
        }
      }).then(userWithName => {
        if (userWithName) {
          return res.status(400).send({
            msg: 'Account with that username already exists.'
          });
        }
        user.save()
          .then(() => {
            res.send({
              msg: 'User created'
            })
          });
      });
    }
  });
}

/**
 * GET /user/changePassword
 * Change Password page.
 */
exports.getChangePassword = (req, res) => {
  res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  res.render('user/changePassword', {
    title: 'Change Password - Music Amaze',
    header: 'Change Password'
  });
};

/**
 * POST /user/changePassword
 */
exports.postChangePassword = (req, res, next) => {

  const oldPwd = req.body.oldPassword;
  const newPwd = req.body.newPassword;
  const curUserId = req.user.userId;

  User.findById(curUserId).then(retUser => {
    if (retUser !== null) {
      retUser.comparePasswords(oldPwd, (err, isMatch) => {
        if (isMatch) {
          retUser.password = newPwd;
          retUser
            .update({
              password: newPwd
            }, {
              where: {
                userId: curUserId
              }
            }).then(user => {
              return res.send({
                msg: 'Password Updated!'
              });
            });
        } else {
          return res.status(400).send({
            msg: 'Old Password is incorrect'
          });
        }
      });
    }
  });
}

/**
 * POST /user/createPlaylist
 */
exports.createPlaylist = (req, res, next) => {

  var playlistName = req.body.playlistName;
  const curUserId = req.user.userId;
  const limit = parseInt(req.body.limit);
  const playPage = (req.body.playPage == 'true');

  const playList = new Playlist({
    PLAYLIST_NAME: playlistName,
    USER_ID: curUserId
  });

  Playlist.findOne({
    where: {
      PLAYLIST_NAME: playlistName,
      USER_ID: curUserId
    }
  }).then(userWithPlaylist => {

    if (userWithPlaylist !== null) {
      return res.status(400).send({
        msg: 'The Playlist name already exists'
      });
    } else {
      playList.save()
        .then(() => {
          const playlists = playlist.getPlaylists(limit, curUserId);

          playlists.then((data) => {
            if (!(playPage)) {
              var seeAllPlaylists = (limit === 9 && data[1] <= 9) ? 'hide' : '';
              seeAllPlaylists = (limit === 5000) ? 'hide' : seeAllPlaylists;

              res.render('partials/playlist', {
                layout: false,
                playlists: data[0],
                seeAllPlaylists: seeAllPlaylists
              });
            } else {

              res.render('partials/addToPlaylist', {
                layout: false,
                playlists: data[0]
              });
            }

          }, (errorMessage) => {
            //not able to get playlists
            return res.status(500).send({
              msg: errorMessage
            });
          });
        }).catch((err) => {
          return res.status(500).send({
            msg: 'There was some error creating the playlist'
          });
        });
    }
  });
}

/**
 * POST /user/deletePlaylist
 */

exports.deletePlaylist = (req, res, next) => {
  const playlistId = req.body.playlistId;
  const curUserId = req.user.userId;
  const limit = parseInt(req.body.limit);

  Playlist.destroy({
    where: {
      PLAYLIST_ID: playlistId,
      USER_ID: curUserId
    }
  }).then(() => {

    const playlists = playlist.getPlaylists(limit, curUserId);

    playlists.then((data) => {
      var seeAllPlaylists = (limit === 9 && data[1] <= 9) ? 'hide' : '';
      seeAllPlaylists = (limit === 5000) ? 'hide' : seeAllPlaylists;
      res.render('partials/playlist', {
        layout: false,
        playlists: data[0],
        seeAllPlaylists: seeAllPlaylists
      });
    }, (errorMessage) => {
      //not able to get playlists
      return res.status(500).send({
        msg: errorMessage
      });
    });

  }).catch(err => {
    console.log(err);
    return res.status(400).send({
      msg: 'There was error deleting the playlist'
    });
  });
}

/**
 * POST /user/editPlaylistname
 */
exports.editPlaylistname = (req, res, next) => {
  const playlistId = req.body.playlistId;
  const playlistName = req.body.playlistname;
  const curUserId = req.user.userId;

  const playList = new Playlist({
    PLAYLIST_ID: playlistId,
    PLAYLIST_NAME: playlistName,
    USER_ID: curUserId
  });

  Playlist.findOne({
    where: {
      PLAYLIST_ID: {
        [Op.not]: playlistId
      },
      PLAYLIST_NAME: playlistName,
      USER_ID: curUserId
    }
  }).then(playlistWithName => {

    if (playlistWithName !== null) {
      return res.status(400).send({
        msg: 'The Playlist name already exists'
      });
    } else {
      Playlist.findById(playlistId).then(playlist => {

        playlist.PLAYLIST_NAME = playlistName;

        playlist.save()
          .then(() => {
            res.send({
              msg: playlistName
            })
          }).catch(errorMessage => {
            //not able to get playlists
            console.log(errorMessage)
            return res.status(500).send({
              msg: 'The is an error editing playlist name'
            });
          });

      }).catch(errorMessage => {
        //not able to get playlists
        console.log(errorMessage)
        return res.status(500).send({
          msg: 'The is an error editing playlist name'
        });
      });
    }

  }).catch(errorMessage => {
    //not able to get playlists
    return res.status(500).send({
      msg: 'The is an error editing playlist name'
    });
  });

}

/**
 * POST /user/playlists/seeAll
 */
exports.seeAllPlaylists = (req, res, next) => {
  const curUserId = req.user.userId;
  const playlists = playlist.getPlaylists(5000, curUserId);
  const recommendations = track.getRecommendations(curUserId, 10);

  Promise.all([playlists, recommendations]).then((results) => {
    //const topTrending = results[0];
    const playlists = results[0];
    const recommendations = results[1];
    var showRecs = 'hide';
    if (recommendations.length > 0) {
      showRecs = '';
    }
    res.render('partials/playlist', {
      layout: false,
      playlists: playlists[0],
      seeAllPlaylists: 'hide',
      showRecs: showRecs
    });
  }).catch(errorMessage => {
    //not able to get playlists
    return res.status(500).send({
      msg: errorMessage
    });
  });
}

/**
 * GET /user/playlists/seeAll
 */
exports.seeAllPlaylistsGet = (req, res, next) => {
  const curUserId = req.user.userId;
  const playlists = playlist.getPlaylists(5000, curUserId);
  const recommendations = track.getRecommendations(curUserId, 10);

  Promise.all([playlists, recommendations]).then((results) => {
    //const topTrending = results[0];
    const playlists = results[0];
    const recommendations = results[1];
    var showRecs = 'hide';
    if (recommendations.length > 0) {
      showRecs = '';
    }
    res.render('user/home', {
      title: 'Music Home - Music Amaze',
      userName: req.user.username,
      playlists: playlists[0],
      seeAllPlaylists: 'hide',
      highlightPlaylistTab: 'active',
      unhighlight: '',
      showRecs: showRecs,
      showMPlayed: 'hide',
      showPlayList: '',
      showRecom: 'hide',
      showCharts: 'hide'
    });
  }).catch(errorMessage => {
    //not able to get playlists
    return res.status(500).send({
      msg: errorMessage
    });
  });
}

/**
 * POST /user/playlists
 */

exports.getUserPlaylists = (req, res, next) => {
  const curUserId = req.user.userId;
  const playlists = playlist.getPlaylists(5000, curUserId);

  playlists.then((data) => {
    res.render('partials/addToPlaylist', {
      layout: false,
      userName: req.user.username,
      playlists: data[0]
    });
  }).catch(err => {
    //not able to get playlists
    return res.status(500).send({
      msg: err
    });
  });
}

/**
 * POST /user/addtoplaylist
 */

exports.addToUserPlaylist = (req, res, next) => {
  const trackId = req.body.trackId;
  const playlistId = req.body.playlistId;


  const playlist_track = new Playlists_Tracks({
    PLAYLIST_ID: playlistId,
    TRACK_ID: trackId
  });

  Playlists_Tracks.findOne({
    where: {
      PLAYLIST_ID: playlistId,
      TRACK_ID: trackId
    }
  }).then(results => {
    if (results === null) {
      playlist_track.save()
        .then(() => {
          // const curUserId = req.user.userId;
          // const playlists = playlist.getPlaylists(5000, curUserId);
          //
          // playlists.then((data) => {
          //   res.render('partials/addToPlaylist', {
          //     layout: false,
          //     userName: req.user.username,
          //     playlists: data[0]
          //   });
          // }, (errorMessage) => {
          //   //not able to get playlists
          //   return res.status(500).send({
          //     msg: errorMessage
          //   });
          // });
          return res.send({
            msg: 'Track added to playlist'
          })
        }).catch(err => {
          console.log(err)
          return res.status(500).send({
            msg: 'There was an error adding track to playlist'
          });
        });
    } else {
      return res.send({
        msg: 'Track already in the playlist'
      })
    }
  }).catch(err => {
    console.log(err);
    return res.status(500).send({
      msg: 'There was an error getting tracks of playlist'
    });
  });
}

/**
 * POST /user/playlist/deleteTrack
 * delete track from user playlist
 */
exports.deleteFromUserPlaylist = (req, res, next) => {

  const trackId = req.body.trackId;
  const playlistId = req.body.playlistId;
  Playlists_Tracks.destroy({
    where: {
      PLAYLIST_ID: playlistId,
      TRACK_ID: trackId
    }
  }).then(results => {
    return res.send({
      msg: 'Track delteted from playlist'
    });
  }).catch(err => {
    console.log(err);
    return res.status(500).send({
      msg: 'There was an deleting track from playlist'
    });
  })
}

/**
 * POST /user/recommendations/seeAll
 * GET /user/recommendations/seeAll
 * Get all recommendations
 */
exports.seeAllRecommendations = (req, res, next) => {
  const curUserId = req.user.userId;
  const method = req.method;

  const recs = track.getRecommendations(curUserId, 30);

  recs.then((results) => {
    if (method === 'POST') {
      res.render('partials/recommendations', {
        layout: false,
        recommendations: results
      });
    } else {
      res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
      res.render('user/home', {
        title: 'Music Home - Music Amaze',
        userName: req.user.username,
        recommendations: results,
        highlightRecomTab: 'active',
        unhighlight: '',
        showMPlayed: 'hide',
        showPlayList: 'hide',
        showRecom: '',
        showCharts: 'hide'
      });
    }

  })
}

/**
 * POST /user/topTrending/seeAll
 * GET /user/topTrending/seeAll
 * Get all top trending
 */
exports.seeAllTrending = (req, res, next) => {
  const method = req.method;

  const recs = track.getTopTrending(50);

  recs.then((results) => {
    if (method === 'POST') {
      res.render('partials/topTrending', {
        layout: false,
        topTrendingTracks: results,
        trendingCount: 50
      });
    } else {
      res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
      res.render('user/home', {
        title: 'Music Home - Music Amaze',
        userName: req.user.username,
        topTrendingTracks: results,
        highlightTopTrendingTab: 'active',
        trendingCount: 50
      });
    }

  })
}

/**
 * POST /user/mostPlayed/seeAll
 * GET /user/mostPlayed/seeAll
 * Get all most played
 */
exports.seeAllPlayed = (req, res, next) => {
  const userId = req.user.userId;
  const method = req.method;

  const recs = track.getMostPlayed(userId, 50);
  const recommendations = track.getRecommendations(userId, 10);

  Promise.all([recs, recommendations]).then((results) => {
    //const topTrending = results[0];
    const recs = results[0];
    const recommendations = results[1];
    var showRecs = 'hide';
    if (recommendations.length > 0) {
      showRecs = '';
    }
    if (method === 'POST') {
      res.render('partials/mostPlayed', {
        layout: false,
        mostPlayed: recs[0],
        showRecs: showRecs,
        highlightMostPlayedTab: 'active',
        unhighlight: '',
      });
    } else {
      res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
      res.render('user/home', {
        title: 'Music Home - Music Amaze',
        userName: req.user.username,
        mostPlayed: recs[0],
        highlightMostPlayedTab: 'active',
        unhighlight: '',
        showRecs: showRecs,
        showMPlayed: '',
        showPlayList: 'hide',
        showRecom: 'hide',
        showCharts: 'hide'
      });
    }
  }).catch(err => {
    res.status(404).send({msg: err});
  })
}

/**
 *
 * GET /play/mostPlayed
 * Get all most played
 */

exports.getMostPlayed = (req, res, next) => {
  const curUserId = req.user.userId;

  var auth = track.getAuth();
  auth.then((authObj) => {
    var cookie = req.cookies.auth;
    // console.log(req.cookies.auth);
    if (cookie === undefined) {
      res.cookie('auth', authObj.auth, {
        maxAge: authObj.maxAge,
        httpOnly: true
      });
    }

    const recs = track.getMostPlayed(curUserId, 50, authObj.auth);

    recs.then((results) => {
      const chartName = 'Most Played By You';
      res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
      res.render('music/play', {
        displaySearch: 'hide',
        title: `Most Played By You - Music Amaze`,
        userName: req.user.username,
        album: results[1],
        artist: {},
        albumTracks: results[0],
        chartName: chartName
      });

    }).catch((msg) => {
      console.log(msg);
      return res.status(500).send({
        msg: msg
      });
    });
  });

}

const passport = require('passport');
const Sequelize = require('sequelize');

const User = require('../models/User');
const Track = require('../models/Track');
const Artist = require('../models/Artist');
const Album = require('../models/Album');
const Location_Stat = require('../models/Location_Stat');

const Op = Sequelize.Op;

var album = {};

/**
 * getLatLong method
 */

const getLatLong = (albumId) => {
  return new Promise((resolve, reject) => {
    Location_Stat.findAndCountAll({
      attributes: ['LATITUDE', 'LONGITUDE', 'LOCATION_COUNT'],
      where: {
        ALBUM_ID: albumId
      }
    }).then(results => {
      var data = results.rows.map((r) => {
        var obj = r.dataValues;
        return obj;
      });
      resolve(data);
    }).catch(err => {
      console.log(err);
      reject('There is some problem with server getting lat, long results');
    });
  });

}

/**
 * getStats method
 */
const getStats = (albumId) => {
  return new Promise((resolve, reject) => {
    Track.findAll({
      attributes: ['TRACK_ID', 'TRACK_NAME', 'NUMBER_OF_PLAYS', 'LIKES', 'DISLIKES'],
      where: {
        ALBUM_ID: albumId
      },
      include: [{
        model: Artist,
        attributes: ['STAGE_NAME']
      }],
      order: [
        ['NUMBER_OF_PLAYS', 'DESC'],
      ]
    }).then(results => {
      var totalLikes = 0;
      var totalDislikes = 0;
      var data = results.map((r) => {
        var obj = r.dataValues;
        totalLikes = totalLikes + r.dataValues.LIKES;
        totalDislikes = totalDislikes + r.dataValues.DISLIKES;
        album.artistName = r.Artist.dataValues.STAGE_NAME;
        album.totalLikes = totalLikes;
        album.totalDislikes = totalDislikes;
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
 * GET /searchconcert
 */
exports.getStats = (req, res, next) => {
  res.render('artist/stats', {
    title: 'Statistics - Music Amaze',
    userName: req.user.username,
    displaySearch: 'hide'
  });
};

/**
 * POST /searchstat
 * serach for album stats
 */

exports.getStatSearch = (req, res, next) => {
  var searchString = req.body.statText;

  searchString = decodeURIComponent(searchString);

  Album.findAndCountAll({
    attributes: ['ALBUM_ID', 'ALBUM_NAME'],
    where: {
      ALBUM_NAME: {
        [Op.like]: '%' + searchString + '%'
      }
    }
  }).then(results => {
    var count = results.count;
    var data = results.rows.map((r) => {
      var obj = r.dataValues;
      return obj;
    });
    if (count > 1) {
      res.render('partials/album', {
        layout: false,
        albums: data
      });
    } else if (count === 1) {
      album.albumName = data[0].ALBUM_NAME;

      const statInfo = getStats(data[0].ALBUM_ID);
      const latlng = getLatLong(data[0].ALBUM_ID);

      Promise.all([statInfo, latlng]).then((results) => {
        res.render('partials/statResults', {
          layout: false,
          stats: results[0],
          latlng: JSON.stringify(results[1]),
          album: album
        });
      }).catch(err => {
        console.log(err);
        res.send(`<h3 class="text-center">There was some error showing the stats</h3>`);
      });

    } else {
      res.send(`<h3 class="text-center">No matches found for "<span class='concertStr'>${searchString}</span>"</h3>`);
    }
  }).catch(err => {
    console.log(err);
    res.send(`<h3 class="text-center">No matches found for "<span class='concertStr'>${searchString}</span>"</h3>`);
  });
}

exports.getStatResults = (req, res, next) => {
  const albumId = req.body.albumId;
  album.albumName = req.body.albumName;

  const results = getStats(albumId);

  const latlng = getLatLong(albumId);

  Promise.all([results, latlng]).then((result) => {
    res.render('partials/statResults', {
      layout: false,
      stats: result[0],
      latlng: JSON.stringify(result[1]),
      album: album
    });
  }).catch(err => {
    console.log(err);
    res.send(`<h3 class="text-center">There was some error showing the stats</h3>`);
  });
}

exports.getPayment = (req, res, next) => {

  const userId = req.user.userId;

  User.findById(userId).
  then((user) => {

    var paydate = user.paymentdate;
    var todayDate = new Date();
    todayDate = new Date(`${todayDate.getFullYear()}-${todayDate.getMonth()+1}-${todayDate.getDate()}`)
    paydate = new Date(`${paydate.getFullYear()}-${paydate.getMonth()+1}-${paydate.getDate()}`)

    console.log(todayDate - paydate)
    if (user.paid && (todayDate - paydate < 1)) {
      res.render('artist/stats', {
        title: 'Statistics - Music Amaze',
        userName: req.user.username,
        displaySearch: 'hide'
      });
    } else {
      res.render('artist/payment', {
        title: 'Payment - Music Amaze',
        userName: req.user.username,
        displaySearch: 'hide'
      });
    }
  })
}

exports.postPayment = (req, res, next) => {

  const userId = req.user.userId;

  User.findById(userId).
  then((user) => {
    var date = new Date();
    user.paid = 1;
    user.paymentdate = date;

    user.save().
    then(() => {
      return res.send({
        msg: 'payment updated'
      })
    }).catch(err => {
      return res.status(500).send({
        msg: 'There is some error with payment'
      })
    })
  })
}

const Sequelize = require('sequelize');

const Track = require('../models/Track');
const Album = require('../models/Album');

const Op = Sequelize.Op;

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
        return obj;
      });
      //console.log(data);
      resolve(data);
    })
  });
}

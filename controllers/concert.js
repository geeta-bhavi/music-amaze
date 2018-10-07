const passport = require('passport');
const Sequelize = require('sequelize');
const request = require("request");
const parseString = require('xml2js').parseString;


/**
 * GET /searchconcert
 */
exports.getConcertPage = (req, res, next) => {
  res.render('music/searchconcert', {
    title: 'Search Concert - Music Amaze',
    header: 'Search your favorite artists and never miss them live!',
    userName: req.user.username,
    displaySearch: 'hide'
  });
};

const getArtists = (artisturl) => {
  return new Promise(function(resolve, reject) {
    request.get(artisturl, (error, response, artbody) => {
      if (error) {
        reject('Unable to connect to songkick server');
      } else {
        const body = JSON.parse(artbody);
        resolve(body);
      }
    });
  });
}

const getLocations = (locationurl) => {
  return new Promise(function(resolve, reject) {
    request.get(locationurl, (error, response, artbody) => {
      if (error) {
        reject('Unable to connect to songkick server');
      } else {
        const body = JSON.parse(artbody);
        resolve(body);
      }
    });
  });
}

/**
 * POST /searchconcert
 * serach for concert
 */
exports.postConcertSearch = (req, res, next) => {
  const searchString = req.body.concertText;

  const artisturl =
    `http://api.songkick.com/api/3.0/search/artists.json?apikey=${process.env.SONGKICK_API_KEY}&query=${searchString}`;

  const locationurl =
    `http://api.songkick.com/api/3.0/search/locations.json?apikey=${process.env.SONGKICK_API_KEY}&query=${searchString}`;


  const artists = getArtists(artisturl);
  const locations = getLocations(locationurl);

  Promise.all([artists, locations]).then((results) => {

    const artists = results[0];
    const locations = results[1];

    if (artists.resultsPage.totalEntries >= 1 && locations.resultsPage.totalEntries >= 1) {
      res.render('partials/artist', {
        layout: false,
        artists: artists.resultsPage.results.artist,
        locations: locations.resultsPage.results.location
      });
    } else if (artists.resultsPage.totalEntries > 1 && locations.resultsPage.totalEntries === 0) {
      res.render('partials/artist', {
        layout: false,
        artists: artists.resultsPage.results.artist
      });
    } else if (artists.resultsPage.totalEntries === 0 && locations.resultsPage.totalEntries > 1) {
      res.render('partials/artist', {
        layout: false,
        locations: locations.resultsPage.results.location
      });
    } else if (artists.resultsPage.totalEntries === 1 && locations.resultsPage.totalEntries == 0) {
      const artistId = artists.resultsPage.results.artist[0].id;
      const artistName = artists.resultsPage.results.artist[0].displayName;
      const concerts = getConcerts(artistId);
      concerts.then((events) => {
        res.render('partials/concertResults', {
          layout: false,
          events: events,
          artistName: artistName
        });
      }).catch(err => {
        res.send(err);
      });
    } else if (artists.resultsPage.totalEntries === 0 && locations.resultsPage.totalEntries === 1) {
      const locationId = artists.resultsPage.results.artist[0].id;
      const locationName = artists.resultsPage.results.artist[0].displayName;
      const concerts = getLocationConcerts(locationId);
      concerts.then((events) => {
        res.render('partials/locationConcerts', {
          layout: false,
          events: events,
          locationName: locationName
        });
      }).catch(err => {
        res.send(err);
      });
    } else {
      res.send(`<h3 class="text-center">No matches found for "<span class='concertStr'>${searchString}</span>"</h3>`);
    }
  })
};

/**
 * getConcerts method
 */

const getConcerts = (artistId) => {
  const eventsUrl = `http://api.songkick.com/api/3.0/artists/${artistId}/calendar.json?apikey=${process.env.SONGKICK_API_KEY}`;
  return new Promise(function(resolve, reject) {
    request.get(eventsUrl, (error, response, concresult) => {
      if (error) {
        reject('Unable to connect to songkick server');
      } else {
        if (error) {
          console.log('Unable to get results');
        } else {
          const body = JSON.parse(concresult)
          if (body.resultsPage !== undefined && body.resultsPage.status === 'ok') {
            if (body.resultsPage.totalEntries >= 1) {

              resolve(body.resultsPage.results.event)

            } else {
              reject('<h3 class="text-center">There are no concerts found for this artist!</h3>');
            }
          } else {
            reject('<h3 class="text-center">There is a problem with server getting concerts!</h3>');
          }
        }
      }
    });
  });
}

/**
 * getLocationConcerts method
 */

const getLocationConcerts = (locationId) => {
  const eventsUrl = `http://api.songkick.com/api/3.0/events.json?apikey=${process.env.SONGKICK_API_KEY}&location=sk:${locationId}`;
  return new Promise(function(resolve, reject) {
    request.get(eventsUrl, (error, response, concresult) => {
      if (error) {
        reject('Unable to connect to songkick server');
      } else {
        if (error) {
          console.log('Unable to get results');
        } else {
          const body = JSON.parse(concresult)
          if (body.resultsPage !== undefined && body.resultsPage.status === 'ok') {
            if (body.resultsPage.totalEntries >= 1) {

              resolve(body.resultsPage.results.event)

            } else {
              reject('<h3 class="text-center">There are no concerts found for this location!</h3>');
            }
          } else {
            reject('<h3 class="text-center">There is a problem with server getting concerts!</h3>');
          }
        }
      }
    });
  });
}

exports.getConcertsOfArtist = (req, res, next) => {
  const artistId = req.body.artistId;
  const artistName = req.body.artistName;

  const concerts = getConcerts(artistId);
  concerts.then((events) => {
    res.render('partials/concertResults', {
      layout: false,
      events: events,
      artistName: artistName
    });
  }).catch(err => {
    res.send(err);
  });
}

exports.getConcertsOfLocation = (req, res, next) => {
  const locationId = req.body.locationId;
  const locationName = req.body.locationName;

  const concerts = getLocationConcerts(locationId);
  concerts.then((events) => {
    res.render('partials/locationConcerts', {
      layout: false,
      events: events,
      locationName: locationName
    })
  }).catch(err => {
    res.send(err);
  });
}

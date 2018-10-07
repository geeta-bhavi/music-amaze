/**
 * Module dependencies.
 */
const express = require('express');
const hbs = require('hbs');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const logger = require('morgan');
const errorHandler = require('errorhandler');
const path = require('path');
const cookieSession = require('cookie-session');
const fs = require('fs');
const passport = require('passport');
const mysql = require('mysql');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

/**
 * Load environment variables from .env file, where keys and passwords are configured.
 */
dotenv.load({
  path: '.env.musicamaze'
});

/**
 * Other configurations.
 */
const logfile = fs.createWriteStream(path.join(__dirname, '/logs/server.log'), {
  flags: 'a'
});
//hbs.registerPartials(path.join(__dirname, '/views/partials'));
var partialsDir = __dirname + '/views/partials';
var filenames = fs.readdirSync(partialsDir);
filenames.forEach(function(filename) {
  var matches = /^([^.]+).hbs$/.exec(filename);
  if (!matches) {
    return;
  }
  var name = matches[1];
  var template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
  hbs.registerPartial(name, template);
});

hbs.registerHelper("inc", function(value, options) {
    return parseInt(value) + 1;
});
/**
 * Controllers (route handlers).
 */
const indexController = require('./controllers/index');
const userController = require('./controllers/user');
const trackController = require('./controllers/track');
const searchController = require('./controllers/search');
const playlistController = require('./controllers/playlist');
const concertController = require('./controllers/concert');
const statController = require('./controllers/stats');


/**
 * Passport and redis configuration.
 */
const passportConfig = require('./config/passport');

/**
 * Create Express server.
 */
const app = express();

/**
 * Connect to mysql.
 */
const mysqlPool = mysql.createPool({
  host: process.env.mysqlhost,
  user: process.env.mysqluser,
  password: process.env.mysqlpassword,
  database: process.env.mysqldatabase
});

// mysqlPool.getConnection(function(err, connection) {
//   if (err) throw err;
//   console.log('Connected!');
//   });
// mysqlPool.query('SELECT * FROM user', (err,rows) => {
//   if(err) throw err;
//
//   console.log('Data received from Db:\n');
//   console.log(rows);
// });

/**
 * Express configuration.
 */
app.set('host', process.env.HOST || 'localhost');
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'hbs');
app.use(logger('combined', {
  stream: logfile
}));
app.use(bodyParser.json());
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(expressValidator());
app.use(cookieSession({
  secret: process.env.SESSION_SECRET,
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
// caching disabled for every route
// app.use(function(req, res, next) {
//   res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
//   next();
// });

/**
 * Primary app routes.
 */
app.get('/', indexController.index);
app.get('/error', indexController.error);
app.get('/login', userController.getLogin);
app.post('/login', userController.postLogin);
app.get('/logout', userController.logout);
app.get('/forgotPassword', userController.getForgot);
app.post('/forgotPassword', userController.postForgot);
app.post('/verifyUser', userController.postVerifyUser)
app.get('/signup', userController.getSignup);
app.post('/signup', userController.postSignup);
app.get('/about', indexController.getDev);
app.get('/user/home', passportConfig.isAuthenticated, userController.getUserHome);
app.get('/user/editProfile', passportConfig.isAuthenticated, userController.getEditProfile);
app.post('/user/editProfile', passportConfig.isAuthenticated, userController.postEditProfile);
app.get('/user/changePassword', passportConfig.isAuthenticated, userController.getChangePassword);
app.post('/user/changePassword', passportConfig.isAuthenticated, userController.postChangePassword);
app.post('/user/playlists', passportConfig.isAuthenticated, userController.getUserPlaylists);
app.get('/play/album/:albumId/track/:trackId', passportConfig.isAuthenticated, trackController.getAlbumTracks);
app.get('/play/album/:albumId', passportConfig.isAuthenticated, trackController.getAlbumTracks);
app.get('/play/artist/:artistId', passportConfig.isAuthenticated, trackController.getArtistTracks);
app.post('/play/playlist/:playlistId', passportConfig.isAuthenticated, playlistController.getPlaylistTrackCount);
app.get('/play/playlist/:playlistId', passportConfig.isAuthenticated, playlistController.getPlaylistTracks);
app.post('/search/:searchString', passportConfig.isAuthenticated, searchController.search);
app.get('/search/:searchString', passportConfig.isAuthenticated, searchController.searchGet);
app.post('/search/:category/:searchString', passportConfig.isAuthenticated, searchController.searchByCategory);
app.get('/search/:category/:searchString', passportConfig.isAuthenticated, searchController.searchByCategoryGet);
app.post('/update/playCount/:trackId', passportConfig.isAuthenticated, trackController.updatePlayCount);
app.post('/user/likeUnlike', passportConfig.isAuthenticated, trackController.updateUserLikes);
app.post('/user/dislikeUndislike', passportConfig.isAuthenticated, trackController.updateUserDisLikes);
app.post('/user/createPlaylist', passportConfig.isAuthenticated, userController.createPlaylist);
app.post('/user/deletePlaylist', passportConfig.isAuthenticated, userController.deletePlaylist);
app.post('/user/editPlaylistname', passportConfig.isAuthenticated, userController.editPlaylistname);
app.post('/user/playlists/seeAll', passportConfig.isAuthenticated, userController.seeAllPlaylists);
app.get('/user/playlists/seeAll', passportConfig.isAuthenticated, userController.seeAllPlaylistsGet);
app.post('/user/playlist/addtracktoplaylist', passportConfig.isAuthenticated, userController.addToUserPlaylist);
app.post('/user/playlist/deleteTrack', passportConfig.isAuthenticated, userController.deleteFromUserPlaylist);
app.get('/user/recommendations/seeAll', passportConfig.isAuthenticated, userController.seeAllRecommendations);
app.post('/user/recommendations/seeAll', passportConfig.isAuthenticated, userController.seeAllRecommendations);
app.get('/user/topTrending/seeAll', passportConfig.isAuthenticated, userController.seeAllTrending);
app.post('/user/topTrending/seeAll', passportConfig.isAuthenticated, userController.seeAllTrending);
app.get('/user/mostPlayed/seeAll', passportConfig.isAuthenticated, userController.seeAllPlayed);
app.post('/user/mostPlayed/seeAll', passportConfig.isAuthenticated, userController.seeAllPlayed);
app.get('/play/top50', passportConfig.isAuthenticated, trackController.getTop50);
app.get('/play/mostPlayed', passportConfig.isAuthenticated, userController.getMostPlayed);
app.get('/searchconcert', passportConfig.isAuthenticated, concertController.getConcertPage);
app.post('/searchconcert', passportConfig.isAuthenticated, concertController.postConcertSearch);
app.post('/searchconcert/findConcertsOfArtist', passportConfig.isAuthenticated, concertController.getConcertsOfArtist);
app.post('/searchconcert/findConcertsOfLocation', passportConfig.isAuthenticated, concertController.getConcertsOfLocation);
app.post('/play/playlistChange/rearrangeData', passportConfig.isAuthenticated, playlistController.rearrangePlaylistracks);
app.get('/stats', passportConfig.isAuthenticated, statController.getStats);
app.get('/payment', passportConfig.isAuthenticated, statController.getPayment);
app.post('/payment', passportConfig.isAuthenticated, statController.postPayment);
app.post('/searchstat', passportConfig.isAuthenticated, statController.getStatSearch);
app.post('/statresults', passportConfig.isAuthenticated, statController.getStatResults);
app.get('/play/mostPlayedByAll', passportConfig.isAuthenticated, trackController.getMostPlayedByAll);
app.get('/play/mostLikedByAll', passportConfig.isAuthenticated, trackController.getMostLikedByAll);




/**
* TODO: Please remove this later
*/
app.get('/feedRaccoon', passportConfig.isAuthenticated, trackController.feedRaccoon);
app.get('/getRaccoon', passportConfig.isAuthenticated, trackController.getRaccoon);


/**
 * Error Handler.
 */
if (app.get('env') === 'development') {
  app.use(errorHandler())
}

app.use(function(req, res, next) {
  res.status(404).redirect('/error')
});

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log(`App is running at http://localhost:${app.get('port')} in ${app.get('env')} mode`);
  console.log('  Press CTRL-C to stop\n');
});

module.exports = app;

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
dotenv.load({ path: '.env.musicamaze' });

/**
* Other configurations.
*/
const logfile = fs.createWriteStream(path.join(__dirname, '/logs/server.log'), {flags: 'a'});
//hbs.registerPartials(path.join(__dirname, '/views/partials'));
var partialsDir = __dirname + '/views/partials';
var filenames = fs.readdirSync(partialsDir);
filenames.forEach(function (filename) {
  var matches = /^([^.]+).hbs$/.exec(filename);
  if (!matches) {
    return;
  }
  var name = matches[1];
  var template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
  hbs.registerPartial(name, template);
});

/**
 * Controllers (route handlers).
 */
const indexController = require('./controllers/index');
const userController = require('./controllers/user');

/**
 * Passport configuration.
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
  host     : process.env.mysqlhost,
  user     : process.env.mysqluser,
  password : process.env.mysqlpassword,
  database : process.env.mysqldatabase
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
app.use(logger('combined', {stream: logfile}));
app.use(bodyParser.json());
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(bodyParser.urlencoded({ extended: true }));
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
app.get('/user/home', passportConfig.isAuthenticated, userController.getUserHome);
app.get('/user/editProfile', passportConfig.isAuthenticated, userController.getEditProfile);
app.post('/user/editProfile', passportConfig.isAuthenticated, userController.postEditProfile);
app.get('/user/changePassword', passportConfig.isAuthenticated, userController.getChangePassword);
app.post('/user/changePassword', passportConfig.isAuthenticated, userController.postChangePassword);

/**
 * Error Handler.
 */
if (app.get('env') === 'development') {
  app.use(errorHandler())
}

app.use(function (req, res, next) {
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

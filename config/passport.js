const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');

passport.serializeUser((user, done) => {
  done(null, user.userId);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    var err = null;
    if(!user) {
      err = 'Some deserialize error';
    }
    done(err, user);
  });
});

/**
 * Sign in using Username and Password.
 */
passport.use(new LocalStrategy({ usernameField: 'username' }, (username, password, done) => {

  User.findOne({ where: {username: username }}).then(user => {

    if (!user) {
      return done(null, false, { msg: `Username '${username}' not found.` });
    }
    user.comparePasswords(password, (err, isMatch) => {
      if (err) { return done(err); }
      if (isMatch) {
        return done(null, user);
      }
      return done(null, false, { msg: 'Invalid email or password.' });
    });
  });
}));

/**
 * Login Required middleware.
 */
exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

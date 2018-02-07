const passport = require('passport');
//const User = require('../models/User');


/**
 * GET /login
 * Login page.
 */
exports.getLogin = (req, res) => {
  if (req.user) {
    return res.redirect('/user/home');
  }
  res.render('user/login', {
    title: 'Login'
  });
};

/**
 * POST /login
 * Sign in using email and password.
 */
exports.postLogin = (req, res, next) => {
  req.assert('username', 'Username is not valid').matches(/[a-zA-z.-_]/);
  req.assert('password', 'Password cannot be blank').notEmpty();

  const errors = req.validationErrors();
  if (errors) {
    return res.status(400).send(errors);
  }

  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) {
      console.log('user.js'+info)
      return res.status(400).send(info);
    }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
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
  res.send({redirect: '/'});
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
    title: 'Create Account'
  });
};

/**
 * GET /user/home
 * User Home page.
 */
exports.getUserHome = (req, res) => {
  res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  res.render('user/home', {
    title: 'User Home',
    userName: req.user.username
  });
};

/**
 * GET /user/editProfile
 * User Home page.
 */
exports.getEditProfile = (req, res) => {
  res.render('user/editProfile', {
    title: 'Edit Profile'
  });
};

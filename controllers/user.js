const passport = require('passport');
//const User = require('../models/User');


/**
 * GET /login
 * Login page.
 */
exports.getLogin = (req, res) => {
  if (req.user) {
    return res.redirect('/');
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
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('password', 'Password cannot be blank').notEmpty();
  req.sanitize('email').normalizeEmail({ gmail_remove_dots: false });

  const errors = req.validationErrors();
  if (errors) {
    return res.status(400).send(errors);
  }

  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.send('No such user'); }
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
    return res.redirect('/');
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
  console.log(req.session);
  res.render('user/home', {
    title: 'User Home'
  });
};

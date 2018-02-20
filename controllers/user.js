const passport = require('passport');
const Sequelize = require('sequelize');

const User = require('../models/User');
const helperTrack = require('../helpers/track');




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
      return res.status(401).send({msg: err});
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
  var topTrendingTracks = helperTrack.getTopTrending();
  topTrendingTracks.then((topTrending) => {
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.render('user/home', {
      title: 'Music Home - Music Amaze',
      userName: req.user.username,
      topTrendingTracks: topTrending
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
          msg: 'Username does not exist'
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
      return res.status(400).send({  msg: 'Account with that email address already exists.'});
    } else {
      User.findOne({
        where: {
          username: req.body.username
        }
      }).then(userWithName => {
          if (userWithName) {
            return res.status(400).send({msg: 'Account with that username already exists.'});
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

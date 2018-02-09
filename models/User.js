const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const saltRounds = 10;
/**
 * Load sequelize handle
 */
const sequelizeHandle = require('../config/sequelize');

// User model schema
const schemaDefinition = {
  userId: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    get() {
      return this.getDataValue('userId');
    },
    set(val) {
      this.setDataValue('userId', val);
    }
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    get() {
      return this.getDataValue('username');
    },
    set(val) {
      this.setDataValue('username', val);
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    get() {
      return this.getDataValue('email');
    },
    set(val) {
      this.setDataValue('email', val);
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    get() {
      return this.getDataValue('password');
    },
    set(val) {
      this.setDataValue('password', val);
    }
  }
}

// The model schema options.
const schemaOptions = {
  hooks: {
    beforeUpdate: hashPassword,
    beforeCreate: hashPassword
  }
}

// Define the User model.
const User = sequelizeHandle.define('User', schemaDefinition, schemaOptions);

// Instance methods
User.prototype.comparePasswords = comparePasswords;

// Compares two passwords.
function comparePasswords(userpassword, callback) {
  bcrypt.compare(userpassword, this.password, (err, isMatch) => {
    callback(err, isMatch);
  });
}

// Hashes the password for a user object.
function hashPassword(user, options) {

  if (!user.changed('password')) {
    return;
  }

  return new Promise(function(resolve, reject) {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    })
  }).then(function(hash) {

    console.log('has', hash);
    user.password = hash;
  });

}

module.exports = User;

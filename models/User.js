const Sequelize = require('sequelize');

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
      primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}

// The model schema options.
const schemaOptions = {
    hooks: {
        beforeValidate: hashPassword
    }
}

// Define the User model.
const User = sequelizeHandle.define('User', schemaDefinition, schemaOptions);

// Instance methods
User.prototype.comparePasswords = comparePasswords;


// Compares two passwords.
function comparePasswords(userpassword, callback) {
    if(userpassword === this.password) {
      callback(null, true);
    } else {
      const err = 'Password did not match';
      callback(err);
    }
}

// Hashes the password for a user object.
function hashPassword(user) {
    // TODO: Password hashing logic.
}

module.exports = User;

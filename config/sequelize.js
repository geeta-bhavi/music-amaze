const Sequelize = require('sequelize');
const op = Sequelize.Op;

const sequelizeHandle = new Sequelize(
  process.env.mysqldatabase,
  process.env.mysqluser,
  process.env.mysqlpassword,
  {
    host: process.env.mysqlhost,
    dialect: process.env.dialect,
    operatorsAliases: op,
    define: {
        timestamps: false,
        freezeTableName: true
    }
  }
);

module.exports = sequelizeHandle;

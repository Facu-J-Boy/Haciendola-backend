const { Sequelize } = require('sequelize');

require('dotenv').config();

const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const sequelize = new Sequelize(
  'postgres://ogzwmchg:9y2Zjt0M1uCp7X1q2EkJF2FWbkuN7Vmb@bubble.db.elephantsql.com/ogzwmchg',
  {
    host: 'localhost',
    dialect: 'postgres', // Puedes cambiarlo según el dialecto que estés usando
  }
);

module.exports = sequelize;

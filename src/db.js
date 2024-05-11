const { Sequelize } = require('sequelize');

require('dotenv').config();

const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres', // Puedes cambiarlo según el dialecto que estés usando
});

module.exports = sequelize;

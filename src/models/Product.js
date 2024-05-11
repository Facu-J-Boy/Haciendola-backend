const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./User');

const Product = sequelize.define(
  'Product',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    handle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SKU: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    grams: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comparePrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    barCode: {
      type: DataTypes.NUMERIC,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Product;

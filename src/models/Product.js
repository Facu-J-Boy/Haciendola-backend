const { DataTypes } = require('sequelize');
const sequelize = require('../db');

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
      type: DataTypes.NUMERIC,
      allowNull: false,
      unique: true,
      defaultValue: () =>
        Math.floor(10000000000 + Math.random() * 90000000000), // Generar automáticamente el valor
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
      defaultValue: () =>
        Math.floor(1000000000000 + Math.random() * 9000000000000), // Generar automáticamente el valor
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Product;

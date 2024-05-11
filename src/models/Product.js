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
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    grams: {
      type: DataTypes.NUMBER,
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
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Product;

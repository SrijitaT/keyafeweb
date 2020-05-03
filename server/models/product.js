'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: DataTypes.STRING,
    img_url: DataTypes.STRING,
    price: DataTypes.INTEGER,
    category: DataTypes.STRING
  }, {});
  Product.associate = function (models) {
    // associations can be defined here
  };
  return Product;
};
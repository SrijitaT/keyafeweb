'use strict';

const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    category: DataTypes.STRING,
  }, {});
  Categories.associate = function (models) {
    // associations can be defined here
  };
  return Categories;
};
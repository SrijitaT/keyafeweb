'use strict';
const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Feature = sequelize.define('Feature', {
    feature: DataTypes.STRING
  }, {});
  Feature.associate = function (models) {
    // associations can be defined here
  };
  return Feature;
};
'use strict';
const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Feature_value = sequelize.define('Feature_value', {
    value: DataTypes.STRING
  }, {});
  Feature_value.associate = function (models) {
    // associations can be defined here
  };
  return Feature_value;
};
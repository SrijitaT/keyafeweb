'use strict';
const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const ProductFeature = sequelize.define('ProductFeature', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    prod_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Product', // name of Target model
        key: 'id', // key in Target model that we're referencing
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    f_val_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Feature_value', // name of Target model
        key: 'id', // key in Target model that we're referencing
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      default: Sequelize.NOW
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      default: Sequelize.NOW
    }
  }, {});
  ProductFeature.associate = function (models) {
    // associations can be defined here
    //One product can have multiple features
  };
  return ProductFeature;
};
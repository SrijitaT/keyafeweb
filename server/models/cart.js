'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cart.init({
    prod_id: {type: DataTypes.INTEGER(11),
      foreignKey: true,
    references: {
      model: 'Products', // name of Target model
      key: 'id', // key in Target model that we're referencing
    }},
    user_id: {type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: 'Users', // name of Target model
        key: 'id', // key in Target model that we're referencing
    },
    allowNull: true,
  },
    qty: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
    schd_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};
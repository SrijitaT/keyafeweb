'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Categories)
      this.belongsTo(models.Type)
      this.belongsTo(models.Shape)
      this.belongsTo(models.Flavour)
      this.hasMany(models.Prod_Flavour_options);
    }
  }
  Product.init({
    title: DataTypes.STRING,
    desc: DataTypes.STRING,
    cat_id: DataTypes.INTEGER,
    type_id: DataTypes.INTEGER,
    unit_price: DataTypes.INTEGER,
    qty:DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    img_url: DataTypes.STRING,
    shape_id: DataTypes.INTEGER,
    original_flavour_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      desc: {
        type: Sequelize.STRING
      },
      cat_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"categories"
          },
          key: "id"
        },
        allowNull: false
      },
      qty:{
        type:Sequelize.INTEGER,
        defaultValue : 1
      },
      type_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"types"
          },
          key: "id"
        },
        allowNull: false
      },
      unit_price: {
        type: Sequelize.INTEGER
      },
      weight: {
        type: Sequelize.INTEGER
      },
      img_url: {
        type: Sequelize.STRING
      },
      shape_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"shapes"
          },
          key: "id"
        },
        allowNull: false
      },
      original_flavour_id: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"flavours"
          },
          key: "id"
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};
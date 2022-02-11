'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Carts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      prod_id: {
        type: Sequelize.INTEGER(11),
        foreignKey: true,
        references: {
          model: 'Products', // name of Target model
          key: 'id', // key in Target model that we're referencing
        }
      },
      user_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: 'Users', // name of Target model
          key: 'id', // key in Target model that we're referencing
      },
      allowNull:true
      },
      qty: {
        type: Sequelize.INTEGER
      },
      total_price: {
        type: Sequelize.INTEGER
      },
      schd_date: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        default: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        default: Sequelize.fn('now')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Carts');
  }
};
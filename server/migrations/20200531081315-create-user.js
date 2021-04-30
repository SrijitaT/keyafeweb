'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      pincode: {
        type: Sequelize.INTEGER
      },
      password: {
        type: Sequelize.STRING
      },
      country:{
        type: Sequelize.STRING(30),
        default:"India"
      },
      city:{
        type: Sequelize.STRING(30),
        default:"Kolkata"
      },
      state:{
        type: Sequelize.STRING(30),
        default:"West Bengal"
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
'use strict';
const Sequelize = require('sequelize');
const bcrypt = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    pincode: DataTypes.INTEGER,
    password: DataTypes.STRING
  }, {
      hooks: {
        async beforeCreate(user) {
          // Do other stuff
          //const user = this;
          const hash = await bcrypt.hash(user.dataValues.password, 10);
          //Replace the plain text password with the hash and then store it
          user.dataValues.password = hash;
          //Indicates we're done and moves on to the next middleware
          // next();
        }
      }
    });
  User.associate = function (models) {
    // associations can be defined here
  };
  User.prototype.isValidPassword = async function (password) {
    const user = this;
    //Hashes the password sent by the user for login and checks if the hashed password stored in the 
    //database matches the one sent. Returns true if it does else false.
    const compare = await bcrypt.compare(password, user.password);
    return compare;
  }
  return User;
};
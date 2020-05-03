// Models are the building blocks of your tables each model represents a database table where you define a model by putting the schema and giving it a name.
// The Schema is a set of attributes (table columns) and associations (table relations).

const Sequelize = require("sequelize");

module.exports = sequelize.define("Product", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING(300),
    img_url: Sequelize.STRING(300),
    price: Sequelize.INTEGER(11),
    category: Sequelize.STRING(50)
});
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('food_ordering', 'postgres', 'yourpassword', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
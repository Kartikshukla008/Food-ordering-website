const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const FoodItem = sequelize.define('FoodItem', {
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
});

module.exports = FoodItem;
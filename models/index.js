const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

const Vehicle = require('./Vehicle')(sequelize, Model, DataTypes)
const Review = require('./Review')(sequelize, Model, DataTypes)

Vehicle.hasMany(Review)
Review.belongsTo(Vehicle)

module.exports = {Vehicle, Review}

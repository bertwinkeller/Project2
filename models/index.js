const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

const Vehicle = require('./Vehicle.js')(Model, DataTypes, sequelize)
const Review = require('./Review.js')(Model, DataTypes, sequelize)
const User = require('./User.js')(Model, DataTypes, sequelize)

Vehicle.hasMany(Review)
Review.belongsTo(Vehicle)

User.hasMany(Review)
Review.belongsTo(Vehicle)

module.exports = {Vehicle, Review, User}

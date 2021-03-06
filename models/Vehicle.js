module.exports = (Model, DataTypes, sequelize) => {
  class Vehicle extends Model {}

  Vehicle.init({
    name: {type: DataTypes.STRING, allowNull: false},
    reservedFrom: {type: DataTypes.STRING},
    mpg: {type: DataTypes.INTEGER, allowNull: false},
    gasType: {type: DataTypes.STRING, allowNull: false},
    doors: {type: DataTypes.INTEGER, allowNull: false},
    seats: {type: DataTypes.INTEGER, allowNull: false},
    photoLink: {type: DataTypes.STRING, allowNull: false}
  }, {
    sequelize,
    modelName: 'vehicle'
  })

  return Vehicle
}
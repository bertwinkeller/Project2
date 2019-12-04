module.exports = (Model, DataTypes, sequelize) => {
  class User extends Model {}

  User.init({
    username: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    vehiclesRented: {type: DataTypes.STRING}
  }, {
    sequelize,
    modelName: 'user'
  })
  return User
}
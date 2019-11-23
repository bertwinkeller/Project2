module.exports = (Model, DataTypes, sequelize) => {
  class Review extends Model {}

  Review.init({
    name: {type: DataTypes.STRING, allowNull: false},
    rating: {type: DataTypes.INTEGER, allowNull: false},
    review: {type:DataTypes.STRING, allowNull: false}
  }, {
    sequelize,
    modelName: 'review'
  })

  return Review
}
module.exports = app => {
  // pass express app to other route files
  require('./vehicleRoutes.js')(app)

}

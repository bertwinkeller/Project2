module.exports = app => {
  // pass express app to other route files
  require('./vehicleRoutes.js')(app)
  require('./reviewRoutes.js')(app)
  require('./userRoutes.js')(app)
}

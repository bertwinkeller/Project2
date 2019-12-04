const { Vehicle, Review } = require('../models')
const { Op } = require('sequelize')

module.exports = app => {
  app.get('/vehicles', (req, res) => {
    Vehicle.findAll({ include: Review })
      .then(vehicle => res.json(vehicle))
      .catch(e => console.error(e))
  })

  // Get Multiple
  app.get('/multiple/vehicles/:id', (req,res) => {
    Vehicle.findAll({ where: {
      id: {
        [Op.or]: req.params.id.split(',')
      }
    }})
      .then(vehicle => res.json(vehicle))
      .catch(e => console.error(e))
  })

  app.post('/vehicles', (req, res) => {
    Vehicle.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  // Post Multiple
  app.post('/multiple/vehicles', (req, res) => {
    let vehicles = req.body
    vehicles.forEach(vehicle => {
      Vehicle.create(vehicle)
        .then(() => res.sendStatus(200))
        .catch(e => console.error(e))
    })
  })

  app.put('/vehicles/:id', (req, res) => {
    Vehicle.findOne({ where: { id: parseInt(req.params.id) } })
    //   .then(update some property,(rented?))
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  app.delete('/vehicles/:id', (req, res) => {
    Vehicle.findOne({ where: { id: parseInt(req.params.id) } })
      .then(vehicle => vehicle.destroy())
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

}
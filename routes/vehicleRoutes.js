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
    },
    include: Review
  })
      .then(vehicle => res.json(vehicle))
      .catch(e => console.error(e))
  })

  app.post('/vehicles', (req, res) => {
    Vehicle.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  app.put('/vehicles/:id', (req, res) => {
    Vehicle.update(
      {reservedFrom: req.body.reservedFrom},
      {where: { id: parseInt(req.params.id) } })
      .then(Vehicle => {
        res.send(Vehicle)
      })
      .catch(e => console.error(e))
  })

  app.delete('/vehicles/:id', (req, res) => {
    Vehicle.findOne({ where: { id: parseInt(req.params.id) } })
      .then(vehicle => vehicle.destroy())
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

}
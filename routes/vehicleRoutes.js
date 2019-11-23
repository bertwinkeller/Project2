const { Item } = require('../models')

module.exports = app => {
  app.get('/vehicles', (req, res) => {
    Vehicle.findAll()
      .then(vehicle => res.json(vehicle))
      .catch(e => console.error(e))
  })

  app.post('/vehicles', (req, res) => {
    Vehicle.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
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
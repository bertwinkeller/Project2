const { User } = require('../models')

module.exports = app => {
  app.get('/users', (req, res) => {
    User.findAll()
      .then(user => res.json(user))
      .catch(e => console.error(e))
  })

  app.get('/users/:username/:password', (req, res) => {
    User.findOne({where: {
      username: req.params.username,
      password: req.params.password
    }})
      .then(user => res.json(user))
      .catch(e => console.error(e))
  })

  app.post('/users', (req, res) => {
    User.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  app.put('/users/:id', (req, res) => {
    User.findOne({ where: { id: parseInt(req.params.id) } })
    //   .then(update some property,(rented?))
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  app.delete('/users/:id', (req, res) => {
    User.findOne({ where: { id: parseInt(req.params.id) } })
      .then(review => review.destroy())
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

}
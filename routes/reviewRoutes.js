const { Review } = require('../models')

module.exports = app => {
  app.get('/reviews', (req, res) => {
    Review.findAll()
      .then(review => res.json(review))
      .catch(e => console.error(e))
  })

  app.post('/reviews', (req, res) => {
    Review.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  app.put('/reviews/:id', (req, res) => {
    Review.findOne({ where: { id: parseInt(req.params.id) } })
    //   .then(update some property,(rented?))
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

  app.delete('/reviews/:id', (req, res) => {
    Review.findOne({ where: { id: parseInt(req.params.id) } })
      .then(review => review.destroy())
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })

}
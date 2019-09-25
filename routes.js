const express = require('express')
const routes = express.Router()
const noteController = require('./controllers/noteController')

// rotas de anotações

routes.get('/notes', noteController.index)
routes.get('/notes/:id', noteController.show)
routes.post('/notes', noteController.store)
routes.put('/notes/:id', noteController.update)
routes.delete('/notes/:id', noteController.destroy)


module.exports = routes
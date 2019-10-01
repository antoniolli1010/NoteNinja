const express = require('express')
const routes = express.Router()
const noteController = require('./controllers/noteController')
const categoryController = require('./controllers/categoryController')

// rotas de anotações

routes.get('/notes', noteController.index)
routes.get('/notes/:id', noteController.show)
routes.post('/notes', noteController.store)
routes.put('/notes/:id', noteController.update)
routes.delete('/notes/:id', noteController.destroy)

// rotas de categorias

routes.get('/categories', categoryController.index)
routes.get('/categories/:id', categoryController.show)
routes.post('/categories', categoryController.store)
routes.put('/categories/:id', categoryController.update)
routes.delete('/categories/:id', categoryController.destroy)



module.exports = routes
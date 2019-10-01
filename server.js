const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const PORT = 3000

const server = express()

server.use(express.json())

// Conexão com o banco
mongoose.set('useFindAndModify', false)
mongoose.set('useUnifiedTopology', true)
mongoose.connect('mongodb://192.168.99.100:27017/noteninja-db', { useNewUrlParser: true })
.then(res => {
  console.log("Mongo OK")  
}).catch(err => {
    console.log("Mongo error "+ err);
});

// Middlewares
server.use(function(err, req, res, next){
    res.send({ error: err.message })
})


server.use(routes)
server.listen(PORT)

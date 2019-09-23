const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const PORT = 3000

const server = express()
server.use(express.json())

mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://192.168.99.100:27017/noteninja-db', { useNewUrlParser: true },)


server.use(routes)
server.listen(PORT)

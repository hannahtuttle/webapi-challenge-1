const express = require('express')
const actionRouter = require('./data/helpers/actionRouter.js')

const server = express()
server.use(express.json())
server.use('/actions', actionRouter)

module.exports = server
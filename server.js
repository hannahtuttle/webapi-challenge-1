const express = require('express')
const actionRouter = require('./data/helpers/actionRouter.js')
const projectRouter = require('./data/helpers/projectRouter.js')

const server = express()
server.use(express.json())
server.use('/actions', actionRouter)
server.use('/projects', projectRouter)

module.exports = server
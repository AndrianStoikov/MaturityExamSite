const express = require('express')
const envConfig = require('./config/environment')
const debug = require('debug')('olimpiada:server')
const expressConfig = require('./config/express')

const app = express()

// Setup MongoDB connection
require('./config/database')(envConfig)

// Initialize passport
require('./config/passport')()

// Attach middleares, including passport
expressConfig.attachMiddleWares(app)

// Import server-routes.
require('./config/server-routes')(app)

app.listen(app.get('port'), () => console.log(`Express listening on ${app.get('port')}`))

module.exports = app;

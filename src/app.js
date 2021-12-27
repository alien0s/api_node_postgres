const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const index = require('./routes/index')
const itemRoute = require('./routes/itns.routes')

app.use(express.urlencoded({ extended:true}))
app.use(bodyParser.json())
app.use(express.json())
app.use(express.json({ type: 'application/vnd.api+json'}))
app.use(cors())

app.use(index)
app.use('/api/',itemRoute)

module.exports = app


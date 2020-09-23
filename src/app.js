'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config')

const app = express()
const router = express.Router()

//Conexao com banco de dados
mongoose.connect(config.connectionString, { useNewUrlParser: true,useUnifiedTopology: true })

//Models
const Product = require('./models/product')
const Customer = require('./models/customer')
const Order =  require('./models/order')

//Rotas
const indexRoute = require('./routes/index')
const productRoute = require('./routes/product')
const customerRoute = require('./routes/customer')
const orderRoute = require('./routes/order')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/', indexRoute)
app.use('/products', productRoute)
app.use('/customers', customerRoute)
app.use('/orders', orderRoute)

module.exports = app;
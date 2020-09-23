'use strict'

const controller = require('../controllers/customer-controller')
const express = require('express')
const router = express.Router();

router.post('/', controller.post)

module.exports = router
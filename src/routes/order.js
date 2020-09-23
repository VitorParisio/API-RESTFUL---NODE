'use strict'

const controller = require('../controllers/order-controller')
const express = require('express')
const router = express.Router();

router.get('/', controller.get)
router.post('/', controller.post)

module.exports = router
'use strict'

const controller = require('../controllers/product-controller')
const express = require('express')
const router = express.Router();

router.get('/', controller.get)

router.get('/admin/:id', controller.getById)

router.get('/:slug', controller.getBySlug)

router.get('/tags/:tag', controller.getByTag)

router.post('/', controller.post)

router.put('/:id', controller.put)

router.delete('/:id', controller.del)

module.exports = router
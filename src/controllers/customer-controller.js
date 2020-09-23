'use strict'

const repository = require('../repository/customer-repository')
const md5 = require('md5')

const emailService = require('../services/email')

exports.post = async (req, res, next)=>{
	try{
		await repository.create({
			name: req.body.name,
			email: req.body.email,
			password: md5(req.body.password + global.SALT_KEY)
		})

		emailService.send(req.body.email, "Bem-vindo ao app", global.EMAIL_TMPL.replace('{0}', req.body.name))
		res.status(201).send({
			message:"Cliente cadastrado com sucesso!"
		})
	}catch(e) {
		res.status(500).send({
			message: "Falha na requisição!"
		})
	}
}
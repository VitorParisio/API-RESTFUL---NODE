'use strict'

const repository = require('../repository/repository-product')

exports.get = async(req, res, next) => {
	try
	{
		const data = await repository.get()
		res.status(200).send(data)
	}catch (e){
		res.status(500).send({
			message: 'Falha na requisição!'
		})
	}
}

exports.getById = async(req, res, next) => {
	try
	{
		const data = await repository.getById(req.params.id)
		res.status(200).send(data)	
	}catch (e){
		res.status(500).send({
			message: 'Falha na requisição!'
		})
	}
}

exports.getBySlug = async (req, res, next) => {
	try{
		const data = await repository.getBySlug(req.params.slug)
		res.status(200).send(data)
	} catch (e){
		res.status(500).send({
			message: 'Falha na requisição!'
		})
	}

}

exports.getByTag = async (req, res, next) => {
	try{
		const data = await repository.getByTag(req.params.tag)
		res.status(200).send(data)
	}catch (e){
		res.status(500).send({
			message: 'Falha na requisição!'
		})
	}
}

exports.post = async (req, res, next)=>{
	try{
	await repository.create(req.body)
	res.status(201).send({
			message:"Produto cadastrado com sucesso!"
		})
	}catch(e){
		res.status(500).send({
			message:'Falha na requisição!'
		})
	}
}

exports.put = async (req, res, next)=>{
	try{
	await repository.update(req.params.id, req.body)
	res.status(200).send({
			message: 'Produto atualizado com sucesso!'
		})
	}catch(e){
		res.status(500).send({
			message: 'Falha na requisição!'
		})
	}
	
}


exports.del = async (req, res, next)=>{
	try{
		await repository.del(req.params.id)
	res.status(200).send({
			message: 'Produto deletado com sucesso!'
		})
	}catch(e){
		res.status(500).send({
			message: 'Falha na requisição!'
		})
	}

}
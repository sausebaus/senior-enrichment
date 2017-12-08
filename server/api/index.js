'use strict'
const apiRouter = require('express').Router()
const db = require('../db')
const students = require('../db/models/students')
const campuses = require('../db/models/campuses')


apiRouter.get('/students', (req, res, next) => {
	students.findAll()
	.then((students) => res.send(students))
	.catch(next)
	}
)

apiRouter.get('/students/:id', (req, res, next) => {
	var id = req.params.id;
	students.findAll(
		{include: [{model: campuses}],
		where: {
				id : id
			}
		}
	)
	.then((students) => res.send(students))
	.catch(next)
})

apiRouter.delete('/students/:id', (req, res, next) => {
	var id = req.params.id;
	students.destroy(
		{where: {
			id : id
		}}
	)
	.then(console.log("Delete successful"))
	.catch(next)
})


apiRouter.get('/campuses', (req, res, next) => {
	campuses.findAll()
	.then((campuses) => res.send(campuses))
	.catch(next)
	}
)


apiRouter.get('/campuses/:id', (req, res, next) => {
	var campusId = req.params.id;
	students.findAll({include: 
		[{model : campuses}],
		where: {
				campusId : campusId
			}
		}
	)
	.then((students) => res.send(students))
	.catch(next)
})

apiRouter.post('/addStudent', (req, res, next) => {
	students.create(
		req.body
	)
	.then((body) => res.send(body))
	.catch(next)
})

apiRouter.post('/addCampus', (req, res, next) => {
	campuses.create(
		req.body
	)
	.then((body) => res.send(body))
	.catch(next)
})



apiRouter.delete('/campuses/:id', (req, res, next) => {
	var id = req.params.id;
	campuses.destroy(
		{where: {
			id : id
		}}
	)
	.then(res.sendStatus(202))
	.catch(next)
})
// You can put all routes in this file; HOWEVER, this file should almost be like a table of contents for the routers you create

module.exports = apiRouter;
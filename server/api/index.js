'use strict'
const apiRouter = require('express').Router()
const db = require('../db')
const students = require('../db/models/students')
const campuses = require('../db/models/campuses')

// apiRouter.use('/students', require "./students");
// apiRouter.use('/campuses', require "./campuses")


apiRouter.get('/students', (req, res, next) => {
	students.findAll()
	.then((students) => res.send(students))
	.catch(next)
	}
)

apiRouter.get('/students/:id', (req, res, next) => {
	var id = req.params.id;
	students.findOne(
		{include: [{model: campuses}],
		where: {
				id : id
			}
		}
	)
	.then((student) => res.send(student))
	.catch(next)
})


apiRouter.delete('/students/:id', (req, res, next) => {
	var id = req.params.id;
	students.destroy(
		{where: {
			id : id
		}}
	)
	.then(res.sendStatus(202))
	.catch(next)
})


apiRouter.get('/campuses', (req, res, next) => {
	campuses.findAll()
	.then((campuses) => res.send(campuses))
	.catch(next)
	}
)

apiRouter.get('/singleCampus/:id', (req, res, next) => {
	var id = req.params.id;
	campuses.findOne({
		where: {
				id : id
			}
		}
	)
	.then((campus) => res.send(campus))
	.catch(next)
})




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
	.then(
		students.destroy({
			where :{
				campusId : null
			}
		})
	)
	.catch(next)
})


apiRouter.put('/students', (req, res, next) => {
	students.update(req.body, {
		where: {
			id : req.body.id
		},
		returning: true,
		plain: true
	})
	.spread((rows, student) => res.json(student))
	.catch(next)
})

apiRouter.put('/campuses', (req, res, next) => {
	campuses.update(req.body, {
		where: {
			id : req.body.id
		},
		returning: true,
		plain: true
	})
	.spread((rows, campus) => res.json(campus))
	.catch(next)
})
// You can put all routes in this file; HOWEVER, this file should almost be like a table of contents for the routers you create

module.exports = apiRouter;
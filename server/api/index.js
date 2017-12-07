'use strict'
const apiRouter = require('express').Router()
const db = require('../db')
const students = require('../db/models/students')
const campuses = require('../db/models/campuses')


// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
apiRouter.get('/hello', (req, res) => res.send({hello: 'world'}))


apiRouter.get('/students', (req, res, next) => {
	students.findAll()
	.then((students) => res.send(students))
	.catch(next)
	}
)

apiRouter.get('/campuses', (req, res, next) => {
	campuses.findAll()
	.then((campuses) => res.send(campuses))
	.catch(next)
	}
)

apiRouter.get('/campuses/:id', (req, res, next) => {
	var campusId = req.params.id;
	students.findAll(
		{where: {
				campusId : campusId
			}
		}
	)
	.then((students) => res.send(students))
	.catch(next)
})

apiRouter.get('/students/:id', (req, res, next) => {
	var id = req.params.id;
	students.findAll(
		{where: {
				id : id
			}
		}
	)
	.then((students) => res.send(students))
	.catch(next)
})
// You can put all routes in this file; HOWEVER, this file should almost be like a table of contents for the routers you create

module.exports = apiRouter;
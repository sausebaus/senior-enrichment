'use strict';

const db = require('../index');
const students = require('./students');
const campuses = require('./campuses');

students.belongsTo(campuses);
campuses.hasMany(students); 


module.exports = db, students, campuses;
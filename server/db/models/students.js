var db = require('../index');
var Sequelize = require('sequelize');

const student = db.define("student", {
    firstName : {
        type: Sequelize.STRING,
        allowNull: false

    },
    lastName : {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        validator: {
            isEmail: true
        }

    },
    gpa : {
        type: Sequelize.FLOAT,
        validator: {
            min: 0.0,
            max: 4.0
        }
    },
    fullName: {
        type: Sequelize.VIRTUAL,
        get() {
            return this.getDataValue("firstName") + " " + this.getDataValue("lastName")
        }
    }
})


module.exports = student
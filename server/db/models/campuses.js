var db = require('../index');
var Sequelize = require('sequelize');
var students = require('./students')

const campus = db.define("campus", {
    name : {
        type: Sequelize.STRING,
        allowNull: false
    },

    imgUrl : {
        type: Sequelize.STRING,
        defaultValue: 'testURL'
    },
    
    description : {
        type: Sequelize.TEXT
    }
})

campus.beforeDestroy((campusInstance) => {
    return students.destroy({
        where: {
            campusId : campusInstance.id
        }
    })
})

module.exports = campus;
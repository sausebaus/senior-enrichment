var db = require('../index');
var Sequelize = require('sequelize');

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

module.exports = campus;
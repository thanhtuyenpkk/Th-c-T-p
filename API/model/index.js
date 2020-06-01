var Sequelize = require('sequelize');
var db = {};

var sequelize = new Sequelize('xtheta','sa' , '123456a@', {
    host: '172.16.18.88',
    dialect: 'mysql'
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
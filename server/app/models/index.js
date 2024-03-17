const dbConfig = require('../config/db.config')
const Sequelize = require('sequelize')
const connex = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: 3306,
    operatorAliases: false
})
const db = {}
db.Sequelize = Sequelize
db.connex = connex
db.task = require('./task.model.js')(connex, Sequelize)
db.users = require('./user.model.js')(connex, Sequelize)
module.exports = db

const {DataTypes} = require('sequelize')
const user = require('./users')
const sequelize = require('../db')
const Todos=sequelize.define('todos',{
    continue:
    {
        type:DataTypes.STRING
    }
})

Todos.sync({})
module.exports={
    Todos
}
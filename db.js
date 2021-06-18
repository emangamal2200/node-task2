const {Sequelize}= require('sequelize')
 const sequlize = new sequelize('Todos', 'root', 'root', {
    host: '192.168.1.9',
    dialect:'mssql',
    port: 3000,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
  },
  });

 
module.exports=sequlize


const Sequelize = require('sequelize');
// const sequelize = new Sequelize('OneKey','root','gayatri',{
//     host:'localhost',
//     dialect:'mysql'
// });
const sequelize = new Sequelize('onekey', 'root', 'gayatri', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3000 });
   
module.exports = sequelize;





const Datatypes = require('sequelize');
const sequelize = require('../config/db');
const User = sequelize.define('users',{
    user_id:{
        type:Datatypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    username: {
        type: Datatypes.STRING(50),
        allowNull:false
    },
    password: {
        type: Datatypes.STRING(100),
        allowNull:false
    },
    role:{
        type:Datatypes.ENUM('admin','telemarketer','agent','product_owner'),
        allowNull:false
    }
});
const createUser = async ()=>{
    await User.sync({force:true})
    console.log('User table created')
}

module.exports = {User,createUser};
const Datatypes = require('sequelize');
const User = require('./userModel');
const sequelize = require('../config/db');
const Product = sequelize.define({
    product_id:{
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: Datatypes.STRING(100),
        allowNull:false
    },
    description:{
        type: Datatypes.TEXT,
        allowNull:true
    },
    owner_id:{
        type: Datatypes.INTEGER,
        allowNull: false,
        references: {
            model:User,
            key:'user_id'
        }
    }

});

const createProduct = async ()=>{
    await Product.sync({force:true})
    console.log('Products table created');
};

module.exports = {Product,createProduct};
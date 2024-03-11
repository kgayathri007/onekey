const Datatypes = require('sequelize');
const sequelize = require('../config/db');
const Product = require('./productModel');
const DynamicProperties = sequelize.define({
    property_id:{
        type: Datatypes.INTEGER,
        autoIncrement:true,
        primaryKey: true,
    },
    name:{
        type: Datatypes.STRING,
        allowNull: false
    },
    value_type: {
        type: Datatypes.ENUM('STRING','CHAR','TEXT','INTEGER','BIGINT','FLOAT','DOUBLE','DECIMAL','BOOLEAN','DATE','DATEONLY','ENUM','JSON','JSONB','ARRAY'),
        allowNull:false
    },
    value:{
        type: Datatypes.STRING(255),
        allowNull:false,
    },
    product_id:{
        type: Datatypes.INTEGER,
        allowNull:false,
        references:{
            model: Product,
            key: 'product_id'
        }
    }
});
const createDynamicProperties = async ()=>{
    await DynamicProperties.sync({force:true})
    console>log('Dynamic propertise table created')
};


module.exports = {DynamicProperties,createDynamicProperties};
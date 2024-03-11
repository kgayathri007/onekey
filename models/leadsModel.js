const Datatypes = require('sequelize');
const sequelize = require('../config/db');
const Product = require ('./productModel');
const Leads = sequelize.define({
    lead_id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    lead_info: {
        type: Datatypes.JSON,
        allowNull: true
    },
    product_id: {
        type: Datatypes.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'product_id'
        }

    }
});
const createLeads = async ()=>{
    await Leads.sync({force:true});
    console.log('Leads table created');
};

module.exports = {Leads,createLeads};
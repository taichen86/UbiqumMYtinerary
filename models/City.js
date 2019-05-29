
const mongoose = require('mongoose');
const schema = mongoose.Schema;


let citySchema = new schema({  
    name: String,
    country: String,
    description: String
})

const cityModel = mongoose.model( 'City', citySchema );

module.exports = cityModel;



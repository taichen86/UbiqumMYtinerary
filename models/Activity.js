const mongoose = require('mongoose');
const schema = mongoose.Schema;


let activitySchema = new schema({  
    name: String,
    city: String,
    imgURL: String
})

const activityModel = mongoose.model( 'Activity', activitySchema );

module.exports = activityModel;
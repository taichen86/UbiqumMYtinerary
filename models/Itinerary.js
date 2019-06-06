const mongoose = require('mongoose');
const schema = mongoose.Schema;

let itinerarySchema = new schema({
    title: String,
    image: String,
    rating: Number,
    duration: Number,
    price: Number,
    hashtag: Array,
    city: String
})

const itineraryModel = mongoose.model( 'itinerary', itinerarySchema );
module.exports = itineraryModel;
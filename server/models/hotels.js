const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for hotels
const HotelSchema = new Schema({
    name: String,
    rating: Number,
    recommended: Boolean,
    stars: Number,
    discount: Number,
    price: Number,
    amenities: [String],
    features: [String]
})

//create model for hotels
const Hotel = mongoose.model('hotel', HotelSchema);

module.exports = Hotel;
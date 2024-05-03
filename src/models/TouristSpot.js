const mongoose = require('mongoose');

 
const touristSpotSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    tourists_spot_name: {
        type: String,
        required: true
    },
    country_name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    short_description: {
        type: String,
        required: true
    },
    average_cost: {
        type: Number,
        required: true
    },
    seasonality: {
        type: String,
        required: true
    },
    travel_time: {
        type: String,
        required: true
    },
    total_visitors_per_year: {
        type: Number,
        required: true
    },
    user_email: {
        type: String,
        required: true
    },
    user_name: {
        type: String,
        required: true
    }
});

 
const TouristSpot = mongoose.model('TouristSpot', touristSpotSchema);
 
module.exports = TouristSpot;

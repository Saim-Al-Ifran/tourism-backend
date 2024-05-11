 
const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true 
  },
  image: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    required: true
  },
  tourist_spot:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TouristSpot',
  }
});

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;

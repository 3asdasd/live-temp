const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    name: String,
    location: String,
    propertyType: String,
    amenities: [String],
    images: [String]
});

module.exports = mongoose.model('Property', PropertySchema);
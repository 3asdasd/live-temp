const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    name: String,
    location: {
        city: String,
        street: String
    },
    property_type: String,
    amenities: [String],
    images: [String]
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
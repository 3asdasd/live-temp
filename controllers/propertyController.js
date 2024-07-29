const Property = require('../models/Property');

// Get all cities
exports.getAllCities = async (req, res) => {
    try {
        const cities = await Property.distinct('location.city');
        res.send(cities);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Get all streets in a city
exports.getAllStreets = async (req, res) => {
    const city = req.query.city;
    try {
        const streets = await Property.distinct('location.street', { 'location.city': city });
        res.send(streets);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Create a property
exports.createProperty = async (req, res) => {
    try {
        const property = new Property(req.body);
        await property.save();
        res.send(property);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Get properties
exports.getProperties = async (req, res) => {
    try {
        const properties = await Property.find(req.query);
        res.send(properties);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Update a property
exports.updateProperty = async (req, res) => {
    try {
        const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(property);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Delete a property
exports.deleteProperty = async (req, res) => {
    try {
        await Property.findByIdAndDelete(req.params.id);
        res.send({ message: 'Property deleted' });
    } catch (err) {
        res.status(500).send(err);
    }
};
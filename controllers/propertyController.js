const Property = require('../models/Property');

const searchProperties = async (req, res) => {
    const query = req.query.q;
    try {
        const properties = await Property.find({
            $or: [
                { location: new RegExp(query, 'i') },
                { name: new RegExp(query, 'i') }
            ]
        });
        res.json(properties);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while searching' });
    }
};

const checkStayDuration = (req, res) => {
    const days = parseInt(req.query.days);
    if (days >= 30) {
        res.json({ valid: true });
    } else {
        res.json({ valid: false });
    }
};

const filterProperties = async (req, res) => {
    const { type, amenities } = req.query;
    let filter = {};
    if (type) {
        filter.propertyType = type;
    }
    if (amenities) {
        filter.amenities = { $all: amenities.split(',') };
    }
    try {
        const properties = await Property.find(filter);
        res.json(properties);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching properties' });
    }
};

const getPropertyDetails = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        res.json(property);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching property details' });
    }
};

const createProperty = async (req, res) => {
    const { name, location, propertyType, amenities, images } = req.body;
    try {
        const newProperty = new Property({
            name,
            location,
            propertyType,
            amenities,
            images
        });
        await newProperty.save();
        res.status(201).json(newProperty);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the property' });
    }
};

module.exports = {
    searchProperties,
    checkStayDuration,
    filterProperties,
    getPropertyDetails,
    createProperty
};
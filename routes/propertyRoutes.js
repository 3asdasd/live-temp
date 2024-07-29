const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');

router.get('/search', propertyController.searchProperties);
router.get('/stay-duration', propertyController.checkStayDuration);
router.get('/properties', propertyController.filterProperties);
router.get('/property/:id', propertyController.getPropertyDetails);
router.post('/property', propertyController.createProperty);  // New route for creating a property

module.exports = router;
const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');

router.get('/cities', propertyController.getAllCities);
router.get('/streets', propertyController.getAllStreets);
router.post('/properties', propertyController.createProperty);
router.get('/properties', propertyController.getProperties);
router.put('/properties/:id', propertyController.updateProperty);
router.delete('/properties/:id', propertyController.deleteProperty);

module.exports = router;
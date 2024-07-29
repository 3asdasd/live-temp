const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const propertyRoutes = require('./routes/propertyRoutes');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/hotels')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

app.use('/api', propertyRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
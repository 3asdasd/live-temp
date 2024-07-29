const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const propertyRoutes = require('./routes/propertyRoutes');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors()); 

const db = require('./config/db');
db.connect();

app.use('/api', propertyRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
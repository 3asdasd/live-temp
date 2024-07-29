const mongoose = require('mongoose');
require('dotenv').config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }

    mongoose.connection.on('disconnected', () => {
        console.log('MongoDB disconnected. Trying to reconnect...');
        connect();
    });
};

module.exports = { connect };
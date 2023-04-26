const mongoose = require('mongoose');

// MongoDB connection URL
const mongoDBUrl = 'mongodb://localhost:27017/goer';

mongoose.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Event handler for successful connection
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Event handler for connection error
db.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

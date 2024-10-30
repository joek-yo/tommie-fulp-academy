// server.js
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./backend/routes/authRoutes'); // Ensure correct path
require('dotenv').config(); // Ensure dotenv is loaded

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection failed:', err));

// Use the auth routes
app.use('/api/auth', authRoutes); // Ensure the prefix is correct

// Sample route
app.get('/', (req, res) => {
  res.send('Welcome to Tommie Fulp Adventist Academy API');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

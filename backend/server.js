// server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser'); // Import body-parser
const authRoutes = require('./routes/auth'); // Import authentication routes

dotenv.config(); // Ensure dotenv is loaded

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies
app.use(express.json()); // Additional middleware to parse JSON bodies
app.use('/api/auth', authRoutes); // Authentication routes

// Contact Form Submission Endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Here, you can implement functionality to store this information or send an email
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  res.status(200).json({ message: 'Message received' });
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection failed:', err));

// Sample route
app.get('/', (req, res) => {
  res.send('Welcome to Tommie Fulp Adventist Academy API');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

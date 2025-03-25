const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const apiRoutes = require('./routes/api');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
app.use('/api', apiRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to CodeByte API' ,
    version: '1.0.0',
    authors: [ 'Tejas Firange' , 'Omkar Gaikwad' ,  'Atharv Dhandale' , 'Sairaj Ekbote' , 'Aradhy Jadhav' ],
    github : 'https://github.com/tejasfirange/CodeByte',
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 